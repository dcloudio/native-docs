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
    text: 'uniMPSdk',
    type: 'link',
    link: '/'
  },
  {
    text: 'App Offline Packaging',
    type: "link",
    link: '/AppDocs/'
  },
  {
    text: 'Native Plugin',
    type: "link",
    link: '/NativePlugin/'
  }
]

export const navbarLanguage = {
  default: 0,
  items: [
    {
      text: '简体中文',
      link: 'javascript:;',
      click() {
        location.href = 'https://nativesupport-test.dcloud.net.cn' + location.pathname + location.hash + location.search
      }
    },
    {
      text: 'English',
      link: 'https://nativesupport-test.dcloud.net.cn/en'
    }
  ]
}