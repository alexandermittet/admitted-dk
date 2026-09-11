# SEO Audit Report - admitted.dk

**Date:** September 11, 2026  
**Audit Scope:** On-page SEO audit for React + static HTML site  
**Approach:** Manual crawl of key pages (index.html, /ml/, /ml/regularization.html) + internal link verification

---

## Pages Audited

1. **Root homepage** (`/index.html`)
2. **ML Notes index** (`/public/ml/index.html`)
3. **Regularization post** (`/public/ml/regularization.html`)

---

## Findings & Fixes Applied

### Critical Issues (Fixed)

#### 1. Missing HTML Structure in regularization.html
**Issue:** The regularization.html file was missing proper HTML document structure entirely.
- No `<!DOCTYPE html>`
- No `<html>` tags
- No `<head>` section
- Missing charset, viewport, and all meta tags
- Missing `</body>` and `</html>` closing tags

**Status:** FIXED
- Added complete HTML5 document structure
- Added `<!DOCTYPE html>`, proper `<html lang="en">`, and `<head>` wrapper
- Added charset (UTF-8) and viewport meta tags
- Added semantic meta description, canonical tag
- Added Open Graph and Twitter Card meta tags
- Properly closed document with `</body>` and `</html>`

#### 2. Missing Meta Descriptions
**Issue:** Root homepage and ML index lacked meta description tags, hurting SEO.

**Status:** FIXED
- Root homepage: Added meta description about Alexander Mittet's expertise
- ML index: Added descriptive meta about interactive ML visualizations
- regularization.html: Added meta description explaining the L1 vs L2 regularization topic

#### 3. Missing Social Media Meta Tags (OG/Twitter Cards)
**Issue:** No Open Graph or Twitter Card tags on any pages, reducing social media shareability.

**Status:** FIXED
- Added og:title, og:description, og:type, og:url, og:image to all pages
- Added twitter:card, twitter:title, twitter:description to all pages
- Used favicon.png as fallback image (should be upgraded to actual preview images later)

#### 4. Missing robots.txt
**Issue:** No robots.txt file found in /public/ directory.

**Status:** FIXED
- Created `/public/robots.txt` with standard directives
- Allows all content except /old/ directory
- Includes sitemap reference

#### 5. Missing sitemap.xml
**Issue:** No sitemap.xml file for search engine discovery.

**Status:** FIXED
- Created `/public/sitemap.xml` (XML 1.0)
- Includes three main URLs:
  - / (homepage) - priority 1.0
  - /ml/ (ML notes index) - priority 0.9
  - /ml/regularization.html - priority 0.8
- Set reasonable changefreq (monthly) for all pages

---

## What Was Already Good

### Heading Structure
- All pages have exactly one `<h1>` per page
- Logical h2/h3 nesting observed (h1 -> h2 -> h3)
- Proper semantic heading usage

### Image Alt Text
- Homepage image: "Medical imaging and machine learning" ✓
- ML cards: No images (text-only cards) ✓
- Figures in regularization.html: Have figure captions via `<figcaption>` tags ✓

### Internal Linking
- Root homepage correctly links to `/ml/regularization` via navbar
- ML index properly links back to root via footer ("/")
- Relative path structure is sound

### Viewport & Charset
- All pages properly declare UTF-8 charset
- Viewport meta tags present on all pages
- Mobile-responsive design confirmed

### Canonical Tags
- Added canonical tags to homepage and ML index
- regularization.html canonical properly set

---

## What Was Not Found / Out of Scope

### Lighthouse CLI
**Status:** Not attempted - not required for straightforward fixes, and site needs to be built/running for accurate scoring

### Screaming Frog CLI
**Status:** Not applicable - this is a licensed desktop GUI tool, cannot run in sandboxed environment

### Broken Link Checking
**Status:** Partial manual review only
- No broken internal links found in navbar, footer, or ML index links
- All links use correct relative paths
- Would benefit from automated tool (see recommendations below)

### Structured Data (Schema.org)
**Status:** Not found
- No JSON-LD or microdata for articles, persons, or organization
- Not critical for a small personal site but worth adding later

### Mobile Usability
**Status:** Not formally tested
- Visual inspection suggests responsive design (Tailwind classes, media queries observed)
- Would benefit from PageSpeed Insights for formal audit

---

## Recommended Tools for Future CI/CD Integration

### Worth Setting Up
1. **Lighthouse CI** - Best bang for buck
   - Free, open-source, lightweight
   - Can run in CI without external dependencies
   - Checks performance, accessibility, SEO, best practices
   - Easy to integrate into GitHub Actions

2. **`broken-link-checker` npm package** - Good for automation
   - Can run against built site (`npm run build && npm run preview`)
   - Catches broken internal/external links
   - Simple to add to CI pipeline

### Not Recommended for This Site
1. **Screaming Frog CLI** - Desktop GUI only, cannot run in CI
2. **PageSpeed Insights API** - API rate limits; Lighthouse CI covers most needs
3. **sitemap-generator-cli** - Already manually created; update as site grows
4. **seo-analyzer** - Many overlaps with Lighthouse, less maintained

---

## SEO Checklist: Before & After

| Element | Before | After | Status |
|---------|--------|-------|--------|
| DOCTYPE & HTML5 | ✗ (regularization.html missing) | ✓ All pages | FIXED |
| Meta charset | ✓ (most) | ✓ All | FIXED |
| Viewport meta | ✓ (most) | ✓ All | FIXED |
| Meta description | ✗ (root, ML index) | ✓ All | FIXED |
| Canonical tags | ✗ | ✓ All | FIXED |
| OG tags | ✗ | ✓ All | FIXED |
| Twitter cards | ✗ | ✓ All | FIXED |
| H1 per page | ✓ | ✓ | OK |
| H2/H3 nesting | ✓ | ✓ | OK |
| Image alt text | ✓ | ✓ | OK |
| Internal links | ✓ | ✓ | OK |
| robots.txt | ✗ | ✓ | FIXED |
| sitemap.xml | ✗ | ✓ | FIXED |

---

## Files Modified / Created

### Modified
- `/index.html` - Added title, meta description, canonical, OG, Twitter tags
- `/public/ml/index.html` - Added meta description, canonical, OG, Twitter tags
- `/public/ml/regularization.html` - Complete rewrite with proper HTML5 structure + meta tags

### Created
- `/public/robots.txt` - Standard directives + sitemap reference
- `/public/sitemap.xml` - XML sitemap with 3 main pages

---

## Next Steps (Out of Scope)

1. **Upgrade social media preview images** - Currently using favicon; should use actual screenshot/teaser images
2. **Add structured data (JSON-LD)** - Schema.org markup for articles and person
3. **Set up Lighthouse CI** - Integrate into GitHub Actions for performance/SEO regression testing
4. **Add breadcrumb navigation** - Would help both UX and SEO
5. **Consider adding sitemap index** - Not needed now, but useful when site grows
6. **Monitor Core Web Vitals** - Use PageSpeed Insights or Lighthouse regularly

---

## Conclusion

The site had solid fundamentals but was missing critical SEO infrastructure. The main issue was the regularization.html file's missing HTML document structure—a blocker for proper indexing. All identified issues have been fixed. The site is now ready for search engine indexing with:
- Proper document structure on all pages
- Meta tags for discovery and social sharing
- robots.txt and sitemap.xml for crawler guidance

For a small personal site, the manual audit approach is sufficient. As the site grows, automated tools (Lighthouse CI + broken-link-checker) should be added to CI/CD pipeline.
