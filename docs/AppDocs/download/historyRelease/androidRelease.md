### 2023年05月27日发布——HBuilderX（3.8.3.20230526）

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

### 2023年04月28日发布——HBuilderX（3.7.11.20230427）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.11.20230427）版本生成本地打包App资源。

### 2023年04月26日发布——HBuilderX（3.7.10.20230425）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.10.20230425）版本生成本地打包App资源。

### 2023年03月27日发布——HBuilderX（3.7.9.20230324）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.9.20230324）版本生成本地打包App资源。

### 2023年03月23日发布——HBuilderX（3.7.8.20230323）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.8.20230323）版本生成本地打包App资源。
+ 更新 微信登录、分享、支付 SDK 为 6.8.0 版
+ 修复 使用安全网络在部分设备可能引起崩溃的Bug
+ 修复 nvue 页面 map 组件使用高德地图 marker 被点击时 label 可能被遮挡的Bug
+ 修复 nvue 页面 map 组件使用谷歌地图 marker 的 label 设置锚点时位置会出现偏差的Bug
+ 修复 上架华为应用市场审核误报集成了com.netease(网易;网易IM;网易云信)SDK的bug
+ 修复 plus.io.FileReader 的 readAsDataURL 返回 base64 字符中包含换行符的Bug
+ 修复 暗黑模式下 tabbar 页面切换可能出现异常的Bug
+ 修复 一键登录 按钮阴影可能显示异常的Bug
+ 修复 3.7.3版引出的 在小米 Android13 设备图片选择功能异常的Bug
+ 修复 targetSdkVersion 设置为 33 时在 Android13 设备微信登录、分享不触发回调的Bug

### 2023年02月24日发布——HBuilderX（3.7.3.20230223）

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

### 2023年01月17日发布——HBuilderX（3.6.18.20230117）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.18.20230117）版本生成本地打包App资源。
+ 修复 修复 3.6.17版引出的 系统导航栏按键颜色与背景颜色相同的Bug
+ 修复 修复 3.6.17版引出的 自定义隐私政策提示框时启动应用可能出现卡死的Bug

### 2023年01月12日发布——HBuilderX（3.6.17.20230112）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.17.20230112）版本生成本地打包App资源。
+ 修复 使用 tabbar 后页面多次跳转可能导致底部系统导航栏颜色变化的bug
+ 修复 nvue 页面 live-pusher 组件拒绝相机权限后再手动开启，回到应用后可能无法调用相机预览的Bug


### 2022年12月29日发布——HBuilderX（3.6.15.20221228）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.15.20221228）版本生成本地打包App资源。
+ 修复 3.6.13版引出的 从系统相册中选择文件在部分鸿蒙设备可能引起崩溃的Bug
+ 修复 设置 targetSdkVersion 值大于或等于 30 时使用高德地图引起应用崩溃的Bug

### 2022年12月19日发布——HBuilderX（3.6.14.20221215）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.14.20221215）版本生成本地打包App资源。
+ 修复 使用 canvas 模块后 wgt 升级提示没有配置 canvas 模块的Bug

