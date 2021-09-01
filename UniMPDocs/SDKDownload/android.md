**如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK**

## 更新日志

### 2021年08月26日发布

#### SDK 3.2.3 版本
[点击下载SDK UniMPSDK_Android@3.2.3.20210826.zip](https://download.dcloud.net.cn/unimpsdk/UniMPSDK_Android@3.2.3.20210826.zip)
+ 需使用HBuilderX（3.2.3）版本生成 小程序App 资源
+ SDK中unimp-release.aar改为unimp-v8-release.aar更新SDK的同学需要注意
+ 其他更新 [详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.3.20210825.html)

### 2021年08月27日发布

#### SDK 3.2.5 beta 版本（支持同时运行多个小程序）

[点击下载SDK UniMPSDK_Android@3.2.5-beta-20210827.zip](https://download.dcloud.net.cn/unimpsdk/UniMPSDK_Android@3.2.5-beta-20210827.zip)
+ 需使用HBuilderX（3.2.5）版本生成 小程序App 资源
+ 此版本对底层框架做了大的改动，现已支持多个小程序同时运行，欢迎尝鲜体验，如有任何问题请及时在群内反馈；
+ 目前最多同时开启3个unimp小程序。超过3个则遵循先入先出的原则关闭早先打开的小程序。需要注意！
+ SDK部分类名及API均有调整需参考API文档及示例进行修改! [小程序多开功能示例](UniMPDocs/Sample/android-v2)、[小程序多开API文档](UniMPDocs/API/android-v2);
+ 其他更新 [详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.5.20210827-alpha.html)

## 升级SDK注意事项

+ 升级SDK时第一步就是先将SDK目录下的assets文件相关资源替换更新。最主要的就是uni-jsframework.js 一定要替换!
+ 更新proguard.cfg混淆配置
+ 将文档说的4个必须库全部替换更新uniMPSDK-release.aar、uniapp-release.aar、oaid_sdk_1.0.xx.aar、android-gif-drawable-release@1.xx.aar。其他aar根据之前版本是否集成选择更新替换。

## 历史稳定版本

百度网盘链接: [https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q](https://pan.baidu.com/s/1Gb19IMm2ihRA0u4MNzCT4Q) 提取码: hnug