export default {
  category: [
    {
      text: '问答社区',
      tag: 'ask',
      type: 'server',
    },
    {
      text: '插件市场',
      tag: 'ext',
      type: 'server',
    },
    {
      text: 'HBuilderX 文档',
      type: 'link',
      link: 'https://hx.dcloud.net.cn/?s=',
    },
  ],
  translations: {
    searchBox: {
      buttonText: '取消',
      placeholder: '搜索内容',
      searchBy: '搜索提供者'
    },
    resultsScreen: {
      resultsText: '${resultHits}个相关结果',
      noResultsText: '没有找到${categoryText}相关内容',
      askNoResultsText: '以下为${categoryText}相关内容'
    }
  }
}