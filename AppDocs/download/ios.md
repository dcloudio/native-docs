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

### 2020年11月16日发布 
[点击下载SDK，提取码: a6m5](https://pan.baidu.com/s/1a9giLzjNlUVXvTHLZtsefA)
+ 更新uni-app离线打包支持，需使用HBuilderX（2.9.9.20201114-alpha）版本生成本地打包App资源。
+ 新增 QQ分享支持 type 为 web 类型分享网页链接
+ iOS平台 修复 2.9.1版本引出的 高德定位设置 geocode 为 true 无法返回地址信息的Bug [详情](https://ask.dcloud.net.cn/question/110474)
+ iOS平台 修复 关闭页面窗口时底部区域可能出现闪动的Bug [详情](https://ask.dcloud.net.cn/question/110153)
+ iOS平台 修复 打开系统内置地图导航时，传入的位置和名称与地图实际显示不一致的Bug [详情](https://ask.dcloud.net.cn/question/109998)
+ iOS平台 修复 native.js 使用 plus.ios.invoke 调用方法时传入参数为 jsonObject 不执行的Bug
+ App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
+ App-iOS平台 修复 canvas 组件绘制字体部分属性未生效的Bug [详情](https://ask.dcloud.net.cn/question/110227)
+ App-iOS平台 修复 nvue video 组件的子组件点击事件会透传到 video 组件上的Bug [详情](https://ask.dcloud.net.cn/question/110601)
+ App-iOS平台 修复 uni.openLocation 页面使用 Apple 地图导航目的地错误的Bug

  
[百度网盘下载历史版本，提取码: 4p3a](https://pan.baidu.com/s/1C0H4DhfI-wXG0NaR2AiE7g)