### 2022年12月12日发布——HBuilderX（3.6.13.20221209）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.13.20221209）版本生成本地打包App资源。
+ 优化 Vue3 项目 minUserAgentVersion 默认配置为 49，避免低版本webview上白屏无提示
+ 修复 3.5.5 版本引出 input 组件自动获取焦点可能失效的Bug
+ 修复 uni.getStorageSync在某些情况下可能报SyntaxError错误的Bug
+ 修复 uni.request 不支持 head 请求的Bug
+ 修复 页面中存在多个 input 组件时获取焦点光标位置可能不正确的Bug
+ 修复 nvue live-pusher 组件在 Android11+ 设备使用移动网络无法预览的Bug
+ 修复 使用 tabbar 后页面多次跳转返回可能引起路由管理异常的Bug
+ 新增 plus.device.getDeviceId 获取匿名设备标识
+ 新增 Stripe支付支持设置账单信息
+ 更新 uni-AD 腾讯优量汇SDK Android为 4.492.1362 版；快手广告SDK Android为3.3.32；快手内容联盟SDK iOS为 3.3.32 版；今日头条穿山甲SDK Android为 4.9.0.8 版；穿山甲GroMore广告SDK Android为 4.8.0.0 版；Sigmob广告联盟SDK Android为 4.7.0 版；百度百青藤广告SDK Android为 9.241 版；华为广告SDK Android为 13.4.56.302 版
+ 新增 支持暗黑模式
+ 新增 隐私政策提示框支持配置游客模式按钮
+ 新增 隐私政策提示框支持 showAlways 配置是否每次启动都弹窗提示
+ 修复 plus.device.uuid 在高版本Android上不同设备获取的值可能相同的Bug。如之前依赖uuid，需注意处理兼容
+ 修复 上架应用市场隐私合规检测可能报数字天堂SDK获取传感器的行为的Bug
+ 修复 应用安全检测可能报app关联启动的Bug
+ 修复 原生隐私政策提示框在部分设备 message 内容可能显示不正常的Bug
+ 修复 3.6.0版本引出的 首次真机运行隐私政策提示框可能不弹出的Bug
+ 修复 应用设置仅支持竖屏时在部分Android8设备可能引起应用崩溃的Bug
+ 修复 X5 内核在部分情况无法正确加载的Bug
+ 修复 直播推流 LivePusher 在部分场景可能引起应用崩溃的Bug
+ 修复 视频播放控件 VideoPlayer 切换视频资源后静音状态可能失效的Bug
+ 修复 视频播放控件 VideoPlayer 销毁时可能导致卡顿的Bug
+ 修复 视频播放控件 VideoPlayer 在部分情况下标题栏不显示的Bug
+ 修复 chooseVideo 选择视频文件在鸿蒙系统可能无法加载缩略图的Bug
+ 修复 chooseVideo 使用相机拍摄视频在Android10及以上设备可能失败的Bug
+ 修复 chooseImage、chooseVideo 存在读取设备应用安装列表的行为可能导致隐私检测不合规的Bug
+ 修复 监听系统暗黑模式主题切换事件可能无效的Bug
+ 修复 云端打包 使用自有证书可能报 Invalid keystore format 错误的Bug
+ 修复 云端打包 配置应用清单文件 AndroidManifest.xml 的 package 属性值与包名相同时打包失败的Bug
+ 修复 一键登录 全屏模式设置背景图时沉浸式效果不正确的Bug
+ 修复 UniPush 异步获取推送标识在部分情况可能返回慢的Bug
+ 更新 UniPush 使用的个推SDK为 3.2.13.0 版，个推核心组件SDK为 3.1.12.0 版；谷歌渠道个推SDK为 4.10.1.0 版；解决隐私合规检测可能报超频采集的问题
+ 更新 Paypal SDK 为 0.6.2 版，解决设置targetSdkVersion为31打包失败的问题
+ 更新 高德地图SDK为 9.5.0 版，高德定位SDK为 6.1.0 版，解决隐私合规检测可能报高德SDK收取MAC地址、ANDROID ID的问题

### 2022年11月22日发布——HBuilderX（3.6.5.20221121）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.5.20221121）版本生成本地打包App资源。
+ 修复 uni.getStorageSync 在某些情况下可能报SyntaxError错误的Bug

### 2022年09月26日发布——HBuilderX（3.6.4.20220922）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.4.20220922）版本生成本地打包App资源。
+ 修复 3.5.5版本引出 input 组件自动获取焦点可能失效的Bug
+ 修复 本地打包生成的自定义基座可能无法识别安装的Bug
+ 修复 3.6.2版本引出的 在 Android4.4 设备无法正常运行的Bug

### 2022年09月19日发布——HBuilderX（3.6.3.20220917）
### Released on September 19, 2022 - HBuilderX (3.6.3.20220917)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.3.20220917）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.3.20220917) version to generate local packaged App resources.

