### Appstore审核反馈废弃UIWebview APIs问题的说明
iOS有UIWebview和WKWebview两种webview。从iOS13开始苹果将UIWebview列为过期API。

**2020年4月起App Store将不再接受使用UIWebView的新App上架、2020年12月起将不再接受使用UIWebView的App更新。**

从HBuilderX 2.2.5起，iOS上默认均已经是WKWebview，除非开发者手动在代码中指定要用UIWebview，否则实际渲染的页面都是在WKWebview里渲染的。
不过，虽然实际页面是WKWebview渲染的，但App底层引擎源码里仍然有UIWebview的可选引用。Appstore的机审会发现二进制代码中包括对UIWebview的引用，从而引发告警。
从HBuilderX 2.6.6起，UIWebview从基础引擎中移除，变成可选模块。

## iOS UIWebview模块配置 
 如果开发者需要在离线打包工程中使用UIWebview功能，需要在自己的离线工程中配置UIWebview模块。
 
注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.依次添加下列Linker Flags: -lH5WEUIWebview  
 
2.添加下列依赖库:"JavaScriptCore.framework",
 "Foundation.framework",
 "UIKit.framework",