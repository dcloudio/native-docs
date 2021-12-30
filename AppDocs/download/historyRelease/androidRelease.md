### 2021年12月29日发布——HBuilderX（3.3.4.20211228）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.4.20211228）版本生成本地打包App资源。
+ 修复 nvue input组件 maxlength 属性不生效的Bug
+ 修复 3.3.3 版本引出的 nvue video 组件 cover-view 全屏后排版不正确的Bug
+ 修复 二维码扫码在部分设备可能引起崩溃的Bug

### 2021年12月28日发布——HBuilderX（3.3.3.20211225）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.3.20211225）版本生成本地打包App资源。
+ 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug
+ 修复 uni.getBackgroundAudioManager 触发 seek、pause后再播放 onTimeUpdate 可能不触发的Bug
+ 修复 nvue waterfall/list 组件横竖屏切换导致滚动偏移位置回到顶部的Bug
+ 修复 nvue input/textarea 组件使用中文输入法切换到英文时无法输入的Bug
+ 修复 nvue map 组件调用 addMarkers 设置 clear 参数不生效的Bug
+ 修复 nvue map 组件 marker 中 callout 首次显示位置可能不正确的Bug
+ 修复 3.3.1 版本引出的 input 组件在执行 uni.chooseLocation 返回结果后可能无法获取焦点的Bug
+ 新增 拍照和本地相册选择 crop 裁剪编辑图片支持 saveToAlbum 属性设置是否保存编辑后的图片到相册
+ 新增 系统定位模块，无需商业授权	
+ 优化 定位模块默认使用 wgs84 坐标系，优先使用系统定位
+ 新增 uni-AD 基础开屏广告支持 gif 图
+ 新增 uni-AD 支持设置是否关闭个性化推荐功能
+ 修复 微信分享场景参数 scene 默认值不正确的Bug
+ 新增 支持未同意隐私政策模式，解决应用市场上架合规检测违反“App不得因用户不同意提供非必要个人信息，而拒绝用户使用其基本功能服务”问题
+ 新增 云端打包支持配置 packagingOptions
+ 更新 高德定位SDK为 5.6.1 版，高德地图SDK为 8.1.0 版；UniPush使用的个推SDK为 3.2.5.0 版，个推核心组件SDK为 3.1.6.0 版
+ 优化 录音保存为 mp3 格式的音质
+ 修复 uni-AD 加载激励视频广告可能触发申请访问设备信息、读写手机存储等权限的Bug
+ 修复 uni-AD 开屏广告部分情况下点击事件可能透传的Bug
+ 修复 3.2.13 版本引出的 更新UniPush使用的个推SDK导致出现App相同权限安装失败的Bug
+ 修复 视频播放控件 VideoPlayer 设置 objectFit 可能不生效的Bug
+ 修复 视频播放控件 VideoPlayer 播放部分 rtsp 格式视频时加载进度条展示异常的Bug
+ 修复 直播推流 LivePusher 设置宽高为100%时视频流可能变形的Bug
+ 修复 设置 targetSdkVersion 为 31 时本地相册选择图片压缩失败的Bug
+ 修复 二维码扫码 pdf417 码时竖向无法识别、识别中文字符为乱码的Bug
+ 修复 视频播放控件 VideoPlayer 在 Android8 以下设备动态切换 src 可能会导致黑屏的Bug
+ 修复 爱加密等安全检测平台报StrandHogg漏洞的Bug

### 2021年11月22日发布——HBuilderX（3.2.16.20211122）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.16.20211122）版本生成本地打包App资源。

### 2021年11月22日发布——HBuilderX（3.2.15.20211120）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.15.20211120）版本生成本地打包App资源。
+ 修复 在 Android4.4 设备默认显示为英文的Bug
+ 修复 showTabBarRedDot 设置红点可能不生效的Bug
+ 修复 nvue web-view 组件网络请求与其它网络请求 user-agent 不一致的Bug
+ 修复 nvue list 组件中 cell 过多导致排版错误，可能抛出错误日志或引起崩溃的Bug
+ 修复 nvue map 组件中 Marker 标签 rotate 属性旋转方向不正确的Bug
+ 修复 nvue waterfall 中 cell 组件横竖屏切换后可能出现排版不正常的Bug
+ 修复 subNvue 原生子窗体 style 样式设置 top 属性值后可能出现排版不正确的Bug
+ 修复 上架某些应用市场审核检测可能检测到收集已安装应用列表行为的Bug
+ 修复 uploader 上传文件请求中 user-agent 不正确的Bug
+ 修复 plus.os.language 获取系统语言可能不正确的Bug
+ 修复 部分设备在静止情况下监听获取到的方向数据出现波动的Bug
+ 新增 一键登录 服务协议项样式支持 checkBoxSize 属性设置复选框大小
+ 新增 closePreviewImage 方法关闭预览图片界面
+ 更新 uni-AD 腾讯优量汇SDK为4.422.1292版；快手广告SDK为 3.3.17 版；快手内容联盟SDK为 3.3.23 版；Sigmob广告联盟SDK为 3.5.1 版