传统webview的原生扩展是通过webview桥方式，比如5+app。
uni-app的js运行在独立的jscore里，而不是webview里，它的原生扩展是另一套模式，是基于开源项目[weex](https://weex.apache.org/cn/guide/index.html)架构的扩展机制。

weex的插件也可以拿到uni-app生态中使用。

从开发方式相比，uni-app的原生插件开发模式更简单。webview桥方式需要在原生层和js层分别做很多工作。而uni-app的原生插件开发主要在原生层做封装即可。
从使用方式相比，5+的原生扩展需要离线打包，而uni-app的插件可以在线打包，插件市场还有很多优秀原生插件可拿来即用。

uni-app的原生插件分两种类型：
- Module模式：能力扩展，无嵌入窗体的UI控件。大部分插件都是属于此类，比如调用计步器API。代码写法为通过js进行require，然后调用该插件对象的方法。如涉及一些弹出框、全屏ui，也仍然属于Module模式。类似于前端里的js sdk。
- Component模式：在窗体中内嵌显示某个原生ui组件。比如窗体局部内嵌某个地图厂商的map组件，上下混排其他前端内容，就需要把这个原生地图sdk封装为Componet模式。代码写法与vue组件相同，在template里写组件标签。类似于前端里的vue组件。

在uni-app中支持vue和nvue两种页面，vue页面基于webview排版引擎渲染，nvue页面基于原生排版引擎渲染。

- vue页面中仅支持使用Module类型的原生插件，不支持调用同步方法返回数据
- nvue页面中支持使用Module和Component两种类型的原生插件。也就是如需实现嵌入页面的ui组件，前提是该页面需要使用nvue编写。

## uni原生插件上线步骤
### 下载5+ SDK配置原生开发环境，在原生环境中开发调试插件业务逻辑
- Android平台需使用AndroidStudio
- iOS平台需XCode11+（需Mac环境）

### 开发调试完成后导出原生库文件
- Android平台可以是jar或aar包
- iOS平台可以是.a或.framework包

### 生成uni原生插件包（zip）
- 配置package.json文件
- 与前面导出的原生库文件一起打包

### 在HX中使用uni原生插件包提交云端打包，验证uni原生插件包是否正确
- 上传uni原生插件包到插件市场审核
- 审核成功后其他开发者可购买、使用uni原生插件
