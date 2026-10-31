/**
 * Non–render-blocking Google Fonts (replaces @import in index.css).
 * Critical: Crimson Pro (pink) + Space Grotesk (beige) + Pacifico
 * + Zen Kaku Gothic New (JP fallback when Yu Gothic is absent, e.g. iOS).
 */

const CRITICAL_FONTS =
    "https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Pacifico&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap";

const EXTENDED_FONTS =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";

function injectAsyncStylesheet(href, id) {
    if (typeof document === "undefined" || document.getElementById(id)) return;

    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    link.media = "print";
    link.onload = () => {
        link.media = "all";
    };
    document.head.appendChild(link);
}

/** After first paint — does not block LCP/FCP */
export function loadCriticalWebFonts() {
    injectAsyncStylesheet(CRITICAL_FONTS, "google-fonts-critical");
}

/** About / Works routes (Poppins headings) */
export function loadExtendedWebFonts() {
    injectAsyncStylesheet(EXTENDED_FONTS, "google-fonts-extended");
}

export function scheduleCriticalWebFonts() {
    if (typeof window === "undefined") return;
    if (window.requestIdleCallback) {
        window.requestIdleCallback(() => loadCriticalWebFonts(), { timeout: 2500 });
    } else {
        window.setTimeout(loadCriticalWebFonts, 1);
    }
}
