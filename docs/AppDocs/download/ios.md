## SDK 升级说明
如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。
If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. Follow this [document](https://ask.dcloud.net.cn/article/35627) to add configuration to block the version Inconsistent pop-up prompts, the framework is normally downward compatible, you can also check the update log to consider whether to upgrade the SDK; if you want to upgrade, you can update the files in the Bundles, inc, and Libs directories under the offline sdk package.

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
## iOS Offline SDK - Alpha Version

### 2023年03月31日发布——HBuilderX（3.7.12.20230331-alpha）

[和彩云，提取码: waWZ](https://caiyun.139.com/m/i?115CnU7vaY9Jl)

[百度网盘，提取码: bi7i](https://pan.baidu.com/s/1AD2OOGX8Mzh_MGBn3rvWrw?pwd=bi7i)

+  更新 uni-AD 腾讯优量汇SDK为 4.14.12 版；快手广告SDK为 3.3.40 版
+  新增 配置 privacyRegisterMode 应用启动时是否获取 idfv，解决应用合规检测可能报同意隐私政策前读取 idfv 的问题[详情](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#privacyRegisterMode)
+  更新 一键登录使用的个验SDK为 3.0.4.0 版，解决某些情况下会获取本地网络权限可能导致苹果审核被拒的Bug[详情](https://ask.dcloud.net.cn/question/166587)
+  修复 进入包含视频播放控件 video 页面会打断音乐播放的Bug[详情](https://ask.dcloud.net.cn/question/165329)
+  修复 导航栏 titleNView 设置 splitLine 样式可能显示不正常的Bug[详情](https://ask.dcloud.net.cn/question/164906)
+  修复 从微信中唤起App时 plus.runtime.arguments 获取的参数可能不正确的Bug[详情](https://ask.dcloud.net.cn/question/166211)

[和彩云历史版本，提取码: GYk6](https://caiyun.139.com/m/i?115CnoDZoQsuM) 

[百度网盘历史版本，提取码: bp4r](https://pan.baidu.com/s/1N0adSkOJu5pik8ZMU03WnA?pwd=bp4r)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
[Previous update instructions](AppDocs/download/update_history_iOS_alpha.md)
