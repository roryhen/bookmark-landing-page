import { GitContentSource } from '@stackbit/cms-git'
import { settings } from './collections/settings'
import { sections } from './collections/sections'

export const cmsConfig = new GitContentSource({
  rootPath: __dirname,
  contentDirs: ['content'],
  models: [settings, sections],
  assetsConfig: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'uploads',
    publicPath: '/',
  },
})
