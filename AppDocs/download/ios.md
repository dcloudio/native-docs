如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；


## iOS 离线SDK - 正式版

### 2021年12月28日发布——HBuilderX（3.3.4.20211228） 

[百度云点击下载SDK，提取码: ejim](https://pan.baidu.com/s/1pI2_gNGeKoi0cy4PXbJoQw?pwd=ejim)

[和彩云点击下载SDK，提取码: d9VU](https://caiyun.139.com/m/i?115CnX09bDUGL) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.4.20211228）版本生成本地打包App资源。

+ App平台 修复 nvue 页面使用 scss/sass 时条件编译不生效的Bug
+ App平台 修复 vue3 项目 input/textarea 组件使用 v-model 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3107)


`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`

[百度网盘下载历史版本，提取码: j59y](https://pan.baidu.com/s/1llpO5WE2_sq8MhidbL9pDQ?pwd=j59y)

[和彩云点击下载SDK，提取码: ej39](https://caiyun.139.com/m/i?115CoowOfuUDC) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版

### 2021年12月18日发布——HBuilderX（3.3.2.20211218-alpha）

[百度云点击下载SDK，提取码: 1z3y](https://pan.baidu.com/s/1dBgpRuRCfsbqhsqBonzL2g) 

[和彩云点击下载SDK，提取码: 9f7o](https://caiyun.139.com/m/i?115Cop9op2lvV) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.3.1.20211214-alpha）版本生成本地打包App资源。

+ App平台、H5平台 修复 vue2 项目缺失 uni.previewImage.cancel 国际化的Bug [详情](https://ask.dcloud.net.cn/question/136054)
+ App平台 修复 vue3 项目 部分样式在低版本手机上不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3073)
+ App-Android平台 修复 3.3.1 版本引出的 input 组件在执行 uni.chooseLocation 返回结果后可能无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/136394)
+ App-iOS平台 修复 nvue map 组件当聚合簇中只有1个 marker 时，markertap 事件返回的 id 不正确的Bug [详情](https://ask.dcloud.net.cn/question/136245)
+ 新增 uni-AD 支持设置是否关闭个性化推荐功能 [文档](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setPersonalizedAd)
+ 【重要】iOS平台 更新 云端打包环境 XCode 为 13.2.1 版、iOS SDK 为 15.2 版，解决提交 AppStore 审核报 ITMS-90901 警告的问题 [详情](https://ask.dcloud.net.cn/question/136405) 
+ iOS平台 修复 uni-AD 后台切前台时开屏广告展示间隔时间设置无效及可能重复展示的Bug


 
`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
    	

[百度网盘下载历史版本，提取码: dz1d](https://pan.baidu.com/s/1DoMe2OFuI1B5tiE0BptWpg)

[和彩云点击下载历史版本，提取码: GBpn](https://caiyun.139.com/m/i?115CoV9SljCTn) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
