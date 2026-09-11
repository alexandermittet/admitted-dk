# admitted.dk — notes for future work

## Site structure
- Main site is a React 18 + Vite + Tailwind + Relume UI app (`src/`), routed with react-router-dom. Only `/` is currently wired up in `src/App.jsx`.
- `/ml` is a separate, static-HTML micro-blog, NOT part of the React app: `public/ml/index.html` (listing page) plus one file per post (e.g. `public/ml/regularization.html`, `public/ml/optimizers.html`). Each post is fully self-contained — inline `<style>` and `<script>`, hand-rolled SVG interactive figures, no build step. Vite copies `public/` verbatim into `dist/` on build, so these files are served as-is in production.
- Top nav link to `/ml` ("Machine Learning Notes") lives in `src/admitteddk/shared/components/Navbar7.jsx`, shared across home/portfolio/contact pages.

## Title font: Concielian Classic Condensed
- Font file: `public/concclassiccond.ttf` (Iconian Fonts, "Concielian Classic Condensed"). Declared via `@font-face` as `font-family: "Concielian Classic Cond"`.
- Convention: this font is for **titles only** — the `<h1>` of each `/ml` post and the `.card-title` on the `/ml` index listing. Body copy, `h2`/`h3` section headings, and all other UI chrome stay on "Source Serif 4" / system-ui as before. Don't apply it more broadly than that.
- When adding a new `/ml/*.html` post, copy the same `@font-face` block into its `<style>` and apply the font to that post's `h1` only (see `regularization.html` / `optimizers.html` for the pattern).

## `/ml` index card layout (public/ml/index.html)
The post thumbnail cards are centered both horizontally and vertically on the page (header top, footer bottom, cards vertically centered in the remaining space via the `.stage` flex wrapper), and arranged into a shape based on how many posts currently exist. The `.cards` div's class must be updated by hand whenever a post is added or removed:
- 1 post → no extra class needed, default flex centers a single card.
- 2 posts → `class="cards count-2"` (already in place) — side by side.
- 3 posts → `class="cards count-3"` — first `<a class="card">` becomes the apex (centered on its own row), the next two sit side by side below it, forming a triangle.
- 4 posts → `class="cards count-4"` — 2×2 grid, one card per corner of a square.
- Below 680px viewport width, all counts collapse to a single centered column (media query already handles this).

When adding a new post: add its `<a class="card">` block to `public/ml/index.html` and bump the `.cards` div's class to match the new total count.

## Home page projects (ProjectsCarousel)
`src/admitteddk/home/components/ProjectsCarousel.jsx` lists three of Alexander's projects. Their blurbs there are accurate as of this writing; don't let an agent guess/invent new ones from the name alone. What they actually are:
- **catscribe** (`https://catscribe.admitted.dk`) — transcribes audio to text with timestamps, in 72 languages.
- **specseek** (`https://specseek.admitted.dk`) — ranks items from a spreadsheet (xlsx) catalog against a buyer's exact criteria. Built for companies with huge catalogs of possible purchases who need something matching specific specs, e.g. a data center that needs a given amount of SSD storage meeting particular spec constraints.
- **catlog** (`https://catlog.admitted.dk`) — meeting summarizer and note-taker. Record a meeting and it handles the summary and notes automatically.

## GitHub issues workflow
When fanning out GitHub issues to parallel subagents, group issues that touch the same file(s) into one agent/worktree (don't split them — they'll conflict on merge). Issues #7–#10 all touched `public/ml/optimizers.html` and were deliberately handled by a single agent in sequence for this reason.
