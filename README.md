# Beehive Communication Club — React site

The static HTML prototype rebuilt as a Vite + React + TypeScript single-page
application. Designs, layout, copy and CSS are unchanged from the prototype —
the markup was ported class-for-class.

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server with hot reload                    |
| `npm run build`   | Type-check and produce a production `dist/`   |
| `npm run preview` | Serve the production build locally            |

## Layout

```
index.html            Vite entry — fonts, hero preload, #root
src/main.tsx          React root + global CSS
src/App.tsx           Routes; every page but Home is lazy-loaded
src/components/       Layout chrome (nav, footer, util bar) and shared blocks
src/pages/            One component per route
src/data/             Page content, separated from markup
src/styles/           style.css and home.css, copied verbatim from the prototype
legacy/               The original HTML prototype, kept for reference
```

## Routes

`/` · `/about` · `/services` · `/gallery` · `/blog` · `/contact` ·
`/home-option-a` (earlier homepage direction, kept for comparison) · `*` → 404 page.

## Load-time notes

- Home ships in the entry bundle; other routes are separate chunks fetched on
  navigation. React and the router sit in their own chunk so app edits don't
  invalidate them in the browser cache.
- The homepage hero image is preloaded in `index.html` as the LCP element; every
  other image is `loading="lazy"`.
- Fonts are preconnected and preloaded, and the image host is preconnected.
- The gallery filter and mobile menu are React state — no DOM class juggling.

## Deploying

The build output is a static `dist/`. Because routing is client-side, the host
must serve `index.html` for unknown paths. `public/_redirects` (Netlify) and
`vercel.json` (Vercel) are included; for Nginx use `try_files $uri /index.html`.

## Before launch

- The contact form in `src/components/EnquiryForm.tsx` validates and collects
  input but has no endpoint yet — wire `onSubmit` to the enquiry API.
- The blog "Read more" links and social links are still `#` placeholders.
- Images are still hot-linked from `beehivecommunicationclub.com`. Move them
  into `public/` and serve locally for a faster, more reliable load.
- The yellow "Website revamp" approval strip is rendered by
  `src/components/Layout.tsx`; delete it when the design is signed off.
