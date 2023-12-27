const path = require('path');
const { slugify } = require('@vuepress/shared-utils')
const merge = require('webpack-merge');

const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')
const createSidebar = require('./markdown/createSidebar')
const { simplifySlugText, tabs } = require('./utils')
const config_zh = require('./build/config.zh');
const config_en = require('./build/config.en');

const config = process.env.DOCS_LOCAL === 'en' ? config_en : config_zh

module.exports = merge({
  theme: 'vuepress-theme-uni-app-test',
  themeConfig: {
    sidebar: createSidebar(tabs),
    sidebarDepth: 0,
    nextLinks: false,
    prevLinks: false,
    // TODO use theme
    repo: 'dcloudio/uni-app',
    docsRepo: 'https://gitee.com/dcloud/native-docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    repo: 'dcloudio/native-docs',
    docsDir: 'docs',
    isDevelopment: process.env.NODE_ENV === 'development',
    isEn: process.env.DOCS_LOCAL === 'en'
  },
  markdown: {
    // toc: { includeLevel: [1, 2, 3, 4] },
    slugify(str) {
      if (typeof str !== 'string') return ''

      let slug = str
      if (slug.includes('@')) {
        let array = slug.split('@')
        slug = array.length > 1 ? array[array.length - 1] : str
      } else {
        slug = simplifySlugText(slug.toLowerCase()).trim()
      }
      return slugify(slug)
    },
    extractHeaders: ['h1', 'h2', 'h3', 'h4'],
    chainMarkdown(config) {
      config
        .plugin('translate')
        .use(translatePlugin)
        .end()
        .plugin('convert-header')
        .use(headerPlugin)
        .end()
        .plugin('normallize-link')
        .use(require('./markdown/normallizeLink'))
        .end()
				.plugin('img-add-attrs')
				.use(require('./markdown/img-add-attrs'))
        .end()
				.plugin('attrs')
        .use(require('markdown-it-attrs'),[{
          leftDelimiter: '#{',
          rightDelimiter: '}'
        }])
        .end()
        .plugin('task-lists')
        .use(require('markdown-it-task-lists'))
        .end()
        .plugin('markdown-it-raw-table')
        .use(require('markdown-it-raw-table'))
    }
  },
  patterns: ['**/!(_sidebar).md', '**/*.vue'],
  chainWebpack(config, isServer) {
    config.resolve.alias.set(
      '@theme-config',
      path.resolve(process.cwd(), 'docs/.vuepress/config', process.env.DOCS_LOCAL)
    )
  },
  plugins: [
    ["vuepress-plugin-juejin-style-copy", copyOptions]
  ],
  /**
   *
   * @param {string} path path: js 资源文件路径
   * @param {string} type type: 资源文件类型，取值有 script 等
   * @returns
   */
  shouldPrefetch: (path, type) => {
    if (type === 'script') return path.includes('vendors~') || path.includes('layout-') || path.includes('index.')
    return false
  }
}, config)