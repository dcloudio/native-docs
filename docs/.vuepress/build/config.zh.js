const config = {
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
    docsRepo: 'https://gitee.com/dcloud/native-docs',
    docsBranch: 'docs-zh',
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: '上次更新',
    algolia: {
      apiKey: '2fdcc4e76c8e260671ad70065e60b2e7',
      indexName: 'zh-uniapp',
      appId: 'PQIR5NL8CZ',
      searchParameters: { hitsPerPage: 50 }
    }
  }
}

module.exports = config