### 2022年09月15日发布——HBuilderX（3.6.2.20220914）
### Released on September 15, 2022 - HBuilderX (3.6.2.20220914)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.2.20220914）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.2.20220914) version to generate local packaged App resources.
+ 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能
+ Added uni.scanCode autoZoom attribute, which can control whether to enable the automatic zoom function when scanning the code
+ 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug
+ Fixed the bug that the overlapping coordinates of the nvue map component maker point aggregation could not be displayed
+ 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
+ Fix the bug that clearing the data of nvue map components polyline and polygon does not take effect
+ 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug
+ Fix the bug that uni.saveImageToPhotosAlbum may overwrite the last saved picture when saving network pictures
+ 修复 picker 组件获取焦点异常的Bug
+ Fix the bug that the picker component gets the focus abnormally
+ 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug
+ Fix the bug that the app may crash if the customCallout setting image of the nvue page map component
+ 修复 bindingx 执行 evaluateColor 可能出现异常的Bug
+ Fix the bug that bindingx may have an exception when executing evaluateColor
+ 修复 uni.reLaunch 打开非 tabbar nvue 页面可能依然显示 tabbar 的Bug
+ Fixed the bug that the tabbar may still be displayed when uni.reLaunch opens a non-tabbar nvue page
+ 修复 GooglePlay 渠道包无法正常使用高德地图的Bug
+ Fixed the bug that the GooglePlay channel pack could not use Gaode map normally
+ 修复 nvue 作为首页使用 picker 可能引起应用无响应的Bug
+ Fix the bug that using picker on nvue as the home page may cause the application to become unresponsive
+ 更新 uni-AD 快手广告SDK为 3.3.29 版；快手内容联盟SDK为 3.3.31 版
+ Update uni-AD Kuaishou Advertising SDK to version 3.3.29; Kuaishou Content Alliance SDK to version 3.3.31
+ 更新 UniPush使用的个推SDK为 3.2.12.0 版，个推核心组件SDK为 3.1.10.0 版，OPPO厂商推送SDK为 3.1.0 版，华为厂商推送SDK为 6.5.0.300 版； 一键登录使用的个验SDK为 3.0.6.0 版；QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版；支付宝SDK为 15.8.11 版；新浪微博SDK为 12.5.0 版；友盟统计SDK为 9.5.2 版；解决提交应用市场可能隐私检测被拒的问题
+ Update the Getui SDK used by UniPush to version 3.2.12.0, the Getui core component SDK to version 3.1.10.0, the OPPO vendor push SDK to version 3.1.0, and the Huawei vendor push SDK to version 6.5.0.300; one-click login used Personal test SDK is version 3.0.6.0; QQ login and share SDK version is 3.5.12; Baidu positioning SDK is version 9.3.5, Baidu map SDK is version 7.5.3; Alipay SDK is version 15.8.11; Sina Weibo The SDK is version 12.5.0; the Youmeng Statistics SDK is version 9.5.2; solve the problem that the privacy detection may be rejected when submitting to the application market
+ 修复 getVideoInfo 获取纵向视频文件的宽高值相反的Bug
+ Fix the bug that getVideoInfo gets the opposite width and height values of vertical video files
+ 修复 previewImage 预览图片时可能出现偏移的Bug
+ Fixed the bug that the offset may occur when previewing images in previewImage
+ 修复 uni-AD Sigmob激励视频广告点击跳过按钮后关闭触发 onClose 事件返回的 isEnded 属性值可能不准确的Bug
+ Fixed the bug that the value of the isEnded attribute returned by the onClose event may be inaccurate after the uni-AD Sigmob rewarded video ad is closed after clicking the skip button
+ 修复 腾讯云安全检测可能误报`含数字天堂(dcloud)广告插件,可读取设备信息,可能泄露您的个人隐私`的Bug
+ Fix the bug that Tencent cloud security detection may falsely report `contains digital paradise (dcloud) ad plug-in, which can read device information and may leak your personal privacy`
+ 修复 安全检测可能报快手广告 SDK 频繁获取用户信息的Bug
+ Fix the bug that the security detection may report that the Kuaishou advertising SDK frequently obtains user information
+ 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
+ Fixed the bug that the UniPush 2.0 vendor push channel did not support the payload field being a non-json string
+ 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
+ Fix plus.push.createMessage to create a local message option parameter setting when field is invalid Bug
+ 修复 plus.runtime.install 升级 apk 可能报空指针的Bug
+ Fix the bug that plus.runtime.install may report a null pointer when upgrading the apk

### 2022年08月01日发布——HBuilderX（3.5.3.20220729）
### Released on August 01, 2022 - HBuilderX (3.5.3.20220729)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.3.20220729）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.5.3.20220729) version to generate local packaged App resources.
+ 新增 manifest.json 支持最低要求 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动
+ Added manifest.json to support the minimum required webview configuration. When the system webview is lower than the specified version, a prompt will pop up or continue to start after downloading the x5 kernel
+ 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
+ Fixed the bug that when the nvue page was the homepage, it was too slow to close the startup interface of some specific mobile phones
+ 修复 nvue image 组件在部分设备可能报空指针错误的Bug
+ Fixed the bug that the nvue image component might report a null pointer error on some devices
+ 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug
+ Fixed the bug that the marker bubble callout was not displayed when the nvue map component zoomed in on the map
+ 新增 激励视频广告支持实时竞价
+ Added support for real-time bidding for rewarded video ads
+ 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
+ Added uni-AD support for pangolin GroMore ads, including opening screen, news feed, interstitial screen, full-screen video, rewarded video ads
+ 更新 uni-AD 腾讯优量汇SDK为 4.480.1350 版；快手广告SDK为 3.3.27 版；快手内容联盟SDK为 3.3.30 版Sigmob广告联盟SDK为 4.4.0 版；百度百青藤广告SDK为 9.223 版；华为广告SDK为 13.4.54.300 版
+ Update uni-AD Tencent Youlianghui SDK to version 4.480.1350; Kuaishou Advertising SDK to version 3.3.27; Kuaishou Content Alliance SDK to version 3.3.30; Sigmob Advertising Alliance SDK to version 4.4.0; Baidu Baiqingteng Advertising SDK Version 9.223; Huawei Advertising SDK version 13.4.54.300
+ 优化 uni-AD 激励视频和信息流广告支持并发请求
+ Optimize uni-AD rewarded video and feed ads to support concurrent requests
+ 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification
+ Added Google Pay support for configuring payment gateway information buildTokenizationSpecification
+ 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题
+ Update the Getui SDK used by UniPush to version 3.2.11.0, the Getui core component SDK to version 3.1.9.0; the Google channel Getui SDK to version 3.2.10.8, and the Getui core component SDK to version 3.1.9.10; solve security detection May report a problem of pushing SDK overclocking to obtain information
+ 更新 腾讯X5内核为 4.3.0.299 版
+ Update Tencent X5 kernel to version 4.3.0.299
+ 更新 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题
+ Update Facebook login SDK to version 12.0.0 to solve the problem of limited login
+ 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug
+ Fixed the bug that the startBluetoothDevicesDiscovery search for nearby Bluetooth devices may cause the app to crash on Android12 devices
+ 修复 UniPush 存在监听ACTION_BOOT_COMPLETED广播行为，可能违反应用市场上架合规检测问题
+ Fix the behavior of UniPush listening to the ACTION_BOOT_COMPLETED broadcast, which may violate the compliance detection problem of the application market
+ 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug
+ Fixed the bug that UniPush could not create local notification messages after calling plus.runtime.restart
+ 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
+ Fixed a bug that may cause the app to crash when selecting a large image preview from the local photo album
+ 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
+ Fixed the bug that the data returned by the server could not be obtained when the uploader upload file request returned an error response code
+ 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug
+ Fixed the bug that the setBadgeNumber badge does not take effect on the new Honor device
+ 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug
+ Fix the bug that there is a behavior of obtaining the task list when the app is running in the background and the review detection of some apps on the shelves may be reported

