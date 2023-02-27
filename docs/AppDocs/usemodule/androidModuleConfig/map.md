**开发者需要修改使用的地图插件时，需要修改dcloud_properties.xml文件的features节点下Maps节点value属性的配置，高德地图和百度地图的配置只能保留一个**
**When the developer needs to modify the map plug-in used, he needs to modify the configuration of the value attribute of the Maps node under the features node of the dcloud_properties.xml file. Only one configuration of Gaode Map and Baidu Map can be reserved**

## 百度地图 
## Baidu map 

### 需要拷贝的文件 
### Files to copy

** 需要引入工程的jar文件 **
** Need to import the jar file of the project **

需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs |baidu-libs-release.aar，map-baidu-release.aar|

百度地图暂时不支持 nvue map 标签
Baidu map temporarily does not support nvue map tag

### Androidmainfest.xml文件需要修改的项 
### Items that need to be modified in the Androidmainfest.xml file

** 需要在application节点前添加权限 **
** Need to add permissions before the application node **

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
**The following code is configured under the application node**

```
<meta-data android:name="com.baidu.lbsapi.API_KEY" android:value="%appkey_android%"></meta-data>
<service android:name="com.baidu.location.f" android:enabled="true" android:process=":remote"></service>
```

### dcloud_properties.xml文件需要修改的项
### Items that need to be modified in the dcloud_properties.xml file

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

features节点下添加: 
Add under the features node:
```
<feature name="Maps" value="io.dcloud.js.map.JsMapPluginImpl"></feature>
```

services节点下添加:
Add under the services node:

```
<service name="Maps"   value="io.dcloud.js.map.MapInitImpl" />
```

## 高德地图
## Gaode map

### 需要拷贝的文件 
### Files to copy

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 页面 | 路径 | 文件 | 
| page | path | file |
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
### Items that need to be modified in the Androidmainfest.xml file

需要在application节点前添加权限
You need to add permissions before the application node

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
Configure the following code under the application node:

```
<meta-data android:name="com.amap.api.v2.apikey\" android:value="%appkey_android%\"/>
<service android:name="com.amap.api.location.APSService"></service>
```

**注意事项**
**Precautions**

高德地图使用的appkey和打包使用的包名及签名文件存在对应关系，填写时请注意。填写错误会导致地图无法正常使用。
There is a corresponding relationship between the appkey used by AutoNavi and the package name and signature file used for packaging. Please pay attention when filling in. Filling in errors will cause the map to not work properly.

### dcloud_properties.xml文件需要修改的项
### Items that need to be modified in the dcloud_properties.xml file

**features节点下添加** 
**Add under the features node**

dcloud_properties.xml文件在assets/data目录下 
The dcloud_properties.xml file is in the assets/data directory

```
<feature name="Maps" value="io.dcloud.js.map.amap.JsMapPluginImpl"></feature>
```


## 谷歌地图
## Google Map
### 需要拷贝的文件
### Files to copy
需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs |weex_google-map-release.aar|


### app目录的build.gradle添加依赖
### Add dependencies to build.gradle in the app directory
```
implementation 'com.google.android.gms:play-services-maps:18.0.1'
```

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

需要在application节点前添加权限
You need to add permissions before the application node

```
<uses-permission android:name=android.permission.ACCESS_COARSE_LOCATION />
<uses-permission android:name=android.permission.ACCESS_FINE_LOCATION />
<uses-permission android:name=android.permission.ACCESS_NETWORK_STATE />
<uses-permission android:name=android.permission.INTERNET />
<uses-permission android:name=android.permission.WRITE_EXTERNAL_STORAGE />
<uses-permission android:name=android.permission.ACCESS_LOCATION_EXTRA_COMMANDS />
```

application节点下配置如下代码:
Configure the following code under the application node:

```
 <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="%api_key%" />
```

api_key在[谷歌开发者](https://mapsplatform.google.com/)开通。
The api_key is activated in [Google Developers](https://mapsplatform.google.com/).





<!--
## 百度定位
## Baidu positioning

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar/aar文件**
**The jar/aar file of the project needs to be imported**

需要将以下jar/aar文件放到工程的libs目录下
The following jar/aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | baidu-libs-release.aar, geolocation-baidu-release.aar|

**application节点下配置如下代码**
**The following code is configured under the application node**

```
<meta-data android:name="com.baidu.lbsapi.API_KEY" android:value="%appkey_android%"></meta-data>
<service android:name="com.baidu.location.f" android:enabled="true" android:process=":remote"></service>
```

## 高德定位
## AutoNavi Positioning

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar/aar文件**
**The jar/aar file of the project needs to be imported**

需要将以下jar/aar文件放到工程的libs目录下
The following jar/aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | amap-libs-release.aar, geolocation-amap-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

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
**The following code is configured under the application node**

```
<meta-data android:name="com.amap.api.v2.apikey" android:value=\"%用户申请的APPkey%\"></meta-data>
<service android:name="com.amap.api.location.APSService"></service>
```

## 系统定位
## System positioning

### 需要拷贝的文件
### Files to copy

**最新SDK使用系统定位已不需要引入任何文件**
**The latest SDK uses system positioning and does not need to import any files**

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

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