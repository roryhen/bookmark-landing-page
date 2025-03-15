import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    server: {
      hmr: { path: '/vite-hmr/' },
    },
  },
})