### 2022年07月01日发布——HBuilderX（3.4.18.20220630）
### Released on July 01, 2022 - HBuilderX (3.4.18.20220630)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.18.20220630）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.18.20220630) version to generate local packaged App resources.
+ 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug
+ Fixed the bug that the wrong user-agent of the nvue web-view component caused an abnormal display when loading the H5 page
+ 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug
+ Fix nvue component setting box-shadow and elevation styles at the same time may cause abnormal rendering in some special scenes
+ 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug
+ Fixed the bug of getting windowBottom error when Gaussian blur is enabled on the tabbar
+ 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
+ Fixed the bug that the uni-AD opening screen advertisement may be stuck on the startup interface on some Xiaomi phones
+ 修复 UniPush 存在监听ACTION_BOOT_COMPLETED广播行为，可能违反应用市场上架合规检测问题
+ Fix the behavior of UniPush listening to the ACTION_BOOT_COMPLETED broadcast, which may violate the compliance detection problem of the application market

### 2022年06月13日发布——HBuilderX（3.4.15.20220610）
### Released on June 13, 2022 - HBuilderX (3.4.15.20220610)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.15.20220610）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.15.20220610) version to generate local packaged App resources.
+ 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
+ Fixed the bug that the uni-AD opening screen advertisement may be stuck on the startup interface on some Xiaomi phones

### 2022年06月08日发布——HBuilderX（3.4.14.20220607）
### Released on June 08, 2022 - HBuilderX (3.4.14.20220607)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.14.20220607）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.14.20220607) version to generate local packaged App resources.
+ 优化 补齐 tabBar 和 navigationBar 支持高斯模糊效果
+ Optimized tabBar and navigationBar to support Gaussian blur effect
+ 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
+ Fixed the bug that when using Google Maps, the mapContext object calls moveAlong to move the marker during the animation process, and dragging the map will produce a bug
+ 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug
+ Fixed the bug that the hover-class attribute of the nvue view component was invalid when the component size was dynamically changed
+ 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug
+ Fix the bug that bindingx executes the getComputedStyle method to return an exception
+ 修复 音频播放 audio 暂停后设置播放倍速大于 0 会自动触发播放的Bug
+ Fix the bug that setting the playback speed greater than 0 will automatically trigger the playback after the audio is paused
+ 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式
+ Added the native privacy policy prompt box to support the hrefLoader attribute, and configure the opening method of clicking the href link in the prompt box
+ 更新 uni-AD 腾讯优量汇SDK为 4.462.1332 版；今日头条穿山甲SDK为 4.5.1.1 版；快手广告SDK为 3.3.24 版；百度百青藤广告SDK为 9.212 版；Sigmob广告联盟SDK为 3.5.9 版
+ Update uni-AD Tencent Youlianghui SDK to version 4.462.1332; Jinri Toutiao Pangolin SDK to version 4.5.1.1; Kuaishou Advertising SDK to version 3.3.24; Baidu Baiqingteng Advertising SDK to version 9.212; Sigmob Advertising Alliance SDK to Version 3.5.9
+ 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
+ Fixed the bug that the application may crash when uni-AD is packaged and activated offline
+ 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
+ Fix the bug that the uni-AD opening screen advertisement may cause the white screen of the application to open Tencent Youlianghui
+ 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug
+ Fixed the bug that some download ads of uni-AD Tencent Youlianghui Advertising Alliance could not be installed after the download was successful

### 2022年04月24日发布——HBuilderX（3.4.7.20220422）
### Released April 24, 2022 - HBuilderX (3.4.7.20220422)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.7.20220422）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.7.20220422) version to generate local packaged App resources.
+ 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug
+ Fix the bug that the nvue page introduced by version 3.4.6 may appear to flicker on some devices
+ 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug
+ Update the Gaode map SDK to version 9.2.0, and solve the bug that the app crashes when using the map on some devices

