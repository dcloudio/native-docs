## 百度定位
### 将百度定位模块依赖库及资源添加到工程

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libBaiduLocationPlugin.a、libBaiduKeyVerify.a、liblibGeolocation.a、BaiduMapAPI_Utils.framework、BaiduMapAPI_Base.framework、BaiduMapAPI_Search.framework、BaiduMapAPI_Location.framework|libc++.dylib、libsqlite3.0.dylib、SystemConfiguration.framework、Security.framework、CoreLocation.framework|无|

### 帐号配置
1.申请Appkey,如果没有appkey将会导致地图显示不出
 参考[百度地图Appkey申请章节](http://ask.dcloud.net.cn/article/29)

2.打开Info.plist文件找到baidu项，如果没有按图片中的格式添加该项，在下图中的红色区域输入申请的Appkey
注意info.plist中Bundle identifier要和你输入的安全码一致

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/1153.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/2460.png)

### 隐私权限配置
打开Info.plist文件，然后正确添加下方图片中要求的配置

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/geolocation/geolocation.png)

## 高德定位
### 将高德定位模块依赖库及资源添加到工程

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libAMapLocationPlugin.a、liblibGeolocation.a、AMapFoundationKit.framework、AMapLocationKit.framework|libc++.tbd、libz.tbd、ExternalAccessory.framework、GLKit.framework、security.framework、CoreTelephony.framework、SystemConfiguration.framework|无|

### 帐号配置
1.申请Appkey,如果没有appkey将会导致地图显示不出
 参考[高德地图Appkey申请章节](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)

2.打开Info.plist文件找到amap项，如果没有按图片中的格式添加该项，在下图中输入申请的appkey
   
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/28806.png)

### 隐私权限配置
打开Info.plist文件，然后正确添加下方图片中要求的配置

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/geolocation/geolocation.png)
