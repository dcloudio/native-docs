## 开发环境
## Development environment

1. Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
1. Android Studio download address: [Android Studio official website](https://developer.android.google.cn/studio/index.html) OR [Android Studio Chinese community] (http://www.android-studio.org /)
2. [HBuilderX](https://www.dcloud.io/hbuilderx.html)
3. App离线SDK下载：[最新android平台SDK下载](/AppDocs/download/android.md)
3. App offline SDK download: [Latest android platform SDK download](/AppDocs/download/android.md)

**3.1.10版本起需要申请Appkey，具体请点击[链接](/AppDocs/usesdk/appkey.md)**
**From version 3.1.10, you need to apply for Appkey, please click [link](/AppDocs/usesdk/appkey.md) for details**

## SDK目录说明
## SDK directory description

```
	|-- HBuilder-Hello				App离线打包演示应用
	|-- HBuilder-Integrate-AS		集成uni-app的最简示例
	|-- SDK							SDK库文件目录
	|-- Feature-Android.xls			Android平台各扩展Feature API对应的详细配置
	|-- Readme.txt					版本说明文件及注意事项
	|-- UniPlugin-Hello-AS			uni原生插件开发示例
```

## 准备工程
## Prepare project

### 方式一：新建工程
### Method 1: Create a new project
打开Android studio新建一个空白项目
Open Android studio and create a new blank project

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-1.png)
	
选择 Empty Activity 点击 Next。
Select Empty Activity and click Next.

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-2.png)

Minimum API Level 建议选21及以上
Minimum API Level is recommended to choose 21 and above

Package name作为应用标志，涉及申请第三方平台账号，一般情况下不建议修改，包名一般设置反向域名，如：io.dcloud.HBuilder
Package name is used as an application logo, which involves applying for a third-party platform account. Generally, it is not recommended to modify it. The package name is generally set with a reverse domain name, such as: io.dcloud.HBuilder
	
点击 Finish 完成创建。
Click Finish to complete the creation.

**注意：App离线SDK不支持Kotlin**
**Note: App offline SDK does not support Kotlin**

### 方式二：导入工程
### Method 2: Import project

2.7.0之后提供HBuilder-Integrate-AS工程，可以直接导入HBuilder-Integrate-AS工程，直接运行simpleDemo项目即可。
The HBuilder-Integrate-AS project is provided after 2.7.0, which can be directly imported into the HBuilder-Integrate-AS project and run the simpleDemo project directly.
	
## 配置工程
## Configuration project

