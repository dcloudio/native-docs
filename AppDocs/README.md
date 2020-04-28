## 简介
App离线开发工具包，即App离线SDK，是把App运行环境（runtime）封装为原生开发调用接口，开发者可以在自己的 Android 及 iOS 原生开发环境配置工程使用，包括 Android离线开发SDK 及 iOS离线开发SDK。

## 功能
App离线SDK主要用于`App本地离线打包`及`扩展原生能力`

- App本地离线打包：
对应HBuilderX的云端打包功能，`uni-app`、`5+ App`等项目发行为原生App时，无需将App资源及打包要使用的签名证书等提交到云端打包服务器，在开发者本地配置的原生开发环境中生成安装包apk/ipa。
  + [Android平台App本地离线打包](/AppDocs/usesdk/android.md)
  + [iOS平台App本地离线打包](/AppDocs/usesdk/ios.md)

- 扩展原生能力：
当HBuilderX中提供的能力无法满足App功能需求，需要通过使用Andorid/iOS原生开发实现时，可使用App离线SDK开发原生插件来扩展原生能力。
  + `uni-app`项目扩展原生能力需开发[uni原生插件](/NativePlugin/README.md)，支持云端打包，有完善的开发者生态[插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)
  + `5+ App`项目扩展原生能力需开发`5+原生插件`，仅支持本地离线打包

> `5+原生插件`将不再继续维护，建议开发者升级应用为`uni-app`项目并使用`uni原生插件`。如需继续使用5+原生插件，请参考以下文档：
- [Android平台5+原生插件开发](http://ask.dcloud.net.cn/article/66)
- [iOS平台5+原生插件开发](http://ask.dcloud.net.cn/article/67)



## 注意
原 `5+ SDK` 的 `Widget方式集成` 和 `WebView方式集成` 将不再继续维护支持，相关功能已迁移到[uni小程序 SDK](/README.md)，因此建议开发者尽快将应用升级到`uni-app`项目。

`5+ App`项目如需继续使用Widget/Webview方式集成，请参考以下文档：
- [Android平台Widget方式集成5+SDK](http://ask.dcloud.net.cn/article/81)
- [Android平台WebView方式集成5+SDK](http://ask.dcloud.net.cn/article/80)
- [iOS平台Widget方式集成5+SDK](http://ask.dcloud.net.cn/article/84)
- [iOS平台WebView方式集成5+SDK](http://ask.dcloud.net.cn/article/83)

>  Widget/Webview方式集成已废弃，请不要在新项目使用此集成方式，推荐使用`uni小程序SDK`
