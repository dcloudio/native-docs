## Alpha版历次更新说明

### 3.3.1
+ App平台 修复 vue3 项目使用 uni.canvasGetImageData 报错的Bug [详情](https://ask.dcloud.net.cn/question/134355)
+ App平台 修复 vue3 项目使用 uni.showLoading 方法在不调用 hideLoading 时会运行两秒左右自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/135551)
+ App平台 修复 vue3 项目 开发期间页面热刷新不生效的Bug
+ App平台 修复 vue3 项目 开发期间页面直达不生效的Bug
+ App-iOS平台 修复 nvue rich-text 组件在页面中动态创建时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/135136)

+ 更新 uni-AD 快手广告SDK iOS为 3.3.19 版；快手内容联盟SDK iOS为 3.3.25 版
+ iOS平台 修复 plus.nativeUI.showWaiting 在暗黑模式下默认文字颜色不正确的Bug
+ iOS平台 修复 二维码扫码 pdf417 码时识别中文字符为乱码的Bug
+ iOS平台 修复 本地相册选择进入编辑界面可能出现点击完成按钮无响应的Bug [详情](https://ask.dcloud.net.cn/question/135653)

### 3.3.0 
+ App平台、H5平台 新增 uni.request 支持 PATCH 方法
+ App平台、H5平台 修复 swiper 组件开启衔接滑动点击指示器时切换问题 [详情](https://github.com/dcloudio/uni-app/issues/2985)
+ App平台 优化 nvue 页面默认文字大小更改为 16px
+ App平台 优化 innerAudioContext 支持多个音频同时播放
+ App-Android平台 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug [详情](https://ask.dcloud.net.cn/question/134764)
+ App-iOS平台 修复 nvue 页面固定横屏启动时 rpx 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/134971)

+ iOS平台 修复 uni-AD setSplashAd 关闭开屏广告可能不生效的Bug
+ iOS平台 修复 拍照和本地相册选择 crop 裁剪编辑图片 resize 参数默认值不正确的Bug
+ iOS平台 修复 uni原生插件 validArchitectures 配置不正确可能导致云端打包失败的Bug	

### 3.2.15 
+ 【重要】iOS平台 修复 应用启动时间统计在网络服务异常时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/article/39448)