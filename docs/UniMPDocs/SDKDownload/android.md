**如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK**
**If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. You can add configuration according to this [document](https://ask.dcloud.net.cn/article/35627) Shield the pop-up prompts of inconsistent versions. The framework is normally downward compatible. You can also check the update log to consider whether to upgrade the SDK**

## UniMPSDK版本说明
## UniMPSDK Release Notes

### UniMPSDK V2版本
### UniMPSDK V2 version

+ 支持同时运行多个小程序。也是后续主要维护的版本。V1版本将不再维护更新！需要注意。
+ SDK部分类名及API对比V1版本均有调整需参考API文档及示例进行修改! [小程序V2版本功能示例](/UniMPDocs/Sample/android-v2)、[小程序V2版本API文档](/UniMPDocs/API/android-v2);

## SDK下载
## SDK download

**⚠️注意：如果点击无法下载，可右键点击该链接->选择"链接存储为.."进行下载。**
**⚠️Note: If the click fails to download, you can right-click the link -> select "Save link as.." to download. **

### 2024年01月03日发布


#### SDK 3.99 版本

[点击下载SDK-Android@3.99.zip](https://native-res.dcloud.net.cn/unimp-sdk/UniMPSDK_Android%403.99.zip)

#### 更新日志

+ 其他更新 [详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.99.2023122611.html)

## 升级SDK注意事项
## Notes on upgrading the SDK

+ 3.7.3 版本之后，uni-jsframework 修改为内置集成，开发者无需手动处理
+ 3.6.15 版本之后，为了支持暗黑模式，新增了一个必须集成的依赖 **androidx.webkit:webkit:1.3.0**，如果未集成此依赖，可能会导致白屏
+ 3.5.3 版本之后，新增了一个必须集成的breakpad-build-release.aar，如果未集成此aar会导致项目运行报错
+ 更新proguard.cfg混淆配置，文件在SDK文件夹根目录！
+ Update the proguard.cfg obfuscation configuration, the file is in the root directory of the SDK folder!
+ 将文档说的4个必须库全部替换更新uniMPSDK-release.aar、uniapp-release.aar、base_oaid_sdk.aar、android-gif-drawable-release@1.xx.aar。其他aar根据之前版本是否集成选择更新替换。
+ Replace all the 4 required libraries mentioned in the document and update uniMPSDK-release.aar, uniapp-release.aar, base_oaid_sdk.aar, android-gif-drawable-release@1.xx.aar. Other aars choose to update and replace according to whether the previous version is integrated.


