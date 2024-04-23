function isExternal(path) {
  return /^[a-z]+:/i.test(path)
}

function simplifySlugText(text) {
  // 移除方法后面的括号及里面的内容
  if (text.match(/^uni/) && text.match(/\)$/)) {
    text = text.replace(/^uni/, '').replace(/\(.*\)$/, '');
  }
  // 处理部分非uni开头方法的括号内容，主要是会出现多参数的情况。
  if (text.match(/\([\w+\s+\[\],]+\)$/)) {
    text = text.replace(/\([\w+\s+\[\],]+\)$/, '');
  }
  return text;
}

module.exports = {
  isExternal,
  simplifySlugText
}
