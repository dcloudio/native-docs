如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## iOS 离线SDK - 正式版

### 2020年9月28日发布 
[点击下载SDK，提取码: 5duq](https://pan.baidu.com/s/1W1Tf-geltLQpSlA94QSM_w)
+ 更新uni-app离线打包支持，需使用HBuilderX（2.8.13.20200927）版本生成本地打包App资源。
+ iOS平台 更新 高德地图SDK版本为7.6.0、高德定位SDK版本为2.6.7，解决 iOS14 上显示地图时申请 `连接到本地网络上的设备` 权限的问题
+ iOS平台 修复 获取通讯录 plus.contacts.getAddressBook 在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/107339)
+ App-iOS平台 修复 2.8.12版引出的 nvue image 组件动态设置样式在 iOS14 以下设备图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/107884)
+ App-iOS平台 修复 tabbar 中的文本在 iOS14 上无法完整显示的Bug [#2146](https://github.com/dcloudio/uni-app/issues/2146)

[百度网盘下载历史版本，提取码: w35k](https://pan.baidu.com/s/1gZGJMaSqZQftqgEVtadvEg)



## iOS 离线SDK - Alpha版

### 2020年9月28日发布 
[点击下载SDK，提取码: tr70](https://pan.baidu.com/s/1FoW7MyvXVMgRHpP3dk1aNg)
+ 更新uni-app离线打包支持，需使用HBuilderX（2.9.1.20200927-alpha）版本生成本地打包App资源。
+ 【重要】iOS平台 适配 iOS14 解决应用启动时申请 `连接到本地网络上的设备` 权限导致无法通过AppStore审核的问题 [详情](https://ask.dcloud.net.cn/question/107530)
+ 新增 uni-AD 支持应用从后台切换到前台显示开屏广告，并默认启用 [详情](https://ask.dcloud.net.cn/article/36718#splash_fr)
+ 新增 uni-AD 支持快手联盟的信息流广告，增加信息流的广告填充
+ 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持 color 属性设置文本颜色 [规范](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewSearchInputStyles)
+ 新增 视频播放控件 VideoPlayer 支持 show-loading 属性设置是否显示loading控件 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
+ App平台 修复 weex 编译模式 vue 页面中的 picker 组件 change 事件有时无法触发的Bug [#1774](https://github.com/dcloudio/uni-app/issues/1774)
+ App平台 修复 低版本系统上 canvas 组件绘制坐标比实际值小的Bug [详情](https://ask.dcloud.net.cn/question/105866)
+ App平台 修复 canvasContext.measureText 无效的Bug [详情](https://ask.dcloud.net.cn/question/107032)
+ App平台 修复 data-set 部分数据为 String 类型时显示错误的Bug [详情](https://ask.dcloud.net.cn/question/100073)
+ App平台 修复 蓝牙事件监听可以重复添加的Bug [#1988](https://github.com/dcloudio/uni-app/issues/1988)
+ App平台 修复 云打包后某些情况下启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/107332)
+ App平台 修复 获取系统外观样式 plus.navigator.getUIStyle 无法调用的Bug [详情](https://ask.dcloud.net.cn/question/103886)
+ App平台 修复 tabbar 动态显示或隐藏时可能出现闪白的Bug [详情](https://ask.dcloud.net.cn/question/80898)
+ App-iOS平台 修复 2.9.0版引出的 nvue image 组件动态设置样式在 iOS14 以下设备图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/107884)
+ App-iOS平台 修复 tabbar 中的文本在 iOS14 上无法完整显示的Bug [#2146](https://github.com/dcloudio/uni-app/issues/2146)
+ iOS平台 更新 高德地图SDK版本为7.6.0、高德定位SDK版本为2.6.7，解决 iOS14 上显示地图时申请 `连接到本地网络上的设备` 权限的问题
+ iOS平台 修复 uni-AD 腾讯广点通的信息流广告样式可能不正确的Bug
+ iOS平台 修复 获取通讯录 plus.contacts.getAddressBook 在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/107339)
+ iOS平台 适配 iOS14 下拉刷新的雪花样式调整问题
+ iOS平台 更新 支付宝Alipay SDK版本为15.7.9，解决 iOS14 上应用启动时提示读取剪切板的问题
+ iOS平台 优化 uni-AD 快手联盟SDK引用库，减少安装包ipa大小约20M
+ iOS平台 修复 视频播放控件 VideoPlayer 调用 exitFullScreen 可能导致页面横屏设置失效的Bug [详情](https://ask.dcloud.net.cn/question/105520)
+ iOS平台 修复 从本地相册选择图片在 iOS14 上可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/107745)
+ iOS平台 修复 2.7.12版引出的 原生控件对象 plus.nativeObj.View 调用 drawRichText 设置 align 属性为 center 不居中显示的Bug [详情](https://ask.dcloud.net.cn/question/103328)
+ App-iOS平台 修复 nvue 使用await请求网络赋值后页面无法渲染的bug [详情](https://ask.dcloud.net.cn/question/107670)
+ App-iOS平台 修复 iPhoneX 横屏启动时页面宽度异常Bug
+ App-iOS平台 修复 iOS12 以下 :adjust-position="false" 不生效的Bug
+ App-iOS平台 修复 部分情况 input 事件未触发的Bug [详情](https://ask.dcloud.net.cn/question/101135)
+ App-iOS平台 修复 nvue video 组件无法播放相对路径的本地视频的Bug [详情](https://ask.dcloud.net.cn/question/107215)
+ App-iOS平台 修复 uni原生插件 UniPluginProtocol 协议方法可能不触发回调的Bug
+ App-iOS平台 修复 uni原生插件可能与内部方法名称冲突导致部分功能异常的Bug
+ App-iOS平台 修复 离线打包使用 XCode12 编译运行到 iOS14 上 nvue 页面图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/107320)


  
[百度网盘下载历史版本，提取码: 4p3a](https://pan.baidu.com/s/1C0H4DhfI-wXG0NaR2AiE7g)
