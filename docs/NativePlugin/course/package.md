uni原生插件（native plugin）提交[DCloud插件市场](https://ext.dcloud.net.cn/)需按以下目录格式配置：
The uni native plugin (native plugin) submitted to [DCloud Plugin Market](https://ext.dcloud.net.cn/) needs to be configured in the following directory format:

![](https://ask.dcloud.net.cn/uploads/article/20181226/d07abb0bd2edf0723f9d59d6e6380c50.png)

**注意：android和ios目录必须全部为小写**
**Note: android and ios directories must be all lowercase**

上传时压缩为zip格式文件，压缩文件中必须包含目录名称，如下：
When uploading, it is compressed into a zip format file, and the compressed file must contain the directory name, as follows:

![](https://ask.dcloud.net.cn/uploads/article/20190222/61dbe1fbce40aef55ed549f418956405.png)


## package.json
uni原生插件描述文件，仅云端打包生效，完整格式如下：
The uni native plug-in description file is only valid for cloud packaging. The complete format is as follows:

**注意：配置文件为 json 格式，不能有注释，否则会解析失败**
**Note: The configuration file is in json format and cannot have comments, otherwise it will fail to parse**

``` json
{
	"name": "插件名称",
	"id": "插件标识，需要保证唯一性",
	"version": "插件版本号",
	"description": "插件描述信息",
	"_dp_type":"nativeplugin",
	"_dp_nativeplugin":{
		"android": {
			"plugins": [
				{
					"type": "module|component, 必填, 根据插件类型选择",
					"name": "必填, 注册插件的名称, 注意：module 的 name 必须以插件id为前缀或和插件id相同，比如 `DCTestUniPlugin-TestModule`，其中 DCTestUniPlugin 为插件的id，避免与其他插件冲突，component 的 name 没有强制要求，但是也要保证唯一比如 `dc-map`",
					"class": "必填, 注册插件的类名"
				}
			],
			"hooksClass": "可选, 事件钩子注册类名",
			"integrateType": "必填, 可取值aar|jar",
			"dependencies": [
				"可选, 依赖的库名称"
			],
			"excludeDependencies": [
				"可选，需要排除的HX内置模块依赖库名称"  //HBuilderX3.1.18+支持：仅在插件与HX内置模块依赖库存在冲突时可能需要，使用前请在官方QQ交流群“DCloud原生开发者群”中联系管理员确认
			],
			"compileOptions": {  //可选，Java编译参数配置
				"sourceCompatibility": "1.8",
				"targetCompatibility": "1.8"
			},
			"abis": [
				"可选, 支持的abi类型, 可取值armeabi-v7a|arm64-v8a|x86"
			],
			"minSdkVersion": "可选，支持的Android最低版本，如21",
			"useAndroidX": false,   //可选，是否兼容使用AndroidX  3.2.5+版本后废弃该属性
			"permissions": [
				"可选, 要使用的Android权限列表"
			],
			"parameters": {
				"插件需要配置的参数名称, 如appid": {
					"des": "参数描述",
					"key": "AndroidManifest.xml中添加meta-data节点！对应android:name属性值, 如GETUI_APPID",
					"placeholder": "build.gradle中添加到manifestPlaceholders中的字段名"
				}
			}
		},
		"ios": {
			"plugins": [
				{
					"type": "必填, module|component, 根据插件类型选择",
					"name": "必填, 注册插件的名称, 通常与插件标识一致",
					"class": "必填, 注册插件的类名" 
				}
			],
			"integrateType": "必填, 可取值framework|library",
			"hooksClass": "可选, 事件钩子注册类名",
			"frameworks": [
				"依赖的系统库(系统库有.framework和.tbd和.dylib类型)，和第三方.framework动态库;（.a 库或 .framework**静态库**直接放到ios根目录即可，不需要配置）"
			],
			"embedFrameworks": [
				"依赖的.framework动态库（注意.framework动态库也需要在上面的 frameworks 节点添加配置，同样将动态库.framework文件放到 ios 目录）"
			],
			"capabilities": {    // 配置应用的capabilities数据（根据XCode规范分别配置到entitlements和plist文件中）
				"entitlements": {    // 合并到工程entitlements文件的数据（json格式）
				},
				"plists": {    // 合并到工程Info.plist文件的数据（json格式）
				}
			},
			"plists": {    // 自定义配置工程Info.plist文件的数据（json格式），优先级高于capabilities->plists
			},
			"assets": [    //HBuilderX2.3.4及以上版本支持
			 	"可选，插件要使用的xcassets文件列表，相对于ios目录的路径"
			],
			"privacies": [
				"可选, 插件使用到的隐私列表，如NSPhotoLibraryUsageDescription"
			],
			"embedSwift": false,   // 开启 swift 编译支持，如果插件使用了 swift 需要配置此项
			"deploymentTarget": "8.0, 可选，注意：使用 Xcode14 需配置为 "11.0"
			"validArchitectures": [    // 可选，支持的CPU架构类型
			 	"arm64"    // 支持多个值，可取值："arm64", "armv7"，注意：使用 Xcode14 需要配置为 “arm64” 
			],
			"parameters": {
				"插件需要配置的参数名称, 如appid": {
					"des": "参数描述信息",
					"key": "参数需要配置到info.plist中的键名, 嵌套时使用:分割，如getui:appid"
				}
			},
			"resources": [
				"可选, 插件要使用的资源文件列表，相对于ios目录的路径 ，HX 3.2.0+ 版本不在推荐使用，请参考文档下面的 “依赖资源文件” 说明"
			]
		}
	}
}
```

### name
插件名称，在插件市场（HBuilderX）中显示的名称。
Plugin name, the name shown in the plugin marketplace (HBuilderX).

### id
插件标识，插件使用者引用插件时使用的名称，只能使用英文字符、数字、及字符（-、_），且必须以英文字符开头。
Plug-in logo, the name used by plug-in users to refer to the plug-in, can only use English characters, numbers, and characters (-, _), and must start with an English character.
推荐使用"%开发者名称%-%插件名称%"，如"DC-RichAlert"。
It is recommended to use "%developer name%-%plugin name%", such as "DC-RichAlert".

**插件标识必须在对应android和ios节点下plugins中进行注册，与name字段值一致**
**The plug-in identification must be registered in the plugins under the corresponding android and ios nodes, which is consistent with the value of the name field**


## Andorid 插件包配置
## Andorid plugin package configuration
uni原生插件如果支持Android平台，则需在插件下添加`android`目录，并将所有Android平台相关的资源都放到此目录下
If the uni native plug-in supports the Android platform, you need to add the `android` directory under the plug-in, and put all the resources related to the Android platform into this directory

- aar文件，直接放到android目录下，云端打包会自动引用所有的aar文件
- aar file, put it directly in the android directory, cloud packaging will automatically reference all aar files
- android\libs目录，所有需要使用的jar文件放到此目录，如果包含so文件，则放到libs下对应cpu类型目录
- android\libs directory, all jar files that need to be used are placed in this directory, if so files are included, they are placed in the corresponding cpu type directory under libs
- android\assets目录，Android平台需要assets资源
- android\assets directory, the Android platform requires assets resources
- android\res目录，Android平台需要的res资源
- android\res directory, the res resources required by the Android platform

> 在package.json文件中"_dp_nativeplugin"节点下添加"android"节点，根据需求配置以下数据
> Add the "android" node under the "_dp_nativeplugin" node in the package.json file, and configure the following data according to the requirements

### plugins
插件注册配置，JSON数组对象，至少要包含一个配置项
Plugin registration configuration, JSON array object, must contain at least one configuration item
- type:
必填，插件类型，"module"表示模块插件，对应weex中的Module模式；"component"表示UI组件，对应weex中的Component模式。
Required, plug-in type, "module" means module plug-in, corresponding to Module mode in weex; "component" means UI component, corresponding to Component mode in weex.
- name
必填，注册插件的名称, 必须与插件标识一致
Required, the name of the registered plug-in, must be consistent with the plug-in ID
- class
必填，注册插件的类名
Required, the class name of the registered plugin

### integrateType
必填，插件集成类型，即原生导出的文件类型
Required, plug-in integration type, that is, the natively exported file type
- aar
原生导出aar包时配置为此类型
Configure this type when exporting the aar package natively
- jar
原生导出jar包时配置为此类型，此时jar文件必须放到android下的libs目录中
Configure this type when exporting the jar package natively. At this time, the jar file must be placed in the libs directory under android

> 默认为aar，推荐使用aar类型
> The default is aar, it is recommended to use the aar type

### dependencies
用于配置插件依赖的仓储库 
Repositories used to configure plugin dependencies
android插件中集成的第三方SDK 如果是jar或so放入到libs文件夹中即可，无需要配置到dependencies节点下。
If the third-party SDK integrated in the android plug-in is a jar or so, it can be placed in the libs folder, and there is no need to configure it under the dependencies node.
gradle配置的第三方sdk 仓储名称方式的配置信息 需要在dependencies节点下填写。
The configuration information of the third-party SDK repository name configured by gradle needs to be filled in under the dependencies node.
云端打包仅支持从以下仓储下载依赖库，务必注意依赖库已提交到这些仓储中
Cloud packaging only supports downloading dependent libraries from the following repositories, and it is important to note that dependent libraries have been submitted to these repositories

- google()
- maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
- maven { url 'https://jitpack.io' }
- jcenter()

app.gradle 配置中dependencies节点信息如下。
The dependencies node information in the app.gradle configuration is as follows.

```
dependencies {
    implementation "com.android.support:recyclerview-v7:25.3.1"
    implementation "com.android.support:support-v4:25.3.1"
    implementation "com.android.support:appcompat-v7:25.3.1"
    implementation "com.alibaba:fastjson:1.2.83"
}
```

package.json的dependencies节点就需要配置如下信息
The dependencies node of package.json needs to configure the following information

```json
"dependencies": [
    "com.android.support:recyclerview-v7:25.3.1",
    "com.android.support:support-v4:25.3.1",
    "com.android.support:appcompat-v7:25.3.1",
    "com.alibaba:fastjson:1.2.83"
]
```

！！！注意V7、V4、fastjson都已默认集成 不需要再次配置。这里仅是示例写法！！！
! ! ! Note that V7, V4, and fastjson are all integrated by default and do not need to be configured again. This is just an example of how to write it! ! !

**HBuilderX2.3.8+开始添加更灵活配置，支持源码写dependencies内容**
**HBuilderX2.3.8+ began to add more flexible configuration, support source code to write dependencies content**

dependencies中的值支持json对象，如下：
The value in dependencies supports json object, as follows:

```json
"dependencies": [//内容支持字符串或json格式，支持混写
    {
        "id": "com.android.support.test.espresso:espresso-contrib",  //可选，String类型，依赖库标识
        "source": "implementation('com.android.support.test.espresso:espresso-contrib:2.2.2', {\r\nexclude group: 'com.android.support', module: 'support-v4'\r\n})"   //必选，String类型，依赖库源码
    }
]
```

JSON格式支持以下字段：
The JSON format supports the following fields:

- id
依赖库的标识，使用多个uni原生插件时，都依赖相同的库时会根据此标识去重，避免产生冲突。
The identifier of the dependent library. When using multiple uni native plug-ins, when they all depend on the same library, they will be deduplicated according to this identifier to avoid conflicts.
不配置此值则不做去重处理。
If this value is not configured, deduplication will not be performed.
- source
依赖库源码，直接将此内容配置到云端打包工程的build.gradle文件的dependencies中。
Rely on the source code of the library, and directly configure this content into the dependencies of the build.gradle file of the cloud packaging project.
只支持写引用公共仓储上的库。
Only write references to libraries on public repositories are supported.
如上示例，将会在云端打包时将以下内容添加到build.gradle文件的dependencies中：
As in the example above, the following content will be added to the dependencies of the build.gradle file when packaging in the cloud:

```json
implementation('com.android.support.test.espresso:espresso-contrib:2.2.2', {
    exclude group: 'com.android.support', module: 'support-v4'
})
```

注意：换行符号需要转义为\r\n。
Note: Newline symbols need to be escaped as \r\n.

### compileOptions
HBuilderX2.3.8+开始支持配置云端打包java编译参数。
HBuilderX2.3.8+ began to support the configuration of cloud-packaged java compilation parameters.
格式如下：
The format is as follows:

```json
"compileOptions": {  //可选，Java编译参数配置
	"sourceCompatibility": "1.8",
	"targetCompatibility": "1.8"
}
```

云端打包使用的jdk版本为1.8，仅支持取值"1.6"、"1.7"、"1.8"。
The jdk version used for cloud packaging is 1.8, which only supports values "1.6", "1.7", and "1.8".

### abis
Android平台支持的CPU类型，当插件中包含so库时需要配置插件支持的cpu类型。
The CPU type supported by the Android platform. When the so library is included in the plug-in, the CPU type supported by the plug-in needs to be configured.

```json
"abis": [
	"armeabi-v7a",
	"x86"
]
```

云端打包内置插件支持以下CPU类型：
The cloud packaging built-in plug-in supports the following CPU types:

- "armeabi-v7a"，7代及以上的ARM处理器（ARM 32位）
- "armeabi-v7a", ARM processors of 7th generation and above (ARM 32-bit)
- "arm64-v8a"，第8代、64位ARM处理器（ARM 64位）
- "arm64-v8a", 8th generation, 64-bit ARM processor (ARM 64-bit)
- "x86"，使用X86架构的处理器（X86 32位）
- "x86", processors using the X86 architecture (X86 32-bit)

**插件包含so库时至少要支持"armeabi-v7a"类型，从2019年9月开始提交的插件会检测支持CPU类型，不满足要求将无法上线**
**When the plug-in contains the so library, it must at least support the "armeabi-v7a" type. The plug-in submitted from September 2019 will detect the supported CPU type. If it does not meet the requirements, it will not be able to go online**
为了兼容更多的设备和应用市场要求，推荐支持"armeabi-v7a"、"arm64-v8a"、"x86"三种类型。
In order to be compatible with more devices and application market requirements, it is recommended to support three types: "armeabi-v7a", "arm64-v8a", and "x86".

`将aar文件作为zip解压，jni目录下包含的子目录就是其支持的CPU类型`
`Decompress the aar file as a zip, and the subdirectories contained in the jni directory are the supported CPU types`

### useAndroidX

**注意 HX3.2.5+ 后废弃useAndroidX配合  默认为true 需注意！！**
**Note that useAndroidX cooperation is discarded after HX3.2.5+, the default is true, please pay attention! ! **

uni原生插件运行环境依赖Android support，暂时没有升级使用AndroidX。
The operating environment of the uni native plug-in depends on Android support, and has not been upgraded to use AndroidX for the time being.
HBuilderX2.8.11+开始兼容使用AndroidX，如果插件自身或者使用的三方库依赖AndroidX，可以添加以下配置说明插件需要兼容使用AndroidX：
HBuilderX2.8.11+ is compatible with AndroidX. If the plug-in itself or the third-party library used depends on AndroidX, you can add the following configuration to indicate that the plug-in needs to be compatible with AndroidX:
```
"useAndroidX": true
```
云端打包时将会在gradle.properties中添加以下配置：
The following configuration will be added to gradle.properties when cloud packaging:
```
android.useAndroidX=true
android.enableJetifier=true
```

**注意：兼容模式不确保所有功能都可以正常运行，建议开发者使用时仔细测试。由于不同AndroidX版本可能兼容性存在差异，推荐使用Androidx1.0.0版本**
**Note: Compatibility mode does not ensure that all functions can run normally, and it is recommended that developers test carefully when using it. Due to differences in compatibility between different AndroidX versions, it is recommended to use Androidx1.0.0**

### parameters
如果插件需配置参数，如appid、appkey时，可通过配置`parameters`字段进行定义，在HBuilderX中使用此插件时将会出现可视配置项：
If the plug-in needs to configure parameters, such as appid and appkey, it can be defined by configuring the `parameters` field. When using this plug-in in HBuilderX, a visible configuration item will appear:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-parameters.png)

提交云端打包时将会根据配置规则将用户输入的参数添加到AndroidManifest.xml的meta-data节点中。
When submitting cloud packaging, the parameters entered by the user will be added to the meta-data node of AndroidManifest.xml according to the configuration rules.
parameters下每个节点（josn）定义一个要配置的参数，参数名称为键名，格式如下：
Each node (josn) under parameters defines a parameter to be configured. The parameter name is the key name, and the format is as follows:

```json
"parameters": {
    "appid_android": {
        "des": "XXX插件的appid参数",
        "key": "XXX_APPID",
        "placeholder": "XXX_APPID",
        "value": "TEST_${android_appid}"
   }
}
```

- des 参数的描述信息：
- Description of the des parameter:
  可选，在HBuilderX中manifest.json的可视化界面中显示，用于提示插件使用者配置此参数的作用。
  Optional, displayed in the manifest.json visual interface in HBuilderX, used to prompt the plug-in user to configure the function of this parameter.
- key 云端打包时meta-data节点的android:name属性值：
- The value of the android:name attribute of the meta-data node when key is packaged in the cloud:
  可选，与placeholder二选一配置。
  Optional, choose one configuration with placeholder.
  此值为AndroidManifest.xml中添加meta-data节点的android:name属性值，推荐使用“插件标识_   键名”格式，如"DCloud-HelloPlugin_appid"。
  This value is the android:name attribute value added to the meta-data node in AndroidManifest.xml. It is recommended to use the "plugin ID_key name" format, such as "DCloud-HelloPlugin_appid".
- placeholder **HBuilderX2.5.6+版本支持**：
- placeholder **HBuilderX2.5.6+ version support**:
  可选，与key二选一配置。
  Optional, choose one configuration with the key.
  此值为在build.gradle中添加manifestPlaceholders的键名，为了避免与其它插件冲突推荐使用“插件标识_键名”格式，如"DCloud-HelloPlugin_appid"。
  This value is the key name added to manifestPlaceholders in build.gradle. In order to avoid conflicts with other plugins, it is recommended to use the "plugin ID_key name" format, such as "DCloud-HelloPlugin_appid".
- value 云端打包时格式化的键值：
- value The key value formatted when packaging in the cloud:
  可选，如果需要对插件使用者输入的参数值做一些格式化处理（如添加固定的前缀或后缀）时才需要配置vlue字段。
  Optional, the vlue field needs to be configured only if some formatting processing (such as adding a fixed prefix or suffix) is required for the parameter value input by the plug-in user.
  其中${appid_android}表示插件使用者输入的appid_android参数值；不配置此字段则键值为插件使用者配置的参数值。
  Among them, ${appid_android} represents the appid_android parameter value input by the plug-in user; if this field is not configured, the key value is the parameter value configured by the plug-in user.

**插件使用时需在 HBuilderX 中打开项目 `manifest.json` 文件的 “App原生插件配置” 可视化界面进行配置**
**When using the plugin, you need to open the "App Native Plugin Configuration" visual interface of the project `manifest.json` file in HBuilderX for configuration**

以下使用 "DCloud-HelloPlugin" 插件配置 appid_android、appkey_android 参数为示例：
The following uses the "DCloud-HelloPlugin" plugin to configure the appid_android and appkey_android parameters as an example:
```json
"parameters": {
  "appid_android": {
    "des": "Android平台的appid",
    "key": "HelloPlugin_appid"
  },
  "appkey_android": {
    "des": "Android平台的appkey",
    "key": "HelloPlugin_appkey"
  }
}
```

HBuilderX 中可视化配置效果：
Visual configuration effect in HBuilderX:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-parameters-hx.png)

提交云打包后将会在 AndroidManifest.xml 中添加 meta-data 节点，插件开发时可以通过代码获取 android:value属性值：
After submitting cloud packaging, a meta-data node will be added in AndroidManifest.xml, and the android:value attribute value can be obtained through code during plug-in development:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-parameters-xml.png)

**使用placeholder方式时需开发者在插件aar中的AndroidManifest.xml根据定义使用placeholder**
**When using the placeholder method, the developer needs to use the placeholder according to the definition in the AndroidManifest.xml in the plug-in aar**

### 其它资源文件
### Other resource files
插件如果需要使用 assets、res资源，可直接添加到插件的 android 目录下，如下图所示：
If the plugin needs to use assets and res resources, it can be directly added to the android directory of the plugin, as shown in the following figure:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-resources.png)

