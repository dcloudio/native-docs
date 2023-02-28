## Alpha版历次更新说明
## Alpha version previous update instructions

## 3.7.2.20230217-alpha

无

## 3.7.1.20230210-alpha

+ 修复 音频播放 AudioPlayer seekTo 跳转指定位置不支持毫秒的Bug

## 3.7.0.20230118-alpha

+ 更新 一键登录使用的个验SDK为 3.0.3.0 版(libGTCommonSDK-1.2.2.0.a 更换为GTCommonSDK.framework)

## 3.6.17.20230111-alpha

无

## 3.6.16.20230109-alpha

* uni-app插件
  + App-iOS平台 修复 nvue 页面 ad-content-page 组件拉取广告配置失败后无法重新拉取的Bug
  + App-iOS平台 修复 nvue 页面 map 组件使用自定义地图样式后切换卫星图无效的Bug [详情](https://ask.dcloud.net.cn/question/159316)
  + App-iOS平台 修复 使用模拟器开启调试后启动应用白屏的Bug [详情](https://ask.dcloud.net.cn/question/160363)
  + App-iOS平台 修复 Vue3 项目中 input 组件 disabled 无法动态修改的Bug 详情

* App插件(含5+App和uni-app的App端)
  + iOS平台 更新 UniPush 使用的个推SDK为 2.7.2.0 版，因个推改为 Swift 版，需引入 Swift 库，可能导致打包后 ipa 文件变大 [详情](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
  + iOS平台 修复 设置应用语言为英文时部分系统界面可能会显示为回退语言的Bug [详情](https://ask.dcloud.net.cn/question/159445)
  + iOS平台 修复 自定义基座真机运行可能导致 setStorage 保存的数据丢失的Bug [详情](https://ask.dcloud.net.cn/question/159903)
  + iOS平台 修复 plus.nativeUI.toast 设置 style 为 inline 时 iconWidth/iconHeight 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/160192)
  + iOS平台 修复 uni-AD 优量汇开屏广告展示期间弹出提示框可能导致开屏界面不会关闭的Bug
  + iOS平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备返回数据没有 advertisData 字段的Bug [详情](https://ask.dcloud.net.cn/question/160178)

## 3.6.14.20221216-alpha

+ 修复 UniPush 2.0 在vue2项目中 启用离线推送后，调用 uni.getPushClientId 某些情况下获取不到cid的Bug[详情](https://ask.dcloud.net.cn/question/158921)
+ 修复 plus.push.getClientInfoAsync 在应用热重启后调用不触发回调的Bug

## 3.6.12.20221207-alpha

+ iOS平台 修复 3.6.11 版本引出的 显示开屏广告时弹出系统 alert 窗偶现崩溃的Bug

## 3.6.11.20221205-alpha

+ App平台 新增 【ext api】 Wi-Fi 模块 [详情](https://uniapp.dcloud.net.cn/api/system/wifi.html)
+ App平台 优化 Vue2 项目 component is 支持传入组件选项和构造函数 [详情](https://ask.dcloud.net.cn/question/140044)
+ App平台 修复 nvue 页面 slider 组件某些情况下位置位置计算不准确的Bug [详情](https://ask.dcloud.net.cn/question/152714)
+ App-iOS平台 补齐 【ext api】 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
+ App-iOS平台 修复 3.6.7 版本引出的 ad 组件偶现加载优量汇广告成功但无法正常渲染的Bug
+ 新增 Record、Camera、Barcode、Orientation模块，解决iOS平台隐私合规检测可能报包含麦克风、相机/相册、运动等权限的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-modules.html#bcor)
+ iOS平台 更新 uni-AD 快手广告SDK为 3.3.33 版；快手内容联盟SDK为 3.3.32 版；今日头条穿山甲SDK为 4.9.0.5 版；穿山甲GroMore广告SDK为 3.8.0.2 版
+ iOS平台 修复 IAP支付 订单数据 orderInfo 参数异常时引起应用假死的Bug
+ iOS平台 修复 3.6.10版本引出的 三方登录授权不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/158380)

## 3.6.10.20221121-alpha
+ App平台 修复 Vue2 项目 编辑 uts 插件代码热更新失效的Bug
+ App平台 修复 Vue2 项目 nvue 页面不支持 uts 插件的Bug [详情](https://ask.dcloud.net.cn/question/157435)
+ App平台 修复 darkmode 模式下设置 statusBar 颜色不正常的Bug
+ App平台 修复 nvue 首页设置 navigationBarTextStyle 无效的Bug [详情](https://ask.dcloud.net.cn/question/150485)
+ App平台 修复 uni.startSoterAuthentication（生物识别）识别错误时 loading 没有文字提示的Bug [详情](https://ask.dcloud.net.cn/question/157353)
 
+ iOS平台 修复 3.6.7版本引出的 设置启动页不自动关闭无效的Bug [详情](https://ask.dcloud.net.cn/question/157721)
+ iOS平台 修复 plus.screen.lockOrientation、plus.screen.unlockOrientation 在 iOS16 设备无效的Bug [详情](https://ask.dcloud.net.cn/question/155357)
+ iOS平台 修复 播放音频时无法正常录音的Bug [详情](https://ask.dcloud.net.cn/question/157408)
+ iOS平台 修复 设置暗黑模式跟随系统主题可能无效的Bug

## 3.6.9.20221114-alpha
+ 新增 uni错误规范 [详情](https://uniapp.dcloud.net.cn/tutorial/err-spec.html)
+ Added uni error specification [details](https://uniapp.dcloud.net.cn/tutorial/err-spec.html)
+ App、Web平台 新增 暗黑模式（DarkMode） [详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
+ Added Dark Mode (DarkMode) on App and Web platforms [Details](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
+ App、Web平台 修复 radio 组件禁用状态样式异常的Bug
+ App, Web platform Fix the bug that the style of the radio component is disabled and the style is abnormal
+ App平台 新增 nvue 页面 MapContext 支持 setLocMarkerIcon 方法 [详情](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
+ App platform added nvue page MapContext supports setLocMarkerIcon method [Details](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
+ App平台 新增 nvue list 组件支持 render-reverse 属性 [详情](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
+ App platform added nvue list component to support render-reverse attribute [Details](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
+ App平台 修复 Vue2 项目使用组合式 API 时 onReady 声明周期 template ref 未绑定的Bug
+ App platform Fixed the bug that the template ref in the onReady statement cycle was not bound when the Vue2 project used the combined API
+ App平台 修复 Vue3 项目 template ref 会被代理的Bug
+ App platform fixes the bug that the template ref of the Vue3 project will be proxied
+ App平台 修复 Vue3 项目设置导航栏背景色为 rgba 色值无效的Bug [详情](https://ask.dcloud.net.cn/question/135111)
+ App platform Fix the bug that the background color of the navigation bar of the Vue3 project is set to an invalid rgba color value [Details](https://ask.dcloud.net.cn/question/135111)
+ App平台 修复 Vue3 项目根节点 height:100% 无效的Bug [详情](https://ask.dcloud.net.cn/question/156564)
+ App platform fix Vue3 project root node height: 100% invalid bug [Details](https://ask.dcloud.net.cn/question/156564)
+ App-iOS平台 修复 Vue3 项目录音播放无效的Bug [详情](https://ask.dcloud.net.cn/question/155741)
+ App-iOS platform fixes the bug that Vue3 project recording playback is invalid [Details](https://ask.dcloud.net.cn/question/155741)
 
+ 新增 Stripe支付支持设置账单信息 [详情](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
+ Added support for setting billing information for Stripe payment [Details](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
+ iOS平台 修复 3.6.0版本引出的 开屏广告自定义底部图片、背景色不生效的Bug
+ iOS platform fixed the bug caused by version 3.6.0 that the custom bottom image and background color of the opening screen advertisement did not take effect
+ iOS平台 修复 标题栏 titleNView 设置默认导航栏颜色可能导致与状态栏颜色不一致的Bug
+ iOS platform fixed the bug that the title bar titleNView setting the default navigation bar color may cause inconsistent color with the status bar
+ iOS平台 修复 setUIStyle 设置暗黑模式可能无效的Bug
+ iOS platform fixes the bug that setUIStyle may not work when setting the dark mode
+ iOS平台 修复 uts插件 类构造函数无法使用外参的Bug
+ iOS platform fixes the bug that the class constructor of the uts plugin cannot use external parameters


## 3.6.8.20221027-alpha

+ App平台、Web平台 新增 地理位置更新相关接口 [详情](https://uniapp.dcloud.net.cn/api/location/location-change.html)
+ App platform, Web platform Added location update related interface [Details](https://uniapp.dcloud.net.cn/api/location/location-change.html)
+ App平台 修复 3.6.7 版本引出 Vue3 项目的 nvue 页面全局样式无效的Bug [详情](https://ask.dcloud.net.cn/question/155639)
+ App platform Fixed the bug that the global style of the nvue page of the Vue3 project was invalid due to version 3.6.7 [Details](https://ask.dcloud.net.cn/question/155639)
+ App平台 修复 Vue2 项目移除页面根节点后导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155057)
+ App platform Fix the bug that caused the event to be abnormal after the Vue2 project removed the root node of the page [Details](https://ask.dcloud.net.cn/question/155057)
+ App平台 修复 Vue2 项目列表不使用 index 作为 key 时更新数据导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155238)
+ App platform Fix the bug that when the Vue2 item list does not use the index as the key, the update data causes the event to be abnormal. [Details](https://ask.dcloud.net.cn/question/155238)

+ App-iOS平台 修复 在 iOS16 设备 nvue 页面关闭、开启下拉刷新效果时偶现崩溃的Bug
+ App-iOS platform fixed the bug that occasionally crashed when the nvue page was closed and the pull-down refresh effect was enabled on iOS16 devices
+ App-iOS平台 修复 3.6.0版本引出的 nvue list 组件内使用 ad 信息流广告组件偶发渲染空白的Bug [详情](https://ask.dcloud.net.cn/question/155752)
+ App-iOS platform fixed the bug that the nvue list component introduced by version 3.6.0 occasionally renders blank when using the ad information feed component [Details](https://ask.dcloud.net.cn/question/155752)
 
+ iOS平台 更新 uni-AD 百度百青藤广告SDK 为 4.901 版；快手广告SDK 为 3.3.32 版
+ iOS platform update uni-AD Baidu Baiqingteng Advertising SDK to version 4.901; Kuaishou Advertising SDK to version 3.3.32
+ iOS平台 更新 微信SDK 为 1.9.6 版
+ iOS platform update WeChat SDK to version 1.9.6
+ iOS平台 修复 分享到微信收藏夹时跳转到朋友圈的Bug [详情](https://ask.dcloud.net.cn/question/155362)
+ iOS platform fixed the bug of jumping to Moments when sharing to WeChat favorites [Details](https://ask.dcloud.net.cn/question/155362)


## 3.6.7.20221018-alpha

+ 【重要】新增 uts iOS版插件。将uts代码转为swift代码。 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
+ [Important] Added uts iOS plugin. Convert uts code to swift code. [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
+ 【重要】新增 `uni ext api`。将不常用的API剥离为uni_modules插件，但仍使用uni.开头的API。[详情](https://uniapp.dcloud.net.cn/api/extapi.html)
+ [Important] Add `uni ext api`. Strip off uncommonly used APIs as uni_modules plugins, but still use APIs starting with uni. [Details](https://uniapp.dcloud.net.cn/api/extapi.html)
+ App平台、Web平台 新增 【ext api】 uni.getBatteryInfo [详情](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
+ App platform, Web platform added [ext api] uni.getBatteryInfo [Details](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
+ App平台、Web平台 修复 picker 组件日期类型无法使用超出默认的年份范围值的Bug [详情](https://ask.dcloud.net.cn/question/131332)
+ App platform, Web platform Fix the bug that the date type of the picker component cannot use values beyond the default year range [Details](https://ask.dcloud.net.cn/question/131332)
+ App平台、Web平台 修复 iOS16 系统 input 组件 type=digit 无法输入小数点的Bug [详情](https://ask.dcloud.net.cn/question/154584)
+ App platform, Web platform fix iOS16 system input component type=digit bug that cannot input decimal point [details](https://ask.dcloud.net.cn/question/154584)
+ App平台、Web平台 修复 editor 组件 insertImage 触发 input 事件没有 alt 属性的Bug [详情](https://ask.dcloud.net.cn/question/155163)
+ App platform, Web platform Fix the bug that the editor component insertImage triggers the input event without the alt attribute [Details](https://ask.dcloud.net.cn/question/155163)
+ App平台、Web平台 修复 vue3 项目 editor 组件重新加载获取不到 EditorContext 的Bug [详情](https://ask.dcloud.net.cn/question/154702)
+ App platform, Web platform Fix the bug that the editor component of the vue3 project cannot get the EditorContext after reloading [Details](https://ask.dcloud.net.cn/question/154702)
+ App平台 新增 nvue 页面 picker-view 组件增加 mask-top-style、mask-bottom-style 属性 [详情](https://uniapp.dcloud.net.cn/component/picker-view.html)
+ Added nvue page picker-view component on App platform to add mask-top-style, mask-bottom-style attributes [Details](https://uniapp.dcloud.net.cn/component/picker-view.html)
+ App平台 优化 video 组件支持 title 属性 [详情](https://uniapp.dcloud.net.cn/component/video.html)
+ App platform optimized video component to support title attribute [Details](https://uniapp.dcloud.net.cn/component/video.html)
+ App平台 修复 hover-class 属性不支持多个 class 的Bug [详情](https://ask.dcloud.net.cn/question/152506)
+ App platform fixes the bug that the hover-class attribute does not support multiple classes [details](https://ask.dcloud.net.cn/question/152506)
+ App平台 修复 vue3 项目 uts 插件 export default class 不生效的Bug [详情](https://ask.dcloud.net.cn/question/154164)
+ App platform fixes the bug that the export default class of the vue3 project uts plugin does not take effect [Details](https://ask.dcloud.net.cn/question/154164)
+ App平台 修复 vue3 项目 v-for 可能渲染失败的Bug [详情](https://ask.dcloud.net.cn/question/154836)
+ App platform Fix the bug that the v-for of vue3 project may fail to render [Details](https://ask.dcloud.net.cn/question/154836)
+ App平台 修复 vue3 项目 tabbar.broderStyle 自定义色值无效的Bug [详情](https://ask.dcloud.net.cn/question/150718)
+ App platform Fix the bug that the custom color value of tabbar.broderStyle in the vue3 project is invalid [Details](https://ask.dcloud.net.cn/question/150718)
+ App平台 修复 vue3 项目 nvue 页面 switch 组件 disabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/154577)
+ App platform Fix the bug that the disabled attribute of the switch component of the vue3 project nvue page is invalid [Details](https://ask.dcloud.net.cn/question/154577)
+ App-Android平台 修复 3.5.5版本引出 input 组件自动获取焦点可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153481)
+ App-Android platform fixes the bug that the input component may fail to automatically get the focus in version 3.5.5 [Details](https://ask.dcloud.net.cn/question/153481)
+ App-iOS平台 修复 nvue swiper 组件使用 rpx 时在部分设备可能无法正常滑动切换的Bug [详情](https://ask.dcloud.net.cn/question/149260)
+ App-iOS platform fixed the bug that the nvue swiper component may not be able to swipe and switch normally on some devices when using rpx [Details](https://ask.dcloud.net.cn/question/149260)

  
+ 【重要】iOS平台 新增 云端打包支持原生应用配置文件 Info.plist 和资源目录 Resources [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios)
+ [Important] iOS platform adds cloud packaging support for native application configuration file Info.plist and resource directory Resources [details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios)
+ iOS平台 修复 使用`阿里百川电商`SDK 5.x版，云端打包报符号冲突错误的Bug [详情](https://ask.dcloud.net.cn/question/153138)
+ iOS platform fixed the bug that the cloud package reported symbol conflict errors when using `Ali Baichuan E-commerce` SDK version 5.x [Details](https://ask.dcloud.net.cn/question/153138)
+ iOS平台 修复 视频播放控件 VideoPlayer 标题栏、进度条样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/153945)
+ iOS platform fixed the bug that the video playback control VideoPlayer title bar and progress bar had incorrect styles [Details](https://ask.dcloud.net.cn/question/153945)
+ iOS平台 修复 uni-AD 穿山甲Gromore 激励视频偶现可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/153717)
+ iOS platform fixed the bug that the uni-AD pangolin Gromore incentive video may not be displayed occasionally [Details](https://ask.dcloud.net.cn/question/153717)
+ iOS平台 修复 3.6.0版本引出的 uni原生语言插件Hook不到applicationWillEnterForeground、applicationDidEnterBackground等系统事件的Bug
+ iOS platform fixed the bug that the uni native language plug-in hook introduced by version 3.6.0 could not reach system events such as applicationWillEnterForeground and applicationDidEnterBackground
+ iOS平台 修复 安全检测可能报获取设备idfv的Bug
+ iOS platform repaired the bug that the security detection may report the device idfv

## 3.6.3.20220919-alpha
无
none

## 3.6.1.20220907-alpha

+ App-iOS平台 修复 nvue tabbar 页面 uni.reLaunch 不触发 onUnload 生命周期的Bug [详情](https://ask.dcloud.net.cn/question/152738)
+ App-iOS platform fix nvue tabbar page uni.reLaunch does not trigger the onUnload life cycle Bug [details](https://ask.dcloud.net.cn/question/152738)
+ iOS平台 修复 uploader 上传文件获取 uploadedSize 值不准确的Bug 
+ iOS platform fixes the bug that the uploader uploads files to get the uploadedSize value is inaccurate

## 3.6.0.20220901-alpha

+ App-iOS平台 修复 uni.openLocation 底部安全区适配问题 [详情](https://ask.dcloud.net.cn/question/150074)
+ App-iOS platform fix uni.openLocation bottom safety area adaptation problem [Details](https://ask.dcloud.net.cn/question/150074)
+ App-iOS平台 修复 uni.chooseLocation 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/152367)
+ App-iOS platform fixes the bug that uni.chooseLocation may cause the app to crash [Details](https://ask.dcloud.net.cn/question/152367)
+ iOS平台 修复 3.5.0版本引出的 快手开屏广告点击打开落地页返回后无法进入应用首页的Bug [详情](https://ask.dcloud.net.cn/question/152441)
+ iOS platform Fixed the bug caused by version 3.5.0 that the Kuaishou screen advertisement could not enter the application homepage after clicking to open the landing page [Details](https://ask.dcloud.net.cn/question/152441)
+ iOS平台 修复 未使用Push模块上传 AppStore 报ITMS-90078: Missing Push Notification Entitlement警告的Bug
+ iOS platform fixed the Bug that reported ITMS-90078: Missing Push Notification Entitlement warning when uploading to AppStore without using the Push module

## 3.5.5.20220824-alpha

+ App平台 修复 vue 页面 cover-view 组件 flex 布局无效的Bug [详情](https://ask.dcloud.net.cn/question/151697)
+ App platform Fix the bug that the flex layout of the vue page cover-view component is invalid [Details](https://ask.dcloud.net.cn/question/151697)
+ App平台 修复 vue3 项目 uni.getSystemInfo 获取 windowHeight 值不准确的Bug [详情](https://ask.dcloud.net.cn/question/150862)
+ App platform Fix the bug that the windowHeight value obtained by uni.getSystemInfo of the vue3 project is inaccurate [Details](https://ask.dcloud.net.cn/question/150862)
+ App平台 修复 vue3 项目 vue 页面 map 组件更新中心坐标后显示错误的Bug [详情](https://ask.dcloud.net.cn/question/151438)
+ App platform Fixed the bug that the map component of the vue page of the vue3 project displayed an error after updating the center coordinates [Details](https://ask.dcloud.net.cn/question/151438)
+ App-iOS平台 修复 uni.getSystemSetting 获取的 bluetoothEnabled、locationEnabled 值不准确的Bug
+ App-iOS platform fixed the bug that the bluetoothEnabled and locationEnabled values obtained by uni.getSystemSetting were inaccurate
+ App-iOS平台 修复 nvue 页面 map 组件 marker 调用 moveAlong 方法没有中断前一次动画的Bug [详情](https://ask.dcloud.net.cn/question/151411)
+ App-iOS platform fixed the bug that the nvue page map component marker did not interrupt the previous animation when calling the moveAlong method [Details](https://ask.dcloud.net.cn/question/151411)
+ App-iOS平台 修复 3.5.2 引出的 nvue 页面 ad-content-page 组件在某些场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/151778)
+ App-iOS platform fixes the bug that the ad-content-page component of the nvue page introduced in 3.5.2 may cause the app to crash in some scenarios [Details](https://ask.dcloud.net.cn/question/151778)
+ iOS平台 更新 uni-AD 百度百青藤广告SDK为 4.891 版
+ iOS platform update uni-AD Baidu Baiqingteng Advertising SDK to version 4.891
+ iOS平台 修复 3.5.0版本引出的 uni-AD 信息流广告设置宽度可能引起显示异常的Bug [详情](https://ask.dcloud.net.cn/question/150789)
+ iOS platform fixed the bug that the width of uni-AD information feed advertisement setting width caused by version 3.5.0 may cause abnormal display [Details](https://ask.dcloud.net.cn/question/150789)
+ iOS平台 修复 3.5.0版本引出的 使用百度定位模块需要勾选IDFA的Bug
+ iOS platform fixed the bug that IDFA needs to be checked when using the Baidu positioning module introduced by version 3.5.0
+ iOS平台 修复 3.5.3版本引起的 标准真机运行基座中一键登录返回的 token 值不正确的Bug
+ iOS platform fixed the bug that the token value returned by the one-click login in the standard real machine running base caused by version 3.5.3 was incorrect
+ iOS平台 修复 从本地相册中选择慢动作视频显示的时长不准确Bug [详情](https://ask.dcloud.net.cn/question/150531)
+ iOS platform fixed the bug that the displayed duration of the slow-motion video selected from the local photo album was inaccurate [Details](https://ask.dcloud.net.cn/question/150531)

## 3.5.4.20220805-alpha

+ App平台 优化 vue2 项目 web-view 组件通过 webviewStyles 设置更多样式 [详情](https://ask.dcloud.net.cn/question/149212)
+ App platform optimize vue2 project web-view component to set more styles through webviewStyles [Details](https://ask.dcloud.net.cn/question/149212)
+ App平台 优化 vue 页面 web-view 组件内页面默认支持绘制到安全区外 [详情](https://ask.dcloud.net.cn/question/149472)
+ App platform optimized vue page web-view component pages support drawing outside the safe area by default [Details](https://ask.dcloud.net.cn/question/149472)
+ App平台 修复 openLocation、chooseLocation 在应用语言改变时没有跟随变化的Bug [详情](https://ask.dcloud.net.cn/question/149216)
+ App platform fixed the bug that openLocation and chooseLocation did not follow the change of the application language [Details](https://ask.dcloud.net.cn/question/149216)
+ App-iOS平台 修复 uni.setTabBarItem 动态更新 icon 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/149955)
+ App-iOS platform fixes the bug that uni.setTabBarItem dynamic update icon may not take effect [Details](https://ask.dcloud.net.cn/question/149955)
+ App-iOS平台 修复 nvue map 组件使用 Google 地图时，多个页面中使用地图组件可能无法正常加载的Bug [详情](https://ask.dcloud.
+ App-iOS platform Fix the bug that when the nvue map component uses Google Maps, the map component may not be loaded normally in multiple pages [details](https://ask.dcloud.
+ iOS平台 修复 3.5.0版本引出的 使用百度地图或百度定位时未勾选`使用广告标识（IDFA）`云打包报错的Bug
+ iOS platform fixes the bug that cloud packaging errors caused by version 3.5.0 were not checked when using Baidu Maps or Baidu Positioning
+ iOS平台 修复 3.5.3版本引出的 开通 uni-AD 开屏广告后台切前台可能导致页面回退不正常的Bug [详情](https://ask.dcloud.net.cn/question/150053)
+ iOS platform fixes the bug caused by version 3.5.3, which may lead to abnormal page rollback when uni-AD is activated and the background switches to the foreground. [Details](https://ask.dcloud.net.cn/question/150053)
+ iOS平台 修复 图片选择界面设置 crop 属性选择 iCloud 图片黑屏的Bug [详情](https://ask.dcloud.net.cn/question/149219)
+ iOS platform fixed the black screen bug in the image selection interface setting crop attribute to select iCloud images [Details](https://ask.dcloud.net.cn/question/149219)



## 3.5.3.20220727-alpha
+ App平台 新增 uni.openAppAuthorizeSetting 跳转系统授权管理页 [详情](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
+ App platform added uni.openAppAuthorizeSetting to jump to the system authorization management page [Details](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
+ App-iOS平台 修复 https 请求配置自签名 p12 证书包含中间证书时请求报错的Bug [详情](https://ask.dcloud.net.cn/question/149526)
+ App-iOS platform fixes the bug that the https request configuration self-signed p12 certificate contains an intermediate certificate. [Details](https://ask.dcloud.net.cn/question/149526)
+ App-iOS平台 修复 nvue box-shadow 样式设置 spread 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/148415)
+ App-iOS platform fix nvue box-shadow style setting spread parameter invalid Bug [details](https://ask.dcloud.net.cn/question/148415)


+ 更新 uni-AD 腾讯优量汇SDK iOS为 4.13.80 版；快手广告SDK iOS为 3.3.27 版；今日头条穿山甲SDK iOS为 4.7.0.0 版；穿山甲GroMore广告SDK iOS为 3.5.1.0 版；Sigmob广告联盟SDK iOS为 4.2.1 版
+ Update uni-AD Tencent Youlianghui SDK iOS to version 4.13.80; Kuaishou Advertising SDK iOS to version 3.3.27; Toutiao Pangolin SDK iOS to version 4.7.0.0; Pangolin GroMore Advertising SDK iOS to version 3.5.1.0; Sigmob Ad Network SDK iOS version 4.2.1
  
+ iOS平台 修复 3.5.0版本引出的 创建本地消息 plus.push.createMessage 不传 option 参数引起应用崩溃的Bug
+ iOS platform fixes the bug that the application crashes caused by the 3.5.0 version of creating a local message plus.push.createMessage without passing the option parameter
+ iOS平台 修复 sqlite 在应用 restart 后 executeSql 修改数据报`Attempt to write a readonly database`错误的Bug [详情](https://ask.dcloud.net.cn/question/139765)
+ iOS platform fixed the bug that executeSql modified the data report `Attempt to write a readonly database` error in sqlite after application restart [details](https://ask.dcloud.net.cn/question/139765)
+ iOS平台 修复 从本地相册中选择慢动作视频引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/149219)
+ iOS platform fixed the bug that the app crashed when selecting a slow-motion video from the local photo album [Details](https://ask.dcloud.net.cn/question/149219)
+ iOS平台 修复 视频播放 video 的 seek 方法传入小于当前播放时间值无效的Bug [详情](https://ask.dcloud.net.cn/question/148781)
+ iOS platform fixes the bug that the seek method of video playback is invalid when the value is less than the current playback time [Details](https://ask.dcloud.net.cn/question/148781)
+ iOS平台 修复 打开包含视频播放 video 控件的页面会打断其他App后台音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/146719)
+ iOS platform fixes the bug that opening a page containing a video control will interrupt the background music playback of other apps [Details](https://ask.dcloud.net.cn/question/146719)


## 3.5.2.20220719-alpha

+ App平台 新增 uni.getSystemSetting 获取手机系统的定位、蓝牙、wifi开关等设置 [详情](https://uniapp.dcloud.io/api/system/getsystemsetting)
+ Added uni.getSystemSetting to the App platform to get the location, bluetooth, wifi switch and other settings of the mobile phone system [Details](https://uniapp.dcloud.io/api/system/getsystemsetting)
+ App平台 新增 uni.getAppAuthorizeSetting 获取应用权限状态，是否被授予定位、相册等权限 [详情](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
+ Added uni.getAppAuthorizeSetting on the App platform to get the status of the app authorization, whether it is granted location, photo album and other permissions [Details](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
+ App平台 新增 uni.createPushMessage 创建本地通知栏消息 [详情](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
+ App platform added uni.createPushMessage to create a local notification bar message [Details](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
+ App平台 修复 vue3 项目 首次启动调用 uni.getPushClientId 获取不到cid的Bug
+ App platform fixes the bug that the cid cannot be obtained by calling uni.getPushClientId for the first startup of the vue3 project
+ App平台 修复 vue2 项目 nvue 页面访问 process.env 报错的Bug [详情](https://ask.dcloud.net.cn/question/147948)
+ App platform fixes the bug that the vue2 project nvue page access process.env error report [details](https://ask.dcloud.net.cn/question/147948)
+ App、H5平台 修复 vue3 项目 uni.openLocation 未配置 latitude longitude 时不触发 fail 回调的Bug
+ App, H5 platform Fix the bug that the fail callback is not triggered when the uni.openLocation of the vue3 project is not configured with latitude longitude

+ App-iOS平台 修复 nvue image 组件 src 属性更新使用 gif 格式图片时无法切换的Bug [详情](https://ask.dcloud.net.cn/question/148807)
+ App-iOS platform fixed the bug that the nvue image component src attribute update cannot be switched when using gif format images [Details](https://ask.dcloud.net.cn/question/148807)
+ App-iOS平台 修复 nvue 组件动态修改 border-radius 样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/144709)
+ App-iOS platform fixes the bug that the dynamic modification of the border-radius style of the nvue component may not take effect [Details](https://ask.dcloud.net.cn/question/144709)

+ 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
+ Added uni-AD support for pangolin GroMore ads, including opening screen, news feed, interstitial screen, full-screen video, rewarded video ads
+ 更新 uni-AD 快手广告SDK iOS为 3.3.26 版；百度百青藤广告SDK iOS为 4.883 版
+ Update uni-AD Kuaishou Advertising SDK iOS to version 3.3.26; Baidu Baiqingteng Advertising SDK iOS to version 4.883
+ iOS平台 修复 3.5.0版本引出的 plus.runtime.restart 重启应用后页面返回按钮失效的Bug
+ iOS platform fixes the bug that the page back button fails after restarting the application in plus.runtime.restart caused by version 3.5.0
+ iOS平台 修复 3.5.0版本引出的 uni-AD 开通基础广告首次安装可能卡在启动页面的Bug [详情](https://ask.dcloud.net.cn/question/149192)
+ iOS platform fixed the bug that the uni-AD activation basic ad first installation caused by version 3.5.0 might get stuck on the startup page [Details](https://ask.dcloud.net.cn/question/149192)
+ iOS平台 修复 plus.runtime.openWeb 在 iOS15.4 及以上设备打开页面导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/148585)
+ iOS platform fixed the bug that the navigation bar of plus.runtime.openWeb was displayed abnormally on iOS15.4 and above devices [Details](https://ask.dcloud.net.cn/question/148585)
+ iOS平台 修复 标题栏 titleNView 更新按钮样式导致布局错位的Bug [详情](https://ask.dcloud.net.cn/question/148542)
+ iOS platform fixed the bug that the title bar titleNView update button style caused layout misalignment [Details](https://ask.dcloud.net.cn/question/148542)
+ iOS平台 修复 plus.navigator.getOrientation 在设备横屏状态时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/148843)
+ iOS platform fixed the bug that the return value of plus.navigator.getOrientation was incorrect when the device was in landscape state [Details](https://ask.dcloud.net.cn/question/148843)
+ iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
+ iOS platform fixed the Bug that did not use the Push module to upload to the AppStore and reported `ITMS-90078: Missing Push Notification Entitlement` warning bug


## 3.5.1.20220707-alpha
+ App、H5平台 优化 movable-view 组件触摸过程中支持设置 disabled 属性 [详情](https://github.com/dcloudio/uni-app/issues/2384)
+ App, H5 platform optimized movable-view component support setting disabled attribute during touch [Details](https://github.com/dcloudio/uni-app/issues/2384)
+ App平台 修复 map 组件在部分设备显示黑色边框的Bug [详情](https://ask.dcloud.net.cn/question/145449)
+ App platform Fixed the bug that the map component displayed black borders on some devices [Details](https://ask.dcloud.net.cn/question/145449)
+ App平台 修复 vue3 项目 input 绑定动态 type 报错的Bug
+ App platform fixes the bug that the vue3 project input is bound to the dynamic type and the error is reported
+ App平台 修复 vue3 项目 nvue 页面组件插槽样式可能不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3632)
+ App platform Fix the bug that the vue3 project nvue page component slot style may be incorrect [Details](https://github.com/dcloudio/uni-app/issues/3632)
+ App平台 修复 vue3 项目 vue 页面在 iOS 平台内存不足导致白屏未自动恢复的Bug [详情](https://ask.dcloud.net.cn/article/35913)
+ App platform Fix the bug that the vue page of the vue3 project has insufficient memory on the iOS platform and the white screen does not automatically recover [Details](https://ask.dcloud.net.cn/article/35913)
+ App平台 修复 vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/144731)
+ App platform Fix the bug that the onPostMessage event of the nvue page webview component of the vue3 project is invalid [Details](https://ask.dcloud.net.cn/question/144731)
+ App-iOS平台 优化 IAP 支付逻辑 补充手动关闭订单策略，解决自动关单但后续报错可能造成丢单的Bug [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#iap)
+ The App-iOS platform optimizes the IAP payment logic and supplements the manual closing order strategy to solve the bug that the order may be lost due to automatic closing but subsequent error reports [Details](https://uniapp.dcloud.net.cn/api/plugins/payment. html#iap)
+ App-iOS平台 修复 uni.getSystemInfo 获取某些设备型号不正确的Bug [详情](https://ask.dcloud.net.cn/question/148344)
+ App-iOS platform fixes the bug that uni.getSystemInfo gets incorrect device models [details](https://ask.dcloud.net.cn/question/148344)
+ App-iOS平台 修复 动态设置 tabBar 隐藏再显示后高斯模糊效果失效的Bug [详情](https://ask.dcloud.net.cn/question/146478)
+ App-iOS platform fixes the bug that the Gaussian blur effect fails after dynamically setting the tabBar to hide and display [Details](https://ask.dcloud.net.cn/question/146478)
+ App-iOS平台 修复 nvue bindingx 在滚动视图中使用 transform.translateY 结果有偏差的Bug [详情](https://ask.dcloud.net.cn/question/144209)
+ App-iOS platform fixes the bug that nvue bindingx uses transform.translateY in the scroll view and the result is biased. [Details](https://ask.dcloud.net.cn/question/144209)
+ App-iOS平台 修复 nvue input 组件嵌套在 list 中时，页面上下滑动 v-model 绑定的值会置空的Bug [详情](https://ask.dcloud.net.cn/question/146246)
+ App-iOS platform fixes the bug that when the nvue input component is nested in the list, the value bound to the v-model will be empty when the page slides up and down [Details](https://ask.dcloud.net.cn/question/146246 )
+ App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时初始高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/146688)
+ App-iOS platform fixes the bug that the initial height of the nvue textarea component is incorrect when auto-height is set to true [Details](https://ask.dcloud.net.cn/question/146688)
+ iOS平台 新增 IAP支付 手动关闭订单、获取未关闭订单列表等功能，以解决自动关闭订单在某些情况引发的订单丢失的Bug [详情](https://uniapp.dcloud.io/tutorial/app-payment-aip.html)
+ The iOS platform has added functions such as IAP payment to manually close orders, obtain a list of unclosed orders, etc., to solve the bug of order loss caused by automatic closing orders in some cases [details](https://uniapp.dcloud.io/tutorial/ app-payment-aip.html)
+ iOS平台 修复 3.5.0 版本引出的 uni-AD 穿山甲开屏广告偶现 bottomView 没有关闭的Bug
+ iOS platform fixed the bug that the uni-AD pangolin open screen advertisement occasionally appeared in the bottomView and was not closed due to version 3.5.0
+ iOS平台 修复 首次启动 App 获取安全区域高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/148277)
+ iOS platform fixes the bug that the height of the safe area may be incorrect when starting the App for the first time [Details](https://ask.dcloud.net.cn/question/148277)
+ iOS平台 修复 设备型号名称 model、deviceModel 返回值不规范的Bug
+ iOS platform fixed the bug that the device model name model, deviceModel return value is not standardized



## 3.5.0.20220623-alpha

+ App、Web平台 修复 3.4.10 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/147174)
+ App, Web platform Fix the bug of inaccurate image size information in the image component load event of the vue2 project introduced in version 3.4.10 [Details](https://ask.dcloud.net.cn/question/147174)
+ App-iOS平台 修复 uni.request 访问特定接口可能数据解析出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/145530)
+ App-iOS platform fixes the bug that uni.request accessing a specific interface may cause garbled data parsing [Details](https://ask.dcloud.net.cn/question/145530)
+ 【重要】uni-AD 新增 激励视频广告支持实时竞价 [详情](https://uniapp.dcloud.io/uni-ad.html#bidding)
+ [Important] uni-AD added rewarded video ads to support real-time bidding [Details](https://uniapp.dcloud.io/uni-ad.html#bidding)
+ iOS平台 更新 uni-AD 今日头条穿山甲SDK为 4.5.1.6 版
+ iOS platform update uni-AD Jinri Toutiao pangolin SDK to version 4.5.1.6
+ iOS平台 更新 百度定位SDK为 2.0.0 版，百度地图SDK为 6.5.0 版
+ iOS platform update Baidu positioning SDK to version 2.0.0, Baidu map SDK to version 6.5.0
+ iOS平台 修复 5+App项目获取5G网络类型错误的Bug
+ iOS platform fixed the bug that the 5+App project got the wrong 5G network type
+ iOS平台 更新 uni-AD 废弃DCADManager、DCADManagerDelegate(AppDelegate中相关内容删除即可)
+ iOS platform update uni-AD to discard DCADManager, DCADManagerDelegate (delete relevant content in AppDelegate)


## 3.4.12.20220523-alpha
无
none

## 3.4.11.20220520-alpha
App平台 修复 nvue 页面 switch 组件切换状态无限闪动的Bug [详情](https://ask.dcloud.net.cn/question/145272)
App platform Fix the bug that the switching status of the switch component on the nvue page flickers infinitely [Details](https://ask.dcloud.net.cn/question/145272)
+ App平台 修复 纯 nvue 编译模式 uni_modules 内静态资源未拷贝的Bug
+ App platform fixed the bug that static resources in uni_modules in pure nvue compilation mode were not copied
+ App-iOS平台 修复 vue3 项目 nvue 页面 swiper 组件面板指示点无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/145097)
+ App-iOS platform fixes the bug that the indicator point of the swiper component panel of the vue3 project nvue page cannot be hidden [Details](https://ask.dcloud.net.cn/question/145097)
+ 更新 uni-AD 腾讯优量汇SDK iOS为 4.13.65 版；快手广告SDK iOS为 3.3.24 版；百度百青藤广告SDK iOS为 4.87 版
+ Update uni-AD Tencent Youlianghui SDK iOS to version 4.13.65; Kuaishou Advertising SDK iOS to version 3.3.24; Baidu Baiqingteng Advertising SDK iOS to version 4.87

## 3.4.10.20220517-alpha
+ App、H5平台 优化 image 组件减少网络请求
+ App, H5 platform optimize image components to reduce network requests
+ App、H5平台 修复 canvas transform 渲染时没有使用高清处理的Bug [详情](https://ask.dcloud.net.cn/question/144676)
+ App, H5 platform Fixed the bug that canvas transform did not use high-definition processing when rendering [Details](https://ask.dcloud.net.cn/question/144676)
+ App平台、微信小程序平台 新增 vue3 ad-rewarded-video 激励视频广告组件，更加易用 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
+ Added vue3 ad-rewarded-video rewarded video ad component on App platform and WeChat applet platform, making it easier to use [Details](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
+ App平台、微信小程序平台 新增 vue3 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
+ Added vue3 ad-interstitial interstitial component on App platform and WeChat applet platform [Details](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
+ App平台 新增 vue3 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
+ App platform added vue3 ad-fullscreen-video full-screen video ad component [Details](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
+ App平台 修复 vue3 项目使用录音时报错的Bug [详情](https://ask.dcloud.net.cn/question/144821)
+ App platform fixed the bug that the vue3 project reported an error when using recording [Details](https://ask.dcloud.net.cn/question/144821)
+ App平台 修复 vue3 项目 纯 nvue 项目编译报错的Bug
+ App platform fixes the bug that the vue3 project and the pure nvue project compile an error
+ App平台 修复 nvue 页面列表删除渲染卡顿的Bug [详情](https://ask.dcloud.net.cn/question/144110)
+ App platform fix nvue page list deletion bug [details](https://ask.dcloud.net.cn/question/144110)
+ App平台 修复 nvue 页面 transition 包含多个属性时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/89110)
+ App platform Fix the bug that the nvue page transition contains multiple attributes and compile errors [Details](https://ask.dcloud.net.cn/question/89110)

## 3.4.9.20220508-alpha
+ App-iOS平台 修复 nvue textarea 组件默认换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/143784)
+ App-iOS platform fixes the bug that the default line break of the nvue textarea component does not take effect [Details](https://ask.dcloud.net.cn/question/143784)
+ App-iOS平台 修复 nvue map 组件开启标记点聚合时，调用 removeMarkers 移除所有 marker 引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143991)
+ App-iOS platform Fix the bug that when the nvue map component enables marker aggregation, call removeMarkers to remove all markers and cause the app to crash [Details](https://ask.dcloud.net.cn/question/143991)
+ 修复 音频播放 AudioPlayer 暂停后设置播放倍速大于 0 会自动触发播放的Bug [详情](https://ask.dcloud.net.cn/question/143757)
+ Fix the bug that after the AudioPlayer is paused, setting the playback speed greater than 0 will automatically trigger the playback [Details](https://ask.dcloud.net.cn/question/143757)


## 3.4.8.20220428-alpha
 + 新增 vue3 项目内置支持 pinia [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
 + Added built-in pinia support for vue3 projects [Details](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
 + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [详情](https://ask.dcloud.net.cn/question/143578)
 + Fix the bug that the vue3 project using pinia caused by version 3.4.6 [details](https://ask.dcloud.net.cn/question/143578)
 + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/3458)
 + Fixed the bug that the compilation of the vue3 project was slow in some cases caused by the 3.4.6 version [Details](https://github.com/dcloudio/uni-app/issues/3458)
 + App平台、H5平台 修复 canvas 组件画图裁剪异常的Bug [详情](https://ask.dcloud.net.cn/question/142494)
 + App platform, H5 platform Fix the bug that the canvas component draws and crops abnormally [Details](https://ask.dcloud.net.cn/question/142494)
 + App平台、微信小程序平台 新增 vue2 ad-rewarded-video 激励视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
 + Added vue2 ad-rewarded-video rewarded video ad component on App platform and WeChat applet platform [Details](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
 + App平台、微信小程序平台 新增 vue2 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
 + Added vue2 ad-fullscreen-video full-screen video ad component on App platform and WeChat applet platform [Details](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
 + App平台、微信小程序平台 新增 vue2 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
 + Added vue2 ad-interstitial interstitial component on App platform and WeChat applet platform [Details](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
 + App平台 修复 vue3 nvue 页面引用的静态资源编译后可能不存在的Bug
 + App platform Fixed the bug that the static resource referenced by the vue3 nvue page may not exist after compilation
 + App平台 修复 vue3 nvue 页面事件无法冒泡的Bug
 + App platform fixed the bug that vue3 nvue page events could not bubble
 + App平台 修复 vue3 nvue input，textarea 组件的 v-model 不生效的Bug [详情](https://ask.dcloud.net.cn/question/143547)
 + App platform fix the vue3 nvue input, the v-model of the textarea component does not take effect Bug [details](https://ask.dcloud.net.cn/question/143547)
 + App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/143377)
 + App platform Fix the bug that the animation-type and animation-duration properties of the navigator component are invalid [Details](https://ask.dcloud.net.cn/question/143377)
 + App平台 修复 vue3 nvue movable 组件使用异常的Bug [详情](https://ask.dcloud.net.cn/question/143742)  
 + App platform fix the bug that the vue3 nvue movable component is used abnormally [details](https://ask.dcloud.net.cn/question/143742)
 + App平台 修复 3.4.2 版本引发的 ArrayBuffer 类型判断错误的Bug [详情](https://ask.dcloud.net.cn/question/143534)
 + App platform Fixed the bug of wrong judgment of ArrayBuffer type caused by version 3.4.2 [Details](https://ask.dcloud.net.cn/question/143534)
 + App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/137505)
 + App-iOS platform fixes the bug that the nvue swiper component conflicts with the page return gesture [Details](https://ask.dcloud.net.cn/question/137505)
 
 + 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.63 版；今日头条穿山甲SDK iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.23 版，iOS为 3.3.23 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK iOS为 4.861 版；Sigmob广告联盟SDK iOS为 4.1.0 版
 + Updated uni-AD Tencent Youlianghui SDK to version 4.462.1332 for Android and 4.13.63 for iOS; Toutiao Pangolin SDK for iOS to version 4.4.0.5; Kuaishou Advertising SDK for Android to version 3.3.23 and iOS to version 3.3.23 version; Kuaishou Content Alliance SDK iOS is version 3.3.28; Baidu Baiqingteng Advertising SDK iOS is version 4.861; Sigmob Advertising Alliance SDK iOS is version 4.1.0

 + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/143633)
 + iOS platform fixes the bug that the height of the bottom safe area is incorrect due to version 3.4.6 [Details](https://ask.dcloud.net.cn/question/143633)
 + iOS平台 修复 3.4.4版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
 + iOS platform fixed the bug that the warning `ITMS-90078: Missing Push Notification Entitlement` was reported when the Push module was not used to upload to the AppStore caused by version 3.4.4
* 【Uni小程序SDK】
* 【Uni Mini Program SDK】
 + iOS平台 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug
 + iOS platform fixed a bug that may cause a crash when opening the applet immediately after calling the closeWithCompletion method to close the applet

## 3.4.6.20220416-alpha
+ App平台 修复 vue3 项目 nvue map 组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/142159)
+ App platform Fix the bug that some properties of the vue3 project nvue map component are invalid [Details](https://ask.dcloud.net.cn/question/142159)
+ App平台 修复 InnerAudioContext 某些情况下 paused 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
+ App platform Fix the bug that the paused attribute value of InnerAudioContext is incorrect in some cases [Details](https://ask.dcloud.net.cn/question/141832)
+ App平台 修复 vue3 项目使用 vue-i18n 运行报错的Bug [详情](https://ask.dcloud.net.cn/question/142911)
+ App platform fixes the bug that the vue3 project uses vue-i18n to run the bug [details](https://ask.dcloud.net.cn/question/142911)
+ App平台 修复 vue3 项目 renderjs 在低版本手机可能运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3366)
+ App platform Fix the bug that the renderjs of the vue3 project may run on low-version mobile phones [details](https://github.com/dcloudio/uni-app/issues/3366)
+ App-iOS平台 修复 video 不支持 enable-play-gesture 属性的Bug [详情](https://ask.dcloud.net.cn/question/141862)
+ App-iOS platform fixes the bug that the video does not support the enable-play-gesture attribute [Details](https://ask.dcloud.net.cn/question/141862)
+ App-iOS平台 修复 nvue input 组件 confirm-hold 属性默认值不正确的Bug
+ App-iOS platform fixes the bug that the default value of the confirm-hold attribute of the nvue input component is incorrect
+ App-iOS平台 修复 nvue ad-content-page 显示位置可能偏移的Bug
+ App-iOS platform fix the bug that nvue ad-content-page display position may shift
+ iOS平台 修复 3.4.5版本 引出的 关闭页面动画异常的Bug [详情](https://ask.dcloud.net.cn/question/142797)
+ iOS platform fixed the bug of abnormal closing page animation caused by version 3.4.5 [Details](https://ask.dcloud.net.cn/question/142797)
+ iOS平台 修复 音频播放 AudioPlayer 获取暂停状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
+ iOS platform fixed the bug that AudioPlayer got inaccurate pause status [details](https://ask.dcloud.net.cn/question/141832)
+ iOS平台 修复 音频播放 AudioPlayer 暂停后再恢复播放倍速会重置为1的Bug [详情](https://ask.dcloud.net.cn/question/142848)
+ iOS platform fixed the bug that the AudioPlayer speed will be reset to 1 when the AudioPlayer is paused and resumed [Details](https://ask.dcloud.net.cn/question/142848)
+ iOS平台 修复 视频播放控件 video 在刘海屏设备全屏播放时进度条可能无法拖动的Bug [详情](https://ask.dcloud.net.cn/question/141862)
+ iOS platform fixed the bug that the progress bar of the video playback control video may not be able to be dragged when the video is played in full screen on Notch devices [Details](https://ask.dcloud.net.cn/question/141862)
+ iOS平台 修复 视频播放控件 video 设置 show-fullscreen-btn 属性为 false 时可能显示不正确的Bug
+ iOS platform fixed the bug that the video player control video may display incorrectly when the show-fullscreen-btn property is set to false


## 3.4.5.20220408-alpha
+ App平台 新增 InnerAudioContext、BackgroundAudioManager 支持倍速播放
+ App platform added InnerAudioContext, BackgroundAudioManager to support double-speed playback
+ App平台 修复 vue3 项目 App.vue 中的 css 可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3403)
+ App platform Fix the bug that css in App.vue of vue3 project may compile and report errors [details](https://github.com/dcloudio/uni-app/issues/3403)
+ App平台 修复 uni.getEnv 在 nvue webview 中返回值不准确的Bug [详情](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
+ App platform Fix the bug that uni.getEnv returns inaccurate values in nvue webview [Details](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
+ App-iOS平台 修复 在页面生命周期 onLoad 方法中调用 lockOrientation 锁定屏幕方向可能引起布局异常的Bug
+ App-iOS platform fixed the bug that calling lockOrientation in the onLoad method of the page life cycle to lock the screen orientation may cause layout exceptions
+ App-iOS平台 修复 3.4.4版本 引出的 tabBar 图标显示错位的Bug [详情](https://ask.dcloud.net.cn/question/142685)
+ App-iOS platform fixes the bug that the tabBar icon displayed in the 3.4.4 version is misplaced [Details](https://ask.dcloud.net.cn/question/142685)
+ iOS平台 修复 安心打包使用 swfit 开发的uni原生插件时上传 AppStore 报`ITMS-90426: Invalid Swift Support`错误的Bug [详情](https://ask.dcloud.net.cn/question/142611)
+ iOS platform fixes the bug of `ITMS-90426: Invalid Swift Support` error reported when uploading to AppStore when using the uni native plug-in developed by swfit [details](https://ask.dcloud.net.cn/question/142611)
+ iOS平台 修复 在 iOS15.4 及以上设备系统时间设置为12小时制 pickDate 返回值异常的Bug [详情](https://ask.dcloud.net.cn/question/141906)
+ iOS platform fixes the bug that the pickDate return value is abnormal when the system time of iOS15.4 and above devices is set to 12 hours [Details](https://ask.dcloud.net.cn/question/141906)

## 3.4.4.20220403-alpha
+ App平台、H5平台 新增 input 组件配置 ignoreCompositionEvent 属性 [详情](https://uniapp.dcloud.io/component/input?id=input)
+ App platform and H5 platform add input component configuration ignoreCompositionEvent property [details](https://uniapp.dcloud.io/component/input?id=input)
+ App平台 新增 tabbar 支持配置 iconfont [详情](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
+ App platform added tabbar support configuration iconfont [Details](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
+ App平台 修复 vue2 nvue 页面文本首尾回车符占用高度的Bug [详情](https://ask.dcloud.net.cn/question/95429)
+ App platform fixes the bug that the carriage return character at the beginning and end of the vue2 nvue page text takes up the height [Details](https://ask.dcloud.net.cn/question/95429)
+ App平台 修复 vue3 项目 uni.getSavedFileList、uni.getSavedFileInfo、uni.removeSavedFile、uni.getFileInfo 无效的Bug  [详情](https://ask.dcloud.net.cn/question/142428)
+ App platform Fix the invalid bug of uni.getSavedFileList, uni.getSavedFileInfo, uni.removeSavedFile, uni.getFileInfo of vue3 project [Details](https://ask.dcloud.net.cn/question/142428)
+ App-iOS平台 修复 video 组件 vslide-gesture-in-fullscreen 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/138299)
+ App-iOS platform fix the bug that video component vslide-gesture-in-fullscreen property is invalid [details](https://ask.dcloud.net.cn/question/138299)
+ App-iOS平台 修复 nvue image 组件不支持 gif 图片中设置循环次数参数的Bug [详情](https://ask.dcloud.net.cn/question/140176)
+ App-iOS platform fixes the bug that the nvue image component does not support setting the number of cycles parameter in the gif image [Details](https://ask.dcloud.net.cn/question/140176)
+ 新增 音频播放 AudioPlayer 支持 playbackRate 设置设置倍速播放 [文档](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
+ Added audio playback AudioPlayer supports playbackRate setting to set double speed playback [documentation](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
+ iOS平台 修复 视频播放控件 video 播放视频音量与系统音量不一致的Bug
+ iOS platform repaired the bug that the volume of the video playback control video playback video was inconsistent with the system volume


## 3.4.3.20220325-alpha
+ 【重要】App平台 nvue 页面支持 vue3（需要项目的 Vue 版本切换为3）[详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
+ [Important] App platform nvue page supports vue3 (need to switch the Vue version of the project to 3) [details](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
+ App平台、H5平台 新增 map 组件支持 polygons [详情](https://uniapp.dcloud.io/component/map)
+ App platform, H5 platform Add map component to support polygons [Details](https://uniapp.dcloud.io/component/map)
+ App平台、小程序平台 修复 vue3 项目配置 base 后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3362)
+ App platform, applet platform Fix the bug that the resource path may be wrong after the vue3 project configures base [details](https://github.com/dcloudio/uni-app/issues/3362)
+ App平台 新增 打开微信客服功能 [详情](https://uniapp.dcloud.io/api/plugins/share.html)
+ App platform added the function of opening WeChat customer service [Details](https://uniapp.dcloud.io/api/plugins/share.html)
+ App平台 修复 vue3 项目内联样式引用静态资源可能错误的Bug [详情](https://ask.dcloud.net.cn/question/141278)
+ App platform Fix the bug that the inline style of the vue3 project may be wrong when referencing static resources [Details](https://ask.dcloud.net.cn/question/141278)
+ App平台 新增 nvue ad-content-page 组件支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
+ Added nvue ad-content-page component on App platform to support content playback state events start, pause, resume, complete [Specification](https://uniapp.dcloud.io/component/ad-content-page.html#%E7 %9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB %B6)
+ App-iOS平台 修复 nvue swiper 组件内嵌 list-waterfall 时，横向滑动的同时列表还可以竖向滚动的Bug [详情](https://ask.dcloud.net.cn/question/134909)
+ App-iOS platform fix nvue swiper component embedded list-waterfall bug, the list can also scroll vertically while swiping horizontally [Details](https://ask.dcloud.net.cn/question/134909)
+ App-iOS平台 修复 nvue 页面内存在可滚动子组件时，开启 enablePullDownRefresh 下拉刷新功能无效的Bug
+ App-iOS platform Fix the bug that the enablePullDownRefresh pull-down refresh function is invalid when there are scrollable subcomponents in the nvue page
+ App平台 修复 vue3 组件 picker-view 调整列数据时渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/140609)
+ App platform Fix the bug of vue3 component picker-view rendering error when adjusting column data [Details](https://ask.dcloud.net.cn/question/140609)

## 3.4.1.20220308-alpha
+ App平台 修复 uni.getBackgroundAudioManager 的 onPrev onNext 事件无效Bug [详情](https://ask.dcloud.net.cn/question/107325)
+ App platform fix the invalid bug of onPrev onNext event of uni.getBackgroundAudioManager [Details](https://ask.dcloud.net.cn/question/107325)
+ App平台 修复 3.4.0 引发的 vue2 项目 canvas 组件 fillText 失效的Bug [详情](https://ask.dcloud.net.cn/question/140786)
+ App platform Fix the bug that the fillText of the canvas component of the vue2 project caused by 3.4.0 fails [Details](https://ask.dcloud.net.cn/question/140786)
+ App平台 修复 3.4.0 引发的 vue2 项目 nvue 页面的 uni.createLivePusherContext 无效Bug [详情](https://ask.dcloud.net.cn/question/140743)
+ App platform Fix the invalid bug of uni.createLivePusherContext on the vue2 project nvue page caused by 3.4.0 [Details](https://ask.dcloud.net.cn/question/140743)
+ App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [详情](https://ask.dcloud.net.cn/question/140644)
+ App platform Fix the style bug caused by inconsistent scopeId values when the vue3 project navigator component and rich-text component are nested and used [Details](https://ask.dcloud.net.cn/question/140644)
+ App-iOS平台 修复 nvue map 组件 marker 的 joinCluster 为 false 时 removeMarkers 方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/140648)
+ App-iOS platform fixes the bug that the removeMarkers method does not take effect when the joinCluster of the nvue map component marker is false [Details](https://ask.dcloud.net.cn/question/140648)
+ App-iOS平台 修复 nvue rich-text 组件 text-overflow 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/140586)
+ App-iOS platform fixes the bug that the text-overflow style of the nvue rich-text component does not take effect [Details](https://ask.dcloud.net.cn/question/140586)
* 【UniMPSDK】
	+ iOS平台 修复 小程序SDK中设置 user-agent 影响宿主原生页面中 Webview 的Bug
	+ iOS platform fixes the bug that setting user-agent in the Mini Program SDK affects the Webview in the native page of the host


## 3.4.0.20220304-alpha
+ App平台、H5平台 优化 取消全局 canvas 高清处理，支持配置单个 canvas 组件 hidpi 属性
+ App platform, H5 platform optimization Cancel the global canvas high-definition processing, support the configuration of a single canvas component hidpi attribute
+ App平台、H5平台 修复 自定义组件监听 tap.native 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3259)
+ App platform, H5 platform Fix the bug that the custom component monitoring tap.native does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3259)
+ App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [详情](https://ask.dcloud.net.cn/question/139432)
+ App platform, H5 platform Fix the bug that the vue3 project uni.pageScrollTo does not take effect when the duration is 0 [Details](https://ask.dcloud.net.cn/question/139432)
+ App平台、H5平台 修复 vue3 项目 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
+ App platform, H5 platform Fix the bug that an error is reported when the input component type of the vue3 project is number when the low version webview loses focus [Details](https://ask.dcloud.net.cn/question/138088)
+ App平台 新增 地图支持 Google地图 [详情](https://uniapp.dcloud.net.cn/app-maps)
+ Added map support for App platform Google Maps [Details](https://uniapp.dcloud.net.cn/app-maps)
+ App平台 新增 支付支持 Paypal、Stripe、Google Pay [详情](https://uniapp.dcloud.io/app-payment-paypal)
+ App platform added payment support Paypal, Stripe, Google Pay [Details](https://uniapp.dcloud.io/app-payment-paypal)
+ App平台 新增 登录支持 Google、Facebook [详情](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
+ App platform added login support Google, Facebook [details](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
+ App平台 新增 vue 页面 video 组件支持 vslide-gesture、vslide-gesture-in-fullscreen 属性 [详情](https://uniapp.dcloud.io/component/video)
+ Added vue page video component on App platform to support vslide-gesture, vslide-gesture-in-fullscreen attributes [details](https://uniapp.dcloud.io/component/video)
+ App平台 新增 pages.json 支持在 style 配置 disableSwipeBack 以禁用 iOS 侧滑返回
+ App platform added pages.json to support configuring disableSwipeBack in style to disable iOS side-swipe back
+ App平台 修复 uni.addPhoneContact 重复添加联系人的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
+ App platform fixes the bug of repeatedly adding contacts in uni.addPhoneContact [details](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
+ App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3240)
+ App platform Fix the bug that the event listener reports an error when the vue3 project uses html native tags (such as div) [Details](https://github.com/dcloudio/uni-app/issues/3240)
+ App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
+ App-iOS platform fixes the bug of starting a white screen when debugging a vue3 project
+ 新增 支持Google地图 [详情](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
+ Added support for Google Maps [Details](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
+ 【重要】uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
+ [Important] uni-AD has added Baidu Baiqingteng Advertising Alliance, which supports open screen, interstitial screen, and rewarded video ads [Details](https://ask.dcloud.net.cn/article/36769)
+ iOS平台 新增 uni原生插件支持 applicationMain 获取 main 函数启动参数 argc、argv [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb%e7%bb%9f%e4%ba%8b%e4%bb%b6)
+ Added uni native plug-in on iOS platform to support applicationMain to get main function startup parameters argc and argv [documentation](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb% e7%bb%9f%e4%ba%8b%e4%bb%b6)
+ iOS平台 修复 Webview窗口标题栏 titleNView无法动态更新网络页面标题的Bug [详情](https://ask.dcloud.net.cn/question/138958)
+ iOS platform fixed the bug that the title bar of the Webview window titleNView could not dynamically update the title of the web page [Details](https://ask.dcloud.net.cn/question/138958)
+ iOS平台 修复 compressVideo 视频压缩可能出现尺寸错乱的Bug [详情](https://ask.dcloud.net.cn/question/138303)
+ iOS platform fixed the bug that compressVideo video compression may have wrong size [Details](https://ask.dcloud.net.cn/question/138303)
+ iOS平台 修复 微博分享 type 为 web 时无法正常分享的Bug [详情](https://ask.dcloud.net.cn/question/138830)
+ iOS platform fixed the bug that the Weibo sharing type was web and could not be shared normally [Details](https://ask.dcloud.net.cn/question/138830)
+ iOS平台 修复 播放背景音频时系统锁屏界面音乐播放器的进度条可能显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/140101)
+ iOS platform fixes the bug that the progress bar of the music player on the system lock screen may display incorrectly when playing background audio [Details](https://ask.dcloud.net.cn/question/140101)
+ iOS平台 修复 关闭小程序后快速启动小程序并直达页面，重复操作偶现崩溃的Bug
+ iOS platform repaired the bug that the applet could be quickly launched after closing the applet and went directly to the page, and repeated operations occasionally crashed the bug

### 3.3.8

### 3.3.7
+ 【重要】新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
+ [Important] Added Payment module to support Paypal payment, Stripe payment, Google payment [Documentation](https://uniapp.dcloud.io/app-payment)
+ 【重要】新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
+ [Important] Added Push module to support Google Push Firebase Cloud Push (FCM) [documentation](https://uniapp.dcloud.io/app-push-fcm)
+ 【重要】新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
+ [Important] Added Statistic module to support Google statistics [documentation](https://uniapp.dcloud.io/app-statistic-google)
 
+ App平台、H5平台 新增 textarea、input 组件支持 confirm-hold 属性 [详情](https://uniapp.dcloud.io/component/input)
+ Added textarea and input components on App platform and H5 platform to support confirm-hold attribute [Details](https://uniapp.dcloud.io/component/input)
+ App平台、H5平台 优化 image 组件 draggable 属性默认值改为 false
+ App platform, H5 platform optimized image component draggable property default value changed to false
+ App平台 优化 uni.request 请求参数支持 ArrayBuffer 类型
+ App platform optimized uni.request request parameter to support ArrayBuffer type
+ App平台 修复 vue3 项目 发行后 renderjs 调用 ownerInstance.callMethod 失效的Bug [详情](https://ask.dcloud.net.cn/question/137832)
+ App platform Fix the bug that renderjs calls ownerInstance.callMethod invalid after the release of vue3 project [Details](https://ask.dcloud.net.cn/question/137832)
+ App平台 修复 vue3 项目 picker 组件默认语言固定为英文的Bug [详情](https://ask.dcloud.net.cn/question/136954)
+ App platform Fix the bug that the default language of the picker component of the vue3 project is fixed to English [Details](https://ask.dcloud.net.cn/question/136954)
+ App-iOS平台 修复 nvue swiper-list 组件滚动条无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/136261)
+ App-iOS platform fixed the bug that the nvue swiper-list component scroll bar could not be hidden [Details](https://ask.dcloud.net.cn/question/136261)
 
+ 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
+ Added one-click login to support closeIcon property to set custom close button image [documentation](https://uniapp.dcloud.io/univerify)
+ 更新 uni-AD 快手广告SDK Android为 3.3.20 版，iOS为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版， iOS为 3.3.27 版
+ Update uni-AD Kuaishou Advertising SDK Android to version 3.3.20, iOS to version 3.3.20; Kuaishou Content Alliance SDK to Android version 3.3.27, iOS to version 3.3.27
+ iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
+ iOS platform repaired the bug that the applet was not running in the background, and the applet was closed by gestures and then quickly opened the bug that the applet crashed occasionally
+ iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
+ iOS platform fixed the bug that reopening the same applet was invalid in the callback method of hiding the applet
+ iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug
+ iOS platform fixed the bug that when multiple applets are opened at the same time getCurrentPageUrl gets the wrong path of the currently displayed applet page
+ iOS平台 修复 uni-AD 使用自定义 storyboard 时开屏广告底部应用图标、名称可能不显示的Bug
+ iOS platform fixed the bug that the application icon and name at the bottom of the splash ad might not be displayed when uni-AD uses a custom storyboard

### 3.3.6
+ 【重要】App平台 修复 uni.getLocation 参数 type 配置不生效的Bug [详情](https://ask.dcloud.net.cn/article/39552)
+ [Important] App platform fixes the bug that the uni.getLocation parameter type configuration does not take effect [Details](https://ask.dcloud.net.cn/article/39552)
+ App平台 修复 nvue 页面使用 scss/sass 时条件编译不生效的Bug
+ App platform Fix the bug that the conditional compilation does not take effect when the nvue page uses scss/sass
+ App平台 修复 vue3 项目 input/textarea 组件使用 v-model 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3107)
+ App platform Fix the bug that the input/textarea component of the vue3 project does not work when using v-model [Details](https://github.com/dcloudio/uni-app/issues/3107)
+ App平台 修复 vue3 项目 picker-view 组件报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3130)
+ App platform Fix the bug that the picker-view component of the vue3 project reported an error [details](https://github.com/dcloudio/uni-app/issues/3130)

### 3.3.2
+ App平台、H5平台 修复 vue2 项目缺失 uni.previewImage.cancel 国际化的Bug [详情](https://ask.dcloud.net.cn/question/136054)
+ App platform, H5 platform Fix the bug that the vue2 project is missing uni.previewImage.cancel internationalization [Details](https://ask.dcloud.net.cn/question/136054)
+ App平台 修复 vue3 项目 部分样式在低版本手机上不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3073)
+ App platform Fix the bug that some styles of the vue3 project do not work on low-version phones [Details](https://github.com/dcloudio/uni-app/issues/3073)
+ App-Android平台 修复 3.3.1 版本引出的 input 组件在执行 uni.chooseLocation 返回结果后可能无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/136394)
+ App-Android platform Fixed the bug that the input component introduced in version 3.3.1 may not be able to get the focus after executing uni.chooseLocation to return the result [Details](https://ask.dcloud.net.cn/question/136394)
+ App-iOS平台 修复 nvue map 组件当聚合簇中只有1个 marker 时，markertap 事件返回的 id 不正确的Bug [详情](https://ask.dcloud.net.cn/question/136245)
+ App-iOS platform fixes the bug that the id returned by the markertap event is incorrect when there is only 1 marker in the aggregation cluster of the nvue map component [Details](https://ask.dcloud.net.cn/question/136245)
+ 新增 uni-AD 支持设置是否关闭个性化推荐功能 [文档](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setPersonalizedAd)
+ Added uni-AD support to set whether to turn off the personalized recommendation function [documentation](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setPersonalizedAd)
+ 【重要】iOS平台 更新 云端打包环境 XCode 为 13.2.1 版、iOS SDK 为 15.2 版，解决提交 AppStore 审核报 ITMS-90901 警告的问题 [详情](https://ask.dcloud.net.cn/question/136405) 
+ [Important] The iOS platform has updated the cloud packaging environment XCode to version 13.2.1 and the iOS SDK to version 15.2 to solve the problem of submitting the AppStore review report ITMS-90901 warning [details](https://ask.dcloud.net.cn/ question/136405)
+ iOS平台 修复 uni-AD 后台切前台时开屏广告展示间隔时间设置无效及可能重复展示的Bug
+ iOS platform fixed the bug that the display interval setting of the opening screen advertisement was invalid and may be displayed repeatedly when the background of uni-AD was switched to the foreground

### 3.3.1
+ App平台 修复 vue3 项目使用 uni.canvasGetImageData 报错的Bug [详情](https://ask.dcloud.net.cn/question/134355)
+ App platform fixes the bug that the vue3 project uses uni.canvasGetImageData to report errors [details](https://ask.dcloud.net.cn/question/134355)
+ App平台 修复 vue3 项目使用 uni.showLoading 方法在不调用 hideLoading 时会运行两秒左右自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/135551)
+ App platform Fix the bug that the vue3 project uses the uni.showLoading method to run for about two seconds and close automatically when hideLoading is not called [Details](https://ask.dcloud.net.cn/question/135551)
+ App平台 修复 vue3 项目 开发期间页面热刷新不生效的Bug
+ App platform Fix the bug that the page hot refresh does not take effect during the development of the vue3 project
+ App平台 修复 vue3 项目 开发期间页面直达不生效的Bug
+ App platform Fix the bug that the direct access to the page does not take effect during the development of the vue3 project
+ App-iOS平台 修复 nvue rich-text 组件在页面中动态创建时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/135136)
+ App-iOS platform fixes the bug that may cause a crash when the nvue rich-text component is dynamically created in the page [Details](https://ask.dcloud.net.cn/question/135136)

+ 更新 uni-AD 快手广告SDK iOS为 3.3.19 版；快手内容联盟SDK iOS为 3.3.25 版
+ Update uni-AD Kuaishou Advertising SDK iOS to version 3.3.19; Kuaishou Content Alliance SDK iOS to version 3.3.25
+ iOS平台 修复 plus.nativeUI.showWaiting 在暗黑模式下默认文字颜色不正确的Bug
+ iOS platform fixed the bug that the default text color of plus.nativeUI.showWaiting was incorrect in dark mode
+ iOS平台 修复 二维码扫码 pdf417 码时识别中文字符为乱码的Bug
+ iOS platform fixed the bug that recognized Chinese characters as garbled characters when scanning QR codes and pdf417 codes
+ iOS平台 修复 本地相册选择进入编辑界面可能出现点击完成按钮无响应的Bug [详情](https://ask.dcloud.net.cn/question/135653)
+ iOS platform fixes the bug that there may be no response when clicking the Done button when selecting the local album to enter the editing interface [Details](https://ask.dcloud.net.cn/question/135653)

### 3.3.0 
+ App平台、H5平台 新增 uni.request 支持 PATCH 方法
+ Added uni.request support for PATCH method on App platform and H5 platform
+ App平台、H5平台 修复 swiper 组件开启衔接滑动点击指示器时切换问题 [详情](https://github.com/dcloudio/uni-app/issues/2985)
+ App platform, H5 platform Fix the switching problem when the swiper component is turned on and connected to slide and click on the indicator [Details](https://github.com/dcloudio/uni-app/issues/2985)
+ App平台 优化 nvue 页面默认文字大小更改为 16px
+ App platform optimization nvue page default text size changed to 16px
+ App平台 优化 innerAudioContext 支持多个音频同时播放
+ App platform optimized innerAudioContext to support multiple audios playing at the same time
+ App-Android平台 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug [详情](https://ask.dcloud.net.cn/question/134764)
+ App-Android platform fixes the bug that the font-size in the placeholder-class style of the nvue input component does not support the rpx unit [details](https://ask.dcloud.net.cn/question/134764)
+ App-iOS平台 修复 nvue 页面固定横屏启动时 rpx 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/134971)
+ App-iOS platform fixed the bug of rpx calculation error when nvue page fixed horizontal screen startup [details](https://ask.dcloud.net.cn/question/134971)

+ iOS平台 修复 uni-AD setSplashAd 关闭开屏广告可能不生效的Bug
+ iOS platform fixed the bug that the uni-AD setSplashAd may not take effect when closing the splash ad
+ iOS平台 修复 拍照和本地相册选择 crop 裁剪编辑图片 resize 参数默认值不正确的Bug
+ iOS platform fixed the bug that the default value of the resize parameter was incorrect when taking photos and local album selection crop, cropping and editing pictures
+ iOS平台 修复 uni原生插件 validArchitectures 配置不正确可能导致云端打包失败的Bug	
+ iOS platform fixed the bug that the incorrect configuration of the validArchitectures of the uni native plug-in may cause the cloud packaging to fail

### 3.2.15 
+ 【重要】iOS平台 修复 应用启动时间统计在网络服务异常时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/article/39448)
+ 【Important】IOS platform repaired the bug that the application startup time statistics may cause a crash when the network service is abnormal [Details](https://ask.dcloud.net.cn/article/39448)