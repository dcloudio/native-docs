如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**


## iOS 离线SDK - 正式版

### 2022年06月30日发布——HBuilderX（3.4.18.20220630） 

[百度云点击下载SDK，提取码: rvdy](https://pan.baidu.com/s/1ExtRytSAuOpGjl4e4m9Hdw?pwd=rvdy)

[和彩云点击下载SDK，提取码: xOOE](https://caiyun.139.com/m/i?115Cnqw0gsFWK) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.18.20220630）版本生成本地打包App资源。

## 3.4.18.20220630
+ 修复 vue3 项目 onError 生命周期不生效的Bug
+ App、Web平台 修复 vue3 项目 uni.setTabBarItem 设置 pagePath 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3592)
+ App、Web平台 修复 3.4.14 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/147174)
+ App平台 优化 video 组件支持 show-mute-btn 配置
+ App平台 优化 vue3 项目 rich-text 组件支持服务端渲染
+ App平台 修复 vue3 项目 nvue 页面 onPageScroll，onReachBottom 不触发的Bug [详情](https://ask.dcloud.net.cn/question/145873)
+ App平台 修复 vue3 项目 uni.getVideoInfo 成功回调不执行Bug
+ iOS平台 修复 nvue ad-content-page 组件暂停后展示其它视频类广告，关闭广告可能引起组件后台自动播放的Bug
+ iOS平台 更新 uni-AD 快手广告SDK为 3.3.25 版，快手内容联盟SDK为 3.3.29 版，解决调用系统相册可能引起崩溃的问题


`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`


[百度网盘下载历史版本，提取码: 4sts](https://pan.baidu.com/s/15Eh97eEdfw3ybQhDiouEmA?pwd=4sts)

[和彩云点击下载SDK，提取码: EtRk](https://caiyun.139.com/m/i?115CnqvyLXcur) 

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
