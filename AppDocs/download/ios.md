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

### 2020年12月25日发布
[点击下载SDK，提取码: b0vc](https://pan.baidu.com/s/1ozqFoLn6T0k8cZYtAlnmpQ)
+ 更新uni-app离线打包支持，需使用HBuilderX（3.0.1.20201223-alpha）版本生成本地打包App资源。
+ 【重要】新增 一键登录，运营商网关认证，免短信验证获取手机号、一键免密登录 [详情](https://uniapp.dcloud.net.cn/univerify)
+ iOS平台 新增 mediaPlaybackRequiresUserAction 属性控制H5页面支持自动播放音频 [详情](https://ask.dcloud.net.cn/article/94)
+ iOS平台 修复 3.0.0版本引出的 获取当前地理位置弹出系统授权框时，用户拒绝授权后没有触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/113696)
+ iOS平台 修复 一键登录授权界面自定义样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/113894)
+ App-iOS平台 修复 3.0.0 版本引出的 nvue image 组件在iOS14以下系统 webp 格式图片无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/113840)
+ App-iOS平台 修复 3.0.0 版本引出的 iOS13.7 设备上 canvas 组件绘制图像会导致应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/113820)

  
[百度网盘下载历史版本，提取码: 4p3a](https://pan.baidu.com/s/1C0H4DhfI-wXG0NaR2AiE7g)
