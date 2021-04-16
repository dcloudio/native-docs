如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## iOS 离线SDK - 正式版

### 2021年4月14日发布 
[点击下载SDK，提取码: a6ij](https://pan.baidu.com/s/1Y5V7ErqRWLg4CMrW-Ddjvg)
+ 更新uni-app离线打包支持，需使用HBuilderX（3.1.9.20210413）版本生成本地打包App资源。
+ iOS平台 修复 uni-AD 仅开通增强开屏广告可能出现无法关闭spalsh页面的Bug
+ iOS平台 修复 应用覆盖安装后可能出现启动白屏的Bug
  
  `注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`



[百度网盘下载历史版本，提取码: w35k](https://pan.baidu.com/s/1gZGJMaSqZQftqgEVtadvEg)



## iOS 离线SDK - Alpha版

### 2021年4月16日发布 
[点击下载SDK，提取码: 5c8e](https://pan.baidu.com/s/1IXXyK6Welkf-cD7Rq4N4JA)
+ 更新uni-app离线打包支持，需使用HBuilderX -alpha（3.1.10.20210415）版本生成本地打包App资源。
+ 新增 uni-AD支持插屏广告 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createInterstitialAd)
+ 更新 uni-AD 腾讯优量汇SDK iOS为 4.12.4 版，穿山甲SDK 为 3.5.5.0 版；快手联盟SDK Android为 3.3.8 版
+ 新增 离线打包支持 AppKey 管理 [文档](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
+ 新增 压缩视频支持 filename 属性设置压缩后文件保存路径功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.CompressVideoOptions)
+ 优化 一键登录 未通过审核时云端打包后调用API返回 -7 错误 [规范](https://uniapp.dcloud.io/univerify?id=%e9%94%99%e8%af%af%e7%a0%81)
+ 修复 一键登录 授权界面显示后，调用原生模态窗口无法正常显示的Bug
+ 修复 存在开屏广告时 splashclosed 事件可能在启动界面关闭前触发的Bug
+ iOS平台 修复 uni-AD 仅开通增强开屏广告可能出现无法关闭spalsh页面的Bug
+ iOS平台 修复 Apple应用内支付 IAP 某些情况丢单无法恢复的Bug [文档](https://ask.dcloud.net.cn/article/497)
+ iOS平台 修复 应用覆盖安装后可能出现启动白屏的Bug
+ iOS平台 修复 从本地相册选择保存在 iCloud 的视频在下载失败时可能引起崩溃的Bug
+ iOS平台 修复 从本地相册选择gif图片预览时不能播放的Bug
+ iOS平台 修复 在 iPhone12 系列设备未适配底部安全区域的Bug [详情](https://ask.dcloud.net.cn/question/119291)
+ iOS平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
+ iOS平台 修复 视频播放控件 VideoPlayer 播放某些视频显示方向可能不正确的Bug
+ App-iOS平台 修复 picker 组件部分情况下显示异常的Bug [详情](https://ask.dcloud.net.cn/question/119591)
+ App-iOS平台 修复 nvue scroll-view 组件下添加过多子组件会有明显卡顿的Bug [详情](https://ask.dcloud.net.cn/question/118444)
+ App-iOS平台 修复 nvue map 组件 marker 标注的 label 设置 anchorY 偏移值无效的Bug [详情](https://ask.dcloud.net.cn/question/120953)
+ App-iOS平台 修复 nvue image 组件加载网络图片发送请求时没有携带 cookie 的Bug
+ App平台 新增 插屏广告 uni.createInterstitialAd [详情](https://uniapp.dcloud.net.cn/api/a-d/interstitial)
+ App平台、H5平台 新增 支持 uni.getVideoInfo 用于获取视频信息 [详情](https://uniapp.dcloud.io/api/media/video?id=getvideoinfo)
+ App平台、H5平台 优化 uni.chooseLocation 地图选点支持搜索更大范围
+ App平台、H5平台 优化 input 组件支持 cursor、selectionStart、selectionEnd 属性
+ App平台、H5平台 修复 uni.canvasToTempFilePath 参数 quality 无效的Bug [详情](https://ask.dcloud.net.cn/question/119596)
+ App平台、H5平台 修复 checkbox 组件 disabled 属性无相关样式的Bug 
+ App平台 新增 支持 uni.compressVideo 用于压缩视频 [详情](https://uniapp.dcloud.io/api/media/video?id=compressvideo)
+ App平台 优化 uni.chooseVideo 支持 compressed 参数
+ App平台 优化 video 组件支持 enable-play-gesture 属性
+ App平台 修复 image 组件加载后导致其他原生组件显示错位的Bug
+ App平台 修复 多列 picker 组件未设置 value 报错的Bug [#2561](https://github.com/dcloudio/uni-app/issues/2561)
+ App平台 修复 uni.getStorageInfo 获取信息中部分 key 未包含的Bug [#2577](https://github.com/dcloudio/uni-app/issues/2577)
+ App平台 修复 uni.getSystemInfo 返回的 system 信息未包含系统名称的Bug

`注意：HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`

`注意:从3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)


  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
  
[百度网盘下载历史版本，提取码: 4p3a](https://pan.baidu.com/s/1C0H4DhfI-wXG0NaR2AiE7g)
