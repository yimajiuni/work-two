import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n-1.js";
import { scheduleCriticalWebFonts } from "./utils/loadWebFonts";
import { ACTIVE_THEME_ID, THEME_STORAGE_KEY } from "./themes/activeTheme.js";

if (typeof document !== "undefined") {
  let themeId = ACTIVE_THEME_ID;
  try {
    let stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "next") stored = "beige";
    if (stored === "pink" || stored === "beige") themeId = stored;
  } catch {
    /* ignore */
  }
  document.documentElement.dataset.theme = themeId;
}

scheduleCriticalWebFonts();

// Wait for i18n to be ready before rendering
const renderApp = () => {
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
};

// Check if i18n is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
} else {
    renderApp();
}