**不推荐这种方式来使用 assets、res资源，建议将需要使用的资源包含到aar文件中**
**It is not recommended to use assets and res resources in this way. It is recommended to include the resources that need to be used in the aar file**

目前有部分三方SDK可能会用到授权配置文件，通常是在打包时需要将授权文件添加到assets目录。
At present, some third-party SDKs may use authorization configuration files. Usually, the authorization files need to be added to the assets directory when packaging.
以下用授权文件 license-android.dat 为例来说明：
The following uses the authorization file license-android.dat as an example to illustrate:
使用插件云端打包时需要将授权配置文件license-android.dat添加到项目下的 nativeplugins/DCloud-HelloPlugin/android/assets/license-android.dat 路径
When using plug-in cloud packaging, you need to add the authorization configuration file license-android.dat to the nativeplugins/DCloud-HelloPlugin/android/assets/license-android.dat path under the project

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-resource2.png)

提交到云端打包后将会把 license-android.dat 文件添加到安装包apk的assets目录下。
After submitting to the cloud for packaging, the license-android.dat file will be added to the assets directory of the installation package apk.

注意：此操作务必在插件使用说明中描述清楚（如何获取授权文件，如何放置授权文件等），其中DCloud-HelloPlugin为使用的插件标识，需根据自己的插件标识进行修改
Note: This operation must be clearly described in the plug-in instructions (how to obtain the authorization file, how to place the authorization file, etc.), where DCloud-HelloPlugin is the plug-in ID used, which needs to be modified according to your own plug-in ID


