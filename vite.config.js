import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["bootstrap/dist/css/bootstrap.min.css"],
    },
  },
  plugins: [react()],
  base: "./",
});
