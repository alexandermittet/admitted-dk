# Security Audit Report

**Date:** 2026-09-11  
**Scope:** admitted.dk personal site (React 18 + Vite + Tailwind + Netlify/Vercel deployment)  
**Auditor:** Claude (Automated Security Review)

---

## Executive Summary

This security audit covered dependency vulnerabilities, secrets management, client-side security, third-party resource hygiene, and deployment security headers. The codebase is generally well-secured with a few actionable improvements needed.

**Key Findings:**
- 22 npm audit vulnerabilities identified; 18 fixed via `npm audit fix`
- No XSS vulnerabilities found in React components or inline scripts
- All external links properly secured with `rel="noopener noreferrer"`
- Third-party resources (Google Fonts) loaded over HTTPS
- Security headers not configured (flagged for evaluation)

---

## 1. Dependency Vulnerabilities

### What was checked
Ran `npm audit` to identify known vulnerabilities in direct and transitive dependencies.

### Findings

**Fixed (via `npm audit fix`):**
- 18 vulnerabilities automatically patched in npm's bundled dependencies and transitive packages
- Includes fixes for: @babel/core, browserslist, postcss, postcss-selector-parser, picomatch, minimatch, nanoid, vite, and others

**Remaining (Unfixed - Breaking Changes):**

| Package | Severity | Issue | Action Taken |
|---------|----------|-------|--------------|
| react-router-dom | Moderate | Open redirect via backslash in Link; arbitrary constructor injection in SSR | Flagged - requires major version bump |
| sharp | High | Inherited vulnerabilities in libvips/libheif | Flagged - requires major version bump (0.34.5 → 0.35.4) |
| npm bundled deps | High/Critical | tar, minimatch, ip-address, sigstore, etc. | Cannot be fixed without npm upgrade |

### Recommendation
- **Do not apply `npm audit fix --force`** at this time, as sharp and react-router-dom require major version upgrades
- Before upgrading sharp or react-router-dom: test the build, check for API changes, verify all image optimization and routing still works
- These vulnerabilities are in dev dependencies (sharp) or frontend routing (react-router-dom used at runtime), not in production data flow
- Consider upgrading in a separate PR with comprehensive testing

**Severity:** MEDIUM (dev deps; runtime router has controls)

---

## 2. Secrets Management

### What was checked
- Searched repo for hardcoded API keys, tokens, passwords
- Inspected `.env` file handling and .gitignore
- Reviewed config files: vercel.json, netlify.toml

### Findings

**Clean:**
- No hardcoded secrets, API keys, or tokens found in tracked files
- Email stored in `src/links.config.js` is public contact (alex@admitted.dk)
- Social links are public profiles (Facebook, GitHub, LinkedIn, etc.)

**Missing .env Protection:**
- `.gitignore` does not explicitly include `.env*` files
- Current state: no .env files in repo, so no immediate risk
- Risk mitigation: recommend adding `.env*` to .gitignore for future safety

### Recommendation
Update `.gitignore` to include `.env*` pattern.

**Severity:** LOW (no current secrets at risk; preventive)

---

## 3. Client-Side Security (XSS Prevention)

### What was checked
- React components for `dangerouslySetInnerHTML`, `innerHTML` usage
- Inline scripts in `/public/ml/*.html` for unsafe HTML construction
- User input handling (forms)

### Findings

**React Components:**
- No use of `dangerouslySetInnerHTML` found
- No use of `eval()` or Function constructor
- Text content properly set via `textContent` or React JSX children
- External links use plain `href` props

**Inline Scripts (public/ml/regularization.html):**
- `innerHTML` used safely in two contexts:
  1. **Line 689, 843, 908, 1094, 1125:** Clearing SVG content before redrawing (`svg.innerHTML = ''`) — safe, no injection vector
  2. **Lines 724-726:** Building coordinate display with `fmtCoord()` — safe because values are numeric (`.toFixed()`) and can't contain malicious HTML
- All other DOM manipulation uses `svgEl()` utility (wraps `createElementNS`) — secure
- No unsanitized user input in scripts

**Forms:**
- Contact page (Contact15.jsx) displays contact info only; no form submission handling visible
- No custom input validation to audit

### Recommendation
**None required.** XSS posture is strong. Continue using textContent/createElement for dynamic content.

**Severity:** LOW (no XSS vulnerabilities found)

---

## 4. Third-Party Script & Link Hygiene

### What was checked
- External links with `target="_blank"` for `rel="noopener noreferrer"`
- CDN/external script loading (source, HTTPS)
- Font loading security

### Findings

