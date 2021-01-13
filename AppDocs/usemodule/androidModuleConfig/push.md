## uniPush

### 需要拷贝的文件

**需要引入工程的jar/aar文件**

需要将以下jar/aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | aps-release.aar, aps-unipush-release.aar |

### gradle配置

打开build.gradle，在defaultConfig添加manifestPlaceholders节点，如下图所示，将io.dcloud.HBuilder替换成自己的应用包名，将appid等信息替换成申请之后的appid等。

***应用的app id/app key等信息，从开发者后台->unipush->配置管理->应用管理 界面查看***
~~~
android {
    defaultConfig {
        manifestPlaceholders = [
                "plus.unipush.appid" : "pPyZWvH3Fa6PXba19ID0091",
                "plus.unipush.appkey" : "b7dOGlNPHR7pqwUxcXPVi44",
                "plus.unipush.appsecret": "IxVYAT9qws8dlNElacmSg12",
                "apk.applicationId":"io.dcloud.HBuilder"
        ]
    }
}
~~~

### 厂商配置

添加下列内容到androidmanifest.xml中（未申请平台无需添加）

~~~
		<!--小米厂商配置——开始-->
        <meta-data
            android:name="MIPUSH_APPID"
            android:value="XM_${XIAOMI_APP_ID}" />
        <meta-data
            android:name="MIPUSH_APPKEY"
            android:value="XM_${XIAOMI_APP_KEY}" />
		<!--小米厂商配置——结束-->
		<!--魅族厂商配置——开始-->
        <meta-data
            android:name="MEIZUPUSH_APPID"
            android:value="MZ_${MEIZU_APP_ID}" />
        <meta-data
            android:name="MEIZUPUSH_APPKEY"
            android:value="MZ_${MEIZU_APP_KEY}" />
		<!--魅族厂商配置——结束-->
		<!--华为厂商配置——开始-->
        <meta-data
            android:name="com.huawei.hms.client.appid"
            android:value="${HUAWEI_APP_ID}" />
		<!--华为厂商配置——结束-->
		<!--OPPO厂商配置——开始-->
        <meta-data
            android:name="OPPOPUSH_APPKEY"
            android:value="OP_${OPPO_APP_KEY}" />
        <meta-data
            android:name="OPPOPUSH_APPSECRET"
            android:value="OP_${OPPO_APP_SECRET}" />
		<!--OPPO厂商配置——结束-->
		<!--VIVO厂商配置——开始-->
        <meta-data
            android:name="com.vivo.push.app_id"
            android:value="${VIVO_APP_ID}" />
        <meta-data
            android:name="com.vivo.push.api_key"
            android:value="${VIVO_APP_KEY}" />
		<!--VIVO厂商配置——结束-->
~~~

修改build.gradle，添加对应平台申请的appkey或appid（键名必须统一，如XIAOMI_APP_ID必须同时存在于build.gradle文件和Androidmanifest.xml文件中），如下所示:

~~~
android {
    defaultConfig {
        manifestPlaceholders = [
				"XIAOMI_APP_ID":"ccccccccc",
				"XIAOMI_APP_KEY":"aaaaaaaaaaaaaa"
        ]
    }
}
~~~

### dcloud_properties.xml配置

在properties中添加如下配置，features节点与services节点必须同时配置！

~~~
<properties>
	<features>
		<feature name="Push" value="io.dcloud.feature.aps.APSFeatureImpl">
			<module name="unipush" value="io.dcloud.feature.unipush.GTPushService"/>
		</feature>
	</features>	
	<services>
		<service name="push" value="io.dcloud.feature.aps.APSFeatureImpl"/>
	</services>
</properties>
~~~
### 其余配置

#### OPPO推送
oppo集成uniPush时需在Androidmanifest.xml的入口activity中添加如下配置：

~~~
<activity
            android:name="io.dcloud.PandoraEntry">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
			/*oppo配置开始*/
            <intent-filter>
                <action android:name="android.intent.action.oppopush" />
                <category android:name="android.intent.category.DEFAULT" />
            </intent-filter>
			/*oppo配置结束*/
        </activity>
~~~

