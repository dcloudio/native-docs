如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；


## iOS 离线SDK - 正式版

### 2021年12月29日发布——HBuilderX（3.3.5.20211229） 

[百度云点击下载SDK，提取码: cwgg](https://pan.baidu.com/s/150MMQEibDLd39jzDwg-TkQ?pwd=cwgg)

[和彩云点击下载SDK，提取码: Ukor](https://caiyun.139.com/m/i?115CepOuv0mHh) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.5.20211229）版本生成本地打包App资源。

+ App平台 修复 nvue 页面使用 scss/sass 时条件编译不生效的Bug
+ App平台 修复 vue3 项目 picker-view 组件报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3130)


`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`

[百度网盘下载历史版本，提取码: jvc2]( https://pan.baidu.com/s/1L-MsoBf5gy3lnQxfySDM7g?pwd=jvc2)

[和彩云点击下载SDK，提取码: Ni9Q](https://caiyun.139.com/m/i?115CnWvv3vbJB) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版

### 2022年1月12日发布——HBuilderX（3.3.7.20220112-alpha）

[百度云点击下载SDK，提取码: z4pm](https://pan.baidu.com/s/1ZAsdRjdPqZjm6lGRZ-Xvtg?pwd=z4pm) 

[和彩云点击下载SDK，提取码: L91a](https://caiyun.139.com/m/i?115CnqiD7SLTi) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.7.20220112-alpha）版本生成本地打包App资源。

+ 【重要】新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
+ 【重要】新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
+ 【重要】新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
 
+ App平台、H5平台 新增 textarea、input 组件支持 confirm-hold 属性 [详情](https://uniapp.dcloud.io/component/input)
+ App平台、H5平台 优化 image 组件 draggable 属性默认值改为 false
+ App平台 优化 uni.request 请求参数支持 ArrayBuffer 类型
+ App平台 修复 vue3 项目 发行后 renderjs 调用 ownerInstance.callMethod 失效的Bug [详情](https://ask.dcloud.net.cn/question/137832)
+ App平台 修复 vue3 项目 picker 组件默认语言固定为英文的Bug [详情](https://ask.dcloud.net.cn/question/136954)
+ App-iOS平台 修复 nvue swiper-list 组件滚动条无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/136261)
 
+ 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
+ 更新 uni-AD 快手广告SDK Android为 3.3.20 版，iOS为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版， iOS为 3.3.27 版
+ iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
+ iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
+ iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug
+ iOS平台 修复 uni-AD 使用自定义 storyboard 时开屏广告底部应用图标、名称可能不显示的Bug


 
`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
    			
[百度网盘下载历史版本，提取码: xk56](https://pan.baidu.com/s/1XRxHzekWMbeUuuBSgzBoug?pwd=xk56)

[和彩云点击下载历史版本，提取码: 98et](https://caiyun.139.com/m/i?115CoogyI75MC) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
