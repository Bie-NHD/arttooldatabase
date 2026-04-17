import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

/** @var {string} GITHUB_BASE = '/arttooldatabase/' */
console.log("📋•ENV: GITHUB_BASE=", process.env.GITHUB_BASE);

// https://astro.build/config
export default defineConfig({
  base: process.env.GITHUB_BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
