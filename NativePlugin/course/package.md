uni原生插件（native plugin）提交[DCloud插件市场](https://ext.dcloud.net.cn/)需按以下目录格式配置：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181226/d07abb0bd2edf0723f9d59d6e6380c50.png)

上传时压缩为zip格式文件，压缩文件中必须包含目录名称，如下：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190222/61dbe1fbce40aef55ed549f418956405.png)


## package.json
uni原生插件描述文件，完整格式如下
**注：如果只有一端比如只包含android插件，请把ios节点删除掉，不能直接注释**

```json
{
	"name": "插件名称",
	"id": "插件标识",
	"version": "插件版本号",
	"description": "插件描述信息",
	"_dp_type":"nativeplugin",
	"_dp_nativeplugin":{
		"android": {
			"plugins": [
				{
					"type": "module|component, 必填, 根据插件类型选择",
					"name": "必填, 注册插件的名称, 通常与插件标识一致",
					"class": "必填, 注册插件的类名"
				}
			],
			"hooksClass": "可选, 事件钩子注册类名",
			"integrateType": "必填, 可取值aar|jar",
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
			"permissions": [
				"可选, 要使用的Android权限列表"
			],
			"parameters": {
				"插件需要配置的参数名称, 如appid": {
					"des": "参数描述",
					"key": "AndroidManifest.xml中添加meta-data节点的android:name属性值, 如GETUI_APPID",
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
			"resources": [
				"可选, 插件要使用的资源文件列表，相对于ios目录的路径"
			],
			"assets": [    //HBuilderX2.3.4及以上版本支持
			 	"可选，插件要使用的xcassets文件列表，相对于ios目录的路径"
			],
			"privacies": [
				"可选, 插件使用到的隐私列表，如NSPhotoLibraryUsageDescription"
			],
			"deploymentTarget": "8.0, 可选，支持的iOS最低版本",
			"validArchitectures": [    // 可选，支持的CPU架构类型
			 	"arm64"    //支持多个值，可取值：arm64 arm64e armv7 armv7s x86_64
			],
			"parameters": {
				"插件需要配置的参数名称, 如appid": {
					"des": "参数描述信息",
					"key": "参数需要配置到info.plist中的键名, 嵌套时使用:分割，如getui:appid"
				}
			}
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


## Andorid平台
uni原生插件如果支持Android平台，则需在插件下添加`android`目录，并将所有Android平台相关的资源都放到此目录下

- aar文件，直接放到android目录下，云端打包会自动引用所有的aar文件
- android\libs目录，所有需要使用的jar文件放到此目录，如果包含so文件，则放到libs下对应cpu类型目录
- android\assets目录，Android平台需要assets资源
- android\res目录，Android平台需要的res资源

> 在package.json文件中添加android节点，根据需求配置以下数据

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

```
dependencies [
    "com.android.support:recyclerview-v7:25.3.1",
    "com.android.support:support-v4:25.3.1",
    "com.android.support:appcompat-v7:25.3.1",
    "com.alibaba:fastjson:1.1.46.android"
]
```

！！！注意V7、V4、fastjson都已默认集成 不需要再次配置。这里仅是示例写法！！！

**HBuilderX2.3.8+开始添加更灵活配置，支持源码写dependencies内容**

dependencies中的值支持json对象，如下：

```
dependencies [//内容支持字符串或json格式，支持混写
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

```
implementation('com.android.support.test.espresso:espresso-contrib:2.2.2', {
    exclude group: 'com.android.support', module: 'support-v4'
})
```

注意：换行符号需要转义为\r\n。

### compileOptions
HBuilderX2.3.8+开始支持配置云端打包java编译参数。
格式如下：

```
"compileOptions": {  //可选，Java编译参数配置
	"sourceCompatibility": "1.8",
	"targetCompatibility": "1.8"
},
```

云端打包使用的jdk版本为1.8，仅支持取值"1.6"、"1.7"、"1.8"。

### abis
Android平台支持的CPU类型，当插件中包含so库时需要配置插件支持的cpu类型。

```
"abis": [
	"armeabi-v7a",
	"x86"
],
```

云端打包内置插件支持以下CPU类型：

- "armeabi-v7a"，7代及以上的ARM处理器（ARM 32位）
- "arm64-v8a"，第8代、64位ARM处理器（ARM 64位）
- "x86"，使用X86架构的处理器（X86 32位）

**插件包含so库时至少要支持"armeabi-v7a"类型，从2019年9月开始提交的插件会检测支持CPU类型，不满足要求将无法上线**
为了兼容更多的设备和应用市场要求，推荐支持"armeabi-v7a"、"arm64-v8a"、"x86"三种类型。

`将aar文件作为zip解压，jni目录下包含的子目录就是其支持的CPU类型`

### parameters
如果插件使用时需配置参数，如appid、appkey时，可配置parameters字段进行定义，提交云端打包后将会根据配置把数据放到AndroidManifest.xml的meta-data中。
parameters下每个节点定义一个要配置的参数，参数名称为键名，以下为定义appid参数为示例：

```json
"parameters": {
    "android_appid": {
        "des": "XXX插件的appid参数",
        "key": "XXX_APPID",
        "placeholder": "XXX_APPID",
        "value": "TEST_${android_appid}"
   }
}
```

- des 参数的描述信息
可选，在HBuilderX中manifest.json的可视化界面中显示，用于提示插件使用者配置此参数的作用。
- key 云端打包时原生层使用的键名称
可选，与placeholder二选一配置。
此值为AndroidManifest.xml中添加meta-data节点的android:name属性值，推荐使用“插件标识_键名”格式，如"DC-RichAlert_appid"。
- placeholder **HBuilderX2.5.6+版本支持**
可选，与key二选一配置。
此值为在build.gradle中添加manifestPlaceholders的键名，为了避免与其它插件冲突推荐使用“插件标识_键名”格式，如"DC-RichAlert_appid"；
- value 云端打包时格式化的键值
可选，如果需要对插件使用者配置的参数值做一些格式化处理（如添加固定的前缀或后缀）时才需要配置vlue字段。
其中${android_appid}表示插件使用者配置的android_appid参数值；不配置此字段则键值为插件使用者配置的参数值。

**插件使用时需在manifest.json的"app-plus"->"nativePlugins"->"插件标识"中配置（最新版HBuilderX已支持可视化配置）**
以"DC-RichAlert"插件配置appid参数为示例：

```json
"app-plus": {
    "nativePlugins": {
        "DC-RichAlert": {
            "android_appid": "T1234567890"
        }
    }
}
```

按上面的配置规则提交云端打包后将在AndroidManifest.xml中添加以下数据：

```xml
<meta-data android:name="XXX_APPID" android:value="TEST_T1234567890"/>
```

按上面的配置规则提交云端打包后将在manifestPlaceholders中添加以下数据：
```
"XXX_APPID": "TEST_T1234567890"
```


## iOS平台

uni原生插件如果支持iOS平台，则需在插件下添加`ios`目录，并将所有iOS平台相关的资源都放到此目录下

- a文件，直接放到ios目录下，云端打包会自动引用所有的a文件
- framework文件，直接放到ios目录下，云端打包会自动引用所有的framework文件。**如果是否动态库framework，需要在package.json文件的embedFrameworks和frameworks节点下添加库名称**

> 在package.json文件中添加android节点，根据需求配置以下数据

### assets
HBuilderX2.3.4+开始支持配置插件的图片资源文件（xcassets）。
格式如下：

```
"assets": [
 	"myimage.xcassets"      //使用的xcassets文件列表
]
```

"myimage.xcassets"为资源文件（xcassets）路径，相对于插件的ios目录。
注意：引擎本身已经有xcassets资源，插件的xcassets中不能包含已经存在的图片资源，避免冲突
基础图片："app.imageset"、"AppIcon.appiconset"
视频播放控件（VideoPlayer）模块："player_back.imageset"、"player_play.imageset"、"player_stop.imageset"、"control_brightness.imageset"、"exitfullscreen.imageset"、"full-screen.imageset、"video_ic_muteoff.imageset"、"video_ic_muteon.imageset"、"video_volume.imageset"

### validArchitectures
HBuilderX2.6.0+开始支持配置插件支持的CPU架构类型
格式如下：

```
"validArchitectures": [
    "arm64", "arm64e"
]
```

支持配置多个值，取值范围："arm64", "arm64e", "armv7", "armv7s", "x86_64"
不配置此值则认为支持上面所有类型。
云端打包时将会使用所有插件支持类型的交集。


### parameters
如果插件使用时需配置参数，如appid、appkey时，可配置parameters字段进行定义，提交云端打包后将会根据配置把数据放到Info.plist中。
parameters下每个节点（josn）定义一个要配置的参数，参数名称为键名，以下定义appid参数为示例：

```json
"parameters": {
    "ios_appid": {
        "des": "XXX插件的appid参数",
        "key": "DC-RichAlert:appid",
        "value": "TEST_${ios_appid}"
   }
}
```

- des 参数的描述信息
可选，在HBuilderX中manifest.json的可视化界面中显示，用于提示插件使用者配置此参数的作用。
- key 云端打包时原生层使用的键名称
必填，用于定义参数值在Info.plist文件中保存的键名。
如果需要多层级嵌套可使用:分割，推荐使用“插件标识:键名”格式，如"DC-RichAlert:appid"。
- value 云端打包时格式化的键值
可选，如果需要对插件使用者配置的参数值做一些格式化处理（如添加固定的前缀或后缀）时才需要配置vlue字段。
其中${ios_appid}表示插件使用者配置的ios_appid参数值；不配置此字段则键值为插件使用者配置的参数值。

**插件使用时需在manifest.json的"app-plus"->"nativePlugins"->"插件标识"中配置（最新版HBuilderX已支持可视化配置）**
以"DC-RichAlert"插件配置appid参数为示例：

```json
"app-plus": {
    "nativePlugins": {
        "DC-RichAlert": {
            "ios_appid": "T1234567890"
        }
    }
}
```

按上面的配置规则提交云端打包后将在info.plist中添加以下数据：

```plist

<key>DC-RichAlert</key>
<dict>
        <key>appid</key>
        <string>TEST_T1234567890</string>
</dict>
```

**示例**

```
// package.json 中的配置
"parameters": {
				"appkey": {
					"des": "请填写Appkey",
					"key": "getui:appkey"
				},
				"appid":{
					"des": "请填写Appid",
					"key": "getui:appid"
				}
			}
```

HBuilderX 中可视化页面效果

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191121/89544f02d5ca0dee85ff841e57ed3a1f.png)

提交云打包后 iOS 工程 info.plist 中添加的节点，这样就可以通过代码获取 info.plist 中配置的参数

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191121/bc2c69fe33d2c180c37efec733db6c17.png)

