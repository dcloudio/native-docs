* 离线打包无法调起应用安装界面
	
	如果离线打包调用plus.runtime.install无法调起安装界面，需要在Androidmanifest.xml的application节点中添加如下内容
	
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
