### 2022年09月19日发布——HBuilderX（3.6.3.20220917）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.3.20220917）版本生成本地打包App资源。

### 2022年09月15日发布——HBuilderX（3.6.2.20220914）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.2.20220914）版本生成本地打包App资源。
+ 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能
+ 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug
+ 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
+ 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug
+ 修复 picker 组件获取焦点异常的Bug
+ 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug
+ 修复 bindingx 执行 evaluateColor 可能出现异常的Bug
+ 修复 uni.reLaunch 打开非 tabbar nvue 页面可能依然显示 tabbar 的Bug
+ 修复 GooglePlay 渠道包无法正常使用高德地图的Bug
+ 修复 nvue 作为首页使用 picker 可能引起应用无响应的Bug
+ 更新 uni-AD 快手广告SDK为 3.3.29 版；快手内容联盟SDK为 3.3.31 版
+ 更新 UniPush使用的个推SDK为 3.2.12.0 版，个推核心组件SDK为 3.1.10.0 版，OPPO厂商推送SDK为 3.1.0 版，华为厂商推送SDK为 6.5.0.300 版； 一键登录使用的个验SDK为 3.0.6.0 版；QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版；支付宝SDK为 15.8.11 版；新浪微博SDK为 12.5.0 版；友盟统计SDK为 9.5.2 版；解决提交应用市场可能隐私检测被拒的问题
+ 修复 getVideoInfo 获取纵向视频文件的宽高值相反的Bug
+ 修复 previewImage 预览图片时可能出现偏移的Bug
+ 修复 uni-AD Sigmob激励视频广告点击跳过按钮后关闭触发 onClose 事件返回的 isEnded 属性值可能不准确的Bug
+ 修复 腾讯云安全检测可能误报`含数字天堂(dcloud)广告插件,可读取设备信息,可能泄露您的个人隐私`的Bug
+ 修复 安全检测可能报快手广告 SDK 频繁获取用户信息的Bug
+ 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
+ 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
+ 修复 plus.runtime.install 升级 apk 可能报空指针的Bug

### 2022年08月01日发布——HBuilderX（3.5.3.20220729）

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

### 2022年07月01日发布——HBuilderX（3.4.18.20220630）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.18.20220630）版本生成本地打包App资源。
+ 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug
+ 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug
+ 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug
+ 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
+ 修复 UniPush 存在监听ACTION_BOOT_COMPLETED广播行为，可能违反应用市场上架合规检测问题

### 2022年06月13日发布——HBuilderX（3.4.15.20220610）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.15.20220610）版本生成本地打包App资源。
+ 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug

### 2022年06月08日发布——HBuilderX（3.4.14.20220607）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.14.20220607）版本生成本地打包App资源。
+ 优化 补齐 tabBar 和 navigationBar 支持高斯模糊效果
+ 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
+ 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug
+ 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug
+ 修复 音频播放 audio 暂停后设置播放倍速大于 0 会自动触发播放的Bug
+ 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式
+ 更新 uni-AD 腾讯优量汇SDK为 4.462.1332 版；今日头条穿山甲SDK为 4.5.1.1 版；快手广告SDK为 3.3.24 版；百度百青藤广告SDK为 9.212 版；Sigmob广告联盟SDK为 3.5.9 版
+ 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
+ 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
+ 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug

### 2022年04月24日发布——HBuilderX（3.4.7.20220422）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.7.20220422）版本生成本地打包App资源。
+ 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug
+ 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug

### 2022年04月20日发布——HBuilderX（3.4.6.20220420）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.6.20220420）版本生成本地打包App资源。
+ 优化 nvue box-shadow 组件 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题
+ 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug
+ 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug
+ 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug
+ 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug
+ 修复 nvue animation 动画切到后台可能无法执行的Bug
+ 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug
+ 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug
+ 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug
+ 修复 nvue map 组件 使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug
+ 修复 nvue map 组件 使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
+ 修复 nvue swiper 组件 设置 circular 为 true 时首次启动可能先显示最后一项的Bug 详情
+ 修复 nvue swiper 组件 在特定环境下可能出现页面空白的Bug
+ 修复 nvue list 组件 横向滚动不会触发 loadmore 事件的Bug
+ 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
+ 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件 指定元素位置可能无效的Bug
+ 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
+ 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug
+ 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug 详情
+ uni-AD 新增 百度百青藤广告联盟 包括开屏、信息流、插屏、激励视频广告
+ uni-AD 新增 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告（仅Android平台）
+ uni-AD 修复 Android平台 穿山甲广告联盟在部分设备可能提示应用的uni-AD业务状态异常的Bug
+ 新增 支持Google地图
+ 新增 音频播放 AudioPlayer 支持 playbackRate 设置倍速播放
+ 新增 Google支付支持 isReadyToPay 方法
+ 更新 UniPush 使用的个推SDK版本为3.2.7.0，个推核心组件SDK版本为3.1.7.0，优化云端打包按需包含厂商通道SDK
+ 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
+ 优化 应用启动首页可能出现上下抖动的Bug
+ 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率
+ 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
+ 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
+ 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug
+ 修复 视频播放控件 video 边缘可能出现黑线的Bug
+ 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug
+ 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug
+ 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug
+ 修复 在部分设备识别国际化语言不正确的Bug

### 2022年03月15日发布——HBuilderX（3.3.13.20220314）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.13.20220314）版本生成本地打包App资源。
+ 修复 vue3 项目 安卓低版本时使用 type=number 的 input 组件输入报错的Bug
+ 更新 uni-AD 腾讯优量汇SDK为 4.450.1320 版；今日头条穿山甲SDK为 4.3.0.1 版；快手广告SDK为 3.3.21 版
+ 更新 UniPush 使用的个推SDK版本为3.2.7.0，个推核心组件SDK版本为3.1.7.0，优化云端打包按需包含厂商通道SDK
+ 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug

### 2022年02月10日发布——HBuilderX（3.3.11.20220209）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.11.20220209）版本生成本地打包App资源。
+ 修复 3.3.10版本引出的 picker 组件样式错误的Bug
+ 修复 3.3.9 版本引出的 一键登录 同时自定义 logo 与 closeIcon 可能导致显示异常的Bug

### 2022年01月25日发布——HBuilderX（3.3.10.20220124）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.10.20220124）版本生成本地打包App资源。

### 2022年01月22日发布——HBuilderX（3.3.9.20220121）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.9.20220121）版本生成本地打包App资源。
+ 修复 nvue input 组件不支持自定义字体的Bug
+ 修复 nvue list 组件不支持 click 事件的Bug
+ 修复 picker 组件选择选项后同页面 input 组件可能无法正常获取焦点的Bug
+ 新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付
+ 新增 Statistic 模块支持 Google统计
+ 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片
+ 更新 uni-AD 快手广告SDK Android为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版
+ 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug
+ 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug
+ 修复 一键登录 在部分 Android 8.0、8.1 设置无法弹出登录框的Bug
+ 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
+ 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug
+ 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug
+ 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug
+ 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug
+ 修复 图片选择界面未勾选原图时图片方向可能发生变化的Bug

### 2021年12月30日发布——HBuilderX（3.3.5.20211229）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.5.20211229）版本生成本地打包App资源。
+ 修复 3.3.3 版本引出的 nvue video 组件全屏后 cover-view 在部分情况下排版不正确的Bug
+ 修复 targetSdkVersion 设置为 31 在 Android 12 设备可能无法安装的Bug

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