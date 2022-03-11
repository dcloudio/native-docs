### 2022年03月08日发布——HBuilderX（3.4.1.20220308-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.1.20220308-alpha）版本生成本地打包App资源。
+ 3.4.0 引出的 UniPush模块使用 Oppo 厂商通道时云端打包失败的Bug

### 2022年03月07日发布——HBuilderX（3.4.0.20220304-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.0.20220304-alpha）版本生成本地打包App资源。
+ 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug
+ 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug
+ 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug
+ 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug
+ 修复 nvue animation 动画切到后台可能无法执行的Bug
+ 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug
+ 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug
+ 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug
+ 新增 支持Google地图
+ uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告
+ 新增 uni-AD 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告
+ 优化 应用启动首页可能出现上下抖动的Bug
+ 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
+ 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug
+ 修复 视频播放控件 video 边缘可能出现黑线的Bug
+ 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug
+ 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug
+ 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug

### 2022年02月23日发布——HBuilderX（3.3.12.20220222-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.12.20220222-alpha）版本生成本地打包App资源。
+ 更新 uni-AD 腾讯优量汇SDK为 4.450.1320 版；今日头条穿山甲SDK为 4.3.0.1 版；快手广告SDK为 3.3.21 版
+ 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug

### 2022年01月15日发布——HBuilderX（3.3.8.20220114-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.8.20220114-alpha）版本生成本地打包App资源。
+ 修复 3.3.7 版本引出的 nvue list 组件滚动后也会触发 click 事件的Bug

### 2022年01月12日发布——HBuilderX（3.3.7.20220112-alpha）

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

### 2022年01月04日发布——HBuilderX（3.3.6.20211231-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.6.20211231-alpha）版本生成本地打包App资源。
+ 修复 nvue input组件 maxlength 属性不生效的Bug
+ 修复 3.3.1 版本引出的 nvue video 组件 cover-view 全屏后排版不正确的Bug
+ 修复 二维码扫码在部分设备可能引起崩溃的Bug
+ 修复 targetSdkVersion 设置为 31 在 Android 12 设备可能无法安装的Bug

### 2021年12月20日发布——HBuilderX（3.3.2.20211218-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.2.20211218-alpha）版本生成本地打包App资源。
+ 新增 uni-AD 支持设置是否关闭个性化推荐功能
+ 优化 定位模块默认使用 wgs84 坐标系，优先使用系统定位 
+ 修复 uni-AD 开屏广告部分情况下点击事件可能透传的Bug
+ 修复 爱加密等安全检测平台报StrandHogg漏洞的Bug

### 2021年12月14日发布——HBuilderX（3.3.1.20211214-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.1.20211214-alpha）版本生成本地打包App资源。
+ 修复 uni.getBackgroundAudioManager 触发 seek、pause后再播放 onTimeUpdate 可能不触发的Bug
+ 修复 nvue waterfall/list 组件横竖屏切换导致滚动偏移位置回到顶部的Bug
+ 修复 nvue input/textarea 组件使用中文输入法切换到英文时无法输入的Bug 
+ 修复 nvue map 组件调用 addMarkers 设置 clear 参数不生效的Bug
+ 修复 nvue map 组件 marker 中 callout 首次显示位置可能不正确的Bug
+ 更新 uni-AD 腾讯优量汇SDK Android为 4.431.1301 版；快手广告SDK Android为 3.3.19 版；快手内容联盟SDK Android为 3.3.25 版；Sigmob广告联盟SDK Android为 3.5.3 版
+ 修复 3.2.13 版本引出的 更新UniPush使用的个推SDK导致出现App相同权限安装失败的Bug
+ 修复 视频播放控件 VideoPlayer 设置 objectFit 可能不生效的Bug
+ 修复 视频播放控件 VideoPlayer 播放部分 rtsp 格式视频时加载进度条展示异常的Bug
+ 修复 直播推流 LivePusher 设置宽高为100%时视频流可能变形的Bug
+ 修复 设置 targetSdkVersion 为 31 时本地相册选择图片压缩失败的Bug

### 2021年12月1日发布——HBuilderX（3.3.0.20211130-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.0.20211130-alpha）版本生成本地打包App资源。
+ 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug
+ 拍照和本地相册选择 crop 裁剪编辑图片支持 saveToAlbum 属性设置是否保存编辑后的图片到相册
+ 新增 系统定位模块，无需商业授权
+ 更新 uni-AD 快手广告SDK Android为 3.3.18 版；快手内容联盟SDK Android为 3.3.24 版；
+ 修复 微信分享场景参数 scene 默认值不正确的Bug
+ 新增 云端打包支持配置 packagingOptions
+ 更新 高德定位SDK为 5.6.1 版，高德地图SDK为 8.1.0 版；UniPush使用的个推SDK为 3.2.5.0 版，个推核心组件SDK为 3.1.6.0 版
+ 优化 录音保存为 mp3 格式的音质
+ 修复 uni-AD 加载激励视频广告可能触发申请访问设备信息、读写手机存储等权限的Bug
+ 修复 二维码扫码 pdf417 码时竖向无法识别、识别中文字符为乱码的Bug
+ 修复 视频播放控件 VideoPlayer 在 Android8 以下设备动态切换 src 可能会导致黑屏的Bug

### 2021年11月22日发布——HBuilderX（3.2.15.20211120-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.15.20211120-alpha）版本生成本地打包App资源。
+ 修复 showTabBarRedDot 设置红点可能不生效的Bug
+ 修复 nvue waterfall 中 cell 组件横竖屏切换后可能出现排版不正常的Bug
+ 修复 上架某些应用市场审核检测可能检测到收集已安装应用列表行为的Bug
+ 修复 3.2.13 版本引出的 webview页面作为子窗口时 WebviewStyles 的 top 属性不生效的Bug