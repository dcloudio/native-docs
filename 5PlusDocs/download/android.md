## Android 平台 HTML5+ SDK ——正式版更新日志

### 2020年04月10日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.11.80110_20200410.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

1. 更新uni-app离线打包支持，需使用HBuilderX（2.6.11.20200409）版本生成本地打包App资源。	
2. 修复 nvue web-view 组件 src 属性的链接地址中带 query 参数无效的Bug
3. 修复 nvue web-view、image 等组件 src 属性资源地址为_doc、_download路径时可能无法正常载入的Bug
4. 修复 nvue list/waterfall 组件底部使用 loading 加载更多时，无法正常触发 @loading 事件的Bug
5. 修复 nvue list 组件 @scroll 事件返回参数 contentOffset.y 值域不正确的Bug
6. 修复 uni.sendSocketMessage 无法发送某些 bytebuffer 数据的Bug
7. 新增 uni-AD 激励视频广告支持服务器回调（限今日头条穿山甲广告）
8. 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持网络图标路径
9. 修复 Webview窗口对象 loadURL 方法 headers 参数设置无效的Bug
10. 修复 在Android10上第一次安装后启动可能引起应用崩溃的Bug
11. 修复 应用标识 AppID 使用www结尾时导致部分资源无法正常载入的Bug
12. 修复 百度语音识别时在部分设备可能返回 4004 app name unknown 错误的Bug
13. 修复 设置应用图标显示角标数字 plus.runtime.setBadgeNumber 在部分设备超过100时仍然显示99的Bug
14. 修复 文件系统目录对象 DirectoryEntry 的 getFile 方法返回错误信息不准确的Bug
15. 修复 调用 plus.gellay.pick 通过QQ浏览器选择图片或视频在部分设备可能无响应的Bug
16. 修复 HBuilderX 2.6.1引出的获取Cookie值 plus.navigator.getCookie 返回数据不正确的Bug

### 历史版本
<details>
<summary>展开查看</summary>

#### 2020年04月03日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.9.80101_20200403.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

1. 更新uni-app离线打包支持，需使用HBuilderX（2.6.9.20200403）版本生成本地打包App资源。	
2. 新增 获取当前屏幕宽高信息接口 plus.screen.getCurrentSize

#### 2020年03月31日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.8.80084_20200331.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

1. 更新uni-app离线打包支持，需使用HBuilderX（2.6.8.20200330）版本生成本地打包App资源。	
2. 优化 storage 相关 API 性能
3. 修复 pages.json 内配置 softinputMode 为 adjustResize 部分情况下失效的Bug
4. 修复 nvue video 组件在页面中存在多个且包含 cover-view 全屏播放时闪退的Bug
5. 修复 nvue video 组件设置 click 事件后视频操作按钮无法触发的Bug
6. 修复 nvue waterfall 组件加入 Refresh 后item排版错乱的Bug
7. 修复 tabBar 的 midButton 设置 backgroundImage 显示不正常的Bug
8. 修复 国产安卓模拟器 uni.getSystemInfo 获取设备宽高错误的Bug
9. 修复 v3版本 map 组件绑定宽高后无法动态修改的Bug
10. 修复 v3版本 nvue 为首页时 autoclose 设置为 false 也会自动关闭启动页的Bug
11. 修复 v3版本 SocketTask.onMessage 接收数据类型为 ArrayBuffer 时解析错误的Bug
12. 新增 原生标题栏支持自定义返回按钮角标、标题图标、副标题等功能
13. 修复 Webview窗口的 WebviewEvent 事件回调函数参数没有 target 属性的Bug
14. 优化 本地数据存储 plus.storage 性能，新增异步操作接口
15. 修复 uni-AD 激励视频云端打包勾选穿山甲，广告平台没有通过审核时可能引起应用崩溃的Bug
16. 修复 提交华为应用市场检查可能误报 TrojanDropper.Agent.EIY 病毒的Bug
17. 修复 页面中a标签设置非法链接后，点击可能出现应用闪退的Bug
18. 修复 在部分华为手机上修改文件名之后，使用input标签type为file时获取文件名称可能为随机数字的Bug
19. 修复 Webview窗口标题栏（titleNView）设置type为transparent时，其它原生控件（如VideoPlayer）可能会覆盖标题栏的Bug
20. 修复 页面中input标签触发软键盘收回时可能影响 WebviewStyles 中的top属性不生效的Bug
21. 修复 获取UA值 plus.navigator.getUserAgent 返回为空的Bug
22. 修复 视频播放控件 VideoPlayer 跳转到指定位置之后，弹幕仍然按照之前的进度播放的Bug
23. 修复 视频播放控件 VideoPlayer 未指定 direction 时没有根据视频的宽高自动选择 direction 的Bug
24. 修复 地图控件 setCenter 后不触发 onstatuschanged 事件的Bug
25. 修复 HBuilderX2.6.5 引出的在Android4.4系统设备无法正常运行的Bug
26. 修复 系统选择按钮框底部取消按钮UI显示不正常的Bug