#### 华为推送

HBuilder X 3.0.7及以上版本uniPush更新了华为推送，新版本需要添加如下配置

- 项目根目录下的build.gradle

	打开项目根目录下的build.gradle

	![avatar](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201225172814.15570060749712294515475466948851:50511225100302:2800:6E7604FEEA68031778F7F629F52108A0B07123E5F7C4617549E92907DB567642.png?needInitFileName=true?needInitFileName=true)

	需要在项目根目录下的build.gradle下添加华为推送的仓库地址，如下：
	
	~~~
	buildscript {
		repositories {
			jcenter()
			google()
			// 配置HMS Core SDK的Maven仓地址。
			maven {url 'https://developer.huawei.com/repo/'}
		}
		dependencies {
			classpath 'com.android.tools.build:gradle:3.4.1'
			// 增加agcp配置。
			classpath 'com.huawei.agconnect:agcp:1.4.1.300'
		}
	}
	allprojects {
		repositories {
			jcenter()
			google()
			// 配置HMS Core SDK的Maven仓地址。
			maven {url 'https://developer.huawei.com/repo/'}
		}
	}
	~~~
	
- 项目应用下的build.gradle

	打开需要集成华为推送的项目的build.gradle
	
	![avatar](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201225172814.41687838999666418387886670427888:50511225100302:2800:ED0C3E00BB9307BF58A033D5989CEA74EB30C29FD2682524E6052A4676E996F5.png?needInitFileName=true?needInitFileName=true)
	
	在文件头**apply plugin: 'com.android.application'**下一行添加如下配置。
	
	~~~
	apply plugin: 'com.android.application'
	apply plugin: 'com.huawei.agconnect'
	~~~
	
	在**“dependencies”**中添加如下编译依赖
	
	**注意：推送库版本号与uniPush对应，不能随便修改。**
	
	~~~
	dependencies {
		implementation 'com.huawei.hms:push:5.0.2.300'
	}
	~~~
	
- 添加添加华为推送的配置文件

	登录华为的AppGallery Connect网站，找到需要集成华为推送的应用，在“项目设置 > 常规”页面的“应用”区域，点击“agconnect-services.json”下载配置文件。
	
	![avatar](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201225172814.82122974639602019523080676568491:50511225100302:2800:421C682B60A30B40C29A5B24B80F9DBF66FACFADCDBCC915CF78D8F9A339A2B6.png?needInitFileName=true?needInitFileName=true)

	将“agconnect-services.json”文件拷贝到应用级根目录下。
	
	![avatar](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201225172814.66644716722512700517693766220612:50511225100302:2800:AACC86D24121BBDD807B4A8508EFF7E1A8CC34DF3C31B2D7F687FC6FCA0F2915.png?needInitFileName=true?needInitFileName=true)
	

## 个推推送

### 需要拷贝的文件

**需要引入工程的jar/aar文件**

需要将以下jar/aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | aps-release.aar, aps-igexin-release.aar |

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

因Android L（android 5.0）系统自身限制，多个应用安装时，如果拥有同一个Service权限，会导致权限冲突，只能安装一个带有此权限的应用。对此，个推SDK在声明自定义权限时需要添加apk的包名以避免和其他使用个推的应用冲突。

~~~
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<uses-permission android:name="android.permission.WAKE_LOCK"/>
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.VIBRATE"/>
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
<uses-permission android:name="android.permission.CALL_PHONE"/>
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
<uses-permission android:name="getui.permission.GetuiService.$你的APK包名"/>
<permission android:name="getui.permission.GetuiService.$你的APK包名" android:protectionLevel="normal"/>

~~~
`<application>`节点下配置如下代码

~~~
        <meta-data android:name="PUSH_APPID" android:value="$你自己的APPID"/>
        <meta-data android:name="PUSH_APPKEY" android:value="$你的appkey"/>
        <meta-data android:name="PUSH_APPSECRET" android:value="$你的appsecret"/>
        <service
            android:name="com.igexin.sdk.PushService"
            android:exported="true"
            android:label="NotificationCenter"
            android:process=":pushservice">
            <intent-filter>
                <action android:name="com.igexin.sdk.action.service.message"/>
            </intent-filter>
        </service>
        <receiver android:name="com.igexin.sdk.PushReceiver">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
                <action android:name="android.net.conn.CONNECTIVITY_CHANGE"/>
                <action android:name="android.intent.action.USER_PRESENT"/>
                <action android:name="com.igexin.sdk.action.refreshls"/>
                <action android:name="android.intent.action.MEDIA_MOUNTED"/>
                <action android:name="android.intent.action.ACTION_POWER_CONNECTED"/>
                <action android:name="android.intent.action.ACTION_POWER_DISCONNECTED"/>
            </intent-filter>
        </receiver>
        <activity
            android:name="com.igexin.sdk.PushActivity"
            android:excludeFromRecents="true"
            android:exported="false"
            android:process=":pushservice"
            android:taskAffinity="com.igexin.sdk.PushActivityTask"
            android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <activity
            android:name="com.igexin.sdk.GActivity"
            android:excludeFromRecents="true"
            android:exported="true"
            android:process=":pushservice"
            android:taskAffinity="com.igexin.sdk.PushActivityTask"
            android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <receiver android:name="io.dcloud.feature.apsGt.GTNotificationReceiver"
		            android:exported="false">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
                <action android:name="填写APK的包名.__CREATE_NOTIFICATION"/>
                <action android:name="填写APK的包名.__REMOVE_NOTIFICATION"/>
                <action android:name="填写APK的包名.__CLEAR_NOTIFICATION"/>
                <action android:name="填写APK的包名.__CLILK_NOTIFICATION"/>
            </intent-filter>
        </receiver>
        <service
            android:name="io.dcloud.feature.apsGt.GTNormalIntentService"/>

~~~

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

features节点下添加

~~~
<feature name="Push" value="io.dcloud.feature.aps.APSFeatureImpl"><module name="igexin" value="io.dcloud.feature.apsGt.GTPushService"/></feature>
~~~

services节点下添加

~~~
<service
            name="push"
            value="io.dcloud.feature.aps.APSFeatureImpl" />
~~~

## 谷歌推送

### 需要拷贝的文件

**需要引入工程的jar/aar文件**

需要将以下jar/aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | aps-release.aar, aps-unipush-gp-release.aar, aps-igexin-fcm-release.aar |

**注意：要想使用谷歌推送必须使用aps-unipush-gp-release.aar**

### 配置指南

[UniPush支持谷歌推送FCM配置指南](https://ask.dcloud.net.cn/article/37356)

### gradle配置

#### project级的build.gradle配置

在project级的build.gradle的buildscript->dependencies添加下面内容

~~~
buildscript { 
	dependencies {
		classpath 'com.google.gms：google-services：4.2.0'
	}
}
~~~

如下图：

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-21.png)

#### app级的build.gradle配置

+ 在build.gradle最前面添加下面内容

~~~
apply plugin： 'com.google.gms.google-services'
~~~

+ 在dependencies节点下添加下面内容

~~~
    implementation 'com.google.firebase:firebase-core:16.0.8'
    implementation 'com.google.firebase:firebase-messaging:17.6.0'
~~~

如下图

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-22.png)

+ 添加google-services.json

在创建好Firebase应用时，会有自动弹框指引下载googie-services.json，请根据指引下载google-services.json文件，并根据官网指引将google-services.json文件放在对应的文件夹下, 然后点击continue.

### uniPush配置

[uniPush](/AppDocs/usemodule/androidModuleConfig/push?id=GooglePlay渠道配置)


## GooglePlay渠道配置

### aar 引用

SDK提供aps-igexin-gp-release.aar和aps-unipush-gp-release.aar，打包应用上传google play时，替换原aps-igexin-release.aar或aps-unipush-release.aar。注意，google play版SDK与原版SDK存在冲突，所以使用时只能保留其中一个。

### AndroidManifest.xml配置

* google play版uniPush配置

在AndroidManifest.xml中添加如下配置。

~~~
        <activity
            android:name="com.igexin.sdk.PrivacyActivity"
            android:exported="false"/>
~~~

* google play版个推配置

