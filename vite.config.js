import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/seansite-tailwind/",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