## iOS 插件包配置
## iOS plugin package configuration

uni原生插件如果支持iOS平台，则需在插件下添加`ios`目录，并将所有iOS平台相关的资源都放到此目录下
If the uni native plug-in supports the iOS platform, you need to add the `ios` directory under the plug-in, and put all the resources related to the iOS platform into this directory

- a文件，直接放到ios目录下，云端打包会自动引用所有的a文件
- a file, put it directly in the ios directory, cloud packaging will automatically reference all a files
- framework文件，直接放到ios目录下，云端打包会自动引用所有的framework文件。**如果是动态framework库，需要在package.json文件的embedFrameworks和frameworks节点下添加此framework库名称**
- Framework files, put them directly in the ios directory, and cloud packaging will automatically reference all framework files. **If it is a dynamic framework library, you need to add this framework library name under the embedFrameworks and frameworks nodes of the package.json file**

> 在package.json文件中"_dp_nativeplugin"节点下添加"ios"节点，根据需求配置以下数据
> Add the "ios" node under the "_dp_nativeplugin" node in the package.json file, and configure the following data according to the requirements

### plugins
插件注册配置，JSON数组对象，至少要包含一个配置项
Plugin registration configuration, JSON array object, must contain at least one configuration item
- type:
必填，插件类型，"module"表示模块插件，对应weex中的Module模式；"component"表示UI组件，对应weex中的Component模式。
Required, plug-in type, "module" means module plug-in, corresponding to Module mode in weex; "component" means UI component, corresponding to Component mode in weex.
- name
必填，注册插件的名称, 必须与插件标识一致
Required, the name of the registered plug-in, must be consistent with the plug-in ID
- class
必填，注册插件的类名
Required, the class name of the registered plugin

