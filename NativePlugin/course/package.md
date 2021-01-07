uni原生插件（native plugin）提交[DCloud插件市场](https://ext.dcloud.net.cn/)需按以下目录格式配置：

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20181226/d07abb0bd2edf0723f9d59d6e6380c50.png)

上传时压缩为zip格式文件，压缩文件中必须包含目录名称，如下：

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20190222/61dbe1fbce40aef55ed549f418956405.png)


## package.json
uni原生插件描述文件，完整格式如下：

**注意：如果只有一端比如只包含android插件，请把ios节点删除掉，不能直接注释**

```json
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
			"integrateType": "可选, 可取值aar|jar",
			"dependencies": [
				"可选, 依赖的库名称"
			],
			"compileOptions": {  //可选，Java编译参数配置
				"sourceCompatibility": "1.8",
				"targetCompatibility": "1.8"
			},
			"abis": [
				"可选, 支持的abi类型, 可取值armeabi-v7a|arm64-v8a|x86"
			],
			"minSdkVersion": "可选，支持的Android最低版本，如21",
			"useAndroidX": false,   //可选，是否兼容使用AndroidX
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
			"deploymentTarget": "8.0, 可选，支持的iOS最低版本",
			"validArchitectures": [    // 可选，支持的CPU架构类型
			 	"arm64"    //支持多个值，可取值：arm64 arm64e armv7 armv7s x86_64
			],
			"parameters": {
				"插件需要配置的参数名称, 如appid": {
					"des": "参数描述信息",
					"key": "参数需要配置到info.plist中的键名, 嵌套时使用:分割，如getui:appid"
				}
			},
			"resources": [
				"可选, 插件要使用的资源文件列表，相对于ios目录的路径"
			]
		}
	}
}
```

### name
插件名称，在插件市场（HBuilderX）中显示的名称。

### id
插件标识，插件使用者引用插件时使用的名称，只能使用英文字符、数字、及字符（-、_），且必须以英文字符开头。
推荐使用"%开发者名称%-%插件名称%"，如"DC-RichAlert"。

**插件标识必须在对应android和ios节点下plugins中进行注册，与name字段值一致**


## Andorid 插件包配置
uni原生插件如果支持Android平台，则需在插件下添加`android`目录，并将所有Android平台相关的资源都放到此目录下

- aar文件，直接放到android目录下，云端打包会自动引用所有的aar文件
- android\libs目录，所有需要使用的jar文件放到此目录，如果包含so文件，则放到libs下对应cpu类型目录
- android\assets目录，Android平台需要assets资源
- android\res目录，Android平台需要的res资源

> 在package.json文件中"_dp_nativeplugin"节点下添加"android"节点，根据需求配置以下数据

### plugins
插件注册配置，JSON数组对象，至少要包含一个配置项
- type:
必填，插件类型，"module"表示模块插件，对应weex中的Module模式；"component"表示UI组件，对应weex中的Component模式。
- name
必填，注册插件的名称, 必须与插件标识一致
- class
必填，注册插件的类名

### integrateType
可选，插件集成类型，即原生导出的文件类型
- aar
原生导出aar包时配置为此类型
- jar
原生导出jar包时配置为此类型，此时jar文件必须放到android下的libs目录中

> 默认为aar，推荐使用aar类型

### dependencies
用于配置插件依赖的仓储库 
android插件中集成的第三方SDK 如果是jar或so放入到libs文件夹中即可，无需要配置到dependencies节点下。
gradle配置的第三方sdk 仓储名称方式的配置信息 需要在dependencies节点下填写。
云端打包仅支持从以下仓储下载依赖库，务必注意依赖库已提交到这些仓储中

- google()
- maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
- maven { url 'https://jitpack.io' }
- jcenter()

app.gradle 配置中dependencies节点信息如下。

```
dependencies {
    implementation "com.android.support:recyclerview-v7:25.3.1"
    implementation "com.android.support:support-v4:25.3.1"
    implementation "com.android.support:appcompat-v7:25.3.1"
    implementation "com.alibaba:fastjson:1.1.46.android"
}
```

package.json的dependencies节点就需要配置如下信息

