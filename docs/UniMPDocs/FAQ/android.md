## Q: Android 内置uni小程序。为什么还会弹窗提示资源文件不存在？

A: 可以按以下步骤进行验证

1、 请检查内置uni小程序资源释放的目录是否正确。在assets下创建apps/(小程序appid)/www目录，不是创建apps.(小程序appid).www文件夹。

2、检查是否正确将wgt解压释放到www文件夹中。

3、 清理工程缓存。重新编译运行。

## Q: Android uni小程序中可以使用NJS吗？

A：不太推荐使用NJS。uni小程序运行在独立进程内存是不共享的。其次NJS适用于轻量级调用。如果你的业务逻辑比较复杂建议使用原生扩展来实现。性能更高！

## Q: Android uni小程序内置应用。wgt升级重启是对的。但是退出后再进入uni小程序 版本又退回去了？

A：一般是因为wgt资源中的versionCode为空或小于内置应用的版本。在制作wgt包时请先检查versionCode值域！！！

## Q: Android uni小程序启动白屏？

A：请认真阅读文档参考demo示例检查你的项目！
 - 检查SDK拷贝资源时部分资源有没有正确拷贝到你的项目中，
 - 检查targetSdkVersion  取值范围26~30
 - 检查minSdkVersion  取值范围 19~22 注意>=23 一定要配置android:extractNativeLibs="true"
 - 检查androidX版本 选择1.0.0版本
 - 检查application节点配置信息 android:extractNativeLibs="true" 一定要配置为true
 - 查看宿主集成的三方依赖库。可能与小程序SDK不兼容导致的初始化失败

## Q: 集成Android uni小程序SDK包变大了50M？

A：uni小程序示例中包含了大部分的功能模块。开发者可根据宿主需要的功能进行裁剪。需要注意：
1、可裁剪libs目录下的依赖库功能模块。切记也只能裁剪libs目录下的依赖库。其他sdk资源不能裁剪。
2、可以修改ndk的cpu支持型号，用户自行选择。例如只需要在真机上运行的话，只需要'armeabi-v7a'既可。

## Q: uni小程序不需要集成分享、支付等第三方的功能。集成到我的Android项目中APK的体积会增加多少？
A: 如果排除视频、地图、分享、支付、登录、直播pusher等功只集成[基础模块](UniMPDocs/UseSdk/android?id=unimpsdksdklibs-%E4%BE%9D%E8%B5%96%E5%BA%93%E8%AF%B4%E6%98%8E)。占用APK体积大小如下：

  |cpu型号.so选择|apk占用大小   
  |:---|:---
  |armeabi-v7a|约7MB左右
  |'armeabi-v7a'、'x86'、'arm64-v8a'|约16MB左右

## Q: 集成Android uni小程序支持androidX吗？

A：3.2.5+版本已支持androidx, 老版本在 gradle.properties 里将android.useAndroidX 和 android.enableJetifier 都设置为 true，然后使用 Android studio 里的工具 Migrate to AndroidX 即可。（慎用不确保所有功能都可以正常运行。建议使用androidx1.0.0版本）
两个参数的含义说明如下：
android.useAndroidX：当设为 true 时，此标记表示您想立即开始使用 AndroidX。如果缺少此标记，则 Android Studio 会假定此标记已设为 false。
android.enableJetifier：当设为 true 时，此标记表示您想要获得相关的工具支持（通过 Android Gradle 插件），以便将现有第三方库当作针对 AndroidX 编写的库进行自动转化。如果缺少此标记，则 Android Studio 会假定此标记已设为 false。

## Q: 如何查看小程序 console日志

A：修改项目中assets/data/dcloud_control.xml 内部信息。将syncDebug改为true，开启调试模式。 注意正式版需要改为false!!!  修改后查看`io.dcloud.unimp`进程查看log.多开版查看`宿主包名:unimp0~2`进程查看log.TAG为console

## Q: 开启混淆打包后小程序运行白屏或UI显示异常？

A：请检查混淆配置文件。如果未包含以下配置请添加到混淆配置文件中:

```
-keep class com.taobao.weex.** { *; }
-keep class io.dcloud.feature.** { *; }
```

## Q: 集成SDK后打包运行后。会弹出"xxx模块没有集成"的弹窗?

A：遇到该问题请按一下步骤进行操作

1、检测UniMPSDK中的资源dcloud_properties.xml是否集成，相关模块是否按照`Feature 依赖库说明.xls`配置[详情](UniMPDocs/UseModule/android/android)

2、检测项目的混淆配置是否集成了UniMPSDK中的`proguard.cfg`，没有请集成

## Q: gallery-dmcBig-release冲突

A: 3.0.7版本开始gallery-dmcBig-release.aar合并到uniMPSDK-release.aar中。如果项目集成请删除否则会编译冲突

## Q: 关闭前一个小程序紧接着打开另一个小程序会白屏

A: 小程序关闭时SDK会自动清理前一个小程序的资源数据。不同小程序的清理时间可能不太一样。这时开启另一个小程序需要开发者监听setUniMPOnCloseCallBack事件。再延迟300毫秒左右执行startApp基本上可以解决问题。

## Q: 内置小程序资源，更新小程序资源后运行app发现运行小程序是旧版本的小程序资源

A：内置小程序每次更新资源需要修改小程序的版本号。如果版本号相同则不会更新。 注意versionName、versionCode都需要修改！

## Q: 开启uni小程序白屏时间过程，启动过慢。

A：尽量尽早初始化小程序SDK，页面尽量使用nvue！改造后会大幅度加快启动速度。

## Q: 打包aab运行白屏

A: 请按以下配置修改：

1、原生项目主app的AndroidManifest.xml中。application节点配置android:extractNativeLibs="true"。

2、原生项目根目录 gradle.properties 配置android.bundle.enableUncompressedNativeLibs=false

重新编译打包



## Q: 部分版本支付宝支付，偶发没有回调的问题，如何解决？

A：注意两点，  1   activity 换成 AppCompatActivity  2  libs 里面没有用到的aar 尽量去掉。  


## Q: uni-app项目 能否集成到android studio的 任意module下的asset中

A：不可以，默认只能放在app module下。 


## Q: unimp支持打开多个小程序实例吗？

A： 目前最多同时开启3个unimp小程序。超过3个则遵循先入先出的原则关闭早先打开的小程序。需要注意！


	
## Q: 打包Android 10上无法启动相机

A: 在application节点下添加provider节点
	
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

## Q: Android uni小程序初始化的时候显示调用隐私数据。如何避免。

由于unimp 小程序运行在独进程 会涉及进程初始化。无法控制三方SDK初始化时隐私合规问题。因此建议开发隐私未同意时不要初始化unimpSDK

```
if(隐私协议是否同意) {
	//用户同意意思协议后再初始化sdk
    DCUniMPSDK.getInstance().initialize(...)
}
```

A：unimp 初始化时本身是没有获取设备信息的。

但是其依赖的oaid库 会获取设备信息，

unimp 3.4.18版本之前，初始化SDK时，会被默认初始化oaid。
unimp 3.4.18版本之后，开发者可以自己决定oaid的初始化时机。

代码如下：

```
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
                .setCustomOAID("xxxxxx")
                .build();
```
