## SDK 升级说明
如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## 注意事项
**功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；**

**SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**

**离线SDK 3.6.15版本之后，使用个推SDK需要swift环境，纯oc项目需要支持桥接swift(工程中新建一个swift文件后，根据提示操作即可)**

**离线SDK 3.7.0版本之后，一键登录依赖的个验SDK基础库由libGTCommonSDK-1.2.2.7.a 更换为GTCommonSDK.framework**

**离线SDK 3.8.0版本之后，部分广告SDK由.a文件变更为.framework文件，穿山甲以及GromoreSDK由framework变更为xcframework[详情](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uniad.html)**

**若使用百度网盘下载后解压失败，请使用和彩云下载**


## iOS 离线SDK - 正式版

### 2023年05月26日发布——HBuilderX（3.8.3.20230526） 

[和彩云，提取码: 5Ufa](https://caiyun.139.com/m/i?115CnrAiVKo24) 

[百度网盘，提取码: zp9y](https://pan.baidu.com/s/1HMnwE1MLUDAuvm_sCMsC3g?pwd=zp9y)

+ 新增 一键登录支持 isCenterHint 参数设置未勾选服务条款时点击登录按钮的提示信息是否垂直居中显示[详情](https://uniapp.dcloud.net.cn/univerify.html#%E5%AE%A2%E6%88%B7%E7%AB%AF-%E8%AF%B7%E6%B1%82%E7%99%BB%E5%BD%95%E6%8E%88%E6%9D%83)
+ 新增 配置 privacyRegisterMode 应用启动时是否获取 idfv，解决应用合规检测可能报同意隐私政策前读取 idfv 的问题[详情](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#privacyRegisterMode)
+ 新增 uni-AD 支持 uniMP激励视频广告，提升CPM、提升填充率[详情](https://uniapp.dcloud.net.cn/uni-ad.html#unimp)
+ 更新 uni-AD SDK，对接618预算，其中优量汇SDK为4.14.30 版；穿山甲SDK为5.4.0.0 版；穿山甲GroMore广告SDK为5.1.7.0 版；快手广告SDK为3.3.44 版；Sigmob广告联盟SDK为 4.9.0 版；百度百青藤广告SDK为 5.14 版
+ 更新 UniPush 使用的个推SDK为 2.7.4.2 版，解决默认获取定位权限的Bug
+ 更新 一键登录使用的个验SDK为 3.0.4.1 版，解决某些情况下会获取本地网络权限可能导致苹果审核被拒的Bug[详情](https://ask.dcloud.net.cn/question/166587)
+ 修复 uni.scanCode 扫码后跳转页面可能引起应用卡死的Bug[详情](https://ask.dcloud.net.cn/question/160090)
+ 修复 plus.runtime.restart 后苹果应用内支付 IAP 无响应的Bug
+ 修复 进入包含视频播放控件 video 页面会打断音乐播放的Bug[详情](https://ask.dcloud.net.cn/question/165329)
+ 修复 导航栏 titleNView 设置 splitLine 样式可能显示不正常的Bug[详情](https://ask.dcloud.net.cn/question/164906)
+ 修复 从微信中唤起App时 plus.runtime.arguments 获取的参数可能不正确的Bug[详情](https://ask.dcloud.net.cn/question/166211)


[和彩云历史版本，提取码: FM3R](https://caiyun.139.com/m/i?115Cepfy33Nlw) 

[百度网盘历史版本，提取码: fvwr](https://pan.baidu.com/s/1Z_P-8Yk5hE01WsXHpr1s-w?pwd=fvwr)

[历次更新日志](AppDocs/download/update_history_iOS_release.md)


## iOS 离线SDK - Alpha版

### 2023年05月23日发布——HBuilderX（3.8.3.20230523-alpha）

[和彩云，提取码: sh4X](https://caiyun.139.com/m/i?115CoVLmt7f1X)

[百度网盘，提取码: nx5c](https://pan.baidu.com/s/19FuCir24JY4VV6be1dQ7KQ?pwd=nx5c)

+ 更新 uni-AD SDK，对接618预算，其中优量汇SDK为4.14.30 版；穿山甲SDK为5.4.0.0 版；穿山甲GroMore广告SDK为5.1.7.0 版；快手广告SDK为3.3.44 版；Sigmob广告联盟SDK为 4.9.0 版；百度百青藤广告SDK为 5.14 版
+ 更新 UniPush 使用的个推SDK为 2.7.4.2 版，解决默认获取定位权限的Bug
+ 更新 一键登录使用的个验SDK为 3.0.4.1 版

[和彩云历史版本，提取码: qp3K](https://caiyun.139.com/m/i?115CoBNMNlrbo) 

[百度网盘历史版本，提取码: u7t7](https://pan.baidu.com/s/1Ny0YuaeIcFKvImCBtjNFHA?pwd=u7t7)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
