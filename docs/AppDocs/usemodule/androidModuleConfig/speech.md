## 百度语音
## Baidu Voice

### 需要添加的文件
### Files that need to be added

将以下文件放入工程的libs下
Put the following files into the libs of the project

| 路径 | 文件名 |
| path | filename |
| :-------: | :-------: |
|SDK\libs|speech-release.aar、speech_baidu-release.aar|

### AndroidManifest.xml配置
### AndroidManifest.xml configuration

#### 权限配置
#### Rights Profile

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
#### application node configuration

```
		<meta-data android:name="com.baidu.speech.APP_ID" android:value="${百度语音申请的appid}"/>
        <meta-data android:name="com.baidu.speech.API_KEY" android:value="${百度语音申请的apikey}"/>
        <meta-data android:name="com.baidu.speech.SECRET_KEY" android:value="${百度语音申请的secretkey}"/>
        <service android:name="com.baidu.speech.VoiceRecognitionService" android:exported="false" />
```

### dcloud_properties.xml配置
### dcloud_properties.xml configuration

**dcloud_properties.xml文件在assets/data目录下**
**The dcloud_properties.xml file is in the assets/data directory**

#### features节点下设置
#### Settings under the features node

```
		<feature name="Speech" value="io.dcloud.feature.speech.SpeechFeatureImpl">
            <module name="baidu" value="io.dcloud.feature.speech.BaiduSpeechEngine"/>
		</feature>
```


## 讯飞语音
## Xunfei voice

### 需要添加的文件
### Files that need to be added

将以下文件放入工程的libs下
Put the following files into the libs of the project

| 路径 | 文件名 |
| path | filename |
| :-------: | :-------: |
|SDK\libs|speech-release.aar、speech_ifly-release.aar|

### AndroidManifest.xml配置
### AndroidManifest.xml configuration

#### 权限配置
#### Rights Profile

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
#### application node configuration

```
		<meta-data
            android:name="IFLY_APPKEY"
            android:value="${讯飞语音申请的appid}" />
```

### dcloud_properties.xml配置
### dcloud_properties.xml configuration

**dcloud_properties.xml文件在assets/data目录下**
**The dcloud_properties.xml file is in the assets/data directory**

#### features节点下设置
#### Settings under the features node

```
		<feature name="Speech" value="io.dcloud.feature.speech.SpeechFeatureImpl">
			<module name="iFly" value="io.dcloud.feature.speech.IflySpeechEngine"/>
		</feature>
```