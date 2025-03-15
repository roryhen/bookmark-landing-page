import { defineStackbitConfig } from '@stackbit/types'
import { cmsConfig } from 'cms/config'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '22',
  devCommand: 'node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1',
  experimental: {
    ssg: {
      name: 'Astro',
      logPatterns: {
        up: ['is ready', 'astro'],
      },
      directRoutes: {
        'socket.io': 'socket.io',
      },
      passthrough: ['/vite-hmr/**'],
    },
  },
  contentSources: [cmsConfig],
  modelExtensions: [{ name: 'page', type: 'page', urlPath: '/{slug}' }],
})
