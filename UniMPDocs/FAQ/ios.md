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

|SDK名称|版本|备注|
|:--|:--|:--|
|百度定位|v4.1.1| |
|百度地图|v4.1.1| |
|高德定位|v2.6.3| |
|高德地图|v6.9.0| |
|微信SDK|v1.8.6.2| |
|AlipaySDK|v15.7.4| |
|QQSDK|v3.3.6_lite| |
|新浪微博SDK|v003233010| |
|又拍云|v4.1.7| |
|友盟|v6.1.0| |
|IJKPlayer|--| |
|SDWebImage|v5.10.0| 对应的库 libSDWebImage.a |
|TZImagePickerController| -- | 包含在 liblibCamera.a 中  源码已修改|
|SVProgressHUD|--|包含在 DCUniVideoPublic.framework 中|
|Masonry|--|包含在 DCUniVideoPublic.framework 中|
|SocketRoket|--|包含在 liblibWeex.a 中|
|SSZipArchive|2.2.3|对应的库 libcoreSupport.a|
| ZXing ||对应的库 libDCUniZXing.a 源码已修改|


## Q：Main Thread Checker ...

集成uni小程序SDK后，打开小程序首页时页面加载非常慢，并且控制台会报`Main Thread Checker ...`的警告，如下图所示

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/2005061718.png" width="80%">

A: 这个警告是 Xcode 的线程检查机制，由于 SDK 内部在子线程中获取了一些UI的属性值，（**注意仅仅是获取UI的属性值，并没有在子线程修改UI的属性**），所以会有这个警告，您也可以再 Xcode 中同时按下 `command + shift + <` 打开设置页面，将 Main Thread Checker 选项取消勾选，然后就不会有这个警告了，如下图所示

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/2005061710.png" width="70%">

## Q：小程序如何跳转原生页面

A: 宿主打开小程序实现方式是：获取当前宿主显示的 `UIViewController`，通过`present`的方式打开小程序对应的 `DCUniMPViewController`，在小程序打开的情况下如果想跳转到原生其他`UIViewController`可以通过下面的方法获取到`DCUniMPViewController`，然后在`present`到原生的`UIViewController`，注意`DCUniMPViewController`为普通的`UIViewController`所以不支持`push`，如果想实现`push`的效果可以参考 [自定义专场动画](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e8%87%aa%e5%ae%9a%e4%b9%89%e8%bd%ac%e5%9c%ba%e5%8a%a8%e7%94%bb) 实现

```
// 获取当前显示的 UIViewController
+ (UIViewController *)dc_findCurrentShowingViewController {
    //获得当前活动窗口的根视图
    UIViewController *vc = [UIApplication sharedApplication].keyWindow.rootViewController;
    UIViewController *currentShowingVC = [self findCurrentShowingViewControllerFrom:vc];
    return currentShowingVC;
}
+ (UIViewController *)findCurrentShowingViewControllerFrom:(UIViewController *)vc
{
    // 递归方法 Recursive method
    UIViewController *currentShowingVC;
    if ([vc presentedViewController]) {
        // 当前视图是被presented出来的
        UIViewController *nextRootVC = [vc presentedViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];

    } else if ([vc isKindOfClass:[UITabBarController class]]) {
        // 根视图为UITabBarController
        UIViewController *nextRootVC = [(UITabBarController *)vc selectedViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];

    } else if ([vc isKindOfClass:[UINavigationController class]]){
        // 根视图为UINavigationController
        UIViewController *nextRootVC = [(UINavigationController *)vc visibleViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];

    } else {
        // 根视图为非导航类
        currentShowingVC = vc;
    }

    return currentShowingVC;
}

```
