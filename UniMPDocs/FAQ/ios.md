## Q：原生工程弹窗提示 “HTML5 + Rumtime D”

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20200226/b761ed2d441819a7a369fbffc9ee7586.png)

A：请参考解决方法 [点击查看详情](https://ask.dcloud.net.cn/article/35963)

## Q：提示 打包时未添加  xxx 模块 ... 

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20200320/71334000758150ffe0b3440e4f29e3e0.png)

A： 请参考这个 [教程](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/36942) 将相关模块的依赖文件集成到原生工程中即可；

<a id="duplicatesymbol"></a>
## Q：三方库冲突
A：如果您原生工程依赖的三方库与SDK依赖的三方库冲突

- 源码开源的三方库比如 SDWebImage、ZXing等，建议您使用SDK内置的三方库，移除您之前依赖的三方库，这些库的 .h 头文件存放在 UNMPSDK/Features/inc 路径中的，将对应库的头文件引入到您的工程中使用即可，如果您使用内置的三方库导致原生功能异常，请反馈给我们；
- 源码不开源的三方库比如 高德地图、微信、支付宝等，这类库官方依赖的版本如下表，如果您依赖的版本与SDk依赖的版本一致，你在使用SDK的功能模块时就不需要添加对应的三方库，如果版本不一致，请以高版本为准，如果SDK内使用的版本过低请您反馈给我我们，我们会做升级处理；
- 还有一种解决方法，就是您不使用官方扩展的功能模块，然后按照[文档](UniMPDocs/Extension/ios.md)自行扩展这部分功能；

|SDK名称|版本|备注（使用模块）|
|:--|:--|:--|
|百度定位|v4.1.1|Geolocation/百度定位模块 |
|高德定位|v2.6.7|Geolocation/高德定位 |
|百度地图|v4.1.1|Maps/百度地图 |
|高德地图|v7.8.0|Maps/高德地图 |
|微信SDK|v1.9.1|Oauth、Share、Payment/微信|
|AlipaySDK|v15.7.9|Payment/支付宝|
|QQSDK|v3.5.3_lite|Oauth、Share/QQ|
|新浪微博SDK|v3.3.1|Oauth、Share/新浪微博|
|又拍云|v4.1.7|LivePusher（直播推流）|
|友盟|v6.1.0|Statistic(友盟统计)|
|IJKPlayer|https://gitee.com/dcloud/IJKMediaFramework 源码编译|VideoPlayer（视频播放）|
|SDWebImage|v5.10.0|基础库/对应的库 libSDWebImage.a |
|Masonry|1.1.0|VideoPlayer/对应的库 Masonry.framework|
|SSZipArchive|2.2.3|基础库/对应的库 libcoreSupport.a|
| ZXing ||Barcode/对应的库 libDCUniZXing.a 源码已修改|
|Google登录|v5.0.2|Oauth/Google|
|快手|v3.3.15.1|UniAD/快手|
|快手广告联盟|v3.3.23.1|UniAD/快手广告联盟|
|广点通|v4.13.11|UniAD/广点通|
|穿山甲|v4.1.0.0|UniAD/穿山甲|
|Sigmob|v3.4.2|UniAD/Sigmob|

## Q: 之前引用的头文件和资源 现在找不到了

A：为了解决部分功能库引用了一些第三方库 可能与开发者项目的第三方库重复引用
我们从`3.0.7`后 对于部分库和资源进行了调整。

如果开发者原来工程对资源文件有引用,现在找不到资源文件,请参考下边列表(文件路径去离线SDK下的 `SDK/Bundles/`下寻找)

|旧资源|新资源|
|:--|:--|:--|
|TZImagePickerController.bundle|DCTZImagePickerController.bundle|
|SVProgressHUD.bundle|DCSVProgressHUD.bundle|


如果开发者原来工程对库的头文件有引用,现在找不到头文件,请参考下边列表(文件路径去离线SDK下的 `SDK/inc/`下寻找)

`TZImagePickerController` -> `DCTZImagePickerController`

