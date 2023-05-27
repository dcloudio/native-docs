## Android 离线SDK - 正式版

1. **注意：HBuilderX 3.7.6版本开始，微信、支付宝、高德改为线上依赖，涉及到的模块有：微信支付、微信登录、微信分享、支付宝支付、高德地图、高德定位，涉及上述功能的App请参考文档重新集成。**
2. **注意：HBuilderX 3.2.5版本之后适配了AndroidX，升级时需要参考文档重新配置**

### 2023年05月27日发布——HBuilderX（3.8.3.20230526）

[百度云](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

[和彩云](https://caiyun.139.com/m/i?115CnrAnC03Zh)，提取码: NQeS

+ 更新uni-app离线打包支持，需使用HBuilderX（3.8.3.20230526）版本生成本地打包App资源。
+ 修复 uni.onSocketClose 监听 WebSocket 关闭时 code 值为 1001 可能不触发回调的Bug
+ 修复 实人认证 progressBarColor 设置为非法颜色值导致应用重启的Bug
+ 修复 nvue 页面中存在特殊字符可能引起崩溃的Bug
+ 修复 nvue 页面在App悬浮窗口模式下可能渲染异常的Bug
+ 修复 nvue text 组件中特殊字符不显示Bug
+ 修复 反复进入退出App偶发 js 进程崩溃的Bug
+ 修复 nvue 页面 map 组件在特定场景未自动回收销毁可能导致黑屏的Bug
+ 新增 uni-AD 支持 uniMP激励视频广告，提升CPM、提升填充率
+ 新增 一键登录支持 isCenterHint 参数设置未勾选服务条款时点击登录按钮的提示信息是否垂直居中显示
+ 更新 uni-AD SDK，对接618预算，其中优量汇SDK为 4.530.1400 版；快手广告SDK为 3.3.44 版；快手内容联盟SDK为 3.3.42 版；Sigmob广告联盟SDK为 4.12.1 版；百度百青藤广告SDK为 9.29 版
+ 更新 友盟统计SDK为 9.6.1 版，适配华为应用市场审核政策调整
+ 更新 UniPush 使用的个推核心组件SDK为 3.2.4.0 版；个推SDK为 3.2.17.0 版；适配华为应用市场审核政策调整
+ 修复 部分场景下真机运行同步文件失败的Bug
+ 修复 扫码界面拒绝权限提示文字不支持国际化的Bug
+ 修复 安全检测可能报存在数据库注入漏洞的问题
+ 修复 蓝牙设备信息 BluetoothDeviceInfo 的 advertisData 字段可能会丢失数据的Bug
+ 修复 App切换语言后重启可能出现闪屏的Bug
+ 修复 某些情况下可能出现软键盘弹出后立即收起的Bug
+ 修复 plus.navigator.updateSplashscreen 可能不生效的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/1qxxUqh9ifF7mfJ4T46NB4Q)，提取码: xwe9

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CoV3NKJFm7)，提取码: nbFn

[历史更新日志](/AppDocs/download/historyRelease/androidRelease.md)


## Android 离线SDK - Alpha版

### 2023年05月12日发布——HBuilderX（3.8.2.20230511-alpha）

[百度云](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

[和彩云](https://caiyun.139.com/m/i?115CeVcqseFof)，提取码: cUNU

+ 更新uni-app离线打包支持，需使用HBuilderX（3.8.3.20230523-alpha）版本生成本地打包App资源。
+ 更新 uni-AD SDK，对接618预算，其中优量汇SDK为 4.530.1400 版；Sigmob广告联盟SDK为 4.12.1 版；百度百青藤广告SDK为 9.29 版
+ Android平台 更新 友盟统计SDK为 9.6.1 版，适配华为应用市场审核政策调整。**离线打包有变动，详细请参考[文档](/AppDocs/usemodule/androidModuleConfig/statistic.md)**

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CeVcmBz0c3)，提取码: 7VTL

[历史更新日志](/AppDocs/download/historyRelease/androidAlpha.md)
