const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')
const glob = require('glob')
const createMarkdownArray = require('./createMarkdownArray')
const { isExternal } = require('../utils')
const createSiteMap = require('./createSiteMap')
const { translate } = require('./translate')

const links = []

function parseBar(tab, file, options) {
  const textName = options.text || 'text'
  const linkName = options.link || 'link'
  const contents = []

  new MarkdownIt().parse(translate(fs.readFileSync(file, { encoding: 'utf-8' }).replace(/<!--([\s\S]*?)-->/g, ''))).forEach(token => {
    if (token.type === 'inline') {
      let text
      let link
      let config = {}
      token.children.forEach(child => {
        switch (child.type) {
          case 'text':
            text = text || child.content
            break
          case 'link_open':
            link = link || new Map(child.attrs).get('href')
            break
          case 'code_inline':
            try {
              config = JSON.parse(child.content)
            } catch (error) {}
            break

          default:
            break
        }
      })

      if (link && !isExternal(link)) {
        if (!link.startsWith('/')) {
          const linkFirstItem = link.split('/')[0]
          if (tab.indexOf(linkFirstItem) === -1) {
            link = path.join(tab, link).replace(/\\/g, '/')
          }
        }

        link = path
          .join(
            '/',
            link
              .replace(/\.md\b/, '')
              .replace(/\bREADME\b/, '')
              .replace(/\/index/, '/')
              .replace(/\?id=/, '#')
          )
          .replace(/\\/g, '/')

        links.push(link)
      }

      contents.push({
        level: token.level,
        [textName]: text,
        [linkName]: link,
        ...config,
      })
    }
  })

  return createMarkdownArray(contents, options.children)
}

module.exports = function () {
  const sidebar = {}

  // 需要反向，vuepress 在匹配路由的时候，会按照数组的顺序匹配，所以需要将最长的路径放在最前面，否则 / 路径会第一个被匹配，导致右侧栏不跟随路由变化
  const tabs = glob
    .GlobSync(path.resolve(__dirname, '../../**/_sidebar.md'))
    .found.map(file => {
      const tab = file.match(/\/docs([\s\S]+)_sidebar.md/)[1]
      return tab
    })
    .reverse()

  tabs.forEach(tab => {
    sidebar[tab] = parseBar(tab, path.join(__dirname, '../../', tab, '_sidebar.md'), {
      text: 'title',
      link: 'path',
    })
  })

  createSiteMap(links, () => (links.length = 0))

  return tabs.length ? sidebar : false
}
