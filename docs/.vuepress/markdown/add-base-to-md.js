module.exports = function (md, { base = '/' }) {
  if (base !== '/') {
    md.core.ruler.after('inline', 'add-base-to-md', function (state) {
      state.tokens.forEach(function (blockToken) {
        if (blockToken.type === 'inline' && blockToken.content && blockToken.children && blockToken.children.length) {
          if (blockToken.content.indexOf('](/') > -1) {
            blockToken.children.forEach(function (inlineToken) {
              if (inlineToken.type === 'link_open' && inlineToken.attrs && inlineToken.attrs.length) {
                inlineToken.attrs.forEach(function (attr) {
                  if (attr[0] === 'href' && attr[1].indexOf('/') === 0 && attr[1].indexOf(base) !== 0) {
                    attr[1] = base + attr[1].slice(1)
                  }
                });
              }
            })
          }
        }
      });
      return false;
    });
  }
};
