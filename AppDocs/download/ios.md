如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**


## iOS 离线SDK - 正式版

### 2022年06月07日发布——HBuilderX（3.4.14.20220607） 

[百度云点击下载SDK，提取码: rvdy](https://pan.baidu.com/s/1ExtRytSAuOpGjl4e4m9Hdw?pwd=rvdy)

[和彩云点击下载SDK，提取码: RMe8](https://caiyun.139.com/m/i?115CoTI6yuCNs) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.14.20220607）版本生成本地打包App资源。

## 3.4.14.20220607

+ 【重要】App平台 优化 vue2 项目 view 组件实现方式，提高渲染性能。建议相关开发者升级
+ 新增 uni.getSystemInfo 添加 device、os、rom、host、browser、uni、app 等概念  [详情](https://uniapp.dcloud.io/api/system/info.html)
+ App、H5平台 优化 image 组件减少网络请求
+ App、H5平台 新增 uni.getDeviceInfo [详情](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
+ App、H5平台 新增 uni.getAppBaseInfo [详情](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
+ App、H5平台 新增 uni.getWindowInfo [详情](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
+ App、H5平台 修复 uni.canIUse 获取某些 api 的返回值不正确的Bug [详情](https://uniapp.dcloud.io/api/caniuse.html)
+ App、H5平台 修复 canvas transform 渲染时没有使用高清处理的Bug [详情](https://ask.dcloud.net.cn/question/144676)
+ App、H5平台 修复 canvas 组件画图裁剪异常的Bug [详情](https://ask.dcloud.net.cn/question/142494)
+ App平台、微信小程序平台 新增 ad-rewarded-video 激励视频广告组件，更易用、安全、高收益 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
+ App平台、微信小程序平台 新增 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
+ App平台 新增 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
+ App平台 修复 nvue 页面 switch 组件切换状态无限闪动的Bug [详情](https://ask.dcloud.net.cn/question/145272)
+ App平台 修复 纯 nvue 编译模式 uni_modules 内静态资源未拷贝的Bug
+ App平台 修复 vue3 项目使用录音时报错的Bug [详情](https://ask.dcloud.net.cn/question/144821)
+ App平台 修复 vue3 项目 纯 nvue 项目编译报错的Bug
+ App平台 修复 nvue 页面列表删除渲染卡顿的Bug [详情](https://ask.dcloud.net.cn/question/144110)
+ App平台 修复 nvue 页面 transition 包含多个属性时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/89110)
+ App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/143377)
+ App平台 修复 vue3 nvue movable 组件使用异常的Bug [详情](https://ask.dcloud.net.cn/question/143742)
+ App-iOS平台 修复 vue3 项目 nvue 页面 swiper 组件面板指示点无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/145097)
+ App-iOS平台 修复 nvue 页面滚动视图中设置 position 属性为 sticky 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/144303)
+ App-iOS平台 修复 nvue textarea 组件默认换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/143784)
+ App-iOS平台 修复 nvue map 组件开启标记点聚合时，调用 removeMarkers 移除所有 marker 引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143991)
+ App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/137505)

+ 【重要】调整 vue2版本客户端App平台对应的`context.PLATFORM`值由 `app-plus` 改为 `app`。此调整对 uni-id 有影响，详情请参考文档：[uni-id preferedAppPlatform](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#prefered-app-platform)
 
+ 修复 音频播放 audio 暂停后设置播放倍速大于 0 会自动触发播放的Bug [详情](https://ask.dcloud.net.cn/question/143757)
 
+ 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.65 版；今日头条穿山甲SDK Android为 4.5.1.1 版，iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.24 版，iOS为 3.3.24 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK Android为 9.212 版，iOS为 4.87 版；Sigmob广告联盟SDK Android为 3.5.9 版，iOS为 4.1.0 版
  
+ iOS平台 更新 一键登录 使用的个验SDK为 2.2.0.0 版，个推核心组件SDK为 1.2.7.0 版
+ iOS平台 修复 3.4.4版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
+ iOS平台 修复 登录鉴权、分享的 authorize 方法传入认证参数 options 不生效的Bug
+ iOS平台 修复 音频播放 audio 设置 startTime 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/146028)
+ iOS平台 修复 视频播放 video 播放 rtmp 协议直播流视频时声音只能通过扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/129703)
+ iOS平台 修复 视频播放 video 播放 rtmp/rtsp 协议视频时 timeupdate 事件返回当前播放时间 currentTime 始终为 0 的Bug



`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`

[百度网盘下载历史版本，提取码: rpxm](https://pan.baidu.com/s/1QV8sBsCeB9WUj96-JAdV6g?pwd=rpxm)

[和彩云点击下载SDK，提取码: vayS](https://caiyun.139.com/m/i?115CennPIe4AV) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版

### 2022年06月23日发布——HBuilderX（3.5.0.20220623-alpha）

[百度云点击下载SDK，提取码: cy34](https://pan.baidu.com/s/1d52yiPAK9QayZU-1nOheiA?pwd=cy34) 

[和彩云点击下载SDK，提取码: DtaQ](https://caiyun.139.com/m/i?115CoVG0HBS4U) 

## 3.5.0.20220623-alpha

+ 更新uni-app离线打包支持，需使用HBuilderX（3.5.0.20220623-alpha）版本生成本地打包App资源。
+ App、Web平台 修复 3.4.10 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/147174)
+ App-iOS平台 修复 uni.request 访问特定接口可能数据解析出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/145530)
+ 【重要】uni-AD 新增 激励视频广告支持实时竞价 [详情](https://uniapp.dcloud.io/uni-ad.html#bidding)
+ iOS平台 更新 uni-AD 今日头条穿山甲SDK为 4.5.1.6 版
+ iOS平台 更新 百度定位SDK为 2.0.0 版，百度地图SDK为 6.5.0 版
+ iOS平台 修复 5+App项目获取5G网络类型错误的Bug
+ iOS平台 更新 uni-AD 废弃DCADManager、DCADManagerDelegate(AppDelegate中相关内容删除即可)



`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
 		
					
[百度云点击下载历史版本，提取码: irm4](https://pan.baidu.com/s/1rXC-kedCUibqLy-eog9a0A?pwd=irm4) 

[和彩云点击下载历史版本，提取码: MXBr](https://caiyun.139.com/m/i?115CnXK2Z8mJm) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
