## 概述 
uni小程序SDK，是一个用于原生App中集成的SDK，它可以帮助原生App快速实现小程序的能力，效果如下：

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200208/17968bd5afe1e15f1b0b4965a194726f.gif" width=230>

## 基本概念
- 宿主：想要构建小程序的原生App，集成uni小程序SDK的宿主
- 小程序：运行在宿主中的前端代码编写的小程序，使用uni-app框架开发

	注意：
	
	1. uni小程序SDK仅支持使用uni-app开发的小程序，不支持纯wxml微信小程序运行。但uni-app支持使用wxml格式的小程序组件。
	2. uni小程序SDK仅支持uni-app的v3编译器。使用老版的开发者，需首先保障应用可以运行在v3编译模式下。

## 集成流程
1. 宿主开发者下载uni小程序sdk，根据文档集成到宿主App中
2. 小程序开发者使用 HBuilderX 创建 uni-app 项目并开发功能，开发阶段可以直接在 HBuilderX 内置基座进行测试，开发完毕后在发行菜单导出wgt包
3. 宿主开发者将 wgt 集成到宿主App中，可离线集成直接打包进去，也可以在线下载wgt
4. 通过 uni小程序sdk 的 api 将 wgt 资源部署到运行路径，然后即可跳转到该资源对应的小程序页面中
5. uni小程序支持 wgt升级，可以在小程序中直接调用 api 在线更新 wgt 资源，即热更新[参考文档](https://ask.dcloud.net.cn/article/35667)

## 特色
uni-app在app端是双渲染引擎，可以像微信那样使用webview渲染，也可以使用改造版的weex进行原生渲染。包括webview渲染在Android上也同时支持系统webview渲染和x5渲染。

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

## 注意
- 目前uni小程序sdk仅支持同时运行一个小程序实例，启动下一个小程序需关闭上一个小程序
- uni小程序sdk无法使用插件市场中付费的原生插件，需自己开发

## FAQ
Q：uni小程序sdk与5+ sdk的差别是什么？
A：解决两种不同的需求场景，前者的使用场景是你已经有原生App，在此基础上扩展宿主App的小程序能力，或者用小程序替换原生App的部分功能模块，仅支持uni-app并使用v3编译器；后者的使用场景是你没有原生App时使用5+ SDK本地离线打包发布为原生App，或者替换你已有的原生App，支持5+ App、wap2app、uni-app等。虽然5+ sdk也可以集成到已有原生App中，但后续会逐步迁移放到uni小程序sdk中。

Q：想了解uni小程序sdk都有哪些js api，和微信小程序相比如何？
A：uni小程序sdk的js api比微信小程序的多，不同于微信小程序的“小”的限制，uni小程序sdk的功能更接近于正常的app，没有包体积限制，并且提供了更多丰富的api，以支持正常app的开发。文档和演示demo见：[https://uniapp.dcloud.io/](https://uniapp.dcloud.io/)

Q: uni小程序不需要集成分享、支付等第三方的功能。集成到我的Android项目中APK的体积会增加多少？
A: 如果排除视频、地图、分享、支付、登录、直播pusher等功只集成[基础模块](https://ask.dcloud.net.cn/article/36958#baseaar)。占用APK体积大小如下：

  |cpu型号.so选择|apk占用大小   
  |:---|:---
  |armeabi-v7a|约7MB左右
  |'armeabi-v7a'、'x86'、'arm64-v8a'|约16MB左右