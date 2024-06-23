import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //       @import '@/styles/Variables.scss';
  //       @import '@/styles/MixIn.scss';
  //       @import '@/styles/index.scss';
  //     `,
  //     },
  //   },
  // },
});