```json
"dependencies": [
    "com.android.support:recyclerview-v7:25.3.1",
    "com.android.support:support-v4:25.3.1",
    "com.android.support:appcompat-v7:25.3.1",
    "com.alibaba:fastjson:1.1.46.android"
]
```

！！！注意V7、V4、fastjson都已默认集成 不需要再次配置。这里仅是示例写法！！！

**HBuilderX2.3.8+开始添加更灵活配置，支持源码写dependencies内容**

dependencies中的值支持json对象，如下：

```json
"dependencies": [//内容支持字符串或json格式，支持混写
    {
        "id": "com.android.support.test.espresso:espresso-contrib",  //可选，String类型，依赖库标识
        "source": "implementation('com.android.support.test.espresso:espresso-contrib:2.2.2', {\r\nexclude group: 'com.android.support', module: 'support-v4'\r\n})"   //必选，String类型，依赖库源码
    }
]
```

JSON格式支持以下字段：

- id
依赖库的标识，使用多个uni原生插件时，都依赖相同的库时会根据此标识去重，避免产生冲突。
不配置此值则不做去重处理。
- source
依赖库源码，直接将此内容配置到云端打包工程的build.gradle文件的dependencies中。
只支持写引用公共仓储上的库。
如上示例，将会在云端打包时将以下内容添加到build.gradle文件的dependencies中：

```json
implementation('com.android.support.test.espresso:espresso-contrib:2.2.2', {
    exclude group: 'com.android.support', module: 'support-v4'
})
```

注意：换行符号需要转义为\r\n。

### compileOptions
HBuilderX2.3.8+开始支持配置云端打包java编译参数。
格式如下：

```json
"compileOptions": {  //可选，Java编译参数配置
	"sourceCompatibility": "1.8",
	"targetCompatibility": "1.8"
}
```

云端打包使用的jdk版本为1.8，仅支持取值"1.6"、"1.7"、"1.8"。

### abis
Android平台支持的CPU类型，当插件中包含so库时需要配置插件支持的cpu类型。

```json
"abis": [
	"armeabi-v7a",
	"x86"
]
```

云端打包内置插件支持以下CPU类型：

- "armeabi-v7a"，7代及以上的ARM处理器（ARM 32位）
- "arm64-v8a"，第8代、64位ARM处理器（ARM 64位）
- "x86"，使用X86架构的处理器（X86 32位）

**插件包含so库时至少要支持"armeabi-v7a"类型，从2019年9月开始提交的插件会检测支持CPU类型，不满足要求将无法上线**
为了兼容更多的设备和应用市场要求，推荐支持"armeabi-v7a"、"arm64-v8a"、"x86"三种类型。

`将aar文件作为zip解压，jni目录下包含的子目录就是其支持的CPU类型`

### useAndroidX
uni原生插件运行环境依赖Android support，暂时没有升级使用AndroidX。
HBuilderX2.8.11+开始兼容使用AndroidX，如果插件自身或者使用的三方库依赖AndroidX，可以添加以下配置说明插件需要兼容使用AndroidX：
```
"useAndroidX": true
```
云端打包时将会在gradle.properties中添加以下配置：
```
android.useAndroidX=true
android.enableJetifier=true
```

**注意：兼容模式不确保所有功能都可以正常运行，建议开发者使用时仔细测试。由于不同AndroidX版本可能兼容性存在差异，推荐使用Androidx1.0.0版本**

### parameters
如果插件需配置参数，如appid、appkey时，可通过配置`parameters`字段进行定义，在HBuilderX中使用此插件时将会出现可视配置项：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-parameters.png)

提交云端打包时将会根据配置规则将用户输入的参数添加到AndroidManifest.xml的meta-data节点中。
parameters下每个节点（josn）定义一个要配置的参数，参数名称为键名，格式如下：

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
  可选，在HBuilderX中manifest.json的可视化界面中显示，用于提示插件使用者配置此参数的作用。
- key 云端打包时meta-data节点的android:name属性值：
  可选，与placeholder二选一配置。
  此值为AndroidManifest.xml中添加meta-data节点的android:name属性值，推荐使用“插件标识_   键名”格式，如"DCloud-HelloPlugin_appid"。
