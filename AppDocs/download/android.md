## Android 离线SDK - 正式版

### 2021年07月12日发布——HBuilderX（3.1.22.20210709）
[点击下载SDK](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

+ 更新uni-app离线打包支持，需使用HBuilderX（3.1.22.20210709）版本生成本地打包App资源。
+ 优化 快速频繁操作应用启动/关闭可能出现白屏现象的问题
+ 修复 uni.request 请求 header 中设置自定义 content-type 会添加 charset 的Bug
+ 修复 uni.previewImage 长按保存图片可能失败的Bug
+ 修复 websocket 请求过多可能引起崩溃的Bug
+ 修复 tabBar 列表项不设置 selectedIconPath 在部分手机可能引起trying to use a recycled bitmap android.graphics.Bitmap崩溃的Bug
+ 修复 nvue 页面 webview 组件设置 background 属性不生效的Bug
+ 修复 nvue 页面 video 组件暂定播放后可能出现黑边的Bug
+ 修复 nvue 页面 swiper 组件嵌套 list 组件时 source 信息错误的Bug
+ 新增 拍照和本地相册选择 支持设置 crop 裁剪编辑图片
+ 新增 视频播放控件 VideoPlayer 播放http/https协议视频资源时支持设置请求的 header
+ 新增 登录鉴权服务对象支持 nativeClient 属性标识依赖的客户端App是否已安装
+ 更新 LivePusher 直播推流模块基于开源项目yasea，支持 srs4.x
+ 优化 通知栏操作逻辑，解决提交 Google Play 审核可能提示 Implicit PendingIntent Vulnerability 的问题
+ 优化 template 原生隐私政策提示框UI样式
+ 修复 template 原生隐私政策提示框点击同意按钮前可能读取设备标识的Bug
+ 修复 手机语言设置为阿拉伯文后无法操作页面返回的Bug
+ 修复 H5页面中 intent:// 协议无法拉起三方App的Bug
+ 修复 云端打包 提交 Google Play 审核提示包含无法识别的语言的Bug
+ 修复 getVideoInfo 方法调用无响应的Bug
+ 修复 3.1.14版本引出的 微博登录取消授权后再次调用无响应的Bug
+ 修复 targetSdkVersion 设置为 30 在部分 Android 11 设备可能无法正常拉起支付App的Bug
+ 修复 getFileInfo 在 Android11 设备上可能无法正常获取文件信息的Bug
+ 修复 storage 数据存储键值 key 中包含特殊字符时可能存取失败的Bug


[百度网盘下载历史版本](https://pan.baidu.com/s/1qxxUqh9ifF7mfJ4T46NB4Q)，提取码: xwe9



## Android 离线SDK - Alpha版### 2021年08月12日发布——HBuilderX（3.2.1.20210811-alpha）[点击下载SDK](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk+ 更新uni-app离线打包支持，需使用HBuilderX（3.2.1.20210811-alpha）版本生成本地打包App资源。
+ 优化 uni.chooseImage 图片选择界面增加`原图`按钮
+ 修复 3.2.0 版本引出的 uni.scanCode 可能无法正常使用的Bug
+ 修复 uni.saveFile 保存通过 uni.chooseImage 选择的图片在 Android11 设备上可能失败的Bug
+ 新增 androidPrivacy.json 文件配置隐私政策提示框
+ 修复 3.1.19 版本引出的 直播推流 LivePusher 无法全屏预览的Bug
+ 修复 5+App项目打包后提交华为应用市场审核会误报包含三方广告SDK的Bug 
+ 修复 申请权限被用户拒绝后，引导用户跳转设置界面开启权限后返回应用依然无法获取权限的Bug[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp
