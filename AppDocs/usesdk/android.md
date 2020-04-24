## 开发环境

1. Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
2. [HBuilderX](https://www.dcloud.io/hbuilderx.html)
3. App离线SDK下载：[最新android平台SDK下载](/AppDocs/download/android.md)

## SDK目录说明

~~~
	|-- HBuilder-Hello				App离线打包演示应用
	|-- HBuilder-Integrate			5+ App集成和插件开发示例
	|-- libs						        SDK库文件目录
	|-- Feature-Android.xls			Android平台各扩展Feature API对应的详细配置
	|-- Readme.txt					版本说明文件及注意事项
	|-- UniPlugin-Hello-AS			uni原生插件开发示例
~~~

## 准备工程
打开Android studio新建一个空白项目

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-1.png)
	
选择 Empty Activity 点击 Next。

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-2.png)

Minimum API Level 建议选19及以上

Package name作为应用标志，涉及申请第三方平台账号，一般情况下不建议修改，包名一般设置反向域名，如：io.dcloud.HBuilder
	
点击 Finish 完成创建。

**注意：App离线SDK不支持Kotlin**
	
## 配置工程

1. 基础库配置

	+ 5+APP
	
	将lib.5plus.base-release.aar、android-gif-drawable-release@1.2.17.aar和miit_mdid_1.0.10.aar拷贝到libs目录下

	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-3.png)

	在build.gradle中添加资源引用

	~~~
	implementation fileTree(dir: 'libs', include: ['*.aar', '*.jar'], exclude: [])
    implementation 'com.github.bumptech.glide:glide:4.9.0' // 基座依赖
    implementation 'com.android.support:support-v4:28.0.0'
	implementation 'com.alibaba:fastjson:1.1.46.android'
	~~~
	
	+ uni-app

	将lib.5plus.base-release.aar、android-gif-drawable-release@1.2.17.aar和miit_mdid_1.0.10.aar拷贝到libs目录下

	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-10.png)
	
	在build.gradle中添加资源引用
	
	~~~
    implementation fileTree(dir: 'libs', include: ['*.aar', '*.jar'], exclude: [])
    implementation "com.android.support:support-v4:28.0.0"
    implementation "com.android.support:appcompat-v7:28.0.0"
    implementation 'com.android.support:recyclerview-v7:28.0.0'
    implementation 'com.facebook.fresco:fresco:1.13.0'
    implementation "com.facebook.fresco:animated-gif:1.13.0"
    implementation 'com.github.bumptech.glide:glide:4.9.0'
    implementation 'com.alibaba:fastjson:1.1.46.android'
	~~~
	
	uni-app配置时需要在build.gradle中添加aaptOptions配置
	
	~~~
	aaptOptions {  
	    additionalParameters '--auto-add-overlay'  
	    ignoreAssetsPattern "!.svn:!.git:.*:!CVS:!thumbs.db:!picasa.ini:!*.scc:*~"  
	}  
	~~~
	
		**注意：更新SDK时需要同时更新aar/jar文件和build.gradle配置**
	
