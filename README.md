## 简介 
uni小程序SDK，是为原生App打造的可运行基于 [uni-app](https://uniapp.dcloud.io/) 开发的小程序前端项目的框架，从而帮助原生App快速获取小程序的能力，效果如下：

<img src="https://ask.dcloud.net.cn/uploads/article/20200208/17968bd5afe1e15f1b0b4965a194726f.gif" width=230>

## 基本概念

### uni-app

首先您需要了解什么是`uni-app`，[uni-app](https://uniapp.dcloud.io/) 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到 H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台，并且在 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 中可直接打包生成 Android、iOS App。了解更多关于 `uni-app` 请点击查看 [uni-app 官网](uni-apphttps://uniapp.dcloud.io/)。

### uni小程序SDK

uni小程序SDK是原生SDK，提供 Android 版本 和 iOS 版本，需要在原生工程中集成，然后即可运行用`uni-app`框架开发的小程序前端项目，一套代码两端运行

**名词解释**

- 宿主：想要构建小程序的原生App，集成uni小程序SDK的宿主
- 小程序：运行在宿主中的前端代码编写的小程序项目，使用 uni-app 框架开发
- wgt：小程序应用资源包，即使用 uni-app 框架开发的项目，导出的小程序应用资源包
- HBuilderX：开发 uni-app 的 [IDE 工具](https://www.dcloud.io/hbuilderx.html)

**注意**
	
1. uni小程序SDK 仅支持使用 uni-app 开发的小程序，不支持纯 wxml 微信小程序运行。但 uni-app 支持使用 wxml 格式的小程序组件。
2. uni小程序SDK 仅支持 uni-app 的 v3 编译器。使用老版的开发者，需首先保障应用可以运行在 v3 编译模式下。

## 特色
uni-app 在 app 端是双渲染引擎，可以像微信那样使用webview渲染，也可以使用改造版的weex进行原生渲染。其中 webview 渲染在 Android 上也同时支持系统webview渲染和x5渲染。

- 性能
uni小程序sdk的性能，与uni-app的app端v3编译器相同，性能超过市面其他小程序引擎。在启动速度、页面加载速度、逻辑层与视图层通信优化等方面均优有更优秀的表现。
- 功能
uni小程序sdk的功能，与uni-app的app端功能相同，所有原生能力均可调用。不同于小程序的限制和有限API，uni小程序sdk的功能更加强大。
- 插件生态
[uni-app插件市场](https://ext.dcloud.net.cn/)有大量丰富的插件。

## 应用场景
1. 宿主App构建自己的应用生态，可以面向广泛开发者，也可以定向部分开发者
2. 原生App利用小程序模式对模块解耦，让不同模块的开发团队各自独立发版，灵活更新
3. 原生App中部分功能使用uni-app实现，降低开发成本、提升发布效率

## 集成流程
1. 宿主开发者下载uni小程序sdk，根据文档集成到宿主App中
2. 小程序开发者使用 HBuilderX 创建 uni-app 项目并开发功能，开发阶段可以直接在 HBuilderX 内置基座进行测试，开发完毕后在发行菜单导出wgt包
3. 宿主开发者将 wgt 集成到宿主App中，可离线集成直接打包进去，也可以在线下载wgt
4. 通过 uni小程序sdk 的 api 将 wgt 资源部署到运行路径，然后即可跳转到该资源对应的小程序应用中
5. uni小程序支持 wgt升级，可以在小程序中直接调用 api 在线更新 wgt 资源，即热更新 [参考文档](https://ask.dcloud.net.cn/article/35667)

## 注意
- uni小程序sdk 仅支持在原生App中集成使用，不支持 HBuilderX 打包生成的App中集成。如需在uni-app项目中使用，请加QQ群984388064申请
- uni小程序sdk 支持同时运行多个小程序实例，但android平台最多打开三个
- uni 小程序 sdk 无法使用插件市场中付费的原生插件

## 案例
- **CSDN App：** Appstore新闻类榜单前十。App内部众多栏目做成小程序形式。[App下载](https://www.csdn.net/apps/download)
- **顺丰速运：** 顺丰速运官方提供查、寄快递，网点查询、邮费查询等相关服务的一站式快递物流服务软件。[App下载](https://a.app.qq.com/o/simple.jsp?pkgname=com.sf.activity)、[AppStore下载](https://apps.apple.com/cn/app/id899529698)
- **驿收发：** 驿收发快递驿站App。[AppStore下载](https://apps.apple.com/cn/app/id1515218332)
- **我i科大：** 河南科技大学移动App。[官方下载](https://download.haust.edu.cn/haust/getApp/ihaust.apk)、[AppStore下载](https://apps.apple.com/cn/app/id1119046005)
- **郑州大学移动校园：** 郑州大学官方校园生活工具App。[官方下载](http://app6.zzu.edu.cn/index.html)、[AppStore下载](https://apps.apple.com/cn/app/id1219859554)
- **多彩洛职：** 洛阳职业技术学院移动App。[官方下载](http://download.lypt.edu.cn/dclz/dclz.apk)、[AppStore下载](https://apps.apple.com/cn/app/id1532844806)
- **大参林百科：** 大参林医药集团股份有限公司智能零售App。[App下载](https://a.app.qq.com/o/simple.jsp?pkgname=com.dsl.newwiki)、[AppStore下载](https://apps.apple.com/cn/app/id1437878101)
- **网易藏宝阁：** 网易官方游戏交易平台。 [App下载](https://a.app.qq.com/o/simple.jsp?pkgname=com.netease.cbg)
- **咪咕视频爱看版：** 咪咕视频爱看版App。[App下载](https://android.myapp.com/myapp/detail.htm?apkName=com.wondertek.miguaikan)、[AppStore下载](https://apps.apple.com/cn/app/id1168490851)
- **剧豆星光：** 帮助线下门店更好的进行积分营销App。[App下载](https://a.app.qq.com/o/simple.jsp?pkgname=com.xar.weichat)
- **国家医保服务平台：** 国家统一的医保服务平台App，为百姓提供参保缴费、信息查询、待遇申请、业务经办等多种使用功能服务。 [App下载](https://a.app.qq.com/o/simple.jsp?pkgname=cn.hsa.app)、[AppStore下载](https://apps.apple.com/cn/app/id1490383593)
- **乐健体育：** 一款智能云端健身App。[App下载](https://a.app.qq.com/o/simple.jsp?pkgname=com.ledreamer.zz)
- **海康威视：** 海康互联App。[官方下载](https://www.me-app.net/Sentinels)
- **伴玩：** 比心陪玩交友平台App。[App下载](https://a.app.qq.com/o/simple.jsp?pkgname=com.wanjiu.heishi)

## FAQ
Q：uni小程序sdk 与 App离线sdk 的差别是什么？
A：解决两种不同的需求场景，前者的使用场景是你已经有原生App，在此基础上扩展宿主App的小程序能力，或者用小程序替换原生App的部分功能模块，仅支持uni-app并使用v3编译器；后者的使用场景是你没有原生App，用DCloud的工具来开发App，又不想使用云打包，则可以使用App离线sdk打包发布为原生App，App离线sdk支持5+ App、uni-app，不支持wap2app。虽然App离线sdk也可以集成到已有原生App中，但自从uni小程序sdk推出后，将不再推荐这种用法。

Q：想了解 uni小程序sdk 都有哪些js api，和微信小程序相比如何？
A：uni小程序sdk的js api比微信小程序更多，不同于微信小程序的“小”的限制，uni小程序sdk的功能更接近于正常的app，没有包体积限制，并且提供了更丰富的api，以支持完整app的开发。文档和演示demo见：[https://uniapp.dcloud.io/](https://uniapp.dcloud.io/)

Q: uni小程序不需要集成分享、支付等第三方的功能。集成到我的Android项目中APK的体积会增加多少？
A: 如果排除视频、地图、分享、支付、登录、直播pusher等sdk，只集成[基础模块](UniMPDocs/UseSdk/android?id=unimpsdksdklibs-依赖库说明)。占用APK体积大小如下：

  |cpu型号.so选择|apk占用大小   
  |:---|:---
  |armeabi-v7a|约7MB左右
  |'armeabi-v7a'、'x86'、'arm64-v8a'|约16MB左右

Q：支持uni小程序的基座与标准的HX基座权限方面有什么变化？
A：两者权限基本一致，除了uni小程序的基座会增加下列权限，用于支持创建小程序桌面快捷方式

  |权限|
  |:---|
  |com.android.launcher.permission.INSTALL_SHORTCUT|
  |com.android.launcher.permission.UNINSTALL_SHORTCUT|
  |com.android.launcher.permission.READ_SETTINGS|
  |com.android.launcher2.permission.READ_SETTINGS|
  |com.android.launcher3.permission.READ_SETTINGS|