### integrateType
必填，插件集成类型，即原生导出的文件类型
Required, plug-in integration type, that is, the natively exported file type
- framework
原生导出framework包时配置为此类型
Configure this type when exporting the framework package natively
- library
原生导出a文件时配置为此类型
Configure this type when exporting a file natively

> 默认为framework，推荐使用framework类型
> The default is framework, it is recommended to use the framework type

### assets
HBuilderX2.3.4+开始支持配置插件的图片资源文件（xcassets）。
HBuilderX2.3.4+ started to support image resource files (xcassets) for configuring plug-ins.
格式如下：
The format is as follows:

```json
"assets": [
 	"myimage.xcassets"      //使用的xcassets文件列表
]
```

其中"myimage.xcassets"为资源文件（xcassets）路径，相对于插件的ios目录。
Where "myimage.xcassets" is the resource file (xcassets) path, relative to the ios directory of the plugin.
**注意：引擎本身已经有xcassets资源，为了避免冲突插件中不能包含以下名称的xcassets图片资源：**
**Note: The engine itself already has xcassets resources. In order to avoid conflicts, the plugin cannot contain xcassets image resources with the following names:**
- 基础图片
- base image
  + "app.imageset"
  + "AppIcon.appiconset"
- 视频播放控件（VideoPlayer）模块
- Video player control (VideoPlayer) module
  + "player_back.imageset"
  + "player_play.imageset"
  + "player_stop.imageset"
  + "control_brightness.imageset"
  + "exitfullscreen.imageset"
  + "full-screen.imageset
  + "video_ic_muteoff.imageset"
  + "video_ic_muteon.imageset"
  + "video_volume.imageset"