**External Links:**
- All 14 links with `target="_blank"` properly include `rel="noopener noreferrer"` ✓
- Verified in: src/admitteddk/home/components/Timeline18.jsx (links to LinkedIn posts, GitHub, catscribe project)
- Social links in footer (src/admitteddk/shared/components/Footer15.jsx) don't use `target="_blank"`, so rel not needed (open in same window)

**External Resources:**
- **Fonts:** Google Fonts (Montserrat, Karla) loaded via HTTPS
  - `https://fonts.googleapis.com` + `https://fonts.gstatic.com`
  - Proper `preconnect` and `crossorigin` attributes
  - Standard & trusted CDN ✓
- **Icons:** react-icons (npm package, local)
- **UI Library:** @relume_io (npm package, local)
- **No external JavaScript** from untrusted sources

### Recommendation
**None required.** All external resources properly secured.

**Severity:** LOW (well-configured)

---

## 5. Security Headers

### What was checked
- `vercel.json` for headers configuration
- `netlify.toml` for security headers
- `public/_headers` (Netlify) or equivalent

### Findings

**Current State:**
- No security headers configured
- `vercel.json`: only has rewrites and github settings
- `netlify.toml`: only has redirects
- `public/_redirects`: only has SPA redirect rule

**Missing Headers:**
- **Content-Security-Policy (CSP):** Not set
- **X-Frame-Options:** Not set
- **X-Content-Type-Options:** Not set
- **Referrer-Policy:** Not set
- **Strict-Transport-Security (HSTS):** Not set (though Vercel/Netlify may apply defaults)

### Recommendation

**Suggested Configuration for Netlify (_headers file):**
```
/
  Content-Security-Policy: default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; img-src 'self' data:; frame-ancestors 'none'
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**Implementation Notes:**
- CSP allows Google Fonts (required for site styling)
- CSP allows unsafe-inline for styles (due to Tailwind's dynamic styles)
- Script-src strict to 'self' only (no inline scripts in main app)
- Frame-ancestors 'none' prevents clickjacking
- X-Content-Type-Options prevents MIME type sniffing

**Risk Caveat:**
A misconfigured CSP can break the site. If adding headers, test thoroughly (fonts, styling, React app functionality must work in all browsers).

**Conservative Alternative:**
- Skip headers for now and handle via platform default settings
- Revisit after broader testing

**Severity:** MEDIUM (defense-in-depth; current setup relies on platform defaults)

---

## 6. Deployment Configuration Review

### vercel.json
- Minimal & clean
- `"cleanUrls": true` ✓ (helps prevent directory traversal confusion)
- `"rewrites"` properly configured for SPA routing
- `"github.silent": true` — disables GitHub check runs (OK for personal site)

### netlify.toml
- Redirect rule correctly routes all paths to index.html ✓
- No headers, redirects rules, or environment variable leaks

### .gitignore
- Excludes node_modules, dist, .vercel, .vscode, etc. ✓
- **Recommendation:** Add `.env*` to explicitly protect environment files

---

## Summary Table

| Check | Status | Finding | Severity |
|-------|--------|---------|----------|
| npm audit | ⚠️ Partial | 22 vulns; 18 fixed; 4 unfixed (major version bumps needed) | MEDIUM |
| Secrets | ✓ Pass | No secrets found; .env* recommended in .gitignore | LOW |
| XSS (React) | ✓ Pass | No dangerouslySetInnerHTML or unsafe patterns | LOW |
| XSS (HTML/JS) | ✓ Pass | innerHTML used safely with numeric data only | LOW |
| External Links | ✓ Pass | All target="_blank" links have rel="noopener noreferrer" | LOW |
| Third-party Scripts | ✓ Pass | Google Fonts over HTTPS with preconnect | LOW |
| Security Headers | ⚠️ Missing | No CSP, X-Frame-Options, etc. configured | MEDIUM |
| Deployment Config | ✓ Pass | Clean, no secrets exposed | LOW |

---

## Actions Taken

1. **npm audit fix** — Automatically fixed 18 vulnerabilities in transitive dependencies
2. No other changes made to avoid breaking functionality

## Actions Flagged (Requires Owner Decision)

1. **npm Dependencies:** Evaluate and test major version upgrades for react-router-dom and sharp
2. **.gitignore:** Add `.env*` pattern (preventive, no current risk)
3. **Security Headers:** Consider adding security headers via Netlify `_headers` file (requires testing to avoid breakage)

---

## Conclusion

The admitted.dk codebase is well-secured from an application security perspective. XSS, secrets, and third-party resource risks are minimal. Recommended next steps are:

1. Add `.env*` to `.gitignore` (quick, safe)
2. Plan upgrades for react-router-dom and sharp (requires testing)
3. Optionally add security headers after confirming zero breakage

All findings are documented for the repo owner's review and decision.
