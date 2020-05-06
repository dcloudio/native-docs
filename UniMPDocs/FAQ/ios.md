## Q：原生工程弹窗提示 “HTML5 + Rumtime D”

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200226/b761ed2d441819a7a369fbffc9ee7586.png)

A：请参考解决方法 [点击查看详情](https://ask.dcloud.net.cn/article/35963)

## Q：提示 打包时未添加  xxx 模块 ... 

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200320/71334000758150ffe0b3440e4f29e3e0.png)

A： 请参考这个 [教程](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/36942) 将相关模块的依赖文件集成到原生工程中即可；

<a id="duplicatesymbol"></a>
## Q：三方库冲突
A：如果您原生工程依赖的三方库与SDK依赖的三方库冲突

- 源码开源的三方库比如 SDWebImage、ZXing等，这类库SDK内部大多数已经做过源码修改，为了保证功能的完整性所以请您使用SDK内置的三方库，移除您之前依赖的三方库，这些库的 .h 头文件存放在 UNMPSDK/Features/inc 路径中的，将对应库的头文件引入到您的工程中使用即可，如果您使用内置的三方库导致原生功能异常，请反馈给我们；
- 源码不开源的三方库比如 高德地图、微信、支付宝等，这类库官方依赖的版本如下表，如果您依赖的版本与SDk依赖的版本一致，你在使用SDK的功能模块时就不需要添加对应的三方库，如果版本不一致，请以高版本为准，如果SDK内使用的版本过低请您反馈给我我们，我们会做升级处理；
- 还有一种解决方法，就是您不使用官方扩展的功能模块，然后按照[文档](UniMPDocs/Extension/ios.md)自行扩展这部分功能；

|SDK名称|版本|
|:--|:--|
|百度定位|v4.1.1|
|百度地图|v4.1.1|
|高德定位|v2.6.3|
|高德地图|v6.9.0|
|微信SDK|v1.8.6.2|
|AlipaySDK|v15.5.7|
|QQSDK|v3.3.6_lite|
|新浪微博SDK|v003233010|
|又拍云|v4.1.7|
|友盟|v6.1.0|
|IJKPlayer|--|
|SDWebImage|--|
|TZImagePickerController|--|
|SVProgressHUD|--|
|Masonry|--|
|SocketRoket|--|


## Q：Main Thread Checker ...

集成uni小程序SDK后，打开小程序首页时页面加载非常慢，并且控制台会报`Main Thread Checker ...`的警告，如下图所示

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/2005061718.png" width="80%">

A: 这个警告是 Xcode 的线程检查机制，由于 SDK 内部在子线程中获取了一些UI的属性值，（**注意仅仅是获取UI的属性值，并没有在子线程修改UI的属性**），所以会有这个警告，只有在 Debug 调试模式运行才会有这个警告，在 Release 模式下不会有这个警告请放心，您也可以再 Xcode 中同时按下 `command + shift + <` 打开设置页面，将 Main Thread Checker 选项取消勾选，然后就不会有这个警告了，如下图所示

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/2005061710.png" width="70%">