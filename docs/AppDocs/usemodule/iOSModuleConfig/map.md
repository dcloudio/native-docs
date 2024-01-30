## 百度地图 (仅vue页面支持)

### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|BaiduMapAPI_Utils.framework 、 BaiduMapAPI_Base.framework、 BaiduMapAPI_Search.framework、 BaiduMapAPI_Map.framework、BMKLocationKit.framework、liblibMap.a、libbmapimp.a、libBaiduKeyVerify.a、libssl.a、libcrypto.a|libc++.tbd、libsqlite3.0.tbd、libz.tbd、QuartzCore.framework 、CoreGraphics.framework 、CoreTelephony.framework、Accelerate.framework、SystemConfiguration.framework 、Security.framework、MapKit.framework 、OpenGLES.framework、CoreLocation.framework|mapapi.bundle|

### 账号配置
### Account configuration
1、申请Appkey,如果没有appkey将会导致地图显示不出
1、 Apply for Appkey, if there is no appkey, the map will not be displayed
 参考[百度地图Appkey申请章节](http://ask.dcloud.net.cn/article/29)
 Refer to [Baidu Map Appkey Application Chapter](http://ask.dcloud.net.cn/article/29)

2、打开Info.plist文件找到baidu项，如果没有按图片中的格式添加该项，在下图中的红色区域输入申请的Appkey
2、 Open the Info.plist file and find the baidu item. If the item is not added according to the format in the picture, enter the applied Appkey in the red area in the figure below
注意info.plist中Bundle identifier要和你输入的安全码一致
Note that the Bundle identifier in info.plist must be consistent with the security code you entered

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/1153.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/2460.png)

3. 在工程的 info.plist 添加 `NSLocationAlwaysAndWhenInUseUsageDescription` 和 `NSLocationWhenInUseUsageDescription` key，并填写获取权限描述信息
3. Add `NSLocationAlwaysAndWhenInUseUsageDescription` and `NSLocationWhenInUseUsageDescription` keys in the info.plist of the project, and fill in the permission description information

![](https://img.cdn.aliyun.dcloud.net.cn/client/doc/ios/locationDes.png)

### 常见问题解决
### FAQ
1. 如下图只能看见栅格图可能的原因appkey配置不对、Bundle identifier和安全码不一致、百度地图缓存导致的可以删除app重新安装
1. Only the grid image can be seen in the following picture. The possible reasons are that the appkey configuration is incorrect, the bundle identifier and security code are inconsistent, and the Baidu map cache can cause the app to be deleted and reinstalled.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/2461.png)


2. 提示appKey校验错误
2. Prompt appKey verification error

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/5178.png)

在XCode控制台搜索 `baidu maponGetPermissionState` 查看错误码是多少,对比百度开发平台错误信息


## 高德地图 (仅nvue页面支持)
### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|liblibMap.a、libAMapImp.a|MapKit.framework、AMapSearchKit.framework、MAMapKit.framework、CoreLocation.framework、AMapFoundationKit.framework、libc++.tbd、GLKit.framework|AMap.bundle、userPosition@2x.png|

注：userPosition@2x.png 为显示带方向的用户位置的图标，可替换为自己的设计
Note: userPosition@2x.png is an icon showing user position with directions, which can be replaced with your own design

### 账号配置
### Account configuration
1. 在[高德地图官网](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)申请Appkey
1. Apply for an Appkey on the [Automap official website](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)

2. 在工程的 info.plist 添加 `amap`节点，添加 appkey 信息，如下图
2. Add the `amap` node in the info.plist of the project, and add the appkey information, as shown in the figure below
   
