如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；


## iOS 离线SDK - 正式版

### 2021年10月29日发布——HBuilderX（3.2.12.20211029） 
[百度云点击下载SDK，提取码: xhuj](https://pan.baidu.com/s/1-KAIXB0Fb0GowFTUlAYxig)

[和彩云点击下载SDK，提取码: ttoi](https://caiyun.139.com/m/i?115CoobNNJRSd) 

+ App平台、H5平台 新增 支持设置动态配置 tabBarItem 显示隐藏 详情
+ App平台、H5平台 新增 uni.showModal 支持配置是否显示输入框 详情
+ App平台、H5平台 修复 vue3 项目 picker-view 组件部分情况下 value 错误的Bug 详情
+ App平台 新增 nvue map 组件 API MapContext.on 详情
+ App-iOS平台 修复 nvue list 组件在 iOS15 设备上可能出现空白内容的Bug 详情
+ App-iOS平台 修复 nvue map 组件 marker 的 label 属性值格式不正确时可能引起崩溃的Bug
+ App-iOS平台 修复 应用长时间后台运行再回到前台 tabbar 页面可能显示白屏的Bug
+ App-iOS平台 修复 nvue textarea 组件 padding 样式显示不正确的Bug 详情
+ App-iOS平台 修复 nvue list 中 header 组件在 iOS15 设备上存在默认 padding-top 的Bug 详情
 
+ 更新 uni-AD 今日头条穿山甲广告SDK iOS为4.1.0.0版；Sigmob广告联盟SDK Android为3.4.1版，iOS为3.4.2版
+ 修复 geolocation 设置 timeout 参数时无法获取位置信息并且在控制报错的Bug
+ iOS平台 修复 wgt热更新资源后再整包覆盖安装 App 导致获取不到之前 storage 保存的数据的Bug
+ iOS平台 修复 sqlite 在页面关闭时可能会自动关闭数据库的Bug 详情
+ iOS平台 修复 视频播放控件 VideoPlayer 设置 poster 后点播放按钮封面消失后播放器可能出现黑屏的Bug 详情
+ iOS平台 修复 显示模态弹窗如 actionSheet 引起系统状态栏文字颜色会自动变成黑色的Bug 详情
+ iOS平台 修复 打开悬浮红包广告可能引起崩溃或无法关闭广告页面的Bug 详情
+ iOS平台 修复 图片选择界面在 iOS15 设备上导航栏会显示白色的Bug 详情


`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`


[百度网盘下载历史版本，提取码: 1xf5](https://pan.baidu.com/s/1yumgw8Sif3RiyYFo_W1fSg)

[和彩云点击下载SDK，提取码: eQVd](https://caiyun.139.com/m/i?115CepCFexTXS) 

## iOS 离线SDK - Alpha版

### 2021年10月28日发布——HBuilderX（3.2.12.20211028-alpha）


[百度云点击下载SDK，提取码: qieq](https://pan.baidu.com/s/1a0iaBbzMuFzsiQ6y7MXw2g) 

[和彩云点击下载SDK，提取码: bYXh](https://caiyun.139.com/m/i?115CnqpTBlM1u) 
  
+ iOS平台 更新 uni-AD 今日头条穿山甲广告SDK 为4.1.0.0版


`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
    
[百度网盘下载历史版本，提取码: ah7b](https://pan.baidu.com/s/1OvCAocQAVtZuagqTXzzlvQ)

[和彩云点击下载SDK，提取码: muDv](https://caiyun.139.com/m/i?115CnWqMUQKHf) 


