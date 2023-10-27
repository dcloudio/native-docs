## 说明
## illustrate

提供相对 HBuilderX 最新正式版 及上个正式版本的 SDK 下载，如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK。
Provide SDK downloads relative to the latest official version of HBuilderX and the previous official version. If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. Follow this [document](https://ask. dcloud.net.cn/article/35627) Adding configuration can block the pop-up prompt of version inconsistency. The framework is normally backward compatible. You can also check the update log to consider whether to upgrade the SDK.

## Xcode 15 运行说明

⚠️ 使用 Xcode15 运行在 iOS14 及以下低版本的设备时，打开小程序时可能会出现莫名其妙的崩溃问题，这是因为新版本 Xcode 编译器对低版本的iOS兼容性存在问题，需要在工程的 `build setting -> Other linker flags `中添加 `-ld64`，然后重新运行即可;

## SDK 升级说明
## SDK upgrade instructions
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**
**⚠️Note: The dependent library in the function module needs to depend on the library of the basic module. When updating the SDK version, you need to upgrade the used basic library and the dependent library and resource files of the functional module. If you only upgrade some libraries, it may cause There is a problem with version inconsistency;**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；
The recommended method is to put the entire SDK under the project path. When adding dependent libraries or files, add them by `selecting local files`. When you upgrade next time, you can directly overwrite the entire SDK directory, avoiding the need to select separately every time. Dependent libraries;

## 更新日志
## Update log

#### SDK 3.94
[点击下载 UniMP_iOS_SDK](https://native-res.dcloud.net.cn/unimp-sdk/UniMPSDK_iOS%403.94.zip)

+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.94.2023102613.html)

## 历史版本
## historic version
> 历史版本仅提供上个正式版本的 SDK 下载
> Historical versions only provide SDK downloads of the last official version

#### 下载地址
链接: [https://pan.baidu.com/s/1UCsDFTc7IdhgCarPmuGHaQ](https://pan.baidu.com/s/1UCsDFTc7IdhgCarPmuGHaQ)  密码: edh1

#### SDK 3.8.12（补丁版本1）
+ 适配 iOS17 解决 nvue 页面可能导致的崩溃 Bug;

#### SDK 3.8.12
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.8.12.20230817.html)

#### SDK 3.8.7
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.8.7.20230703.html)

#### SDK 3.8.4
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.8.4.20230531.html)

#### SDK 3.7.11
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.7.11.20230427.html)

#### SDK 3.7.9
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.7.9.20230324.html)

#### SDK 3.7.3
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.7.3.20230223.html)

#### SDK 3.6.18
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.6.18.20230117.html)

#### SDK 3.6.17
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.6.17.20230112.html)

#### SDK 3.6.15
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.6.15.20221228.html)

#### SDK 3.6.14
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.6.14.20221215.html)

#### SDK 3.6.4

+ iOS平台 修复 uni.setStorage 存储数据可能出错的Bug
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.6.4.20220922.html)

#### SDK 3.5.3

+ iOS平台 修复 小程序未开启后台运行，前台运行时调用 open 方法直达页面无效的Bug
+ iOS platform fixes the bug that the applet is not running in the background, and the open method is called when the foreground is running, and the page is invalid
+ iOS平台 修复 偶现内存泄漏可能引起应用崩溃的Bug
+ iOS platform fixed the bug that the occasional memory leak may cause the app to crash
+ iOS平台 修复 直达二级页面后再打开此页面，关闭时会直接返回首页的Bug
+ iOS platform fixes the bug that when you open this page after going directly to the second-level page, it will directly return to the home page when it is closed
+ iOS平台 修复 未开启后台运行，多次切换小程序和原生界面可能导致小程序返回按钮无效的Bug
+ iOS platform repaired the bug that the back button of the applet may be invalid due to multiple switching of the applet and the native interface without turning on the background operation

+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.5.3.20220729.html)
+ [Other update details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.5.3.20220729.html)

#### SDK 3.4.18
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.4.18.20220630.html)
+ [Update Details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.4.18.20220630.html)

#### SDK 3.4.15
+ 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug
+ Fixed a bug that may cause a crash when opening the applet immediately after calling the closeWithCompletion method to close the applet
+ 修复 存在自定义 UIWindow 时 toast 可能无法显示的Bug
+ Fix the bug that the toast may not be displayed when there is a custom UIWindow
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.4.15.20220610.html)
+ [Other update details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.4.15.20220610.html)

#### SDK 3.4.7
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.4.7.20220422.html)
+ [Update Details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.4.7.20220422.html)

#### SDK 3.3.13

+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.13.20220314.html)
+ [Update Details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.13.20220314.html)

#### SDK 3.3.11

+ 修复 频繁快速关闭小程序在启动小程序直达页面偶现崩溃的Bug；
+ Fix the bug that when the applet is closed frequently and quickly, the direct page of the applet will crash occasionally;
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.11.20220209.html)
+ [Other update details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.11.20220209.html)

#### SDK 3.3.10

+ 修复 动态切换横竖屏导致页面布局异常的Bug;
+ Fixed the bug of abnormal page layout caused by dynamically switching between horizontal and vertical screens;
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.10.20220124.html)
+ [Other update details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.10.20220124.html)

#### SDK 3.3.7

