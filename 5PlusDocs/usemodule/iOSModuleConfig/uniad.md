此功能需要 HBuilderX 2.5.4-20200108-alpha 之后发布的离线包才能用。

## 360广告配置
注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.依次添加下列Linker Flags: -lUniAD，-lUniAd-360

2.添加下列framework:"libz.tbd","QHADSDK.framework","CoreLocation.framework",  "CoreTelephony.framework", "WebKit.framework",  "Security.framework",  "SystemConfiguration.framework",  "AdSupport.framework"

3.把离线包里Bundles文件夹里的 QHADVideoPlayer.bundle 引入到工程中

## 广点通广告配置
注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.依次添加下列Linker Flags: -lUniAD， -lUniAd-Gdt ， -lGDTMobSDK

2.添加下列framework:"AdSupport.framework",
      "CoreLocation.framework",
      "QuartzCore.framework",
      "SystemConfiguration.framework",
      "CoreTelephony.framework",
      "Security.framework",
      "StoreKit.framework",
      "AVFoundation.framework",
      "WebKit.framework",
      "libz.tbd",
      "libxml2.tbd"


## 穿山甲广告配置
注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.依次添加下列Linker Flags: -lUniAD， -lUniAd-Csj， -lSDWebImage

2.添加下列framework:"BUAdSDK.framework","BUFoundation.framework","StoreKit.framework",  "MobileCoreServices.framework", "WebKit.framework",  "MediaPlayer.framework",  "CoreMedia.framework", "CoreLocation.framework",
      "AVFoundation.framework",
      "CoreTelephony.framework",
      "SystemConfiguration.framework",
      "AdSupport.framework",
      "CoreMotion.framework",
      "Accelerate.framework",
      "libresolv.9.tbd",
      "libc++.tbd",
      "libz.tbd",
      "libsqlite3.tbd"
	  
3.把离线包里Bundles文件夹里的 BUAdSDK.bundle 引入到工程中

 ***注意：如果是uni项目 必须配置上libUniADWeex.a  这个库***

<!--  [uni-AD广告联盟开通指南](https://ask.dcloud.net.cn/article/36769)
[uni-AD广告联盟使用指南](https://ask.dcloud.net.cn/article/36718)-->
