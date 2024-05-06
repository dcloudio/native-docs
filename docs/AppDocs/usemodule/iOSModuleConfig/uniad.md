## uni-AD概述
## uni-AD Overview
	uni-AD聚合目前国内流行的广告平台广点通（腾讯）、快手等，支持开屏广告和信息流、激励视频广告。
	uni-AD integrates popular advertising platforms in China such as Guangdiantong (Tencent) and Kuaishou, and supports open screen advertisements, information flow, and incentive video advertisements.
## 如何配置广告 
## How to configure ads
  
### 先去dcloud广告联盟[申请账号](https://uniad.dcloud.net.cn)
### First go to the dcloud advertising alliance [apply for an account](https://uniad.dcloud.net.cn)
  
### 然后配置多渠道
### Then configure multi-channel
在打包原生工程中找到工程的配置文件-Info.plist ，然后添加marketChannel节点，节点内容格式为：包名|应用标识|广告标识|渠道 如io.dcloud.HB|appid|adid|apple
Find the project configuration file -Info.plist in the packaged native project, and then add the marketChannel node. The content format of the node is: package name|app ID|advertising ID|channel such as io.dcloud.HB|appid|adid|apple

包名：对应xcode里的bundleid，如io.dcloud.HBuilder。
Package name: corresponds to the bundleid in xcode, such as io.dcloud.HBuilder.

应用标识：对应5+或uni-app项目manifest.json中appid。
Application ID: corresponding to the appid in the 5+ or uni-app project manifest.json.

广告标识：联盟ID，开通广告后可在dev.dcloud.net.cn获取，如果没有开通广告，设置值为空即可。
Advertisement ID: Alliance ID, which can be obtained at dev.dcloud.net.cn after the advertisement is activated. If the advertisement is not activated, just set the value to be empty.

渠道：可以填apple。
Channel: you can fill in apple.

### 再按下面3个步骤配置参数：
### Follow the following 3 steps to configure parameters:

1.在info.plist文件里加DCLOUD_AD_ID节点，内容为自己申请的广告标识adid
1. Add the DCLOUD_AD_ID node in the info.plist file, and the content is the adid you applied for

2.把marketChannel节点的广告标识换成申请的广告标识。如下图所示：
2. Replace the advertising ID of the marketChannel node with the applied advertising ID. As shown below:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongdqudao.png)

