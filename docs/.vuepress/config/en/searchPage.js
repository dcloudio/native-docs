export default {
  category: [
    {
      text: 'Q&A community',
      tag: 'ask',
      type: 'server',
    },
    {
      text: 'Plugin Market',
      tag: 'ext',
      type: 'server',
    },
    {
      text: 'HBuilderX documentation',
      type: 'link',
      link: 'https://hx.dcloud.net.cn/?s=',
    },
  ],
  translations: {
    searchBox: {
      buttonText: 'Cancel',
      placeholder: 'Search for content',
      searchBy: 'Search By'
    },
    resultsScreen: {
      resultsText: '${resultHits} related results',
      noResultsText: 'No results were found for ${categoryText}',
      askNoResultsText: 'The following is ${categoryText} related content'
    }
  }
}