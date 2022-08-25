## Android 离线SDK - 正式版

**注意：HBuilderX 3.2.5版本之后适配了AndroidX，升级时需要参考文档重新配置**

### 2022年08月01日发布——HBuilderX（3.5.3.20220729）

[百度云](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

[和彩云](https://caiyun.139.com/m/i?115CnWLjlFIT3)，提取码: cwdB

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.3.20220729）版本生成本地打包App资源。
+ 新增 manifest.json 支持最低要求 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动
+ 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
+ 修复 nvue image 组件在部分设备可能报空指针错误的Bug
+ 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug
+ 新增 激励视频广告支持实时竞价
+ 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
+ 更新 uni-AD 腾讯优量汇SDK为 4.480.1350 版；快手广告SDK为 3.3.27 版；快手内容联盟SDK为 3.3.30 版Sigmob广告联盟SDK为 4.4.0 版；百度百青藤广告SDK为 9.223 版；华为广告SDK为 13.4.54.300 版
+ 优化 uni-AD 激励视频和信息流广告支持并发请求
+ 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification
+ 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题
+ 更新 腾讯X5内核为 4.3.0.299 版
+ 更新 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题
+ 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug
+ 修复 UniPush 存在监听ACTION_BOOT_COMPLETED广播行为，可能违反应用市场上架合规检测问题
+ 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug
+ 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
+ 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
+ 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug
+ 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/1qxxUqh9ifF7mfJ4T46NB4Q)，提取码: xwe9

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CnVMpSbT4f)，提取码: LPf5

[历史更新日志](/AppDocs/download/historyRelease/androidRelease.md)


## Android 离线SDK - Alpha版

### 2022年08月25日发布——HBuilderX（3.5.5.20220825-alpha）

[百度云](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

[和彩云](https://caiyun.139.com/m/i?115CoUGiWdmgb)，提取码: hHAC

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.5.20220825-alpha）版本生成本地打包App资源。
+ 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug
+ 修复 picker 组件获取焦点异常的Bug
+ 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug
+ 更新 QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版
+ 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
+ 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
+ 修复 plus.runtime.install 升级 apk 可能报空指针的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp

[和彩云下载历史版本](https://caiyun.139.com/m/i?115Ceoa47mEyQ)，提取码: 3njF

[历史更新日志](/AppDocs/download/historyRelease/androidAlpha.md)
