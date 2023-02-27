### 2023年02月20日发布——HBuilderX（3.7.2.20230217-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.2.20230217-alpha）版本生成本地打包App资源。
+ 修复 uni.getSystemInfo 在部分设备获取 deviedId 值可能相同的Bug

### 2023年02月13日发布——HBuilderX（3.7.1.20230210-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.1.20230210-alpha）版本生成本地打包App资源。
+ 更新 Paypal SDK 为 0.8.8 版，修复无法正常支付的Bug
+ 修复 3.6.16版引出的 一键登录 全屏模式下配置其他登录按钮可能引起显示异常的Bug
+ 修复 plus.downloader.clear 无法清除持久化存储的下载任务的Bug
+ 修复 使用 UniPush 上架应用市场审核可能报`频繁自启动或关联启动第三方App`的Bug
+ 修复 真机运行时应用沙盒目录 _doc 中的文件会被清除的Bug

### 2023年01月18日发布——HBuilderX（3.7.0.20230118-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.7.0.20230118-alpha）版本生成本地打包App资源。
+ 新增 隐私政策提示框支持 backToExit 配置是否响应点击系统返回键退出应用，解决部分应用市场上架审核可能提示`系统返回键失灵`的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
+ 更新 uni-AD 腾讯优量汇广告SDK 为 4.500.1370 版；Sigmob广告联盟SDK 为 4.9.0 版
+ 修复 3.6.17版引出的 系统导航栏按键颜色与背景颜色相同的Bug
+ 修复 3.6.17版引出的 自定义隐私政策提示框时启动应用可能出现卡死的Bug
+ 修复 隐私合规检测可能报`隐私弹窗中处理超链接的过程中调用到了获取设备sim卡国家信息的api`的Bug
+ 修复 图片选择在 Android13 设备提示没有权限的Bug
+ 修复 plus.io.FileReader 的 readAsDataURL 读取数据时未按 slice 分割位置读取的Bug
+ 修复 视频播放控件 VideoPlayer 在视频缓冲时触发 timeupdate 事件的Bug

### 2023年01月12日发布——HBuilderX（3.6.17.20230111-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.17.20230111-alpha）版本生成本地打包App资源。
+ 修复 3.6.11版引出的 使用 record 模块后 wgt 升级提示没有配置 record 模块的Bug
+ 修复 3.6.16版引出的 部分设备沉浸式状态栏失效的Bug
+ 修复 隐私政策提示框在未适配 disagreeMode 模式情况下仅显示一次的Bug

### 2023年01月10日发布——HBuilderX（3.6.16.20230109-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.16.20230109-alpha）版本生成本地打包App资源。
+ 修复 使用 tabbar 后页面多次跳转可能导致底部系统导航栏颜色变化的bug
+ 修复 nvue 页面 live-pusher 组件拒绝相机权限后再手动开启，回到应用后可能无法调用相机预览的Bug
+ 更新 一键登录使用的个验SDK为 3.1.0.0 版，优化初始化和预登录速度
+ 更新 UniPush 使用的个推核心组件SDK为 3.2.1.0 版；谷歌渠道个推 sdk-for-gj 为 4.4.3.1 版；解决发布到 Google Play 商店可能被下架的问题
+ 修复 3.6.12版引出的 从系统相册中选择文件在部分鸿蒙设备可能引起崩溃的Bug
+ 修复 3.6.7版引出的 一键登录 登录完成后自动关闭登录界面，以及登录按钮 loading 动画效果缺失的Bug
+ 修复 上架应用市场审核可能报频繁自启动或关联启动第三方应用的Bug
+ 修复 设置 targetSdkVersion 值大于或等于 30 时使用高德地图引起应用崩溃的Bug 
+ 修复 连续多次调用 createBLEConnection 连接蓝牙设备，无法连接设备也可能触发成功回调的Bug
+ 修复 上架OPPO应用市场可能提示含数字天堂(dcloud)广告插件的Bug

### 2022年12月19日发布——HBuilderX（3.6.14.20221216-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.14.20221216-alpha）版本生成本地打包App资源。
+ 修复 使用 canvas 模块后 wgt 升级提示没有配置 canvas 模块的Bug

### 2022年12月08日发布——HBuilderX（3.6.12.20221207-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.12.20221207-alpha）版本生成本地打包App资源。

### 2022年12月05日发布——HBuilderX（3.6.11.20221205-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.11.20221205-alpha）版本生成本地打包App资源。
+ 修复 使用 tabbar 后页面多次跳转返回可能引起路由管理异常的Bug
+ 修复 3.6.9 版本引出的 uni.switchTab 在特殊场景可能无法正常切换页面的Bug
+ 更新 UniPush 使用的个推SDK为 3.2.13.0 版，个推核心组件SDK为 3.1.12.0 版；谷歌渠道个推SDK为 4.10.1.0 版；解决隐私合规检测可能报超频采集的问题

### 2022年11月22日发布——HBuilderX（3.6.10.20221121-alpha）

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.10.20221121-alpha）版本生成本地打包App资源。
+ 修复 uni.request 不支持 head 请求的Bug
+ 修复 页面中存在多个 input 组件时获取焦点光标位置可能不正确的Bug
+ 修复 nvue live-pusher 组件在 Android11+ 设备使用移动网络无法预览的Bug
+ 新增 隐私政策提示框支持 showAlways 配置是否每次启动都弹窗提示
+ 修复 监听系统暗黑模式主题切换事件可能无效的Bug
+ 修复 云端打包 使用自有证书可能报 Invalid keystore format 错误的Bug
+ 修复 云端打包 配置应用清单文件 AndroidManifest.xml 的 package 属性值与包名相同时打包失败的Bug

### 2022年11月14日发布——HBuilderX（3.6.9.20221114-alpha）
### Released November 14, 2022 - HBuilderX (3.6.9.20221114-alpha)
 
