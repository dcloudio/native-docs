## SDK 升级说明
如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## 注意事项
**功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；**

**SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**

**离线SDK更新后编译报错，可根据报错信息查看离线相关模块依赖库是否有更新**

**离线SDK 3.8.0版本之后，部分广告SDK由.a文件变更为.framework文件，穿山甲以及GromoreSDK由framework变更为xcframework[详情](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uniad.html)**

**离线SDK 3.99版本之后，Paypal支付最低支持系统版本由iOS11变更为iOS13**

**若使用百度网盘下载后解压失败，请使用和彩云下载**


## iOS 离线SDK - 正式版

### 2024年03月27日发布——HBuilderX（4.07.2024032720）

[和彩云，提取码: XjaA](https://caiyun.139.com/m/i?115CnVJlX3NkM)

[百度网盘，提取码: p9h2](https://pan.baidu.com/s/1rAEoiTVMPQ0nEedUVbHa8g?pwd=p9h2)

无


[历史版本，提取码: wuez](https://pan.baidu.com/s/177m3hqOeBK-oo7_yYexm7A?pwd=wuez)

[历次更新日志](update_history_iOS_release.md)


## iOS 离线SDK - Alpha版

### 2024年03月24日发布——HBuilderX（4.06.2024032403-alpha）

[和彩云，提取码: ibZu](https://caiyun.139.com/m/i?115CoV5s0IbkW)

[百度网盘，提取码: 4nu6](https://pan.baidu.com/s/1DiN8bYdGD6IApg-jaca8gA?pwd=4nu6)

无

[历史版本，提取码: 4s5c](https://pan.baidu.com/s/1AAe3CwaIY98LlpGKcnwvMA?pwd=4s5c)

[历次更新说明](update_history_iOS_alpha.md)
