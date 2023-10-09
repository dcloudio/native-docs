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

### 2023年08月17日发布——HBuilderX（3.8.12.20230817） 

[和彩云，提取码: a69E](https://caiyun.139.com/m/i?115ComLyhnmhe) 

[百度网盘，提取码: aqia](https://pan.baidu.com/s/1uhtt18f4BPHGI1OsY3EV2Q?pwd=aqia)

+ 更新 uni-AD模块 腾讯优量汇广告联盟SDK 为 4.14.32 版；快手广告联盟SDK 为 3.3.46 版；穿山甲广告联盟SDK 为 5.5.0.3 版本；穿山甲GroMore SDK 为 5.3.6.0 版；百度百青藤广告联盟SDK 为 5.31 版；Sigmob广告联盟SDK 为 4.9.3 版
+ 补齐 一键登录 icon 支持 width、height 属性设置 logo 图片的宽高[文档](https://uniapp.dcloud.net.cn/univerify.html)
+ 修复 tabBar 使用 iconfont 字体图标时，样式可能不正常的Bug[详情](https://ask.dcloud.net.cn/question/173375)
+ 修复 uni.setTabBarItem 动态设置 gif 后再设置普通图片可能不生效的Bug
+ 修复 uni-AD模块 穿山甲GroMore激励视频 close 事件返回的 isEnded 属性返回值可能不正确的Bug
+ 修复 wgt热更新后整包覆盖安装引起应用启动白屏的Bug[详情](https://ask.dcloud.net.cn/question/163393)


[和彩云历史版本，提取码: KTch](https://caiyun.139.com/m/i?115ConJIYzT1T) 

[百度网盘历史版本，提取码: 9aei](https://pan.baidu.com/s/18fdKFWenPTqjlXQUwvn_nw?pwd=9aei)

[历次更新日志](AppDocs/download/update_history_iOS_release.md)


## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version

### 2023年09月27日发布——HBuilderX（3.91.2023092719-alpha）

[和彩云，提取码: dwpo](https://caiyun.139.com/m/i?115Cemy8glefG)

[百度网盘，提取码: upbg](https://pan.baidu.com/s/1hP052R05Ey0TZDSSpC7ilQ?pwd=upbg)

+ 修复 应用语言设置为英文时，nvue map 组件仍然显示中文的Bug[详情](https://ask.dcloud.net.cn/question/178833)
+ 修复 3.7.12版更新个验SDK引出的 一键登录弹窗模式下点击关闭不会触发 fail 回调的Bug[详情](https://ask.dcloud.net.cn/question/177253)
+ 更新 uni-AD模块 穿山甲广告联盟SDK 为 5.6.0.5 版；百度百青藤广告联盟SDK 为 5.321 版；Pangle SDK 为 5.5.0.4 版；Google AdMob SDK 为 10.9.0 版

[和彩云历史版本，提取码: 9PPG](https://caiyun.139.com/m/i?115CemyDNQuBc) 

[百度网盘历史版本，提取码: xyh6](https://pan.baidu.com/s/1w3d_KHAtBKB2DxPgOQpowg?pwd=xyh6)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
[Previous update instructions](AppDocs/download/update_history_iOS_alpha.md)
