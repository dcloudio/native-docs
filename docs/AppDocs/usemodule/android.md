### 模块配置
### Module configuration

#### 依赖库配置
#### Dependency library configuration

参考“Feature-Android.xls”文档确定应用中使用到的扩展API，拷贝libs目录中对应的“jar或aar”文件拷贝到工程的app->libs目录下，如使用地图功能，需将下图“jar包”列对应的文件拷贝到libs目录下。此处以高德地图为例。
Refer to the "Feature-Android.xls" document to determine the extended API used in the application, copy the corresponding "jar or aar" file in the libs directory to the app->libs directory of the project, if using the map function, you need to copy the following Copy the files corresponding to the "jar package" column to the libs directory. Here we take Gaode map as an example.
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-11.png)
	
#### 添加应用权限
#### Add App Permissions
	
参考“Feature-Android.xls”文档的“AndroidManifest.xml permission”列，将需要配置的模块的权限拷贝到对应项目的Androidmanifest.xml中，如下图。
Refer to the "AndroidManifest.xml permission" column of the "Feature-Android.xls" document, and copy the permissions of the modules to be configured to the Androidmanifest.xml of the corresponding project, as shown in the figure below.
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-12.png)
	
#### dcloud_properties.xml 配置
#### dcloud_properties.xml configuration
	
参考“Feature-Android.xls”文档的“properties.xml文件配置”列，将需要配置的模块的features节点和services节点拷贝到dcloud_properties.xml中，如下图。
Refer to the "properties.xml file configuration" column of the "Feature-Android.xls" document, and copy the features node and services node of the module to be configured to dcloud_properties.xml, as shown in the figure below.
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-14.png)
	
#### 添加第三方应用信息
#### Add third-party application information
	
参考“Feature-Android.xls”文档的“AndroidManifest.xml Application节点”列，将需要配置的模块的节点拷贝到对应项目的Androidmanifest.xml中并修改对应的应用信息，如下图。
Refer to the "AndroidManifest.xml Application node" column of the "Feature-Android.xls" document, copy the node of the module to be configured to the Androidmanifest.xml of the corresponding project and modify the corresponding application information, as shown in the figure below.
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-13.png)
	
### 其他模块配置
### Other module configuration

* [推送模块配置](/AppDocs/usemodule/androidModuleConfig/push.md)
* [Push module configuration](/AppDocs/usemodule/androidModuleConfig/push.md)
* [分享模块配置](/AppDocs/usemodule/androidModuleConfig/share.md)
* [Share Module Configuration](/AppDocs/usemodule/androidModuleConfig/share.md)
* [登陆鉴权模块配置](/AppDocs/usemodule/androidModuleConfig/oauth.md)
* [Login authentication module configuration](/AppDocs/usemodule/androidModuleConfig/oauth.md)
* [地图模块配置](/AppDocs/usemodule/androidModuleConfig/map.md)
* [Map Module Configuration](/AppDocs/usemodule/androidModuleConfig/map.md)
* [支付模块配置](/AppDocs/usemodule/androidModuleConfig/pay.md)
* [Payment Module Configuration](/AppDocs/usemodule/androidModuleConfig/pay.md)
* [定位模块配置](/AppDocs/usemodule/androidModuleConfig/geolocation.md)
* [Geolocation Module Configuration](/AppDocs/usemodule/androidModuleConfig/geolocation.md)
* [语音识别模块配置](/AppDocs/usemodule/androidModuleConfig/speech.md)
* [Speech recognition module configuration](/AppDocs/usemodule/androidModuleConfig/speech.md)
* [其他模块及国际化配置](/AppDocs/usemodule/androidModuleConfig/others.md)
* [Other modules and internationalization configuration](/AppDocs/usemodule/androidModuleConfig/others.md)
	