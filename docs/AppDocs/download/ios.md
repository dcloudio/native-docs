## SDK 升级说明
如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。
If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. Follow this [document](https://ask.dcloud.net.cn/article/35627) to add configuration to block the version Inconsistent pop-up prompts, the framework is normally downward compatible, you can also check the update log to consider whether to upgrade the SDK; if you want to upgrade, you can update the files in the Bundles, inc, and Libs directories under the offline sdk package.

## 注意事项
**功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；**

**SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**

**离线SDK更新后编译报错，可根据报错信息查看离线相关模块依赖库是否有更新**

**离线SDK 3.8.0版本之后，部分广告SDK由.a文件变更为.framework文件，穿山甲以及GromoreSDK由framework变更为xcframework[详情](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uniad.html)**

**离线SDK 3.99版本之后，Paypal支付最低支持系统版本由iOS11变更为iOS13**

**若使用百度网盘下载后解压失败，请使用和彩云下载**


## iOS 离线SDK - 正式版

### 2024年04月01日发布——HBuilderX（4.08.2024040127）

[和彩云，提取码: 8xSW](https://caiyun.139.com/m/i?115CooUGbcEOP)

[百度网盘，提取码: qeyk](https://pan.baidu.com/s/1Ds0KRuEXLmSP6bn5UK83zA?pwd=qeyk)

无


[历史版本，提取码: hg9e](https://pan.baidu.com/s/1pEoGF1A_v61DKD1UMD8Ogw?pwd=hg9e)

[历次更新日志](update_history_iOS_release.md)


## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version

### 2024年04月23日发布——HBuilderX（4.13.2024042321-alpha）

[和彩云，提取码: UTOH](https://caiyun.139.com/m/i?115CeVKtPVv4W)

[百度网盘，提取码: 8mfq](https://pan.baidu.com/s/1WrsC1-tyXT24_8G8a3_h1g?pwd=8mfq)

+ 【重要】新增 支持隐私清单，满足Appstore从5月1日起的新合规要求[文档](https://uniapp.dcloud.net.cn/tutorial/app-ios-privacyinfo.html)
+ 更新 Google AdMob SDK 为 11.2.0 版
+ 更新 推送模块 FCM SDK 为 10.23.1 版
+ 更新 统计模块 Google 统计 SDK 为 10.23.1 版
+ 更新 登录模块 Facebook SDK 为 17.0.0 版；Google SDK 为 7.1.0 版
+ 修复 离线SDK集成 PDFNet.framework 运行时闪退的Bug
+ 修复 一键登录 更换移动手机卡可能仍然返回上一个手机号的Bug
+ 修复 atob 处理特定字符串可能异常的Bug

[历史版本，提取码: j3qg](https://pan.baidu.com/s/11bhiscNWX8xl9A4SgmuQUQ?pwd=j3qg)

[历次更新说明](update_history_iOS_alpha.md)
