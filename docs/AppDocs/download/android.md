## Android 离线SDK - 正式版

1. **注意：HBuilderX 3.7.6版本开始，微信、支付宝、高德改为线上依赖，涉及到的模块有：微信支付、微信登录、微信分享、支付宝支付、高德地图、高德定位，涉及上述功能的App请参考文档重新集成。**
2. **注意：HBuilderX 3.2.5版本之后适配了AndroidX，升级时需要参考文档重新配置**

### 2023年12月27日发布——HBuilderX（3.99.2023122611）

[百度云](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

[和彩云](https://caiyun.139.com/m/i?115ColSYHmSwb)，提取码: 0E0j

+ 更新uni-app离线打包支持，需使用HBuilderX（3.99.2023122611）版本生成本地打包App资源。
+ 更新 UniPush使用的个推核心组件 SDK 为 3.2.9.0 版，个推 SDK 为 3.3.3.0 版，支持荣耀厂商推送；谷歌渠道个推 SDK 为 4.4.3.6 版，适配Android14
+ 更新 一键登录使用的个验 SDK为 3.1.6.0 版，解决联通运营商一键认证服务主体变更导致新开通应用预登录可能失败的问题

[历史版本](https://pan.baidu.com/s/1nOAuXVH_qp4RHlouPf97fA?pwd=mayf)

[历史更新日志](/AppDocs/download/historyRelease/androidRelease.md)


## Android 离线SDK - Alpha版

### 2024年01月29日发布——HBuilderX（4.0.2024012711-alpha）

[百度云](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

[和彩云](https://caiyun.139.com/m/i?115CeVcqseFof)，提取码: cUNU

+ 更新uni-app离线打包支持，需使用HBuilderX（4.0.2024012711-alpha）版本生成本地打包App资源。
+ 修复 uni.chooseLocation 安装后首次调用无法获取位置列表的Bug
+ 修复 nvue swiper 组件内嵌 swiper 设置 disable-touch 时外层 swiper 无法滑动的Bug
+ 新增 监听权限申请事件，适用于应用商店要求申请权限时弹出用途说明 [详情](https://uniapp.dcloud.net.cn/api/system/create-request-permission-listener)
+ 修复 合规检测可能报`多次重复通过getRunningTasks读取任务列表`的Bug [详情](https://ask.dcloud.net.cn/question/185028)
+ 修复 OPPO应用市场和腾讯管家可能误报`含数字天堂(dcloud)广告插件`的Bug [详情](https://ask.dcloud.net.cn/question/160501)
+ 修复 模块配置中勾选`facialrecognitionverify(实人认证)`后wgt升级提示未配置此模块的Bug [详情](https://ask.dcloud.net.cn/question/184088)
+ 修复 视频播放控件 video 退出全屏后软键盘可能无法弹出的Bug [详情](https://ask.dcloud.net.cn/question/183340)

[历史版本](https://pan.baidu.com/s/1BOzJygO0U39WsydCVMHomA?pwd=98nu)

[历史更新日志](/AppDocs/download/historyRelease/androidAlpha.md)
