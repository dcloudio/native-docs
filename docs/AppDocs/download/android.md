## Android 离线SDK - 正式版
## Android Offline SDK - Official Version

1. **注意：HBuilderX 3.7.6版本开始，微信、支付宝、高德改为线上依赖，涉及到的模块有：微信支付、微信登录、微信分享、支付宝支付、高德地图、高德定位，涉及上述功能的App请参考文档重新集成。**
2. **注意：HBuilderX 3.2.5版本之后适配了AndroidX，升级时需要参考文档重新配置**

### 2023年02月24日发布——HBuilderX（3.7.3.20230223）

[百度云](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu
[Baidu Cloud](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ), extraction code: 7rfu

[和彩云](https://caiyun.139.com/m/i?115CeVVDNnuo8)，提取码: yqT5

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.3.20230223）版本生成本地打包App资源。
+ 修复 3.6.17版升级fastjson引出的 uni.sendSocketMessage 无法发送 ArrayBuffer 数据的Bug
+ 修复 nvue 页面 cell 组件高度超过 list 自身高度会频繁触发 loadmore 事件的Bug
+ 修复 nvue 页面 input 组件 placeholder 属性改变后 placeholder-style、placeholder-class 属性失效的Bug
+ 修复 nvue 页面 map 组件的 marker 设置 anchor 时气泡显示异常的Bug
+ 修复 nvue 页面 map 组件更新 marker 时 cover-view 不显示的Bug
+ 修复 uni.getSystemInfo 在部分设备获取 deviedId 值可能相同的Bug
+ 新增 隐私政策提示框支持 backToExit 配置是否响应点击系统返回键退出应用，解决部分应用市场上架审核可能提示系统返回键失灵的问题
+ 更新 uni-AD 腾讯优量汇广告SDK 为 4.500.1370 版；Sigmob广告联盟SDK 为 4.9.0 版
+ 修复 隐私合规检测可能报隐私弹窗中处理超链接的过程中调用到了获取设备sim卡国家信息的api的Bug
+ 修复 图片选择在 Android13 设备提示没有权限的Bug
+ 修复 plus.io.FileReader 的 readAsDataURL 读取数据时未按 slice 分割位置读取的Bug
+ 修复 视频播放控件 VideoPlayer 在视频缓冲时触发 timeupdate 事件的Bug
+ 更新 Paypal SDK 为 0.8.8 版，修复无法正常支付的Bug
+ 修复 3.6.17版引出的 一键登录 全屏模式下配置其他登录按钮可能引起显示异常的Bug
+ 修复 plus.downloader.clear 无法清除持久化存储的下载任务的Bug
+ 修复 使用 UniPush 上架应用市场审核可能报频繁自启动或关联启动第三方App的Bug
+ 修复 真机运行时应用沙盒目录 _doc 中的文件会被清除的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/1qxxUqh9ifF7mfJ4T46NB4Q)，提取码: xwe9
[Baidu network disk download historical version](https://pan.baidu.com/s/1qxxUqh9ifF7mfJ4T46NB4Q), extraction code: xwe9

[和彩云下载历史版本](https://caiyun.139.com/m/i?115ConOP2fLZy)，提取码: Sg1Z
[Hecaiyun download historical version](https://caiyun.139.com/m/i?115ConOP2fLZy), extraction code: Sg1Z

[历史更新日志](/AppDocs/download/historyRelease/androidRelease.md)
[History Update Log](/AppDocs/download/historyRelease/androidRelease.md)


## Android 离线SDK - Alpha版
## Android Offline SDK - Alpha Version

### 2023年02月27日发布——HBuilderX（3.7.6.20230227-alpha）

[百度云](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk
[Baidu Cloud](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg), extraction code: 5vgk

[和彩云](https://caiyun.139.com/m/i?115CoAT1jHOJZ)，提取码: dCMh

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.6.20230227-alpha）版本生成本地打包App资源。
+ 新增 uni实人认证，uni.startFacialRecognitionVerify，姓名身份证和人脸活体比对，金融级安全保障[详情](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
+ 修复 使用安全网络在部分设备可能引起崩溃的Bug
+ 修复 暗黑模式下 tabbar 页面切换可能出现异常的Bug
+ 修复 一键登录 按钮阴影可能显示异常的Bug
+ 修复 3.7.1版引出的 在小米 Android13 设备图片选择功能异常的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp
[Baidu network disk download historical version](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA), extraction code: 6msp

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CoTUvbt4q9)，提取码: FaYg
[He Caiyun downloads historical versions](https://caiyun.139.com/m/i?115CoTUvbt4q9), extraction code: FaYg

[历史更新日志](/AppDocs/download/historyRelease/androidAlpha.md)
[History Update Log](/AppDocs/download/historyRelease/androidAlpha.md)
