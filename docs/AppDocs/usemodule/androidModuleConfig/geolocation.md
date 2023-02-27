> **离线打包地图模块与定位模块可以分别配置，不需要单独依赖地图模块。**

## 百度定位

### 需要拷贝的文件

**需要引入工程的jar/aar文件**

需要将以下jar/aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | baidu-libs-release.aar, geolocation-baidu-release.aar|

**application节点下配置如下代码**

```
<meta-data android:name="com.baidu.lbsapi.API_KEY" android:value="%appkey_android%"></meta-data>
<service android:name="com.baidu.location.f" android:enabled="true" android:process=":remote"></service>
```

## 高德定位

### 需要拷贝的文件

**需要引入工程的jar/aar文件**

需要将以下jar/aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | AMap_Location_XXX.jar（XXX为版本号）, geolocation-amap-release.aar |

**注意：**
+ 3.7.6开始不再提供"amap-libs-release.aar"或"AMap_Location_XXX.jar"文件 改为gradle集成！geolocation-amap-release.aar还需要继续添加到项目中
+ 3.3.6及以下版本要使用amap-libs-release.aar代替AMap_Location_XXX.jar ，当3.6.9及以上，与高德地图同时使用时，由于高德地图使用的jar已经包含了定位相关类库，所以不要导入AMap_Location_XXX.jar。

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
+ 本地集成的高德定位SDK需要删除相关jar或aar文件 否则会导致sdk冲突
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

## 系统定位

### 需要拷贝的文件

**最新SDK使用系统定位已不需要引入任何文件**

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
```