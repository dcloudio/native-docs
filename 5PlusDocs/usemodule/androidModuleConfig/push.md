## 个推推送平台配置

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
        <receiver android:name="io.dcloud.feature.apsGt.GTNotificationReceiver">
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