2. 应用配置

	+ 配置应用版本号

	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-4.png)
	
	versionCode为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中version -> code值一致
	
	versionName为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中version -> name值一致。
	
	applicationId为应用的包名，一般设置为反向域名，不建议修改。

	建议将targetSdkVersion设置为25或以上。
	
	App离线SDK minSdkVersion最低支持19，小于19在部分4.4以下机型上将无法正常使用。
	
	完整版build.gradle可参考如下内容。
	
	~~~
	apply plugin: 'com.android.application'

	android {
		compileSdkVersion 28
		defaultConfig {
			applicationId "com.example.myapplication"
			minSdkVersion 19
			targetSdkVersion 28
			versionCode 1
			versionName "1.0"
			multiDexEnabled true
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
		implementation 'com.github.bumptech.glide:glide:4.9.0' // 基座依赖
		implementation 'com.android.support:support-v4:28.0.0'
		implementation 'com.alibaba:fastjson:1.1.46.android'
	}
	~~~
	
	+ 配置应用名称

	打开app->res -> main -> values -> strings.xml文件，修改“app_name”字段值，该值为安装到手机上桌面显示的应用名称，建议与manifest.json中name（基础配置中的应用名称）对应。

	+ 配置应用启动页

	将下述内容添加到Androidmanifest.xml的application节点中

	~~~
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
        </activity>
		<activity
            android:name="io.dcloud.PandoraEntryActivity"
            android:launchMode="singleTask"
            android:configChanges="orientation|keyboardHidden|screenSize|mcc|mnc|fontScale|keyboard"
            android:hardwareAccelerated="true"
            android:permission="com.miui.securitycenter.permission.AppPermissionsEditor"
            android:screenOrientation="user"
            android:theme="@style/DCloudTheme"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <action android:name="android.intent.action.VIEW" />
                <data android:scheme="h56131bcf" />
            </intent-filter>
        </activity>
	~~~

	+ 配置应用图标和启动界面

		+ 图标名称

			icon.png为应用的图标。
	
			push.png为推送消息的图标。
	
			splash.png为应用启动页的图标。

	将icon.png、push.png、splash.png放置到drawable，drawalbe-ldpi，drawable-mdpi，drawable-hdpi，drawable-xhdpi，drawable-xxhdpi文件夹下，不同文件夹下对应不同图片尺寸，可参考[文档](https://blog.csdn.net/xuaho0907/article/details/72848520)
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-6.png)
	
	修改Androidmanifest.xml中application节点的icon属性为@drawable/icon。如下图：
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-15.png)
	
	注意：splash.png在不同设备上显示效果不一样，为防止出现拉伸的状况，建议使用Android studio生成.9.png类型图片，可参考[文档](https://ask.dcloud.net.cn/article/35527)
	
3. 资源配置

	Android studio默认项目没有assets文件夹，需手动创建，创建位置与java目录同级。
		
	* 创建data文件夹并拷贝资源

	将SDK->assets->data文件夹拷贝到刚刚创建的assets文件夹下，如下图：
		
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-7.png)

	注意：dcloud1.dat、dcloud2.dat为uni-app所需资源，5+APP可将这两个文件删除。
	
	注意：SDK升级时，data下资源需要同时更新。。
		
	* 创建apps文件夹并拷贝资源

	将HBuilderX中的项目导出，将导出的资源复制到assets->apps下，如下图所示：
		
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-8.png)
		
	[导入app资源](/AppDocs/importfeproject/android.md)
		
	* 修改dcloud_control.xml文件

	修改dcloud_control.xml中的appid为拷贝过来的5+APP的id，确保dcloud_control.xml中的appid与manifest.json中的id与文件夹名一致，如下图所示：
		
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-9.png)

<!--5. 模块配置

	* 依赖库配置

	参考“Feature-Android.xls”文档确定应用中使用到的扩展API，拷贝libs目录中对应的“jar或aar”文件拷贝到工程的app->libs目录下，如使用地图功能，需将下图“jar包”列对应的文件拷贝到libs目录下。
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-11.png)
	
	* 添加应用权限
	
	参考“Feature-Android.xls”文档的“AndroidManifest.xml permission”列，将需要配置的模块的权限拷贝到对应项目的Androidmanifest.xml中，如下图。
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-12.png)
	
	* dcloud_properties.xml 配置
	
	参考“Feature-Android.xls”文档的“properties.xml文件配置”列，将需要配置的模块的features节点和services节点拷贝到dcloud_properties.xml中，如下图。
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-14.png)
	
	* 添加第三方应用信息
	
	参考“Feature-Android.xls”文档的“AndroidManifest.xml Application节点”列，将需要配置的模块的节点拷贝到对应项目的Androidmanifest.xml中并修改对应的应用信息，如下图。
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-13.png)
	
	* 其他模块配置
	
		* [推送插件配置](http://ask.dcloud.net.cn/article/227)
		* [分享插件配置](http://ask.dcloud.net.cn/article/210)
		* [登陆鉴权插件配置](http://ask.dcloud.net.cn/article/211)
		* [地图插件配置](http://ask.dcloud.net.cn/article/212)
		* [支付插件配置](http://ask.dcloud.net.cn/article/214)
		* [定位插件配置](http://ask.dcloud.net.cn/article/213)

-->
	
## 运行

连接手机，点击按钮，运行即可。

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-6.png)
	

	


	