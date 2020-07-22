## Android 离线SDK - 正式版

### 2020年06月19日发布
[点击下载SDK，提取码: 7rfu](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)

+ 更新uni-app离线打包支持，需使用HBuilderX（2.7.14.20200618）版本生成本地打包App资源。	
+ 新增 UniPush 支持谷歌推送FCM
+ 修复 uni.reLaunch 关闭所有页面打开应用内某个页面后，uni.hideTabBar失效的Bug
+ 修复 uni.scanCode 二维码扫描预览界面在横屏状态下变形的Bug
+ 修复 uni.setNavigationBarTitle 可能不生效的Bug
+ 修复 wgt热更新后 uni.navigateTo 可能返回找不到访问页面错误的Bug
+ 修复 nvue video 组件 controls 设置为 false 时 click 事件在非全屏状态下无法触发的Bug
+ 修复 nvue video 组件 seek 后再设置 src 属性会导致进度跳到视频末尾的Bug
+ 修复 nvue livepusher 组件 device-position 属性不生效的Bug
+ 修复 nvue webview 组件加载网页中使用 schemes 跳转就会报错的Bug
+ 修复 map 组件可能无法正常显示的Bug
+ 修复 nvue map 组件 markers 上的气泡 callout 会跟随旋转的Bug
+ 修复 nvue web-view 组件中 input 标签设置 type 为 file 时选择拍照后可能无法返回图片路径的Bug
+ 修复 nvue web-view 组件 schemes 无法跳转打开其它应用的Bug
+ 修复 uni-AD 腾讯广点通信息流广告可能显示不全的Bug
+ 修复 uni-AD 今日头条穿山甲点击广告开始下载后不能暂停或取消的Bug
+ 修复 uni-AD 创建信息流广告控件 createAdView 没有设置 id 时可能导致在当前页面无法再次创建的Bug
+ 修复 uni-AD 腾讯广点通开屏广告可能出现填充率过低的Bug
+ 修复 uni-AD 创建多个激励视频广告引起 onLoad onClose onError 事件回调错乱的Bug
+ 修复 软键盘状态变化事件 keyboardchange 监听后回调不触发的Bug
+ 修复 选择按钮框 actionSheet 设置 title 并且 buttons 设置过多可能显示不正常的Bug
+ 修复 原生导航标题栏 titleNView 的 searchInput 搜索框动态更新后可能触发多次输入内容更新事件的Bug
+ 修复 音频 audio 的 seek 操作不触发 seeked 事件的Bug
+ 修复 图片预览 previewImage 无法显示bmp格式图片文件的Bug

[百度网盘下载历史版本，提取码: neqx](https://pan.baidu.com/s/1Gpbnq3wLvvnRO6W-SlvVpA)



## Android 离线SDK - Alpha版

### 2020年07月22日发布
[点击下载SDK，提取码: 5vgk](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg)

+ 更新uni-app离线打包支持，需使用HBuilderX（2.8.1.20200721-alpha）版本生成本地打包App资源。	
+ 修复 部分平板设备 rpx 计算错误的Bug 
+ 修复 系统日期选择框 pickDate 设置默认、最大、最小日期不生效的Bug
+ 修复 2.8.0版引出的 页面切换后 input 组件设置 focus 属性可能无法正常输入的Bug
+ 修复 2.8.0版引出的 uni.request 请求部分网络接口可能失败的Bug
+ 修复 tabBar 页面首次启动可能显示区域不正常的Bug
+ 修复 软键盘弹出时执行 uni.reLaunch 在Android10上会导致应用闪退的Bug
+ 修复 subNvue 原生子窗体动态显示隐藏可能引起 map 组件显示异常的Bug
+ 更新 360广告SDK版本为5.17.3157
+ 修复 视频播放 VideoPlayer 的 src 属性无法切换相同ip不同端口的流媒体链接地址的Bug
+ 修复 消息提示框 toast 在 MIUI12 显示不正常的Bug
+ 修复 Webview窗口的 iframe 中调用请求权限 requestPermissions 报错的Bug
+ 修复 Webview窗口设置 scrollIndicator 属性可能不生效的Bug
+ 修复 连接蓝牙设备 createBLEConnection 设置 timeout 属性无效的Bug
+ 修复 获取蓝牙设备指定服务特征值的 write 属性值可能不正确的Bug

[百度网盘下载历史版本，提取码: 6msp](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)
