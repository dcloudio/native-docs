如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；


## iOS 离线SDK - 正式版

### 2021年11月20日发布——HBuilderX（3.2.15.20211120） 

[百度云点击下载SDK，提取码: 8i5c](https://pan.baidu.com/s/1yHeyawl34ZIHoXJK44olHA)

[和彩云点击下载SDK，提取码: C3D9](https://caiyun.139.com/m/i?115CoVFVp7050) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.15.20211120）版本生成本地打包App资源。

+ 【重要】iOS平台 修复 应用启动时间统计在网络服务异常时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/article/39448)

+ App平台、H5平台 新增 rich-text 组件支持 itemclick 事件 [详情](https://uniapp.dcloud.io/component/rich-text)
+ App平台、H5平台 新增 uni.setClipboardData 支持配置是否弹出提示 [详情](https://uniapp.dcloud.io/api/system/clipboard?id=setclipboarddata)
+ App平台、H5平台 新增 异步触发 uni.chooseImage 时，会进入失败回调 [详情](https://ask.dcloud.net.cn/question/130768)
+ App平台、H5平台 修复 picker-view 滚动时会触发页面下拉刷新的Bug [详情](https://ask.dcloud.net.cn/question/113718)
+ App平台、H5平台 修复 swiper 组件动态加载内容时，触摸造成显示异常的Bug [详情](https://ask.dcloud.net.cn/question/100684)
+ App平台 新增 NVUE map API poiSearchNearBy 支持 offset，poiKeywordsSearch 支持 offset、cityLimit [详情](https://uniapp.dcloud.net.cn/api/location/map?id=poisearchnearby)
+ App平台 新增 cover 组件支持嵌套 [详情](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
+ App平台 新增 nvue 页面支持 dynamicRpx 配置，用于 rpx 适配屏幕大小动态变化 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
+ App平台 修复 在 slot 使用 v-for 无法渲染的Bug [详情](https://ask.dcloud.net.cn/question/130258)
+ App平台 修复 editor 组件 a 标签 href 填写相对地址时渲染错误的Bug  [详情](https://github.com/dcloudio/uni-app/issues/2218)
+ App平台 修复 editor、rich-text 组件 img 本地路径图片渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/117245)

+ App-iOS平台 修复 editor 组件设置字体格式时，placeholder 显示异常的Bug [详情](https://ask.dcloud.net.cn/question/106127)
+ App-iOS平台 修复 uni.request 请求与其它网络请求 user-agent 不一致的Bug
+ App-iOS平台 修复 nvue cover-view 组件样式可能存在异常的Bug
+ App-iOS平台 修复 nvue image 组件请求网络图片与其它网络请求 user-agent 不一致的Bug
+ App-iOS平台 修复 nvue video 中 cover-view 组件的点击事件会透传到 video 中的Bug [详情](https://ask.dcloud.net.cn/question/132936)
+ App-iOS平台 修复 nvue map 组件设置 marker-callout-textAlign 属性为 center 不生效的Bug [详情](https://ask.dcloud.net.cn/question/133264)

+ iOS平台 新增 云端打包支持生成符号表 dsym 文件 [详情](https://uniapp.dcloud.io/app/ios/dsym)
+ iOS平台 更新 友盟统计SDK UMCommon 为 7.3.5 版，UMAPM 为 1.5.2 版
+ iOS平台 修复 基础开屏广告可能重复显示的Bug
+ iOS平台 修复 图片/视频选择界面中选择iCloud视频可能报错的Bug [详情](https://ask.dcloud.net.cn/question/133635)
+ iOS平台 修复 plus.navigator.getSignature 获取签名标识在应用通过 AppStore 或 Testflight 安装时 返回空值的Bug [详情](https://ask.dcloud.net.cn/question/133881)


`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`

[百度网盘下载历史版本，提取码: n1d4](https://pan.baidu.com/s/1ZfKdn9muRn5GsT_oydj0Cw)

[和彩云点击下载SDK，提取码: HjK2](https://caiyun.139.com/m/i?115CoVFTTmNPF) 

## iOS 离线SDK - Alpha版

### 2021年11月20日发布——HBuilderX（3.2.15.20211120-alpha）

[百度云点击下载SDK，提取码: a8r4](https://pan.baidu.com/s/1kYA4htOApjRrtZHpj9w3UQ) 

[和彩云点击下载SDK，提取码: uny5](https://caiyun.139.com/m/i?115CopEoF78mx) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.15.20211120-alpha）版本生成本地打包App资源。

+ 【重要】iOS平台 修复 应用启动时间统计在网络服务异常时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/article/39448)
  
`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
    
[百度网盘下载历史版本，提取码: g4vg](https://pan.baidu.com/s/1WbAFav1X_0hSkaRXQB1P_g)

[和彩云点击下载SDK，提取码: 985o](https://caiyun.139.com/m/i?115CoBGhsQx51) 


