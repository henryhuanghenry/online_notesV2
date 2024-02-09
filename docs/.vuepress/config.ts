import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import {mdEnhancePlugin} from 'vuepress-plugin-md-enhance'
import sidebar from './config/config_sidebar.js'
import navbar from './config/config_nav.js'

export default defineUserConfig({
  //lang: 'en-US',
  title: 'Online notes',
  //description: 'Just playing around',
  host: 'localhost',
  port: 8090,
  base:'/online_notesV2/',


  theme: defaultTheme({
    sidebar: sidebar,
    navbar: navbar,
    logo: '/icon.gif',
  }),
  
  plugins: [
      mdEnhancePlugin({
      // 启用 TeX 支持
      katex: true,
      mark: true,
      hint: true,
      alert: true
      }),
  ],

  bundler: viteBundler(),
})
