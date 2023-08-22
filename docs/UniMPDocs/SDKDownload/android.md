**如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK**

## UniMPSDK版本说明

### UniMPSDK V2版本

+ 支持同时运行多个小程序。也是后续主要维护的版本。V1版本将不再维护更新！需要注意。
+ SDK部分类名及API对比V1版本均有调整需参考API文档及示例进行修改! [小程序V2版本功能示例](UniMPDocs/Sample/android-v2)、[小程序V2版本API文档](UniMPDocs/API/android-v2);

### UniMPSDK V1版本

+ 老版本uni小程序SDK。不支持同时运行多个小程序。3.2.3之后不会再维护更新。

## SDK下载

**⚠️注意：如果点击无法下载，可右键点击该链接->选择"链接存储为.."进行下载。**

### 2023年08月22日发布

#### SDK 3.8.12 版本

[点击下载SDK-Android@3.8.12-20230822.zip](https://native-res.dcloud.net.cn/unimp-sdk/SDK-Android%403.8.12-20230822.zip)

#### 更新日志

+ 其他更新 [详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.8.12.20230817.html)


## 升级SDK注意事项

+ 3.7.3 版本之后，uni-jsframework 修改为内置集成，开发者无需手动处理
+ 3.6.15 版本之后，为了支持暗黑模式，新增了一个必须集成的依赖 **androidx.webkit:webkit:1.3.0**，如果未集成此依赖，可能会导致白屏
+ 3.5.3 版本之后，新增了一个必须集成的breakpad-build-release.aar，如果未集成此aar会导致项目运行报错
+ 更新proguard.cfg混淆配置，文件在SDK文件夹根目录！
+ 将文档说的4个必须库全部替换更新uniMPSDK-release.aar、uniapp-release.aar、base_oaid_sdk.aar、android-gif-drawable-release@1.xx.aar。其他aar根据之前版本是否集成选择更新替换。

## 历史稳定版本

百度网盘链接: [https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q](https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q) 提取码: hnug
