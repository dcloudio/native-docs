## 添加依赖资源

直播推流功能是基于 又拍云SDK 实现

将依赖库及资源添加到工程中

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibLivePush.a、libDCUniGPUImage.a、libDCUniLivePush.a、UPLiveSDKDll.framework|AVFoundation.framework、QuartzCore.framework、OpenGLES.framework、AudioToolbox.framework、VideoToolbox.framework、Accelerate.framework、CoreMedia.framework、CoreTelephony.framework、SystemConfiguration.framework、CoreMotion.framework|无|

**注意："UPLiveSDKDll.framework"这个库是动态库并且不支持模拟器，需要在 `Link Binary With Libraries `和 `Embed Frameworks`中同时添加，如下图所示：**

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181217/048ea429c171d09a4b46fdbd67f9ae84.png)