## SDK 升级说明
如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。
If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. Follow this [document](https://ask.dcloud.net.cn/article/35627) to add configuration to block the version Inconsistent pop-up prompts, the framework is normally downward compatible, you can also check the update log to consider whether to upgrade the SDK; if you want to upgrade, you can update the files in the Bundles, inc, and Libs directories under the offline sdk package.

## 注意事项
**功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；**

**SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**

**离线SDK 3.6.15版本之后，使用个推SDK需要swift环境，纯oc项目需要支持桥接swift(工程中新建一个swift文件后，根据提示操作即可)**

**离线SDK 3.7.0版本之后，一键登录依赖的个验SDK基础库由libGTCommonSDK-1.2.2.7.a 更换为GTCommonSDK.framework**

**离线SDK 3.8.0版本之后，部分广告SDK由.a文件变更为.framework文件，穿山甲以及GromoreSDK由framework变更为xcframework[详情](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uniad.html)**

**若使用百度网盘下载后解压失败，请使用和彩云下载**


## iOS 离线SDK - 正式版

### 2023年05月31日发布——HBuilderX（3.8.4.20230531） 

[和彩云，提取码: RHvD](https://caiyun.139.com/m/i?115CoUrHDeM5C) 

[百度网盘，提取码: yssf](https://pan.baidu.com/s/1d1oSZ-bQdwhXQ5goU75-ow?pwd=yssf)

无


[和彩云历史版本，提取码: vgaQ](https://caiyun.139.com/m/i?115CoUsGAIaKJ) 

[百度网盘历史版本，提取码: qqmi](https://pan.baidu.com/s/1Ve7b9m0IpsjQJlgJzhB2pw?pwd=qqmi)

[历次更新日志](AppDocs/download/update_history_iOS_release.md)


## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version

### 2023年05月23日发布——HBuilderX（3.8.3.20230523-alpha）

[和彩云，提取码: sh4X](https://caiyun.139.com/m/i?115CoVLmt7f1X)

[百度网盘，提取码: nx5c](https://pan.baidu.com/s/19FuCir24JY4VV6be1dQ7KQ?pwd=nx5c)

+ 更新 uni-AD SDK，对接618预算，其中优量汇SDK为4.14.30 版；穿山甲SDK为5.4.0.0 版；穿山甲GroMore广告SDK为5.1.7.0 版；快手广告SDK为3.3.44 版；Sigmob广告联盟SDK为 4.9.0 版；百度百青藤广告SDK为 5.14 版
+ 更新 UniPush 使用的个推SDK为 2.7.4.2 版，解决默认获取定位权限的Bug
+ 更新 一键登录使用的个验SDK为 3.0.4.1 版

[和彩云历史版本，提取码: qp3K](https://caiyun.139.com/m/i?115CoBNMNlrbo) 

[百度网盘历史版本，提取码: u7t7](https://pan.baidu.com/s/1Ny0YuaeIcFKvImCBtjNFHA?pwd=u7t7)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
[Previous update instructions](AppDocs/download/update_history_iOS_alpha.md)
