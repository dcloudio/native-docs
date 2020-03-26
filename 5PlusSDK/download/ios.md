**注意：本文SDK对应的是HBuilderX的正式版。alpha版的SDK下载地址另见[HTML5+ SDK (alpha版)](https://ask.dcloud.net.cn/article/35968)**

## iOS 平台 HTML5+ SDK 更新日志
#### 2019年12月11日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.4.6.71959_20191210.zip)
> 注意：App端重大架构升级 “v3编译器”，所以离线打包工程中需要引入__uniappes6.js和weex-main-jsfm-uni-v3.js这2个文件，具体看官方的打包演示工程。

1. 更新uni-app离线打包支持，需使用HBuilderX（2.4.6.20191210）版本生成本地打包App资源。
3. 本次发出的新版SDK已经将Release-iphoneos 和 Release-iphonesimulator两个目录下的库文件进行合并。
开发者需要修改 targets->Build Setting->Library Search Paths 目录修改为 $(SRCROOT)/../SDK/libs 解决替换新版本后产生的编译错误。
4. 老版本SDK用户在替换新SDK时还需要检查工程内是否引入了 libcoreSupport.a这个库，如果工程内没有引入会遇到编译错误。
5. 离线打包用户在更新SDK时请注意：在替换最新SDK的静态库文件的同时要替换相同版本的PandoraAPI.bundle文件。


### 历史版本
<details>
<summary>展开查看</summary>

#### 2019年12月10日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.4.5.71912_20191209.zip)
> 注意：App端重大架构升级 “v3编译器”，所以离线打包工程中需要引入__uniappes6.js和weex-main-jsfm-uni-v3.js这2个文件，具体看官方的打包演示工程。

+ 更新uni-app离线打包支持，需使用HBuilderX（2.4.5.20191209）版本生成本地打包App资源。
+ iOS平台 新增 Webview窗口原生标题栏样式属性 blurEffect，支持高斯模糊（毛玻璃）效果 [详情](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
+ iOS平台 补齐 直播推流（LivePusher）控件支持设置最小码率（min-bitrate）和最大码率（max-bitrate）
+ iOS平台 修复 Webview窗口原生标题栏的搜索框（searchInput）获取焦点会导致placeholder文字移位的Bug [详情](https://ask.dcloud.net.cn/question/83027)
+ iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能出现长图片不能滚动的Bug [详情](https://ask.dcloud.net.cn/question/82455)
- iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能无法正常显示部分网络地址图片的Bug [详情](https://ask.dcloud.net.cn/question/83542)
- iOS平台 修复 使用UniPush或个推推送在后台统计数据中没有展示数和点击数的Bug [详情](https://ask.dcloud.net.cn/question/83292)
- iOS平台 修复 用户拒绝访问相机后，调用摄像头拍照或录像时不会触发错误回调的Bug
- iOS平台 修复 配置使用高德或百度地图后，定位默认没有使用gcj02坐标的Bug
- iOS平台 修复 系统日期（plus.nativeUI.pickDate）、时间（plus.nativeUI.pickTime）选择框与系统提示框遮罩颜色不一致的Bug
- iOS平台 修复 苹果应用内支付IAP恢复购买接口（restoreComplateRequest）有可能不会返回恢复购买凭证的Bug
- App-iOS平台 新增 tabbar和navigationBar 支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617)
- App-iOS平台 修复 nvue view 组件设置 border 属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/83206)
- App-iOS平台 修复 iOS 13 系统中 textarea 输入的内容，比 placeholder 偏左一点的Bug [详情](https://ask.dcloud.net.cn/question/83373)
- App-iOS平台 修复 faceID 识别成功时不能正确触发成功回调的Bug [详情](https://ask.dcloud.net.cn/question/83068)
- App-iOS平台 修复 网络请求 uni.request 设置请求的 header 中存在非字符串值可能会引起崩溃的Bug
- App平台 修复 nvue 导航栏 titleNView 的 type 属性设置为 transparent 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/66907)

#### 2019年11月15日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.4.2.71170_20191115.zip)
> 注意：weexUniJs.js和uni-app-service.js这2个文件的路径有变化，需要重新引入自己的工程中，具体看官方的打包demo示例。
 
- 更新uni-app离线打包支持，需使用HBuilderX（2.4.2.20191115）版本生成本地打包App资源。
- iOS平台 修复 Webview窗口使用WKWebview内核时截屏绘制（draw）设置 clip 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/45969)
- iOS平台 修复 Webview窗口全部关闭（close）时可能引起应用崩溃的Bug
- iOS平台 修复 Webview窗口设置自定义标题栏按钮点击时可能引起应用崩溃的Bug
- iOS平台 修复 视频播放（VideoPlayer）控件无法自动识别视频方向的Bug [详情](https://ask.dcloud.net.cn/question/79320)
- iOS平台 修复 调用摄像头拍照（captureImage）时设置resolution参数为high、low、medium时可能引起图片显示方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/80814)
- iOS平台 修复 系统相册选择图片（plus.gallery.pick）可能返回不是选中图片的Bug [详情](https://ask.dcloud.net.cn/question/81055)
- iOS平台 修复 文件下载暂停后再继续文件名后面会自动添加数字的Bug [详情](https://ask.dcloud.net.cn/question/66523)
- iOS平台 修复 平台绝对路径转换成本地URL路径（plus.io.convertAbsoluteFileSystem）可能返回null的Bug [详情](https://ask.dcloud.net.cn/question/51954)
- iOS平台 修复 设置应用屏幕常亮（plus.device.setWakelock）在iOS13.1.3系统可能引起崩溃的Bug
- iOS平台 修复 Native.JS获取当前Webview窗口的原生实例对象（plus.ios.currentWebview）可能返回为空的Bug [详情](https://ask.dcloud.net.cn/question/81037)
- iOS平台 修复 创建本地消息（plus.push.createMessage）在iOS10及以上系统只显示最后一条的Bug [详情](https://ask.dcloud.net.cn/question/82560)
- App-iOS平台 修复 nvue页面在iOS13及以上系统默认字体不对的Bug
- App-iOS平台 修复 nvue list 组件 scroll 事件返回的 isDragging 属性不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/932)
- App-iOS平台 修复 nvue list 组件滚动时 scrollStart/scrollEnd 事件返回参数值为负数的Bug
- App-iOS平台 修复 nvue swiper 组件动态修改 current 属性触发 transition 事件返回的参数不准确的Bug
- App-iOS平台 修复 uni.hideKeyboard 不能收起软键盘的Bug [#903](https://github.com/dcloudio/uni-app/issues/903)
- App-iOS平台 修复 picker 组件可能被软键盘遮挡的Bug [#888](https://github.com/dcloudio/uni-app/issues/888)
- App-iOS平台 修复 input 组件输入中文时失焦导致文字消失的Bug [#888](https://github.com/dcloudio/uni-app/issues/888)
- App-iOS平台 修复 nvue text 组件设置 line-height 属性可能引起显示不正确的Bug
- App-iOS平台 修复 nvue live-pusher 组件设置 whiteness 属性为false不生效的Bug
- App-iOS平台 修复 nvue barcode 组件动态修改属性不生效的Bug
- App-iOS平台 修复 纯nvue项目 侧滑关闭后无法触发上个页面生命周期 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/81830)

#### 2019年10月24日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.3.7.70518_20191024.zip)
> 注意：weexUniJs.js和uni-app-service.js这2个文件的路径有变化，需要重新引入自己的工程中，具体看官方的打包demo示例。

1. 更新uni-app离线打包支持，需使用HBuilderX（2.3.7.20191024）版本生成本地打包App资源。
- iOS平台 修复 图片预览（plus.nativeUI.previewImage）3张图片且current属性设置为2时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/79564)
- App-iOS平台 修复 nvue map组件的标记点（markers）的 iconPath 属性值设置为相对路径时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/79444)

#### 2019年10月21日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.3.6.70402_20191021.zip)
> 注意：weexUniJs.js和uni-app-service.js这2个文件的路径有变化，需要重新引入自己的工程中，具体看官方的打包demo示例。

1. 更新uni-app离线打包支持，需使用HBuilderX（2.3.6.20191021）版本生成本地打包App资源。
- App-iOS平台 修复 tabBar 页面因内存不足而白屏后无法自动恢复的Bug [详情](https://ask.dcloud.net.cn/question/80927)
- App-iOS平台 修复 tabBar 设置 icon 图标可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/80946)
- App-iOS平台 修复 nvue list组件 scroll 事件返回的参数缺少 isDragging 属性的Bug [详情](https://ask.dcloud.net.cn/question/80928)

#### 2019年10月18日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.3.5.70309_20191018.zip)
> 注意：weexUniJs.js和uni-app-service.js这个2个文件的路径有变化，需要重新引入自己的工程中，具体看官方的打包demo示例。

1. 更新uni-app离线打包支持，需使用HBuilderX（2.3.5.20191018）版本生成本地打包App资源。
- iOS平台 更新 微信登录、分享、支付SDK（1.8.6.1），适配iOS13，需要配置通用链接（Universal Links）[详情](https://ask.dcloud.net.cn/article/36445)
- iOS平台 更新 QQ登录、分享SDK（3.3.6），新浪微博登录、分享SDK（3.2.5）
- iOS平台 修复 iOS13上配置后台播放音乐可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/80253)
- iOS平台 修复 图片压缩（plus.zip.compressImage）设置缩放图片的宽度（width）和高度（height）无效的Bug [详情](https://ask.dcloud.net.cn/question/79993)
- iOS平台 修复 iPhone11上查询设备是否为刘海屏（plus.navigator.hasNotchInScreen）返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/80291)
- iOS平台 修复 视频播放（VideoPlayer）控件设置 show-progress 属性不生效的Bug
- iOS平台 修复 视频播放（VideoPlayer）控件设置 autoplay 属性值为 true 后加载雪花可能显示不正常的Bug
- iOS平台 修复 指纹识别（Fingerprint）判断当前设备是否支持（plus.fingerprint.isSupport）返回值可能不正确的Bug
- iOS平台 修复 Webview窗口设置软键盘模式（softinputMode）为adjustResize时，新开页面并弹出软键盘后返回可能白屏的Bug
- iOS平台 修复 数据库（SQLite）多次打开数据库后，调用判断数据库是否打开（plus.sqlite.isOpenDatabase）返回值可能不正确的Bug
- iOS平台 修复 数据库（SQLite）在HX中真机运行可能出现SQL语句操作（plus.sqlite.executeSql）无法正常执行的Bug
- App-iOS平台 新增 nvue live-pusher组件支持 orientation 属性设置画面方向 
- App-iOS平台 修复 nvue map组件的点击控件事件 @controltap 不响应的Bug [详情](https://ask.dcloud.net.cn/question/80170)
- App-iOS平台 修复 nvue barcode组件扫码成功触发 marked 事件返回参数条码数据为空的Bug [详情](https://ask.dcloud.net.cn/question/79475)
- iOS平台 修复 系统相册选择图片文件时如果相册中没有图片返回时loading界面不消失的Bug

#### 2019年09月23日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.3.3.69770_20190923.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（2.3.3.20190923）版本生成本地打包App资源。
- iOS平台 修复 iOS13上保存图片到系统相册（plus.gallery.save）失败的Bug
- iOS平台 修复 非自定义组件编译模式 uni.request 无法跨域的Bug [详情](https://ask.dcloud.net.cn/question/79323)
- iOS平台 修复 nvue swiper组件包含子组件少于3个时布局可能不正确的Bug
- iOS平台 修复 nvue video组件退出全屏动画时被其它组件覆盖的Bug 

#### 2019年09月21日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.3.2.69698_20190921.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（2.3.2.20190921）版本生成本地打包App资源。
- iOS平台 修复 视频播放（VideoPlayer）控件退出全屏后状态栏方向不对的Bug [详情](https://ask.dcloud.net.cn/question/79171)
- iOS平台 修复 iOS13上获取系统状态栏样式（plus.navigator.getStatusBarStyle）总是反馈dark，导致uni-app状态栏颜色混乱的Bug [详情](https://ask.dcloud.net.cn/question/79189)
- iOS平台 修复 iOS13上获取系统状态高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/79219)
- iOS平台 修复 slider组件中的内容可能出现重叠的Bug 
- iOS平台 修复 iOS13上input组件设置自动聚焦无效的Bug
- iOS平台 修复 nvue 组件 refresh 某些情况下闪退的 Bug

#### 2019年09月20日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.3.1.69621_20190920.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（2.3.1.20190920）版本生成本地打包App资源。

#### 2019年09月20日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.3.0.69585_20190919.zip)

1. 重要：因为增加uni的自定义组件，原barcode、video和livepush模块的依赖关系有所变化，具体参看Feature-iOS.xls文件和[livepush](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/35376)**
- 更新uni-app离线打包支持，需使用HBuilderX（2.3.0.20190919）版本生成本地打包App资源。
- iOS平台 新增 云打包支持配置Capabilities，如通用链接（Universal Link）[详情](https://ask.dcloud.net.cn/article/36393)
- iOS平台 新增 创建本地消息（plus.push.createMessage）支持设置标题（title）和副标题（subtitle） [详情](https://ask.dcloud.net.cn/question/78475)
- iOS平台 更新 UniPush&个推推送SDK（2.4.1.0）适配iOS13
- iOS平台 更新 友盟统计SDK（6.0.5）适配iOS13，注意：新版本要求应用使用广告标识IDFA [详情](https://ask.dcloud.net.cn/article/74)
- iOS平台 修复 使用录音对象（AudioRecorder）时如果用户不允许访问麦克风（未授权）不触发失败回调的Bug
- iOS平台 修复 音频播放对象（AudioPlayer）的setStyles方法设置开始播放位置（startTime）不准确，isPaused方法获取播放状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/76201)
- iOS平台 修复 视频播放（VideoPlayer）控件无法播放带身份认证的rtsp地址的Bug [详情](https://ask.dcloud.net.cn/question/76526)
- iOS平台 修复 视频播放（VideoPlayer）控件在iOS13上退出全屏后显示位置不正确的Bug
- iOS平台 修复 蓝牙（Bluetooth）停止搜索设备后再开始可能无法返回之前搜索到的设备，及搜索设置allowDuplicatesKey参数无效的Bug。
- iOS平台 修复 获取网络gif图片信息（plus.io.getImageInfo）引起应用崩溃的Bug
- iOS平台 修复 Webview窗口设置滑屏（drag）后，侧滑返回操作可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77462)
- iOS平台 修复 应用仅配置横屏时调用系统相册选择图片（plus.gallery.pick）时引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77394)
- iOS平台 修复 图片压缩转换（plus.zip.compressImage）处理图片分辨率过高可能造成内存溢出引起应用崩溃的Bug [详情](https://github.com/dcloudio/uni-app/issues/713)
- iOS平台 修复 图片预览（plus.nativeUI.previewImage）显示高分辨率图片可能超出内存溢出引起应用崩溃的Bug
- iOS平台 修复 直播推流（LivePusher）控件配置开启摄像头（enable-camera）属性导致无法推视频流的Bug
- iOS平台 修复 直播推流（LivePusher）控件设置视频模式（mode）属性和宽高比（aspect）属性可能不生效的Bug
- iOS平台 修复 获取图片信息（plus.io.getImageInfo）传入网络图片地址无法下载图片时触发成功回调的Bug
- iOS平台 修复 Webview窗口背景设置为深色时，Tab栏上面会出现白条的Bug [详情](https://ask.dcloud.net.cn/question/77442)
- iOS平台 修复 Webview窗口使用WKWebview内核时overrideUrlLoading方法无效的Bug [详情](https://ask.dcloud.net.cn/question/78173)
- iOS平台 修复 蓝牙（Bluetooth）开始搜索后不停止直接关闭页面可能会引起应用崩溃的Bug
- iOS平台 修复 uni-app中subNVue页面可能无法接收到父页面通过subNVue.postMessage发送的消息的Bug [详情](https://ask.dcloud.net.cn/question/77312)
- iOS平台 修复 nvue iPhoneX设备软键盘弹出时页面偏移位置不准确的Bug [详情](https://ask.dcloud.net.cn/question/76783)
- iOS平台 修复 nvue map组件添加的子组件可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/76719)
- iOS平台 修复 nvue swipe组件高度动态变化后切页显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/77500)
- iOS平台 修复 nvue video标签设置封面图片（poster）后动态修改src属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77353)
- iOS平台 修复 nvue video标签设置自动播放（autoplay）为true不生效的Bug
- iOS平台 修复 nvue video标签中退出全屏后覆盖元素显示不正常的Bug
- iOS平台 修复 nvue input组件设置adjust-position属性值为false无效的Bug [详情](https://ask.dcloud.net.cn/question/78472)
- iOS平台 修复 nvue webSocket模块设置多个协议（protocol）导致连接服务器失败的Bug
- iOS平台 修复 nvue bindingx在uni-app编译模式下拖拽组件时偏移系数不正确的Bug
- iOS平台 修复 uni原生插件实现代理方法（application:openURL:options:）后与第三方应用交互（如调用微信登录）引起应用崩溃的Bug
- iOS平台 修复 uni原生插件实现代理方法（application:handleOpenURL:）不触发，导致无法获取第三方应用返回数据的Bug

#### 2019年08月19日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.2.2.68234_20190816.zip)

1. **重要：因为增加uni的自定义组件，原barcode、video和livepush模块的依赖关系有所变化，具体参看Feature-iOS.xls文件和[livepush](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/35376)**
- 更新uni-app离线打包支持，需使用HBuilderX（2.2.2.20190816）版本生成本地打包App资源。

#### 2019年08月14日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.2.1.68028_20190813.zip)

1. **重要：因为增加uni的自定义组件，原barcode、video和livepush模块的依赖关系有所变化，具体参看Feature-iOS.xls文件和[livepush](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/35376)**
- 更新uni-app离线打包支持，需使用HBuilderX（2.2.1.20190813）版本生成本地打包App资源。
- iOS平台 更新 高德地图SDK：基础SDK（v1.5.7）、3D地图SDK（v6.9.0）、搜索功能（v6.9.0），修复多次打开关闭地图页面引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/66225)
- iOS平台 修复 视频播放（VideoPlayer）控件的timeupdate事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/76470)
- iOS平台 修复 视频播放（VideoPlayer）控件全屏时音量调节手势功能无效的Bug
- iOS平台 修复 Webview窗口配置系统软键盘模式（softinputMode）为adjustResize，收起软键盘后窗口高度无法恢复的Bug [详情](https://ask.dcloud.net.cn/question/76374)
- iOS平台 修复 uni-app项目打包模块配置中勾选“Maps(地图)”但不配置高德或百度地图SDK参数引起提交云端打包失败的Bug

#### 2019年08月12日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.2.0.67934_20190810.zip)

1. **重要：因为增加uni的自定义组件，原barcode、video和livepush模块的依赖关系有所变化，具体参看Feature-iOS.xls文件和[livepush](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/35376)**
- 更新uni-app离线打包支持，需使用HBuilderX（2.2.0.20190810）版本生成本地打包App资源。
- iOS平台 新增 视频播放（VideoPlayer）控件支持设置倍速播放（playbackRate）
- iOS平台 修复 视频播放（VideoPlayer）控件在页面关闭后可能还会在后台重新播放的Bug [详情](https://ask.dcloud.net.cn/question/74022)
- iOS平台 修复 横竖屏设置中landscape-primary、landscape-secondary方向与android平台相反的Bug
- iOS平台 修复 使用plus.maps.create创建地图设置宽高为用百分比时计算不准确的Bug [详情](https://ask.dcloud.net.cn/question/75754)
- iOS平台 修复 蓝牙（Bluetooth）订阅特征值变化（notifyBLECharacteristicValueChange）后触发onBLECharacteristicValueChange事件逻辑不正确的Bug
- iOS平台 修复 蓝牙（Bluetooth）特征值的写（write）属性可能获取不正确的Bug
- iOS平台 修复 蓝牙（Bluetooth）特征值读（readBLECharacteristicValue）或写（writeBLECharacteristicValue）操作可能不触发回调的Bug

#### 2019年07月24日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.1.3.66551_20190723.zip)

1. **重要：因为增加uni的自定义组件，原barcode、video和livepush模块的依赖关系有所变化，具体参看Feature-iOS.xls文件和[livepush](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/35376)**
- 更新uni-app离线打包支持，需使用HBuilderX（2.1.3.20190723）版本生成本地打包App资源。
- iOS平台 修复 UniPush通过苹果APNS通道下发payload为字符串内容时，点击触发click事件中消息对象的payload属性值自动转换为包含无效数据json类型的Bug
- iOS平台 修复 nvue页面中获取渠道标识（plus.runtime.channel）返回值不正确的Bug
- iOS平台 修复 真机运行时偶发页面无法渲染（白屏）的Bug [详情](https://ask.dcloud.net.cn/question/74782)

#### 2019年07月16日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.1.1.66538_20190716.zip)

1. **重要：因为增加uni的自定义组件，原barcode、video和livepush模块的依赖关系有所变化，具体参看Feature-iOS.xls文件和[livepush](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/35376)**
- 更新uni-app离线打包支持，需使用HBuilderX（2.1.1.20190716）版本生成本地打包App资源。
- iOS平台 修复 uni-app使用非自定义组件模式编译可能出现卡在splash界面或崩溃闪退的Bug [详情](https://ask.dcloud.net.cn/question/74644)
- iOS平台 修复 5+应用使用WKWebview在某些情况下可能引起闪退的Bug
- iOS平台 修复 webview的circle样式下拉刷新操作不流畅和显示细节不正确的Bug [详情](https://ask.dcloud.net.cn/question/74717)

#### 2019年07月15日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.1.0.66460_20190713.zip)

1. **重要：因为增加uni的自定义组件，原barcode、video和livepush模块的依赖关系有所变化，具体参看Feature-iOS.xls文件和[livepush](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/35376)**
- 更新uni-app离线打包支持，需使用HBuilderX（2.1.0.20190713）版本生成本地打包App资源。
- iOS平台 修复 提交苹果应用市场（AppStore）审核提示违反Guideline2.5.2的Bug [详情](https://ask.dcloud.net.cn/question/70813)
- iOS平台 修复 音频播放（AudioPlayer）后台播放网络音乐时控制页面（iOS锁屏控制页）进度显示不准确的Bug [详情](https://ask.dcloud.net.cn/question/71891)
- iOS平台 修复 数据库（SQLite）在多个页面同时操作时可能无效的Bug [详情](https://ask.dcloud.net.cn/question/72299)
- iOS平台 修复 Webview窗口设置不替换H5标准定位接口（replacewebapi：{geolocation:'none'}）不生效的Bug
- iOS平台 修复 日期选择（plus.nativeUI.pickDate）设置显示日期小于起始日期时默认返回的日期不正确的Bug [详情](https://ask.dcloud.net.cn/question/71886)
- iOS平台 修复 获取图片信息（plus.io.getImageInfo）可能不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/71511)
- iOS平台 修复 非自定义组件模式在某些情况子窗口高度计算不正确的Bug [详情](https://ask.dcloud.net.cn/question/72889)
- iOS平台 修复 视频控件（VideoPlayer）播放时拖放调整进度后可能不触发播放结束事件的Bug
- iOS平台 修复 子Webview窗口中软键盘收起后页面无法自动恢复的Bug [详情](https://ask.dcloud.net.cn/question/74321)
- iOS平台 修复 蓝牙（Bluetooth）第一次获取本机蓝牙适配器状态（getBluetoothAdapterState）不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/73242)
- iOS平台 修复 蓝牙（Bluetooth）特征值的write操作类型值为false时无法写入数据的Bug [详情](https://ask.dcloud.net.cn/question/69458)
- iOS平台 修复 蓝牙（Bluetooth）特征值的notify操作类型值为true时无法订阅的Bug [详情](https://ask.dcloud.net.cn/question/72063)
- iOS平台 修复 nvue页面打开vue页面后弹出软键盘时可能会露出之前nvue页面内容的Bug
- iOS平台 修复 nvue页面中img标签src属性不支持"_doc"等开头的图片地址的Bug [详情](https://ask.dcloud.net.cn/question/64986)
- iOS平台 修复 地图控件中的标点对象（marker）在新开页面后再返回时点击报js错误的bug [详情](https://ask.dcloud.net.cn/question/74517)
- iOS平台 修复 nvue页面中获取渠道标识（plus.runtime.channel）返回值不正确的Bug

#### 2019年06月14日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.0.1.64837_20190614.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（2.0.1.20190614）版本生成本地打包App资源。

#### 2019年06月11日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@2.0.0.64577_20190610.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（2.0.0.20190610）版本生成本地打包App资源。
+ iOS平台 修复 提交苹果应用市场（AppStore）审核提示违反Guideline2.5.2的Bug [详情](https://ask.dcloud.net.cn/question/70813)
+ iOS平台 修复 音频播放（AudioPlayer）后台播放网络音乐时控制页面（iOS锁屏控制页）进度显示不准确的Bug [详情](https://ask.dcloud.net.cn/question/71891)
+ iOS平台 修复 日期选择对话框（plus.nativeUI.pickDate）返回日期可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/71886)
+ iOS平台 修复 Webview窗口移除原生控件（plus.nativeObj.View）不生效的Bug
+ iOS平台 修复 Webview窗口获取样式（getStyle）返回的json对象键名称全部为小写的Bug

#### 2019年05月23日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.63617_20190522.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.9.20190522）版本生成本地打包App资源。
+ iOS平台 修复 HBuilderX1.9.8版本引出的网络请求url编码的地址包含#等锚点时可能获取不到数据的Bug。
+ iOS平台 修复 自定义组件模式下调用地图控件对象的resize方法会引起程序崩溃的Bug。
+ 注意离线打包时如果弹出提示框且内容为：“HTML5+ Rumtime D”时，需要在打包的原生工程里配置国际化[如何配置]( https://ask.dcloud.net.cn/article/35963)  

#### 2019年05月19日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.63387_20190519.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.8.20190518）版本生成本地打包App资源。
- iOS平台 修复 Webview窗口打开页面地址中包含表情字符串时可能引起崩溃的问题

#### 2019年05月18日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.63312_20190517.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.7.20190517）版本生成本地打包App资源。
- iOS平台 修复 uni-app中设置nvue页面为首页时要6s才能进入应用的Bug
- iOS平台 修复 Webview窗口的下拉刷新雪花可能会被系统状态栏覆盖的Bug
- iOS平台 修复 通过setstyle重设searchInput的placehold时，会把其他参数覆盖的Bug
- iOS平台 修复 真机运行wap2app后再运行uni-app可能无法正常显示的Bug
- iOS平台 修复 原生图片轮播控件（plus.nativeObj.ImageSlider）可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/70203)
- iOS平台 修复 原生控件（plus.nativeObj.View）绘制png图片可能无法支持透明的Bug [详情](https://ask.dcloud.net.cn/question/68199)
- iOS平台 修复 uni-app在非自定义组件模式下调用原生插件可能报JS错误（plus.postMessage is not a function）的Bug
- iOS平台 修复 地图控件调用setStyles方法更新样式不生效的Bug
- iOS平台 修复 地图控件可能报JS错误 Can't find variable: WeexPlus 的Bug [详情](https://ask.dcloud.net.cn/question/69807)
- iOS平台 修复 视频播放控件（VideoPlayer）切换到全屏播放时画面可能会卡住的Bug
- iOS平台 修复 视频播放控件（VideoPlayer）可能出现画面被压缩的Bug [详情](https://ask.dcloud.net.cn/question/70290)
- iOS平台 修复 数据库（SQLite）操作在一个db文件中创建多个数据库时异常的Bug [详情](https://ask.dcloud.net.cn/question/70346)
- iOS平台 修复 iOS11及以下系统plus.net.XMLHttpRequest使用GET请求调用send设置body参数可能导致请求失败的Bug
- iOS平台 修复 iOS10及以下系统播放音频（plus.audio.AudioPlayer）可能引起崩溃的Bug
- iOS平台 修复 录制mp3文件时会提前触发录音完成回调，此时调用播放可能引起无法触发播放完成事件的Bug
- iOS平台 修复 uni-app在自定义组件模式下向低功耗蓝牙设备指定特征值写入数据操作无效的Bug
- iOS平台 修复 uni-app在自定义组件模式下native.js的plus.ios.import方法调用时报js错误的Bug [详情](https://ask.dcloud.net.cn/article/35727)
- iOS平台 修复 uni-app在自定义组件模式下报weex-polyfill找不到的Bug [详情](https://ask.dcloud.net.cn/question/69878)
- iOS平台 修复 uni-app在自定义组件模式下使用new方法创建的地图无法再append到其它窗口的Bug [详情](https://ask.dcloud.net.cn/question/69740)
- iOS平台 修复 uni-app在自定义组件模式下调用加速度相关接口（plus.accelerometer）时报js错误的Bug
- iOS平台 修复 uni-app在自定义组件模式下获取当前连接的网络类型可能不正确的Bug
- iOS平台 修复 uni原生插件开发在非自定义组件模式下返回js层数据中包含不支持的数据类型导致插件方法调用失败的Bug

#### 2019年04月27日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.62380_20190427.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.4.20190426）版本生成本地打包App资源。
- 新增 Webview窗口标题栏上搜索框（searchInput）支持设置输入的文本内容 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.setTitleNViewSearchInputText)
- iOS平台 修复 页面使用UIWebview渲染设置softinputMode为adjustResize时弹出软键盘后可能白屏的问题
- iOS平台 修复 uni-app在自定义组件模式下使用地图可能报js错误的问题
- iOS平台 修复 uni-app在自定义组件模式下使用直播推流（LivePusher）控件报js错误的问题

#### 2019年04月23日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.62072_20190423.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.3.20190422）版本生成本地打包App资源。
- iOS平台 修复 nvue页面设置titleNView为false时显示不正确的bug [详情](https://ask.dcloud.net.cn/question/69004)
- iOS平台 修复 nvue页面设置显示titleNView时页面高度可能计算不正确的bug
- iOS平台 修复 页面使用UIWebview渲染设置softinputMode为adjustResize时弹出软键盘后可能会出现黑色区域的问题
- iOS平台 修复 uni-app设置为自定义组件模式时在iOS8.x系统页面白屏的问题
- Hello H5+ 新增 数据库（SQLite）操作示例页面

#### 2019年04月18日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.61821_20190418.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.2.20190417）版本生成本地打包App资源
- iOS平台 修复 uni-app在非自定义组件模式下调用uni原生插件报plus.postMessage错误的问题 [详情](https://ask.dcloud.net.cn/question/68886)
- iOS平台 修复 打开蓝牙适配器可能不触发回调的问题 [详情](https://ask.dcloud.net.cn/question/68714)
- iOS平台 修复 Webview窗口标题栏上的搜索框（searchInput）失去焦点后输入的文本不显示的问题
- iOS平台 修复 uni-app在自定义组件模式下console.log只能输出最后一个参数的问题

#### 2019年04月16日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.61664_20190416.zip)\

1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.1.20190415）版本生成本地打包App资源。
- iOS平台 修复 使用WKWebview后在应用首页可能出现侧滑返回到白色页面的问题
- iOS平台 修复 推送（push）消息事件监听回调可能报js错误的问题

#### 2019年04月13日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.61621_20190413.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.0.20190412）版本生成本地打包App资源。
- iOS平台 新增 音频播放（AudioPlayer）支持后台控制器（锁屏播放控制面板）功能
- iOS平台 新增 获取设备安全区域接口（plus.navigator.getSafeAreaInsets）。[文档](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSafeAreaInsets)
- iOS平台 修复 录音（AudioRecorder）设置格式为mp3时出现时长不正确的问题
- iOS平台 修复 页面中使用原生控件（plus.nativeObj.View）侧滑返回时可能出现js错误的问题
- iOS平台 修复 页面的softinputMode设置为adjustResize时，软键盘弹出可能会出现页面上移的问题
- iOS平台 修复 页面编辑框失去焦点时会自动滚动到顶部的问题
- iOS平台 修复 图片预览（plus.nativeUI.previewImage）初始显示宽度不正确的问题
- iOS平台 更新 高德地图：基础SDK（v1.5.6）、3D地图SDK（v6.7.0）、搜索功能（v6.5.0）

#### 2019年04月01日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.60078_20190401.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.8.2.20190330）版本生成本地打包App资源。
- 【重要】新增 SQLite模块（plus.sqlite.*），支持操作本地数据库文件。[打包配置指南](http://ask.dcloud.net.cn/article/35729)。[API文档](http://www.html5plus.org/doc/zh_cn/sqlite.html)
- iOS平台 修复 创建Webview时设置softinputNavBar属性不生效的问题
- iOS平台 修复 提交云端打包后调用新浪微博分享可能出现应用卡死的问题
- iOS平台 修复 图片预览（plus.nativeUI.previewImage）设置current参数大于图片总数时显示逻辑异常的问题
- iOS平台 修复 蓝牙写入特征值时在部分设备上可能出现无法写入的问题
- iOS平台 修复 模拟器上真机运行更新时可能卡在正在重启的问题

####2019年03月15日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.59686_20190315.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.7.0.20190314）版本生成本地打包App资源。
- 新增 自定义基座运行应用时toast提示“当前应用运行在自定义基座中”，避免将自定义基座作为正式包发布
- 新增 Webview窗口标题栏（titleNView）上的按钮支持配置最大宽度（maxWidth）
- 新增支持获取uni-app运行环境版本接口（plus.runtime.uniVersion）
- iOS平台 新增 Webview窗口支持设置是否隐藏软键盘上的导航条（softinputNavBar）
- iOS平台 修复 在iOS12及以上系统WKWebview软键盘弹出后无法完全收回的问题
- iOS平台 修复 在iOS11.4及以上系统弹出软键盘后可能出现页面会整体上移并出现黑色背景的问题
- iOS平台 修复 视频控件（VideoPlayer）无法播放部分rtsp、rtmp视频，timeupdate事件可能不触发等问题
- iOS平台 修复 视频控件（VideoPlayer）在iOS9.x上播放m3u8视频可能引起崩溃的问题
- iOS平台 修复 Webview窗口标题栏（titleNView）在透明样式下按钮文字初始颜色不正确的问题
- iOS平台 修复 部分蓝牙设备可能无法搜索到，蓝牙服务uuid和特征值uuid格式不正确等问题
- iOS平台 修复 uni-app在iOS8.x系统上页面无法渲染出内容的问题
- iOS平台 修复 nvue页面中websocket连接总是失败的问题

#### 2019年02月21日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.58828_20190221.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.6.2.20190220）版本生成本地打包App资源。
2. iOS平台 修复 应用首页配置为WKWebview时可能出现启动后白屏的问题
3. iOS平台 修复 相册选择文件界面（plus.gallery.pick）未自动适配系统语言的问题
4. iOS平台 修复 Webview窗口titleNView的buttons中不设置text属性可能会卡死、colour属性无法动态修改的问题
5. iOS平台 修复 提交Appstore提示使用非公开API(DirectoryWatcher)的问题
6. iOS平台 更新 云打包编译环境为XCode10.1，解决提交AppStore提示“WARNING ITMS-90725”的问题

#### 2019年01月21日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.58064_20190121.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.5.1或1.5.2）版本生成本地打包App资源。
2. 调整sdk包中HBuilder-Hello工程里默认为高德地图。
3. 新增 标题栏按钮（WebviewTitleNViewButtonStyles）支持红点、角标和向下箭头等。
4. iOS平台 修复 原生控件（NView）可能出现点击事件不触发的问题（影响使用NView实现Tab切换页面功能）
5. iOS平台 修复 视频播放（VideoPlayer）控件隐藏后还继续播放的问题
6. iOS平台 修复 窗口使用UIWebview内核可能出现拦截资源不生效的问题
7. iOS平台 修复 地图控件缩放时可能出现标点漂移的问题
8. iOS平台 修复 地图控件的标点可能出现点击不生效的问题
9. iOS平台 修复 WAP2APP应用中小米推送可能接收不到消息的问题
10. iOS平台 修复 获取摄像头对象（plus.camera.getCamera）指定摄像头索引值不生效的问题
11. iOS平台 修复 nvue页面不支持websocket模块的问题

#### 2018年12月26日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.56855_20181226.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.4.0.XXXX）版本生成本地打包App资源.
2. Webview窗口设置是否自动调整.
3. 内容区域避免与安全区域或系统状态栏重合，参考：[地址](http://ask.dcloud.net.cn/article/35386).
4. iOS平台 修复 图片压缩（plus.zip.compressImage）的overwrite参数不生效的问题.
5. iOS平台 修复 保存图片到相册使用相对路径时可能导致程序异常的问题.
6. iOS平台 修复 在WAP2APP应用中微信分享成功没有触发回调函数的问题.
7. iOS平台 修复 视频播放控件（VideoPlayer）通过setStle设置height属性不生效的问题.

#### 2018年12月12日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.55931_20181212.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.3.1.20181211）版本生成本地打包App资源.
2. iOS平台 更新 支付宝App支付SDK（v15.5.7）.
3. iOS平台 修复 通过Scheme启动应用plus.runtime.arguments可能获取不到启动参数的问题.
4. iOS平台 修复 设置Storage数据（plus.storage.setItem）可能引起程序崩溃的问题.
5. iOS平台 修复 视频播放控件（VideoPlayer）播放某些视频最后几秒可能一直缓冲的问题.
6. iOS平台 修复 视频播放控件（VideoPlayer）拖动播放进度后修改src可能不会自动播放的问题.
7. iOS平台 修复 地图控件来回移动操作后可能导致标点对象（Marker）变形的问题.
8. iOS平台 修复 百度定位可能引起应用崩溃的问题.

###2018年11月27日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.55369_20181127.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.2.1.20181126）版本生成本地打包App资源。
2. iOS平台 优化 iPhoneX*（刘海屏）设备沉浸式适配方式，与H5保持一致（注意：iOS11及以上系统如果出现灰条，需在name="viewport"的  meta节点content属性值中添加viewport-fit=cover）。
3. iOS平台 修复 从微信小程序启动应用时获取参数不正确的问题。
4. iOS平台 修复 应用升级后获取的版本号可能不更新的问题。
5. iOS平台 修复 原生图片预览（plus.nativeUI.previewImage）界面可能引起应用崩溃的问题。
6. iOS平台 修复 无法从相册中选择大视频文件的问题。
7. iOS平台 修复 iPhoneXS/Max设备状态栏高度适配不正确的问题。
8. iOS平台 修复 iPhone8 plus设备指纹识别返回结果为不支持的问题。
9. iOS平台 修复 Webview窗口设置bounce后下拉刷新不生效的问题。
10. iOS平台 修复 Webview窗口点击输入框弹出软键盘时可能出现自动滚动位置不正确的问题。
11. iOS平台 修复 视频播放控件（VideoPlayer）的autoplay属性可能不生效的问题。
12. iOS平台 修复 nvue页面中弹出软键盘后收回区域可能不对的问题。
13. iOS平台 修复 定位隐私权限提示crash问题。

#### 2018年11月9日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.53416_20181109.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.1.0.20181030）版本生成本地打包App资源。
2. 新增支持指纹识别功能等控件。
3. 修复已知5+API的bug，提升稳定性。

#### 2018年09月29日发布 
[点击下载SDK](http://download.dcloud.net.cn/iOSSDK@1.9.9.52542_20180929.zip)

1. 新增支持uni-app离线打包（HBuilderX中生成本地打包App资源）
2. 新增支持视频播放控件、直播推流等控件；
3. 更新分享SDK（微信、新浪微博），支持分享音频、视频、小程序等；
4. 修复已知5+API的bug，提升稳定性

#### 2018年5月11日发布 
[点击下载SDK](http://download.dcloud.net.cn/IOS-SDK@1.9.9.44932_20180511.zip)

1. 修复近期发现的一些bug，提升稳定性
2. 更新微信SDK，新版微信SDK有带支付和不带支付两个版本，使用微信支付的开发者需要在工程中引入libWeChatSDK_pay.a。使用了微信分享和登录但未使用支付的用户需要在工程中引入libWeChatSDK.a。 **未使用微信支付功能的用户引入libWeChatSDK_pay.a在提交AppStore审核时可能会因为支付通道问题被拒绝**