import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import {component, mdEnhancePlugin} from 'vuepress-plugin-md-enhance'
import sidebar from './config/config_sidebar.js'
import navbar from './config/config_nav.js'
import { componentsPlugin } from "vuepress-plugin-components"


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
      componentsPlugin({
        //更复杂的插件支持、
        components: ["PDF"],
        componentOptions: {
          pdf: {
            pdfjs: "/assets/pdfjs/",
          },
        },
      }),
  ],

  bundler: viteBundler(),
})
