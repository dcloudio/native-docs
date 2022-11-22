function parseHeader(tokens) {
  tokens.forEach((t, i) => {
    if (t.type === 'heading_open' && /h\d/.test(t.tag)) {
      const token = tokens[i + 1]
      const title = token.content
      const res = title.match(/\s*(.+?)@(.+?)\s*$/)
      if (res) {
        token.content = res[1]
        for (let i = 0, array = token.children, l = array.length; i < l; i++) {
          const token = array[l - 1 - i]
          if (token.type === 'text') {
            const title = token.content
            const res = title.match(/(.*)@.+/)
            if (res) {
              token.content = res[1]
              break
            }
          }
        }
      }
    }
  })
  return tokens
}

module.exports = md => {
  md.parse = (function (mdParse) {
    return function (src, ...array) {
      return parseHeader(mdParse.bind(this)(src, ...array))
    }
  })(md.parse)
}