+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.9.20221114-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.9.20221114-alpha) version to generate local packaged App resources.
+ 修复 radio 组件禁用状态样式异常的Bug
+ Fixed the bug that the style of the disabled radio component was abnormal
+ 新增 nvue 页面 MapContext 支持 setLocMarkerIcon 方法
+ Added nvue page MapContext to support setLocMarkerIcon method
+ 新增 nvue list 组件支持 render-reverse 属性
+ Added nvue list component to support render-reverse property
+ 更新 uni-AD 今日头条穿山甲广告SDK 为 4.9.0.8 版；穿山甲GroMore广告SDK 为 4.8.0.0 版；腾讯优量汇广告SDK 为 4.492.1362 版
+ Updated uni-AD Toutiao Pangolin Advertising SDK to version 4.9.0.8; Pangolin GroMore Advertising SDK to version 4.8.0.0; Tencent Youlianghui Advertising SDK to version 4.492.1362
+ 更新 高德地图SDK为 9.5.0 版，高德定位SDK为 6.1.0 版，解决隐私合规检测可能报高德SDK收取MAC地址、ANDROID ID的问题
+ Update Amap SDK to version 9.5.0, and Amap Positioning SDK to version 6.1.0, to solve the problem that privacy compliance detection may report MAC address and ANDROID ID to Amap SDK
+ 修复 3.6.7版本引出的 应用后台切前台插屏广告可能不显示的Bug
+ Fixed the bug caused by version 3.6.7 that the interstitial advertisements in the background of the application may not be displayed in the foreground
+ 修复 视频播放控件 VideoPlayer 隐私合规检测可能报数字天堂SDK获取传感器的Bug
+ Fixed the bug that the video playback control VideoPlayer privacy compliance detection may report the bug that the Digital Paradise SDK obtains the sensor
+ 修复 原生隐私政策提示框在部分设备 message 内容可能显示不正常的Bug
+ Fix the bug that the message content of the native privacy policy prompt box may display abnormally on some devices

