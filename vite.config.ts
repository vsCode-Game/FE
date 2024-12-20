import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  build: {
    outDir: mode === "production" ? "build" : "staging",
  },
}));
