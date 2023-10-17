import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: " https://jianwei07.github.io/jayden-portfolio/",
  plugins: [react()],
});
