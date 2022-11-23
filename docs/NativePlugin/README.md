## 简介
## Introduction
当HBuilderX中提供的能力无法满足App功能需求，需要通过使用Andorid/iOS原生开发实现时，可使用`App离线SDK`开发原生插件来扩展原生能力。
When the capabilities provided in HBuilderX cannot meet the functional requirements of the App and need to be realized through native development using Andorid/iOS, you can use the `App Offline SDK` to develop native plug-ins to expand the native capabilities.

根据项目类型，可以通过以下方式扩展开发原生插件
According to the project type, the native plug-in can be extended and developed in the following ways
- uni原生插件：
- uni native plugin:
`uni-app`项目中使用，uni-app的js运行在独立的jscore里，而不是webview里，它的原生扩展是基于开源项目[weex](http://doc.weex.io/zh/)架构的扩展机制。
Used in the `uni-app` project, the js of uni-app runs in an independent jscore instead of webview, and its native extension is based on the open source project [weex](http://doc.weex.io/zh/ ) architecture extension mechanism.
  + [Android平台uni原生插件开发教程](/NativePlugin/course/android.md)
  + [Android platform uni native plug-in development tutorial](/NativePlugin/course/android.md)
  + [iOS平台uni原生插件开发教程](/NativePlugin/course/ios.md)
  + [iOS platform uni native plug-in development tutorial](/NativePlugin/course/ios.md)
- 5+原生插件：
- 5+ native plugins:
`5+ App`、`Wap2App`项目中使用，基于Webview的原生扩展，是通过webview桥方式的扩展机制(3.1.5版本之后不支持)。
Used in the `5+ App` and `Wap2App` projects, the native extension based on Webview is an extension mechanism through the webview bridge (not supported after version 3.1.5).

从开发方式相比，uni原生插件开发模式更简单。webview桥方式需要在原生层和js层分别做很多工作，而uni原生插件开发主要在原生层做封装即可。
Compared with the development method, the uni native plug-in development mode is simpler. The webview bridge method needs to do a lot of work on the native layer and the js layer respectively, while the uni native plug-in development mainly needs to be encapsulated in the native layer.
从使用方式相比，5+原生插件需要本地离线打包，而uni原生插件不仅支持本地离线打包，还支持在线云端打包，同时插件市场还有很多优秀原生插件可拿来即用。
In terms of usage, 5+ native plug-ins need local offline packaging, while uni native plug-ins not only support local offline packaging, but also support online cloud packaging. At the same time, there are many excellent native plug-ins available in the plug-in market.

> `5+原生插件`将不再继续维护，建议开发者升级应用为`uni-app`项目并使用`uni原生插件`。如需继续使用5+原生插件，请参考以下文档：
> `5+ native plug-ins` will no longer be maintained. It is recommended that developers upgrade their applications to the `uni-app` project and use `uni native plug-ins`. If you want to continue using 5+ native plugins, please refer to the following documents:
- [Android平台5+原生插件开发](http://ask.dcloud.net.cn/article/66)
- [Android platform 5+ native plug-in development](http://ask.dcloud.net.cn/article/66)
- [iOS平台5+原生插件开发](http://ask.dcloud.net.cn/article/67)
- [iOS platform 5+ native plug-in development](http://ask.dcloud.net.cn/article/67)

## 功能
## Function
#### uni原生插件类型
#### uni native plugin type
- Module模式：能力扩展，无嵌入窗体的UI控件。大部分插件都是属于此类，比如调用计步器API。代码写法为通过js进行require，然后调用该插件对象的方法。如涉及一些弹出框、全屏ui，也仍然属于Module模式。类似于前端里的js sdk。
- Module mode: Capability expansion, no UI control embedded in the form. Most plugins fall into this category, such as calling the pedometer API. The code is written as require through js, and then call the method of the plug-in object. If it involves some pop-up boxes and full-screen ui, it still belongs to the Module mode. Similar to the js sdk in the front end.
- Component模式：在窗体中内嵌显示某个原生ui组件。比如窗体局部内嵌某个地图厂商的map组件，上下混排其他前端内容，就需要把这个原生地图sdk封装为Component模式。代码写法与vue组件相同，在template里写组件标签。类似于前端里的vue组件。
- Component mode: display a native ui component embedded in the form. For example, if a map component of a map manufacturer is partially embedded in a form, and other front-end content is mixed up and down, it is necessary to encapsulate this native map sdk into a Component mode. The code is written in the same way as the vue component, and the component tag is written in the template. Similar to the vue component in the front end.

uni-app在App端支持双渲染引擎，支持vue和nvue两种页面，vue页面基于webview排版引擎渲染，nvue页面基于优化版的weex原生排版引擎渲染，weex的插件也可以拿到`uni-app`生态中使用。
uni-app supports dual rendering engines on the App side, and supports both vue and nvue pages. The vue page is rendered based on the webview typesetting engine, and the nvue page is rendered based on the optimized version of the weex native typesetting engine. The weex plug-in can also be obtained by `uni-app `Ecological use.
- vue页面中仅支持使用Module类型的原生插件，不支持调用同步方法返回数据
- The vue page only supports native plug-ins of the Module type, and does not support calling synchronous methods to return data
- nvue页面中支持使用Module和Component两种类型的原生插件。也就是如需实现嵌入页面的ui组件，前提是该页面需要使用nvue编写。
- The nvue page supports the use of two types of native plug-ins, Module and Component. That is to say, if you need to implement the ui component embedded in the page, the premise is that the page needs to be written in nvue.


#### uni原生插件上线步骤
#### uni native plug-in online steps
- 下载App离线SDK
- Download App Offline SDK
  + [Android平台App离线SDK下载](/AppDocs/download/android.md)
  + [Android Platform App Offline SDK Download](/AppDocs/download/android.md)
  + [iOS平台App离线SDK下载](/AppDocs/download/ios.md)
  + [iOS Platform App Offline SDK Download](/AppDocs/download/ios.md)
- 配置原生开发环境，在原生环境中开发调试插件业务逻辑
- Configure the native development environment, develop and debug plug-in business logic in the native environment
  + Android平台需使用AndroidStudio
  + Android platform needs to use AndroidStudio
  + iOS平台需XCode11+（需Mac环境）
  + iOS platform requires XCode11+ (requires Mac environment)
- 开发调试完成后导出原生库文件
- Export native library files after development and debugging
  + Android平台可以是jar或aar包
  + Android platform can be jar or aar package
  + iOS平台可以是.a或.framework包
  + iOS platform can be .a or .framework package
- 生成uni原生插件包（zip）
- Generate uni native plug-in package (zip)
  + 配置package.json文件
  + configure package.json file
  + 与前面导出的原生库文件一起打包
  + Packaged together with the previously exported native library files
- 在HX中使用uni原生插件包提交云端打包，验证uni原生插件包是否正确
-Use the uni native plug-in package in HX to submit cloud packaging, and verify whether the uni native plug-in package is correct
- 上传uni原生插件包到插件市场审核
- Upload the uni native plug-in package to the plug-in market for review
- 审核成功后其他开发者可购买、使用uni原生插件
- After the audit is successful, other developers can purchase and use uni native plug-ins


## 注意
## Notice
原生插件开发后，可以上插件市场，也可以不上。如内部使用，则无需上架插件市场。
After the native plug-in is developed, it may or may not be listed on the plug-in market. For internal use, there is no need to list the plug-in market.
如需上插件市场，则必须按指定格式压缩为zip包，具体参考[uni原生插件包格式](/NativePlugin/course/package.md)，并提供详细的文档及示例。
If you want to enter the plug-in market, you must compress it into a zip package according to the specified format. For details, refer to [uni Native Plug-in Package Format](/NativePlugin/course/package.md), and provide detailed documents and examples.

#### 云端打包测试退费
#### Cloud packaging test refund
插件开发过程中调测云端打包，可能会超过40M的免费打包额度。如插件开发是为了上插件市场而不是内部使用，则可以在成功上架市场后申请退费。请使用注册账号邮箱发送邮件到bd@dcloud.io进行申请，审核通过后返还测试产生的超限打包费用。
During the plug-in development process, testing cloud packaging may exceed the free packaging quota of 40M. If the plug-in is developed for the plug-in market instead of internal use, you can apply for a refund after it is successfully put on the market. Please use the registered account email address to send an email to bd@dcloud.io to apply. After the review is passed, the over-limit packaging fee generated by the test will be refunded.

#### uni原生插件下架
#### uni native plug-in removed
插件下架会导致已经使用该插件的app无法再打包，这涉及到插件使用者的利益，所以原则上不允许插件下架。如有特殊原因需要下架请使用注册账号邮箱发邮件到service@dcloud.io进行申请，并详细描述下架原因。
The removal of the plug-in will prevent the app that has already used the plug-in from being packaged again, which involves the interests of plug-in users, so in principle, the removal of the plug-in is not allowed. If you need to take it off the shelf for special reasons, please use the registered account email address to send an email to service@dcloud.io to apply, and describe the reason for the takedown in detail.

#### uni原生插件更新
#### uni native plugin update
插件作者需注意保持好版本质量和向下兼容。一旦提交市场新版插件，旧版插件就不能再使用。已经使用旧版插件的App，此后再次云打包，会直接集成新版插件。也就是插件的更新不当可能造成已经使用插件的开发者无法及时发布新版应用。
Plug-in authors need to pay attention to maintaining good version quality and backward compatibility. Once a new version of the plugin is submitted to the market, the old version of the plugin can no longer be used. Apps that have used the old version of the plug-in will be directly integrated with the new version of the plug-in if they are packaged in the cloud again. That is, improper update of the plug-in may cause the developers who have already used the plug-in to be unable to release the new version of the application in time.

