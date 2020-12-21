## Android 离线SDK - 正式版

### 2020年11月11日发布
[点击下载SDK](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

+ 更新uni-app离线打包支持，需使用HBuilderX（2.9.8.20201110）版本生成本地打包App资源。
+ 修复 uni原生插件扩展Component组件 bindData 回调不触发的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/1Gpbnq3wLvvnRO6W-SlvVpA)，提取码: neqx



## Android 离线SDK - Alpha版

### 2020年12月21日发布
[点击下载SDK](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

+ 更新uni-app离线打包支持，需使用HBuilderX（3.0.0.20201219-alpha）版本生成本地打包App资源。
+ 新增 一键登录，运营商网关认证，免短信验证获取手机号、一键免密登录
+ 新增 UniPush 华为手机，厂家通道离线推送可在服务端设置角标
+ 新增 uni-AD 编程控制开屏广告的开启或关闭
+ 新增 4个安全类API，推荐客户端安全要求较高的应用（如使用了激励视频），使用如下4个API并且搭配js原生混淆和App加固，防止客户端被篡改
+ 新增 plus.navigator.getSignature 获取应用签名标识。可用于判断App的证书是否被重签
+ 新增 plus.navigator.isSimulator 判断App是否运行在模拟器环境
+ 新增 plus.navigator.isRoot 判断设备是否被root
+ 新增 plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理
+ 新增 QQ登录获取授权信息支持获取用户统一标识 unionid 属性
+ 修复 页面存在 subnvue 时 web-view 组件无法返回的Bug
+ 修复 应用版本名称包含中文时，uni.request 可能引起请求失败的Bug
+ 修复 nvue map 组件 getScale 获取地图缩放等级可能不准确的Bug
+ 修复 nvue input 组件不设置 confirm-type 属性时 confirm 事件不触发的Bug
+ 优化 应用启动时申请读写手机存储权限策略默认值为 once
+ 修复 系统分享 sendWithSystem 分享应用资源图片可能失败的Bug
+ 修复 在Android10及以上设备无法保存视频文件到相册的Bug
+ 修复 相册选择图片视频时超过 180M 的文件无法显示的Bug
+ 修复 UniPush 第一次启动可能无法获取clientid的Bug
+ 修复 UniPush 消息对象 payload 属性值可能没有转换为JSON对象的Bug
+ 修复 Downloader 下载的链接地址无效时不会触发回调的Bug
+ 修复 getCookie setCookie等操作 与 X5 内核 webview 页面没有同步共享的Bug
+ 修复 设置窗口标题栏搜索框失去焦点时，光标仍然显示的Bug
+ 修复 关闭窗口页面动画在部分设备上可能出现闪烁的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp
