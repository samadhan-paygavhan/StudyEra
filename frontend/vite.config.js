import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ADD THIS BLOCK
  define: {
    __vite__injectQuery: "function(id) { return id; }",
  },
  optimizeDeps: {
    exclude: ["lightningcss"],
  },
});
