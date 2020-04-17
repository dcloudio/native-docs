## Q: Android 内置uni小程序。小程序也是v3编译模式，为什么还会弹窗提示非v3或资源文件不存在？

A: 可以按以下步骤进行验证

1、 请检查内置uni小程序资源释放的目录是否正确。在assets下创建apps/(小程序appid)/www目录，不是创建apps.(小程序appid).www文件夹。

2、检查是否正确将wgt解压释放到www文件夹中。

3、 清理工程缓存。重新编译运行。

## Q: Android uni小程序中可以使用NJS吗？

A：不太推荐使用NJS。uni小程序运行在独立进程内存是不共享的。其次NJS适用于轻量级调用。如果你的业务逻辑比较复杂建议使用原生扩展来实现。性能更高！

## Q: Android uni小程序内置应用。wgt升级重启是对的。但是退出后再进入uni小程序 版本又退回去了？

A：一般是因为wgt资源中的versionCode为空或小于内置应用的版本。在制作wgt包时请先检查versionCode值域！！！

## Q: Android uni小程序启动白屏？

A：一般是SDK拷贝资源时部分资源没有正确拷贝到你的项目中，请认真阅读文旦参考demo示例检查你的项目！

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

A：参考谷歌官网说明，在 gradle.properties 里将android.useAndroidX 和 android.enableJetifier 都设置为 true，然后使用 Android studio 里的工具 Migrate to AndroidX 即可。
两个参数的含义说明如下：
android.useAndroidX：当设为 true 时，此标记表示您想立即开始使用 AndroidX。如果缺少此标记，则 Android Studio 会假定此标记已设为 false。
android.enableJetifier：当设为 true 时，此标记表示您想要获得相关的工具支持（通过 Android Gradle 插件），以便将现有第三方库当作针对 AndroidX 编写的库进行自动转化。如果缺少此标记，则 Android Studio 会假定此标记已设为 false。

## Q: 如何查看小程序 console日志

A：修改项目中assets/data/dcloud_control.xml 内部信息。将syncDebug改为true，开启调试模式。 注意正式版需要改为false!!!  修改后查看io.dcloud.unimp进程查看log。TAG为console