import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n-1.js";
import { scheduleCriticalWebFonts } from "./utils/loadWebFonts";

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
