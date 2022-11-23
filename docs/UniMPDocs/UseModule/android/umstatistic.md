### 需要拷贝添加的文件
### Need to copy the added files

| 路径 | 文件名 |
| path | filename |
| :-------: | :-------: |
|uniMPSDK\Features\libs|umeng-abtest-v1.0.0.aar, alipayutdid.jar、statistics-umeng-release.aar|

将表格中的文件拷贝至主Module中的libs下。
Copy the files in the table to libs in the main Module.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

### AndroidManifest.xml配置
### AndroidManifest.xml configuration

#### 权限配置
#### Rights Profile

```
<uses-permission android:name="android.permission.READ_LOGS"/>
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
<uses-permission android:name="android.permission.RECEIVE_USER_PRESENT"/>
```

#### application节点配置
#### application node configuration

```
<meta-data android:value="%appkey_android%" android:name="UMENG_APPKEY"/>
<meta-data android:value="%channelid_android%" android:name="UMENG_CHANNEL"/>
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
<feature name="Statistic" value="io.dcloud.feature.statistics.StatisticsFeatureImpl"></feature>
```

#### services节点下设置
#### Settings under the services node

```
<service name="Statistic" value="io.dcloud.feature.statistics.StatisticsBootImpl"/>
```