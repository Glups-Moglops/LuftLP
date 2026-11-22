# Luft landing page

React + Vite + TypeScript, animations with [`motion`](https://motion.dev).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Deploy on Vercel
Import the repo in Vercel; it detects Vite (build `npm run build`, output `dist`).
Optional env var: `VITE_SIGNUP_URL` (see `.env.example`).

## Project layout
```
src/
  App.tsx            page order only
  main.tsx           fonts, global css, sets --vw
  sections/          one file + one .css per page section (Hero, Problem, SelfCare, How, ...)
  components/        shared pieces (Reveal, Float, Cloud, Rail, Marquee, Logo, Chips, nav/)
  lib/               layout.ts (img, at, centre) and motion.ts (ease)
  styles/            base.css (tokens, reset, placement helpers), buttons.css, motion.css
public/img/          every image used by the page
```

## How the layout scales
All sizes are written in design pixels × `--px` (see top of `src/index.css`):
phones use the 393px Figma frame, screens ≥ 1100px use the 1920px frame scaled to the viewport width.
Animations respect `prefers-reduced-motion`.
