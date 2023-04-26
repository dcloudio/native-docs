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

### 2023年04月25日发布——HBuilderX（3.7.10.20230425） 

[和彩云，提取码: BJQz](https://caiyun.139.com/m/i?115CepUD2n12z) 

[百度网盘，提取码: 9txr](https://pan.baidu.com/s/1-lV5IJIIwiRcGUSBoVZf9w?pwd=9txr)

无

[和彩云历史版本，提取码: R8s4](https://caiyun.139.com/m/i?115CepUoY71oX) 

[百度网盘历史版本，提取码: c52t](https://pan.baidu.com/s/1H6wVEL52fXbje-2vrxIloA?pwd=c52t)

[历次更新日志](AppDocs/download/update_history_iOS_release.md)


## iOS 离线SDK - Alpha版

### 2023年04月25日发布——HBuilderX（3.8.0.20230425-alpha）

[和彩云，提取码: 5ofs](https://caiyun.139.com/m/i?115Cnr50YIPtA)

[百度网盘，提取码: w3up](https://pan.baidu.com/s/1WNh9QiF9m41tkE50lH2EUw?pwd=w3up)

+ 修复 uni.scanCode 扫码后跳转页面可能引起应用卡死的Bug[详情](https://ask.dcloud.net.cn/question/160090)
+ 更新 uni-AD 今日头条穿山甲 SDK 为 5.1.6.0 版；穿山甲GroMore广告 SDK 为 5.1.6.0 版
+ 更新 uni-AD 部分广告依赖库文件更新[详情](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uniad.html)

[和彩云历史版本，提取码: M0dZ](https://caiyun.139.com/m/i?115CepZ7m2JBv) 

[百度网盘历史版本，提取码: vei2](https://pan.baidu.com/s/1Jl9C2zaL0uuRoMMV_jEUzw?pwd=vei2)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
