如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**


## iOS 离线SDK - 正式版

### 2022年03月14日发布——HBuilderX（3.3.13.20220314） 

[百度云点击下载SDK，提取码: mt4v](https://pan.baidu.com/s/1Kvj5WQ9OGIf0NbNvj46e0Q?pwd=mt4v)

[和彩云点击下载SDK，提取码: Lm9X](https://caiyun.139.com/m/i?115CnWaazikEZ) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.13.20220314）版本生成本地打包App资源。

## 3.3.13.20220314
+ App平台、H5平台 修复 vue3 项目两个开启了下拉刷新的页面跳转后返回，下拉刷新不触发 onPullDownRefresh 生命周期的Bug [详情](https://github.com/dcloudio/uni-app/issues/3187)
+ App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [详情](https://ask.dcloud.net.cn/question/139432)
+ App平台 修复 vue3 项目 nvue 页面使用 map 组件时部分方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/138515)
+ App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3240)
+ App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [详情](https://ask.dcloud.net.cn/question/140644)
+ App平台 修复 vue3 项目 wxs/renderjs 监听事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3324)
+ App-iOS平台 修复 vue3 项目 canvas 组件绘制本地图像后无法导出到本地到Bug
+ App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
  
+ 更新 uni-AD 腾讯优量汇SDK iOS为 4.13.50 版；今日头条穿山甲SDK iOS为 4.3.0.2 版；快手广告SDK iOS为 3.3.21 版
+ iOS平台 修复 geitImageInfo 可能不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/139361)


`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`


[百度网盘下载历史版本，提取码: svpv](https://pan.baidu.com/s/1gXd3Z3AMnLi9J19ZhCKJ4w?pwd=svpv)

[和彩云点击下载SDK，提取码: BMwB](https://caiyun.139.com/m/i?115CnqbTrh21U) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版

### 2022年04月16日发布——HBuilderX（3.4.6.20220416-alpha）

[百度云点击下载SDK，提取码: 63av](https://pan.baidu.com/s/1LLGkN8qAlmwGbWGMnnK3YQ?pwd=63av) 

[和彩云点击下载SDK，提取码: Q9LN](https://caiyun.139.com/m/i?115CnqbdF1WTS) 

## 3.4.6.20220416-alpha

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.6.20220416-alpha）版本生成本地打包App资源。


+ App平台 修复 vue3 项目 nvue map 组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/142159)
+ App平台 修复 InnerAudioContext 某些情况下 paused 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
+ App平台 修复 vue3 项目使用 vue-i18n 运行报错的Bug [详情](https://ask.dcloud.net.cn/question/142911)
+ App平台 修复 vue3 项目 renderjs 在低版本手机可能运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3366)
+ App-iOS平台 修复 video 不支持 enable-play-gesture 属性的Bug [详情](https://ask.dcloud.net.cn/question/141862)
+ App-iOS平台 修复 nvue input 组件 confirm-hold 属性默认值不正确的Bug
+ App-iOS平台 修复 nvue ad-content-page 显示位置可能偏移的Bug
+ iOS平台 修复 3.4.5版本 引出的 关闭页面动画异常的Bug [详情](https://ask.dcloud.net.cn/question/142797)
+ iOS平台 修复 音频播放 AudioPlayer 获取暂停状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
+ iOS平台 修复 音频播放 AudioPlayer 暂停后再恢复播放倍速会重置为1的Bug [详情](https://ask.dcloud.net.cn/question/142848)
+ iOS平台 修复 视频播放控件 video 在刘海屏设备全屏播放时进度条可能无法拖动的Bug [详情](https://ask.dcloud.net.cn/question/141862)
+ iOS平台 修复 视频播放控件 video 设置 show-fullscreen-btn 属性为 false 时可能显示不正确的Bug


`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
 				
									
[百度网盘下载历史版本，提取码: c69z](https://pan.baidu.com/s/1cZlPdrczxyAbaGNEVnB9YA?pwd=c69z)

[和彩云点击下载历史版本，提取码: hktO](https://caiyun.139.com/m/i?115CnqbYYMHEp) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
