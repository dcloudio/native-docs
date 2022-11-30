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
    text: 'uni小程序 SDK',
    type: 'link',
    link: '/'
  },
  {
    text: 'App离线打包',
    type: "link",
    link: '/AppDocs/'
  },
  {
    text: '原生插件开发',
    type: "link",
    link: '/NativePlugin/'
  }
]

export const navbarLanguage = {
  default: 0,
  items: [
    {
      text: '简体中文',
      link: 'https://nativesupport.dcloud.net.cn/'
    },
    {
      text: 'English',
      link: 'javascript:;',
      click() {
        location.href = 'https://nativesupport.dcloud.net.cn/en' + location.pathname + location.hash + location.search
      }
    }
  ]
}