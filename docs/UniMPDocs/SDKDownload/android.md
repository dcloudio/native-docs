**如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK**
**If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. You can add configuration according to this [document](https://ask.dcloud.net.cn/article/35627) Shield the pop-up prompts of inconsistent versions. The framework is normally downward compatible. You can also check the update log to consider whether to upgrade the SDK**

## UniMPSDK版本说明
## UniMPSDK Release Notes

### UniMPSDK V2版本
### UniMPSDK V2 version

+ 支持同时运行多个小程序。也是后续主要维护的版本。V1版本将不再维护更新！需要注意。
+ Support running multiple applets at the same time. It is also the main maintenance version in the future. The V1 version will no longer be maintained and updated! requires attention.
+ SDK部分类名及API对比V1版本均有调整需参考API文档及示例进行修改! [小程序V2版本功能示例](UniMPDocs/Sample/android-v2)、[小程序V2版本API文档](UniMPDocs/API/android-v2);
+ Part of the SDK class names and APIs have been adjusted compared to the V1 version. Please refer to the API documentation and examples for modification! /API/android-v2);

### UniMPSDK V1版本
### UniMPSDK V1 version

+ 老版本uni小程序SDK。不支持同时运行多个小程序。3.2.3之后不会再维护更新。
+ Old version uni applet SDK. Running multiple applets at the same time is not supported. There will be no maintenance updates after 3.2.3.

## SDK下载
## SDK download

**⚠️注意：如果点击无法下载，可右键点击该链接->选择"链接存储为.."进行下载。**
**⚠️Note: If the click fails to download, you can right-click the link -> select "Save link as.." to download. **

### 2023年01月29日发布

#### SDK 3.6.18 版本

[点击下载UniMPSDK_Android@3.6.18.20230129.zip](https://native-res.dcloud.net.cn/unimp-sdk/UniMPSDK_Android%403.6.18.20230129.zip)

#### 更新日志
#### Update Log

+ 其他更新 [详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.6.18.20230117.html)


## 升级SDK注意事项
## Notes on upgrading the SDK

+ 3.6.15 版本之后，为了支持暗黑模式，新增了一个必须集成的依赖 **androidx.webkit:webkit:1.3.0**，如果未集成此依赖，可能会导致白屏
+ 3.5.3 版本之后，新增了一个必须集成的breakpad-build-release.aar，如果未集成此aar会导致项目运行报错
+ After version 3.5.3, a breakpad-build-release.aar that must be integrated has been added. If this aar is not integrated, it will cause an error when the project runs
+ 升级SDK时第一步就是先将SDK目录下的assets文件相关资源替换更新。最主要的就是uni-jsframework.js 一定要替换! uni-jsframework-vue3.js是vue3的框架如果集成的小程序不会使用vue3可以不集成。
+ The first step when upgrading the SDK is to replace and update the related resources of the assets file in the SDK directory. The most important thing is that uni-jsframework.js must be replaced! uni-jsframework-vue3.js is the framework of vue3. If the integrated applet does not use vue3, it can not be integrated.
+ 更新proguard.cfg混淆配置，文件在SDK文件夹根目录！
+ Update the proguard.cfg obfuscation configuration, the file is in the root directory of the SDK folder!
+ 将文档说的4个必须库全部替换更新uniMPSDK-release.aar、uniapp-release.aar、base_oaid_sdk.aar、android-gif-drawable-release@1.xx.aar。其他aar根据之前版本是否集成选择更新替换。
+ Replace all the 4 required libraries mentioned in the document and update uniMPSDK-release.aar, uniapp-release.aar, base_oaid_sdk.aar, android-gif-drawable-release@1.xx.aar. Other aars choose to update and replace according to whether the previous version is integrated.

## 历史稳定版本
## Historical stable version

百度网盘链接: [https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q](https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q) 提取码: hnug
Baidu network disk link: [https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q](https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q) Extraction code: hnug
