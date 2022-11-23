## Q: Android 内置uni小程序。为什么还会弹窗提示资源文件不存在？
## Q: Android has a built-in uni applet. Why does a pop-up window prompt that the resource file does not exist?

A: 可以按以下步骤进行验证
A: You can verify by the following steps

1、 请检查内置uni小程序资源释放的目录是否正确。在assets下创建apps/(小程序appid)/www目录，不是创建apps.(小程序appid).www文件夹。
1、 Please check whether the directory for resource release of the built-in uni applet is correct. Create the apps/(small program appid)/www directory under assets instead of creating the apps.(small program appid).www folder.

2、检查是否正确将wgt解压释放到www文件夹中。
2、 Check whether wgt is correctly decompressed and released to the www folder.

3、 清理工程缓存。重新编译运行。
3、 Clean up the project cache. Recompile and run.

## Q: Android uni小程序中可以使用NJS吗？
## Q: Can NJS be used in the Android uni applet?

A：不太推荐使用NJS。uni小程序运行在独立进程内存是不共享的。其次NJS适用于轻量级调用。如果你的业务逻辑比较复杂建议使用原生扩展来实现。性能更高！
A: NJS is not recommended. The uni applet runs in an independent process memory is not shared. Second, NJS is suitable for lightweight calls. If your business logic is more complex, it is recommended to use native extensions to implement it. Higher performance!

## Q: Android uni小程序内置应用。wgt升级重启是对的。但是退出后再进入uni小程序 版本又退回去了？
## Q: Android uni applet built-in application. Wgt upgrade restart is right. But after exiting and entering the uni applet, the version returned?

A：一般是因为wgt资源中的versionCode为空或小于内置应用的版本。在制作wgt包时请先检查versionCode值域！！！
A: Generally, it is because the versionCode in the wgt resource is empty or smaller than the version of the built-in application. Please check the versionCode value field first when making a wgt package! ! !

## Q: Android uni小程序启动白屏？
## Q: The Android uni applet starts with a white screen?

A：请认真阅读文档参考demo示例检查你的项目！
A: Please read the documentation carefully and refer to the demo example to check your project!
 - 检查SDK拷贝资源时部分资源有没有正确拷贝到你的项目中，
 - Check whether some resources are correctly copied to your project when the SDK copies resources,
 - 检查targetSdkVersion  取值范围26~30
 - Check the value range of targetSdkVersion 26~30
 - 检查minSdkVersion  取值范围 19~22 注意>=23 一定要配置android:extractNativeLibs="true"
 - Check the value range of minSdkVersion 19~22 Note>=23 must configure android:extractNativeLibs="true"
 - 检查androidX版本 选择1.0.0版本
 - Check androidX version select 1.0.0 version
 - 检查application节点配置信息 android:extractNativeLibs="true" 一定要配置为true
 - Check the application node configuration information android:extractNativeLibs="true" must be configured as true
 - 查看宿主集成的三方依赖库。可能与小程序SDK不兼容导致的初始化失败
 - View the three-party dependent libraries integrated by the host. Initialization failure may be caused by incompatibility with the Mini Program SDK

## Q: 集成Android uni小程序SDK包变大了50M？
## Q: The integrated Android uni applet SDK package has become 50M larger?

A：uni小程序示例中包含了大部分的功能模块。开发者可根据宿主需要的功能进行裁剪。需要注意：
A: Most of the functional modules are included in the uni applet example. Developers can tailor it according to the functions required by the host. requires attention:
1、可裁剪libs目录下的依赖库功能模块。切记也只能裁剪libs目录下的依赖库。其他sdk资源不能裁剪。
1、 It can cut the dependent library function modules under the libs directory. Remember that only the dependent libraries in the libs directory can be trimmed. Other sdk resources cannot be clipped.
2、可以修改ndk的cpu支持型号，用户自行选择。例如只需要在真机上运行的话，只需要'armeabi-v7a'既可。
2、 You can modify the supported CPU model of ndk, and the user can choose by himself. For example, if you only need to run on a real machine, you only need 'armeabi-v7a'.

## Q: uni小程序不需要集成分享、支付等第三方的功能。集成到我的Android项目中APK的体积会增加多少？
## Q: The uni applet does not need to integrate third-party functions such as sharing and payment. How much will the APK size increase when integrated into my Android project?
A: 如果排除视频、地图、分享、支付、登录、直播pusher等功只集成[基础模块](UniMPDocs/UseSdk/android?id=unimpsdksdklibs-%E4%BE%9D%E8%B5%96%E5%BA%93%E8%AF%B4%E6%98%8E)。占用APK体积大小如下：
A: If functions such as video, map, sharing, payment, login, and live pusher are excluded, only the [basic module](UniMPDocs/UseSdk/android?id=unimpsdksdklibs-%E4%BE%9D%E8%B5%96%E5% BA%93%E8%AF%B4%E6%98%8E). The occupied APK volume size is as follows:

  |cpu型号.so选择|apk占用大小   
  |cpu model.so selection|apk occupied size
  |:---|:---
  |armeabi-v7a|约7MB左右
  |armeabi-v7a|About 7MB
  |'armeabi-v7a'、'x86'、'arm64-v8a'|约16MB左右
  |'armeabi-v7a', 'x86', 'arm64-v8a'|about 16MB

