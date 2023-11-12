import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    lib: {
      entry: {
        math: "./src/math.ts",
        logger: "./src/logger.ts",
      },
    },
  },
  plugins: [react()],
});
