如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## iOS 离线SDK - 正式版

### 2021年3月29日发布 
[点击下载SDK，提取码: a6ij](https://pan.baidu.com/s/1Y5V7ErqRWLg4CMrW-Ddjvg)
+ 更新uni-app离线打包支持，需使用HBuilderX（3.1.6.20210326）版本生成本地打包App资源。
+ 新增 uni-AD 支持快手内容联盟 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.showContentPage)
+ 新增 plus.zip.compressVideo 支持压缩视频功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.compressVideo)
+ 更新 uni-AD 腾讯优量汇SDK Android为4.333.1203版；穿山甲SDK iOS为3.4.2.8版；快手联盟SDK Android为3.3.7版
+ iOS平台 新增 uni原生插件云端打包支持iOS Extension [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=ios-extension)
+ iOS平台 修复 从系统相册选择视频文件返回的大小和宽高不正确的Bug [详情](https://ask.dcloud.net.cn/question/117975)
+ iOS平台 修复 在 iOS14 系统返回安全区域的top不正确引起界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/117849)
+ iOS平台 修复 在 iPhone12 系列设备未适配底部安全区域的Bug [详情](https://ask.dcloud.net.cn/question/119291)
+ iOS平台 修复 视频播放控件 VideoPlayer 播放某些视频显示方向可能不正确的Bug
+ App-iOS平台 修复 nvue ad-draw 组件播放优量汇视频广告可能无声音的Bug
+ App-iOS平台 修复 subNVue input 组件获取焦点后隐藏页面时软键盘不会关闭的Bug [详情](https://ask.dcloud.net.cn/question/117872)
+ App-iOS平台 修复 nvue web-view 组件在应用设置 allowsInlineMediaPlayback 为 true 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/106864)
+ App-iOS平台 修复 nvue map 组件 polyline 设置 arrowIconPath 为自定义箭头图标无效的Bug [详情](https://ask.dcloud.net.cn/question/118538)
+ App-iOS平台 修复 nvue scroll-view 组件下添加过多子组件会有明显卡顿的Bug [详情](https://ask.dcloud.net.cn/question/118444)
  
  `注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`



[百度网盘下载历史版本，提取码: w35k](https://pan.baidu.com/s/1gZGJMaSqZQftqgEVtadvEg)



## iOS 离线SDK - Alpha版

### 2021年3月4日发布 
[点击下载SDK，提取码: 5c8e](https://pan.baidu.com/s/1IXXyK6Welkf-cD7Rq4N4JA)
+ 更新uni-app离线打包支持，需使用HBuilderX -alpha（3.1.6.20210318）版本生成本地打包App资源。
+ App-iOS平台 修复 nvue web-view 组件在应用设置 allowsInlineMediaPlayback 为 true 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/106864)
+ App-iOS平台 修复 nvue map 组件 polyline 设置 arrowIconPath 为自定义箭头图标无效的Bug [详情](https://ask.dcloud.net.cn/question/118538)

<!--
`注意:从3.1.5版本开始，iOS离线SDK不支持5+ App打包，如需打包5+ App请使用云打包；离线打包uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
-->

  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
  
[百度网盘下载历史版本，提取码: 4p3a](https://pan.baidu.com/s/1C0H4DhfI-wXG0NaR2AiE7g)
