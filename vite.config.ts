import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Soft-Current-/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
