## 准备

	1. Android studio
	2. HBuilderX
	3. 5+ SDK

## 集成

1. 项目创建（如果已经创建了项目可以跳过创建步骤）

	打开Android studio新建一个空白项目

	![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-1.png)

	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-2.png)

	Minimum API Level 建议选19及以上

	package name作为应用标志，涉及申请第三方平台账号，一般情况下不建议修改，包名一般设置反向域名，如：io.dcloud.hbuilder

	**注意：5+ SDK不支持Kotlin**

2. 基础库配置

	+ 将lib.5plus.base-release.aar、android-gif-drawable-release@1.2.17.aar和miit_mdid_1.0.10.aar拷贝到libs目录下

	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-3.png)

	在build.gradle中添加资源引用

	~~~
	implementation fileTree(dir: 'libs', include: ['*.aar', '*.jar'], exclude: [])
    implementation 'com.github.bumptech.glide:glide:4.9.0' // 基座依赖
    implementation 'com.android.support:support-v4:28.0.0'
	implementation 'com.alibaba:fastjson:1.1.46.android'
	~~~
	
3. 应用配置

	+ 配置应用版本号

	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-4.png)
	
	versionCode为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中version -> code值一致
	
	versionName为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中version -> name值一致。
	
	applicationId为应用的包名，一般设置为反向域名，不建议修改。

	建议将targetSdkVersion设置为25或以上。
	
	5+SDK minSdkVersion最低支持19，小于19在部分4.4以下机型上将无法正常使用。
	
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

		+ 图标名称及配置

			icon.png为应用的图标，修改Androidmanifest.xml中application节点的icon属性为@drawable/icon。如下图：
			
			![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-15.png)
	
			push.png为推送消息的图标。
	
			splash.png为应用启动页的图标。

	将icon.png、push.png、splash.png放置到drawable,drawalbe-ldpi,drawable-mdpi,drawable-hdpi,drawable-xhdpi,drawable-xxhdpi文件夹下，不同文件夹下对应不同图片尺寸，可参考[文档](https://blog.csdn.net/xuaho0907/article/details/72848520)
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-6.png)
	
	注意：splash.png在不同设备上显示效果不一样，为防止出现拉伸的状况，建议使用Android studio生成.9.png类型图片，可参考[文档](https://ask.dcloud.net.cn/article/35527)
	
4. 资源配置

	Android studio默认项目没有assets文件夹，需手动创建，创建位置与java目录同级。
		
	* 创建data文件夹并拷贝资源

	将SDK->assets->data文件夹拷贝到刚刚创建的assets文件夹下，如下图：
		
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-7.png)

	注：dcloud1.dat、dcloud2.dat为uni-app所需资源，5+ app可将这两个文件删除
		
	* 创建apps文件夹并拷贝资源

	将HBuilderX中的项目导出，将导出的资源复制到assets->apps下，如下图所示：
		
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-8.png)
		
	[HBuilderX导出资源](https://ask.dcloud.net.cn/question/60254)
		
	* 修改dcloud_control.xml文件

	修改dcloud_control.xml中的appid为5+ app的id，确保dcloud_control.xml中的appid与manifest.json中的id与文件夹名一致，如下图所示：
		
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-9.png)

5. 模块配置

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
	
## 运行

连接手机，点击运行即可。
	
## 其他配置及注意事项

* 广告配置

	新版本SDK简化了离线打包支持[DCloud广告联盟](http://ask.dcloud.net.cn/article/13084)功能。
	AndroidManifest.xml文件中添加如下节点到<application>节点中，并配置替换其中5+应用appid、广告联盟会员adid的值和渠道标识，**因为涉及到开屏广告业务，项目工程必须以io.dcloud.PandoraEntry作为5+应用的入口Activity。该activity已包含在lib.5plus.base-release中，开发者无需实现**。
	
	~~~
   <meta-data android:name="DCLOUD_AD_ID" android:value="广告标识"/>
   <meta-data android:name="DCLOUD_AD_SPLASH" android:value="true"/><!--如果不开启开屏广告则不设置此字段或者值设置为false-->
   <meta-data android:name="DCLOUD_STREAMAPP_CHANNEL" android:value="包名|应用标识|广告标识|渠道，如io.dcloud.appid|appid|adid|google" /><!--为了保证广告统计的有效性，请正确设置此值-->
	~~~
	
	+ 包名：对应Android项目中build.gradle中的applicationId，如io.dcloud.HBuilder
	+ 应用标识：对应对应5+或uni-app项目manifest.json中appid
	+ 广告标识：DCloud的广告标识，开通广告后可在dev.dcloud.net.cn获取，如果没有开通广告，设置值为空即可
	+ 渠道：[渠道包制作指南](http://ask.dcloud.net.cn/article/35974)

	注意：以上操作只是配置5+应用具备广告能力，实际开通需要在manifest.json配置开关，具体参考[DCloud广告联盟](http://ask.dcloud.net.cn/article/13084)。
	
	**注意：提交谷歌应用市场（Google Play）时一定要将渠道标识设置为google！！！**

* provider配置
	
	在Androidmanifest.xml的application节点中添加如下内容
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

* x5配置

	如果需要使用x5内核，将webview-x5-release.aar拷贝到libs目录下，直接运行即可。
	
	uni-app将webview-x5-release.aar和weex_webview-x5-release.aar拷贝到libs目录下即可。
	
* 推送上传谷歌市场注意事项

	SDK提供aps-igexin-gp-release.aar和aps-unipush-gp-release.aar，解决部分用户上传谷歌市场违反相关政策的问题。
	
	如需上传谷歌应用市场，个推须将aps-igexin-release.aar替换成aps-igexin-gp-release.aar，UniPush须将aps-unipush-release.aar替换成aps-unipush-gp-release.aar。
	
	谷歌市场版的个推需要在原配置的基础上新增如下内容
	
	~~~
	        <service  
	            android:name="io.dcloud.feature.apsGt.GTPushDevService"  
	            android:exported="true"  
	            android:label="PushService"  
	            android:process=":pushservice" />  
	        <activity  
	            android:name="com.igexin.sdk.PrivacyActivity"  
	            android:exported="false"/>  
	~~~

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

	

	


	