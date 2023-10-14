import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Jianwei07/jayden-portfolio-m",
  plugins: [react()],
});
