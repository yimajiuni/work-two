# Site themes (Service)

Theme meta (`id` / `shell` / `motion` / `chrome` / `uiChrome` / `structure`) lives **in the Layout files**,
next to section classes and `*ServiceChrome`.

## Where to edit (2 places per theme)

| Theme | Layout (meta + Tailwind class strings) | `index.css` |
|-------|----------------------------------------|-------------|
| Pink | [`ServicePinkLayout.jsx`](../components/ServicePinkLayout.jsx) (`pinkTheme`, `classes`, `pinkServiceChrome`, `uiChrome`) | `[data-theme="pink"]` |
| Beige | [`ServiceBeigeLayout.jsx`](../components/ServiceBeigeLayout.jsx) (`beigeTheme`, `classes`, `beigeServiceChrome`, `uiChrome`) | `[data-theme="beige"]` (+ `theme-beige-*`) |
| Orange | [`ServiceBeigeLayout.jsx`](../components/ServiceBeigeLayout.jsx) (`orangeTheme`, shares beige-v1 layout) | `[data-theme="orange"]` |

Shared widgets (`LanguageSelector`, `ThemeSelector`, `ProjectQuote`, `NextJsReport` pink fills) read `theme.uiChrome`.
Modal blues use `var(--theme-accent)` so they follow the active theme automatically.

[`index.js`](./index.js) only registers themes for `ThemeProvider` / toggle.  
[`activeTheme.js`](./activeTheme.js) holds the owner default + visitor toggle flag.

Copy and images stay shared.

## Visitor toggle (experiment)

Navbar shows a **Pink / Beige** dropdown (left of the language selector).

- Choice is saved in `localStorage` (`yimajiuni-site-theme`) and applies on every visit.
- First visit (no storage) uses [`ACTIVE_THEME_ID`](./activeTheme.js).
- Kill switch: set `VISITOR_THEME_TOGGLE = false` in `activeTheme.js`.
- Hidden on `/cro` (and CRO subdomain builds that pass `forceCroPage`).

Shareable URL still works: `?theme=pink`, `?theme=beige`, or `?theme=orange` (also writes localStorage).

## Owner default (seasonal)

1. Edit [`activeTheme.js`](./activeTheme.js): set `ACTIVE_THEME_ID` to `"pink"` or `"beige"`.
2. `npm run build` → deploy.

This is only the **default** for visitors who have never toggled.

## Add a new season theme

1. Add a Layout with `*Theme` meta + section classes + `*ServiceChrome`.
2. Register it in [`index.js`](./index.js) `THEME_REGISTRY`.
3. Wire the Layout in `Service.jsx`.
4. Add `[data-theme="<id>"]` tokens / rules in `src/index.css`.
5. Labels appear automatically in `ThemeSelector` (add a short label branch if needed).
