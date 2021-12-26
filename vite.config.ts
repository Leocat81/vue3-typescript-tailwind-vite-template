import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
    proxy: {
      '/api': {
        target: 'http://pipepandafeng.gitee.io/blog_cover/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [
    vue(),
    alias({
      entries: [{ find: "serve", replacement: "/src/serve/index" }],
    }),
  ],
});
