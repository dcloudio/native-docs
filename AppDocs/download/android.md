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

### 2022年10月28日发布——HBuilderX（3.6.8.20221027-alpha）

[百度云](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

[和彩云](https://caiyun.139.com/m/i?115Co9WXRrsTt)，提取码: gQVv

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.8.20221027-alpha）版本生成本地打包App资源。
+ 优化 Vue3 项目 minUserAgentVersion 默认配置为 49，避免低版本webview上白屏无提示 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
+ 修复 uni.getStorageSync在某些情况下可能报`SyntaxError`错误的Bug [详情](https://ask.dcloud.net.cn/question/154284)
+ 修复 uts插件不支持泛型通配符语法的Bug [详情](https://ask.dcloud.net.cn/question/155942)
+ 新增 UTS插件 支持application/activity部分生命周期函数 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#iodcloudutsandroid)
+ 修复 chooseVideo 使用相机拍摄视频在Android10及以上设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/155877)
+ 修复 chooseImage、chooseVideo 存在读取设备应用安装列表的行为可能导致隐私检测不合规的Bug
+ 修复 应用安全检测可能报`app关联启动`的Bug
+ 修复 3.6.0版本引出的 首次真机运行隐私政策提示框可能不弹出的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp

[和彩云下载历史版本](https://caiyun.139.com/m/i?115CoTUvbt4q9)，提取码: FaYg

[历史更新日志](/AppDocs/download/historyRelease/androidAlpha.md)
