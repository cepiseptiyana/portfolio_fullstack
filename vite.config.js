import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // jangan sertakan nama repo jika custom domain
  // base: "/portfolio/",

  // custom dns domain github pages
  base: "/",
  plugins: [react(), tailwindcss()],
});
