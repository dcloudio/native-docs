### 模块配置

#### 依赖库配置

参考“Feature-Android.xls”文档确定应用中使用到的扩展API，拷贝libs目录中对应的“jar或aar”文件拷贝到工程的app->libs目录下，如使用地图功能，需将下图“jar包”列对应的文件拷贝到libs目录下。此处以高德地图为例。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-11.png)
	
#### 添加应用权限
	
参考“Feature-Android.xls”文档的“AndroidManifest.xml permission”列，将需要配置的模块的权限拷贝到对应项目的Androidmanifest.xml中，如下图。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-12.png)
	
#### dcloud_properties.xml 配置
	
参考“Feature-Android.xls”文档的“properties.xml文件配置”列，将需要配置的模块的features节点和services节点拷贝到dcloud_properties.xml中，如下图。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-14.png)
	
#### 添加第三方应用信息
	
参考“Feature-Android.xls”文档的“AndroidManifest.xml Application节点”列，将需要配置的模块的节点拷贝到对应项目的Androidmanifest.xml中并修改对应的应用信息，如下图。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-13.png)
	
### 其他模块配置

* [推送插件配置](/AppDocs/usemodule/androidModuleConfig/push.md)
* [分享插件配置](/AppDocs/usemodule/androidModuleConfig/share.md)
* [登陆鉴权插件配置](/AppDocs/usemodule/androidModuleConfig/oauth.md)
* [地图插件配置](/AppDocs/usemodule/androidModuleConfig/map.md)
* [支付插件配置](/AppDocs/usemodule/androidModuleConfig/pay.md)
* [定位插件配置](/AppDocs/usemodule/androidModuleConfig/geolocation.md)
* [语音识别插件配置](/AppDocs/usemodule/androidModuleConfig/speech.md)
	