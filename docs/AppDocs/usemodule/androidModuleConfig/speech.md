## 百度语音

### 需要添加的文件

将以下文件放入工程的libs下

| 路径 | 文件名 |
| :-------: | :-------: |
|SDK\libs|speech-release.aar、speech_baidu-release.aar|

### AndroidManifest.xml配置

#### 权限配置

```
	<uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission  android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

#### application节点配置

```
		<meta-data android:name="com.baidu.speech.APP_ID" android:value="${百度语音申请的appid}"/>
        <meta-data android:name="com.baidu.speech.API_KEY" android:value="${百度语音申请的apikey}"/>
        <meta-data android:name="com.baidu.speech.SECRET_KEY" android:value="${百度语音申请的secretkey}"/>
        <service android:name="com.baidu.speech.VoiceRecognitionService" android:exported="false" />
```

### dcloud_properties.xml配置

**dcloud_properties.xml文件在assets/data目录下**

#### features节点下设置

```
		<feature name="Speech" value="io.dcloud.feature.speech.SpeechFeatureImpl">
            <module name="baidu" value="io.dcloud.feature.speech.BaiduSpeechEngine"/>
		</feature>
```


## 讯飞语音

### 需要添加的文件

将以下文件放入工程的libs下

| 路径 | 文件名 |
| :-------: | :-------: |
|SDK\libs|speech-release.aar、speech_ifly-release.aar|

### AndroidManifest.xml配置

#### 权限配置

```
	<uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

#### application节点配置

```
		<meta-data
            android:name="IFLY_APPKEY"
            android:value="${讯飞语音申请的appid}" />
```

### dcloud_properties.xml配置

**dcloud_properties.xml文件在assets/data目录下**

#### features节点下设置

```
		<feature name="Speech" value="io.dcloud.feature.speech.SpeechFeatureImpl">
			<module name="iFly" value="io.dcloud.feature.speech.IflySpeechEngine"/>
		</feature>
```