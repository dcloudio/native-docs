## 百度语音设置
## Baidu voice settings

### 需要拷贝添加的文件
### Need to copy the added files

| 路径 | 文件名 |
| path | filename |
| :-------: | :-------: |
|uniMPSDK\Features\libs|speech-release.aar、speech_baidu-release.aar|

将表格中的文件拷贝至主Module中的libs下。
Copy the files in the table to libs in the main Module.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

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

### 修改dcloud_properties.xml配置
### Modify dcloud_properties.xml configuration

dcloud_properties.xml文件在assets/data目录下 
The dcloud_properties.xml file is in the assets/data directory

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息
Add the following information in dcloud_properties.xml

#### features节点下设置
#### Settings under the features node

```
<feature name="Speech" value="io.dcloud.feature.speech.SpeechFeatureImpl">
    <module name="baidu" value="io.dcloud.feature.speech.BaiduSpeechEngine"/>
</feature>
```