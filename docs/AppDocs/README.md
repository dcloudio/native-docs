## 简介
## Introduction
App离线开发工具包，即App离线SDK，是把App运行环境（runtime）封装为原生开发调用接口，开发者可以在自己的 Android 及 iOS 原生开发环境配置工程使用，包括 Android离线开发SDK 及 iOS离线开发SDK。
The App Offline Development Kit, namely the App Offline SDK, encapsulates the App runtime environment (runtime) into a native development call interface. Developers can configure projects in their own Android and iOS native development environments, including Android Offline Development SDK and iOS Offline Develop SDKs.

## AppKey
从3.1.10版本开始使用App离线SDK需要申请Appkey，具体请参考下面链接：
Starting from version 3.1.10, you need to apply for an Appkey to use the App Offline SDK. For details, please refer to the link below:
+ [申请Appkey](/AppDocs/usesdk/appkey.md)
+ [Apply for Appkey](/AppDocs/usesdk/appkey.md)
 
## 功能
## Function
App离线SDK主要用于`App本地离线打包`及`扩展原生能力`
App offline SDK is mainly used for `app local offline packaging` and `expanding native capabilities`

- App本地离线打包：
- App local offline packaging:
对应HBuilderX的云端打包功能，`uni-app`、`5+ App`等项目发行为原生App时，无需将App资源及打包要使用的签名证书等提交到云端打包服务器，在开发者本地配置的原生开发环境中生成安装包apk/ipa。
Corresponding to the cloud packaging function of HBuilderX, when projects such as `uni-app` and `5+ App` are released as native apps, there is no need to submit the app resources and signature certificates to be used for packaging to the cloud packaging server. Generate the installation package apk/ipa in the native development environment.
  + [Android平台App本地离线打包](/AppDocs/usesdk/android.md)
  + [Android platform App local offline packaging](/AppDocs/usesdk/android.md)
  + [iOS平台App本地离线打包](/AppDocs/usesdk/ios.md)
  + [Local offline packaging of iOS platform App](/AppDocs/usesdk/ios.md)

- 扩展原生能力：
- Extended native capabilities:
当HBuilderX中提供的能力无法满足App功能需求，需要通过使用Andorid/iOS原生开发实现时，可使用App离线SDK开发原生插件来扩展原生能力。
When the capabilities provided in HBuilderX cannot meet the functional requirements of the App and need to be implemented through native development using Andorid/iOS, you can use the App Offline SDK to develop native plug-ins to expand the native capabilities.
  + `uni-app`项目扩展原生能力需开发[uni原生插件](/NativePlugin/README.md)，支持云端打包，有完善的开发者生态[插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)
  + The `uni-app` project needs to develop [uni native plug-in](/NativePlugin/README.md) to expand native capabilities, support cloud packaging, and have a complete developer ecosystem [plug-in market](https://ext.dcloud.net .cn/?cat1=5&cat2=51)
  + `5+ App`项目扩展原生能力需开发`5+原生插件`，仅支持本地离线打包。
  + `5+ App` projects need to develop `5+ native plug-ins` to expand native capabilities, and only support local offline packaging.

> `5+原生插件`将不再继续维护，建议开发者升级应用为`uni-app`项目并使用`uni原生插件`。如需继续使用5+原生插件，请参考以下文档：
> `5+ native plug-ins` will no longer be maintained. It is recommended that developers upgrade their applications to the `uni-app` project and use `uni native plug-ins`. If you want to continue using 5+ native plugins, please refer to the following documents:
- [Android平台5+原生插件开发](http://ask.dcloud.net.cn/article/66)
- [Android platform 5+ native plug-in development](http://ask.dcloud.net.cn/article/66)
- [iOS平台5+原生插件开发](http://ask.dcloud.net.cn/article/67)
- [iOS platform 5+ native plug-in development](http://ask.dcloud.net.cn/article/67)



## 注意
## Notice
原 `5+ SDK` 的 `Widget方式集成` 和 `WebView方式集成` 将不再继续维护支持，相关功能已迁移到[uni小程序 SDK](/README.md)，因此建议开发者尽快将应用升级到`uni-app`项目。
The `Widget integration` and `WebView integration` of the original `5+ SDK` will no longer be maintained and supported, and the relevant functions have been migrated to [uni applet SDK](/README.md), so it is recommended that developers apply the application as soon as possible Upgrade to `uni-app` project.

`5+ App`项目如需继续使用Widget/Webview方式集成，请参考以下文档：
If `5+ App` projects need to continue to use Widget/Webview integration, please refer to the following documents:
- [Android平台Widget方式集成5+SDK](http://ask.dcloud.net.cn/article/81)
- [Android Platform Widget Integration 5+SDK](http://ask.dcloud.net.cn/article/81)
- [Android平台WebView方式集成5+SDK](http://ask.dcloud.net.cn/article/80)
- [Android platform WebView integration 5+SDK](http://ask.dcloud.net.cn/article/80)
- [iOS平台Widget方式集成5+SDK](http://ask.dcloud.net.cn/article/84)
- [iOS platform Widget way to integrate 5+SDK](http://ask.dcloud.net.cn/article/84)
- [iOS平台WebView方式集成5+SDK](http://ask.dcloud.net.cn/article/83)
- [iOS platform WebView integration 5+SDK](http://ask.dcloud.net.cn/article/83)

>  Widget/Webview方式集成已废弃，请不要在新项目使用此集成方式，推荐使用`uni小程序SDK`
> Widget/Webview integration is deprecated, please do not use this integration method in new projects, it is recommended to use `uni applet SDK`
