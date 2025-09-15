# Nextra Docs Site

This folder contains a Nextra (Next.js) docs site that restructures the Word-exported whitepaper into clean MDX pages with a left sidebar.

Quick start

- Install: `npm i`
- Dev: `npm run dev` → http://localhost:3000
- Build: `npm run build && npm start`

Content

- Pages live under `pages/` as `.mdx` files.
- Sidebar is defined by `pages/_meta.json`.
- Images should be placed in `public/whitepaper/` and referenced as `/whitepaper/<file>`.

