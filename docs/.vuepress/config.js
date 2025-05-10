const path = require('path');
const { slugify } = require('@vuepress/shared-utils')
const highlight = require('@vuepress/markdown/lib/highlight')
const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')
const createSidebar = require('./markdown/createSidebar')
const { simplifySlugText } = require('./utils')
const copyOptions = require('./config/copy');

const config = {
  theme: 'vuepress-theme-uniapp-official',
  title: 'uni小程序SDK',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788'
    }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    titleLogo: 'https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativesupport@2x.png',
    logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/5a7f902b-21a7-4822-884f-925219eacc4b.png',
    // TODO use plugin/theme
    sidebar: createSidebar(),
    sidebarDepth: 0,
    nextLinks: false,
    prevLinks: false,
    // TODO use theme
    repo: 'dcloudio/uni-app',
    docsRepo: 'https://gitee.com/dcloud/native-docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: '上次更新',
    isDevelopment: process.env.NODE_ENV === 'development',
    algolia: {
      apiKey: '2fdcc4e76c8e260671ad70065e60b2e7',
      indexName: 'zh-uniapp',
      appId: 'PQIR5NL8CZ',
      searchParameters: { hitsPerPage: 50 }
    }
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
      const extensionMap = {
        uts: 'ts',
        uvue: 'vue',
        'objective-c': 'objc'
      }
      config.options.highlight((str, lang) => {
        const extension = extensionMap[lang.toLowerCase()]
        return highlight(str, extension || lang)
      })

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
    }
  },
  chainWebpack(config, isServer) {
    config.resolve.alias.set(
      '@theme-config',
      path.resolve(process.cwd(), 'docs/.vuepress/config')
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
}

module.exports = config
