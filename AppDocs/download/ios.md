如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**


## iOS 离线SDK - 正式版

### 2022年03月14日发布——HBuilderX（3.3.13.20220314） 

[百度云点击下载SDK，提取码: mt4v](https://pan.baidu.com/s/1Kvj5WQ9OGIf0NbNvj46e0Q?pwd=mt4v)

[和彩云点击下载SDK，提取码: r5si](https://caiyun.139.com/m/i?115CoVBh3q48m) 

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

[和彩云点击下载SDK，提取码: NAfn](https://caiyun.139.com/m/i?115CepieWDKEg) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版

### 2022年04月03日发布——HBuilderX（3.4.4.20220403-alpha）

[百度云点击下载SDK，提取码: gk5b](https://pan.baidu.com/s/19ZR4Gtk0Vbyf2oMoQJ4t4g?pwd=gk5b) 

[和彩云点击下载SDK，提取码: nomX](https://caiyun.139.com/m/i?115CnWzR3K8ty) 

## 3.4.4.20220403-alpha

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.4.20220403-alpha）版本生成本地打包App资源。

+ App平台、H5平台 新增 input 组件配置 ignoreCompositionEvent 属性 [详情](https://uniapp.dcloud.io/component/input?id=input)
+ App平台 新增 tabbar 支持配置 iconfont [详情](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
+ App平台 修复 vue2 nvue 页面文本首尾回车符占用高度的Bug [详情](https://ask.dcloud.net.cn/question/95429)
+ App平台 修复 vue3 项目 uni.getSavedFileList、uni.getSavedFileInfo、uni.removeSavedFile、uni.getFileInfo 无效的Bug  [详情](https://ask.dcloud.net.cn/question/142428)
+ App-iOS平台 修复 video 组件 vslide-gesture-in-fullscreen 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/138299)
+ App-iOS平台 修复 nvue image 组件不支持 gif 图片中设置循环次数参数的Bug [详情](https://ask.dcloud.net.cn/question/140176)
+ 新增 音频播放 AudioPlayer 支持 playbackRate 设置设置倍速播放 [文档](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
+ iOS平台 修复 视频播放控件 video 播放视频音量与系统音量不一致的Bug


`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
 									
[百度网盘下载历史版本，提取码: ybeh](https://pan.baidu.com/s/1H2do2sFO5ehI9HGw7Xb1Zw?pwd=ybeh)

[和彩云点击下载历史版本，提取码: hBf1](https://caiyun.139.com/m/i?115CnWzOhzWFk) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
