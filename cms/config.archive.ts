import DecapCMS from 'astro-decap-cms'
import { sections } from './collections/sections'
import { settings } from './collections/settings'

export const decapCMSConfig = DecapCMS({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    site_url: 'https://bookmarkmanagersite.netlify.app/',
    media_folder: 'public/uploads',
    public_folder: '/uploads',
    collections: [settings, sections],
  },
})
