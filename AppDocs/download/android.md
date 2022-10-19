## Android 离线SDK - 正式版

**注意：HBuilderX 3.2.5版本之后适配了AndroidX，升级时需要参考文档重新配置**

### 2022年09月26日发布——HBuilderX（3.6.4.20220922）

[百度云](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

[和彩云](https://caiyun.139.com/m/i?115CeU0TNdKlH)，提取码: hX73

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.4.20220922）版本生成本地打包App资源。
+ 修复 3.5.5版本引出 input 组件自动获取焦点可能失效的Bug
+ 修复 本地打包生成的自定义基座可能无法识别安装的Bug
+ 修复 3.6.2版本引出的 在 Android4.4 设备无法正常运行的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/1qxxUqh9ifF7mfJ4T46NB4Q)，提取码: xwe9

[和彩云下载历史版本](https://caiyun.139.com/m/i?115ConOP2fLZy)，提取码: Sg1Z

[历史更新日志](/AppDocs/download/historyRelease/androidRelease.md)


## Android 离线SDK - Alpha版

### 2022年10月18日发布——HBuilderX（3.6.7.20221018-alpha）

[百度云](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

[和彩云](https://caiyun.139.com/m/i?115Co9WXRrsTt)，提取码: gQVv

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.7.20221018-alpha）版本生成本地打包App资源。
+ 修复 getSystemInfo 的 deviceId 属性偶尔获取失败和多设备获取重复的Bug（注意此修改造成的向下兼容问题）[详情](https://uniapp.dcloud.net.cn/api/system/info.html)
+ 更新 uni-AD 快手广告SDK Android为3.3.31；快手内容联盟SDK iOS为 3.3.32 版；Sigmob广告联盟SDK Android为 4.7.0 版；百度百青藤广告SDK Android为 9.241 版；华为广告SDK Android为 13.4.56.302 版
+ 修复 plus.device.uuid 在高版本Android上不同设备获取的值可能相同的Bug。如之前依赖uuid，需注意处理兼容
+ 新增 plus.device.getDeviceId 获取匿名设备标识 [详情](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getDeviceId)
+ 新增 模板隐私政策提示框支持配置`游客模式`按钮 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
+ 更新 Paypal SDK 为 0.6.2 版，解决设置targetSdkVersion为31打包失败的问题 [详情](https://ask.dcloud.net.cn/question/154976)
+ 修复 UniPush 异步获取推送标识在部分情况可能返回慢的Bug
+ 修复 应用设置仅支持竖屏时在部分Android8设备可能引起应用崩溃的Bug
+ 修复 X5 内核在部分情况无法正确加载的Bug [详情](https://ask.dcloud.net.cn/question/152854)
+ 修复 直播推流 LivePusher 在部分场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/147593)
+ 修复 视频播放控件 VideoPlayer 切换视频资源后静音状态可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153257)
+ 修复 视频播放控件 VideoPlayer 销毁时可能导致卡顿的Bug [详情](https://ask.dcloud.net.cn/question/153483)
+ 修复 视频播放控件 VideoPlayer 在部分情况下标题栏不显示的Bug
+ 修复 chooseVideo 选择视频文件在鸿蒙系统可能无法加载缩略图的Bug [详情](https://ask.dcloud.net.cn/question/152527)
+ 修复 一键登录 全屏模式设置背景图时沉浸式效果不正确的Bug
+ 修复 上架应用市场审核可能报`数字天堂SDK获取传感器的行为`的Bug [详情](https://ask.dcloud.net.cn/question/155043)
+ 修复 本地打包生成的自定义基座可能无法识别安装的Bug
+ 修复 3.6.0版本引出的 在 Android4.4 设备无法正常运行的Bug [详情](https://ask.dcloud.net.cn/question/153910)

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CoTUvbt4q9)，提取码: FaYg

[历史更新日志](/AppDocs/download/historyRelease/androidAlpha.md)
