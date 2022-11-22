const pp = require('preprocess');
const parse = require('../../../../unidocs-auto-deploy/src/translation/parse')

function translate(content) {
  const key = process.env.DOCS_LOCAL === 'en' ? 'target' : 'origin'
  return parse(content)[key].join('\n')
}

module.exports = md => {
  const ppConfig = {
    EN: process.env.DOCS_LOCAL === 'en' ? true : undefined,
    ZH: process.env.DOCS_LOCAL === 'zh' ? true : undefined
  }

  md.parse = (function (mdParse) {
    return function (src, ...array) {
      src = pp.preprocess(src, ppConfig)
      if (src) {
        src = (ppConfig.EN ? '<md-translatedByGoogle />\n' : '') + translate(src)
      }
      return mdParse.bind(this)(src, ...array)
    }
  })(md.parse)
  md.render = (function (mdRender) {
    return function (src, ...array) {
      src = pp.preprocess(src, ppConfig)
      if (src) {
        src = (ppConfig.EN ? '<md-translatedByGoogle />\n' : '') + translate(src)
      }
      return mdRender.bind(this)(src, ...array)
    }
  })(md.render)
}
module.exports.translate = translate