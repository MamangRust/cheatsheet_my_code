import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { fileURLToPath } from "url";
import velite from '@velite/plugin-vite';

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig(async () => ({
  base: "/cheatsheet_my_code/",
  plugins: [react(), velite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#velite": path.resolve(__dirname, ".velite"),
    }
  },
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    historyApiFallback: true,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
}));
