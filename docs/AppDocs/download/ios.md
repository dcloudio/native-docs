## SDK 升级说明
如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## 注意事项
**功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；**

**SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**

**离线SDK 3.6.15版本之后，使用个推SDK需要swift环境，纯oc项目需要支持桥接swift(工程中新建一个swift文件后，根据提示操作即可)**

**离线SDK 3.7.0版本之后，一键登录依赖的个验SDK基础库由libGTCommonSDK-1.2.2.7.a 更换为GTCommonSDK.framework**

**若使用百度网盘下载后解压失败，请使用和彩云下载**


## iOS 离线SDK - 正式版

### 2023年03月24日发布——HBuilderX（3.7.9.20230324） 

[和彩云，提取码: hSbJ](https://caiyun.139.com/m/i?115Comk3tpPRh) 

[百度网盘，提取码: wyf5](https://pan.baidu.com/s/1jNb8U1h_WH7vQ84mzLXfjA?pwd=wyf5)

无

[和彩云历史版本，提取码: MR1v](https://caiyun.139.com/m/i?115ComkHxp9WR) 

[百度网盘历史版本，提取码: thfw](https://pan.baidu.com/s/1b80maw-HvokYzX4Bc_winA?pwd=thfw)

[历次更新日志](AppDocs/download/update_history_iOS_release.md)


## iOS 离线SDK - Alpha版

### 2023年04月11日发布——HBuilderX（3.7.13.20230411-alpha）

[和彩云，提取码: xqd1](https://caiyun.139.com/m/i?115CeS2CcubZe)

[百度网盘，提取码: m84h](https://pan.baidu.com/s/1QLENYX5tu8d6OH24ZIjMiA?pwd=m84h)

+ 【重要】新增 uni-AD 支持 uniMP激励视频广告，提升CPM、提升填充率[详情](https://uniapp.dcloud.net.cn/uni-ad.html#unimp)
+  更新 uni-AD Sigmob广告联盟SDK为 4.7.1 版；百度百青藤广告SDK为 5.121 版
+  修复 修复 plus.runtime.restart 后苹果应用内支付 IAP 无响应的Bug
+  新增 一键登录支持 isCenterHint 参数设置未勾选服务条款时点击登录按钮的提示信息是否垂直居中显示[详情](https://uniapp.dcloud.net.cn/univerify.html#%E5%AE%A2%E6%88%B7%E7%AB%AF-%E8%AF%B7%E6%B1%82%E7%99%BB%E5%BD%95%E6%8E%88%E6%9D%83)

[和彩云历史版本，提取码: vFSG](https://caiyun.139.com/m/i?115Co7Qaqcmwc) 

[百度网盘历史版本，提取码: 2wrm](https://pan.baidu.com/s/1DerHbqtZsvbaEoeTIuYVoQ?pwd=2wrm)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
