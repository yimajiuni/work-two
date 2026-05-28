import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Hostinger/LiteSpeed optimizers break `rel=preload` CSS (→ invalid stylesheet + onload).
 * Keep default blocking stylesheet from Vite for reliable deploys.
 */
function hostingerHtmlPlugin() {
  return {
    name: "hostinger-html",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin(="")?/g, "");
    },
  };
}

const HEAVY_CHUNK_RE =
  /ProjectQuote|projectQuotePdf|three-|Contact-|WorkDetails|WorkGallery|TranslatedAbout|charts-/;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), hostingerHtmlPlugin()],
  assetsInclude: ["**/*.glb", "**/*.webp"],
  optimizeDeps: {
    exclude: ["@react-three/drei.js"],
  },
  build: {
    modulePreload: {
      polyfill: false,
      resolveDependencies: (_filename, deps) =>
        deps.filter((dep) => !HEAVY_CHUNK_RE.test(dep)),
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          three: ["@react-three/fiber", "@react-three/drei", "@react-spring/three"],
          ui: ["@mui/material", "@mui/icons-material", "@mui/joy"],
          charts: ["recharts", "highcharts-react-official", "d3"],
          animation: ["gsap"],
          utils: ["react-router-dom", "react-i18next", "i18next"],
          reactPdf: ["@react-pdf/renderer"],
        },
      },
      treeshake: {
        moduleSideEffects: true,
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        unused: true,
        dead_code: true,
      },
      mangle: {
        safari10: true,
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
