## Android 离线SDK - 正式版

### 2020年05月28日发布
[点击下载SDK，提取码: 7rfu](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)

+ 更新uni-app离线打包支持，需使用HBuilderX（2.7.9.20200527）版本生成本地打包App资源。	
+ 修复 HBuilderX2.7.5 引出的 uni.request 网络请求 header 设置参数设置 content-type 无效的Bug
+ 修复 HBuilderX2.7.5 引出的 uni.hideTabBar 隐藏 tabbar 后页面高度可能不正确的Bug
+ 修复 tabbar 页面在部分手机可能高度显示不正确的Bug
+ 修复 nvue textarea 组件获取焦点后在部分手机可能会被软键盘遮挡的Bug
+ 修复 nvue live-pusher 组件调用 pause 方法暂停推流后依然录音的Bug
+ 修复 nvue web-view 组件中 input 标签设置 type 为 file 时无法选择文件的Bug
+ 新增 原生导航标题栏 titleNView 的 titleIconWidth 支持设置标题图标宽度
+ 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持清除按钮
+ 修复 原生导航标题栏 titleNView 的 titleIcon 设置 base64 图标无法支持 gif 格式图片的Bug
+ 更新 uni-AD 腾讯广点通SDK版本为4.211.1081
+ 更新 UniPush 使用的个推SDK版本为4.3.8.0
+ 修复 HBuilderX2.7.5 引出的 5+App云打包 plus.runtime.restart 重启应用后卡在启动页的Bug
+ 修复 软键盘状态变化事件 keyboardchange 监听后回调不触发的Bug
+ 修复 uni-AD 腾讯广点通开屏广告可能拉伸变形显示的Bug
+ 修复 uni-AD 开屏广告在刘海屏手机上跳过按钮可能被遮挡的Bug
+ 修复 视频播放 video 全屏时在刘海屏手机上控制栏可能被遮挡的Bug
+ 修复 页面中 input 标签 type 为 file 点击打开的选择页面不支持国际化的Bug

[百度网盘下载历史版本，提取码: neqx](https://pan.baidu.com/s/1Gpbnq3wLvvnRO6W-SlvVpA)



## Android 离线SDK - Alpha版

### 2020年06月02日发布
[点击下载SDK，提取码: 5vgk](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg)

+ 更新uni-app离线打包支持，需使用HBuilderX（2.7.11.20200602-alpha）版本生成本地打包App资源。	
+ 修复 HBuilderX2.7.8引出的 tabBar 页面无法动态更新原生导航标题栏 titleNView 的Bug
+ 修复 uni.reLaunch 关闭所有页面打开应用内某个页面后，uni.hideTabBar失效的Bug
+ 修复 uni.scanCode 二维码扫描预览界面在横屏状态下变形的Bug
+ 修复 uni.setNavigationBarTitle 可能不生效的Bug
+ 修复 wgt热更新后 uni.navigateTo 可能返回找不到访问页面错误的Bug
+ 修复 nvue video 组件 controls 设置为 false 时 click 事件在非全屏状态下无法触发的Bug
+ 修复 nvue video 组件 seek 后再设置 src 属性会导致进度跳到视频末尾的Bug
+ 修复 nvue livepusher 组件 device-position 属性不生效的Bug
+ 修复 nvue webview 组件加载网页中使用 schemes 跳转就会报错的Bug
+ 新增 UniPush 支持谷歌推送FCM
+ 修复 uni-AD 腾讯广点通信息流广告可能显示不全的Bug
+ 修复 uni-AD 今日头条穿山甲点击广告开始下载后不能暂停或取消的Bug
+ 修复 uni-AD 创建信息流广告控件 createAdView 没有设置 id 时可能导致在当前页面无法再次创建的Bug
+ 修复 软键盘状态变化事件 keyboardchange 监听后回调不触发的Bug

[百度网盘下载历史版本，提取码: 6msp](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)