### 2022年04月20日发布——HBuilderX（3.4.6.20220420）
### Released on April 20, 2022 - HBuilderX (3.4.6.20220420)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.6.20220420）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.6.20220420) version to generate local packaged App resources.
+ 优化 nvue box-shadow 组件 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题
+ Optimize the rendering logic of the nvue box-shadow component, and solve the problem of typography exception and flickering that may occur on some devices
+ 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug
+ Fix the bug that the image may not be displayed when the mode attribute of the nvue image component is set to widthFix/HeightFix
+ 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug
+ Fixed the bug that the nvue list component may cause the page to flicker when inserting list items
+ 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug
+ Fix the bug that the progress color value of nvue web-view component does not support 3-digit hexadecimal format string
+ 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug
+ Fixed the bug that the nvue web-view component could not normally load webpages using untrusted certificates
+ 修复 nvue animation 动画切到后台可能无法执行的Bug
+ Fixed the bug that the nvue animation may not be executed when it is switched to the background
+ 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug
+ Fix the bug that the callouttap event does not respond when the nvue map component marker sets joinCluster to true
+ 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug
+ Fix the bug that the font-style setting of nvue text component may be invalid on some devices
+ 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug
+ Fix nvue page switching may cause plus.key.addEventListener listen keydown event does not trigger the callback bug
+ 修复 nvue map 组件 使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug
+ Fix nvue map component When using Gaode map, frequently calling addMarkers to increase the aggregation point may cause a crash bug
+ 修复 nvue map 组件 使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
+ Fix nvue map component when using Google Maps, calling moveAlong to move the marker may have a bug that may be offset
+ 修复 nvue swiper 组件 设置 circular 为 true 时首次启动可能先显示最后一项的Bug 详情
+ Fix the nvue swiper component. When setting circular to true, the last item may be displayed first at the first startup. Details
+ 修复 nvue swiper 组件 在特定环境下可能出现页面空白的Bug
+ Fix the bug that the nvue swiper component may have a blank page under certain circumstances
+ 修复 nvue list 组件 横向滚动不会触发 loadmore 事件的Bug
+ Fix nvue list component horizontal scrolling will not trigger the bug of loadmore event
+ 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
+ Fixed the bug that the line break calculation may be incorrect on some devices in the flex layout of the nvue page
+ 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件 指定元素位置可能无效的Bug
+ Fix nvue page calling dom.scrollToElement to scroll to the list component, the bug that the specified element position may be invalid
+ 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
+ Fixed the bug that continuous calls to uni.chooseImage may cause the app to crash on some phones
+ 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug
+ Fixed the bug that uni.saveImageToPhotosAlbum might not be able to save to the system album on some phones
+ 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug 详情
+ Fixed the bug that uni.getScreenBrightness always returns -1 when getting the screen brightness. Details
+ uni-AD 新增 百度百青藤广告联盟 包括开屏、信息流、插屏、激励视频广告
+ uni-AD has added Baidu Baiqingteng Advertising Alliance, including open screen, information flow, interstitial screen, rewarded video ads
+ uni-AD 新增 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告（仅Android平台）
+ uni-AD added support for HUAWEI Advertising Alliance, including open screen, information flow, interstitial screen, rewarded video ads (Android platform only)
+ uni-AD 修复 Android平台 穿山甲广告联盟在部分设备可能提示应用的uni-AD业务状态异常的Bug
+ uni-AD repaired the bug that the pangolin advertising alliance on the Android platform may prompt that the application's uni-AD business status is abnormal on some devices
+ 新增 支持Google地图
+ Added support for Google Maps
+ 新增 音频播放 AudioPlayer 支持 playbackRate 设置倍速播放
+ Added audio playback AudioPlayer supports playbackRate setting double speed playback
+ 新增 Google支付支持 isReadyToPay 方法
+ Added Google payment support isReadyToPay method
+ 更新 UniPush 使用的个推SDK版本为3.2.7.0，个推核心组件SDK版本为3.1.7.0，优化云端打包按需包含厂商通道SDK
+ Update the Gotui SDK version used by UniPush to 3.2.7.0, the Gotui core component SDK version to 3.1.7.0, and optimize cloud packaging to include manufacturer channel SDK on demand
+ 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
+ Update Amap SDK to version 6.0.1, Amap SDK to version 9.0.1; Getui SDK used by UniPush to version 3.2.9.0, Xiaomi manufacturer push library SDK to version 3.1.1; Google Maps SDK to 18.0 .2 version
+ 优化 应用启动首页可能出现上下抖动的Bug
+ Optimize the bug that the home page of the application may shake up and down when starting the application
+ 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率
+ Optimized to automatically zoom in when a QR code is detected by QR code scanning to improve the recognition rate of scanning codes
+ 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
+ Fixed the bug that the uni-AD Tencent Youlianghui interstitial advertisement may not be displayed properly when the show is executed in the onLoad callback
+ 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
+ Fixed the bug that calling plus.key.addEventListener to listen to the keyup event with the X5 kernel did not trigger the callback
+ 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug
+ Fixed the bug that plus.navigator.createShortcut could not create desktop shortcut icons on Android8 and above devices
+ 修复 视频播放控件 video 边缘可能出现黑线的Bug
+ Fix the bug that black lines may appear on the edge of the video in the video playback control
+ 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug
+ Fix the bug that calling plus.runtime.restart on some devices may cause the app to crash
+ 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug
+ Fix the bug that the tabbar switch option may not be displayed when the system language is set to Turkish
+ 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug
+ Fix the bug that the local album selection video will still be compressed when compressed is set to false
+ 修复 在部分设备识别国际化语言不正确的Bug
+ Fix the bug that the internationalized language is incorrectly recognized on some devices

