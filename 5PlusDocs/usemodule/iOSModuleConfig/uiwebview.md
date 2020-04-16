## Appstore审核反馈废弃UIWebview APIs问题的说明
iOS有UIWebview和WKWebview两种webview。从iOS13开始苹果将UIWebview列为过期API。

**2020年4月起App Store将不再接受使用UIWebView的新App上架、2020年12月起将不再接受使用UIWebView的App更新。**

从HBuilderX 2.2.5起，iOS上默认均已经是WKWebview，除非开发者手动在代码中指定要用UIWebview，否则实际渲染的页面都是在WKWebview里渲染的。
不过，虽然实际页面是WKWebview渲染的，但App底层引擎源码里仍然有UIWebview的可选引用。Appstore的机审会发现二进制代码中包括对UIWebview的引用，从而引发告警。
从HBuilderX 2.6.6起，uiWebview从基础引擎中移除，变成可选模块（manifest里选择）。机审也没有提示了。

老HBuilder和HBuilderX 2.2.5之前的版本，App端策略如下：
- 5+ APP（含wap2app）
默认为UIWebview。
- uni-app
vue页面中web-view组件默认使用UIWebview，nvue页面中web-view组件使用WKWebview。

**HBuilderX 2.2.5+版本已将iOS上所有webview的默认内核由UIWebview调整为WKWebview。**

<a id="uiwebview"/>

**HBuilderX 2.6.6+版本已将iOS中所有UIWebview代码从基础引擎中摘除，独立为UIWebview模块，如继续使用UIWebview则需在manifest中勾选使用UIWebview模块**

## 配置使用UIWebview模块
在manifest.json文件的“（App）模块权限配置”页的“打包模块配置”勾选“iOS UIWebview”：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/uiwebview/50125.png)

**配置后需提交云端打包生效**

## 5+App（含wap2app）如何切换iOS默认使用UIWebview或WKWebview内核？
HBuilderX 2.2.5以前的版本，iOS上webview的默认为UIWebview，HBuilderX2.2.5及以后的版本默认改为WKWebview。
如果要修改默认值，可在manifest.json中配置。
在manifest.json文件源码视图中设置plus -> kernel -> ios 的值为 "WKWebview"或"UIWebview"：
```json
	"plus": {
		"kernel": {
			"ios": "UIWebview"    //或者 "WKWebview"
		},
		// ...
	}
```

## uni-app 如何配置web-view组件默认使用UIWebview或WKWebview内核？
HBuilderX 2.2.5以前的版本，iOS上vue页面中web-view组件或调用5+ API创建的Webview窗口默认为UIWebview，HBuilderX2.2.5及以后的版本默认改为WKWebview。
如果要修改默认值，可在manifest.json中配置。
在manifest.json文件源码视图中设置 app-plus -> kernel -> ios 的值为 "WKWebview"或"UIWebview"：
```json
	"app-plus": {
		"kernel": {
			"ios": "UIWebview"    //或者 "WKWebview"
		},
		// ...
	}
```
**nvue页面中的web-view组件强制使用WKWebview，不可配置**

## 如何使用5+ API（plus.webview.create）创建Webview窗口时指定使用UIWebview或WKWebview内核？
创建Webvie窗口时可通过kernel属性指定内核，如下：
```javascript
// 通过kernel属性指定Webview的内核
var w = plus.webview.create('https://xxx.xxx.xxx', 'id', {
    'kernel': 'UIWebview'       //或者'WKWebview'
});
```
更多规范参考5+ API的 [WebviewStyles](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)

## 使用WKWebview的影响 

