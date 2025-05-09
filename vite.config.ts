import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'node:path'
// import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // vueDevTools(),
    // cloudflare(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __BUILD_DATE__: JSON.stringify(new Date()),
  },
  // SSR configuration
  ssr: {
    // Enable Node.js-like environment for SSR
    noExternal: ['vue-i18n', 'pinia', '@vueuse/core', 'lucide-vue-next']
  },
})