在原个推离线配置基础上将如下配置添加到AndroidManifest.xml中。

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

### 其余配置

[uniPush](/AppDocs/usemodule/androidModuleConfig/push?id=unipush)

[个推](/AppDocs/usemodule/androidModuleConfig/push?id=个推推送)

<!--
## 小米推送

### 需要拷贝的文件

需要将以下jar/aar文件拷贝到工程中

|路径|文件|
| :-------: | :-------: |
| SDK\libs | aps-release.aar, aps-xiaomi-release.aar |

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~
        <uses-permission android:name="android.permission.INTERNET"/>
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
        <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
        <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
        <uses-permission android:name="android.permission.GET_TASKS"/>
        <uses-permission android:name="android.permission.VIBRATE"/>
        <uses-permission android:name="android.permission.GET_TASKS"/>
        <uses-permission android:name="android.permission.INTERACT_ACROSS_USERS_FULL"/>
		<uses-permission android:name="android.permission.GET_TOP_ACTIVITY_INFO"/> 
		<permission android:name="填写APK的包名.permission.MIPUSH_RECEIVE" android:protectionLevel="signature"/>
		<uses-permission android:name="填写APK的包名.permission.MIPUSH_RECEIVE"/>
~~~

**application节点下配置如下代码**

~~~
<service android:enabled="true" android:process=":pushservice" android:name="com.xiaomi.push.service.XMPushService"/>
<service android:name="com.xiaomi.push.service.XMJobService" android:enabled="true" android:exported="false" android:permission="android.permission.BIND_JOB_SERVICE" android:process=":pushservice"/>
<service android:enabled="true" android:exported="true" android:name="com.xiaomi.mipush.sdk.PushMessageHandler"/>
<service android:enabled="true" android:name="com.xiaomi.mipush.sdk.MessageHandleService"/>
<receiver android:exported="true" android:name="com.xiaomi.push.service.receivers.NetworkStatusReceiver">
<intent-filter>
<action android:name="android.net.conn.CONNECTIVITY_CHANGE"/>
<category android:name="android.intent.category.DEFAULT"/>
</intent-filter>
</receiver>
<receiver android:exported="false" android:process=":pushservice" android:name="com.xiaomi.push.service.receivers.PingReceiver">
<intent-filter>
<action android:name="com.xiaomi.push.PING_TIMER"/>
</intent-filter>
</receiver>
<receiver android:exported="true" android:name="io.dcloud.feature.apsXm.XMMessageReceiver">
<intent-filter>
<action android:name="com.xiaomi.mipush.RECEIVE_MESSAGE"/>
</intent-filter>
<intent-filter>
<action android:name="com.xiaomi.mipush.MESSAGE_ARRIVED"/>
</intent-filter>
<intent-filter>
<action android:name="com.xiaomi.mipush.ERROR"/>
</intent-filter>
</receiver>
<receiver android:exported="true" android:name="io.dcloud.feature.apsXm.XMNotificationReceiver">
<intent-filter>
<action android:name="android.intent.action.BOOT_COMPLETED"/>
<action android:name="%填写APK的包名%.__CREATE_NOTIFICATION"/>
<action android:name="%填写APK的包名%.__REMOVE_NOTIFICATION"/>
<action android:name="%填写APK的包名%.__CLEAR_NOTIFICATION"/>
<action android:name="%填写APK的包名%.__CLILK_NOTIFICATION"/>
</intent-filter>
</receiver>
<meta-data android:name="PUSH_APPID" android:value="_%小米推送的APPID%"/>
<meta-data android:name="PUSH_APPKEY" android:value="_%小米推送的APPKEY%"/>
~~~
### dcloud_properties.xml需要添加如下代码

**dcloud_properties.xml文件在ADT工程assets/data目录下**

**Features节点下添加**

~~~
<feature name="Push" value="io.dcloud.feature.aps.APSFeatureImpl">
<module name="xiaomi" value="io.dcloud.feature.apsXm.XMPushService"/>
</feature>
~~~

**Service节点下添加**

~~~
<service name="push" value="io.dcloud.feature.aps.APSFeatureImpl"/>
~~~

-->
