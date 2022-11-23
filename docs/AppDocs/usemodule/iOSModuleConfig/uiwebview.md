### Appstore审核反馈废弃UIWebview APIs问题的说明
### Explanation of Appstore review feedback on discarding UIWebview APIs
iOS有UIWebview和WKWebview两种webview。从iOS13开始苹果将UIWebview列为过期API。
iOS has two webviews, UIWebview and WKWebview. Starting from iOS13, Apple has listed UIWebview as an expired API.

**2020年4月起App Store将不再接受使用UIWebView的新App上架、2020年12月起将不再接受使用UIWebView的App更新。**
**From April 2020, the App Store will no longer accept new apps that use UIWebView, and from December 2020, it will no longer accept updates to apps that use UIWebView. **

从HBuilderX 2.2.5起，iOS上默认均已经是WKWebview，除非开发者手动在代码中指定要用UIWebview，否则实际渲染的页面都是在WKWebview里渲染的。
From HBuilderX 2.2.5 onwards, WKWebview is the default on iOS. Unless the developer manually specifies to use UIWebview in the code, the actual rendered pages are rendered in WKWebview.
不过，虽然实际页面是WKWebview渲染的，但App底层引擎源码里仍然有UIWebview的可选引用。Appstore的机审会发现二进制代码中包括对UIWebview的引用，从而引发告警。
However, although the actual page is rendered by WKWebview, there is still an optional reference to UIWebview in the underlying engine source code of the App. Appstore's machine review will find that the binary code includes a reference to UIWebview, which will trigger an alarm.
从HBuilderX 2.6.6起，UIWebview从基础引擎中移除，变成可选模块。
From HBuilderX 2.6.6, UIWebview is removed from the base engine and becomes an optional module.

## iOS UIWebview模块配置 
## iOS UIWebview module configuration
 如果开发者需要在离线打包工程中使用UIWebview功能，需要在自己的离线工程中配置UIWebview模块。
 If the developer needs to use the UIWebview function in the offline packaged project, he needs to configure the UIWebview module in his own offline project.
 
 ### 添加依赖资源及文件
 ### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|libH5WEUIWebview.a|JavaScriptCore.framework、Foundation.framework、UIKit.framework|无|
| libH5WEUIWebview.a| JavaScriptCore.framework、Foundation.framework、UIKit.framework|none|
