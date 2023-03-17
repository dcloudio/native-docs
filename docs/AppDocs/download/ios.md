## SDK 升级说明
如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## 注意事项
**功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；**

**SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**

**离线SDK 3.6.15版本之后，使用个推SDK需要swift环境，纯oc项目需要支持桥接swift(工程中新建一个swift文件后，根据提示操作即可)**

**离线SDK 3.7.0版本之后，一键登录依赖的个验SDK基础库由libGTCommonSDK-1.2.2.7.a 更换为GTCommonSDK.framework**

**若使用百度网盘下载后解压失败，请使用和彩云下载**


## iOS 离线SDK - 正式版

### 2023年02月23日发布——HBuilderX（3.7.3.20230223） 

[和彩云，提取码: 8b4e](https://caiyun.139.com/m/i?115CoowJwmK2z) 

[百度网盘，提取码: af8s](https://pan.baidu.com/s/1G4ZT-fkybhmvfbuJXrlA3w?pwd=af8s)

+ 新增 苹果应用内支付 IAP 支持订阅促销优惠 [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#%25E4%25BF%2583%25E9%2594%2580%25E4%25BC%2598%25E6%2583%25A0%25E5%258F%2582%25E6%2595%25B0%25E8%25AF%25B4%25E6%2598%258E)
+ 更新 一键登录使用的个验SDK为 3.0.3.0 版
+ 修复 音频播放 AudioPlayer seekTo 跳转指定位置不支持毫秒的Bug

[和彩云历史版本，提取码: hTWB](https://caiyun.139.com/m/i?115Cnr0XxOm8l) 

[百度网盘历史版本，提取码: vy9t](https://pan.baidu.com/s/1Xdsx_xd6xoGEuDY-w2rkew?pwd=vy9t)

[历次更新日志](AppDocs/download/update_history_iOS_release.md)


## iOS 离线SDK - Alpha版

### 2023年03月16日发布——HBuilderX（3.7.7.20230316-alpha）

[和彩云，提取码: piht](https://caiyun.139.com/m/i?115Cenmunfk6c)

[百度网盘，提取码: n13u](https://pan.baidu.com/s/1miVExLv_2YsykQz5u86gYQ?pwd=n13u)

+  修复 nvue 页面组件设置 border 样式偶现崩溃的Bug[详情](https://ask.dcloud.net.cn/question/164236)
+  修复 nvue 页面 loading 组件事件触发异常的Bug[详情](https://ask.dcloud.net.cn/question/163143)
+  iOS平台 修复 视频播放控件 video 设置 controls 为 false 时全屏状态没有隐藏标题栏的Bug[详情](https://ask.dcloud.net.cn/question/160712)

[和彩云历史版本，提取码: OtZ8](https://caiyun.139.com/m/i?115ConN2dosBl) 

[百度网盘历史版本，提取码: x6cj](https://pan.baidu.com/s/1aPcrevSl2VwVNgwyXMio-w?pwd=x6cj)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
