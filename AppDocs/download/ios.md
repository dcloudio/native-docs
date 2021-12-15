如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；


## iOS 离线SDK - 正式版

### 2021年11月22日发布——HBuilderX（3.2.16.20211122） 

[百度云点击下载SDK，提取码: f1ep](https://pan.baidu.com/s/1-tnbufeTJVAcCUDVHxXyIw)

[和彩云点击下载SDK，提取码: KEtP](https://caiyun.139.com/m/i?115CnqqksqrSM) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.16.20211122）版本生成本地打包App资源。

`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`

[百度网盘下载历史版本，提取码: bfie](https://pan.baidu.com/s/1DCya79ipB4VZ3oZ5QdPkRg)

[和彩云点击下载SDK，提取码: E7bY](https://caiyun.139.com/m/i?115CoV7zLueiT) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版

### 2021年12月2日发布——HBuilderX（3.3.0.20211130-alpha）

[百度云点击下载SDK，提取码: a8r4](https://pan.baidu.com/s/1kYA4htOApjRrtZHpj9w3UQ) 

[和彩云点击下载SDK，提取码: TzHB](https://caiyun.139.com/m/i?115CoV5bfuAx0) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.0.20211130-alpha）版本生成本地打包App资源。

+ App平台、H5平台 新增 uni.request 支持 PATCH 方法
+ App平台、H5平台 修复 swiper 组件开启衔接滑动点击指示器时切换问题 [详情](https://github.com/dcloudio/uni-app/issues/2985)
+ App平台 优化 nvue 页面默认文字大小更改为 16px
+ App平台 优化 innerAudioContext 支持多个音频同时播放
+ App-Android平台 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug [详情](https://ask.dcloud.net.cn/question/134764)
+ App-iOS平台 修复 nvue 页面固定横屏启动时 rpx 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/134971)

+ iOS平台 修复 uni-AD setSplashAd 关闭开屏广告可能不生效的Bug
+ iOS平台 修复 拍照和本地相册选择 crop 裁剪编辑图片 resize 参数默认值不正确的Bug
+ iOS平台 修复 uni原生插件 validArchitectures 配置不正确可能导致云端打包失败的Bug
  
`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
    	
[百度网盘下载历史版本，提取码: hnua](https://pan.baidu.com/s/1t90SfGft4ovy7MmlWQw9-w)

[和彩云点击下载SDK，提取码: u8A2](https://caiyun.139.com/m/i?115CnX83VtMF3) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
