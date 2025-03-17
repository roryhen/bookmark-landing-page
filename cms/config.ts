import { GitContentSource } from '@stackbit/cms-git'
import { Settings } from './collections/settings'
import { Home } from './collections/page'

export const cmsConfig = new GitContentSource({
  rootPath: __dirname,
  contentDirs: ['content'],
  models: [Settings, Home],
  assetsConfig: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'uploads',
    publicPath: '/',
  },
})
