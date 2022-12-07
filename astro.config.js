import { defineConfig } from 'astro/config'
import { netlifyCMSConfig } from './cms/config'

// https://astro.build/config
export default defineConfig({
  integrations: [netlifyCMSConfig],
})