|旧头文件|新头文件|
|:--|:--|:--|
|TZAssetCell.h|DCTZAssetCell.h|
|TZAssetModel.h|DCTZAssetModel.h|
|TZGifPhotoPreviewController.h|DCTZGifPhotoPreviewController.h|
|TZImageCropManager.h|DCTZImageCropManager.h|
|TZImageManager.h|DCTZImageManager.h|
|TZImagePickerController.h|DCTZImagePickerController.h|
|TZLocationManager.h|DCTZLocationManager.h|
|TZPhotoPickerController.h|DCTZPhotoPickerController.h|
|TZPhotoPreviewCell.h|DCTZPhotoPreviewCell.h|
|TZPhotoPreviewController.h|DCTZPhotoPreviewController.h|
|TZProgressView.h|DCTZProgressView.h|
|TZVideoPlayerController.h|DCTZVideoPlayerController.h|
|UIViewControllerHUD.h|DCUIViewControllerHUD.h|
|NSBundle+TZImagePicker.h|NSBundle+DCTZImagePicker.h|
|UIView+Layout.h|UIView+DCLayout.h|


`SVProgressHUD` -> `DCSVProgressHUD`

|旧头文件|新头文件|
|:--|:--|:--|
|SVIndefiniteAnimatedView.h|DCSVIndefiniteAnimatedView.h|
|SVProgressAnimatedView.h|DCSVProgressAnimatedView.h|
|SVProgressHUD.h|DCSVProgressHUD.h|
|SVRadialGradientLayer.h|DCSVRadialGradientLayer.h|

`SocketRoket` -> `DCSocketRoket`

|旧头文件|新头文件|
|:--|:--|:--|
|SRWebSocket.h|DCSRWebSocket.h|





## Q：Main Thread Checker ...

集成uni小程序SDK后，打开小程序首页时页面加载非常慢，并且控制台会报`Main Thread Checker ...`的警告，如下图所示

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/2005061718.png" width="80%">

A: 这个警告是 Xcode 的线程检查机制，由于 SDK 内部在子线程中获取了一些UI的属性值，（**注意仅仅是获取UI的属性值，并没有在子线程修改UI的属性**），所以会有这个警告，您也可以再 Xcode 中同时按下 `command + shift + <` 打开设置页面，将 Main Thread Checker 选项取消勾选，然后就不会有这个警告了，如下图所示

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/2005061710.png" width="70%">

## Q：小程序如何跳转原生页面

A: 宿主打开小程序实现方式是：获取当前宿主显示的 `UIViewController`，通过`present`或`push`的方式打开小程序对应的 `DCUniMPViewController`，在小程序打开的情况下如果想跳转到原生其他`UIViewController`可以通过下面的方法获取到`DCUniMPViewController`，然后在跳转其他`UIViewController`页面

```
/// 小程序打开状态，调用此方法可获取小程序对应的 DCUniMPViewController 实例
UIViewController *uniMPVC = [DCUniMPSDKEngine getUniMPViewController];

```

## Q：如何隐藏宿主的 TabBar

A: 如果宿主底层是 `TabBar` 从首页以 `push` 方式打开小程序页面时想隐藏 TabBar，可以通过自定义 `UINavigationController` 类中复写下面的方法来实现 （如果您没有自定义的`UINavigationController` 可以新建一个便于统一管理导航栏的逻辑）

```
- (void)pushViewController:(UIViewController *)viewController animated:(BOOL)animated
{
	 // 如果非首页就隐藏TabBar，或可判断 viewController 类名来决定是否隐藏 TabBar
    if (self.childViewControllers.count >= 1){
        viewController.hidesBottomBarWhenPushed = YES;
    }
    [super pushViewController:viewController animated:animated];
}
```

## Q：wgt资源释放失败 

A：调用`releaseAppResourceToRunPathWithAppid:` 释放wgt资源是通过调用 SSZipArchive 库（编译在 libcoreSupport.a 库中）的方法将 wgt 资源解压到运行路径中，如果您的项目按照文档集成 UniMPSDK 基础库后 wgt 资源释放失败可以尝试将 libcoreSupport.a 库移除，然后将 [SSZipArchive](https://github.com/ZipArchive/ZipArchive) 库的源码添加到工程，注意 SSZipArchive 库需要在工程的 `Build Settings -> Preprocessor Macros -> Debug 和 Release`中分别添加 `HAVE_INTTYPES_H`，`HAVE_PKCRYPT`，`HAVE_STDINT_H`，`HAVE_WZAES`，`HAVE_ZLIB` 这5个宏定义（注意：原有的配置项下不要删除，点击+号添加），如下图所示，然后重新编译运行。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/sszipmacros.png)