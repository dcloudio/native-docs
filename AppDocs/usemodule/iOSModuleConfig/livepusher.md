## 又拍云直播推流
### 将又拍云直播推流模块依赖库及资源添加到工程

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibLivePush.a、libDCUniGPUImage.a、UPLiveSDKDll.framework|AVFoundation.framework、QuartzCore.framework、OpenGLES.framework、AudioToolbox.framework、VideoToolbox.framework、Accelerate.framework、CoreMedia.framework、CoreTelephony.framework、SystemConfiguration.framework、CoreMotion.framework、libz.tbd、libbz2.tbd、libiconv.tbd|无|
				
**UPLiveSDKDll.framework这个库是动态库并且不支持模拟器，需要添加到如下图所示的地方：**

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/livepusher/28764.png)

**注意：如果是自定义组件模式下的live-pusher组件，需要再加上libDCUniLivePush.a库**

 
