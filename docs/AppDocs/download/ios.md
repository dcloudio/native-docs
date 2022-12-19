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

### 2022年12月15日发布——HBuilderX（3.6.14.20221215） 

[和彩云点击下载SDK，提取码: 83QB](https://caiyun.139.com/m/i?115Cnqlc3QBlH) 

[百度云点击下载SDK，提取码: ia4q](https://pan.baidu.com/s/1uzV50Z65W6eSZwAFj6YrBQ?pwd=ia4q) (若下载后解压失败，使用和彩云下载)

[和彩云点击下载SDK，提取码: wLYN](https://caiyun.139.com/m/i?115CoA5Cy156K) 
[Hecaiyun click to download SDK, extraction code: wLYN](https://caiyun.139.com/m/i?115CoA5Cy156K)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.14.20221215）版本生成本地打包App资源。

## 3.6.14.20221215
  
无



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


[和彩云点击下载历史版本，提取码: koWv](https://caiyun.139.com/m/i?115CoUhyanjtn) 

[百度网盘下载历史版本，提取码: 749q](https://pan.baidu.com/s/178TcQ6K7gFkQBF2v7_lQsg?pwd=749q)(若下载后解压失败，使用和彩云下载)




[历次更新说明](AppDocs/download/update_history_iOS_release.md)
[Previous update instructions](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version


### 2022年12月16日发布——HBuilderX（3.6.14.20221216-alpha）


[和彩云点击下载SDK，提取码: xK0h](https://caiyun.139.com/m/i?115CnWadJcZmB)

[百度云点击下载SDK，提取码: g8qy](https://pan.baidu.com/s/1UtYLQTfUlgmQ1EmEQNRuJA?pwd=g8qy) (若下载后解压失败，使用和彩云下载)


+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.14.20221216-alpha）版本生成本地打包App资源。

## 3.6.14.20221216-alpha

+ 修复 UniPush 2.0 在vue2项目中 启用离线推送后，调用 uni.getPushClientId 某些情况下获取不到cid的Bug[详情](https://ask.dcloud.net.cn/question/158921)
+ 修复 plus.push.getClientInfoAsync 在应用热重启后调用不触发回调的Bug

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


[和彩云点击下载历史版本，提取码: ECMd](https://caiyun.139.com/m/i?115CeV7MHJQAL) 

[百度云点击下载历史版本，提取码: 3k77](https://pan.baidu.com/s/1x-qbRD-KIB39nc8cqcpWIA?pwd=3k77) (若下载后解压失败，使用和彩云下载)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
[Previous update instructions](AppDocs/download/update_history_iOS_alpha.md)
