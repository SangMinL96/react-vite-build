import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    cssCodeSplit: false,
    emptyOutDir: false,
    outDir: "dist",
    lib: {
      entry: {
        math: "./src/math.ts",
        logger: "./src/logger.ts",
      },
      fileName: (format, name) => {
        return `${name}.${format}`;
      },
    },
  },
  plugins: [react()],
});