![](https://ask.dcloud.net.cn/uploads/article/20181218/4e630bfdb3d418b8847d82d7d4ada95d.png)

3. 在工程的 info.plist 添加 `NSLocationAlwaysAndWhenInUseUsageDescription` 和 `NSLocationWhenInUseUsageDescription` key，并填写获取权限描述信息
3. Add `NSLocationAlwaysAndWhenInUseUsageDescription` and `NSLocationWhenInUseUsageDescription` keys in the info.plist of the project, and fill in the permission description information

![](https://img.cdn.aliyun.dcloud.net.cn/client/doc/ios/locationDes.png)

### uni项目的nvue页面中使用地图组件，目前只支持高德地图
### The map component is used in the nvue page of the uni project, currently only supports Gaode map

### 添加依赖资源及文件
### Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|libDCUniMap.a、libDCUniAmap.a 、Masonry.framework、AMapSearchKit.framework、MAMapKit.framework、AMapFoundationKit.framework|MapKit.framework、CoreLocation.framework、libc++.tbd、GLKit.framework|AMap.bundle、userPosition@2x.png|

注：userPosition@2x.png 为显示带方向的用户位置的图标，可替换为自己的设计
Note: userPosition@2x.png is an icon showing user position with directions, which can be replaced with your own design

### 账号配置
### Account configuration
1. 在[高德地图官网](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)申请Appkey
1. Apply for an Appkey on the [Automap official website](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)

2. 在工程的 info.plist 添加 `amap`节点，添加 appkey 信息，如下图
2. Add the `amap` node in the info.plist of the project, and add the appkey information, as shown in the figure below
   
![](https://ask.dcloud.net.cn/uploads/article/20181218/4e630bfdb3d418b8847d82d7d4ada95d.png)

3. 在工程的 info.plist 添加 `NSLocationAlwaysAndWhenInUseUsageDescription` 和 `NSLocationWhenInUseUsageDescription` key，并填写获取权限描述信息
3. Add `NSLocationAlwaysAndWhenInUseUsageDescription` and `NSLocationWhenInUseUsageDescription` keys in the info.plist of the project, and fill in the permission description information

![](https://img.cdn.aliyun.dcloud.net.cn/client/doc/ios/locationDes.png)

**注意：工程里只能有一个地图，其他的地图功能，要删除info.plist里的key，和对应的库文件，请根据 [功能模块与依赖关系对照表](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/common?id=%e5%a6%82%e4%bd%95%e9%85%8d%e7%bd%ae%e6%a8%a1%e5%9d%97%e4%b8%89%e6%96%b9sdk) 配置**
**Note: There can only be one map in the project. For other map functions, to delete the key in info.plist and the corresponding library file, please refer to the [Functional Modules and Dependency Comparison Table](https://nativesupport. dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/common?id=%e5%a6%82%e4%bd%95%e9%85%8d%e7%bd%ae%e6%a8%a1%e5%9d %97%e4%b8%89%e6%96%b9sdk) Configuration**


## 谷歌地图
## Google Map

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|libDCUniMap.a 、 libDCUniGoogleMap.a、 GoogleMapsBase.framework、 GoogleMaps.framework、GoogleMapsCore.framework、liblibMap.a|Accelerate.framework、CoreData.framework、CoreGraphics.framework 、 CoreImage.framework 、 CoreLocation.framework 、 CoreTelephony.framework 、 CoreText.framework 、 GLKit.framework 、 ImageIO.framework 、 libc++.tbd 、 libz.tbd 、 Metal.framework 、 OpenGLES.framework 、  QuartzCore.framework 、 SystemConfiguration.framework |GoogleMaps.bundle|


### 账号配置
### Account configuration
1. 在[谷歌地图官网](https://developers.google.com/maps)申请APIKey
1. Apply for APIKey on [Google Maps official website](https://developers.google.com/maps)

2. 在工程的 info.plist 添加 `googleMap`节点，添加 APIKey 信息
2. Add the `googleMap` node to the info.plist of the project, and add the APIKey information
   
3. 在工程的 info.plist 添加 `NSLocationAlwaysAndWhenInUseUsageDescription` 和 `NSLocationWhenInUseUsageDescription` key，并填写获取权限描述信息
3. Add `NSLocationAlwaysAndWhenInUseUsageDescription` and `NSLocationWhenInUseUsageDescription` keys in the info.plist of the project, and fill in the permission description information

![](https://img.cdn.aliyun.dcloud.net.cn/client/doc/ios/locationDes.png)

