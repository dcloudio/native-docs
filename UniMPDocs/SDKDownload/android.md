**如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK**

## 更新日志

### 2021年07月09日发布

#### SDK 3.1.22 版本
[点击下载SDK UniMPSDK_Android@3.1.22.20210709.zip](http://download.dcloud.net.cn/unimpsdk/UniMPSDK_Android@3.1.22.20210709.zip)
+ 需使用HBuilderX（3.1.22）版本生成 小程序App 资源
+ SDK中unimp-release.aar改为unimp-v8-release.aar更新SDK的同学需要注意
+ 其他更新 [详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.1.22.20210709.html)

### 2021年08月02日发布

#### SDK 3.2.0 beta 版本（支持同时运行多个小程序）

[点击下载SDK UniMPSDK_Android@3.2.0-beta-20210802.zip](http://download.dcloud.net.cn/unimpsdk/UniMPSDK_Android@3.2.0-beta-20210802.zip)
+ 此版本对底层框架做了大的改动，现已支持多个小程序同时运行，欢迎尝鲜体验，如有任何问题请及时在群内反馈；
+ 目前最多同时开启3个unimp小程序。超过3个则遵循先入先出的原则关闭早先打开的小程序。需要注意！
+ SDK部分类名及API均有调整需参考API文档及示例进行修改! [小程序多开功能示例](UniMPDocs/Sample/android-v2)、[小程序多开API文档](UniMPDocs/API/android-v2);
+ unimp小程序默认开启后台模式，可配置非后台模式
+ 修复部分情况可能无法正常打开小程序的bug
+ 修复 内置小程序资源 更新时部分情况可能无法更新路由的bug
+ 修复 启动小程序时arguments可能会失效的bug

## 历史稳定版本

百度网盘链接: [https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q](https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q) 提取码: hnug