## Q: 集成Android uni小程序支持androidX吗？
## Q: Does the integrated Android uni applet support androidX?

A：3.2.5+版本已支持androidx, 老版本在 gradle.properties 里将android.useAndroidX 和 android.enableJetifier 都设置为 true，然后使用 Android studio 里的工具 Migrate to AndroidX 即可。（慎用不确保所有功能都可以正常运行。建议使用androidx1.0.0版本）
A: Version 3.2.5+ already supports androidx. In the old version, set both android.useAndroidX and android.enableJetifier to true in gradle.properties, and then use the tool Migrate to AndroidX in Android studio. (Use with caution does not ensure that all functions can run normally. It is recommended to use androidx1.0.0 version)
两个参数的含义说明如下：
The meaning of the two parameters is explained as follows:
android.useAndroidX：当设为 true 时，此标记表示您想立即开始使用 AndroidX。如果缺少此标记，则 Android Studio 会假定此标记已设为 false。
android.useAndroidX: When set to true, this flag indicates that you want to start using AndroidX immediately. If this flag is missing, Android Studio assumes this flag is set to false.
android.enableJetifier：当设为 true 时，此标记表示您想要获得相关的工具支持（通过 Android Gradle 插件），以便将现有第三方库当作针对 AndroidX 编写的库进行自动转化。如果缺少此标记，则 Android Studio 会假定此标记已设为 false。
android.enableJetifier: When set to true, this flag indicates that you want tooling support (via the Android Gradle plugin) to automatically convert existing third-party libraries as if they were written for AndroidX. If this flag is missing, Android Studio assumes this flag is set to false.

## Q: 如何查看小程序 console日志
## Q: How to view the applet console log

A：修改项目中assets/data/dcloud_control.xml 内部信息。将syncDebug改为true，开启调试模式。 注意正式版需要改为false!!!  修改后查看`io.dcloud.unimp`进程查看log.多开版查看`宿主包名:unimp0~2`进程查看log.TAG为console
A: Modify the internal information of assets/data/dcloud_control.xml in the project. Change syncDebug to true to enable debug mode. Note that the official version needs to be changed to false!!! After modification, check the `io.dcloud.unimp` process to view the log. Multi-open version to view the `host package name: unimp0~2` process to view the log.TAG is console

## Q: 开启混淆打包后小程序运行白屏或UI显示异常？
## Q: After the obfuscated packaging is enabled, the applet runs with a white screen or the UI displays abnormally?

A：请检查混淆配置文件。如果未包含以下配置请添加到混淆配置文件中:
A: Please check the obfuscation configuration file. If the following configuration is not included, please add it to the obfuscation configuration file:

```
-keep class com.taobao.weex.** { *; }
-keep class io.dcloud.feature.** { *; }
```

## Q: 集成SDK后打包运行后。会弹出"xxx模块没有集成"的弹窗?
## Q: After integrating the SDK, it is packaged and run. Will a pop-up window of "xxx module is not integrated" pop up?

A：遇到该问题请按一下步骤进行操作
A: If you encounter this problem, please follow the steps below to operate

1、检测UniMPSDK中的资源dcloud_properties.xml是否集成，相关模块是否按照`Feature 依赖库说明.xls`配置[详情](UniMPDocs/UseModule/android/android)
1、 Check whether the resource dcloud_properties.xml in UniMPSDK is integrated, and whether the relevant modules are configured according to `Feature dependent library description.xls` [details](UniMPDocs/UseModule/android/android)

2、检测项目的混淆配置是否集成了UniMPSDK中的`proguard.cfg`，没有请集成
2、 Check whether the obfuscation configuration of the project integrates `proguard.cfg` in UniMPSDK, if not, please integrate

## Q: gallery-dmcBig-release冲突
## Q: gallery-dmcBig-release conflict

A: 3.0.7版本开始gallery-dmcBig-release.aar合并到uniMPSDK-release.aar中。如果项目集成请删除否则会编译冲突
A: From version 3.0.7, gallery-dmcBig-release.aar is merged into uniMPSDK-release.aar. If the project is integrated, please delete it, otherwise it will compile conflicts

## Q: 关闭前一个小程序紧接着打开另一个小程序会白屏
## Q: After closing the previous applet and then opening another applet, the screen will be blank