### embedSwift
开启 swift 编译支持，如果插件使用了 swift 语言开发的需要配置此值
Enable swift compilation support, if the plug-in is developed using swift language, this value needs to be configured
```
"embedSwift": true
```

**注意：插件没有使用 swift 开发则不用配置此字段，默认值为 false**
**Note: If the plugin is not developed with swift, this field does not need to be configured, and the default value is false**

### validArchitectures
HBuilderX2.6.0+开始支持配置插件支持的CPU架构类型
HBuilderX2.6.0+ began to support the CPU architecture type supported by the configuration plug-in
格式如下：
The format is as follows:
```json
"validArchitectures": [
    "arm64", "arm64e"
]
```

支持配置多个值，取值范围："arm64", "arm64e", "armv7", "armv7s", "x86_64"
Support to configure multiple values, value range: "arm64", "arm64e", "armv7", "armv7s", "x86_64"
不配置此值则认为支持上面所有类型。
If this value is not configured, all the above types are considered to be supported.
云端打包时将会使用所有插件支持类型的交集。
Cloud packaging will use the intersection of all plugin supported types.

### capabilities

#### entitlements

如果您的插件需要使用到`capabilities`中的相关服务，以获取 `WiFi` 信息服务为例，首先需要点击`+Capability` 然后双击 `Access WiFi information` 添加服务，如下图所示
If your plug-in needs to use related services in `capabilities`, take the `WiFi` information service as an example, you first need to click `+Capability` and then double-click `Access WiFi information` to add the service, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/cap01.png)

