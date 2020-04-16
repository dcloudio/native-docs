## HTML5+ SDK 概述##

HTML5 Plus SDK，简称5+SDK，是把HTML5+运行环境（5+ runtime）封装为原生SDK，可作为以下用途：

1. 使用5+ SDK实现本地（离线）打包。
2. 通过原生开发扩展5+runtime的能力，uni-app项目推荐开发[uni-app原生插件](https://ask.dcloud.net.cn/article/35428)，5+APP项目开发[5+插件](/5PlusDocs/README.md?id=开发html5-功能扩展)。
3. 在现有原生项目中使用HTML5+ SDK替换原有的webview，以获得更强的web增强表现。

**uni-app项目发行为APP时也可以使用5+SDK本地（离线）打包**

## HTML5+ 本地（离线）打包

> HBuilder的云端打包虽然方便，但不能打超过40M的包。通过HTML5+SDK的本地打包方案可以解决打包大小限制的问题。

**Android平台：**

- [Android平台本地（离线）打包教程，导入5+SDK中自带的示例工程](/5PlusDocs/usesdk/useHBuilderHello.md)
- [Android平台本地（离线）打包教程，创建最简打包工程](/5PlusDocs/usesdk/android.md)


<!--
- [Android平台本地（离线）打包，配置开通广告](https://ask.dcloud.net.cn/article/13141)
- [Android平台本地（离线）打包，常见问题](https://ask.dcloud.net.cn/article/39)
- [Android平台uni-app本地（离线）打包注意事项](https://ask.dcloud.net.cn/article/35139)
-->

**iOS平台：**

**离线打包的配置方法可参考文档：**

- [iOS离线打包教程](/5PlusDocs/usesdk/ios.md)
<!--- [安卓离线打包](http://ask.dcloud.net.cn/article/38)-->
<!--- - [uni-app离线打包注意事项及配置](http://ask.dcloud.net.cn/article/35139)-->

## 开发HTML5+ 功能扩展

> 开发者可以使用原生语言调用HTML5+ SDK，扩展HTML5+ runtime的功能，并打包成手机应用进行发布。
开发者还可以将开发完成的新功能编译成静态库或者jar包分享给其他开发者，让HTML5+获得更丰富的能力。

**开发方法和步骤请参考文档：**

[IOS平台第三方插件开发指导](/5PlusDocs/extends/iOS.md)

[Android平台第三方插件开发指导](/5PlusDocs/extends/android.md)


<!--
## HTML5+SDK 集成
> 开发者可以在现有的项目中集成 HTML5+SDK，使自己开发中的项目能够使用HTLM5+扩展功能。
HTML5+集成方式有两种，Widget应用方式集成和Webview方式集成。
如果想在原生应用中启动一个完整的HTML5+ App，应该使用widget方式；
如果只是某个页面的webview想换成HTML5+ runtime的webview，应该使用webview方式。


#### Widget插件集成方式####
> 如果开发者需要在现有开发中应用的基础上使用HTML5+SDK显示一个手机端的HTML5+ APP，可以使用Widget应用的方式集成HTML5+SDK。
使用Widget集成方式，开发者可快速的实现在手机端管理一个或多个支持HTML5+能力的移动WebAPP。

##### 集成方式可参考文档

- [Android平台以Widget方式集成HTML5+SDK方法](http://ask.dcloud.net.cn/article/81)
- [iOS平台以Widget方式集成HTML5+SDK方法](http://ask.dcloud.net.cn/article/84)

#### Webview集成方式####
> 开发者在项目开发的过程中，如需在某些流程下需要显示一个支持HTML5+扩展能力的WebView。开发者可以选择使用Webview的方式集成HTML5+SDK。
使用Webview方式集成HTML5+SDK，可以指定显示本地的HTML页面，也可以指定一个网络地址。开发者可在打开的Webview中调用全部HTML5+ 的JS API。

##### 集成方式可参考文档

- [Android平台以WebView方式集成HTML5+SDK方法](http://ask.dcloud.net.cn/article/80)
- [iOS平台以WebView方式集成HTML5+SDK方法](http://ask.dcloud.net.cn/article/83)
-->
