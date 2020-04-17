## 正式版

### 2020年04月10日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.11.80110_20200410.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

  + 更新uni-app离线打包支持，需使用HBuilderX（2.6.11.20200409）版本生成本地打包App资源。	
  + 修复 nvue web-view 组件 src 属性的链接地址中带 query 参数无效的Bug
  + 修复 nvue web-view、image 等组件 src 属性资源地址为_doc、_download路径时可能无法正常载入的Bug
  + 修复 nvue list/waterfall 组件底部使用 loading 加载更多时，无法正常触发 @loading 事件的Bug
  + 修复 nvue list 组件 @scroll 事件返回参数 contentOffset.y 值域不正确的Bug
  + 修复 uni.sendSocketMessage 无法发送某些 bytebuffer 数据的Bug
  + 新增 uni-AD 激励视频广告支持服务器回调（限今日头条穿山甲广告）
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持网络图标路径
  + 修复 Webview窗口对象 loadURL 方法 headers 参数设置无效的Bug
  + 修复 在Android10上第一次安装后启动可能引起应用崩溃的Bug
  + 修复 应用标识 AppID 使用www结尾时导致部分资源无法正常载入的Bug
  + 修复 百度语音识别时在部分设备可能返回 4004 app name unknown 错误的Bug
  + 修复 设置应用图标显示角标数字 plus.runtime.setBadgeNumber 在部分设备超过100时仍然显示99的Bug
  + 修复 文件系统目录对象 DirectoryEntry 的 getFile 方法返回错误信息不准确的Bug
  + 修复 调用 plus.gellay.pick 通过QQ浏览器选择图片或视频在部分设备可能无响应的Bug
  + 修复 HBuilderX 2.6.1引出的获取Cookie值 plus.navigator.getCookie 返回数据不正确的Bug

[百度网盘下载历史版本，提取码: neqx](https://pan.baidu.com/s/1Gpbnq3wLvvnRO6W-SlvVpA)



## Alpha版

### 2020年04月13日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.12.80112_20200413.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

  + 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.6.12.20200412）版本生成本地打包App资源。	
  + 修复 uni.sendSocketMessage 无法发送某些 bytebuffer 数据的Bug
  + 修复 nvue list/waterfall 组件底部使用 loading 加载更多时，无法正常触发 @loading 事件的Bug
  + 修复 nvue list 组件 @scroll 事件返回参数 contentOffset.y 值域不正确的Bug
  + 修复 nvue input 组件设置 type 为 digit/number 时弹出键盘类型不正确的问题
  + 修复 tabBar 页面设置 titleNView 的 type 为 transparent 滚动时标题栏透明度不发生变化的Bug
  + 新增 原生导航标题栏的 titleIcon 支持 base64 图标，方便页面里已经存在的图标在滚动时绘制在原生导航栏上
  + 新增 actionSheet 取消按钮文字国际化（如设置按钮文字，则以设置文字为准，如未设置，则根据手机系统的语言显示）
  + 新增 pop-in/pop-out 动画时通过 animationAlphaBGColor 设置动画蒙层背景色，可用于避免暗色风格页面转场动画的蒙层偏白
  + 修复 uni-AD 腾讯广点通部分视频激励广告播放 30 秒后点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug
  + 修复 Webview窗口对象 loadURL 方法没有触发 overrideUrlLoading 拦截回调函数的Bug
  + 修复 显示系统软键盘 plus.key.showSoftKeybord 多次调用会触发关闭软键盘的Bug
  + 修复 storage存储键值通过 setItem 方法传入 value 为空字符串后，通过 getItem 方法返回 null 的Bug
  + 修复 同时创建两个音频播放对象，其中一个音频暂停后另一个无法播放的Bug
  + 修复 视频播放控件 VideoPlayer 播放部分 rtmp 链接可能无声音的Bug

[百度网盘下载历史版本，提取码: 6msp](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)
