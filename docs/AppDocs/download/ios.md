如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。
If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. Follow this [document](https://ask.dcloud.net.cn/article/35627) to add configuration to block the version Inconsistent pop-up prompts, the framework is normally downward compatible, you can also check the update log to consider whether to upgrade the SDK; if you want to upgrade, you can update the files in the Bundles, inc, and Libs directories under the offline sdk package.

## SDK 升级说明
## SDK upgrade instructions
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**
**⚠️Note: The dependent library in the function module needs to depend on the library of the basic module. When updating the SDK version, you need to upgrade the used basic library and the dependent library and resource files of the functional module. If you only upgrade some libraries, it may cause There is a problem with version inconsistency;**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；
The recommended method is to put the entire SDK under the project path. When adding dependent libraries or files, add them by `selecting local files`. When you upgrade next time, you can directly overwrite the entire SDK directory, avoiding the need to select separately every time. Dependent libraries;

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**
**Pay attention to the /SDK/Bundles/PandoraApi.bundle/feature.plist in the SDK directory. If it has been modified before, the developer needs to back it up. After upgrading the SDK, it will overwrite this file again to avoid some abnormal functions caused by the upgrade**


## iOS 离线SDK - 正式版
## iOS Offline SDK - Official Version

### 2022年09月22日发布——HBuilderX（3.6.4.20220922） 
### Released on September 22, 2022 - HBuilderX (3.6.4.20220922)

[百度云点击下载SDK，提取码: rvdy](https://pan.baidu.com/s/1ExtRytSAuOpGjl4e4m9Hdw?pwd=rvdy) (若下载后解压失败，使用和彩云下载)
[Baidu Cloud click to download SDK, extraction code: rvdy](https://pan.baidu.com/s/1ExtRytSAuOpGjl4e4m9Hdw?pwd=rvdy) (If the decompression fails after downloading, use He Caiyun to download)

[和彩云点击下载SDK，提取码: wLYN](https://caiyun.139.com/m/i?115CoA5Cy156K) 
[Hecaiyun click to download SDK, extraction code: wLYN](https://caiyun.139.com/m/i?115CoA5Cy156K)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.5.20221121）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.5.20221121) version to generate local packaged App resources.

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.4.20220922）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.4.20220922) version to generate local packaged App resources.


+ iOS平台 更新 uni-AD 今日头条穿山甲SDK更新为 4.8.0.3 版，穿山甲Gromore SDK更新为 3.7.0.0 版
+ iOS platform update uni-AD Jinri Toutiao pangolin SDK to version 4.8.0.3, pangolin Gromore SDK to version 3.7.0.0
+ iOS平台 修复 uni-AD 穿山甲Gromore 激励视频偶现可能无法显示的Bug 详情
+ iOS platform fixed the bug that the incentive video of uni-AD Pangolin Gromore might not be displayed occasionally. Details
+ iOS平台 修复 3.6.2版本引出的 uni原生语言插件Hook不到applicationWillEnterForeground、applicationDidEnterBackground等系统事件的Bug
+ iOS platform fixed the bug that the uni native language plug-in hook introduced by version 3.6.2 could not reach system events such as applicationWillEnterForeground and applicationDidEnterBackground
+ iOS平台 修复 安全检测可能报获取设备idfv的Bug
+ iOS platform repaired the bug that the security detection may report the device idfv

`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`
`Note: After the HX3.2.0 version, the configuration of the general links of WeChat, QQ, and Weibo in the Plist has changed. If you encounter login, sharing, and payment problems during the upgrade, please refer to the latest document to configure`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
`Note: After the HX3.1.17 version, the one-click login function needs to add and configure the libGTCommonSDK-1.2.2.0.a library, otherwise it may compile and report an error`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`
`Note: After the HX3.0.4 version, you need to use Xcode12.1 or above, otherwise you may compile an error`


[百度网盘下载历史版本，提取码: qfq5](https://pan.baidu.com/s/1lsd9n5Gjmv3-cvWOpsIKpQ?pwd=qfq5)
[Baidu network disk download historical version, extraction code: qfq5](https://pan.baidu.com/s/1lsd9n5Gjmv3-cvWOPsIKpQ?pwd=qfq5)

[和彩云点击下载SDK，提取码: HUpB](https://caiyun.139.com/m/i?115CoA5AcgSUC) 
[Hecaiyun click to download SDK, extraction code: HUpB](https://caiyun.139.com/m/i?115CoA5AcgSUC)

[历次更新说明](AppDocs/download/update_history_iOS_release.md)
[Previous update instructions](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version


### 2022年11月14日发布——HBuilderX（3.6.9.20221114-alpha）
### Released November 14, 2022 - HBuilderX (3.6.9.20221114-alpha)

[和彩云点击下载SDK，提取码: 9kEy](https://caiyun.139.com/m/i?115CoAPTO0c6y)
[Hecaiyun click to download SDK, extraction code: 9kEy](https://caiyun.139.com/m/i?115CoAPTO0c6y)

[百度云点击下载SDK，提取码: dpgm](https://pan.baidu.com/s/12nF4fNrnNYf_UInwcEfsDA?pwd=dpgm) (若下载后解压失败，使用和彩云下载)
[Baidu Cloud click to download SDK, extraction code: dpgm](https://pan.baidu.com/s/12nF4fNrnNYf_UInwcEfsDA?pwd=dpgm) (If the decompression fails after downloading, use He Caiyun to download)


+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.9.20221114-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.9.20221114-alpha) version to generate local packaged App resources.

## 3.6.9.20221114-alpha
+ 新增 uni错误规范 [详情](https://uniapp.dcloud.net.cn/tutorial/err-spec.html)
+ Added uni error specification [details](https://uniapp.dcloud.net.cn/tutorial/err-spec.html)
+ App、Web平台 新增 暗黑模式（DarkMode） [详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
+ Added Dark Mode (DarkMode) on App and Web platforms [Details](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
+ App、Web平台 修复 radio 组件禁用状态样式异常的Bug
+ App, Web platform Fix the bug that the style of the radio component is disabled and the style is abnormal
+ App平台 新增 nvue 页面 MapContext 支持 setLocMarkerIcon 方法 [详情](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
+ App platform added nvue page MapContext supports setLocMarkerIcon method [Details](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
+ App平台 新增 nvue list 组件支持 render-reverse 属性 [详情](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
+ App platform added nvue list component to support render-reverse attribute [Details](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
+ App平台 修复 Vue2 项目使用组合式 API 时 onReady 声明周期 template ref 未绑定的Bug
+ App platform Fixed the bug that the template ref in the onReady statement cycle was not bound when the Vue2 project used the combined API
+ App平台 修复 Vue3 项目 template ref 会被代理的Bug
+ App platform fixes the bug that the template ref of the Vue3 project will be proxied
+ App平台 修复 Vue3 项目设置导航栏背景色为 rgba 色值无效的Bug [详情](https://ask.dcloud.net.cn/question/135111)
+ App platform Fix the bug that the background color of the navigation bar of the Vue3 project is set to an invalid rgba color value [Details](https://ask.dcloud.net.cn/question/135111)
+ App平台 修复 Vue3 项目根节点 height:100% 无效的Bug [详情](https://ask.dcloud.net.cn/question/156564)
+ App platform fix Vue3 project root node height: 100% invalid bug [Details](https://ask.dcloud.net.cn/question/156564)
+ App-iOS平台 修复 Vue3 项目录音播放无效的Bug [详情](https://ask.dcloud.net.cn/question/155741)
+ App-iOS platform fixes the bug that Vue3 project recording playback is invalid [Details](https://ask.dcloud.net.cn/question/155741)
 
+ 新增 Stripe支付支持设置账单信息 [详情](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
+ Added support for setting billing information for Stripe payment [Details](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
+ iOS平台 修复 3.6.0版本引出的 开屏广告自定义底部图片、背景色不生效的Bug
+ iOS platform fixed the bug caused by version 3.6.0 that the custom bottom image and background color of the opening screen advertisement did not take effect
+ iOS平台 修复 标题栏 titleNView 设置默认导航栏颜色可能导致与状态栏颜色不一致的Bug
+ iOS platform fixed the bug that the title bar titleNView setting the default navigation bar color may cause inconsistent color with the status bar
+ iOS平台 修复 setUIStyle 设置暗黑模式可能无效的Bug
+ iOS platform fixes the bug that setUIStyle may not work when setting the dark mode
+ iOS平台 修复 uts插件 类构造函数无法使用外参的Bug
+ iOS platform fixes the bug that the class constructor of the uts plugin cannot use external parameters



`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`
`Note: After the HX3.2.0 version, the configuration of the general links of WeChat, QQ, and Weibo in the Plist has changed. If you encounter login, sharing, and payment problems during the upgrade, please refer to the latest document to configure`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`
`Note: After HX3.1.19 (included) version, update the video module, you need to change the "IJKMediaFramework.framework" library to "IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`
`Note: After HX3.1.16 version, update the video module and nvue's Gaode map module, you need to configure the "Masonry.framework" library`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
`Note: Starting from version HX3.1.10, iOS offline SDK packages 5+ apps or uni-app need to apply for`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
`Note: After HX3.1.6 version, to update the camera module, you need to configure the "MetalKit.framework", "GLKit.framework" system library`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
`Note: In the Bundles folder of the offline SDK, update SVProgressHUD.bundle to DCSVProgressHUD.bundle, and update TZImagePickerController.bundle to DCTZImagePickerController.bundle; update the header files of DCSVProgressHUD and DCTZImagePickerController in the inc folder`


[和彩云点击下载SDK，提取码: JpK3](https://caiyun.139.com/m/i?115CoUMQTO9ja) 
[Hecaiyun click to download SDK, extraction code: JpK3](https://caiyun.139.com/m/i?115CoUMQTO9ja)

[百度云点击下载历史版本，提取码: hn6k](https://pan.baidu.com/s/1lnFoCTV1H6qjIc5ZjafWEA?pwd=hn6k) (若下载后解压失败，使用和彩云下载)
[Baidu Cloud click to download the historical version, extraction code: hn6k](https://pan.baidu.com/s/1lnFoCTV1H6qjIc5ZjafWEA?pwd=hn6k) (If the decompression fails after downloading, use He Caiyun to download)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
[Previous update instructions](AppDocs/download/update_history_iOS_alpha.md)
