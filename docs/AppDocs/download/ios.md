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

### 2023年07月03日发布——HBuilderX（3.8.7.20230703） 

[和彩云，提取码: KVkz](https://caiyun.139.com/m/i?115CeVRf1mMpK) 

[百度网盘，提取码: msfn](https://pan.baidu.com/s/1MzzRsoeUUr-Nugx2y9OH5w?pwd=msfn)

+ 修复 uni.setTabBarItem 动态设置 gif 图片不生效的Bug[详情](https://ask.dcloud.net.cn/question/171342)
+ 修复 nvue rich-text 组件循环渲染时文字可能随机出现白色背景的Bug[详情](https://ask.dcloud.net.cn/question/171090)
+ 修复 nvue video 组件高度设置 rpx 单位时可能导致 controls 不显示的Bug[详情](https://ask.dcloud.net.cn/question/171037)
+ 修复 uni原生插件Hook系统事件 applicationMain:argv: 获取参数为空的Bug
+ 修复 tabBar 图标宽高不一致时显示会变形的Bug[详情](https://ask.dcloud.net.cn/question/171037)
+ 更新 云端打包环境 XCode 为 14.3.1 版、iOS SDK 为 16.4 版
+ 更新 一键登录使用的个验基础库SDK为 3.0.6.0 版，解决上传 AppStore 可能报 ITMS-90683:Missing purpose string in info.plist 的Bug
+ 调整 allowsInlineMediaPlayback 默认值为 ture，允许 H5 视频全屏播放[文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
+ 调整 mediaPlaybackRequiresUserAction 默认值为 false，允许 H5 音视频通过 API 控制自动播放[文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
+ 修复 setTitleNViewButtonStyle 动态设置标题栏按钮样式可能导致无法正常显示的Bug[详情](https://ask.dcloud.net.cn/question/172191)
+ 修复 视频播放控件 video 画面方向可能不正确的Bug[详情](https://ask.dcloud.net.cn/question/171484)


[和彩云历史版本，提取码: LfQU](https://caiyun.139.com/m/i?115CnquNrQAQU) 

[百度网盘历史版本，提取码: xvh6](https://pan.baidu.com/s/1rxSPZe1tv5YrsVRja2545Q?pwd=xvh6)

[历次更新日志](AppDocs/download/update_history_iOS_release.md)


## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version

### 2023年07月19日发布——HBuilderX（3.8.11.20230719-alpha）

[和彩云，提取码: D0k4](https://caiyun.139.com/m/i?115CepbVRTfhW)

[百度网盘，提取码: hy4h](https://pan.baidu.com/s/1NKEtkwbcKJc_1NHJ4KvKMw?pwd=hy4h)

+ 更新 uni-AD模块 腾讯优量汇广告联盟SDK 为 4.14.32 版

[和彩云历史版本，提取码: DDQe](https://caiyun.139.com/m/i?115CnXGyeucyf) 

[百度网盘历史版本，提取码: 4qgf](https://pan.baidu.com/s/1e2CGOAbMfUusRo215LiChA?pwd=4qgf)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
[Previous update instructions](AppDocs/download/update_history_iOS_alpha.md)
