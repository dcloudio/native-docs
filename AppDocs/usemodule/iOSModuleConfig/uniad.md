## uni-AD概述
	uni-AD聚合目前国内流行的广告平台广点通（腾讯）、穿山甲（今日头条）等，支持开屏广告和信息流、Banner广告。
## 如何配置广告 
  
### 先去dcloud广告联盟[申请账号](https://uniad.dcloud.net.cn)
  
### 然后配置多渠道
在打包原生工程中找到工程的配置文件-Info.plist ，然后添加marketChannel节点，节点内容格式为：包名|应用标识|广告标识|渠道 如io.dcloud.HB|appid|adid|apple

包名：对应xcode里的bundleid，如io.dcloud.HBuilder。

应用标识：对应5+或uni-app项目manifest.json中appid。

广告标识：DCloud的广告标识，开通广告后可在dev.dcloud.net.cn获取。
渠道：可以填apple。

### 再按下面2个步骤配置参数：

1.在info.plist文件里加DCLOUD_AD_ID节点，内容 为自己申请的广告adid

2.把marketChannel节点的广告标识换成申请的广告标识。如下图所示：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongdqudao.png)


<!-- ## 360广告
### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libUniAD.a、libSDWebImage.a、libUniAd-360.a|QHADSDK.framework、CoreLocation.framework、CoreTelephony.framework、WebKit.framework、Security.framework、libz.tbd、SystemConfiguration.framework、AdSupport.framework|QHADVideoPlayer.bundle|
 -->

## 今日头条穿山甲
### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libUniAD.a、libSDWebImage.a、libUniAd-Csj.a|BUAdSDK.framework、BUFoundation.framework、StoreKit.framework、MobileCoreServices.framework、WebKit.framework、MediaPlayer.framework、CoreMedia.framework、CoreLocation.framework、AVFoundation.framework、CoreTelephony.framework、SystemConfiguration.framework、AdSupport.framework、CoreMotion.framework、libresolv.9.tbd、libc++.tbd、libz.tbd、libsqlite3.tbd、|BUAdSDK.bundle|

## 腾讯广点通
### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libUniAD.a、libSDWebImage.a、libUniAd-Gdt.a、libGDTMobSDK.a|AdSupport.framework、CoreLocation.framework、QuartzCore.framework、SystemConfiguration.framework、CoreTelephony.framework、Security.framework、StoreKit.framework、AVFoundation.framework、WebKit.framework、libz.tbd、libxml2.tbd|无|


**注意：以上增强广告配置，如果是uni项目 必须配置上libUniADWeex.a  这个库**

## 注意事项

如果出现uni-AD业务状态提醒如下：

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-5.png)

1、请在Xcode工程中删除未在uni-AD广告平台申请的广告相关的配置（包括库，资源文件等），例如在uni-AD广告平台添加了穿山甲的广告，但没有添加广点通的广告，这时需要删除掉广点通广告的相关配置。

2、如果是自己集成的广告（如，穿山甲、广点通），需要在Xcode工程中删除自己集成的广告，同时建议去uni-AD广告平台申请广告。


[uni-AD广告联盟开通指南](https://ask.dcloud.net.cn/article/36769)

[uni-AD广告联盟使用指南](https://ask.dcloud.net.cn/article/36718)
