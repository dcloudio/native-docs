## LivePusher直播推流配置
#### 添加LivePusher直播推流插件
注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)
1. 依次添加下列Linker Flags: -llibLivePush。 
2. 添加下列库:   
                 liblibLivePush.a
                 libDCUniGPUImage.a
                "UPLiveSDKDll.framework",
                "AVFoundation.framework",
                "QuartzCore.framework",
                "OpenGLES.framework",
                "AudioToolbox.framework",
                "VideoToolbox.framework",
                "Accelerate.framework",
                "CoreMedia.framework",
                "CoreTelephony.framework",
                "SystemConfiguration.framework",
                "CoreMotion.framework",
                "libc++.dylib",
                "libbz2.1.0.dylib",
                "libiconv.dylib",
                "libz.dylib"
**注意：如果是自定义组件模式下的live-pusher组件，需要再加上libDCUniLivePush.a库**
**3."UPLiveSDKDll.framework"这个库是动态库并且不支持模拟器，需要添加到如下图所示的地方：**

  ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/livepusher/28764.png)