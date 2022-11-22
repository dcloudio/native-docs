const fs = require('fs')
const folderNames = []
fs.readdirSync('docs').forEach(item => {
  fs.lstatSync(`docs/${item}`).isDirectory() && folderNames.push(item)
})

function isExternal(path) {
  return /^[a-z]+:/i.test(path)
}

function normalizeLink(url) {
  if (!url.startsWith('/') && folderNames.some(item => url.split('/')[0] === item)) {
    return '/' + url
  }
  return url
}

module.exports = function (md) {
  md.normalizeLink = (function (oldNormalizeLink) {
    return function (url) {
      url = isExternal(url)
        ? url
        : normalizeLink(url)
          .replace(/\.md\b/, '')
          .replace(/\bREADME\b/, '')
          .replace(/\/index/, '/')
          .replace(/\?id=/, '#')
          .replace(/\\/g, '/')
      return oldNormalizeLink.bind(this)(url)
    }
  })(md.normalizeLink)
}