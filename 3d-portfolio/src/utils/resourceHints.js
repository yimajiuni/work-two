/**
 * Runtime resource-hint helpers (PSI: LCP preload, defer non-critical JS).
 *
 * HTML equivalents (Vite hashes URLs at build time — inject via these helpers):
 *
 *   <link rel="preload" as="image" type="image/webp" fetchpriority="high"
 *     href="…896w.webp"
 *     imagesrcset="…480w.webp 480w, …896w.webp 896w"
 *     imagesizes="(max-width: 640px) 100vw, 56rem" />
 *
 *   <link rel="modulepreload" href="…/LcpImprovement-[hash].js" />
 *
 *   <script type="module" src="…" defer></script>  <!-- Vite entry is already deferred -->
 */

const hintRegistry = new Map();

const hintKey = (rel, href) => `${rel}:${href}`;

/**
 * @param {object} opts
 * @param {string} opts.href
 * @param {string} [opts.srcSet]
 * @param {string} [opts.sizes]
 * @param {'high'|'low'|'auto'} [opts.fetchPriority]
 * @param {string} [opts.type]
 * @returns {() => void} cleanup
 */
export function preloadImage({
    href,
    srcSet,
    sizes,
    fetchPriority = "high",
    type = "image/webp",
}) {
    if (typeof document === "undefined" || !href) return () => {};

    const key = hintKey("preload-image", `${href}|${srcSet ?? ""}`);
    if (hintRegistry.has(key)) return hintRegistry.get(key);

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    if (type) link.type = type;
    if (srcSet) {
        link.setAttribute("imagesrcset", srcSet);
        if (sizes) link.setAttribute("imagesizes", sizes);
    }
    if (fetchPriority) link.setAttribute("fetchpriority", fetchPriority);

    document.head.appendChild(link);

    const cleanup = () => {
        link.remove();
        hintRegistry.delete(key);
    };
    hintRegistry.set(key, cleanup);
    return cleanup;
}

/**
 * Warm the HTTP cache without a <link> (secondary comparison frame).
 * @param {string} url
 */
export function prefetchImageUrl(url) {
    if (typeof window === "undefined" || !url) return;
    const img = new Image();
    img.decoding = "async";
    img.src = url;
}

/**
 * @param {string} moduleUrl
 * @returns {() => void} cleanup
 */
export function modulePreload(moduleUrl) {
    if (typeof document === "undefined" || !moduleUrl) return () => {};

    const key = hintKey("modulepreload", moduleUrl);
    if (hintRegistry.has(key)) return hintRegistry.get(key);

    const link = document.createElement("link");
    link.rel = "modulepreload";
    link.href = moduleUrl;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    const cleanup = () => {
        link.remove();
        hintRegistry.delete(key);
    };
    hintRegistry.set(key, cleanup);
    return cleanup;
}

/**
 * Schedule work after first paint (defers non-critical JS work on the main thread).
 * @param {() => void} fn
 * @param {{ timeout?: number }} [opts]
 */
export function runWhenIdle(fn, { timeout = 2000 } = {}) {
    if (typeof window === "undefined") return () => {};
    if (window.requestIdleCallback) {
        const id = window.requestIdleCallback(fn, { timeout });
        return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(fn, 1);
    return () => window.clearTimeout(id);
}

/**
 * Inject a deferred classic script (for non-module third-party snippets).
 * Prefer dynamic import() for app chunks.
 * @param {string} src
 * @returns {() => void} cleanup
 */
export function injectDeferredScript(src) {
    if (typeof document === "undefined" || !src) return () => {};

    const key = hintKey("defer-script", src);
    if (hintRegistry.has(key)) return hintRegistry.get(key);

    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);

    const cleanup = () => {
        script.remove();
        hintRegistry.delete(key);
    };
    hintRegistry.set(key, cleanup);
    return cleanup;
}
