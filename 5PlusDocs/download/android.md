**注意：本文SDK对应的是HBuilderX的正式版。alpha版的SDK下载地址另见[HTML5+ SDK (alpha版)](https://ask.dcloud.net.cn/article/35968)**

> 新版本Android SDK使用aar方式发布，部分资源和jar包整合到了aar文件中，使用方法可参考文档[使用新版本5+SDK创建最简Android原生工程](http://ask.dcloud.net.cn/article/13232)

## Android 平台 HTML5+ SDK 更新日志

#### 2019年12月11日发布
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.4.6.71983_20191211.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.4.6.20191210）版本生成本地打包App资源。
2.  修复 选择位置 概率出现定位中心点不居中的Bug
3. 优化 启动时申请手机存储权限，若用户拒绝则会弹出说明文字。满足部分应用商店要求的权限申请需申明的要求
4. 修复 Webview窗口设置drag滑屏操作手势，快速滑动操作可能引起白屏的Bug
5.  修复 视频播放控件（VideoPlayer）可能无法播放某些本地视频文件的Bug
6. 修复 数据库执行SQL语句（plus.sqlite.executeSql）传入错误sql语句时，可能在控制台输出错误日志且不触发错误回调的Bug


### 历史版本
<details>
<summary>展开查看</summary>

#### 2019年11月15日发布
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.4.2.71156_20191115.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.4.2.20191115）版本生成本地打包App资源。
2.  新增 获取移动智能设备标识公共服务平台提供的匿名设备标识符OAID、开发者匿名设备标识符VAID、及应用匿名设备标识符AAID，可用于解决Android10无法获取设备标识（如IMEI、IMSI、Wi-Fi MAC地址等）的问题
3. 新增 在manifest中配置 App 启动时申请设备IMEI等信息的权限策略，默认调整为应用第一次启动时申请
4. 新增 Webview窗口支持暂停（pause）和恢复（resume）操作，解决页面中如果存在持续渲染隐藏后可能引起卡顿的Bug
5.  新增 文件上传支持配置分块上传参数chunkSize，解决不能真实返回上传进度的Bug
6. 修复 Webview子窗口先隐藏（hide）再添加（append）到父窗口依然显示的Bug
7. 修复 二维码（Barcode）扫描在设备横屏时显示异常的Bug
8. 修复 创建视频播放控件（VideoPlayer）时，没有开始播放视频也会停止后台背景音频的Bug
9. 优化 视频播放的操作条的拖动误触和图标美化问题
10. 修复 在部分设备上插拔usb硬件设备可能引起应用重启的Bug

#### 2019年10月24日发布
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.3.7.70461_20191024.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.3.7.20191024）版本生成本地打包App资源。
2. Android平台 修复 微信分享内容包含网络图片时，第二次操作分享会失败的Bug

#### 2019年10月21日发布
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.3.6.70394_20191021.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.3.6.20191020）版本生成本地打包App资源。
2. 修复 HBuilderX2.3.5引出的上传文件 uploadFile 可能失败的Bug

#### 2019年10月18日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.3.5.70306_20191018.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.3.5.20191018）版本生成本地打包App资源。
2. Android平台 更新 个推/UniPush SDK（4.3.7.0），解决无法上架谷歌应用市场（GooglePlay）的问题
3. Android平台 修复 MIUI11中toast背景为白色，导致前景色无法看清的Bug
4. 更新 微信登录、分享、支付SDK（5.4.3），适配Android10
5. 更新 QQ登录、分享SDK（3.3.5），新浪微博登录、分享SDK（4.4.1）
6. 更新 高德地图SDK（6.8.0），解决在部分手机上可能出现黑屏的Bug
7. 修复 数据库查询SQL语句（plus.sqlite.selectSql）返回结果中的浮点数据类型精度丢失的Bug
8. 修复 在双卡手机上获取国际移动用户识别码（IMSI）只能返回一个值的Bug
9. 修复 Android10设备上获取设备唯一标识（UUID）为空的Bug
10. 修复 上传任务（plus.uploader.createUpload）提交的请求头中包含多个Cookie的Bug
11. 修复 上传任务（plus.uploader.createUpload）不能真实返回上传进度的Bug
12. 修复 蓝牙断开设备连接（plus.bluetooth.closeBLEConnection）可能不触发onBLEConnectionStateChange事件的Bug
13. 修复 微信分享图片无法加载带重定向的url链接的Bug
14. 修复 Webview窗口动画在特定情况下可能会将pop-in/out动画自动变为slide-in/out-right的Bug

#### 2019年09月23日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.69757_20190923-2.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.3.3.20190923）版本生成本地打包App资源。

#### 2019年09月21日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.69694_20190921.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.3.2.20190921）版本生成本地打包App资源。
2. Android平台 修复 系统相册选择文件（plus.gallery.pick）设置selected参数时多次选择失效的Bug [详情](https://ask.dcloud.net.cn/question/78931)	

#### 2019年09月20日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.69599_20190920.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.3.1.20190920）版本生成本地打包App资源。

#### 2019年09月20日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.69546_20190920.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.3.0.20190919）版本生成本地打包App资源。
2. 优化 窗体动画popin/popout的效率，Android6+加入老窗体透明alpha效果（同时注意此时动画时长设置不再生效）
3. 修复 部分平板设备横屏显示时可能出现灰色区域的Bug
4. 修复 图片压缩转换（plus.zip.compressImage）后exif头信息丢失的Bug
5. 修复 获取图片信息（plus.io.getImageInfo）传入网络图片地址无法下载图片时控制台输出Unexpected identifier错误的Bug
6. 修复 设置应用全屏显示（plus.navigator.setFullscreen）时在部分刘海屏设备显示区域可能不正确的Bug
7. 修复 Webview窗口动画在Android6以下设备可能出现残影的Bug
8. 修复 使用plus.io.resolveLocalFileSystemURL方法传入路径非'/'结尾是获取目录对象entry不正确，导致entry.getDirectory创建子目录路径不对的Bug

#### 2019年08月19日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.68191_20190819-1.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.2.2.20190816）版本生成本地打包App资源。
2. 修复 部分情况下软键盘隐藏后页面底部留白的Bug [详情](https://ask.dcloud.net.cn/question/76683)
3. 修复 plus.gallery.pick选择视频后返回失败的Bug
4. 修复2.2.1引起的uniapp原生插件使用时报错找不到的问题

#### 2019年08月14日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.68001_20190814.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.2.1.20190813）版本生成本地打包App资源。
2. 修复 在小米手机上选择本地视频总是返回失败回调的Bug
3. 修复 nvue页面中input组件弹出软键盘后报js错误（Failed to receiveTasks, instance is not available）的Bug

#### 2019年08月12日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.67817_20190812-1.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.2.0.20190810）版本生成本地打包App资源。
2. 新增 5+ APP和uni-app适配支持arm64-v8a（64位）CPU类型，解决GooglePlay提审要求64位的问题
3. 更新 支付宝SDK版本为15.6.5，修复SDK版本过低可能被Google Play下架的Bug
4. 新增 支持manifest.json文件中设置屏幕方向（screenOrientation）真机运行时可立即生效（无需提交云端打包）
5. 新增 适配最新的Android Q（API等级29）系统
6. 新增 可在打包时取消x86 cpu支持，以减少apk体积
7. 修复 部分安卓4.4手机上获取设备信息（plus.device.getInfo）无法返回imei的Bug
8. 修复 微信登录第一次授权登录可能返回失败的Bug
9. 修复 华为手机调用plus.runtime.setBadgeNumber(0)无法清除应用角标的Bug

#### 2019年07月24日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.66861_20190724.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.1.3.20190723）版本生成本地打包App资源。
2. 修复 Webview子窗口调用plus.webview.startAnimation动画可能引起页面不显示的Bug
3. 修复 Webview窗口软键盘弹出高度可能不正确的Bug
4. 修复 Webview父子窗口都设置statusbar后导致显示不正确的Bug，统一为父子窗口同时设置statusbar后仅子窗口的statusbar生效
5. 修复 Webview窗口的标题栏（titleNView）设置搜索框（searchInput）后可能会同时显示标题文字（titleText）的Bug
6. 修复 wap2app应用首页为选项卡页面在全面屏手机第一次打开底部可能有空白的Bug
7. 修复 图片进行扫码识别（plus.barcode.scan）返回数据多出引号的Bug
8. 修复 获取设备信息（plus.device.getInfo）在部分只有一个IMEI号的设备（如华为荣耀6等）无返回值的Bug
9. 修复 uni-app应用中nvue页面使用uni-app编译模式打包后覆盖安装使用了weex模式（老模式）版本引起nvue页面白屏的Bug

#### 2019年07月16日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.66551_20190716.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.1.1.20190716）版本生成本地打包App资源。
2. 修复 nvue页面中image标签的placeholder属性设置本地地址可能引起崩溃的Bug
3. 修复 原生控件对象（plus.nativeObj.View）不添加到Webview窗口直接显示后无法正常关闭的Bug

#### 2019年07月15日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.66419_20190715.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.1.0.20190713）版本生成本地打包App资源。
2. 新增 5+App添加UniPush功能，替代之前的个推和小米推送。[详情](https://ask.dcloud.net.cn/article/35622)
3. 新增 获取设备信息方法（plus.device.getInfo），不再推荐使用plus.device.imei。把属性改为方法可以避免Android平台在应用启动时被某些手机提示需要电话权限的问题。[详情](https://ask.dcloud.net.cn/article/36075)
4. 云端打包API等级（targetSdkVersion）默认值调整为26，满足各主流应用市场的上架要求
5. 新增 获取应用（ipa/apk）版本号（plus.runtime.versionCode）接口 [文档](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.versionCode)
6. 新增 获取应用信息（plus.runtime.getProperty）支持manifest.json文件中的版本号（version->code字段值） [文档](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.WidgetInfo)
7. 修复 网络请求接口（plus.net.XMLHttpRequest）获取HTTP响应头部信息字段中多一个空格的Bug
8. 优化 图片预览（plus.nativeUI.previewImage）界面未沉浸式状态栏效果
9. 修复 配置渠道云端打包后获取的渠道信息（plus.runtime.channel）总是为空的Bug [详情](https://ask.dcloud.net.cn/question/72721)
10. 修复 HBuilderX2.0.0版本引出的plus.io.getImageInfo一直触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/72240)
11. 修复 搜索蓝牙设备（plus.bluetooth.startBluetoothDevicesDiscovery）设置为允许重复上报相同设备（allowDuplicatesKey参数为true）时，获取设备列表为空的Bug
12. 修复 图片预览（plus.nativeUI.previewImage）设置两张图片且loop为true会闪退的Bug [详情](https://ask.dcloud.net.cn/question/72711)
13. 完善 原生图片对象（plus.nativeObj.Bitmap）保存图片（save）方法兼容非预期参数 [详情](https://ask.dcloud.net.cn/question/72937)
14. 修复 使用unipush模块提交华为应用市场报“HMS根证书文件”错误的Bug [详情](https://ask.dcloud.net.cn/question/73258)
15. 修复 Webview窗口在某些情况（如退出视频全屏播放、弹出软键盘按home键后再切回前台、wap2app应用设置statusbar）可能出现底部空缺的Bug [详情](https://ask.dcloud.net.cn/question/72909)
16. 修复 subnvue窗口在某些情况下调用setStyle无效的Bug
17. 修复 视频控件（VideoPlayer）可能偶发出现进度条不更新不消失的Bug
18. 修复 视频播放（VideoPlayer）控件提交云端打包后无法播放本地视频文件的Bug [详情](https://ask.dcloud.net.cn/question/74129)
19. 修复 应用第一次运行时调用定位功能可能不弹出定位权限申请框也不触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/73081)
20. 修复 原生控件（NView）绘制字体图标在部分魅族手机上可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/64233)
21. 修复 部分手机上设置titleNView后可能引起页面高度不对的Bug [详情](https://ask.dcloud.net.cn/article/74198)
22. 修复 通过plus.runtime.launchApplication启动的应用可能出现plus.runtime.arguments更新失败的Bug [详情](https://ask.dcloud.net.cn/question/74479)
23. 修复 nvue页面云端打包后设置字体（font-family）属性可能无效的Bug
24. 修复 nvue页面创建WebSockets连接服务器总是反馈超时错误的Bug
25. 修复 uni-app为多tab应用，切换显示nvue页面时可能出现顶部留白的Bug [详情](https://ask.dcloud.net.cn/question/73687)

#### 2019年06月14日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.64803_20190614.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.0.1.20190614）版本生成本地打包App资源。
2. 修复 配置渠道云端打包后获取的渠道信息（plus.runtime.channel）总是为空的Bug
3. 修复 图片预览（plus.nativeUI.previewImage）设置两张图片且loop为true会闪退的Bug

#### 2019年06月11日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.64551_20190611.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（2.0.0.20190610）版本生成本地打包App资源。
2. 新增 Webview窗口标题栏（titleNView）支持获取输入搜索内容功能（getTitleNViewSearchInputText）
3. 新增 Webview窗口标题栏（titleNView）支持监听搜索输入框焦点变化事件（titleNViewSearchInputFocusChanged） 
4. 修复 Webview窗口未设置标题栏（titleNView）时可能出现显示错误的Bug
5. 修复 数据库多次执行事务（plus.sqlite.transaction）可能不成功的Bug
6. 修复 蓝牙（Bluetooth）搜索设备返回的advertisData数据丢失前两个字节的Bug
7. 修复 部分设备上开启全面屏手势的情况下获取屏幕高度（plus.screen.resolutionHeight）不正确的Bug
8. 修复 网络请求（plus.net.XMLHttpRequest）没有共享cookie的Bug
9. 修复 视频控件（VideoPlayer）切换视频可能出现无法播放的Bug
10. 修复 视频控件（VideoPlayer）播放部分rtmp协议视频可能出现没有声音的Bug
11. 修复 uni-app应用设置窗口背景透明不生效的Bug
12. 修复 调用摄像头（Camera）录像完成后点击播放可能触发错误回调的Bug

#### 2019年05月23日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.63615_20190523.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.9.20190522）版本生成本地打包App资源。
2. 修复 使用console.log输出日志时在以[开头时日志可能显示不全的Bug

#### 2019年05月20日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.63309_20190518-1.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.8.20190518）版本生成本地打包App资源。
2. 修复 uni-app应用在部分手机热启动可能出现白屏的问题
3. 修复 HBuilderX1.9.7版本引出的plus.sqlite.selectSql返回数据结构不对的问题 

#### 2019年05月18日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.63309_20190518-1.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.7.20190517）版本生成本地打包App资源。
2. 优化 等待对话框（plus.nativeUI.showWaiting）默认图标为圆圈（circle）样式，并补充circle和雪花的样式选择参数
3. 修复 Webview窗口嵌套时可能出现高度计算不正确的Bug [详情](https://ask.dcloud.net.cn/question/56908)
4. 修复 网络请求（plus.net.XMLHttpRequest）返回code为201~206时返回responseText不对的Bug
5. 修复 地图控件调用getUserLocation、showUserLocation可能不会弹出定位授权确认框的Bug
6. 修复 uni-app在自定义组件模式下窗口中存在地图控件时新开页面再返回可能显示异常的Bug
7. 修复 nvue页面中的pickers组件可能无法正常弹出窗口的Bug
8. 修复 蓝牙（Bluetooth）模块不初始化直接调用startBluetoothDevicesDiscovery方法可能崩溃的Bug [详情](https://ask.dcloud.net.cn/question/70752)
9. 修复 在部分手机上第一次运行时可能无法搜索到蓝牙设备的Bug
10. 修复 uni-app中播放网络地址音频可能无法播放的Bug [详情](https://ask.dcloud.net.cn/question/69393)
11. 补齐 调用摄像头录像（startVideoCapture）支持设置视频长度videoMaximumDuration参数。设置录像时间无需再使用Native.js
12. 修复 原生控件（plus.nativeObj.View）调用drawText绘制文本时position参数的top/left字段不支持auto的Bug
13. 修复 SQLite中调用executeSql执行删除数据库（drop table database）操作后执行查询selectSql方法不触发回调的Bug
14. 修复 直播推流（LivePusher）控件可能在首次创建时出现黑屏的Bug
15. 修复 定位模块（Geolocation）调用watchPosition方法监听定位变化后再调用getCurrentPosition方法可能导致监听方法失效的Bug
16. 修复 使用百度地图调用地理编码（plus.maps.Map.geocode）可能失败的Bug

#### 2019年04月27日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.62327_20190427.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.4.20190426）版本生成本地打包App资源。
2. 新增 Webview窗口标题栏上搜索框（searchInput）支持设置输入的文本内容 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.setTitleNViewSearchInputText)
3. 新增 请求系统权限plus.android.requestPermissions接口 [文档](https://www.html5plus.org/doc/zh_cn/android.html#plus.android.requestPermissions)
4. 修复 nvue页面调用uni.removeStorage报js错误的问题 [详情](https://ask.dcloud.net.cn/question/69595)
5. 修复 设置targetSdkVersion为28时调用plus.runtime.install安装应用无效的问题 [详情](https://ask.dcloud.net.cn/question/69331)

#### 2019年04月18日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.61776_20190418-1.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
3. **重要：如需操作Application，必须要继承自DCloudApplication。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.2.20190417）版本生成本地打包App资源。
2. 修复 HBuilderX1.9.0版本引出的直播推流控件（LivePusher）可能黑屏的问题
3. 修复 HBuilderX1.9.0版本引出的Webview窗口非全屏时宽高可能计算不对的问题
4. 修复 HBuilderX1.9.0版本引出的uni-app首页为nvue页面可能白屏的问题
5. 修复 uni-app在自定义组件模式下调用监听设备位置变化（plus.geolocation.watchPosition）报无clearTimeout方法的问题 [详情](https://ask.dcloud.net.cn/question/68864)

#### 2019年04月16日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.61662_20190415.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.1.20190415）版本生成本地打包App资源。
2. 修复 设置targetSdkVersion为25及以上时调用系统分享（plus.share.sendWithSystem）无效的问题
3. 修复 Webview标题栏的输入框（searchInput）在部分设备无法获得焦点的问题

#### 2019年04月12日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.61555_20190412.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.9.0.20190413）版本生成本地打包App资源。
2. 优化 音频播放（AudioPlayer）功能，支持设置自动播放(autoplay)、循环播放(loop)、开始播放位置(startTime)、音频标题(title)及监听播放相关事件等
3. 修复 直播推流（LivePusher）控件在Android8.0及以上系统可能引起崩溃的问题
4. 修复 调用通讯录查找联系人方法（find）在Android8.0及以上系统可能引起崩溃的问题
5. 修复 修复 二维码扫描控件（Barcode）可能出现扫描框不居中的问题
6. 修复 UniPush通过厂商通道接收到多条消息后点击可能不触发click事件的问题

#### 2019年04月01日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.60827_20190401.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.8.2.20190330）版本生成本地打包App资源。
2. SQLite模块（plus.sqlite.*），支持操作本地数据库文件。[打包配置指南](https://ask.dcloud.net.cn/article/35729)。[API文档](https://www.html5plus.org/doc/zh_cn/sqlite.html)
3. 新增 页面中input标签type=file时支持选择摄像头拍照
4. 修复 应用从后台重新激活后plus.runtime.arguments值可能不更新的问题
5. 修复 视频控件（VideoPlayer）云端打包后可能无法播放本地视频文件的问题
6. 修复 二维码扫描（Barcode）控件多次创建大小不同时可能导致识别区域偏移的问题
7. 修复 uni-app应用资源通过wgt升级可能提示缺少uninview模块的问题
8. 修复 Android9设备调用plus.runtime.install安装apk无效的问题

#### 2019年03月15日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.59671_20190315.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.7.0.20190314）版本生成本地打包App资源。
2. 更新 个推SDK更新为4.3.20版本，兼容Android9.0
3. 修复 Webview窗口标题栏（titleNView）设置backgroundColor属性后系统状态栏背景可能不生效的问题
4. 修复 在部分Android8.0设备调用 plus.runtime.install 接口无法安装apk的问题
5. 修复 在部分Android8.0设备调用 plus.runtime.openFile 接口打开文件可能无效的问题
6. 修复 二维码扫描窗口无法全屏显示的问题（参考HelloH5模板应用的Barcode示例页面）
7. 修复 修复 二维码扫描窗口未授权相机权限后返回可能引起横屏显示的问题
8. 视频控件（VideoPlayer）无法播放部分rtsp、rtmp视频，缓冲时间过长，切换视频播放进度未更新等问题
9. 修复 nvue页面中image标签圆角（borderRadius）不生效的问题

#### 2019年02月21日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.58821_20190221.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.6.2.20190220）版本生成本地打包App资源。
2. 修复 获取语言（plus.os.language、navigator.language）一直返回英文（en_US）的问题
3. 修复 下载任务未配置fileName参数并且url地址中未包含文件名称时可能导致下载失败的问题
4. 修复searchInput在uni-app中autoFocus会自动关闭软键盘的问题
5. 修复 视频播放（VideoPlayer）控件无法播放本地视频文件的问题
6. 修复 修复 蓝牙连接设备后可能立即中断（日志提示Cannot read property 'map' of null）的问题
7. 修复 nvue页面中image标签不触发load事件的问题
8. 修复 修复 nvue页面中slider标签初始化设置index属性不生效的问题

#### 2019年01月21日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.58073_20190121.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
2. **重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.5.1或1.5.2）版本生成本地打包App资源。
2. 调整SDK默认为高德地图。
3. 标题栏按钮（WebviewTitleNViewButtonStyles）支持红点、角标和向下箭头等
4. 修复 窗口中原生标题栏（titleNView）style为transparent样式时返回按钮图标不可见的问题
5. 修复 窗口中包含地图控件时切换动画可能出现白屏现象的问题
6. 修复 窗口设置显示进度条（progress）在页面跳转时可能不触发显示进度的问题
7. 修复 二维码扫描窗口无法全屏显示的问题（参考HelloH5模板应用的Barcode示例页面）
8. 修复 视频播放（VideoPlayer）控件断网恢复后可能无法继续播放的问题
9. 修复 设置应用启动图片为.9.png时有可能出现拉伸显示的问题
10. 修复 原生控件（NView）绘制图片是left/top属性值设置为auto时无法居中显示的问题
11. 修复 原生控件（NView）字体或背景颜色值使用rgba格式时无法容错解析空格的问题
12. 修复 百度地图在部分手机上可能出现闪黑的问题
13. 修复 推送消息传输透传数据时可能出现payload参数无法返回的问题
14. 更新 小米推送SDK版本为3.6.12
15. 修复 窗口使用circle样式下拉刷新时可能不触发H5中touchcancel事件的问题
16. 修复 下载（Downloader）任务过多时暂停后可能无法再继续的问题
17. 修复 上传（Uploader）任务的地址为https时可能无法正常上传的问题
18. 修复 nvue页面在非解压模式可能出现图片无法正常显示的问题

#### 2018年12月26日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.56749_20181226-1.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.4.0.XXXX）版本生成本地打包App资源.
2. 更新 nvue页面渲染内核，速度更快、效率更高
3. 优化 应用图标角标设置支持华为手机、适配新版本小米手机
4. 优化 支持Android9.0查询是否为刘海屏设备（plus.navigator.hasNotchInScreen）
5. 修复 部分Android9.0设备上可能弹出"Detected problems with API compatibility"提示框问题
6. 修复 打包设置gargetSDKVersion大于26可能导致无法接收推送消息的问题
7. 修复 蓝牙读写二进制数据可能不正确的问题
8. 修复 Webview窗口的titleNView设置为transparent样式时可能直接显示文字的问题
9. 修复 Webview窗口的titleNView上按钮字体图标可能不居中显示的问题

#### 2018年12月12日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.55933_20181212.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.3.1.20181211）版本生成本地打包App资源.
2. 新增 支持蓝牙模块 [详见](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
3. 新增 支持启动微信小程序（plus.share.ShareService.launchMiniProgram），同时需在manifest中配置navigateToMiniProgramAppIdList
4. 新增 titleNView配置支持左右内边距（padding/padding-left/padding-right）和按钮的宽度（width）
5. 新增 查询设备是否为刘海屏设备接口（plus.navigator.hasNotchInScreen）
6. 更新 百度地图SDK（v5.2.1）及百度定位SDK（v7.5.0）
7. 更新barcode模块，优化二维码识别，修复部分二维码可能无法识别的问题（barcode离线打包集成发生变化，请参考SDK中文档集成）
8. 修复 Webview的默认下拉刷新样式可能显示不正常的问题
9. 修复 Webview未显示时通过setStyle方法设置参数可能无法及时生效的问题
10. 优化 从相册选择图片（plus.gallery.pick）界面交互体验，修复 在部分手机设置filter为video无效的问题
11. 修复 视频控件（VideoPlayer）全屏/非全屏切换导致视频从头播放的问题

#### 2018年11月27日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.55187_20181127.zip)

1. **重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**
1. 更新uni-app离线打包支持，需使用HBuilderX（1.2.1.20181126）版本生成本地打包App资源
2. 新增 nvue页面支持bindingx
3. 优化 原生图片预览（plus.nativeUI.previewImage）的UI操作体验
4. 修复 Webview窗口default样式下拉刷新不触发pullToRefresh事件的问题
5. 新增 Webview窗口支持配置显示页面加载进度条（WebviewStyles的progress属性）
6. 修复 从无法微信小程序启动的问题
7. 修复 Webview窗口default样式下拉刷新不触发pullToRefresh事件的问题
8. 修复 视频播放控件（VideoPlayer）在自动调节亮度模式进入全屏变黑的问题
9. 修复 nvue页面不支持Websocket功能的问题
10. 修复 nvue页面未设置titleNView时可能显示不正常的问题
11. 删除lib.5plus.base-release.aar基座中敏感权限，因权限缺失导致的运行失败需手动添加到AndroidManifest.xml中

#### 2018年11月09日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.53439_20181109.zip)

1. 更新uni-app离线打包支持，需使用HBuilderX（1.1.0.20181030）版本生成本地打包App资源
2. 修改高德地图定位权限和marker点击问题
3. 若小米手机运行时出现弹窗提醒，请将targetSdkVersion调至28

#### 2018年09月29日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.52372_20180929-2.zip)

1. 新增支持uni-app离线打包（HBuilderX中生成本地打包App资源）
2. 简化SDK集成方式，优化jar为aar。
2. 新增支持视频播放控件、直播推流等控件；
3. 更新分享SDK（微信、新浪微博），支持分享音频、视频、小程序等；
4. 修复已知5+API的bug，提升稳定性。

#### 2018年05月11日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.45003_20180511-3.zip)

1. 修复近期发现的一些bug，提升稳定性

#### 2018年03月21日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.43349_20180321.zip)

1. 支持玩咖广告。
2. 同步更新流应用内核：修复一些已知的BUG等

#### 2018年03月19日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.43166_20180319.zip)

1. 去掉android.support.v4包引用，由开发者在gradle文件自行配置
2. 同步更新流应用内核：修复一些已知的BUG等

#### 2018年03月14日发布 
[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@1.9.9.42938_20180314.zip)

1. 完善广告功能，可以通过配置manifest.json控制是否使用开屏广告
2. 同步更新流应用内核：修复一些已知的BUG等
</details>