A: 小程序关闭时SDK会自动清理前一个小程序的资源数据。不同小程序的清理时间可能不太一样。这时开启另一个小程序需要开发者监听setUniMPOnCloseCallBack事件。再延迟300毫秒左右执行startApp基本上可以解决问题。
A: When the applet is closed, the SDK will automatically clean up the resource data of the previous applet. The cleaning time of different applets may be different. At this time, opening another applet requires the developer to monitor the setUniMPOnCloseCallBack event. Delaying the execution of startApp by about 300 milliseconds can basically solve the problem.

## Q: 内置小程序资源，更新小程序资源后运行app发现运行小程序是旧版本的小程序资源
## Q: The built-in applet resource, after updating the applet resource, running the app finds that the running applet is an old version of the applet resource

A：内置小程序每次更新资源需要修改小程序的版本号。如果版本号相同则不会更新。 注意versionName、versionCode都需要修改！
A: Every time the built-in applet updates resources, the version number of the applet needs to be modified. If the version number is the same it will not be updated. Note that both versionName and versionCode need to be modified!

## Q: 开启uni小程序白屏时间过程，启动过慢。
## Q: The white screen time process of starting the uni applet is too slow.

A：尽量尽早初始化小程序SDK，页面尽量使用nvue！改造后会大幅度加快启动速度。
A: Try to initialize the Mini Program SDK as soon as possible, and try to use nvue on the page! After the transformation, the startup speed will be greatly accelerated.

## Q: 打包aab运行白屏
## Q: Package aab running white screen

A: 请按以下配置修改：
A: Please modify according to the following configuration:

1、原生项目主app的AndroidManifest.xml中。application节点配置android:extractNativeLibs="true"。
1、 In the AndroidManifest.xml of the main app of the native project. The application node configures android:extractNativeLibs="true".

2、原生项目根目录 gradle.properties 配置android.bundle.enableUncompressedNativeLibs=false
2、 Native project root directory gradle.properties configuration android.bundle.enableUncompressedNativeLibs=false

重新编译打包
Recompile and package



## Q: 部分版本支付宝支付，偶发没有回调的问题，如何解决？
## Q: Some versions of Alipay payment occasionally have no callback problem, how to solve it?

A：注意两点，  1   activity 换成 AppCompatActivity  2  libs 里面没有用到的aar 尽量去掉。  
A: Pay attention to two points, 1. Replace the activity with AppCompatActivity 2. Remove the aar that is not used in the libs as much as possible.


## Q: uni-app项目 能否集成到android studio的 任意module下的asset中
## Q: Can the uni-app project be integrated into the asset under any module of android studio

A：不可以，默认只能放在app module下。 
A: No, it can only be placed under the app module by default.


## Q: unimp支持打开多个小程序实例吗？
## Q: Does unimp support opening multiple applet instances?

A： 目前最多同时开启3个unimp小程序。超过3个则遵循先入先出的原则关闭早先打开的小程序。需要注意！
A: At present, at most 3 unimp applets can be opened at the same time. If there are more than 3, the earlier opened applets will be closed according to the first-in-first-out principle. requires attention!


	
## Q: 打包Android 10上无法启动相机
## Q: Unable to start the camera on packaged Android 10

A: 在application节点下添加provider节点
A: Add a provider node under the application node
	
```
		<provider
            android:name="io.dcloud.common.util.DCloud_FileProvider"
            android:authorities="${apk.applicationId}.dc.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/dcloud_file_provider" />
        </provider>
```

${apk.applicationId}须替换成应用的包名。
${apk.applicationId} must be replaced with the package name of the application.

## Q: Android uni小程序初始化的时候显示调用隐私数据。如何避免。
## Q: When the Android uni applet is initialized, it displays and calls private data. How to avoid.

由于unimp 小程序运行在独进程 会涉及进程初始化。无法控制三方SDK初始化时隐私合规问题。因此建议开发隐私未同意时不要初始化unimpSDK
Since the unimp applet runs in a separate process, it will involve process initialization. Unable to control the privacy compliance issues when the three-party SDK is initialized. Therefore, it is recommended not to initialize unimpSDK when the development privacy is not agreed

```
if(隐私协议是否同意) {
	//用户同意意思协议后再初始化sdk
	//The user agrees to the agreement and then initializes the sdk
    DCUniMPSDK.getInstance().initialize(...)
}
```

A：unimp 初始化时本身是没有获取设备信息的。
A: Unimp itself does not obtain device information when it is initialized.

但是其依赖的oaid库 会获取设备信息，
But the oaid library it depends on will get device information,

unimp 3.4.18版本之前，初始化SDK时，会被默认初始化oaid。
Before unimp version 3.4.18, oaid will be initialized by default when initializing the SDK.
unimp 3.4.18版本之后，开发者可以自己决定oaid的初始化时机。
After unimp version 3.4.18, developers can decide the initialization timing of oaid by themselves.

代码如下：
code show as below:

```
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
                .setCustomOAID("xxxxxx")
                .build();
```
