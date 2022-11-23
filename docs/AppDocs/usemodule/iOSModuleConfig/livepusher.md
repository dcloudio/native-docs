## 又拍云直播推流
## Another cloud live push stream
### 将又拍云直播推流模块依赖库及资源添加到工程
### Add the dependent library and resources of Youpai Cloud Live Streaming module to the project

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|liblibLivePush.a、libDCUniGPUImage.a、UPLiveSDKDll.framework|AVFoundation.framework、QuartzCore.framework、OpenGLES.framework、AudioToolbox.framework、VideoToolbox.framework、Accelerate.framework、CoreMedia.framework、CoreTelephony.framework、SystemConfiguration.framework、CoreMotion.framework、libz.tbd、libbz2.tbd、libiconv.tbd|无|
| liblibLivePush.a、libDCUniGPUImage.a、UPLiveSDKDll.framework| AVFoundation.framework、QuartzCore.framework、OpenGLES.framework、AudioToolbox.framework、VideoToolbox.framework、Accelerate.framework、CoreMedia.framework、CoreTelephony.framework、SystemConfiguration.framework、CoreMotion.framework、libz.tbd、libbz2.tbd、libiconv.tbd|none|
				
**UPLiveSDKDll.framework这个库是动态库并且不支持模拟器，需要添加到如下图所示的地方：**
**UPLiveSDKDll.framework is a dynamic library and does not support simulators. It needs to be added to the place shown in the figure below:**

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/livepusher/28764.png)

**注意：如果是自定义组件模式下的live-pusher组件，需要再加上libDCUniLivePush.a库**
**Note: If it is a live-pusher component in custom component mode, libDCUniLivePush.a library needs to be added**

 
