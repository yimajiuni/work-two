import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Optimize asset handling - combine both file types
  assetsInclude: ["**/*.glb", "**/*.webp"],
  optimizeDeps: {
    exclude: ["@react-three/drei.js"],
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          vendor: ['react', 'react-dom'],
          three: ['@react-three/fiber', '@react-three/drei', '@react-spring/three'],
          ui: ['@mui/material', '@mui/icons-material', '@mui/joy'],
          charts: ['recharts', 'highcharts-react-official', 'd3'],
          animation: ['gsap'],
          utils: ['react-router-dom', 'react-i18next', 'i18next']
        }
      },
      // Enable aggressive tree-shaking
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
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
  // Enable source maps in development
  css: {
    devSourcemap: true,
  },
});