### 2022年03月15日发布——HBuilderX（3.3.13.20220314）
### Released on March 15, 2022 - HBuilderX (3.3.13.20220314)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.13.20220314）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.13.20220314) version to generate local packaged App resources.
+ 修复 vue3 项目 安卓低版本时使用 type=number 的 input 组件输入报错的Bug
+ Fixed the bug that the input component with type=number was used to input an error when the Android version of the vue3 project was low
+ 更新 uni-AD 腾讯优量汇SDK为 4.450.1320 版；今日头条穿山甲SDK为 4.3.0.1 版；快手广告SDK为 3.3.21 版
+ Update uni-AD SDK to version 4.450.1320; Toutiao Pangolin SDK to version 4.3.0.1; Kuaishou Advertising SDK to version 3.3.21
+ 更新 UniPush 使用的个推SDK版本为3.2.7.0，个推核心组件SDK版本为3.1.7.0，优化云端打包按需包含厂商通道SDK
+ Update the Gotui SDK version used by UniPush to 3.2.7.0, the Gotui core component SDK version to 3.1.7.0, and optimize cloud packaging to include manufacturer channel SDK on demand
+ 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug
+ Fix the bug that the one-click login authorization page service agreement custom check box state image setting is incorrect

### 2022年02月10日发布——HBuilderX（3.3.11.20220209）
### Released on February 10, 2022 - HBuilderX (3.3.11.20220209)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.11.20220209）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.11.20220209) version to generate local packaged App resources.
+ 修复 3.3.10版本引出的 picker 组件样式错误的Bug
+ Fixed the bug that the style of the picker component caused by version 3.3.10 was wrong
+ 修复 3.3.9 版本引出的 一键登录 同时自定义 logo 与 closeIcon 可能导致显示异常的Bug
+ Fixed the bug that the one-click login introduced in version 3.3.9 may cause abnormal display when customizing the logo and closeIcon at the same time

### 2022年01月25日发布——HBuilderX（3.3.10.20220124）
### Released on January 25, 2022 - HBuilderX (3.3.10.20220124)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.10.20220124）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.10.20220124) version to generate local packaged App resources.

### 2022年01月22日发布——HBuilderX（3.3.9.20220121）
### Released on January 22, 2022 - HBuilderX (3.3.9.20220121)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.9.20220121）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.9.20220121) version to generate local packaged App resources.
+ 修复 nvue input 组件不支持自定义字体的Bug
+ Fix the bug that the nvue input component does not support custom fonts
+ 修复 nvue list 组件不支持 click 事件的Bug
+ Fix the bug that the nvue list component does not support the click event
+ 修复 picker 组件选择选项后同页面 input 组件可能无法正常获取焦点的Bug
+ Fixed the bug that the input component on the same page might not get the focus normally after the picker component selected an option
+ 新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付
+ Added Payment module to support Paypal payment, Stripe payment, Google payment
+ 新增 Statistic 模块支持 Google统计
+ Added Statistic module to support Google Statistics
+ 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片
+ Added one-click login, support closeIcon property setting custom close button picture
+ 更新 uni-AD 快手广告SDK Android为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版
+ Update uni-AD Kuaishou Advertising SDK Android to version 3.3.20; Kuaishou Content Alliance SDK Android to version 3.3.27
+ 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug
+ Fix the bug that the user-agent will be cleared after restarting the application by calling plus.runtime.restart
+ 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug
+ Fix the bug that plus.downloader.enumerate may not get the download task
+ 修复 一键登录 在部分 Android 8.0、8.1 设置无法弹出登录框的Bug
+ Fixed the bug that the one-click login could not pop up the login box in some Android 8.0 and 8.1 settings
+ 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
+ Fixed the bug that one-click login, setting the logo picture on the login interface might not take effect
+ 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug
+ Fixed the bug that the object-fit property of the video playback control VideoPlayer may not take effect
+ 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug
+ Fix the bug that the execution of watchPosition and then getCurrentPosition may fail when using the system positioning module
+ 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug
+ Fix the bug that the Push module createMessage may not be able to create notification bar messages on systems below Android 8
+ 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug
+ Fix the bug that setting the crop attribute on the picture selection interface may cause a black screen crash on some phones and emulators
+ 修复 图片选择界面未勾选原图时图片方向可能发生变化的Bug
+ Fix the bug that the direction of the picture may change when the original picture is not checked in the picture selection interface