1. 基础库配置
1. Basic library configuration

	将lib.5plus.base-release.aar、android-gif-drawable-release@1.2.23.aar、uniapp-v8-release.aar、oaid_sdk_1.0.25.aar、install-apk-release.aar和breakpad-build-release.aar拷贝到libs目录下
	
	**注意：HBuilder X 3.5.0及以上版本新增库breakpad-build-release.aar**
	
	**注意：HBuilder X 3.8.7及以上版本新增库install-apk-release.aar，上架谷歌应用市场不能包含此库，更多参考[文档](/AppDocs/FAQ/android.md)**

	![avatar](https://native-res.dcloud.net.cn/images/uniapp/android/lib-list.png)
	
	在build.gradle中添加资源引用
	Add resource reference in build.gradle
	
	**注意：HBuilderX3.2.5版本之后适配了AndroidX。**
	**Note: AndroidX is adapted after HBuilderX3.2.5. **
	
	AndroidX版本需添加如下资源
	The AndroidX version needs to add the following resources
	
	```
    implementation fileTree(include: ['*.jar'], dir: 'libs')
    implementation fileTree(include: ['*.aar'], dir: 'libs')
    implementation 'androidx.appcompat:appcompat:1.0.0'
    implementation 'androidx.legacy:legacy-support-v4:1.0.0'
    implementation 'androidx.recyclerview:recyclerview:1.0.0'
    implementation 'com.facebook.fresco:fresco:2.5.0'
    implementation "com.facebook.fresco:animated-gif:2.5.0"
    implementation 'com.github.bumptech.glide:glide:4.9.0'
    implementation 'com.alibaba:fastjson:1.2.83'
	implementation 'androidx.webkit:webkit:1.3.0'
	```
	
	uni-app配置时需要在build.gradle中添加aaptOptions配置
	When configuring uni-app, you need to add aaptOptions configuration in build.gradle
	
	```
	aaptOptions {  
	    additionalParameters '--auto-add-overlay'  
	    ignoreAssetsPattern "!.svn:!.git:.*:!CVS:!thumbs.db:!picasa.ini:!*.scc:*~"  
	}  
	```
	
	**注意：更新SDK时需要同时更新aar/jar文件和build.gradle配置**
	**Note: When updating the SDK, you need to update the aar/jar file and build.gradle configuration at the same time**
	
2. 应用配置
2. Application configuration

	+ 配置Appkey
	+ Configure Appkey
 	
	**3.1.10版本起需要申请 Appkey，申请请[参考](/AppDocs/usesdk/appkey.md)**
	**From version 3.1.10, you need to apply for Appkey, please [reference](/AppDocs/usesdk/appkey.md)**
	
	打开Androidmanifest.xml， 导航到Application节点，创建meta-data节点，name为dcloud_appkey，value为申请的AppKey如下：
	Open the Androidmanifest.xml, navigate to the Application node, create a meta-data node, the name is dcloud_appkey, and the value is the applied AppKey as follows:
	
	```
	<application
        ...>
        <meta-data
            android:name="dcloud_appkey"
            android:value="替换为自己申请的Appkey" />
	```

	<h3 id="versionCode"></h3>
	
	+ 配置应用版本号
	+ Configure app version number

	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-4.png)
	
	versionCode为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中version -> code值一致
	versionCode is the version number (integer value) of the application, which is used to judge the upgrade of each application market. It is recommended to be consistent with the value of version -> code in manifest.json
	
	versionName为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中version -> name值一致。
	versionName is the version name (string) of the application, the version number displayed in the system application management program, it is recommended to be consistent with the value of version -> name in manifest.json.
	
	applicationId为应用的包名，一般设置为反向域名，不建议修改。
	applicationId is the package name of the application, which is generally set to the reverse domain name, and it is not recommended to modify it.

	建议将targetSdkVersion设置为30或以上。
	
	App离线SDK minSdkVersion最低支持21，小于21在部分5.0以下机型上将无法正常使用。
	App offline SDK minSdkVersion supports at least 21, if it is less than 21, it will not work properly on some models below 5.0.
	
	完整版build.gradle可参考如下内容。
	The full version of build.gradle can refer to the following content.
	
	```
	apply plugin: 'com.android.application'

	android {
		compileSdkVersion 29
		defaultConfig {
			applicationId "com.example.myapplication"
			minSdkVersion 21
			targetSdkVersion 30
			versionCode 1
			versionName "1.0"
			multiDexEnabled true
			ndk {
				abiFilters 'x86', 'armeabi-v7a', 'arm64-v8a'
			}
		}
		compileOptions {
			sourceCompatibility JavaVersion.VERSION_1_8
			targetCompatibility JavaVersion.VERSION_1_8
		}
		buildTypes {
			release {
				minifyEnabled false
				proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
			}
		}
	}

	dependencies {
		implementation fileTree(dir: 'libs', include: ['*.aar', '*.jar'], exclude: [])
		implementation 'androidx.appcompat:appcompat:1.0.0'
		implementation 'androidx.legacy:legacy-support-v4:1.0.0'
		implementation 'com.alibaba:fastjson:1.2.83'
		implementation 'androidx.webkit:webkit:1.3.0'
	}
	```
	
	**注意：如果需要集成的第三方sdk存在so库文件，只需添加armeabi-v7a、arm64-v8a、x86三个文件夹即可，否则会导致在部分手机上无法运行。**
	**Note: If there are so library files in the third-party sdk that needs to be integrated, just add the three folders armeabi-v7a, arm64-v8a, and x86, otherwise it will not work on some phones. **
	
	<h3 id="appName"></h3>
	
	+ 配置应用名称 
	+ Configure application name

	打开app-> src -> main -> res -> values -> strings.xml文件，修改“app_name”字段值，该值为安装到手机上桌面显示的应用名称，建议与manifest.json中name（基础配置中的应用名称）对应。
	Open the app-> src -> main -> res -> values -> strings.xml file, modify the "app_name" field value, which is the name of the application installed on the mobile phone and displayed on the desktop. It is recommended to match the name in manifest.json (basic The application name in the configuration) corresponds to.

	+ 配置应用启动页及provider节点
	+ Configure application startup page and provider node

	将下述activity信息添加到Androidmanifest.xml的application节点中
	Add the following activity information to the application node of Androidmanifest.xml
	
	**注意：新建的项目默认会有一个MainActivity的节点，必须删掉！**
	**Note: The newly created project will have a MainActivity node by default, which must be deleted! **
	
	**注意：为适配折叠屏，需要在PandoraEntryActivity的android:configChanges属性中追加“smallestScreenSize|screenLayout|screenSize”，参考如下配置。**
	**Note: In order to adapt to the folding screen, you need to add "smallestScreenSize|screenLayout|screenSize" to the android:configChanges attribute of PandoraEntryActivity, refer to the following configuration. **
	
	**注意：为适配暗黑模式，需要在PandoraEntryActivity的android:configChanges属性中追加“uiMode”，参考如下配置。**
	**Note: In order to adapt to the dark mode, you need to add "uiMode" to the android:configChanges attribute of PandoraEntryActivity, refer to the following configuration. **

	```
		<activity
            android:name="io.dcloud.PandoraEntry"
            android:configChanges="orientation|keyboardHidden|keyboard|navigation"
            android:label="@string/app_name"
            android:launchMode="singleTask"
            android:hardwareAccelerated="true"
            android:theme="@style/TranslucentTheme"
            android:screenOrientation="user"
            android:windowSoftInputMode="adjustResize" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
            <intent-filter>
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <action android:name="android.intent.action.VIEW" />
                <data android:scheme=" " />
            </intent-filter>
        </activity>
		<activity
            android:name="io.dcloud.PandoraEntryActivity"
            android:launchMode="singleTask"
            android:configChanges="orientation|keyboardHidden|screenSize|mcc|mnc|fontScale|keyboard|smallestScreenSize|screenLayout|screenSize|uiMode"
            android:hardwareAccelerated="true"
            android:permission="com.miui.securitycenter.permission.AppPermissionsEditor"
            android:screenOrientation="user"
            android:theme="@style/DCloudTheme"
            android:windowSoftInputMode="adjustResize">
        </activity>
	```

	添加provider信息到Androidmanifest.xml的application节点中
	Add provider information to the application node of Androidmanifest.xml
	
	**注意：3.3.7及以上版本，可以不添加**
	**Note: For versions 3.3.7 and above, it is not necessary to add**
	
	```
	<!--provider节点必须添加-->
	<!--provider node must be added -->
	<provider
	    android:name="io.dcloud.common.util.DCloud_FileProvider"
	    android:authorities="${apk.applicationId}.dc.fileprovider"
	    android:exported="false"
	    android:grantUriPermissions="true">
	    <meta-data
	        android:name="android.support.FILE_PROVIDER_PATHS"
	        android:resource="@xml/dcloud_file_provider" />
	</provider>
	```
	
	**注意：${apk.applicationId} 必须替换成当前应用的包名**
	**Note: ${apk.applicationId} must be replaced with the package name of the current application**
	
	如果集成离线SDK时需要重写application，必须继承自DCloudApplication，否则会导致SDK中业务逻辑无法正常运行。
	If the application needs to be rewritten when integrating the offline SDK, it must inherit from DCloudApplication, otherwise the business logic in the SDK will not work properly.
		
	将对应的application配置到Androidmanifest.xml中（如下），并添加tools:replace="android:name"以防出现冲突。
	Configure the corresponding application to Androidmanifest.xml (as follows), and add tools:replace="android:name" to prevent conflicts.
		
	```
		<application  
		    android:name="io.dcloud.test.TestApplication"  
		    android:icon="@drawable/icon"  
		    android:label="@string/app_name"  
		    tools:replace="android:name">
		</application>
	```

	<h3 id="icons"></h3>

	+ 配置应用图标和启动界面
	+ Configure app icon and splash screen

		+ 图标名称
		+ icon name

			icon.png为应用的图标。
			icon.png is the icon of the application.
	
			push.png为推送消息的图标。
			push.png is the icon of the push message.
	
			splash.png为应用启动页的图标。
			splash.png is the icon of the application startup page.

	将icon.png、push.png、splash.png放置到drawable，drawable-ldpi，drawable-mdpi，drawable-hdpi，drawable-xhdpi，drawable-xxhdpi文件夹下，不同文件夹下对应不同图片尺寸，可参考[文档](https://blog.csdn.net/xuaho0907/article/details/72848520)
	Put icon.png, push.png, splash.png in drawable, drawable-ldpi, drawable-mdpi, drawable-hdpi, drawable-xhdpi, drawable-xxhdpi folders, different folders correspond to different image sizes, please refer to [Documentation](https://blog.csdn.net/xuaho0907/article/details/72848520)
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-6.png)
	
	修改Androidmanifest.xml中application节点的icon属性为@drawable/icon。如下图：
	Modify the icon attribute of the application node in Androidmanifest.xml to @drawable/icon. As shown below:
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-15.png)
	
	注意：splash.png在不同设备上显示效果不一样，为防止出现拉伸的状况，建议使用Android studio生成.9.png类型图片，可参考[文档](https://ask.dcloud.net.cn/article/35527)
	Note: The display effect of splash.png is different on different devices. In order to prevent stretching, it is recommended to use Android studio to generate .9.png type images. Please refer to [Documentation](https://ask.dcloud.net. cn/article/35527)
	
3. 资源配置
3. Resource allocation

	Android studio默认项目没有assets文件夹，需手动创建，创建位置与java目录同级。
	The Android studio default project does not have an assets folder, which needs to be created manually at the same level as the java directory.
		
	* 创建data文件夹并拷贝资源
	* Create a data folder and copy resources

	将SDK->assets->data文件夹拷贝到刚刚创建的assets文件夹下，如下图：
	Copy the SDK->assets->data folder to the newly created assets folder, as shown below:
		
	![avatar](http://native-res.dcloud.net.cn/images/nativeplugin/android/assets_data.png)
	
	注意：SDK升级时，data下资源需要同时更新。
	Note: When the SDK is upgraded, the resources under data need to be updated at the same time.
		
	* 创建apps文件夹并拷贝资源
	* Create apps folder and copy resources

	将HBuilderX中的项目导出，将导出的资源复制到assets->apps下，如下图所示：
	Export the project in HBuilderX, and copy the exported resources to assets->apps, as shown in the following figure:
		
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-8.png)
		
	[导出app资源](/AppDocs/importfeproject/export.md)
	[Export app resources](/AppDocs/importfeproject/export.md)
		
	* 修改dcloud_control.xml文件
	* Modify the dcloud_control.xml file

	修改dcloud_control.xml中的appid为拷贝过来的uni-app的id，确保dcloud_control.xml中的appid与manifest.json中的id与文件夹名一致，如下图所示：
	Modify the appid in dcloud_control.xml to the id of the copied uni-app, and ensure that the appid in dcloud_control.xml is consistent with the id in manifest.json and the folder name, as shown in the following figure:
		
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-9.png)
	
	<h3 id="debug"></h3>
	生成自定义基座，需要在根节点下添加debug="true"和syncDebug="true"，如下图：
	To generate a custom base, you need to add debug="true" and syncDebug="true" under the root node, as shown below:
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-20.png)
	
	自定义基座支持热更新需要将debug-server-release.aar打入apk中，生成正式包时可以删除。
	To support hot update of the custom dock, debug-server-release.aar needs to be put into the apk, which can be deleted when generating the official package.
	
	[详细步骤可参考链接](https://ask.dcloud.net.cn/article/35482)
	[For detailed steps, please refer to the link](https://ask.dcloud.net.cn/article/35482)
	
4. 如何配置暗黑模式	
	在AndroidManifest.xml中添加:
	```xml
	<meta-data
	            android:name="DCLOUD_DARK_MODE"
	            android:value= "替换为应用的主题模式" />
	```
	其中可用的模式分别为 `light`、`dark`、`auto`, 此设置会影响启动时的默认模式，另外在运行时可使用`plus.nativeUI.setUIStyle`动态修改主题模式。
	
	**注意`PandoraEntryActivity`的`android:configChanges`配置必须包含uiMode。**
5. 其他配置

	AndroidX 配置
	AndroidX configuration
	
	需要在项目根目录下的gradle.properties文件中添加如下内容
	The following content needs to be added to the gradle.properties file in the project root directory
	
	```
	android.useAndroidX=true
	android.enableJetifier=true
	```

<!--5. 模块配置
<!--5. Module configuration

	* 依赖库配置
	* Dependent library configuration

	参考“Feature-Android.xls”文档确定应用中使用到的扩展API，拷贝libs目录中对应的“jar或aar”文件拷贝到工程的app->libs目录下，如使用地图功能，需将下图“jar包”列对应的文件拷贝到libs目录下。
	Refer to the "Feature-Android.xls" document to determine the extended API used in the application, copy the corresponding "jar or aar" file in the libs directory to the app->libs directory of the project, if using the map function, you need to copy the following Copy the files corresponding to the "jar package" column to the libs directory.
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-11.png)
	
	* 添加应用权限
	* Add application permissions
	
	参考“Feature-Android.xls”文档的“AndroidManifest.xml permission”列，将需要配置的模块的权限拷贝到对应项目的Androidmanifest.xml中，如下图。
	Refer to the "AndroidManifest.xml permission" column of the "Feature-Android.xls" document, and copy the permissions of the modules to be configured to the Androidmanifest.xml of the corresponding project, as shown in the figure below.
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-12.png)
	
	* dcloud_properties.xml 配置
	* dcloud_properties.xml configuration
	
	参考“Feature-Android.xls”文档的“properties.xml文件配置”列，将需要配置的模块的features节点和services节点拷贝到dcloud_properties.xml中，如下图。
	Refer to the "properties.xml file configuration" column of the "Feature-Android.xls" document, and copy the features node and services node of the module to be configured to dcloud_properties.xml, as shown in the figure below.
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-14.png)
	
	* 添加第三方应用信息
	* Add third-party application information
	
	参考“Feature-Android.xls”文档的“AndroidManifest.xml Application节点”列，将需要配置的模块的节点拷贝到对应项目的Androidmanifest.xml中并修改对应的应用信息，如下图。
	Refer to the "AndroidManifest.xml Application node" column of the "Feature-Android.xls" document, copy the node of the module to be configured to the Androidmanifest.xml of the corresponding project and modify the corresponding application information, as shown in the figure below.
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-13.png)
	
	* 其他模块配置
	* Other module configuration
	
		* [推送插件配置](http://ask.dcloud.net.cn/article/227)
		* [Push plug-in configuration](http://ask.dcloud.net.cn/article/227)
		* [分享插件配置](http://ask.dcloud.net.cn/article/210)
		* [Share plugin configuration](http://ask.dcloud.net.cn/article/210)
		* [登陆鉴权插件配置](http://ask.dcloud.net.cn/article/211)
		* [Login authentication plug-in configuration](http://ask.dcloud.net.cn/article/211)
		* [地图插件配置](http://ask.dcloud.net.cn/article/212)
		* [Map plugin configuration](http://ask.dcloud.net.cn/article/212)
		* [支付插件配置](http://ask.dcloud.net.cn/article/214)
		* [Payment plugin configuration](http://ask.dcloud.net.cn/article/214)
		* [定位插件配置](http://ask.dcloud.net.cn/article/213)
		* [Positioning plug-in configuration](http://ask.dcloud.net.cn/article/213)

-->

## uts插件@utsconfig

**注意：需要HBuilder X 4.18版本及以上。**

如果uni-app项目包括uts原生插件，资源导出之后会在resources目录下新增uni_modules目录。参考：

![](https://web-ext-storage.dcloud.net.cn/native/doc/android/android_unimodules.png)

### 添加uts依赖
	
1. 将`utsplugin-release.aar`拷贝到项目的libs目录下
2. 在app项目的build.gradle中添加如下内容
	```groovy
	dependencies {
	    implementation "com.squareup.okhttp3:okhttp:3.12.12"
	    implementation "androidx.core:core-ktx:1.6.0"
	    implementation "org.jetbrains.kotlin:kotlin-stdlib:1.8.10"
	    implementation "org.jetbrains.kotlin:kotlin-reflect:1.6.0"
	    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.8"
	    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.8"
	    implementation "com.github.getActivity:XXPermissions:18.0"
	}
	```
### 配置uts插件

uts原生插件导入参考[文档](https://doc.dcloud.net.cn/uni-app-x/native/use/android.html#%E9%85%8D%E7%BD%AEuts%E6%8F%92%E4%BB%B6)，将uts插件导入到android项目中。

具体示例可以参考离线打包SDK中的`UniPlugin-Hello-AS`工程。
	
## 运行
## run

连接手机，点击按钮，运行即可。
Connect the phone, click the button, and run.

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-6.png)
	

	


	
