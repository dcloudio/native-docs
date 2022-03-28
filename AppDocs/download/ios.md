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

### 2022年3月25日发布——HBuilderX（3.4.3.20220325-alpha）

[百度云点击下载SDK，提取码: yprp](https://pan.baidu.com/s/1TqleJbjeDUpS60syY2o3BA?pwd=yprp) 

[和彩云点击下载SDK，提取码: bUo9](https://caiyun.139.com/m/i?115Cnr9xfAPZt) 


## 3.4.3.20220325-alpha

+ 【重要】App平台 nvue 页面支持 vue3（需要项目的 Vue 版本切换为3）[详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
+ App平台、H5平台 新增 map 组件支持 polygons [详情](https://uniapp.dcloud.io/component/map)
+ App平台、小程序平台 修复 vue3 项目配置 base 后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3362)
+ App平台 新增 打开微信客服功能 [详情](https://uniapp.dcloud.io/api/plugins/share.html)
+ App平台 修复 vue3 项目内联样式引用静态资源可能错误的Bug [详情](https://ask.dcloud.net.cn/question/141278)
+ App平台 新增 nvue ad-content-page 组件支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
+ App-iOS平台 修复 nvue swiper 组件内嵌 list-waterfall 时，横向滑动的同时列表还可以竖向滚动的Bug [详情](https://ask.dcloud.net.cn/question/134909)
+ App-iOS平台 修复 nvue 页面内存在可滚动子组件时，开启 enablePullDownRefresh 下拉刷新功能无效的Bug
+ App平台 修复 vue3 组件 picker-view 调整列数据时渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/140609)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.4.3.20220325-alpha）版本生成本地打包App资源。


`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`
 					
[百度网盘下载历史版本，提取码: dprr](https://pan.baidu.com/s/1sDi8KsH7StwnSVDLxQW-1A?pwd=dprr)

[和彩云点击下载历史版本，提取码: qWBS](https://caiyun.139.com/m/i?115CnXBJ5or0O) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
