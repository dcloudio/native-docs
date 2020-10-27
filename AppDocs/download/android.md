## Android 离线SDK - 正式版

### 2020年10月15日发布
[点击下载SDK，提取码: 7rfu](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)

+ 更新uni-app离线打包支持，需使用HBuilderX（2.9.3.20201014）版本生成本地打包App资源。
+ 新增 uni-AD 支持应用从后台切换到前台显示开屏广告，并默认启用
+ 新增 uni-AD 支持快手联盟的信息流广告，增加信息流的广告填充
+ 更新 uni-AD 今日头条穿山甲SDK为3.3.0.0版、腾讯广告联盟SDK为4.270.1140版、快手联盟SDK3.3.4版
+ 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持 color 属性设置文本颜色
+ 新增 视频播放控件 VideoPlayer 支持 show-loading 属性设置是否显示loading控件
+ 适配 Android10+系统 分区存储 机制
+ 更新 高德定位SDK版本为5.2.0
+ 修复 系统 webview 更新到 Chrome84+ 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug
+ 修复 web-view 组件内 input 被软键盘遮挡的Bug
+ 修复 uni.request 请求 firstIpv4 属性可能不生效的Bug
+ 修复 2.8.4版引出的 uni.request 重定向后 cookie 可能丢失的Bug
+ 修复 nvue v-if 切换 template 可能出现 tap 事件无法触发的Bug
+ 修复 nvue web-view 组件部分https地址页面无法加载http地址资源的Bug
+ 修复 视频播放控件 VideoPlayer 设置 show-progress 可能不生效的Bug
+ 修复 Webview窗口设置 videoFullscreen 不生效的Bug
+ 修复 页面中 input 标签 type 为 file 且 accept 为 video 时点击打开不是启动摄像的Bug
+ 修复 File 文件对象的 slice 方法无法获取指定数据内容的Bug
+ 修复 设置targetversion为29+时，在Android10及以上设备调用 uni.shareWithSystem 分享图片可能报 多文件分享只支持照片 的Bug
+ 修复 安全检测可能报apk安装包的Activity、Service组件存在导出风险的Bug
+ 修复 压缩图片 plus.zip.compressImage 在Android10上报传入参数错误的Bug
+ 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug

[百度网盘下载历史版本，提取码: neqx](https://pan.baidu.com/s/1Gpbnq3wLvvnRO6W-SlvVpA)



## Android 离线SDK - Alpha版

### 2020年10月27日发布
[点击下载SDK，提取码: 5vgk](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) 

+ 更新uni-app离线打包支持，需使用HBuilderX（2.9.5.20201024-alpha）版本生成本地打包App资源。
+ 新增 全屏视频 uni.createFullScreenVideoAd
+ 优化 uni-AD 基础开屏广告显示效果，适配各种分辨率屏幕设备
+ 修复 uni.request 请求 cookie 与 X5 内核 webview 页面没有同步共享的Bug
+ 修复 nvue image 组件 mode 设置为 widthFix、heightFix 不生效的Bug
+ 修复 nvue map 组件使用 translateMarker 移动 maker 后气泡文本没有跟随移动的Bug
+ 修复 nvue map 组件动态删除 marker 的 callout 属性不生效的Bug
+ 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题
+ 更新 高德地图SDK为7.6.0版
+ 更新 uni-AD 快手联盟SDK为3.3.4.2版
+ 修复 uni-AD 应用从后台切换到前台显示开屏广告时，系统状态栏可能遮挡跳过按钮的Bug
+ 修复 多次调用二维码扫码时，因复用扫码提示音频播放对象导致概率闪退的Bug
+ 修复 获取屏幕亮度 getBrightness 在小米手机上可能返回数据异常的Bug
+ 修复 storage 存储数据内容超过 2M 后可能无法正常存取非ASCII字符的Bug
+ 修复 Geolocation 定位模块默认添加后台定位权限 ACCESS_BACKGROUND_LOCATION 的Bug

[百度网盘下载历史版本，提取码: 6msp](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)
