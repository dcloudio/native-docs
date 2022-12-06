如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**


## iOS 离线SDK - 正式版

### 2022年11月21日发布——HBuilderX（3.6.5.20221121） 

[和彩云点击下载SDK，提取码: pkrF](https://caiyun.139.com/m/i?115CoBJVIuXjX) 

[百度云点击下载SDK，提取码: rvdy](https://pan.baidu.com/s/1ExtRytSAuOpGjl4e4m9Hdw?pwd=rvdy) (若下载后解压失败，使用和彩云下载)


+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.5.20221121）版本生成本地打包App资源。

## 3.6.5.20221121
无



`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`




[和彩云点击下载SDK，提取码: xSuv](https://caiyun.139.com/m/i?115CoBJSxZv4D) 

[百度网盘下载历史版本，提取码: pc5h](https://pan.baidu.com/s/1J-RyDBtF1x-HZHlRT5Zmpw?pwd=pc5h)(若下载后解压失败，使用和彩云下载)




[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版


### 2022年12月05日发布——HBuilderX（3.6.11.20221205-alpha）

[和彩云点击下载SDK，提取码: gK34](https://caiyun.139.com/m/i?115CnW58hcnK0)

[百度云点击下载SDK，提取码: nfre](https://pan.baidu.com/s/13NnafTM0CmkFNIHpkhvUiA?pwd=nfre) (若下载后解压失败，使用和彩云下载)


+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.11.20221205-alpha）版本生成本地打包App资源。

## 3.6.11.20221205-alpha

+ App平台 新增 【ext api】 Wi-Fi 模块 [详情](https://uniapp.dcloud.net.cn/api/system/wifi.html)
+ App平台 优化 Vue2 项目 component is 支持传入组件选项和构造函数 [详情](https://ask.dcloud.net.cn/question/140044)
+ App平台 修复 nvue 页面 slider 组件某些情况下位置位置计算不准确的Bug [详情](https://ask.dcloud.net.cn/question/152714)
+ App-iOS平台 补齐 【ext api】 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
+ App-iOS平台 修复 3.6.7 版本引出的 ad 组件偶现加载优量汇广告成功但无法正常渲染的Bug
+ 新增 Record、Camera、Barcode、Orientation模块，解决iOS平台隐私合规检测可能报包含麦克风、相机/相册、运动等权限的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-modules.html#bcor)
+ iOS平台 更新 uni-AD 快手广告SDK为 3.3.33 版；快手内容联盟SDK为 3.3.32 版；今日头条穿山甲SDK为 4.9.0.5 版；穿山甲GroMore广告SDK为 3.8.0.2 版
+ iOS平台 修复 IAP支付 订单数据 orderInfo 参数异常时引起应用假死的Bug
+ iOS平台 修复 3.6.10版本引出的 三方登录授权不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/158380)



`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`


[和彩云点击下载历史版本，提取码: BeZD](https://caiyun.139.com/m/i?115CeUWzHPKEs) 

[百度云点击下载历史版本，提取码: ee34](https://pan.baidu.com/s/1gKDtzW8Olby81XPlzs6PVQ?pwd=ee34) (若下载后解压失败，使用和彩云下载)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