+ 新增 小程序 wgt 资源文件支持加密 [文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
+ Added support for encryption of applet wgt resource files [documentation](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
+ iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
+ iOS platform repaired the bug that the applet was not running in the background, and the applet was closed by gestures and then quickly opened the bug that the applet crashed occasionally
+ iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
+ iOS platform fixed the bug that reopening the same applet was invalid in the callback method of hiding the applet
+ iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug
+ iOS platform fixed the bug that when multiple applets are opened at the same time getCurrentPageUrl gets the wrong path of the currently displayed applet page
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.7.20220112-alpha.html)
+ [Other update details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.7.20220112-alpha.html)

#### SDK 3.3.5

+ **优化 启动小程序直达页面及启动参数属性调整，热启动小程序直达页面及参数也会生效** [文档](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e5%b0%8f%e7%a8%8b%e5%ba%8f%e5%b9%b6%e4%bc%a0%e5%8f%82);
+ **Optimize the direct page of the startup applet and the adjustment of the startup parameter properties, and the direct page and parameters of the hot start applet will also take effect** [Documentation](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios? id=%e5%90%af%e5%8a%a8%e5%b0%8f%e7%a8%8b%e5%ba%8f%e5%b9%b6%e4%bc%a0%e5%8f%82 );
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.5.20211229.html)
+ [Other update details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.3.5.20211229.html)

#### SDK 3.2.16

+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.16.20211122.html)
+ [Update Details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.16.20211122.html)

#### SDK 3.2.15

+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.15.20211120.html)
+ [Update Details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.15.20211120.html)

#### SDK 3.2.12

+ `liblibPGInvocation.a`从基础库中移动到 feature 目录中，变为非必需依赖（如果没有调用 native.js 相关方法可以直接从工程配置中移除该库的依赖，如果用到请从 feature 路径中重新添加到工程）；
+ `liblibPGInvocation.a` is moved from the base library to the feature directory and becomes a non-essential dependency (if you do not call native.js related methods, you can directly remove the library dependency from the project configuration, if you use it, please use it from the feature path re-add to project);
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.12.20211029.html)
+ [Update Details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.12.20211029.html)

#### SDK 3.2.9

+ 新增 拦截胶囊按钮点击事件钩子方法，可自行处理胶囊按钮点击的逻辑，如自定义弹窗等 [API说明](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=dcunimpsdkenginedelegate-%e7%9b%b8%e5%85%b3%e6%96%b9%e6%b3%95)
+ Added a hook method for intercepting capsule button click events, which can handle the logic of capsule button clicks by itself, such as custom pop-up windows, etc. [API Description](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id =dcunimpsdkenginedelegate-%e7%9b%b8%e5%85%b3%e6%96%b9%e6%b3%95)
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.9.20210927.html)
+ [Other update details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.9.20210927.html)

#### SDK 3.2.3 (补丁版本2)
#### SDK 3.2.3 (Patch Version 2)

+ 修复 3.2.3 版本引起的小程序内 wgt 热更新后白屏的Bug；
+ Fixed the bug of white screen caused by version 3.2.3 after wgt hot update in the applet;
+ 修复 3.2.3 版本引起的频繁快速启动关闭小程序偶现崩溃的Bug；
+ Fixed the bug of occasional crashes caused by frequent quick startup and shutdown applets caused by version 3.2.3;
+ 修复 3.2.3 版本引起的未开启手势关闭并使用 push 方式打开小程序时原生导航栏没有正常隐藏的Bug；
+ Fixed the bug that the original navigation bar was not hidden normally when the gesture was closed and the applet was opened by push method caused by version 3.2.3;
+ 修复 3.2.3 版本引起的未开启手势关闭并使用 push 方式第二次打开小程序后，手势还可以关闭的Bug；
+ Fixed the bug caused by version 3.2.3 that the gesture can still be closed after closing the unopened gesture and using the push method to open the applet for the second time;
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.3.20210825.html)
+ [Update Details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.3.20210825.html)

#### SDK 3.2.2

+ 修复 小程序内 wgt 热更新后白屏的Bug；
+ Fixed the bug of white screen after wgt hot update in the applet;
+ 修复 打开第二个小程序时直达二级页面无效的Bug；
+ Fixed the bug that the direct access to the secondary page was invalid when opening the second applet;
+ 新增 **支持多个小程序同时运行**;
+ Added **Support multiple applets running at the same time**;
+ 新增 支持配置胶囊按钮样式 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e8%87%aa%e5%ae%9a%e4%b9%89%e8%83%b6%e5%9b%8a%e6%8c%89%e9%92%ae%e6%a0%b7%e5%bc%8f);
+ Added support for configuring capsule button styles [Details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e8%87%aa%e5%ae%9a%e4%b9%89 %e8%83%b6%e5%9b%8a%e6%8c%89%e9%92%ae%e6%a0%b7%e5%bc%8f);
+ 新增 胶囊‘x’关闭按钮点击事件 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=dcunimpsdkenginedelegate-%e7%9b%b8%e5%85%b3%e6%96%b9%e6%b3%95)
+ Add capsule 'x' close button click event [Details](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=dcunimpsdkenginedelegate-%e7%9b%b8%e5%85%b3% e6%96%b9%e6%b3%95)
+ 新增 使用小程序实例发送事件 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=%e5%90%91%e5%b0%8f%e7%a8%8b%e5%ba%8f%e5%8f%91%e9%80%81%e4%ba%8b%e4%bb%b6)
+ Added the use of Mini Program instances to send events [details](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=%e5%90%91%e5%b0%8f%e7%a8% 8b%e5%ba%8f%e5%8f%91%e9%80%81%e4%ba%8b%e4%bb%b6)
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.2.20210818.html)
+ [Other update details](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.2.20210818.html)