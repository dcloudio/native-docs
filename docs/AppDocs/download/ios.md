如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**


## iOS 离线SDK - 正式版

### 2022年12月09日发布——HBuilderX（3.6.13.20221209） 

[和彩云点击下载SDK，提取码: Ly21](https://caiyun.139.com/m/i?115CoV5LENqud) 

[百度云点击下载SDK，提取码: rvdy](https://pan.baidu.com/s/1ExtRytSAuOpGjl4e4m9Hdw?pwd=rvdy) (若下载后解压失败，使用和彩云下载)


+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.13.20221209）版本生成本地打包App资源。

## 3.6.13.20221209
  
+ App平台、Web平台 新增 暗黑模式（DarkMode） [详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
+ App平台、Web平台 新增 【ext api】 设备电量 uni.getBatteryInfo [详情](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
+ App平台、Web平台 新增 地理位置更新相关接口 [详情](https://uniapp.dcloud.net.cn/api/location/location-change.html)
+ App平台、Web平台 修复 picker 组件日期类型无法使用超出默认的年份范围值的Bug [详情](https://ask.dcloud.net.cn/question/131332)
+ App平台、Web平台 修复 iOS16 系统 input 组件 type=digit 无法输入小数点的Bug [详情](https://ask.dcloud.net.cn/question/154584)
+ App平台、Web平台 修复 editor 组件 insertImage 触发 input 事件没有 alt 属性的Bug [详情](https://ask.dcloud.net.cn/question/155163)
+ App平台、Web平台 修复 vue3 项目 editor 组件重新加载获取不到 EditorContext 的Bug [详情](https://ask.dcloud.net.cn/question/154702)
+ App平台、Web平台 修复 radio 组件禁用状态样式异常的Bug
+ App平台 新增 nvue picker-view 组件增加 mask-top-style、mask-bottom-style 属性 [详情](https://uniapp.dcloud.net.cn/component/picker-view.html)
+ App平台 新增 nvue list 组件支持 render-reverse 属性 [详情](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
+ App平台 新增 nvue 页面 MapContext 支持 setLocMarkerIcon 方法 [详情](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
+ App平台 新增 【ext api】 Wi-Fi 模块 [详情](https://uniapp.dcloud.net.cn/api/system/wifi.html)
+ App平台 新增 【ext api】 内存告警监听 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
+ App平台 优化 video 组件支持 title 属性 [详情](https://uniapp.dcloud.net.cn/component/video.html)
+ App平台 优化 Vue2 项目 component is 支持传入组件选项和构造函数 [详情](https://ask.dcloud.net.cn/question/140044)
+ App平台 修复 hover-class 属性不支持多个 class 的Bug [详情](https://ask.dcloud.net.cn/question/152506)
+ App平台 修复 vue3 项目 uts 插件 export default class 不生效的Bug [详情](https://ask.dcloud.net.cn/question/154164)
+ App平台 修复 vue3 项目 v-for 可能渲染失败的Bug [详情](https://ask.dcloud.net.cn/question/154836)
+ App平台 修复 vue3 项目 tabbar.broderStyle 自定义色值无效的Bug [详情](https://ask.dcloud.net.cn/question/150718)
+ App平台 修复 vue3 项目 nvue 页面 switch 组件 disabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/154577)
+ App平台 修复 Vue3 项目 template ref 会被代理的Bug
+ App平台 修复 Vue3 项目 设置导航栏背景色为 rgba 色值无效的Bug [详情](https://ask.dcloud.net.cn/question/135111)
+ App平台 修复 Vue3 项目 根节点 height:100% 无效的Bug [详情](https://ask.dcloud.net.cn/question/156564)
+ App平台 修复 Vue2 项目 移除页面根节点后导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155057)
+ App平台 修复 Vue2 项目 列表不使用 index 作为 key 时更新数据导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155238)
+ App平台 修复 nvue 首页设置 navigationBarTextStyle 无效的Bug [详情](https://ask.dcloud.net.cn/question/150485)
+ App平台 修复 nvue 页面 slider 组件某些情况下位置计算不准确的Bug [详情](https://ask.dcloud.net.cn/question/152714)
+ App平台 修复 uni.startSoterAuthentication（生物识别）识别错误时 loading 没有文字提示的Bug [详情](https://ask.dcloud.net.cn/question/157353)

+ App-iOS平台 修复 nvue swiper 组件使用 rpx 时在部分设备可能无法正常滑动切换的Bug [详情](https://ask.dcloud.net.cn/question/149260)
+ App-iOS平台 修复 在 iOS16 设备 nvue 页面关闭、开启下拉刷新效果时偶现崩溃的Bug
+ App-iOS平台 修复 3.6.0 版本引出的 nvue list 组件内使用 ad 信息流广告组件偶发渲染空白的Bug [详情](https://ask.dcloud.net.cn/question/155752)
+ App-iOS平台 修复 Vue3 项目录音播放无效的Bug [详情](https://ask.dcloud.net.cn/question/155741)
+ App-iOS平台 修复 UniPush 2.0 在vue2项目中 启用离线推送后，调用 uni.getPushClientId 某些情况下获取不到cid的Bug [详情](https://ask.dcloud.net.cn/question/158921)
 

+ 新增 plus.device.getDeviceId 获取匿名设备标识 [详情](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getDeviceId)
+ 新增 Record、Camera、Barcode、Orientation模块，解决iOS平台隐私合规检测可能报包含麦克风、相机/相册、运动等权限的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-modules.html#bcor)
+ 新增 Stripe支付支持设置账单信息 [详情](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
+ 更新 uni-AD 腾讯优量汇SDK Android为 4.492.1362 版，iOS为 4.13.90 版；快手广告SDK Android为3.3.32，iOS为 3.3.33 版；快手内容联盟SDK iOS为 3.3.32 版；今日头条穿山甲SDK Android为 4.9.0.8 版，iOS为 4.9.0.5 版；穿山甲GroMore广告SDK Android为 4.8.0.0 版，iOS为 3.8.0.2 版；Sigmob广告联盟SDK Android为 4.7.0 版，iOS为 4.5.0 版；百度百青藤广告SDK Android为 9.241 版，iOS为 4.901 版；华为广告SDK Android为 13.4.56.302 版
  
+ iOS平台 新增 云端打包支持原生应用配置文件 Info.plist 和资源目录 Resources [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios)
+ iOS平台 修复 使用`阿里百川电商`SDK 5.x版，云端打包报符号冲突错误的Bug [详情](https://ask.dcloud.net.cn/question/153138)
+ iOS平台 修复 3.6.0版本引出的 开屏广告自定义底部图片、背景色不生效的Bug
+ iOS平台 修复 视频播放控件 VideoPlayer 标题栏、进度条样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/153945)
+ iOS平台 修复 分享到微信收藏夹时跳转到朋友圈的Bug [详情](https://ask.dcloud.net.cn/question/155362)
+ iOS平台 修复 标题栏 titleNView 设置默认导航栏颜色可能导致与状态栏颜色不一致的Bug
+ iOS平台 修复 setUIStyle 设置暗黑模式可能无效的Bug
+ iOS平台 修复 IAP支付 订单数据 orderInfo 参数异常时引起应用假死的Bug
+ iOS平台 修复 plus.screen.lockOrientation、plus.screen.unlockOrientation 在 iOS16 设备无效的Bug [详情](https://ask.dcloud.net.cn/question/155357)
+ iOS平台 修复 播放音频时无法正常录音的Bug [详情](https://ask.dcloud.net.cn/question/157408)
+ iOS平台 修复 设置暗黑模式跟随系统主题可能无效的Bug
+ iOS平台 修复 plus.push.getClientInfoAsync 在应用热重启后调用不触发回调的Bug
+ iOS平台 更新 微信SDK 为 1.9.6 版




`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`


[和彩云点击下载SDK，提取码: PXar](https://caiyun.139.com/m/i?115CoV5It3EGy) 

[百度网盘下载历史版本，提取码: eag6](https://pan.baidu.com/s/1ruDn7ivw_8CUeTZfBIkeog?pwd=eag6)(若下载后解压失败，使用和彩云下载)




[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版


### 2022年12月07日发布——HBuilderX（3.6.12.20221207-alpha）


[和彩云点击下载SDK，提取码: LC9d](https://caiyun.139.com/m/i?115CepcwXPh4W)

[百度云点击下载SDK，提取码: nfre](https://pan.baidu.com/s/13NnafTM0CmkFNIHpkhvUiA?pwd=nfre) (若下载后解压失败，使用和彩云下载)


+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.12.20221207-alpha）版本生成本地打包App资源。

## 3.6.12.20221207-alpha

+ iOS平台 修复 3.6.11 版本引出的 显示开屏广告时弹出系统 alert 窗偶现崩溃的Bug

`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`


[和彩云点击下载历史版本，提取码: dPLZ](https://caiyun.139.com/m/i?115CoV5ECNz2d) 

[百度云点击下载历史版本，提取码: 43vf](https://pan.baidu.com/s/1dO3biaIebsV28ltc5J-BvQ?pwd=43vf) (若下载后解压失败，使用和彩云下载)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