- placeholder **HBuilderX2.5.6+版本支持**：
  可选，与key二选一配置。
  此值为在build.gradle中添加manifestPlaceholders的键名，为了避免与其它插件冲突推荐使用“插件标识_键名”格式，如"DCloud-HelloPlugin_appid"。
- value 云端打包时格式化的键值：
  可选，如果需要对插件使用者输入的参数值做一些格式化处理（如添加固定的前缀或后缀）时才需要配置vlue字段。
  其中${appid_android}表示插件使用者输入的appid_android参数值；不配置此字段则键值为插件使用者配置的参数值。

**插件使用时需在 HBuilderX 中打开项目 `manifest.json` 文件的 “App原生插件配置” 可视化界面进行配置**

以下使用 "DCloud-HelloPlugin" 插件配置 appid_android、appkey_android 参数为示例：
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

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-parameters-hx.png)

提交云打包后将会在 AndroidManifest.xml 中添加 meta-data 节点，插件开发时可以通过代码获取 android:value属性值：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-parameters-xml.png)

**使用placeholder方式时需开发者在插件aar中的AndroidManifest.xml根据定义使用placeholder**

### 其它资源文件
插件如果需要使用 assert、res资源，可直接添加到插件的 android 目录下，如下图所示：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-resources.png)

**不推荐这种方式来使用 assert、res资源，建议将需要使用的资源包含到aar文件中**

目前有部分三方SDK可能会用到授权配置文件，通常是在打包时需要将授权文件添加到assert目录。
以下用授权文件 license-android.dat 为例来说明：
使用插件云端打包时需要将授权配置文件license-android.dat添加到项目下的 nativeplugins/DCloud-HelloPlugin/android/assert/license-ios.dat 路径

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/android-resource2.png)

提交到云端打包后将会把 license-android.dat 文件添加到安装包apk的assert目录下。

注意：此操作务必在插件使用说明中描述清楚（如何获取授权文件，如何放置授权文件等），其中DCloud-HelloPlugin为使用的插件标识，需根据自己的插件标识进行修改


## iOS 插件包配置

uni原生插件如果支持iOS平台，则需在插件下添加`ios`目录，并将所有iOS平台相关的资源都放到此目录下

- a文件，直接放到ios目录下，云端打包会自动引用所有的a文件
- framework文件，直接放到ios目录下，云端打包会自动引用所有的framework文件。**如果是动态framework库，需要在package.json文件的embedFrameworks和frameworks节点下添加此framework库名称**

> 在package.json文件中"_dp_nativeplugin"节点下添加"ios"节点，根据需求配置以下数据

### plugins
插件注册配置，JSON数组对象，至少要包含一个配置项
- type:
必填，插件类型，"module"表示模块插件，对应weex中的Module模式；"component"表示UI组件，对应weex中的Component模式。
- name
必填，注册插件的名称, 必须与插件标识一致
- class
必填，注册插件的类名

### integrateType
可选，插件集成类型，即原生导出的文件类型
- framework
原生导出framework包时配置为此类型
- library
原生导出a文件时配置为此类型

> 默认为framework，推荐使用framework类型

### assets
HBuilderX2.3.4+开始支持配置插件的图片资源文件（xcassets）。
格式如下：

```json
"assets": [
 	"myimage.xcassets"      //使用的xcassets文件列表
]
```

其中"myimage.xcassets"为资源文件（xcassets）路径，相对于插件的ios目录。
**注意：引擎本身已经有xcassets资源，为了避免冲突插件中不能包含以下名称的xcassets图片资源：**
- 基础图片
  + "app.imageset"
  + "AppIcon.appiconset"
- 视频播放控件（VideoPlayer）模块
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
```
"embedSwift": true
```

**注意：插件没有使用 swift 开发则不用配置此字段，默认值为 false**

### validArchitectures
HBuilderX2.6.0+开始支持配置插件支持的CPU架构类型
格式如下：
```json
"validArchitectures": [
    "arm64", "arm64e"
]
```

