此功能需要 HBuilderX 2.5.4-20200108-alpha 之后发布的离线包才能用。

配置离线广告之前，需先在dcloud广告联盟申请账号。

## 360广告
### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libUniAD.a、libSDWebImage.a、libUniAd-360.a|QHADSDK.framework、CoreLocation.framework、CoreTelephony.framework、WebKit.framework、Security.framework、libz.tbd、SystemConfiguration.framework、AdSupport.framework|QHADVideoPlayer.bundle|


## 今日头条穿山甲
### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libUniAD.a、libSDWebImage.a、libUniAd-Csj.a|BUAdSDK.framework、BUFoundation.framework、StoreKit.framework、MobileCoreServices.framework、WebKit.framework、MediaPlayer.framework、CoreMedia.framework、CoreLocation.framework、AVFoundation.framework、CoreTelephony.framework、
SystemConfiguration.framework、AdSupport.framework、CoreMotion.framework、libresolv.9.tbd、libc++.tbd、libz.tbd、libsqlite3.tbd、|BUAdSDK.bundle|

## 腾讯广点通
### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libUniAD.a、libSDWebImage.a、libUniAd-Gdt.a、libGDTMobSDK.a|AdSupport.framework、CoreLocation.framework、QuartzCore.framework、SystemConfiguration.framework、CoreTelephony.framework、Security.framework、StoreKit.framework、AVFoundation.framework、WebKit.framework、libz.tbd、libxml2.tbd|无|


***注意：如果是uni项目 必须配置上libUniADWeex.a  这个库***

[uni-AD广告联盟开通指南](https://ask.dcloud.net.cn/article/36769)

[uni-AD广告联盟使用指南](https://ask.dcloud.net.cn/article/36718)
