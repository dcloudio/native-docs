如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**


## iOS 离线SDK - 正式版

### 2022年09月22日发布——HBuilderX（3.6.4.20220922） 

[百度云点击下载SDK，提取码: rvdy](https://pan.baidu.com/s/1ExtRytSAuOpGjl4e4m9Hdw?pwd=rvdy)

[和彩云点击下载SDK，提取码: wLYN](https://caiyun.139.com/m/i?115CoA5Cy156K) 


+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.4.20220922）版本生成本地打包App资源。

## 3.6.4.20220922

+ iOS平台 更新 uni-AD 今日头条穿山甲SDK更新为 4.8.0.3 版，穿山甲Gromore SDK更新为 3.7.0.0 版
+ iOS平台 修复 uni-AD 穿山甲Gromore 激励视频偶现可能无法显示的Bug 详情
+ iOS平台 修复 3.6.2版本引出的 uni原生语言插件Hook不到applicationWillEnterForeground、applicationDidEnterBackground等系统事件的Bug
+ iOS平台 修复 安全检测可能报获取设备idfv的Bug

`注意：HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意：HX3.1.17版本之后，一键登录功能需要增加配置libGTCommonSDK-1.2.2.0.a库，否则可能编译报错`
    
`注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`


[百度网盘下载历史版本，提取码: qfq5](https://pan.baidu.com/s/1lsd9n5Gjmv3-cvWOpsIKpQ?pwd=qfq5)

[和彩云点击下载SDK，提取码: HUpB](https://caiyun.139.com/m/i?115CoA5AcgSUC) 

[历次更新说明](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版


### 2022年10月18日发布——HBuilderX（3.6.7.20221018-alpha）

[百度云点击下载SDK，提取码: dpgm](https://pan.baidu.com/s/12nF4fNrnNYf_UInwcEfsDA?pwd=dpgm) 

[和彩云点击下载SDK，提取码: FxNA](https://caiyun.139.com/m/i?115CnpXCgX5jQ) 

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.7.20221018-alpha）版本生成本地打包App资源。

## 3.6.7.20221018-alpha

+ 【重要】新增 uts iOS版插件。将uts代码转为swift代码。 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
+ 【重要】新增 `uni ext api`。将不常用的API剥离为uni_modules插件，但仍使用uni.开头的API。[详情](https://uniapp.dcloud.net.cn/api/extapi.html)
+ App平台、Web平台 新增 【ext api】 uni.getBatteryInfo [详情](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
+ App平台、Web平台 修复 picker 组件日期类型无法使用超出默认的年份范围值的Bug [详情](https://ask.dcloud.net.cn/question/131332)
+ App平台、Web平台 修复 iOS16 系统 input 组件 type=digit 无法输入小数点的Bug [详情](https://ask.dcloud.net.cn/question/154584)
+ App平台、Web平台 修复 editor 组件 insertImage 触发 input 事件没有 alt 属性的Bug [详情](https://ask.dcloud.net.cn/question/155163)
+ App平台、Web平台 修复 vue3 项目 editor 组件重新加载获取不到 EditorContext 的Bug [详情](https://ask.dcloud.net.cn/question/154702)
+ App平台 新增 nvue 页面 picker-view 组件增加 mask-top-style、mask-bottom-style 属性 [详情](https://uniapp.dcloud.net.cn/component/picker-view.html)
+ App平台 优化 video 组件支持 title 属性 [详情](https://uniapp.dcloud.net.cn/component/video.html)
+ App平台 修复 hover-class 属性不支持多个 class 的Bug [详情](https://ask.dcloud.net.cn/question/152506)
+ App平台 修复 vue3 项目 uts 插件 export default class 不生效的Bug [详情](https://ask.dcloud.net.cn/question/154164)
+ App平台 修复 vue3 项目 v-for 可能渲染失败的Bug [详情](https://ask.dcloud.net.cn/question/154836)
+ App平台 修复 vue3 项目 tabbar.broderStyle 自定义色值无效的Bug [详情](https://ask.dcloud.net.cn/question/150718)
+ App平台 修复 vue3 项目 nvue 页面 switch 组件 disabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/154577)
+ App-Android平台 修复 3.5.5版本引出 input 组件自动获取焦点可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153481)
+ App-iOS平台 修复 nvue swiper 组件使用 rpx 时在部分设备可能无法正常滑动切换的Bug [详情](https://ask.dcloud.net.cn/question/149260)

  
+ 【重要】iOS平台 新增 云端打包支持原生应用配置文件 Info.plist 和资源目录 Resources [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios)
+ iOS平台 修复 使用`阿里百川电商`SDK 5.x版，云端打包报符号冲突错误的Bug [详情](https://ask.dcloud.net.cn/question/153138)
+ iOS平台 修复 视频播放控件 VideoPlayer 标题栏、进度条样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/153945)
+ iOS平台 修复 uni-AD 穿山甲Gromore 激励视频偶现可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/153717)
+ iOS平台 修复 3.6.0版本引出的 uni原生语言插件Hook不到applicationWillEnterForeground、applicationDidEnterBackground等系统事件的Bug
+ iOS平台 修复 安全检测可能报获取设备idfv的Bug



`注意:HX3.2.0版本之后，微信,QQ,微博的通用链接在Plist中配置有变化,升级如遇到登录,分享,支付问题,请参考最新的文档去配置`

`注意:HX3.1.19(含)版本之后，更新video模块，需要把"IJKMediaFramework.framework"库改成"IJKMediaFrameworkWithSSL.framework"`

`注意:HX3.1.16版本之后，更新video模块和nvue的高德地图模块，需要配置"Masonry.framework"库`

`注意:HX3.1.10版本开始，iOS离线SDK打包5+ app或者uni-app需要申请`[AppKey](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  
`注意:HX3.1.6版本之后，更新camera模块，需要配置"MetalKit.framework", "GLKit.framework"系统库`
  
`注意：离线SDK中Bundles文件夹下把SVProgressHUD.bundle更新为DCSVProgressHUD.bundle，把TZImagePickerController.bundle更新为DCTZImagePickerController.bundle；inc文件夹下更新了DCSVProgressHUD和DCTZImagePickerController头文件`


[百度云点击下载历史版本，提取码: 9cqm](https://pan.baidu.com/s/1r-QpfRvVL4ODkbmdPHLhsA?pwd=9cqm) 

[和彩云点击下载SDK，提取码: zEnP](https://caiyun.139.com/m/i?115CoTUMRtiTd) 

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