### 2021年12月30日发布——HBuilderX（3.3.5.20211229）
### Released December 30, 2021 - HBuilderX (3.3.5.20211229)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.5.20211229）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.5.20211229) version to generate local packaged App resources.
+ 修复 3.3.3 版本引出的 nvue video 组件全屏后 cover-view 在部分情况下排版不正确的Bug
+ Fixed the bug that the cover-view of the nvue video component introduced in version 3.3.3 was incorrectly typeset in some cases after it was full screen
+ 修复 targetSdkVersion 设置为 31 在 Android 12 设备可能无法安装的Bug
+ Fix the bug that the targetSdkVersion is set to 31 and may not be installed on Android 12 devices

### 2021年12月29日发布——HBuilderX（3.3.4.20211228）
### Released December 29, 2021 - HBuilderX (3.3.4.20211228)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.4.20211228）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.4.20211228) version to generate local packaged App resources.
+ 修复 nvue input组件 maxlength 属性不生效的Bug
+ Fix the bug that the maxlength attribute of nvue input component does not take effect
+ 修复 3.3.3 版本引出的 nvue video 组件 cover-view 全屏后排版不正确的Bug
+ Fixed the bug that the layout of the nvue video component cover-view was not correct when it was full screen in version 3.3.3
+ 修复 二维码扫码在部分设备可能引起崩溃的Bug
+ Fix the bug that QR code scanning may cause crash on some devices

### 2021年12月28日发布——HBuilderX（3.3.3.20211225）
### Released December 28, 2021 - HBuilderX (3.3.3.20211225)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.3.20211225）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.3.20211225) version to generate local packaged App resources.
+ 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug
+ Fix the bug that the font-size in the placeholder-class style of the nvue input component does not support the rpx unit
+ 修复 uni.getBackgroundAudioManager 触发 seek、pause后再播放 onTimeUpdate 可能不触发的Bug
+ Fix the bug that uni.getBackgroundAudioManager may not trigger the onTimeUpdate after triggering seek and pause
+ 修复 nvue waterfall/list 组件横竖屏切换导致滚动偏移位置回到顶部的Bug
+ Fix nvue waterfall/list component switching between horizontal and vertical screens causing the scroll offset to return to the top bug
+ 修复 nvue input/textarea 组件使用中文输入法切换到英文时无法输入的Bug
+ Fixed the bug that nvue input/textarea component could not input when switching from Chinese input method to English
+ 修复 nvue map 组件调用 addMarkers 设置 clear 参数不生效的Bug
+ Fix the bug that the nvue map component calls addMarkers to set the clear parameter to not take effect
+ 修复 nvue map 组件 marker 中 callout 首次显示位置可能不正确的Bug
+ Fixed the bug that the first display position of callout in nvue map component marker might be incorrect
+ 修复 3.3.1 版本引出的 input 组件在执行 uni.chooseLocation 返回结果后可能无法获取焦点的Bug
+ Fixed the bug that the input component introduced in version 3.3.1 may not be able to get the focus after executing uni.chooseLocation to return the result
+ 新增 拍照和本地相册选择 crop 裁剪编辑图片支持 saveToAlbum 属性设置是否保存编辑后的图片到相册
+ Added photo and local album selection crop crop edit picture support saveToAlbum attribute setting whether to save the edited picture to the album
+ 新增 系统定位模块，无需商业授权	
+ Added system positioning module, no commercial authorization required
+ 优化 定位模块默认使用 wgs84 坐标系，优先使用系统定位
+ Optimization The positioning module uses the wgs84 coordinate system by default, and the system positioning is preferred
+ 新增 uni-AD 基础开屏广告支持 gif 图
+ Added uni-AD basic splash ads support gif
+ 新增 uni-AD 支持设置是否关闭个性化推荐功能
+ Added uni-AD support to set whether to turn off the personalized recommendation function
+ 修复 微信分享场景参数 scene 默认值不正确的Bug
+ Fixed the bug that the default value of the parameter scene of WeChat sharing scene was incorrect
+ 新增 支持未同意隐私政策模式，解决应用市场上架合规检测违反“App不得因用户不同意提供非必要个人信息，而拒绝用户使用其基本功能服务”问题
+ Added support for not agreeing to the privacy policy mode, which solves the problem of violation of the "app shall not refuse users to use its basic function services because the user does not agree to provide unnecessary personal information" in the compliance detection of the application market
+ 新增 云端打包支持配置 packagingOptions
+ Added support for cloud packaging to configure packagingOptions
+ 更新 高德定位SDK为 5.6.1 版，高德地图SDK为 8.1.0 版；UniPush使用的个推SDK为 3.2.5.0 版，个推核心组件SDK为 3.1.6.0 版
+ Update Gaode positioning SDK to version 5.6.1, Gaode map SDK to version 8.1.0; Getui SDK used by UniPush to version 3.2.5.0, and Getui core component SDK to version 3.1.6.0
+ 优化 录音保存为 mp3 格式的音质
+ Optimize the sound quality of recordings saved in mp3 format
+ 修复 uni-AD 加载激励视频广告可能触发申请访问设备信息、读写手机存储等权限的Bug
+ Fixed the bug that loading rewarded video ads in uni-AD might trigger the application for permission to access device information, read and write mobile phone storage, etc.
+ 修复 uni-AD 开屏广告部分情况下点击事件可能透传的Bug
+ Fixed the bug that the click event may be transparently transmitted in some cases of the uni-AD splash advertisement
+ 修复 3.2.13 版本引出的 更新UniPush使用的个推SDK导致出现App相同权限安装失败的Bug
+ Fixed the bug caused by version 3.2.13 that the update of the push SDK used by UniPush resulted in the failure of the installation of the App with the same permissions
+ 修复 视频播放控件 VideoPlayer 设置 objectFit 可能不生效的Bug
+ Fixed the bug that the video player control VideoPlayer setting objectFit might not take effect
+ 修复 视频播放控件 VideoPlayer 播放部分 rtsp 格式视频时加载进度条展示异常的Bug
+ Fixed the bug that the loading progress bar displayed abnormally when the video player control VideoPlayer played some rtsp format videos
+ 修复 直播推流 LivePusher 设置宽高为100%时视频流可能变形的Bug
+ Fixed the bug that the video stream may be deformed when LivePusher is set to 100% width and height
+ 修复 设置 targetSdkVersion 为 31 时本地相册选择图片压缩失败的Bug
+ Fixed the bug that the image compression failed in local album selection when targetSdkVersion was set to 31
+ 修复 二维码扫码 pdf417 码时竖向无法识别、识别中文字符为乱码的Bug
+ Fix the bug that the vertical direction cannot be recognized when scanning the pdf417 code of the QR code, and the recognized Chinese characters are garbled bugs
+ 修复 视频播放控件 VideoPlayer 在 Android8 以下设备动态切换 src 可能会导致黑屏的Bug
+ Fixed the bug that the video playback control VideoPlayer dynamically switching src on devices below Android8 may cause a black screen
+ 修复 爱加密等安全检测平台报StrandHogg漏洞的Bug
+ Fix the bug of StrandHogg vulnerability reported by security detection platforms such as iencryption

