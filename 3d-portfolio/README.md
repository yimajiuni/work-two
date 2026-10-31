# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Seasonal Service theme

Site look/layout themes live in `src/themes/`.

- Production switch: set `ACTIVE_THEME_ID` in `src/themes/activeTheme.js`, then build & deploy.
- Dev preview: `?theme=pink` or `?theme=beige`.
- Details: [`src/themes/README.md`](src/themes/README.md)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
