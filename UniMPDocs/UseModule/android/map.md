## 高德地图

uni小程序中目前仅支持高德地图

### 需要拷贝的文件 

需要将以下aar文件放到工程的libs目录下

| 页面 | 路径 | 文件 | 
| :-------: | :-------: | :-------: |
|nvue页面| SDK\libs | AMap3DMap_XXX_AMapSearch_XXX.jar(XXX为版本号)，AMap_Location_XXX.jar，weex_amap-release.aar |
|vue页面 | SDK\libs | AMap3DMap_XXX_AMapSearch_XXX.jar(XXX为版本号)，AMap_Location_XXX.jar，map-amap-release.aar |

**注意：3.3.6及以下版本需要使用amap-libs-release.aar代替AMap3DMap_XXX_AMapSearch_XXX.jar(XXX为版本号)，AMap_Location_XXX.jar**

将表格中的文件拷贝至主Module中的libs下。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

### Androidmainfest.xml文件需要修改的项

需要在application节点前添加权限

~~~
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
~~~

application节点下配置如下代码:

~~~
<meta-data android:name="com.amap.api.v2.apikey\" android:value="%appkey_android%\"/>
<service android:name="com.amap.api.location.APSService"></service>
~~~

**注意事项**

高德地图使用的appkey和打包使用的包名及签名文件存在对应关系，填写时请注意。填写错误会导致地图无法正常使用。

### 修改dcloud_properties.xml配置

dcloud_properties.xml文件在assets/data目录下 

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息

#### features节点下添加

```
<feature name="Maps" value="io.dcloud.js.map.amap.JsMapPluginImpl"></feature>
```



## 高德地图Google Play专版

### 需要拷贝添加的文件

| 路径 | 文件 | 
| :-------: | :-------: |
| uniMPSDK\Features\libs | amap-gp-libs-release.aar，map-amap-release.aar |

将表格中的文件拷贝至主Module中的libs下。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

### Androidmainfest.xml文件需要修改的项

需要在application节点前添加权限

~~~
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
~~~

application节点下配置如下代码:

~~~
<meta-data android:name="com.amap.api.v2.apikey\" android:value="%appkey_android%\">
<service android:name="com.amap.api.location.APSService"></service>
~~~

**注意事项**

高德地图使用的appkey和打包使用的包名及签名文件存在对应关系，填写时请注意。填写错误会导致地图无法正常使用。

### 修改dcloud_properties.xml配置

dcloud_properties.xml文件在assets/data目录下 

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息

#### features节点下添加

~~~
<feature name="Maps" value="io.dcloud.js.map.amap.JsMapPluginImpl"></feature>
~~~
