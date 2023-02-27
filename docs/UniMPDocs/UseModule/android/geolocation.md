## 高德定位

### 需要拷贝添加的文件

| 路径 | 文件 | 
| :-------: | :-------: |
| uniMPSDK\Features\libs | amap-libs-release.aar, geolocation-amap-release.aar |

**注意事项：**
+ 3.7.6开始不再提供"amap-libs-release.aar"文件 改为gradle集成！geolocation-amap-release.aar还需要继续添加到项目中

将表格中的文件拷贝至主Module中的libs下。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

### 通过gradle集成高德定位SDK

在主工程的build.gradle文件配置dependencies

```
android {
	xxxxxxxx
	defaultConfig {
		xxxxxxxx
	}
}
dependencies {
	xxxxxxxx
	implementation('com.amap.api:location:xxx')
}
```

**注意事项：**
+ xxx是版本号 版本号通过离线SDK中的demo获取相对应版本
+ 本地集成的高德定位SDK需要删除相关aar文件 否则会导致sdk冲突（geolocation-amap-release.aar需要继续集成）
+ 高德定位与高德地图SDK集成冲突 需要注意 如果集成地图无须再配置定位

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

```
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
<uses-permission android:name="android.permission.READ_LOGS"/>
<uses-permission android:name="android.permission.WRITE_SETTINGS"/>
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>
<uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
```

**application节点下配置如下代码**

```
<meta-data android:name="com.amap.api.v2.apikey" android:value=\"%用户申请的APPkey%\"></meta-data>
<service android:name="com.amap.api.location.APSService"></service>
```
