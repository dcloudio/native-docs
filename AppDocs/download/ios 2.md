如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## iOS 离线SDK - 正式版

### 2021年8月19日发布——HBuilderX（3.2.2.20210818） 
[点击下载SDK，提取码: a6ij](https://pan.baidu.com/s/1Y5V7ErqRWLg4CMrW-Ddjvg)
+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.2.20210818）版本生成本地打包App资源。
+ 新增 一键登录 服务协议项样式支持设置复选框图标 [详情](https://uniapp.dcloud.io/univerify)
+ 优化 新浪微博 登录、分享 模块配置，去掉appsecret参数
+ 修复 一键登录 应用横屏显示时打开一键登录页面UI显示异常的Bug [详情](https://ask.dcloud.net.cn/question/126597)
+ iOS平台 更新 QQ 登录、分享SDK版本为V3.5.3；新浪微博 登录、分享SDK版本为3.3.1；微信 登录、分享、支付SDK版本为1.9.1
+ iOS平台 更新 UniPush 使用的个推SDK为2.5.10.0无IDFA版
+ iOS平台 修复 一键登录 设置服务协议复选框默认不勾选时授权按钮背景颜色显示不正确的Bug
+ iOS平台 修复 Downloader 下载文件返回的请求头 Content-Range 数据为空时引起应用崩溃的Bug
+ iOS平台 修复 Downloader 下载文件名称出现乱码或包含特殊字符，导致保存文件无法读取的Bug
+ iOS平台 修复 百度语音识别在用户拒绝录音权限时没有返回错误回调的Bug
+ iOS平台 修复 在 iOS14 设备使用 5G 网络可能引起崩溃的Bug

  `注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`



[百度网盘下载历史版本，提取码: w35k](https://pan.baidu.com/s/1gZGJMaSqZQftqgEVtadvEg)



## iOS 离线SDK - Alpha版

### 2021年5月26日发布——HBuilderX（3.1.16.20210525-alpha）
[点击下载SDK，提取码: 5c8e](https://pan.baidu.com/s/1IXXyK6Welkf-cD7Rq4N4JA)
+ 更新uni-app离线打包支持，需使用HBuilderX-alpha（3.1.16.20210525）版本生成本地打包App资源。
+ iOS平台 更新 百度语音识别 SDK 为 3.0.10.0 版
+ iOS平台 优化 相册目录选择操作界面

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
  
[百度网盘下载历史版本，提取码: 4p3a](https://pan.baidu.com/s/1C0H4DhfI-wXG0NaR2AiE7g)