这里添加的服务会在工程的`xxx.entiflements`文件中添加配置信息，然后选中`xxx.entiflements`文件，右键 `Open As -> Source Code`，如下图所示
The service added here will add configuration information to the `xxx.entiflements` file of the project, then select the `xxx.entiflements` file, right-click `Open As -> Source Code`, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/cap02.png)

其中 "key=com.apple.developer.networking.wifi-info" 和对应的 "value=true" 就是 WiFi 服务的配置信息，然后我们将信息配置到 package.json 的 `capabilities -> entitlements` 节点中即可，如下
Among them, "key=com.apple.developer.networking.wifi-info" and the corresponding "value=true" are the configuration information of the WiFi service, and then we configure the information into the `capabilities -> entitlements` node of package.json. Yes, as follows

```json
"capabilities": {   
	"entitlements": {   
		"com.apple.developer.networking.wifi-info":true
	}            
}
```

### Background Modes

![](https://ask.dcloud.net.cn/uploads/article/20190927/a5af6858c1c3535419aff6d3ef7ca8f9.png)

如果插件需要申请后台运行权限，需要插件使用者在项目的 manifest.json 中添加权限配置，请查看 [添加后台权限教程](https://ask.dcloud.net.cn/article/36430)，插件开发者应在插件使用教程中说明；
If the plug-in needs to apply for background running permission, the plug-in user needs to add the permission configuration in the manifest.json of the project, please refer to [Add background permission tutorial](https://ask.dcloud.net.cn/article/36430), plug-in The developer should explain in the plug-in tutorial;

### parameters
如果插件需配置参数，如appid、appkey时，可通过配置`parameters`字段进行定义，在HBuilderX中使用此插件时将会出现可视配置项：
If the plug-in needs to configure parameters, such as appid and appkey, it can be defined by configuring the `parameters` field. When using this plug-in in HBuilderX, a visible configuration item will appear:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/ios-parameters.png)

提交云端打包时将会根据配置规则将用户输入的参数添加到Info.plist中。
When submitting cloud packaging, the parameters entered by the user will be added to Info.plist according to the configuration rules.
parameters下每个节点（josn）定义一个要配置的参数，参数名称为键名，格式如下：
Each node (josn) under parameters defines a parameter to be configured. The parameter name is the key name, and the format is as follows:
```json
"parameters": {
    "appid_ios": {
        "des": "XXX插件的appid参数",
        "key": "XXX:appid",
        "value": "TEST_${ios_appid}"
   }
}
```

- des 参数的描述信息：
- Description of the des parameter:
  可选，在HBuilderX中manifest.json的可视化界面中显示，用于提示插件使用者配置此参数的作用。
  Optional, displayed in the manifest.json visual interface in HBuilderX, used to prompt the plug-in user to configure the function of this parameter.
- key 云端打包时原生层使用的键名称：
- key The name of the key used by the native layer when packaging in the cloud:
  必填，用于定义参数值在Info.plist文件中保存的键名。
  Mandatory, used to define the key name of the parameter value saved in the Info.plist file.
  如果需要多层级嵌套可使用:分割，推荐使用“插件标识:键名”格式，如"DC-XXX:appid"。
  If you need multi-level nesting, you can use: split, and it is recommended to use the "plugin ID: key name" format, such as "DC-XXX:appid".
- value 云端打包时格式化的键值：
- value The key value formatted when packaging in the cloud:
  可选，如果需要对插件使用者输入的参数值做一些格式化处理（如添加固定的前缀或后缀）时才需要配置vlue字段。
  Optional, the vlue field needs to be configured only if some formatting processing (such as adding a fixed prefix or suffix) is required for the parameter value input by the plug-in user.
  其中${appid_ios}表示插件使用者输入的appid_ios参数值；不配置此字段则键值为插件使用者输入的参数值。
  Among them, ${appid_ios} represents the appid_ios parameter value input by the plug-in user; if this field is not configured, the key value is the parameter value input by the plug-in user.

**插件使用时需在 HBuilderX 中打开项目 `manifest.json` 文件的 “App原生插件配置” 可视化界面进行配置**
**When using the plugin, you need to open the "App Native Plugin Configuration" visual interface of the project `manifest.json` file in HBuilderX for configuration**


以下使用 "DCloud-HelloPlugin" 插件配置 appid_ios、appkey_ios 参数为示例：
The following uses the "DCloud-HelloPlugin" plugin to configure the appid_ios and appkey_ios parameters as an example:
```json
"parameters": {
  "appid_ios": {
    "des": "iOS平台的appid",
    "key": "HelloPlugin:appid"
  },
  "appkey_ios": {
    "des": "iOS平台的appkey",
    "key": "HelloPlugin:appkey"
  }
}
```

HBuilderX 中可视化配置效果：
Visual configuration effect in HBuilderX:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/ios-parameters-hx.png)

提交云打包后将会在 info.plist 中添加 HelloPlugin 节点及数据，插件开发时可以通过代码获取 info.plist 中配置的参数：
After submitting the cloud packaging, the HelloPlugin node and data will be added to the info.plist, and the parameters configured in the info.plist can be obtained through the code during plug-in development:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/ios-parameters-plist.png)


