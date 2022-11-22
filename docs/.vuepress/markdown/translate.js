module.exports = md => {
  md.parse = (function (mdParse) {
    return function (src, ...array) {
      return mdParse.bind(this)(src, ...array)
    }
  })(md.parse)
  md.render = (function (mdRender) {
    return function (src, ...array) {
      return mdRender.bind(this)(src, ...array)
    }
  })(md.render)
}
