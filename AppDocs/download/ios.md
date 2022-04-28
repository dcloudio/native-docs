如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**


## iOS 离线SDK - 正式版

### 2022年04月22日发布——HBuilderX（3.4.7.20220422） 

[百度云点击下载SDK，提取码: rvdy](https://pan.baidu.com/s/1ExtRytSAuOpGjl4e4m9Hdw?pwd=rvdy)

[和彩云点击下载SDK，提取码: nEP1](https://caiyun.139.com/m/i?115CeUbu1y8c5) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.7.20220422）版本生成本地打包App资源。

## 3.4.7.20220422

 + 新增 vue3 项目内置支持 pinia [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
 + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [详情](https://ask.dcloud.net.cn/question/143578)
 + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/3458)
 + App平台 修复 vue3 项目 nvue 页面引用的静态资源编译后可能不存在的Bug
 + App平台 修复 vue3 项目 nvue 页面事件无法冒泡的Bug
 + App平台 修复 vue3 项目 nvue 页面 input，textarea 组件的 v-model 不生效的Bug [详情](https://ask.dcloud.net.cn/question/143547)
 + App平台 修复 3.4.6 版本引发的 ArrayBuffer 类型判断错误的Bug [详情](https://ask.dcloud.net.cn/question/143534)

 + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/143633)
 + iOS平台 修复 3.4.6版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug


`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`




[百度网盘下载历史版本，提取码: svpv](https://pan.baidu.com/s/1PBSeUz395_Ehk1GPteaHNA?pwd=2s13)

[和彩云点击下载SDK，提取码: BnoS](https://caiyun.139.com/m/i?115Coo5xQt0Bv) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版

### 2022年04月28日发布——HBuilderX（3.4.8.20220428-alpha）

[百度云点击下载SDK，提取码: 63av](https://pan.baidu.com/s/1LLGkN8qAlmwGbWGMnnK3YQ?pwd=63av) 

[和彩云点击下载SDK，提取码: ZL2h](https://caiyun.139.com/m/i?115CnVnYjFgW8) 

## 3.4.8.20220428-alpha

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.8.20220428-alpha）版本生成本地打包App资源。


 + 新增 vue3 项目内置支持 pinia [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
 + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [详情](https://ask.dcloud.net.cn/question/143578)
 + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/3458)
 + App平台、H5平台 修复 canvas 组件画图裁剪异常的Bug [详情](https://ask.dcloud.net.cn/question/142494)
 + App平台、微信小程序平台 新增 vue2 ad-rewarded-video 激励视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
 + App平台、微信小程序平台 新增 vue2 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
 + App平台、微信小程序平台 新增 vue2 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
 + App平台 修复 vue3 nvue 页面引用的静态资源编译后可能不存在的Bug
 + App平台 修复 vue3 nvue 页面事件无法冒泡的Bug
 + App平台 修复 vue3 nvue input，textarea 组件的 v-model 不生效的Bug [详情](https://ask.dcloud.net.cn/question/143547)
 + App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/143377)
 + App平台 修复 vue3 nvue movable 组件使用异常的Bug [详情](https://ask.dcloud.net.cn/question/143742)  
 + App平台 修复 3.4.2 版本引发的 ArrayBuffer 类型判断错误的Bug [详情](https://ask.dcloud.net.cn/question/143534)
 + App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/137505)
 
 + 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.63 版；今日头条穿山甲SDK iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.23 版，iOS为 3.3.23 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK iOS为 4.861 版；Sigmob广告联盟SDK iOS为 4.1.0 版

 + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/143633)
 + iOS平台 修复 3.4.4版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
* 【Uni小程序SDK】
 + iOS平台 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug


`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
 				
									
[百度网盘下载历史版本，提取码: 6hru](https://pan.baidu.com/s/1KWQz1nTgigsa2LHpwI_05Q?pwd=6hru)

[和彩云点击下载历史版本，提取码: 58Oe](https://caiyun.139.com/m/i?115CnpmajvT2s) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