### resources 
> HBuilderX3.2.0+ 不在推荐使用，推荐使用下面“依赖资源文件”的方式
> HBuilderX3.2.0+ is no longer recommended. It is recommended to use the following method of "depending on resource files"

插件如果需要使用 .bundle 资源目录，可通过配置 `resources` 字段进行定义，格式如下：
If the plugin needs to use the .bundle resource directory, it can be defined by configuring the `resources` field, and the format is as follows:

```json
"resources": [
    "HelloPlugin.bundle"
   ]
}
```

**注意：虽然XCode没有要求资源目录名称，推荐使用XXX.bundle，目前已知目录名称为Resources会与iOS系统资源冲突，不要使用此目录名称**
**Note: Although XCode does not require the resource directory name, it is recommended to use XXX.bundle. Currently, it is known that the directory name Resources will conflict with iOS system resources. Do not use this directory name**

目前有部分三方SDK可能会用到授权配置文件，通常是在打包时需要将授权文件添加到XCode工程的根目录，这时也可通过配置 `resources` 来实现此需求
At present, some third-party SDKs may use the authorization configuration file. Usually, the authorization file needs to be added to the root directory of the XCode project when packaging. At this time, this requirement can also be realized by configuring `resources`
分两个步骤进行操作：
Do it in two steps:
1. 在package.json定义插件需要使用授权配置文件，以license-ios.dat文件为例：
1. To define a plug-in in package.json, you need to use an authorization configuration file. Take the license-ios.dat file as an example:
```json
"resources": [
    "HelloPlugin.bundle",
    "license-ios.dat"
   ]
}
```
2. 使用插件云端打包时需要将授权配置文件license-ios.dat添加到项目下的 nativeplugins/DCloud-HelloPlugin/ios/license-ios.dat 路径
2. When using plug-in cloud packaging, you need to add the authorization configuration file license-ios.dat to the nativeplugins/DCloud-HelloPlugin/ios/license-ios.dat path under the project
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/ios-resources.png)

