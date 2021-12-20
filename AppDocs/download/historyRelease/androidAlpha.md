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