### 2022年10月28日发布——HBuilderX（3.6.8.20221027-alpha）
### Released October 28, 2022 - HBuilderX (3.6.8.20221027-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.8.20221027-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.8.20221027-alpha) version to generate local packaged App resources.
+ 优化 Vue3 项目 minUserAgentVersion 默认配置为 49，避免低版本webview上白屏无提示 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
+ Optimize the default configuration of minUserAgentVersion of Vue3 project to 49, avoiding no prompts on the white screen on the low version webview [Details](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
+ 修复 uni.getStorageSync在某些情况下可能报`SyntaxError`错误的Bug [详情](https://ask.dcloud.net.cn/question/154284)
+ Fix the bug that uni.getStorageSync may report `SyntaxError` in some cases [Details](https://ask.dcloud.net.cn/question/154284)
+ 修复 uts插件不支持泛型通配符语法的Bug [详情](https://ask.dcloud.net.cn/question/155942)
+ Fix the bug that the uts plugin does not support generic wildcard syntax [details](https://ask.dcloud.net.cn/question/155942)
+ 新增 UTS插件 支持application/activity部分生命周期函数 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#iodcloudutsandroid)
+ Added UTS plugin to support some life cycle functions of application/activity [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#iodcloudutsandroid)
+ 修复 chooseVideo 使用相机拍摄视频在Android10及以上设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/155877)
+ Fix the bug that chooseVideo may fail to use the camera to shoot video on Android10 and above devices [Details](https://ask.dcloud.net.cn/question/155877)
+ 修复 chooseImage、chooseVideo 存在读取设备应用安装列表的行为可能导致隐私检测不合规的Bug
+ Fix the bug that the behavior of chooseImage and chooseVideo to read the device application installation list may lead to non-compliance with privacy detection
+ 修复 应用安全检测可能报`app关联启动`的Bug
+ Fix the bug that the application security detection may report `app association startup`
+ 修复 3.6.0版本引出的 首次真机运行隐私政策提示框可能不弹出的Bug
+ Fixed the bug that the privacy policy prompt box might not pop up in the first real machine run caused by version 3.6.0

### 2022年10月18日发布——HBuilderX（3.6.7.20221018-alpha）
### Released October 18, 2022 - HBuilderX (3.6.7.20221018-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.7.20221018-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.7.20221018-alpha) version to generate local packaged App resources.
+ 修复 getSystemInfo 的 deviceId 属性偶尔获取失败和多设备获取重复的Bug（注意此修改造成的向下兼容问题）[详情](https://uniapp.dcloud.net.cn/api/system/info.html)
+ Fixed the occasional failure to obtain the deviceId attribute of getSystemInfo and the repeated bug of obtaining multiple devices (note the backward compatibility problem caused by this modification) [details](https://uniapp.dcloud.net.cn/api/system/info.html )
+ 更新 uni-AD 快手广告SDK Android为3.3.31；快手内容联盟SDK iOS为 3.3.32 版；Sigmob广告联盟SDK Android为 4.7.0 版；百度百青藤广告SDK Android为 9.241 版；华为广告SDK Android为 13.4.56.302 版
+ Update uni-AD Kuaishou Advertising SDK Android to version 3.3.31; Kuaishou Content Alliance SDK iOS to version 3.3.32; Sigmob Advertising Alliance SDK Android to version 4.7.0; Baidu Baiqingteng Advertising SDK Android to version 9.241; Huawei Advertising SDK Android version 13.4.56.302
+ 修复 plus.device.uuid 在高版本Android上不同设备获取的值可能相同的Bug。如之前依赖uuid，需注意处理兼容
+ Fixed the bug that the values of plus.device.uuid might be the same for different devices on higher versions of Android. If you relied on uuid before, you need to pay attention to handling compatibility
+ 新增 plus.device.getDeviceId 获取匿名设备标识 [详情](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getDeviceId)
+ Added plus.device.getDeviceId to get anonymous device ID [Details](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getDeviceId)
+ 新增 模板隐私政策提示框支持配置`游客模式`按钮 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
+ Added template privacy policy prompt box to support configuring `Guest Mode` button [Details](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
+ 更新 Paypal SDK 为 0.6.2 版，解决设置targetSdkVersion为31打包失败的问题 [详情](https://ask.dcloud.net.cn/question/154976)
+ Update the Paypal SDK to version 0.6.2 to solve the problem of package failure when setting targetSdkVersion to 31 [Details](https://ask.dcloud.net.cn/question/154976)
+ 修复 UniPush 异步获取推送标识在部分情况可能返回慢的Bug
+ Fixed the bug that UniPush asynchronously obtains the push ID and may return slowly in some cases
+ 修复 应用设置仅支持竖屏时在部分Android8设备可能引起应用崩溃的Bug
+ Fixed a bug that may cause the app to crash on some Android8 devices when the app setting only supports vertical screen
+ 修复 X5 内核在部分情况无法正确加载的Bug [详情](https://ask.dcloud.net.cn/question/152854)
+ Fixed the bug that the X5 kernel could not be loaded correctly in some cases [Details](https://ask.dcloud.net.cn/question/152854)
+ 修复 直播推流 LivePusher 在部分场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/147593)
+ Fix the bug that LivePusher may cause the application to crash in some scenarios [Details](https://ask.dcloud.net.cn/question/147593)
+ 修复 视频播放控件 VideoPlayer 切换视频资源后静音状态可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153257)
+ Fix the bug that the mute state of the video playback control VideoPlayer may fail after switching video resources [Details](https://ask.dcloud.net.cn/question/153257)
+ 修复 视频播放控件 VideoPlayer 销毁时可能导致卡顿的Bug [详情](https://ask.dcloud.net.cn/question/153483)
+ Fix the bug that may cause freeze when the video playback control VideoPlayer is destroyed [Details](https://ask.dcloud.net.cn/question/153483)
+ 修复 视频播放控件 VideoPlayer 在部分情况下标题栏不显示的Bug
+ Fixed the bug that the video playback control VideoPlayer does not display the title bar in some cases
+ 修复 chooseVideo 选择视频文件在鸿蒙系统可能无法加载缩略图的Bug [详情](https://ask.dcloud.net.cn/question/152527)
+ Fixed the bug that chooseVideo may not be able to load the thumbnail in the Hongmeng system [Details](https://ask.dcloud.net.cn/question/152527)
+ 修复 一键登录 全屏模式设置背景图时沉浸式效果不正确的Bug
+ Fixed the bug that the immersive effect was incorrect when one-key login set the background image in full-screen mode
+ 修复 上架应用市场审核可能报`数字天堂SDK获取传感器的行为`的Bug [详情](https://ask.dcloud.net.cn/question/155043)
+ Fix the bug that the review of the application market on the shelves may report the bug of `Digital Paradise SDK’s behavior of acquiring sensors` [details](https://ask.dcloud.net.cn/question/155043)
+ 修复 本地打包生成的自定义基座可能无法识别安装的Bug
+ Fixed the bug that the custom base generated by local packaging may not be able to recognize the installation
+ 修复 3.6.0版本引出的 在 Android4.4 设备无法正常运行的Bug [详情](https://ask.dcloud.net.cn/question/153910)
+ Fix the bug caused by version 3.6.0 that cannot run normally on Android4.4 devices [Details](https://ask.dcloud.net.cn/question/153910)

### 2022年09月20日发布——HBuilderX（3.6.3.20220919-alpha）
### Released on September 20, 2022 - HBuilderX (3.6.3.20220919-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.3.20220919-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.3.20220919-alpha) version to generate local packaged App resources.

### 2022年09月08日发布——HBuilderX（3.6.1.20220907-alpha）
### Released on September 08, 2022 - HBuilderX (3.6.1.20220907-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.1.20220907-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.1.20220907-alpha) version to generate local packaged App resources.
+ 修复 bindingx 执行 evaluateColor 可能出现异常的Bug
+ Fix the bug that bindingx may have an exception when executing evaluateColor
+ 修复 uni.reLaunch 打开非 tabbar nvue 页面可能依然显示 tabbar 的Bug
+ Fixed the bug that the tabbar may still be displayed when uni.reLaunch opens a non-tabbar nvue page
+ 修复 GooglePlay渠道包无法正常使用高德地图的Bug
+ Fix the bug that the GooglePlay channel package cannot use Gaode map normally
+ 修复 nvue 作为首页使用 picker 可能引起应用无响应的Bug
+ Fix the bug that using picker on nvue as the home page may cause the application to become unresponsive
+ 更新 UniPush使用的个推SDK为 3.2.12.0 版，个推核心组件SDK为 3.1.10.0 版，OPPO厂商推送SDK为 3.1.0 版，华为厂商推送SDK为 6.5.0.300 版； 一键登录使用的个验SDK为 3.0.6.0 版；支付宝SDK为 15.8.11 版；新浪微博SDK为 12.5.0 版；友盟统计SDK为 9.5.2 版；解决提交应用市场可能隐私检测被拒的问题
+ Update the Getui SDK used by UniPush to version 3.2.12.0, the Getui core component SDK to version 3.1.10.0, the OPPO vendor push SDK to version 3.1.0, and the Huawei vendor push SDK to version 6.5.0.300; one-click login used Personal Test SDK is version 3.0.6.0; Alipay SDK is version 15.8.11; Sina Weibo SDK is version 12.5.0; Umeng Statistics SDK is version 9.5.2; solve the problem that the application market may be rejected for privacy testing
+ 修复 getVideoInfo 获取纵向视频文件的宽高值相反的Bug
+ Fix the bug that getVideoInfo gets the opposite width and height values of vertical video files
+ 修复 previewImage 预览图片时可能出现偏移的Bug
+ Fixed the bug that the offset may occur when previewing images in previewImage

### 2022年09月02日发布——HBuilderX（3.6.0.20220901-alpha）
### Released on September 02, 2022 - HBuilderX (3.6.0.20220901-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.0.20220901-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.6.0.20220901-alpha) version to generate local packaged App resources.
+ 新增 云端打包支持配置原生应用清单文件 AndroidManifest.xml 和应用资源目录 res、assets
+ Added support for cloud packaging to configure native application manifest file AndroidManifest.xml and application resource directories res, assets
+ 更新 uni-AD 快手广告SDK Android为 3.3.29 版；快手内容联盟SDK Android为 3.3.31 版
+ Update uni-AD Kuaishou Advertising SDK Android to version 3.3.29; Kuaishou Content Alliance SDK Android to version 3.3.31
+ 修复 uni-AD Sigmob激励视频广告点击跳过按钮后关闭触发 onClose 事件返回的 isEnded 属性值可能不准确的Bug
+ Fixed the bug that the value of the isEnded attribute returned by the onClose event may be inaccurate after the uni-AD Sigmob rewarded video ad is closed after clicking the skip button
+ 修复 腾讯云安全检测可能误报`含数字天堂(dcloud)广告插件,可读取设备信息,可能泄露您的个人隐私`的Bug
+ Fix the bug that Tencent cloud security detection may falsely report `contains digital paradise (dcloud) ad plug-in, which can read device information and may leak your personal privacy`
+ 修复 安全检测可能报快手广告 SDK 频繁获取用户信息的Bug
+ Fix the bug that the security detection may report that the Kuaishou advertising SDK frequently obtains user information

### 2022年08月25日发布——HBuilderX（3.5.5.20220825-alpha）
### Released on August 25, 2022 - HBuilderX (3.5.5.20220825-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.5.20220825-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.5.5.20220825-alpha) version to generate local packaged App resources.
+ 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug
+ Fix the bug that uni.saveImageToPhotosAlbum may overwrite the last saved picture when saving network pictures
+ 修复 picker 组件获取焦点异常的Bug
+ Fix the bug that the picker component gets the focus abnormally
+ 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug
+ Fix the bug that the app may crash if the customCallout setting image of the nvue page map component
+ 更新 QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版
+ Updated QQ login and share SDK version to version 3.5.12; Baidu positioning SDK to version 9.3.5, Baidu map SDK to version 7.5.3
+ 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
+ Fixed the bug that the UniPush 2.0 vendor push channel did not support the payload field being a non-json string
+ 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
+ Fix plus.push.createMessage to create a local message option parameter setting when field is invalid Bug
+ 修复 plus.runtime.install 升级 apk 可能报空指针的Bug
+ Fix the bug that plus.runtime.install may report a null pointer when upgrading the apk

### 2022年08月05日发布——HBuilderX（3.5.4.20220805-alpha）
### Released on August 05, 2022 - HBuilderX (3.5.4.20220805-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.4.20220805-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.5.4.20220805-alpha) version to generate local packaged App resources.
+ 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能
+ Added uni.scanCode autoZoom attribute, which can control whether to enable the automatic zoom function when scanning the code
+ 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug
+ Fixed the bug that the overlapping coordinates of the nvue map component maker point aggregation could not be displayed
+ 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
+ Fix the bug that clearing the data of nvue map components polyline and polygon does not take effect

### 2022年07月28日发布——HBuilderX（3.5.3.20220727-alpha）
### Released on July 28, 2022 - HBuilderX (3.5.3.20220727-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.3.20220727-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.5.3.20220727-alpha) version to generate local packaged App resources.
+ 新增 uni.openAppAuthorizeSetting 跳转系统授权管理页
+ Added uni.openAppAuthorizeSetting to jump to the system authorization management page
+ 更新 uni-AD 腾讯优量汇SDK为 4.480.1350 版
+ Update uni-AD SDK to version 4.480.1350
+ 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题
+ Update the Getui SDK used by UniPush to version 3.2.11.0, the Getui core component SDK to version 3.1.9.0; the Google channel Getui SDK to version 3.2.10.8, and the Getui core component SDK to version 3.1.9.10; solve security detection May report a problem of pushing SDK overclocking to obtain information
+ 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug
+ Fix the bug that there is a behavior of obtaining the task list when the app is running in the background and the review detection of some apps on the shelves may be reported

### 2022年07月20日发布——HBuilderX（3.5.2.20220719-alpha）
### Released on July 20, 2022 - HBuilderX (3.5.2.20220719-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.2.20220719-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.5.2.20220719-alpha) version to generate local packaged App resources.
+ 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug
+ Fixed the bug that the marker bubble callout was not displayed when the nvue map component zoomed in on the map
+ 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
+ Added uni-AD support for pangolin GroMore ads, including opening screen, news feed, interstitial screen, full-screen video, rewarded video ads
+ 更新 uni-AD 腾讯优量汇SDK为 4.472.1342 版；快手广告SDK为 3.3.27 版；快手内容联盟SDK为 3.3.30 版；百度百青藤广告SDK为 9.223 版；Sigmob广告联盟SDK为 4.4.0 版；华为广告SDK为 13.4.54.300 版
+ Update uni-AD Tencent Youlianghui SDK to version 4.472.1342; Kuaishou Advertising SDK to version 3.3.27; Kuaishou Content Alliance SDK to version 3.3.30; Baidu Baiqingteng Advertising SDK to version 9.223; Sigmob Advertising Alliance SDK to version Version 4.4.0; Huawei Advertising SDK is version 13.4.54.300

### 2022年07月08日发布——HBuilderX（3.5.1.20220707-alpha）
### Released on July 08, 2022 - HBuilderX (3.5.1.20220707-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.1.20220707-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.5.1.20220707-alpha) version to generate local packaged App resources.
+ 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
+ Fixed the bug that when the nvue page was the homepage, it was too slow to close the startup interface of some specific mobile phones
+ 修复 nvue image 组件在部分设备可能报空指针错误的Bug
+ Fixed the bug that the nvue image component might report a null pointer error on some devices
+ 优化 uni-AD 激励视频和信息流广告支持并发请求
+ Optimize uni-AD rewarded video and feed ads to support concurrent requests
+ 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification
+ Added Google Pay support for configuring payment gateway information buildTokenizationSpecification
+ 更新 腾讯X5内核为 4.3.0.299 版
+ Update Tencent X5 kernel to version 4.3.0.299
+ 新增 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题
+ Added Facebook login SDK version 12.0.0 to solve the problem of limited login
+ 修复 3.5.0 版本引出的 uni-AD 特定情况可能只展示同一广告源广告的Bug
+ Fixed the bug that only the same ad source ad could be displayed in uni-AD caused by version 3.5.0
+ 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
+ Fixed the bug that the data returned by the server could not be obtained when the uploader upload file request returned an error response code
+ 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug
+ Fixed the bug that the setBadgeNumber badge does not take effect on the new Honor device

### 2022年06月24日发布——HBuilderX（3.5.0.20220623-alpha）
### Released on June 24, 2022 - HBuilderX (3.5.0.20220623-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.0.20220623-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.5.0.20220623-alpha) version to generate local packaged App resources.
+ 新增 manifest.json 支持 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动
+ Added manifest.json to support webview configuration. When the system webview is lower than the specified version, a prompt will pop up or continue to start after downloading the x5 kernel
+ 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug
+ Fixed the bug of getting windowBottom error when Gaussian blur is enabled on the tabbar
+ uni-AD 新增 激励视频广告支持实时竞价
+ uni-AD added rewarded video ads to support real-time bidding
+ 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug
+ Fixed the bug that the startBluetoothDevicesDiscovery search for nearby Bluetooth devices may cause the app to crash on Android12 devices
+ 修复 UniPush 存在监听ACTION_BOOT_COMPLETED广播行为，可能违反应用市场上架合规检测问题
+ Fix the behavior of UniPush listening to the ACTION_BOOT_COMPLETED broadcast, which may violate the compliance detection problem of the application market
+ 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug
+ Fixed the bug that UniPush could not create local notification messages after calling plus.runtime.restart
+ 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
+ Fixed a bug that may cause the app to crash when selecting a large image preview from the local photo album

### 2022年06月15日发布——HBuilderX（3.4.17.20220614-alpha）
### Released on June 15, 2022 - HBuilderX (3.4.17.20220614-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.17.20220614-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.17.20220614-alpha) version to generate local packaged App resources.
+ 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug
+ Fixed the bug that the wrong user-agent of the nvue web-view component caused an abnormal display when loading the H5 page
+ 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug
+ Fix nvue component setting box-shadow and elevation styles at the same time may cause abnormal rendering in some special scenes
+ 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
+ Fixed the bug that the uni-AD opening screen advertisement may be stuck on the startup interface on some Xiaomi phones

### 2022年06月02日发布——HBuilderX（3.4.13.20220601-alpha）
### Released on June 02, 2022 - HBuilderX (3.4.13.20220601-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.13.20220601-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.13.20220601-alpha) version to generate local packaged App resources.
+ 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
+ Fixed the bug that when using Google Maps, the mapContext object calls moveAlong to move the marker during the animation process, and dragging the map will produce a bug
+ 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug
+ Fixed the bug that the hover-class attribute of the nvue view component was invalid when the component size was dynamically changed
+ 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式
+ Added the native privacy policy prompt box to support the hrefLoader attribute, and configure the opening method of clicking the href link in the prompt box
+ 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug
+ Fixed the bug that some download ads of uni-AD Tencent Youlianghui Advertising Alliance could not be installed after the download was successful

### 2022年05月24日发布——HBuilderX（3.4.12.20220523-alpha）
### Released May 24, 2022 - HBuilderX (3.4.12.20220523-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.12.20220523-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.12.20220523-alpha) version to generate local packaged App resources.

### 2022年05月23日发布——HBuilderX（3.4.11.20220520-alpha）
### Released May 23, 2022 - HBuilderX (3.4.11.20220520-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.11.20220520-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.11.20220520-alpha) version to generate local packaged App resources.
+ 更新 uni-AD 今日头条穿山甲SDK Android为 4.5.1.1 版；快手广告SDK Android为 3.3.24 版；百度百青藤广告SDK Android为 9.212 版；Sigmob广告联盟SDK Android为 3.5.9 版
+ Updated uni-AD Toutiao Pangolin SDK Android to version 4.5.1.1; Kuaishou Advertising SDK Android to version 3.3.24; Baidu Baiqingteng Advertising SDK Android to version 9.212; Sigmob Advertising Alliance SDK Android to version 3.5.9

### 2022年05月18日发布——HBuilderX（3.4.10.20220517-alpha）
### Released May 18, 2022 - HBuilderX (3.4.10.20220517-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.10.20220517-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.10.20220517-alpha) version to generate local packaged App resources.
+ 补齐 tabBar 和 navigationBar 支持高斯模糊效果[详情](https://uniapp.dcloud.io/tutorial/app-blureffect.html)
+ Fill tabBar and navigationBar to support Gaussian blur effect [details](https://uniapp.dcloud.io/tutorial/app-blureffect.html)

### 2022年05月09日发布——HBuilderX（3.4.9.20220508-alpha）
### Released on May 09, 2022 - HBuilderX (3.4.9.20220508-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.9.20220508-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.9.20220508-alpha) version to generate local packaged App resources.
+ 修复 音频播放 AudioPlayer 暂停后设置播放倍速大于 0 会自动触发播放的Bug
+ Fixed the bug that after audio playback AudioPlayer is paused, setting the playback speed to be greater than 0 will automatically trigger the playback bug
+ 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
+ Fix the bug that the uni-AD opening screen advertisement may cause the white screen of the application to open Tencent Youlianghui

### 2022年04月28日发布——HBuilderX（3.4.8.20220428-alpha）
### Released on April 28, 2022 - HBuilderX (3.4.8.20220428-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.8.20220428-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.8.20220428-alpha) version to generate local packaged App resources.
+ 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug
+ Fix the bug that the nvue page introduced by version 3.4.6 may appear to flicker on some devices
+ 修复 3.4.6版本 引出的 nvue 页面 boxShadow 在部分情况下可能渲染异常的Bug
+ Fix the bug that the nvue page boxShadow introduced by version 3.4.6 may render abnormally in some cases
+ 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug
+ Fix the bug that bindingx executes the getComputedStyle method to return an exception
+ 更新 uni-AD 腾讯优量汇SDK为 4.462.1332 版；快手广告SDK为 3.3.23 版
+ Update uni-AD SDK to version 4.462.1332; Kuaishou Advertising SDK to version 3.3.23
+ 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug
+ Update the Gaode map SDK to version 9.2.0, and solve the bug that the app crashes when using the map on some devices
+ 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
+ Fixed the bug that the application may crash when uni-AD is packaged and activated offline

### 2022年04月18日发布——HBuilderX（3.4.6.20220416-alpha）
### Released on April 18, 2022 - HBuilderX (3.4.6.20220416-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.6.20220416-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.6.20220416-alpha) version to generate local packaged App resources.
+ 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug
+ Fixed the bug that uni.saveImageToPhotosAlbum might not be able to save to the system album on some phones
+ 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug
+ Fix the bug that uni.getScreenBrightness always returns -1 to get the screen brightness
+ 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件指定元素位置可能无效的Bug
+ Fix the bug that the nvue page calls dom.scrollToElement to scroll to the specified element position of the list component may be invalid bug

### 2022年04月11日发布——HBuilderX（3.4.5.20220408-alpha）
### Released on April 11, 2022 - HBuilderX (3.4.5.20220408-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.5.20220408-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.5.20220408-alpha) version to generate local packaged App resources.
+ 修复 3.4.3版本 引出的 nvue 组件设置 box-shadow 后 border 可能显示异常的Bug
+ Fixed the bug that the border may display abnormally after setting box-shadow in the nvue component introduced in version 3.4.3
+ 修复 3.4.3版本 引出的 tabBar 设置 iconPath 且未设置 selectedIconPath 可能引起图标无法正常显示的Bug
+ Fixed the bug that the iconPath of the tabBar introduced in version 3.4.3 and the selectedIconPath was not set may cause the icon to not be displayed normally
+ 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
+ Fixed the bug that the line break calculation may be incorrect on some devices in the flex layout of the nvue page
+ 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
+ Fixed the bug that the uni-AD Tencent Youlianghui interstitial advertisement may not be displayed properly when the show is executed in the onLoad callback

### 2022年04月06日发布——HBuilderX（3.4.4.20220403-alpha）
### Released on April 06, 2022 - HBuilderX (3.4.4.20220403-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.4.20220403-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.4.20220403-alpha) version to generate local packaged App resources.
+ 修复 nvue list 组件横向滚动不会触发 loadmore 事件的Bug
+ Fixed the bug that the horizontal scrolling of the nvue list component would not trigger the loadmore event
+ 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
+ Fixed the bug that continuous calls to uni.chooseImage may cause the app to crash on some phones
+ 修复 3.4.3 引出的 tabBar 的列表项未设置 iconPath 会导致文字显示不全的Bug
+ Fix the bug that the list item of the tabBar introduced in 3.4.3 does not set the iconPath, which will cause the text to be displayed incompletely
+ 新增 音频播放 AudioPlayer 支持 playbackRate 设置设置倍速播放
+ Added audio playback AudioPlayer supports playbackRate setting to set double speed playback
+ 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
+ Update Amap SDK to version 6.0.1, Amap SDK to version 9.0.1; Getui SDK used by UniPush to version 3.2.9.0, Xiaomi manufacturer push library SDK to version 3.1.1; Google Maps SDK to 18.0 .2 version
+ 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率
+ Optimized to automatically zoom in when a QR code is detected by QR code scanning to improve the recognition rate of scanning codes
+ 修复 uni-AD 今日头条穿山甲广告联盟在部分设备可能提示应用的uni-AD业务状态异常的Bug
+ Fix the bug that uni-AD Jinri Toutiao Pangolin Advertising Alliance may prompt that the application’s uni-AD business status is abnormal on some devices

### 2022年03月28日发布——HBuilderX（3.4.3.20220325-alpha）
### Released March 28, 2022 - HBuilderX (3.4.3.20220325-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.3.20220325-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.3.20220325-alpha) version to generate local packaged App resources.
+ 新增 nvue ad-content-page 组件支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
+ Added nvue ad-content-page component to support content playback state events start, pause, resume, complete [Specification](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F %AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6 )
+ 优化 nvue 组件 box-shadow 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题
+ Optimize the rendering logic of the box-shadow component of the nvue component, and solve the problem of abnormal layout and flickering that may occur on some devices
+ 修复 nvue 组件设置 overflow 为 hidden 在部分设备无效的Bug
+ Fixed the bug that the nvue component setting overflow to hidden was invalid on some devices
+ 修复 nvue swiper 组件设置 circular 为 true 时首次启动可能先显示最后一项的Bug
+ Fix the bug that the last item may be displayed first when the nvue swiper component sets circular to true for the first time
+ 修复 nvue swiper 组件在特定环境下可能出现页面空白的Bug
+ Fix the bug that the nvue swiper component may have a blank page under certain circumstances
+ 新增 百度百青藤广告联盟支持信息流广告
+ Added Baidu Baiqingteng Advertising Alliance to support information flow advertising
+ 更新 uni-AD 百度百青藤广告SDK 为 9.202 版
+ Update uni-AD Baidu Baiqingteng Advertising SDK to version 9.202
+ 修复 在部分设备识别国际化语言不正确的Bug
+ Fix the bug that the internationalized language is incorrectly recognized on some devices

### 2022年03月11日发布——HBuilderX（3.4.2.20220310-alpha）
### Released March 11, 2022 - HBuilderX (3.4.2.20220310-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.2.20220310-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.2.20220310-alpha) version to generate local packaged App resources.
+ 修复 nvue map组件使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug
+ Fix the bug that frequent calls to addMarkers to increase the aggregation point may cause a crash when the nvue map component uses the high-definition map
+ 修复 nvue map组件使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
+ Fix the bug that the moveAlong marker may be offset when the nvue map component uses Google Maps
+ 新增 Google支付支持 isReadyToPay 方法
+ Added Google payment support isReadyToPay method

### 2022年03月08日发布——HBuilderX（3.4.1.20220308-alpha）
### Released on March 08, 2022 - HBuilderX (3.4.1.20220308-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.1.20220308-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.1.20220308-alpha) version to generate local packaged App resources.
+ 3.4.0 引出的 UniPush模块使用 Oppo 厂商通道时云端打包失败的Bug
+ The bug that cloud packaging failed when the UniPush module introduced in 3.4.0 uses the Oppo manufacturer channel

### 2022年03月07日发布——HBuilderX（3.4.0.20220304-alpha）
### Released March 07, 2022 - HBuilderX (3.4.0.20220304-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.0.20220304-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.4.0.20220304-alpha) version to generate local packaged App resources.
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
+ 新增 支持Google地图
+ Added support for Google Maps
+ uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告
+ uni-AD has added Baidu Baiqingteng Advertising Alliance, which supports open screen, interstitial screen, and rewarded video ads
+ 新增 uni-AD 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告
+ Added uni-AD to support HUAWEI Advertising Alliance, including open screen, information flow, interstitial screen, rewarded video ads
+ 优化 应用启动首页可能出现上下抖动的Bug
+ Optimize the bug that the home page of the application may shake up and down when starting the application
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

### 2022年02月23日发布——HBuilderX（3.3.12.20220222-alpha）
### Released on February 23, 2022 - HBuilderX (3.3.12.20220222-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.12.20220222-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.12.20220222-alpha) version to generate local packaged App resources.
+ 更新 uni-AD 腾讯优量汇SDK为 4.450.1320 版；今日头条穿山甲SDK为 4.3.0.1 版；快手广告SDK为 3.3.21 版
+ Update uni-AD SDK to version 4.450.1320; Toutiao Pangolin SDK to version 4.3.0.1; Kuaishou Advertising SDK to version 3.3.21
+ 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug
+ Fix the bug that the one-click login authorization page service agreement custom check box state image setting is incorrect

### 2022年01月15日发布——HBuilderX（3.3.8.20220114-alpha）
### Released on January 15, 2022 - HBuilderX (3.3.8.20220114-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.8.20220114-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.8.20220114-alpha) version to generate local packaged App resources.
+ 修复 3.3.7 版本引出的 nvue list 组件滚动后也会触发 click 事件的Bug
+ Fixed the bug that the nvue list component triggered by the 3.3.7 version will also trigger the click event after scrolling

### 2022年01月12日发布——HBuilderX（3.3.7.20220112-alpha）
### Released on January 12, 2022 - HBuilderX (3.3.7.20220112-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.7.20220112-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.7.20220112-alpha) version to generate local packaged App resources.
+ 修复 nvue list 组件不支持 click 事件的Bug
+ Fix the bug that the nvue list component does not support the click event
+ 修复 nvue input 组件不支持自定义字体的Bug
+ Fix the bug that the nvue input component does not support custom fonts
+ 新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
+ Added Payment module to support Paypal payment, Stripe payment, Google payment [Documentation](https://uniapp.dcloud.io/app-payment)
+ 新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
+ Added Push module to support Google Push Firebase Cloud Push (FCM) [documentation](https://uniapp.dcloud.io/app-push-fcm)
+ 新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
+ Added Statistic module to support Google Statistics [documentation](https://uniapp.dcloud.io/app-statistic-google)
+ 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
+ Added one-click login to support closeIcon property to set custom close button image [documentation](https://uniapp.dcloud.io/univerify)
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
+ 修复 图片选择界面未勾选`原图`时图片方向可能发生变化的Bug
+ Fix the bug that the direction of the picture may change when the "Original Picture" is not checked in the picture selection interface

### 2022年01月04日发布——HBuilderX（3.3.6.20211231-alpha）
### Released on January 04, 2022 - HBuilderX (3.3.6.20211231-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.6.20211231-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.6.20211231-alpha) version to generate local packaged App resources.
+ 修复 nvue input组件 maxlength 属性不生效的Bug
+ Fix the bug that the maxlength attribute of nvue input component does not take effect
+ 修复 3.3.1 版本引出的 nvue video 组件 cover-view 全屏后排版不正确的Bug
+ Fixed the bug that the layout of the nvue video component cover-view was not correct when it was full screen, which was introduced in version 3.3.1
+ 修复 二维码扫码在部分设备可能引起崩溃的Bug
+ Fix the bug that QR code scanning may cause crash on some devices
+ 修复 targetSdkVersion 设置为 31 在 Android 12 设备可能无法安装的Bug
+ Fix the bug that the targetSdkVersion is set to 31 and may not be installed on Android 12 devices

### 2021年12月20日发布——HBuilderX（3.3.2.20211218-alpha）
### Released December 20, 2021 - HBuilderX (3.3.2.20211218-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.2.20211218-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.2.20211218-alpha) version to generate local packaged App resources.
+ 新增 uni-AD 支持设置是否关闭个性化推荐功能
+ Added uni-AD support to set whether to turn off the personalized recommendation function
+ 优化 定位模块默认使用 wgs84 坐标系，优先使用系统定位 
+ Optimization The positioning module uses the wgs84 coordinate system by default, and the system positioning is preferred
+ 修复 uni-AD 开屏广告部分情况下点击事件可能透传的Bug
+ Fixed the bug that the click event may be transparently transmitted in some cases of the uni-AD splash advertisement
+ 修复 爱加密等安全检测平台报StrandHogg漏洞的Bug
+ Fix the bug of StrandHogg vulnerability reported by security detection platforms such as iencryption

### 2021年12月14日发布——HBuilderX（3.3.1.20211214-alpha）
### Released December 14, 2021 - HBuilderX (3.3.1.20211214-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.1.20211214-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.1.20211214-alpha) version to generate local packaged App resources.
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
+ 更新 uni-AD 腾讯优量汇SDK Android为 4.431.1301 版；快手广告SDK Android为 3.3.19 版；快手内容联盟SDK Android为 3.3.25 版；Sigmob广告联盟SDK Android为 3.5.3 版
+ Update uni-AD Tencent Youlianghui SDK Android to version 4.431.1301; Kuaishou Advertising SDK Android to version 3.3.19; Kuaishou Content Alliance SDK Android to version 3.3.25; Sigmob Advertising Alliance SDK Android to version 3.5.3
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

### 2021年12月1日发布——HBuilderX（3.3.0.20211130-alpha）
### Released December 1, 2021 - HBuilderX (3.3.0.20211130-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.0.20211130-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.3.0.20211130-alpha) version to generate local packaged App resources.
+ 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug
+ Fix the bug that the font-size in the placeholder-class style of the nvue input component does not support the rpx unit
+ 拍照和本地相册选择 crop 裁剪编辑图片支持 saveToAlbum 属性设置是否保存编辑后的图片到相册
+ Select crop for taking pictures and local album
+ 新增 系统定位模块，无需商业授权
+ Added system positioning module, no commercial authorization required
+ 更新 uni-AD 快手广告SDK Android为 3.3.18 版；快手内容联盟SDK Android为 3.3.24 版；
+ Update uni-AD Kuaishou Advertising SDK Android to version 3.3.18; Kuaishou Content Alliance SDK Android to version 3.3.24;
+ 修复 微信分享场景参数 scene 默认值不正确的Bug
+ Fixed the bug that the default value of the parameter scene of WeChat sharing scene was incorrect
+ 新增 云端打包支持配置 packagingOptions
+ Added support for cloud packaging to configure packagingOptions
+ 更新 高德定位SDK为 5.6.1 版，高德地图SDK为 8.1.0 版；UniPush使用的个推SDK为 3.2.5.0 版，个推核心组件SDK为 3.1.6.0 版
+ Update Gaode positioning SDK to version 5.6.1, Gaode map SDK to version 8.1.0; Getui SDK used by UniPush to version 3.2.5.0, and Getui core component SDK to version 3.1.6.0
+ 优化 录音保存为 mp3 格式的音质
+ Optimize the sound quality of recordings saved in mp3 format
+ 修复 uni-AD 加载激励视频广告可能触发申请访问设备信息、读写手机存储等权限的Bug
+ Fixed the bug that loading rewarded video ads in uni-AD might trigger the application for permission to access device information, read and write mobile phone storage, etc.
+ 修复 二维码扫码 pdf417 码时竖向无法识别、识别中文字符为乱码的Bug
+ Fix the bug that the vertical direction cannot be recognized when scanning the pdf417 code of the QR code, and the recognized Chinese characters are garbled bugs
+ 修复 视频播放控件 VideoPlayer 在 Android8 以下设备动态切换 src 可能会导致黑屏的Bug
+ Fixed the bug that the video playback control VideoPlayer dynamically switching src on devices below Android8 may cause a black screen

### 2021年11月22日发布——HBuilderX（3.2.15.20211120-alpha）
### Released November 22, 2021 - HBuilderX (3.2.15.20211120-alpha)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.15.20211120-alpha）版本生成本地打包App资源。
+ Updated uni-app offline packaging support, need to use HBuilderX (3.2.15.20211120-alpha) version to generate local packaged App resources.
+ 修复 showTabBarRedDot 设置红点可能不生效的Bug
+ Fixed the bug that the red dot in showTabBarRedDot might not take effect
+ 修复 nvue waterfall 中 cell 组件横竖屏切换后可能出现排版不正常的Bug
+ Fixed the bug that the typesetting may be abnormal after the cell component in nvue waterfall switches between horizontal and vertical screens
+ 修复 上架某些应用市场审核检测可能检测到收集已安装应用列表行为的Bug
+ Fix the bug that the audit detection of some application markets may detect the behavior of collecting the list of installed applications
+ 修复 3.2.13 版本引出的 webview页面作为子窗口时 WebviewStyles 的 top 属性不生效的Bug
+ Fix the bug that the top property of WebviewStyles does not take effect when the webview page introduced in version 3.2.13 is used as a child window