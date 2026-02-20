import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const VITE_APP_BASE_URL = env.VITE_APP_BASE_URL;

  console.log("✅ mode: " + mode);
  console.log("✅ VITE_APP_BASE_URL: " + VITE_APP_BASE_URL);

  return {
    plugins: [react(), tailwindcss()],
    base: "/" + VITE_APP_BASE_URL,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      host: true,
      port: 5174,
      strictPort: true,
      allowedHosts: ["domain.prod", "localhost"],
    },
  };
});