支持配置多个值，取值范围："arm64", "arm64e", "armv7", "armv7s", "x86_64"
不配置此值则认为支持上面所有类型。
云端打包时将会使用所有插件支持类型的交集。

### capabilities

#### entitlements

如果您的插件需要使用到`capabilities`中的相关服务，以获取 `WiFi` 信息服务为例，首先需要点击`+Capability` 然后双击 `Access WiFi information` 添加服务，如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/cap01.png)

这里添加的服务会在工程的`xxx.entiflements`文件中添加配置信息，然后选中`xxx.entiflements`文件，右键 `Open As -> Source Code`，如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/cap02.png)

其中 "key=com.apple.developer.networking.wifi-info" 和对应的 "value=true" 就是 WiFi 服务的配置信息，然后我们将信息配置到 package.json 的 `capabilities -> entitlements` 节点中即可，如下

```json
"capabilities": {   
	"entitlements": {   
		"com.apple.developer.networking.wifi-info":true
	}            
}
```

### Background Modes

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20190927/a5af6858c1c3535419aff6d3ef7ca8f9.png)

如果插件需要申请后台运行权限，需要插件使用者在项目的 manifest.json 中添加权限配置，请查看 [添加后台权限教程](https://ask.dcloud.net.cn/article/36430)，插件开发者应在插件使用教程中说明；

### parameters
如果插件需配置参数，如appid、appkey时，可通过配置`parameters`字段进行定义，在HBuilderX中使用此插件时将会出现可视配置项：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/ios-parameters.png)

提交云端打包时将会根据配置规则将用户输入的参数添加到Info.plist中。
parameters下每个节点（josn）定义一个要配置的参数，参数名称为键名，格式如下：
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
  可选，在HBuilderX中manifest.json的可视化界面中显示，用于提示插件使用者配置此参数的作用。
- key 云端打包时原生层使用的键名称：
  必填，用于定义参数值在Info.plist文件中保存的键名。
  如果需要多层级嵌套可使用:分割，推荐使用“插件标识:键名”格式，如"DC-XXX:appid"。
- value 云端打包时格式化的键值：
  可选，如果需要对插件使用者输入的参数值做一些格式化处理（如添加固定的前缀或后缀）时才需要配置vlue字段。
  其中${appid_ios}表示插件使用者输入的appid_ios参数值；不配置此字段则键值为插件使用者输入的参数值。

**插件使用时需在 HBuilderX 中打开项目 `manifest.json` 文件的 “App原生插件配置” 可视化界面进行配置**


以下使用 "DCloud-HelloPlugin" 插件配置 appid_ios、appkey_ios 参数为示例：
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

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/ios-parameters-hx.png)

提交云打包后将会在 info.plist 中添加 HelloPlugin 节点及数据，插件开发时可以通过代码获取 info.plist 中配置的参数：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/ios-parameters-plist.png)


### resources
插件如果需要使用 .bundle 资源目录，可通过配置 `resources` 字段进行定义，格式如下：

```json
"resources": [
    "HelloPlugin.bundle"
   ]
}
```

**注意：虽然XCode没有要求资源目录名称，推荐使用XXX.bundle，目前已知目录名称为Resources会与iOS系统资源冲突，不要使用此目录名称**

目前有部分三方SDK可能会用到授权配置文件，通常是在打包时需要将授权文件添加到XCode工程的根目录，这时也可通过配置 `resources` 来实现此需求
分两个步骤进行操作：
1. 在package.json定义插件需要使用授权配置文件，以license-ios.dat文件为例：
```json
"resources": [
    "HelloPlugin.bundle",
    "license-ios.dat"
   ]
}
```
2. 使用插件云端打包时需要将授权配置文件license-ios.dat添加到项目下的 nativeplugins/DCloud-HelloPlugin/ios/license-ios.dat 路径
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/package/ios-resources.png)

提交到云端打包后将会把 license-ios.dat 文件添加到安装包ipa的根目录（最外层目录）下。

注意：此操作务必在插件使用说明中描述清楚（如何获取授权文件，如何放置授权文件等），其中DCloud-HelloPlugin为使用的插件标识，需根据自己的插件标识进行修改
