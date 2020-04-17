## 模块配置
### 比如配置蓝牙模块
1、打开“Feature-iOS.xls”文件，查看模块的配置要求，如下图：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx1.png)

2、在离线SDK包里，IOSSDK/SDK/Libs目录下找到需要的库文件，然后把找到的liblibBlueTooth.a库拷贝到工程的libs目录下，再根据配置要求把相关的库引入到工程中，如下图：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx2.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx3.png)

### 配置第三方库的参数
有些功能模块（如推送、分享、语音识别、统计），则需要通过“Feature-iOS.xls”文件中查找对应模块的“Info”值，并在工程属性界面“Info”下“Custom iOS Target Properties”中配置对应的项：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx11.png)

如百度地图，需要配置在百度云平台申请应用的appkey，找到“baidu”项下的“appkey”，双击后输入正确的appkey值：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx12.png)

注意：新浪微博和微信分享还需要配置应用的URL Schemes，在“URL Types”项下分别输入在各开放平台申请的值：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx13.png)

[iOS10之后 需要在info.plist文件中添加隐私权限配置](http://ask.dcloud.net.cn/article/931)

### 配置完成编译运行
应用配置完毕，在模拟器或者真机上编译运行工程，运行成功并且功能没有缺失，说明配置成功。


运行时如果提示“打包时未添加XXX模块”，（非中文提示时需要配置国际化），请参考SDK/Feature-ios.xls文件，查找对应插件名需要引入的5+库文件和系统库文件，添加到工程即可


## 其他模块配置

* [模块通用配置](/5PlusDocs/usemodule/iOSModuleConfig/common.md)
* [推送插件配置](/5PlusDocs/usemodule/iOSModuleConfig/push.md)
* [分享插件配置](/5PlusDocs/usemodule/iOSModuleConfig/share.md)
* [登陆鉴权插件配置](/5PlusDocs/usemodule/iOSModuleConfig/oauth.md)
* [地图插件配置](/5PlusDocs/usemodule/iOSModuleConfig/map.md)
* [支付插件配置](/5PlusDocs/usemodule/iOSModuleConfig/pay.md)
* [语音识别插件配置](/5PlusDocs/usemodule/iOSModuleConfig/speech.md)
* [直播推流插件配置](/5PlusDocs/usemodule/iOSModuleConfig/livepusher.md)
* [统计插件配置](/5PlusDocs/usemodule/iOSModuleConfig/statistic.md)
* [uni-AD广告联盟配置](/5PlusDocs/usemodule/iOSModuleConfig/uniad.md)
* [UIWebview模块配置](/5PlusDocs/usemodule/iOSModuleConfig/uiwebview.md)
