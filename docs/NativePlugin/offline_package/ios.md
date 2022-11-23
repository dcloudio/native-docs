## 预备环境
## Preparing the environment

- iOS 开发环境；
- iOS development environment;
- 已有 [离线打包](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios) 原生工程，或集成了 [uni小程序SDK](https://nativesupport.dcloud.net.cn/UniMPDocs/UseSdk/ios) 的原生工程；
- Existing [offline packaging](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios) native project, or integrated [uni applet SDK](https://nativesupport.dcloud.net.cn /UniMPDocs/UseSdk/ios) native project;
- 从插件市场下载原生插件（付费插件不支持下载） [插件市场](http://ext.dcloud.net.cn/?cat1=5&cat2=51)。
- Download native plug-ins from the plug-in market (paid plug-ins are not supported for download) [Plug-in Market](http://ext.dcloud.net.cn/?cat1=5&cat2=51).

## 预备知识
## Preliminary knowledge
### 1.插件目录说明
### 1. Plug-in directory description

```javascript
|-- 插件目录结构
	|-- android						// android 插件
	|-- ios							// ios 插件
	|-- package.json				// 插件配置文件
```

原生插件目录结构都是固定的，其中 android 路径中放的是 android 端插件，ios 路径中放的是 ios 端插件，package.json 为插件的配置文件，配置了插件id、格式、插件资源以及插件所需权限等等，**原生工程集成需要开发者根据 package.json 手动配置工程**（通过 HBuilderX 云端打包插件打包机会自动完成配置）。
The native plug-in directory structure is fixed, and the android path is for the android-side plug-in, and the ios path is for the ios-side plug-in. Required permissions, etc. **Native project integration requires developers to manually configure the project according to package.json** (configuration is automatically completed through the HBuilderX cloud packaging plug-in packager).

下面我们学习一下 package.json 配置的每个节点的含义以及如何手动将插件集成到离线工程中并添加相关配置项；
Let's learn the meaning of each node configured in package.json and how to manually integrate the plug-in into the offline project and add related configuration items;

### 2.完整 package.json 配置文件说明
### 2. Complete package.json configuration file description

完整的 package.json 配置文件格式如下（已移除离线集成插件不需要关心的节点），下面对每个节点如何在离线工程中配置进行说明
The format of the complete package.json configuration file is as follows (the nodes that the offline integration plug-in does not need to care about have been removed), and how each node is configured in the offline project is explained below
> **注意：一些插件中可能不会包含所有的节点，只需按照下面的说明配置插件中包含的节点即可**
> **Note: Some plugins may not include all nodes, just follow the instructions below to configure the nodes included in the plugin**

```json
{  
    "name": "插件名称",  
    "id": "插件标识",  
    "version": "插件版本号",  
    "description": "插件描述信息",  
    "_dp_type":"nativeplugin",  
    "_dp_nativeplugin":{  
        "ios": {  
            "plugins": [  
                {  
                    "type": "module|component, 插件类型",  
                    "name": "插件名称",  
                    "class": "插件的类名"   
                }  
            ], 
            "hooksClass": "插件事件钩子注册类名",  
            "frameworks": [  
                "插件依赖的系统库(系统库有.framework和.tbd和.dylib类型)"  
            ],  
            "embedFrameworks": [  
                "依赖的framework动态库"  
            ],  
            "resources": [  
                "插件要使用的资源文件列表，相对于ios目录的路径"  
            ],  
            "privacies": [  
                "插件使用到的隐私列表，如NSPhotoLibraryUsageDescription"  
            ],
            "parameters": {  
                "插件需要配置的参数名称, 如appid": {  
                    "des": "参数描述信息",  
                    "key": "参数需要配置到infor.plist中的键名, 嵌套时使用:分割，如getui:appid"  
                }  
            }  
        } 
    }  
}  
```

**plugins**  **hooksClass**

插件信息，及插件事件钩子注册类名，找到原生工程的 `info.plist` 文件右键选择 `Open As -> Source Code` 源码查看，添加如下节点信息，并根据 package.json 中配置的信息修改对应项的值 hooksClass、type、name、class
Plug-in information, and plug-in event hook registration class name, find the `info.plist` file of the native project, right click and select `Open As -> Source Code` source code view, add the following node information, and modify the corresponding information according to the information configured in package.json Item value hooksClass, type, name, class
> 注：工程中只能包含一个`dcloud_uniplugins`节点，如果配置多个插件只需在`dcloud_uniplugins`节点下配置多个`dict`节点即可
> Note: Only one `dcloud_uniplugins` node can be included in the project. If you configure multiple plugins, you only need to configure multiple `dict` nodes under the `dcloud_uniplugins` node
	
```
	<key>dcloud_uniplugins</key>
	<array>
		<dict>
			<key>hooksClass</key>
			<string>插件事件钩子注册类名</string>
			<key>plugins</key>
			<array>
				<dict>
					<key>type</key>
					<string>插件类型</string>
					<key>name</key>
					<string>插件名称</string>
					<key>class</key>
					<string>插件的类名</string>
				</dict>
			</array>
		</dict>
	</array>
```

**frameworks**

frameworks 为插件依赖的系统 framework 库，在工程的 `Link Binary With Libraries` 中点击下面的 + 号将插件所需的系统库添加进来即可
frameworks is the system framework library that the plug-in depends on. Click the + sign below in the `Link Binary With Libraries` of the project to add the system library required by the plug-in.

![](https://ask.dcloud.net.cn/uploads/article/20190404/b866d7b2ebcd877471f8e22110991839.png)
![](https://ask.dcloud.net.cn/uploads/article/20190404/2eabff8064866c67fb58a6f3b0bfaf9b.png)

**embedFrameworks**

embedFrameworks 为插件依赖的动态 framework 库，需要以动态库的方式引入工程一定不要弄错，在工程的 `Embed Frameworks` 中点击下面的 + 号，在插件ios目录中将 embedFrameworks 中所配置的动态库添加进来
embedFrameworks is a dynamic framework library that the plug-in depends on. It is necessary to import the project as a dynamic library. Don’t make a mistake. Click the + sign below in the `Embed Frameworks` of the project, and add the dynamic library configured in embedFrameworks to the plug-in ios directory. Come in

![](https://ask.dcloud.net.cn/uploads/article/20190404/fde851c922cfdf8dd2ee15465ccd671a.png)

在弹窗中选择 Add Other 然后找到插件ios目录下面的动态 framework 库
Select Add Other in the pop-up window and find the dynamic framework library under the plugin ios directory

![](https://ask.dcloud.net.cn/uploads/article/20190404/42a0054775dfbddede798d37437328f1.png)

**其他 .a 静态库及 frameworks 静态库**
**Other .a static libraries and frameworks static libraries**

除了 frameworks 节点及 embedFrameworks 节点中所配置的依赖库，在ios目录下面的其他 .a库文件 或 .framework库文件都为静态库，同样需要引入到工程中，同样在工程的 `Link Binary With Libraries` 中点击下面的 + 号将这些库也添加到工程
In addition to the dependent libraries configured in the frameworks node and embedFrameworks node, other .a library files or .framework library files under the ios directory are static libraries, which also need to be imported into the project, also in `Link Binary With Libraries` of the project Click the + sign below to add these libraries to the project

**resources**

resources 节点配置的是插件所需的资源文件，在工程的 `Copy Bundle Resources` 中点击下面的 + 号将插件所有资源文件添加到工程中
The resources node configures the resource files required by the plug-in. Click the + sign below in the `Copy Bundle Resources` of the project to add all the resource files of the plug-in to the project

![](https://ask.dcloud.net.cn/uploads/article/20190404/0bd77e3d4a84ffba2e5e832c752c4071.png)
![](https://ask.dcloud.net.cn/uploads/article/20190404/a94e2414a5a5b51cc6b4268f4fdcefe7.png)

**headers**

headers 为插件所暴露的头文件，只需将这些文件直接拖入到工程中即可
headers are the header files exposed by the plugin, just drag these files directly into the project

**privacies**

privacies 为插件所需要到的系统权限，需要在 info.plist 中添加相应权限描述 如
privacy is the system permission required by the plug-in, and the corresponding permission description needs to be added in info.plist, such as

![](https://ask.dcloud.net.cn/uploads/article/20190404/cef6439f0089a243d264d2c381832a9b.png)

**parameters**

parameters 中配置的信息也需要在 info.plist 中添加 举例：
The information configured in parameters also needs to be added in info.plist For example:
	
"key": "getui:appid"

info.plist 中添加
add in info.plist

```
<key>getui</key>
<dict>
	<key>appid</key>
	<string>填写对应的appid</string>
</dict>
```
	
## 集成示例
## Integration example

### 1.下载插件
### 1. Download the plugin

从插件市场下载[uni-app原生插件](http://ext.dcloud.net.cn/?cat1=5&cat2=51)（以[RichAlert](http://ext.dcloud.net.cn/plugin?id=36)为例）
Download [uni-app native plug-in](http://ext.dcloud.net.cn/?cat1=5&cat2=51) from the plug-in market (in the form of [RichAlert](http://ext.dcloud.net.cn/plugin ?id=36) as an example)

### 2.将下载的插件解压，将插件拷贝到离线工程根目录中
### 2. Unzip the downloaded plug-in and copy the plug-in to the root directory of the offline project

![](https://ask.dcloud.net.cn/uploads/article/20190404/1396bd122c25c5c87d62a1843c58454e.png)

### 3.查看 package.json 文件并配置工程
### 3. View the package.json file and configure the project
这个插件配置信息比较简单只有 plugins 节点
The configuration information of this plugin is relatively simple, only the plugins node

```json
{
	"name": "RichAlert",
	"id": "DCloud-RichAlert",
	"version": "0.1.3",
	"description": "示例插件",
	"_dp_type":"nativeplugin",
	"_dp_nativeplugin":{
		"ios": {
			"plugins": [
				{
					"type": "module",
					"name": "DCloud-RichAlert",
					"class": "DCRichAlertModule"
				}
			],
			"integrateType": "library",
			"deploymentTarget": "8.0"
		}
	}
}
```

在 info.plist 中添加 plugins 信息
Add plugins information in info.plist

```
<key>dcloud_uniplugins</key>
	<array>
		<dict>
			<key>hooksClass</key>
			<string></string>
			<key>plugins</key>
			<array>
				<dict>
					<key>type</key>
					<string>module</string>
					<key>name</key>
					<string>DCloud-RichAlert</string>
					<key>class</key>
					<string>DCRichAlertModule</string>
				</dict>
			</array>
		</dict>
	</array>
```

将ios目录下的.a库添加到工程中
Add the .a library in the ios directory to the project

![](https://ask.dcloud.net.cn/uploads/article/20190404/352795d6da1d8c47bc219e81fb29b3a2.png)

至此本插件集成配置已完成
So far, the plug-in integration configuration has been completed

##### 4.运行	
##### 4. Run
- 在HBuilderX中创建uni-app项目并按照插件文档编写相应测试代码
- Create a uni-app project in HBuilderX and write the corresponding test code according to the plug-in documentation
- 导出uni-app资源并运行，导出方式请参考：**[HBuilderX生成本地打包App资源](http://ask.dcloud.net.cn/question/60254)**
- Export uni-app resources and run them. For the export method, please refer to: **[HBuilderX generates local packaged App resources](http://ask.dcloud.net.cn/question/60254)**

示例工程 GitHub 地址: [https://github.com/dcloudio/UniPluginPackage](https://github.com/dcloudio/UniPluginPackage)
Sample project GitHub address: [https://github.com/dcloudio/UniPluginPackage](https://github.com/dcloudio/UniPluginPackage)