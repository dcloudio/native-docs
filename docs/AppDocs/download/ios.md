## SDK 升级说明
如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。
If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. Follow this [document](https://ask.dcloud.net.cn/article/35627) to add configuration to block the version Inconsistent pop-up prompts, the framework is normally downward compatible, you can also check the update log to consider whether to upgrade the SDK; if you want to upgrade, you can update the files in the Bundles, inc, and Libs directories under the offline sdk package.

## 注意事项
**功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；**

**SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**

**离线SDK 3.6.15版本之后，使用个推SDK需要swift环境，纯oc项目需要支持桥接swift(工程中新建一个swift文件后，根据提示操作即可)**

**离线SDK 3.7.0版本之后，一键登录依赖的个验SDK基础库由libGTCommonSDK-1.2.2.7.a 更换为GTCommonSDK.framework**

**离线SDK 3.8.0版本之后，一键登录依赖的个验SDK基础库由GTCommonSDK.framework 更换为GTCommonSDK.xcframework**

**离线SDK 3.8.0版本之后，部分广告SDK由.a文件变更为.framework文件，穿山甲以及GromoreSDK由framework变更为xcframework[详情](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uniad.html)**

**若使用百度网盘下载后解压失败，请使用和彩云下载**


## iOS 离线SDK - 正式版

### 2023年10月26日发布——HBuilderX（3.94.2023102613） 

[和彩云，提取码: MqFg](https://caiyun.139.com/m/i?115CoB6GqVset) 

[百度网盘，提取码: 527f](https://pan.baidu.com/s/1eEejqvhPiABTl5HDWUK88Q?pwd=527f)

+ 更新 uni-AD SDK，对接双11预算，其中腾讯优量汇SDK为 4.14.45 版；穿山甲&GroMore SDK 为 5.7.0.4 版；快手广告SDK 为 3.3.53 版；Sigmob广告联盟SDK 为 4.10.0 版；百度百青藤广告SDK 为 5.324 版；
+ 修复 nvue 页面在 iOS17 设备可能引起崩溃的Bug[详情](https://ask.dcloud.net.cn/question/179220)
+ 修复 应用语言设置为英文时，nvue map 组件仍然显示中文的Bug[详情](https://ask.dcloud.net.cn/question/178833)
+ 修复 3.7.12版更新个验SDK引出的 一键登录弹窗模式下点击关闭不会触发 fail 回调的Bug[详情](https://ask.dcloud.net.cn/question/177253)


[和彩云历史版本，提取码: A83Z](https://caiyun.139.com/m/i?115CeVdl7Xt58) 

[百度网盘历史版本，提取码: fvmk](https://pan.baidu.com/s/1YGUZw1xE0xccOpATenrOlA?pwd=fvmk)

[历次更新日志](AppDocs/download/update_history_iOS_release.md)


## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version

### 2023年10月23日发布——HBuilderX（3.94.2023102311-alpha）

[和彩云，提取码: dNBW](https://caiyun.139.com/m/i?115CeVuOVutnx)

[百度网盘，提取码: c6px](https://pan.baidu.com/s/1I5HntRjtOGU5d5OesLUrpw?pwd=c6px)

+ 更新 百度百青藤广告SDK 为 5.324 版，解决信息流广告偶现无法关闭的Bug

[和彩云历史版本，提取码: okE7](https://caiyun.139.com/m/i?115CeVuVXulxL) 

[百度网盘历史版本，提取码: emw2](https://pan.baidu.com/s/1egaoNRy0RJsqlwbYGPsmUA?pwd=emw2)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
[Previous update instructions](AppDocs/download/update_history_iOS_alpha.md)
