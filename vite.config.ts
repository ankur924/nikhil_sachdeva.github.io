import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    plugins: [react()],
    // Set VITE_BASE_PATH to `/<repository-name>/` for a project GitHub Pages site.
    base: env.VITE_BASE_PATH || "/",
  };
});