### 2021年11月22日发布——HBuilderX（3.2.16.20211122）
### Released November 22, 2021 - HBuilderX (3.2.16.20211122)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.16.20211122）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.2.16.20211122) version to generate local packaged App resources.

### 2021年11月22日发布——HBuilderX（3.2.15.20211120）
### Released November 22, 2021 - HBuilderX (3.2.15.20211120)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.15.20211120）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.2.15.20211120) version to generate local packaged App resources.
+ 修复 在 Android4.4 设备默认显示为英文的Bug
+ Fixed the bug that the default display in English on Android4.4 devices
+ 修复 showTabBarRedDot 设置红点可能不生效的Bug
+ Fixed the bug that the red dot in showTabBarRedDot might not take effect
+ 修复 nvue web-view 组件网络请求与其它网络请求 user-agent 不一致的Bug
+ Fix the bug that the network request of nvue web-view component is inconsistent with other network request user-agent
+ 修复 nvue list 组件中 cell 过多导致排版错误，可能抛出错误日志或引起崩溃的Bug
+ Fixed the bug that too many cells in the nvue list component caused a typesetting error, which may throw an error log or cause a crash
+ 修复 nvue map 组件中 Marker 标签 rotate 属性旋转方向不正确的Bug
+ Fixed the bug that the rotation direction of the Marker tag's rotate attribute in the nvue map component was incorrect
+ 修复 nvue waterfall 中 cell 组件横竖屏切换后可能出现排版不正常的Bug
+ Fixed the bug that the typesetting may be abnormal after the cell component in nvue waterfall switches between horizontal and vertical screens
+ 修复 subNvue 原生子窗体 style 样式设置 top 属性值后可能出现排版不正确的Bug
+ Fix the bug that the typesetting may be incorrect after setting the top attribute value in the subNvue native sub-form style
+ 修复 上架某些应用市场审核检测可能检测到收集已安装应用列表行为的Bug
+ Fix the bug that the audit detection of some application markets may detect the behavior of collecting the list of installed applications
+ 修复 uploader 上传文件请求中 user-agent 不正确的Bug
+ Fixed the bug that the user-agent in the uploader upload file request was incorrect
+ 修复 plus.os.language 获取系统语言可能不正确的Bug
+ Fix plus.os.language to get the system language may not be correct Bug
+ 修复 部分设备在静止情况下监听获取到的方向数据出现波动的Bug
+ Fix the bug that some devices fluctuate in the direction data obtained by monitoring when they are still
+ 新增 一键登录 服务协议项样式支持 checkBoxSize 属性设置复选框大小
+ Added one-click login service agreement item style supports checkBoxSize attribute to set the size of the check box
+ 新增 closePreviewImage 方法关闭预览图片界面
+ Added closePreviewImage method to close preview image interface
+ 更新 uni-AD 腾讯优量汇SDK为4.422.1292版；快手广告SDK为 3.3.17 版；快手内容联盟SDK为 3.3.23 版；Sigmob广告联盟SDK为 3.5.1 版
+ Update uni-AD Tencent Youlianghui SDK to version 4.422.1292; Kuaishou Advertising SDK to version 3.3.17; Kuaishou Content Alliance SDK to version 3.3.23; Sigmob Advertising Alliance SDK to version 3.5.1