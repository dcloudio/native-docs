## Android 离线SDK - 正式版

**注意：HBuilderX 3.2.5版本之后适配了AndroidX，升级时需要参考文档重新配置**

### 2021年12月30日发布——HBuilderX（3.3.5.20211229）

[百度云](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

[和彩云](https://caiyun.139.com/m/i?115CoUfmfTSCc)，提取码: FsMW

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.5.20211229）版本生成本地打包App资源。
+ 修复 3.3.3 版本引出的 nvue video 组件全屏后 cover-view 在部分情况下排版不正确的Bug
+ 修复 targetSdkVersion 设置为 31 在 Android 12 设备可能无法安装的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/1qxxUqh9ifF7mfJ4T46NB4Q)，提取码: xwe9

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CeprQLpymv)，提取码: 7UTt

[历史更新日志](/AppDocs/download/historyRelease/androidRelease.md)


## Android 离线SDK - Alpha版

### 2022年01月12日发布——HBuilderX（3.3.7.20220112-alpha）

[百度云](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

[和彩云](https://caiyun.139.com/m/i?115Coojo644VX)，提取码: GxiT

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.7.20220112-alpha）版本生成本地打包App资源。
+ 修复 nvue list 组件不支持 click 事件的Bug
+ 修复 nvue input 组件不支持自定义字体的Bug
+ 新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
+ 新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
+ 新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
+ 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
+ 更新 uni-AD 快手广告SDK Android为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版
+ 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug
+ 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug
+ 修复 一键登录 在部分 Android 8.0、8.1 设置无法弹出登录框的Bug
+ 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
+ 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug
+ 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug
+ 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug
+ 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug
+ 修复 图片选择界面未勾选`原图`时图片方向可能发生变化的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CnVmQQQRee)，提取码: qCk0

[历史更新日志](/AppDocs/download/historyRelease/androidAlpha.md)
