> **离线打包地图模块与定位模块可以分别配置，不需要单独依赖地图模块。**
> **The offline packaged map module and the positioning module can be configured separately, and there is no need to rely on the map module alone. **

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
| SDK\libs | AMap_Location_XXX.jar（XXX为版本号）, geolocation-amap-release.aar |
| SDK\libs | AMap_Location_XXX.jar (XXX is the version number), geolocation-amap-release.aar |

**注意：3.3.6及以下版本要使用amap-libs-release.aar代替AMap_Location_XXX.jar ，**
**Note: For versions 3.3.6 and below, use amap-libs-release.aar instead of AMap_Location_XXX.jar,**
**当3.6.9及以上，与高德地图同时使用时，由于高德地图使用的jar已经包含了定位相关类库，所以不要导入AMap_Location_XXX.jar。**
**When 3.6.9 and above are used together with AutoNavi, do not import AMap_Location_XXX.jar since the jar used by AutoNavi already contains location-related libraries. **

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
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>
<uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
```

**application节点下配置如下代码**
**The following code is configured under the application node**

```
<meta-data android:name="com.amap.api.v2.apikey" android:value=\"%用户申请的APPkey%\"></meta-data>
<service android:name="com.amap.api.location.APSService"></service>
```

## 系统定位
## System location

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