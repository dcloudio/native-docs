## 百度定位
## Baidu positioning
### 将百度定位模块依赖库及资源添加到工程
### Add Baidu positioning module dependent libraries and resources to the project

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|libBaiduLocationPlugin.a、libBaiduKeyVerify.a、liblibGeolocation.a、libssl.a、libcrypto.a、BaiduMapAPI_Utils.framework、BaiduMapAPI_Base.framework、BaiduMapAPI_Search.framework、BMKLocationKit.framework|libc++.tbd、libsqlite3.0.tbd、SystemConfiguration.framework、Security.framework、CoreLocation.framework、CoreTelephony.framework|无|
| libBaiduLocationPlugin.a、libBaiduKeyVerify.a、liblibGeolocation.a、libssl.a、libcrypto.a、BaiduMapAPI_Utils.framework、BaiduMapAPI_Base.framework、BaiduMapAPI_Search.framework、BMKLocationKit.framework| libc++.tbd、libsqlite3.0.tbd、SystemConfiguration.framework、Security.framework、CoreLocation.framework、CoreTelephony.framework|none|

### 帐号配置
### Account Configuration
1. 申请Appkey,如果没有appkey将会导致地图显示不出
1. Apply for Appkey, if there is no appkey, the map will not be displayed
 参考[百度地图Appkey申请章节](http://ask.dcloud.net.cn/article/29)
 Refer to [Baidu Map Appkey Application Chapter](http://ask.dcloud.net.cn/article/29)

2. 打开Info.plist文件找到baidu项，如果没有按图片中的格式添加该项，在下图中的红色区域输入申请的Appkey
2. Open the Info.plist file and find the baidu item. If the item is not added according to the format in the picture, enter the applied Appkey in the red area in the figure below
注意info.plist中Bundle identifier要和你输入的安全码一致
Note that the Bundle identifier in info.plist must be consistent with the security code you entered

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/1153.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/2460.png)

### 隐私权限配置
### Privacy permission configuration
打开Info.plist文件，然后正确添加下方图片中要求的配置
Open the Info.plist file, and then correctly add the configuration required in the picture below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/geolocation/geolocation.png)

## 高德定位
## AutoNavi Positioning
### 将高德定位模块依赖库及资源添加到工程
### Add the Gaode positioning module dependent library and resources to the project

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|libAMapLocationPlugin.a、liblibGeolocation.a、AMapFoundationKit.framework、AMapLocationKit.framework|libc++.tbd、libz.tbd、ExternalAccessory.framework、GLKit.framework、security.framework、CoreTelephony.framework、SystemConfiguration.framework|无|
| libAMapLocationPlugin.a、liblibGeolocation.a、AMapFoundationKit.framework、AMapLocationKit.framework| libc++.tbd、libz.tbd、ExternalAccessory.framework、GLKit.framework、security.framework、CoreTelephony.framework、SystemConfiguration.framework|none|

### 帐号配置
### Account Configuration
1. 申请Appkey,如果没有appkey将会导致地图显示不出
1. Apply for Appkey, if there is no appkey, the map will not be displayed
 参考[高德地图Appkey申请章节](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)
 Refer to [Amap Appkey Application Chapter](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)

2. 打开Info.plist文件找到amap项，如果没有按图片中的格式添加该项，在下图中输入申请的appkey
2. Open the Info.plist file and find the amap item. If the item is not added according to the format in the picture, enter the applied appkey in the figure below
   
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/28806.png)

### 隐私权限配置
### Privacy permission configuration
打开Info.plist文件，然后正确添加下方图片中要求的配置
Open the Info.plist file, and then correctly add the configuration required in the picture below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/geolocation/geolocation.png)

## 系统定位
## System positioning
### 将系统定位模块依赖库及资源添加到工程
### Add system positioning module dependent libraries and resources to the project

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|liblibGeolocation.a|Foundation.framework、CoreLocation.framework|无|
| liblibGeolocation.a| Foundation.framework、CoreLocation.framework|none|

### 隐私权限配置
### Privacy permission configuration
打开Info.plist文件，然后正确添加下方图片中要求的配置
Open the Info.plist file, and then correctly add the configuration required in the picture below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/geolocation/geolocation.png)