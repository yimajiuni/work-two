import ReactDOM from "react-dom/client";
import CroApp from "./CroApp";
import "./index.css";
import "./i18n-1.js";
import { scheduleCriticalWebFonts } from "./utils/loadWebFonts";

// data-theme is applied by ThemeProvider (localStorage / ?theme= / default beige)

scheduleCriticalWebFonts();

const renderApp = () => {
    ReactDOM.createRoot(document.getElementById("root")).render(<CroApp />);
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderApp);
} else {
    renderApp();
}
