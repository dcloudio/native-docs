## 实人认证
3.6.7+ 版本新增支持

### 实人认证开发流程
详见[实人认证开发指南](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html)

### 添加依赖库及资源
|依赖库|系统库|依赖资源|
|:--|:--|:--|
|**DCUniBase.framework**(动态库)、**DCloudUTSFoundation.framework**(动态库)、uniFacialRecognitionVerify.framework、AliyunFaceAuthFacade.framework、AliyunMobileRPC.framework、AliyunOSSiOS.framework、APBToygerFacade.framework、APPSecuritySDK.framework、BioAuthAPI.framework、BioAuthEngine.framework、deviceiOS.framework、DTFIdentityManager.framework、DTFSensorServices.framework、DTFUIModule.framework、DTFUtility.framework、MPRemoteLogging.framework、ToygerNative.framework、ToygerService.framework|CoreGraphics.framework、Accelerate.framework、SystemConfiguration.framework、AssetsLibrary.framework、CoreTelephony.framework、QuartzCore.framework、CoreFoundation.framework、CoreLocation.framework、ImageIO.framework、CoreMedia.framework、CoreMotion.framework、AVFoundation.framework、WebKit.framework、AudioToolbox.framework、CFNetwork.framework、MobileCoreServices.framework、AdSupport.framework、libresolv.tbd、libz.tbd、libc++.tbd、libc++.1.tbd、libc++abi.tbd、libz.1.2.8.tbd|APBToygerFacade.bundle、BioAuthEngine.bundle、ToygerNative.bundle|


注: 实人认证是UTS插件，需要开发者手动**移除liblibPDRCore.a库**，然后按照动态库的方式添加
**DCUniBase.framework**和**DCloudUTSFoundation.framework**

### 隐私权限配置
在Info.plist文件中添加NSCameraUsageDescription权限以及相关权限描述