3.在info.plist文件里配置NSUserTrackingUsageDescription隐私描述，详细配置可参考如下链接。
3. Configure the NSUserTrackingUsageDescription privacy description in the info.plist file. For detailed configuration, please refer to the link below.

 [参考:https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
 [Reference: https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)

## 今日头条穿山甲
## Today's headline pangolin
### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|DCUniAdCsj.xcframework、BUAdSDK.xcframework、BURelyFoundation.xcframework|StoreKit.framework、MobileCoreServices.framework、WebKit.framework、MediaPlayer.framework、CoreMedia.framework、CoreLocation.framework、AVFoundation.framework、CoreTelephony.framework、SystemConfiguration.framework、AdSupport.framework、CoreMotion.framework、JavaScriptCore.framework、DeviceCheck.framework、libresolv.9.tbd、libc++.tbd、libc++abi.tbd、libz.tbd、libsqlite3.tbd|CSJAdSDK.bundle|

注：3.8.0之前的版本依赖库使用:libDCUniAdCsj.a、BUAdSDK.framework、BURelyFoundation.framework、CSJAdSDK.framework

## 今日头条穿山甲Gromore(3.5.2+版本支持)
## Today's headline pangolin Gromore (supported by version 3.5.2+)
### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|DCUniAdGm.xcframework、BUAdSDK.xcframework、BURelyFoundation.xcframework、CSJAdSDK.xcframework(3.8.10版本废弃)、CSJMediation.xcframework|StoreKit.framework、MobileCoreServices.framework、WebKit.framework、MediaPlayer.framework、CoreMedia.framework、CoreLocation.framework、AVFoundation.framework、CoreTelephony.framework、SystemConfiguration.framework、AdSupport.framework、CoreMotion.framework、JavaScriptCore.framework、DeviceCheck.framework、libresolv.9.tbd、libc++.tbd、libc++abi.tbd、libz.tbd、libsqlite3.tbd|CSJAdSDK.bundle|

注：3.8.0之前的版本依赖库使用:libDCUniAdGm.a、ABUAdCsjAdapter.framework、ABUAdSDK.framework、BUAdSDK.framework、BURelyFoundation.framework、CSJAdSDK.framework

## 腾讯优量汇
## Tencent Youlianghui
### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|DCUniAdGdt.xcframework、libGDTMobSDK.a|AdSupport.framework、CoreLocation.framework、QuartzCore.framework、SystemConfiguration.framework、CoreTelephony.framework、Security.framework、StoreKit.framework、AVFoundation.framework、WebKit.framework、libz.tbd、libxml2.tbd|无|

### 隐私清单
优量汇的隐私清单需要手动合并到App的隐私清单中内容如下
![优量汇隐私清单](https://web-ext-storage.dcloud.net.cn/doc/app/ios/uniad-adt-privacyinfo.jpg)


## 快手
## fast hands
### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|DCUniAdKs.xcframework、KSAdSDK.xcframework(动态库)|Foundation.framework、UIKit.framework、MobileCoreServices.framework、CoreGraphics.framework、Security.framework、SystemConfiguration.framework、CoreTelephony.framework、AdSupport.framework、CoreData.framework、StoreKit.framework、AVFoundation.framework、MediaPlayer.framework、CoreMedia.framework、WebKit.framework、Accelerate.framework、CoreLocation.framework、AVKit.framework、MessageUI.framework、QuickLook.framework、libz.tbd、libresolv.9.tbd、libsqlite3.tbd|无|

快手广告SDK使用Libs/KSAdSDK.xcframework
Kuaishou Advertising SDK uses Libs/KSAdSDK.xcframework
快手内容联盟SDK(包含广告SDK)使用Libs/KSAdSDK.framework
Kuaishou content alliance SDK (including advertising SDK) uses Libs/KSAdSDK.framework

## Sigmob
### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|DCUniAdSgm.xcframework、WindSDK.xcframework、WindFoundation.xcframework|StoreKit.framework、CFNetwork.framework、CoreMedia.framework、AdSupport.framework、CoreMotion.framework、MediaPlayer.framework、CoreGraphics.framework、AVFoundation.framework、CoreLocation.framework、CoreTelephony.framework、SafariServices.framework、MobileCoreServices.framework、WebKit.framework、SystemConfiguration.framework、ImageIO.framework、libc++.tbd、libz.tbd、libbz2.1.0.tbd、libsqlite3.tbd|无|

## 百度百青藤(3.4.1+版本支持)
## Baidu Baiqingteng (3.4.1+ version support)
### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|DCUniAdBd.xcframework、BaiduMobAdSDK.framework|StoreKit.framework、SafariServices.framework、MessageUI.framework、CoreMedia.framework、CoreMotion.framework、SystemConfiguration.framework、CoreLocation.framework、CoreTelephony.framework、AVFoundation.framework、AdSupport.framework、Webkit.framework、libc++.tbd|baidumobadsdk.bundle|

## uniMP激励视频广告(3.7.13+版本支持)
### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libWeChatSDK.a、DCUniAdWm.xcframework|CoreGraphics.framework、Security.framework、Webkit.framework|无|

### 工程配置

1.在工程的 info -> URL types 中添加配置，identifier 填写`weixin`，URL Schemes 填写`wx[后面填写appid]`,如下图所示  
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareWeixin1.png)

2.在 info.plist 添加 Schemes 白名单
![](https://native-res.dcloud.net.cn/images/uniad/iOS/dcuniad_wxmini_queriesschemes.png)


3.配置Associated Domains（域名），填写通用链接域名  
![](https://ask.dcloud.net.cn/uploads/article/20191024/0221225d811e93279784d3235a32d055.png)

4.在 info.plist 添加 `weixin` 项，填写微信 `appid` 及  `UniversalLinks`,值和您在微信开放平台配置的一致，参考如下：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/weixin_plist.png)


## 注意事项
## Precautions

如果出现uni-AD业务状态提醒如下：
If the uni-AD business status reminder appears as follows:

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-5.png)

1、请在Xcode工程中删除未在uni-AD广告平台申请的广告相关的配置（包括库，资源文件等），例如在uni-AD广告平台添加了穿山甲的广告，但没有添加广点通的广告，这时需要删除掉广点通广告的相关配置。
1、 Please delete the advertisement-related configuration (including libraries, resource files, etc.) that have not been applied for in the uni-AD advertising platform in the Xcode project. Ads, at this time, you need to delete the relevant configuration of Guangdiantong advertisements.

2、如果是自己集成的广告（如，穿山甲、广点通），需要在Xcode工程中删除自己集成的广告，同时建议去uni-AD广告平台申请广告。
2、 If it is an advertisement integrated by oneself (for example, Pangolin, Guangdiantong), you need to delete the advertisement integrated by yourself in the Xcode project, and it is recommended to apply for advertisements on the uni-AD advertising platform.

3、以上增强广告配置，如果是uni项目 必须配置上libDCUniAdWeexModule.a



[uni-AD广告联盟开通指南](https://ask.dcloud.net.cn/article/36769)
[Guide to opening uni-AD advertising alliance](https://ask.dcloud.net.cn/article/36769)

[uni-AD广告联盟使用指南](https://ask.dcloud.net.cn/article/36718)
[Uni-AD Advertising Alliance User Guide](https://ask.dcloud.net.cn/article/36718)
