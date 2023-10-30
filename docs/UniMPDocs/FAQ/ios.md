## Q：升级 Xcode 15 运行报错

A: ⚠️ 使用 Xcode15 运行在 iOS14 及以下低版本的设备时，打开小程序时可能会出现莫名其妙的崩溃问题（也可能是莫名其妙的报错），这是因为新版本 Xcode 编译器对低版本的iOS兼容性存在问题，需要在工程的 build setting -> Other linker flags中添加 -ld64，然后重新运行即可;

## Q：原生工程弹窗提示 “HTML5 + Rumtime D”
## Q: Native project pop-up window prompts "HTML5 + Rumtime D"

![](https://ask.dcloud.net.cn/uploads/article/20200226/b761ed2d441819a7a369fbffc9ee7586.png)

A：请参考解决方法 [点击查看详情](https://ask.dcloud.net.cn/article/35963)
A: Please refer to the solution [Click to view details](https://ask.dcloud.net.cn/article/35963)

## Q：提示 打包时未添加  xxx 模块 ... 
## Q: Prompt that the xxx module was not added when packaging...

![](https://ask.dcloud.net.cn/uploads/article/20200320/71334000758150ffe0b3440e4f29e3e0.png)

A： 请参考这个 [教程](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/36942) 将相关模块的依赖文件集成到原生工程中即可；
A: Please refer to this [tutorial](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/36942) to integrate the dependent files of related modules into the native project can be in;

<a id="duplicatesymbol"></a>
## Q：三方库冲突
## Q: Three-party library conflict
A：如果您原生工程依赖的三方库与SDK依赖的三方库冲突
A: If the three-party library that your native project depends on conflicts with the three-party library that the SDK depends on

- 源码开源的三方库比如 SDWebImage、ZXing等，建议您使用SDK内置的三方库，移除您之前依赖的三方库，这些库的 .h 头文件存放在 UNMPSDK/Features/inc 路径中的，将对应库的头文件引入到您的工程中使用即可，如果您使用内置的三方库导致原生功能异常，请反馈给我们；
- Open source third-party libraries such as SDWebImage, ZXing, etc. It is recommended that you use the third-party libraries built into the SDK and remove the third-party libraries you previously relied on. The .h header files of these libraries are stored in the UNMPSDK/Features/inc path, and will correspond to Just import the header file of the library into your project and use it. If you use the built-in third-party library and the native function is abnormal, please give us feedback;
- 源码不开源的三方库比如 高德地图、微信、支付宝等，这类库官方依赖的版本如下表，如果您依赖的版本与SDk依赖的版本一致，你在使用SDK的功能模块时就不需要添加对应的三方库，如果版本不一致，请以高版本为准，如果SDK内使用的版本过低请您反馈给我我们，我们会做升级处理；
- Three-party libraries whose source code is not open source, such as AutoNavi Maps, WeChat, Alipay, etc. The official versions of such libraries are as follows. If the version you depend on is consistent with the version that SDK depends on, you do not need it when using the functional modules of the SDK Add the corresponding three-party library. If the version is inconsistent, please refer to the higher version. If the version used in the SDK is too low, please give us feedback and we will upgrade it;
- 还有一种解决方法，就是您不使用官方扩展的功能模块，然后按照[文档](UniMPDocs/Extension/ios.md)自行扩展这部分功能；
- There is another solution, that is, you do not use the official extended function modules, and then follow the [documentation](UniMPDocs/Extension/ios.md) to expand this part of the function by yourself;

[依赖的三方库版本说明](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/dependentLibrary)
[Dependent third-party library version description](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/dependentLibrary)

## Q: 之前引用的头文件和资源 现在找不到了
## Q: The previously referenced header files and resources are no longer found

A：为了解决部分功能库引用了一些第三方库 可能与开发者项目的第三方库重复引用
A: In order to solve some function libraries, some third-party libraries may be referenced repeatedly with third-party libraries of developer projects
我们从`3.0.7`后 对于部分库和资源进行了调整。
We have adjusted some libraries and resources since `3.0.7`.

如果开发者原来工程对资源文件有引用,现在找不到资源文件,请参考下边列表(文件路径去离线SDK下的 `SDK/Bundles/`下寻找)
If the developer’s original project referenced the resource file, but the resource file cannot be found now, please refer to the list below (the file path can be found under `SDK/Bundles/` under the offline SDK)

|旧资源|新资源|
|Old Resources|New Resources|
|:--|:--|:--|
|TZImagePickerController.bundle|DCTZImagePickerController.bundle|
|SVProgressHUD.bundle|DCSVProgressHUD.bundle|


如果开发者原来工程对库的头文件有引用,现在找不到头文件,请参考下边列表(文件路径去离线SDK下的 `SDK/inc/`下寻找)
If the developer’s original project referenced the header file of the library, but cannot find the header file now, please refer to the list below (the file path can be found under `SDK/inc/` under the offline SDK)

`TZImagePickerController` -> `DCTZImagePickerController`

|旧头文件|新头文件|
|Old Header Files|New Header Files|
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
|Old Header Files|New Header Files|
|:--|:--|:--|
|SVIndefiniteAnimatedView.h|DCSVIndefiniteAnimatedView.h|
|SVProgressAnimatedView.h|DCSVProgressAnimatedView.h|
|SVProgressHUD.h|DCSVProgressHUD.h|
|SVRadialGradientLayer.h|DCSVRadialGradientLayer.h|

`SocketRoket` -> `DCSocketRoket`

|旧头文件|新头文件|
|Old Header Files|New Header Files|
|:--|:--|:--|
|SRWebSocket.h|DCSRWebSocket.h|





## Q：Main Thread Checker ...

集成uni小程序SDK后，打开小程序首页时页面加载非常慢，并且控制台会报`Main Thread Checker ...`的警告，如下图所示
After integrating the uni applet SDK, the page loads very slowly when opening the homepage of the applet, and the console will report a warning `Main Thread Checker ...`, as shown in the figure below

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/2005061718.png" width="80%">

A: 这个警告是 Xcode 的线程检查机制，由于 SDK 内部在子线程中获取了一些UI的属性值，（**注意仅仅是获取UI的属性值，并没有在子线程修改UI的属性**），所以会有这个警告，您也可以再 Xcode 中同时按下 `command + shift + <` 打开设置页面，将 Main Thread Checker 选项取消勾选，然后就不会有这个警告了，如下图所示
A: This warning is Xcode's thread checking mechanism, because the SDK internally obtains some UI property values in the sub-thread, (**note that only the property values of the UI are obtained, and the UI properties are not modified in the sub-thread**) , so there will be this warning, you can also press `command + shift + <` in Xcode to open the settings page, uncheck the Main Thread Checker option, and then there will be no such warning, as shown in the figure below

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/2005061710.png" width="70%">

## Q：小程序如何跳转原生页面
## Q: How does the applet jump to the native page

A: 宿主打开小程序实现方式是：获取当前宿主显示的 `UIViewController`，通过`present`或`push`的方式打开小程序对应的 `DCUniMPViewController`，在小程序打开的情况下如果想跳转到原生其他`UIViewController`可以通过下面的方法获取到`DCUniMPViewController`，然后在跳转其他`UIViewController`页面
A: The implementation method for the host to open the applet is: get the `UIViewController` displayed by the current host, and open the `DCUniMPViewController` corresponding to the applet through `present` or `push`. When the applet is opened, if you want to jump to Other native `UIViewController` can get `DCUniMPViewController` through the following method, and then jump to other `UIViewController` pages

```
/// 小程序打开状态，调用此方法可获取小程序对应的 DCUniMPViewController 实例
/// The open state of the applet, call this method to get the DCUniMPViewController instance corresponding to the applet
UIViewController *uniMPVC = [DCUniMPSDKEngine getUniMPViewController];

```

## Q：如何隐藏宿主的 TabBar
## Q: How to hide the host's TabBar

A: 如果宿主底层是 `TabBar` 从首页以 `push` 方式打开小程序页面时想隐藏 TabBar，可以通过自定义 `UINavigationController` 类中复写下面的方法来实现 （如果您没有自定义的`UINavigationController` 可以新建一个便于统一管理导航栏的逻辑）
A: If the bottom layer of the host is `TabBar` and you want to hide the TabBar when you open the applet page by `push` from the home page, you can implement it by overriding the following method in the custom `UINavigationController` class (if you do not have a custom `UINavigationController` You can create a new logic for unified management of the navigation bar)

```
- (void)pushViewController:(UIViewController *)viewController animated:(BOOL)animated
{
	 // 如果非首页就隐藏TabBar，或可判断 viewController 类名来决定是否隐藏 TabBar
	 // If it is not the first page, hide the TabBar, or judge the viewController class name to decide whether to hide the TabBar
    if (self.childViewControllers.count >= 1){
        viewController.hidesBottomBarWhenPushed = YES;
    }
    [super pushViewController:viewController animated:animated];
}
```

## Q：push 手势异常
## Q: The push gesture is abnormal

A: push 方式打开小程序时 由于小程序页面隐藏了导航栏，默认的返回手势会失效，小程序页面会设置 navigationController.interactivePopGestureRecognizer.delegate = self; 让手势生效，但是这样设置后会带来一个问题就是在 rootViewController 页面触发手势后，会导致再次 push 页面的时候无响应，解决方法就是需要在 导航控制器的 rootViewController 页面添加下面的代码控制 interactivePopGestureRecognizer.enabled
A: When opening the applet in push mode, because the applet page hides the navigation bar, the default return gesture will be invalid. The applet page will set navigationController.interactivePopGestureRecognizer.delegate = self; to make the gesture take effect, but this setting will cause a problem After the gesture is triggered on the rootViewController page, it will cause no response when the page is pushed again. The solution is to add the following code to the rootViewController page of the navigation controller to control interactivePopGestureRecognizer.enabled


```
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];

    self.navigationController.interactivePopGestureRecognizer.enabled = NO;
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];

    self.navigationController.interactivePopGestureRecognizer.enabled = YES;
}
```

## Q：wgt资源释放失败 
## Q: wgt resource release failed

A：调用`releaseAppResourceToRunPathWithAppid:` 释放wgt资源是通过调用 SSZipArchive 库（编译在 libcoreSupport.a 库中）的方法将 wgt 资源解压到运行路径中，如果您的项目按照文档集成 UniMPSDK 基础库后 wgt 资源释放失败可以尝试将 libcoreSupport.a 库移除，然后将 `SSZipArchive` 库添加到工程
A: Call `releaseAppResourceToRunPathWithAppid:` to release the wgt resource by calling the SSZipArchive library (compiled in the libcoreSupport.a library) to decompress the wgt resource into the running path. If your project fails to release the wgt resource after integrating the UniMPSDK basic library according to the document You can try to remove the libcoreSupport.a library, and then add the `SSZipArchive` library to the project

1.如果工程配置了 CocoaPods，可使用 CocoaPods 集成，编辑 podfile 文件，添加下面一行，在执行 `pod install`
1. If the project is configured with CocoaPods, you can use CocoaPods integration, edit the podfile file, add the following line, and execute `pod install`

```
pod 'SSZipArchive'
```

2.源码方式集成 <br>
2. Source code integration<br>
直接将 [SSZipArchive](https://github.com/ZipArchive/ZipArchive) 库的源码添加到工程，注意 SSZipArchive 库需要在工程的 `Build Settings -> Preprocessor Macros -> Debug 和 Release`中分别添加 `HAVE_INTTYPES_H`，`HAVE_PKCRYPT`，`HAVE_STDINT_H`，`HAVE_WZAES`，`HAVE_ZLIB` 这5个宏定义（注意：原有的配置项下不要删除，点击+号添加），如下图所示，然后重新编译运行。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/sszipmacros.png)