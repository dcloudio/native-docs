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

### 2023年12月26日发布——HBuilderX（3.99.2023122611）

[和彩云，提取码: XoOF](https://caiyun.139.com/m/i?115CeVfzPc45F)

[百度网盘，提取码: mjff](https://pan.baidu.com/s/1qoQzakThPOcRI_PtK58S6w?pwd=mjff)

+ 修复 iPhone 15 设备无法获取手机型号的Bug[详情](https://ask.dcloud.net.cn/question/182298)
+ 修复 iOS17系统视频播放控件 video 竖屏状态下进入全屏后退出全屏无法正常显示的Bug
+ 修复 nvue map 组件选择 google 地图时，使用自定义气泡导致应用崩溃的Bug[详情](https://ask.dcloud.net.cn/question/183494)
+ 更新 支付模块 微信 SDK 为 2.0.2 版；支付宝 SDK 为 15.8.6 版； Paypal SDK 为 1.2.0 版；Stripe SDK 为 23.18.2 版
+ 更新 分享/登录模块 微信 SDK 为 2.0.2 版；QQ SDK 为 3.5.14 版；新浪微博 SDK 为 3.3.4 版；Facebook SDK 为 16.2.1 版；Google SDK 为 7.0.0 版
+ 更新 地图/定位模块 高德地图 SDK 为 9.7.0 版，高德定位 SDK 为 2.10.0 版；百度地图 SDK 为 6.6.0 版，百度定位 SDK 为 2.0.9 版
+ 更新 统计模块 友盟基础库 SDK 为 7.4.2 版，友盟统计 SDK 为 9.6.1 版；Google 统计 SDK 为 10.18.0 版
+ 更新 uni-AD模块 Google AdMob SDK 为 10.13.0 版
+ 更新 一键登录使用的个验 SDK为 3.0.6.0 版，解决联通运营商一键认证服务主体变更导致新开通应用预登录可能失败的问题

[历史版本，提取码: cpmi](https://pan.baidu.com/s/1Q6Axh0lNw-C3NVpqaYDIKg?pwd=cpmi)

[历次更新日志](update_history_iOS_release.md)


## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version

### 2024年02月02日发布——HBuilderX（4.01.2024020211-alpha）

[和彩云，提取码: wO37](https://caiyun.139.com/m/i?115CepIUM1UP2)

[百度网盘，提取码: 43zg](https://pan.baidu.com/s/1MaL3nGHA5MmIR_oIQJ56OA?pwd=43zg)

无

[历史版本，提取码: rwep](https://pan.baidu.com/s/1lVA-aqM5DrMa9xRoQ37Wog?pwd=rwep)

[历次更新说明](update_history_iOS_alpha.md)
