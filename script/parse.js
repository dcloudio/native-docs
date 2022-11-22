function isSame(origin, target, isCode) {
  const commentTest1 = /^\s*\/\//
  const commentTest2 = /^\s*<!--.+-->\s*$/
  if (isCode) {
    return (commentTest1.test(origin) || commentTest2.test(origin)) && (commentTest1.test(target) || commentTest2.test(target))
  }
  const test1 = /^\s*(\d+\.\s+|```)/
  const test2 = /^[\s#*\-|<>/│└├┌:]*/
  const tagReg = /\<(\w+)\s*>{0,1}/
  const origin_tag = (origin.match(tagReg) || [])[1]
  const target_tag = (target.match(tagReg) || [])[1]
  const originStart = (origin.match(test1) || origin.match(test2))[0]
  const targetStart = (target.match(test1) || target.match(test2))[0]
  return (originStart.trimEnd() || originStart) === (targetStart.trimEnd() || targetStart) && target.replace(test2, '').trim().length && origin_tag === target_tag
}

function isPlaceholder(text) {
  return text && text.includes('...') && /^[\s#*\-|<>/]*$/.test(text)
}

function parse(str = '') {
  const originTest = /[\u4e00-\u9fa5]/
  const codeTest1 = /^\s*(```[\sa-zA-Z]*)$/
  const codeTest2 = /^\s*<\/?code.*?>\s*$/
  const origin = []
  const target = []
  const notTranslated = []
  const array = str.split(/\r?\n/)
  let isCode
  for (let index = 0; index < array.length; index++) {
    const item = array[index]
    if (codeTest1.test(item) || codeTest2.test(item)) {
      isCode = !isCode
    }
    const nextItem = array[index + 1]
    const isPlaceholderItem = isPlaceholder(nextItem)
    if (
      item &&
      originTest.test(item) &&
      nextItem &&
      !originTest.test(nextItem) &&
      isSame(item, nextItem, isCode)
    ) {
      target.push(nextItem)
      index++
    } else {
      const line = target.push(item) - 1
      if (isPlaceholderItem) {
        index++
      }
      if (originTest.test(item)) {
        notTranslated.push({
          index: line,
          realLine: line + 1,
          content: item,
          info: `${`${line + 1}: `.padStart(5) + item}`
        })
      }
    }
    origin.push(item)
  }
  return {
    origin,
    target,
    notTranslated
  }
}

module.exports = parse
