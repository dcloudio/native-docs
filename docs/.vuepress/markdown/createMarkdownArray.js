
function createMarkdownArray(contents = [], childrenName = 'children') {
  const markdownArray = []
  let itemCatch = {}
  for (let index = 0; index < contents.length; index++) {
    const item = contents[index];

    if (itemCatch.parent) {
      if (item.level === itemCatch.level) {
        const child = {
          ...item,
          parent: itemCatch.parent
        };
        itemCatch.parent[childrenName].push(child)
        delete itemCatch.parent
        itemCatch = child
        continue
      } else if (item.level > itemCatch.level) {
        const child = {
          ...item,
          parent: itemCatch
        };
        (itemCatch[childrenName] || (itemCatch[childrenName] = [])).push(child)
        itemCatch = child
      } else {
        const parent = itemCatch.parent
        delete itemCatch.parent
        itemCatch = parent
        index--
        continue
      }
    } else {
      if (typeof itemCatch.level === 'undefined' || item.level === itemCatch.level) {
        itemCatch = item
        markdownArray.push(itemCatch)
      } else {
        const child = {
          ...item,
          parent: itemCatch
        };
        (itemCatch[childrenName] || (itemCatch[childrenName] = [])).push(child)
        itemCatch = child
        continue
      }
    }
  }

  // 移除最后一项 parent 节点，防止循环引用报错
  (function removeParent(childs = []) {
    childs.forEach(child => {
      if (child.parent) delete child.parent
      if (child[childrenName]) removeParent(child[childrenName])
    })
  })(markdownArray[markdownArray.length - 1][childrenName])

  return markdownArray
}

module.exports = createMarkdownArray