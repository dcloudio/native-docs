## 模块配置介绍
1、离线打包可以根据需要进行插件的增删，这个过程需要对工程做出修改。

2、目前插件需要修改的项目包含 LinkerFlags、 Library、Framework、资源文件、宏定义、info.plist文件几项。

3、并不是所有的插件都要修改以上几项，大部分插件只需要修改其中几项即可。

4、如果app中出现“缺失模块提醒框”，需要按照下面步骤添加相应的模块即可。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/50289.png)

### 每个插件需要修改哪些项目，每个项目需要配置的值是什么，可以查看SDK中的Feature-iOS.xls文件。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/50292.png)

### 具体修改方法：
#### 如何修改LinkerFlags配置
   按照下图找到Other Linker Flags 点击该项，在弹出的窗口中点击+可以添加flag 点击-可以删除flag
   ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1154.png)
   ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1218.png)

#### 如何修改Library配置
   library为插件对应的库文件和依赖库， 目前离线打包工程包括所有的库，不需要修改

#### 如何修改framework配置
 framework为插件依赖的系统库，按照下图找到framework的配置位置，点击+可以添加，选中framework点击-可以删除
 ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1156s.png)

#### 如何添加删除文件
 资源为插件需要使用的资源如图片、国际化文件等， 点击File->addFile 在弹出的对话框中选择响应文件即可，
删除时在工程中选中该项目，点击delete键
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1155.png)

#### 如何修改宏定义
   按照下图找到Macors，在弹出的窗口中点击+可以添加添加-可以删除
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1156.png)


## 如何配置模块
1、打开“Feature-iOS.xls”文件，查看模块的配置要求，如下图：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx1.png)

2、在离线SDK包里，IOSSDK/SDK/Libs目录下找到需要的库文件，然后把找到的liblibBlueTooth.a库拷贝到工程的libs目录下，再根据配置要求把相关的库引入到工程中，如下图：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx2.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx3.png)

## 如何配置第三方库的参数
有些功能模块（如推送、分享、语音识别、统计），则需要通过“Feature-iOS.xls”文件中查找对应模块的“Info”值，并在工程属性界面“Info”下“Custom iOS Target Properties”中配置对应的项：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx11.png)

如百度地图，需要配置在百度云平台申请应用的appkey，找到“baidu”项下的“appkey”，双击后输入正确的appkey值：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx12.png)

注意：新浪微博和微信分享还需要配置应用的URL Schemes，在“URL Types”项下分别输入在各开放平台申请的值：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx13.png)

注意：iOS10之后 有些功能需要在info.plist文件中添加隐私权限配置，比如：地图模块等等。

[info.plist文件中如何添加隐私权限配置](http://ask.dcloud.net.cn/article/931)



## 其他模块配置

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
