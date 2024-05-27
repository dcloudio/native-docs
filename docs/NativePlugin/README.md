## 简介

**App原生插件已不再更新维护，推荐插件开发者改用uts插件。uni-app 和 uni-app x 均可使用。[详见](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)**

当HBuilderX中提供的能力无法满足App功能需求，需要通过使用Andorid/iOS原生开发实现时，可使用`App离线SDK`开发原生插件来扩展原生能力。

根据项目类型，可以通过以下方式扩展开发原生插件
- uni原生插件：
`uni-app`项目中使用，uni-app的js运行在独立的jscore里，而不是webview里，它的原生扩展是基于开源项目[weex](http://doc.weex.io/zh/)架构的扩展机制。
  + [Android平台uni原生插件开发教程](/NativePlugin/course/android.md)
  + [iOS平台uni原生插件开发教程](/NativePlugin/course/ios.md)
- 5+原生插件：
`5+ App`、`Wap2App`项目中使用，基于Webview的原生扩展，是通过webview桥方式的扩展机制(3.1.5版本之后不支持)。

从开发方式相比，uni原生插件开发模式更简单。webview桥方式需要在原生层和js层分别做很多工作，而uni原生插件开发主要在原生层做封装即可。
从使用方式相比，5+原生插件需要本地离线打包，而uni原生插件不仅支持本地离线打包，还支持在线云端打包，同时插件市场还有很多优秀原生插件可拿来即用。

> `5+原生插件`将不再继续维护，建议开发者升级应用为`uni-app`项目并使用`uni原生插件`。如需继续使用5+原生插件，请参考以下文档：
- [Android平台5+原生插件开发](http://ask.dcloud.net.cn/article/66)
- [iOS平台5+原生插件开发](http://ask.dcloud.net.cn/article/67)

## 功能
#### uni原生插件类型
- Module模式：能力扩展，无嵌入窗体的UI控件。大部分插件都是属于此类，比如调用计步器API。代码写法为通过js进行require，然后调用该插件对象的方法。如涉及一些弹出框、全屏ui，也仍然属于Module模式。类似于前端里的js sdk。
- Component模式：在窗体中内嵌显示某个原生ui组件。比如窗体局部内嵌某个地图厂商的map组件，上下混排其他前端内容，就需要把这个原生地图sdk封装为Component模式。代码写法与vue组件相同，在template里写组件标签。类似于前端里的vue组件。

uni-app在App端支持双渲染引擎，支持vue和nvue两种页面，vue页面基于webview排版引擎渲染，nvue页面基于优化版的weex原生排版引擎渲染，weex的插件也可以拿到`uni-app`生态中使用。
- vue页面中仅支持使用Module类型的原生插件，不支持调用同步方法返回数据
- nvue页面中支持使用Module和Component两种类型的原生插件。也就是如需实现嵌入页面的ui组件，前提是该页面需要使用nvue编写。


#### uni原生插件上线步骤
- 下载App离线SDK
  + [Android平台App离线SDK下载](/AppDocs/download/android.md)
  + [iOS平台App离线SDK下载](/AppDocs/download/ios.md)
- 配置原生开发环境，在原生环境中开发调试插件业务逻辑
  + Android平台需使用AndroidStudio
  + iOS平台需XCode11+（需Mac环境）
- 开发调试完成后导出原生库文件
  + Android平台可以是jar或aar包
  + iOS平台可以是.a或.framework包
- 生成uni原生插件包（zip）
  + 配置package.json文件
  + 与前面导出的原生库文件一起打包
- 在HX中使用uni原生插件包提交云端打包，验证uni原生插件包是否正确
- 上传uni原生插件包到插件市场审核
- 审核成功后其他开发者可购买、使用uni原生插件


## 注意
原生插件开发后，可以上插件市场，也可以不上。如内部使用，则无需上架插件市场。
如需上插件市场，则必须按指定格式压缩为zip包，具体参考[uni原生插件包格式](/NativePlugin/course/package.md)，并提供详细的文档及示例。

#### 云端打包测试退费
插件开发过程中调测云端打包，可能会超过40M的免费打包额度。如插件开发是为了上插件市场而不是内部使用，则可以在成功上架市场后申请退费。请使用注册账号邮箱发送邮件到bd@dcloud.io进行申请，审核通过后返还测试产生的超限打包费用。

#### uni原生插件下架
插件下架会导致已经使用该插件的app无法再打包，这涉及到插件使用者的利益，所以原则上不允许插件下架。如有特殊原因需要下架请使用注册账号邮箱发邮件到service@dcloud.io进行申请，并详细描述下架原因。

#### uni原生插件更新
插件作者需注意保持好版本质量和向下兼容。一旦提交市场新版插件，旧版插件就不能再使用。已经使用旧版插件的App，此后再次云打包，会直接集成新版插件。也就是插件的更新不当可能造成已经使用插件的开发者无法及时发布新版应用。

