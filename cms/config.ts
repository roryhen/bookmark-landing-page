import NetlifyCMS from 'astro-netlify-cms'
import { sections } from './collections/sections'
import { settings } from './collections/settings'

export const netlifyCMSConfig = NetlifyCMS({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    media_folder: 'public/uploads',
    public_folder: '/uploads',
    collections: [settings, sections],
  },
})
