### 需要拷贝添加的文件

| 路径 | 文件名 |
| :-------: | :-------: |
|uniMPSDK\Features\libs|alipayutdid.jar、statistics-umeng-release.aar|

将表格中的文件拷贝至主Module中的libs下。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

### AndroidManifest.xml配置

#### 权限配置

```
<uses-permission android:name="android.permission.READ_LOGS"/>
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
<uses-permission android:name="android.permission.RECEIVE_USER_PRESENT"/>
```

#### application节点配置

```
<meta-data android:value="%appkey_android%" android:name="UMENG_APPKEY"/>
<meta-data android:value="%channelid_android%" android:name="UMENG_CHANNEL"/>
```

### 修改dcloud_properties.xml配置

dcloud_properties.xml文件在assets/data目录下 

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息

#### features节点下设置

```
<feature name="Statistic" value="io.dcloud.feature.statistics.StatisticsFeatureImpl"></feature>
```

#### services节点下设置

```
<service name="Statistic" value="io.dcloud.feature.statistics.StatisticsBootImpl"/>
```