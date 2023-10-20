## Android 离线SDK - 正式版

1. **注意：HBuilderX 3.7.6版本开始，微信、支付宝、高德改为线上依赖，涉及到的模块有：微信支付、微信登录、微信分享、支付宝支付、高德地图、高德定位，涉及上述功能的App请参考文档重新集成。**
2. **注意：HBuilderX 3.2.5版本之后适配了AndroidX，升级时需要参考文档重新配置**

### 2023年08月17日发布——HBuilderX（3.8.12.20230817）

[百度云](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

[和彩云](https://caiyun.139.com/m/i?115Cno1RLX28f)，提取码: 7tgK

+ 更新uni-app离线打包支持，需使用HBuilderX（3.8.12.20230817）版本生成本地打包App资源。
+ 修复 UniPush1.0 指定格式透传消息不会创建推送消息的Bug
+ 调整 UTSAndroid.getSystemPermissionDenied 返回值类型为Array
+ 适配 支持 Android14 系统
+ 修复 隐私政策提示框在部分设备横屏状态下按钮显示不全的Bug
+ 修复 扫码界面拒绝权限提示文字默认语言不正确的Bug
+ 修复 通过 scheme 可唤起应用打开外部链接的Bug
+ 修复 双击返回键退出应用后接收不到个推通道的推送消息的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/1qxxUqh9ifF7mfJ4T46NB4Q)，提取码: xwe9

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CoV3NKJFm7)，提取码: nbFn

[历史更新日志](/AppDocs/download/historyRelease/androidRelease.md)


## Android 离线SDK - Alpha版

### 2023年10月20日发布——HBuilderX（3.93.2023101913-alpha）

[百度云](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

[和彩云](https://caiyun.139.com/m/i?115CeVcqseFof)，提取码: cUNU

+ 更新uni-app离线打包支持，需使用HBuilderX（3.93.2023101913-alpha）版本生成本地打包App资源。
+ App-Android平台 修复 console 输出对象信息中包含 private 属性和方法的Bug
+ App-Android平台 修复 number 数据类型在某些情况除法运行结果不正确的Bug
+ 更新 uni-AD SDK，对接双11预算，其中腾讯优量汇SDK为 4.542.1412 版；穿山甲&GroMore SDK 为 5.6.1.6 版；快手广告SDK为 3.3.53.3 版；快手内容联盟SDK 为 3.3.53 版；Sigmob广告联盟SDK为 4.12.7 版；百度百青藤广告SDK为 9.322 版；华为广告SDK为 13.4.66.300 版
+ Android平台 调整 默认支持CPU类型为arm64-v8a，解决在华为新设备（如Mate60、X5）应用启动慢的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html#default)
+ Android平台 修复 上架 OPPO 应用市场可能提示`含数字天堂(dcloud)广告插件`的Bug [详情](https://ask.dcloud.net.cn/question/174958)
+ Android平台 修复 uni-AD 红包广告可能不展示的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CeVcmBz0c3)，提取码: 7VTL

[历史更新日志](/AppDocs/download/historyRelease/androidAlpha.md)
