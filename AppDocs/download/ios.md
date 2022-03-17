如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；


## iOS 离线SDK - 正式版

### 2022年02月09日发布——HBuilderX（3.3.11.20220209） 

[百度云点击下载SDK，提取码: 54fz](https://pan.baidu.com/s/1qVN1vDWsCjswIxtstakgcg?pwd=54fz)

[和彩云点击下载SDK，提取码: zd5C](https://caiyun.139.com/m/i?115CepnnJSK6d) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.11.20220209）版本生成本地打包App资源。

+ App-iOS平台 修复 3.3.9 版本引出的 nvue swiper-list 组件中的 list 组件设置 show-scrollbar 为 false 时吸顶效果异常的Bug [详情](https://ask.dcloud.net.cn/question/138944)
+ iOS平台 修复 Downloader 下载图片文件可能失败的Bug [详情](https://ask.dcloud.net.cn/question/116101)


`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`


[百度网盘下载历史版本，提取码: ci8q](https://pan.baidu.com/s/103T7rnxCqSuStV4Hh-x3dA?pwd=ci8q)

[和彩云点击下载SDK，提取码: M4Rc](https://caiyun.139.com/m/i?115Cepnky7hTu) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版

### 2022年3月8日发布——HBuilderX（3.4.1.20220308-alpha）

[百度云点击下载SDK，提取码: 97re](https://pan.baidu.com/s/1dFK3ZKWNyBPaGl-tRacGWQ?pwd=97re) 

[和彩云点击下载SDK，提取码: B9WV](https://caiyun.139.com/m/i?115CnqUpJO3pp) 


+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.1.20220308-alpha）版本生成本地打包App资源。

## 3.4.1.20220308-alpha
+ App平台 修复 uni.getBackgroundAudioManager 的 onPrev onNext 事件无效Bug [详情](https://ask.dcloud.net.cn/question/107325)
+ App平台 修复 3.4.0 引发的 vue2 项目 canvas 组件 fillText 失效的Bug [详情](https://ask.dcloud.net.cn/question/140786)
+ App平台 修复 3.4.0 引发的 vue2 项目 nvue 页面的 uni.createLivePusherContext 无效Bug [详情](https://ask.dcloud.net.cn/question/140743)
+ App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [详情](https://ask.dcloud.net.cn/question/140644)
+ App-iOS平台 修复 nvue map 组件 marker 的 joinCluster 为 false 时 removeMarkers 方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/140648)
+ App-iOS平台 修复 nvue rich-text 组件 text-overflow 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/140586)
* 【UniMPSDK】
	+ iOS平台 修复 小程序SDK中设置 user-agent 影响宿主原生页面中 Webview 的Bug

## 3.4.0.20220304-alpha
+ App平台、H5平台 优化 取消全局 canvas 高清处理，支持配置单个 canvas 组件 hidpi 属性
+ App平台、H5平台 修复 自定义组件监听 tap.native 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3259)
+ App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [详情](https://ask.dcloud.net.cn/question/139432)
+ App平台、H5平台 修复 vue3 项目 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
+ App平台 新增 地图支持 Google地图 [详情](https://uniapp.dcloud.net.cn/app-maps)
+ App平台 新增 支付支持 Paypal、Stripe、Google Pay [详情](https://uniapp.dcloud.io/app-payment-paypal)
+ App平台 新增 登录支持 Google、Facebook [详情](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
+ App平台 新增 vue 页面 video 组件支持 vslide-gesture、vslide-gesture-in-fullscreen 属性 [详情](https://uniapp.dcloud.io/component/video)
+ App平台 新增 pages.json 支持在 style 配置 disableSwipeBack 以禁用 iOS 侧滑返回
+ App平台 修复 uni.addPhoneContact 重复添加联系人的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
+ App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3240)
+ App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
+ 新增 支持Google地图 [详情](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
+ 【重要】uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
+ iOS平台 新增 uni原生插件支持 applicationMain 获取 main 函数启动参数 argc、argv [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb%e7%bb%9f%e4%ba%8b%e4%bb%b6)
+ iOS平台 修复 Webview窗口标题栏 titleNView无法动态更新网络页面标题的Bug [详情](https://ask.dcloud.net.cn/question/138958)
+ iOS平台 修复 compressVideo 视频压缩可能出现尺寸错乱的Bug [详情](https://ask.dcloud.net.cn/question/138303)
+ iOS平台 修复 微博分享 type 为 web 时无法正常分享的Bug [详情](https://ask.dcloud.net.cn/question/138830)
+ iOS平台 修复 播放背景音频时系统锁屏界面音乐播放器的进度条可能显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/140101)
+ iOS平台 修复 关闭小程序后快速启动小程序并直达页面，重复操作偶现崩溃的Bug



`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
 		
					
[百度网盘下载历史版本，提取码: 368w](https://pan.baidu.com/s/18vlBzHc73YPb5vDgvCteWA?pwd=368w)


[和彩云点击下载历史版本，提取码: BcMF](https://caiyun.139.com/m/i?115Cep1viP7qB) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
