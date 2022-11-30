/**
 * text
 * target
 * link   // 有协议时是外链
 * items
 * type   // link、links。
 * rel
 * needOutbound // 是否显示外链图标
 */
export const navbar = [
  {
    text: 'uniMP SDK',
    type: 'link',
    link: '/'
  },
  {
    text: 'App Local Packaging',
    type: "link",
    link: '/AppDocs/'
  },
  {
    text: 'Native Language Plugin',
    type: "link",
    link: '/NativePlugin/'
  }
]

export const navbarLanguage = {
  default: 1,
  items: [
    {
      text: '简体中文',
      link: 'javascript:;',
      click() {
        location.href = 'https://nativesupport.dcloud.net.cn' + location.pathname.replace('/en/','/') + location.hash + location.search
      }
    },
    {
      text: 'English',
      link: 'https://nativesupport.dcloud.net.cn/en'
    }
  ]
}