**使用WKWebview替换UIWebview将会影响以下功能：**
- 更严格的跨域访问限制
WKWebview认为本地html通过js访问网络及本地文件都算跨域访问（这种情况UIWebview不是跨域），跨域时访问网络资源使用5+ API（plus.net）来替换xmlhttp等传统ajax写法；ajax也不能访问本地文件，需使用5+ API（plus.io）读取本地文件，后者有个单独文章可参考：[https://ask.dcloud.net.cn/article/36858](https://ask.dcloud.net.cn/article/36858)。
使用exif.js等三方库可能涉及跨目录的本地图片下载请求，图像方向获取和旋转Plus有专门的API，无需使用js库做。
- 由于WKWebview不支持跨域访问，标准的xhr或jq的ajax，都无法跨域。mui框架中网络请求判断为跨域访问会自动调用5+ API（plus.net），如果在mui.plusReady触发前调用，因为5+ API没有准备好会报“Script error.filename:lineno:0”错误，这时必须保证mui的网络请求在mui.plusReady后调用，或者直接改用plus.net写法。
- WKWebview下canvas也有跨域问题，比如canvas.toDataURL。
如果canvas使用网络图像遇到跨域问题，需要服务端设置图像的响应头：Access-Control-Allow-Origin
如果canvas使用本地图像遇到跨域问题，可以使用plus接口将图像转换为base64再使用，相关插件：https://ext.dcloud.net.cn/plugin?id=123
- iOS手机内存不足时，如果是UIWebview的应用，系统会整体回收这个App，现象是在重新打开已打开过的App时App整体重启。而WKWebview则是单个页面回收，这带来的坏处就是内存不足时，会单个页面白屏。详见[https://ask.dcloud.net.cn/article/35913](https://ask.dcloud.net.cn/article/35913)。uni-app不涉及此问题，如果是5+App，方式1是在manifest切回UIWebview，暂时UIWebview还可以上架，只是会收到警告。方式2时监听白屏事件，自行恢复页面：[https://ask.dcloud.net.cn/article/36540](https://ask.dcloud.net.cn/article/36540)
- iOS8、9上的WKWebview不支持websql，iOS10恢复支持
- 不支持plus.navigator.setCookie
- 不支持webview的overrideresource方法
- wk第一次渲染速度略慢于uiwebview；
- 由于资源拦截的API overrideresource 无法再使用，5+ APP（含wap2app）项目中，云打包时的js原生混淆功能会失效。如果要使用js原生混淆必须使用UIWebview。uni-app有单独的原生js加密方案，因为uni-app的js不运行在webview里，而是在独立的jscore里，所以不受影响。

但WKWebview的好处是：节省内存；滚动时懒加载的图片也可以实时渲染，而uiwebview在滚动停止后懒加载的图片才能显示。

如果同时在一个app里使用ui和wk两种webview，注意2种webview之间的cookie、localstorage、session不共享，但plus.storage是共享的。

## uni-app中Webview的使用注意
uni-app的js运行在独立的jscore中，而不是Webview中，不存在跨域问题。
uni-app的渲染层，在iOS下是强制wkwebview。如果你编写了renderjs代码，在渲染层执行js，则同样会遇到跨域问题。此时尽量把与跨域相关的操作放到普通的js逻辑层操作。
除了渲染层，还有一个web-view组件的问题要注意：

- uni-app的vue页面的web-view组件，从HBuilderX 2.2.5+起是WKWebview，之前版本默认是UIWebview
- uni-app的非自定义组件模式的js逻辑层，在HBuilderX 2.2.5之前是UIWebview。升级到HBuilderX2.3+后可能导致网络跨域问题，`fail{"statusCode":0,"errMsg":"request:fail abort"}`。不过非自定义组件已于2019年11月1日起停止支持。

如果需要调整uni-app下web-view组件的渲染内核设置，将manifest.json源码视图的app-plus -> kernel -> ios 的值设为 UIWebview。

### uni-app的nvue页面问题
nvue页面不使用webview渲染，但其中的web-view组件说明如下。
- nvue的weex 组件模式
weex模式下的web-view组件是weex自己实现的，它目前仍然使用UIWebview。官方会追踪weex的升级。
- nvue的uni-app组件模式
web-view组件使用WKWebview。不可修改为uiWebview。

## 三方SDK中UIWebview的使用
目前如下SDK中仍然使用了UIWebview，不管是5+App还是uni-app。
- DCloud开屏广告
HBuilderX 2.2.5版之前，点击广告打开的内置网页仍然使用UIWebview加载
HBuilderX 2.2.5+版本已调整改为WKWebview。
- 支付宝
HBuilderX 2.6.10版本之前，支付宝SDK为15.5.7版本，包含了UIWebview
HBuilderX 2.6.10+版本已更新支付宝SDK为15.7.4，没有使用UIWebview
- 微信登录、分享、支付
HBuilderX 2.6.6+版本已更新微信SDK为1.8.6.2版本，没有使用UIWebview。
注意微信登录支付的SDK升级后，会强制要求通用链接。另见文档：[https://ask.dcloud.net.cn/article/36445](https://ask.dcloud.net.cn/article/36445)
- 微博登录、分享
HBuilderX 2.6.10版本之前，微博SDK为3.2.5版本，包含了UIWebview
HBuilderX 2.6.10+版本已更新微博SDK为3.2.7版本，没有使用UIWebview
- QQ登录、分享
HBuilderX 2.3.4+版本已更新QQSDK为3.3.6，没有使用UIWebview。
- 小米登录
小米官方SDK中使用了UIWebview，如果提交appstore建议不要使用小米登录


**5+App开发者建议直接升级为uni-app，一劳永逸，不会有跨域、白屏和无法加密等各种问题。**


## <a id="lixianuiwebview">离线打包配置UIWebview模块 </a>
如果开发者需要在离线打包工程中使用UIWebview功能，需要在自己的离线工程中配置UIWebview模块。
注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)
1. 依次添加下列Linker Flags: -lH5WEUIWebview,   
2. 添加下列依赖库:"JavaScriptCore.framework",
 "Foundation.framework",
 "UIKit.framework",