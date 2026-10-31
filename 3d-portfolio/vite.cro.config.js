import { rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PROJECT_ROOT = dirname(fileURLToPath(import.meta.url));
const CRO_DIST = resolve(PROJECT_ROOT, "dist-cro");

function hostingerHtmlPlugin() {
  return {
    name: "hostinger-html",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin(="")?/g, "");
    },
  };
}

function croPublicFilesPlugin() {
  return {
    name: "cro-public-files",
    apply: "build",
    closeBundle() {
      rmSync(resolve(CRO_DIST, "sitemap.xml"), { force: true });
      rmSync(resolve(CRO_DIST, "vite.svg"), { force: true });
      writeFileSync(
        resolve(CRO_DIST, "robots.txt"),
        "User-agent: *\nAllow: /\n",
      );
    },
  };
}

export default defineConfig({
  root: resolve(PROJECT_ROOT, "cro-entry"),
  publicDir: resolve(PROJECT_ROOT, "public"),
  base: "/",
  plugins: [react(), hostingerHtmlPlugin(), croPublicFilesPlugin()],
  assetsInclude: ["**/*.webp"],
  build: {
    outDir: CRO_DIST,
    emptyOutDir: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          utils: ["react-router-dom", "react-i18next", "i18next"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "esbuild",
  },
});