#### 2020年03月19日发布
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.5.80037_20200314-1.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

1. 更新uni-app离线打包支持，需使用HBuilderX（2.6.5.20200314）版本生成本地打包App资源。	
2. 修复 在Android4.4系统设备无法正常运行的Bug
3. 修复 提交华为应用市场检查可能误报 TrojanDropper.Agent.EIY 病毒的Bug

#### 2020年03月14日发布
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.5.80037_20200314.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

1. 更新uni-app离线打包支持，需使用HBuilderX（2.6.5.20200314）版本生成本地打包App资源。	
2. 修复 nvue map 组件不设置 markers 属性导致tap事件不触发的Bug
3. 修复 云打包后 uni.getImageInfo() 获取本地图片信息可能会触发失败回调的Bug
4. 修复 v3版本 wgt热更新后无法打开新增页面的Bug 
5. 修复 nvue video 组件在页面中存在多个且包含 cover-view 全屏播放时闪退的Bug
6. 新增 原生标题栏支持自定义返回按钮、标题居左、标题栏背景图、背景渐变色等功能
7. 新增 视频播放控件 VideoPlayer 支持全屏播放时点击事件 fullscreenclick 
8. 新增 原生隐私与政策提示框配置
9. 优化 云端打包默认需要的系统权限，支持配置是否自动添加第三方SDK需要的权限
10. 优化 Webview窗口加载可缩放页面时默认隐藏系统缩放控制条
11. 修复 获取系统语言信息 plus.os.language 字符中没有包含地区信息的Bug

#### 2020年02月26日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.1.74103_20200226.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

1. 更新uni-app离线打包支持，需使用HBuilderX（2.6.1.20200226）版本生成本地打包App资源。	

#### 2020年02月24日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.0.74021_20200224.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

1. 更新uni-app离线打包支持，需使用HBuilderX（2.6.0.20200223）版本生成本地打包App资源。	
2. 新增 plus.ad 广告模块，聚合穿山甲、广点通、360联盟等uni-AD联盟服务，支持信息流、banner、激励视频等应用内自定义广告
3. 新增 Webview窗口样式支持设置禁止调用plus属性 disablePlus，解决加载外部页面时可能调用plus对应用造成危害的隐患
4. 新增 数据库执行SQL语句 plus.sqlite.executeSql 支持一次传入多条语句，解决Android平台一条SQL语句中不支持以分号分割多条命令的需求
5. 新增 推送 支持异步获取客户端推送标识接口 plus.push.getClientInfoAsync，解决同步接口可能返回空数据的问题
6. Android平台 新增 腾讯X5内核。可解决rom自定义主题字体适配、低端机浏览器兼容性等问题
7. 修复 Webview窗口创建并显示后立即关闭可能出现闪退的Bug
8. 修复 在定时器回调函数中调用 plus.screen.lockOrientation 可能会引起应用闪退的Bug
9. 修复 在部分手机上获取OAID可能触发错误回调，错误信息提示不支持的Bug
10. 修复 调用系统分享消息 plus.share.sendWithSystem 标题不支持国际化的Bug
11. 修复 音频播放对象 AudioPlayer 触发end事件之后，调用 stop 和 destroy 方法会出现闪退的Bug

#### 2020年01月04日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.5.1.72759_20200104.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

1. 更新uni-app离线打包支持，需使用HBuilderX（2.5.1.20200103）版本生成本地打包App资源。	
2. 更新 高德地图SDK（7.1.0）
3. 修复 Webview窗口关闭后可能出现内存占用不释放的Bug
4. 修复 数据库执行SQL语句 plus.sqlite.executeSql 不支持多条sql语句的Bug
5. 修复 真机运行默认将日志保存到SD卡中，长时间运行可能出现日志文件过大的Bug

