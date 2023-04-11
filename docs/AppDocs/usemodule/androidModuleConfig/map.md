**开发者需要修改使用的地图插件时，需要修改dcloud_properties.xml文件的features节点下Maps节点value属性的配置，高德地图和百度地图的配置只能保留一个**

## 百度地图 

### 需要拷贝的文件 

** 需要引入工程的jar文件 **

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs |baidu-libs-release.aar，map-baidu-release.aar|

**百度地图暂时不支持 nvue map 标签**

### Androidmainfest.xml文件需要修改的项 

** 需要在application节点前添加权限 **

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

**application节点下配置如下代码**

```
<meta-data android:name="com.baidu.lbsapi.API_KEY" android:value="%appkey_android%"></meta-data>
<service android:name="com.baidu.location.f" android:enabled="true" android:process=":remote"></service>
```

### dcloud_properties.xml文件需要修改的项

dcloud_properties.xml文件在assets/data目录下

features节点下添加: 
```
<feature name="Maps" value="io.dcloud.js.map.JsMapPluginImpl"></feature>
```

services节点下添加:

```
<service name="Maps"   value="io.dcloud.js.map.MapInitImpl" />
```

## 高德地图

### 需要拷贝的文件 

需要将以下aar文件放到工程的libs目录下

| 页面 | 路径 | 文件 | 
| :-------: | :-------: | :-------: |
|nvue页面| SDK\libs | amap-libs-release.aar，weex_amap-release.aar |
|vue页面 | SDK\libs | amap-libs-release.aar，map-amap-release.aar |

**注意事项：**
+ 3.7.6开始不再提供"amap-libs-release.aar"文件。改为gradle集成。"weex_amap-release.aar"或"map-amap-release.aar"需要继续集成到项目中

### 通过gradle集成高德地图SDK

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
	implementation('com.amap.api:3dmap:xxx')
	implementation('com.amap.api:search:xxx')
}
```

**注意事项：**
+ xxx是版本号 版本号通过离线SDK中的demo获取相对应版本
+ 本地集成的高德地图SDK需要删除相关aar文件 否则会导致sdk冲突
+ 高德定位与高德地图SDK集成冲突 需要注意 如果集成地图无须再配置定位

### Androidmainfest.xml文件需要修改的项

需要在application节点前添加权限

```
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"></uses-permission>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"></uses-permission>
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"></uses-permission>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"></uses-permission>
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"></uses-permission>
<uses-permission android:name="android.permission.READ_PHONE_STATE"></uses-permission>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses-permission>
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"></uses-permission>
<uses-permission android:name="android.permission.READ_LOGS"></uses-permission>
<uses-permission android:name="android.permission.WRITE_SETTINGS"/>
```

application节点下配置如下代码:

```
<meta-data android:name="com.amap.api.v2.apikey\" android:value="%appkey_android%\"/>
<service android:name="com.amap.api.location.APSService"></service>
```

**注意事项**

高德地图使用的appkey和打包使用的包名及签名文件存在对应关系，填写时请注意。填写错误会导致地图无法正常使用。

### dcloud_properties.xml文件需要修改的项

**features节点下添加** 

dcloud_properties.xml文件在assets/data目录下 

```
<feature name="Maps" value="io.dcloud.js.map.amap.JsMapPluginImpl"></feature>
```

**高德地图不需要添加services节点**

## 谷歌地图
### 需要拷贝的文件
需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs |weex_google-map-release.aar|

**谷歌地图仅支持 nvue map 标签**

### app目录的build.gradle添加依赖
```
implementation 'com.google.android.gms:play-services-maps:18.0.1'
```

### Androidmainfest.xml文件需要修改的项

需要在application节点前添加权限

```
<uses-permission android:name=android.permission.ACCESS_COARSE_LOCATION />
<uses-permission android:name=android.permission.ACCESS_FINE_LOCATION />
<uses-permission android:name=android.permission.ACCESS_NETWORK_STATE />
<uses-permission android:name=android.permission.INTERNET />
<uses-permission android:name=android.permission.WRITE_EXTERNAL_STORAGE />
<uses-permission android:name=android.permission.ACCESS_LOCATION_EXTRA_COMMANDS />
```

application节点下配置如下代码:

```
 <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="%api_key%" />
```

api_key在[谷歌开发者](https://mapsplatform.google.com/)开通。

**谷歌地图不需要修改dcloud_properties.xml文件**


<!--
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
| SDK\libs | amap-libs-release.aar, geolocation-amap-release.aar |

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

-->