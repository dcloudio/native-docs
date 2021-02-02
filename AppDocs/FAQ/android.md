* 移动安全联盟
	
	HBuilder X 3.1.0升级移动安全联盟SDK到1.0.25版本，集成时需将minSdkVersion调整为21。
	
	1.0.13版本可在 SDK目录/SDK/libs/ 中找到。
	
	**注意：1.0.13与1.0.25不能同时使用。**

* gallery 冲突问题
	
	HBuilder X 3.0.7及以上版本，gallery-dmcBig-release.aar相应代码被加入到lib.5plus.base-release.aar，使用时请删除gallery-dmcBig-release.aar库。

* 离线打包编译报错
	
	如果离线打包编译时提示如下错误，请参考以下做法
	~~~
	Execution failed for task ':hbuilder:checkDebugDuplicateClasses'.
	> 1 exception was raised by workers:
	java.lang.IllegalStateException: java.lang.IllegalStateException: Worker finished without being first started
	~~~
	
	将项目根目录下的build.gradle中的gradle插件版本升级到4.1.1
	
	~~~
	buildscript {
		repositories {
			jcenter()
			google()
		}
		dependencies {
			classpath 'com.android.tools.build:gradle:4.1.1'
		}
	}
	~~~
	
	修改项目根目录 gradle/gradle-wrapper.properties 下的gradle的版本到6.5
	
	~~~
	distributionBase=GRADLE_USER_HOME
	distributionPath=wrapper/dists
	zipStoreBase=GRADLE_USER_HOME
	zipStorePath=wrapper/dists
	distributionUrl=https\://services.gradle.org/distributions/gradle-6.5-bin.zip
	~~~

* 离线打包无法调起应用安装界面
	
	如果离线打包调用plus.runtime.install无法调起安装界面，需要在Androidmanifest.xml中添加如下内容
	
	在manifest节点下添加安装应用的权限
	
	~~~
	<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>
	~~~
	
	在application节点下添加provider节点
	
	~~~
		<provider
            android:name="io.dcloud.common.util.DCloud_FileProvider"
            android:authorities="${apk.applicationId}.dc.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/dcloud_file_provider" />
        </provider>
	~~~

	${apk.applicationId}须替换成应用的包名。
	
* 离线打包Android 10上无法启动相机

	在application节点下添加provider节点
	
	~~~
		<provider
            android:name="io.dcloud.common.util.DCloud_FileProvider"
            android:authorities="${apk.applicationId}.dc.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/dcloud_file_provider" />
        </provider>
	~~~

	${apk.applicationId}须替换成应用的包名。
	
* uni-AD业务状态异常

	如果出现uni-AD业务状态异常提醒，如下图：

	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-5.png)

	请删除掉未申请的平台的相关配置和aar，例如广告后台添加了穿山甲广告，但没有添加360和广点通的广告，请删除掉广点通和360的相关配置和aar。

* x5配置

	如果需要使用x5内核，将webview-x5-release.aar拷贝到libs目录下，直接运行即可。
	
	uni-app将webview-x5-release.aar和weex_webview-x5-release.aar拷贝到libs目录下即可。
	
* 推送上传谷歌市场注意事项

	[Android离线SDK解决使用UniPush和个推推送违反谷歌应用商店（GooglePlay）个人和敏感信息政策的问题](https://ask.dcloud.net.cn/article/36495)

* 高德地图上传谷歌市场注意事项

	如需上传谷歌市场，将原来的amap-libs-release.aar替换成amap-gp-libs-release.aar即可。
	
* uni-app离线打包注意事项

	[uni-app离线打包Android平台注意事项](https://ask.dcloud.net.cn/article/35139)
	
* 重写application

	如果集成离线SDK时需要重写application，必须继承自DCloudApplication，否则会导致SDK中业务逻辑无法正常运行。
	
	将对应的application配置到Androidmanifest.xml中（如下），并添加tools:replace="android:name"以防出现冲突。
	
	~~~
	<application  
	    android:name="io.dcloud.test.TestApplication"  
	    android:icon="@drawable/icon"  
	    android:label="@string/app_name"  
	    tools:replace="android:name">
	</application>
	~~~
	
* 添加so库

	如果需要集成的第三方sdk存在so库文件，只需添加armeabi-v7a、arm64-v8a、x86三个文件夹即可，如果添加其他文件夹会导致在部分手机上无法运行。
