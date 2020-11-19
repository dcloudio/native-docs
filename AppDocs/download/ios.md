如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## iOS 离线SDK - 正式版

### 2020年11月11日发布 
[点击下载SDK，提取码: fg74](https://pan.baidu.com/s/1CxsIouohTgc_xY4YUSxF8w)
+ 更新uni-app离线打包支持，需使用HBuilderX（2.9.8.20201110）版本生成本地打包App资源。
+ iOS平台 修复 2.8.13版本引出的 高德定位设置 geocode 为 true 无法返回地址信息的Bug [详情](https://ask.dcloud.net.cn/question/110474)
+ App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
	`注意：HX2.9.3版本之后，升级SDK的时候，Barcode模块需要引入libuchardet.a库，否则可能编译报错`



[百度网盘下载历史版本，提取码: w35k](https://pan.baidu.com/s/1gZGJMaSqZQftqgEVtadvEg)



## iOS 离线SDK - Alpha版

### 2020年11月19日发布 
[点击下载SDK，提取码: e2dw](https://pan.baidu.com/s/1fiuqld5FEzNbjXOgRGYDTQ)
+ 更新uni-app离线打包支持，需使用HBuilderX（2.9.10.20201117-alpha）版本生成本地打包App资源。
+ iOS平台 修复 扫描部分二维码无法识别的Bug [详情](https://ask.dcloud.net.cn/question/110878)
+ iOS平台 修复 窗口标题栏 titleNView 设置 type 为 transparent 时，在 ActionSheet 上显示的按钮样式异常的Bug
+ App-iOS平台 修复 2.9.9版本引出的 nvue swiper 组件中嵌套 video 后页面无法滑动的Bug [详情](https://ask.dcloud.net.cn/question/111145)
+ App-iOS平台 修复 nvue input 组件设置 focus 为 true 时频繁打开、关闭页面操作可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110809)
+ App平台 修复 atob 解码 base64 字符串返回结果可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/110758)

  
[百度网盘下载历史版本，提取码: 4p3a](https://pan.baidu.com/s/1C0H4DhfI-wXG0NaR2AiE7g)