提交到云端打包后将会把 license-ios.dat 文件添加到安装包ipa的根目录（最外层目录）下。
After submitting to the cloud for packaging, the license-ios.dat file will be added to the root directory (the outermost directory) of the installation package ipa.

注意：此操作务必在插件使用说明中描述清楚（如何获取授权文件，如何放置授权文件等），其中DCloud-HelloPlugin为使用的插件标识，需根据自己的插件标识进行修改
Note: This operation must be clearly described in the plug-in instructions (how to obtain the authorization file, how to place the authorization file, etc.), where DCloud-HelloPlugin is the plug-in ID used, which needs to be modified according to your own plug-in ID


### 依赖资源文件
### Dependent resource files
> HBuilderX3.2.0+ 版本支持
> HBuilderX3.2.0+ version support

如果您的插件需要依赖资源文件，可以将资源文件放到插件包的 "ios/BundleResources" 路径下即可**（不需要配置packagfe.json）**，打包时会将 BundleResources 中的所有文件都添加到应用中；
If your plug-in needs to rely on resource files, you can put the resource files in the "ios/BundleResources" path of the plug-in package ** (no need to configure packagfe.json) **, all files in BundleResources will be packaged added to the application;

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/bundleresources.png)

### iOS Extension
>HBuilderX3.1.5+版本uni原生插件支持iOS Extension（扩展）
>HBuilderX3.1.5+ version uni native plug-in supports iOS Extension (extension)

#### 插件作者配置
#### Plugin author configuration
首先在XCode环境中编译出ipa，将ipa解压后在Payload/XXX.app/PlugIns/ 下可以找到.appex文件
First compile the ipa in the XCode environment, unzip the ipa and find the .appex file under Payload/XXX.app/PlugIns/
将.appex添加到uni原生插件下的 ios/Plugins/ 目录中即可
Add .appex to the ios/Plugins/ directory under the uni native plugin

#### 插件使用者配置
#### Plugin user configuration
默认情况下云端打包不会包含uni原生插件中的iOS扩展，需要在nativeplugins/XX-XXX插件目录下添加ios-extension.json文件配置使用iOS扩展。
By default, the cloud packaging will not include the iOS extension in the uni native plug-in. You need to add the ios-extension.json file in the nativeplugins/XX-XXX plug-in directory to configure the use of the iOS extension.
插件的目录结构如下:
The directory structure of the plugin is as follows:
```
-- HelloUniApp项目目录
  |-- nativeplugins
    |-- DCloud-RichAlert(实际包含iOS Extension的uni原生插件标识)
      |-- ios-extension.json
      |-- ios-XXXExt.mobileprovision
```

**需要插件作者在使用说明中详细描述告诉插件使用者如何配置ios-extension.json文件**
**The plug-in author is required to describe in detail in the instruction manual how to configure the ios-extension.json file for the plug-in user**
ios-extension.json文件格式如下：
The format of the ios-extension.json file is as follows:
```json
{
  "XXX.appex": {      //必填，多个iOS Extension需使用多个节点
    "identifier": "uni.XXX.ext",                //必填，Bundle identifier
    "profile": "ios-XXXExt.mobileprovision",    //必填，Provisioning Profile，相对于插件目录的路径
    "plists": {      //可选，合并到iOS Extension的Info.plist中的数据（json格式）
      
    },
    "entitlements": { //可选，覆盖iOS Extension的entitlements.plist中的数据（json格式）
      
    }
  }
}
```
**注意：实际提交打包时不要包含注释信息**
**Note: Do not include comment information when actually submitting the package**

- XXX.appex
  iOS Extension插件名称，与ios/Plugins目录中的appex名称一致
  The name of the iOS Extension plug-in, which is consistent with the appex name in the ios/Plugins directory
- identifier
  必填，String类型，iOS Extension插件使用Bundle Identifier，与profile字段配置的profile文件要匹配
  Required, String type, the iOS Extension plug-in uses the Bundle Identifier, which must match the profile file configured in the profile field
- profile
  必填，String类型，iOS Extension插件使用的profile文件，相对于插件目录，注意：在插件目录中文件必须以ios开头，否则HX不会提交云端打包（后续版本会修复此Bug）
  Required, String type, the profile file used by the iOS Extension plug-in, relative to the plug-in directory, note: the file in the plug-in directory must start with ios, otherwise HX will not submit the cloud package (subsequent versions will fix this bug)
- plists
  可选，JSON类型，需要合并到iOS Extension插件Info.plist文件中的数据
  Optional, JSON type, the data that needs to be merged into the Info.plist file of the iOS Extension plug-in
- entitlements
  可选，JSON类型，需要覆盖到iOS Extension插件entitlements.plist中的数据
  Optional, JSON type, which needs to be overwritten to the data in entitlements.plist of the iOS Extension plug-in

