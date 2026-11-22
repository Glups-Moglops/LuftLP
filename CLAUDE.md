# Luft landing page

React 19 + Vite + TypeScript, `motion` for animation, plain CSS (no Tailwind). Deployed on Vercel.
Design source: Figma file `G2GHiowwvDAZzD8K3CnCy8`, desktop node `1419:11140` (1920px), mobile node `1419:10940` (393px).

## Layout rules
- Write sizes as `calc(N * var(--px))`, N in design pixels. Phones use the 393px frame, screens ≥ 1100px use the 1920px frame.
- Absolute pieces: `.a` + `at(mobileBox, desktopBox)`; centred floating pieces: `<Float pos={centre(...)}>`.
- `.dsk` / `.mob` show a piece on desktop / phone only.
- Each section owns its CSS (`sections/x.css`); shared CSS sits next to its component. Keep selectors scoped (`.steps + .dots`, not `.dots`) so file import order never matters.

## Checks before finishing
- `npm run build` (typecheck + build) and `npm run lint` must pass.
- Section heights should match Figma: desktop page is 10,539px tall at 1920px, phone page is 7,587px at 393px.
- The dev preview does not fire `resize`: reload the page after changing the viewport size.

## Known gaps
- Footer signup needs `VITE_SIGNUP_URL`; without it the form says sign-up isn't connected.
- Mobile dashboard carousel has 2 tiles; the design has 3 (the cloudy/stormy banners are clipped in Figma and were never exported).
- `face-a/b/c.svg` are ~900KB together; run them through svgo.
- No `og:image` yet.
