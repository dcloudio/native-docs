## 百度地图

### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|BaiduMapAPI_Utils.framework 、 BaiduMapAPI_Base.framework、 BaiduMapAPI_Search.framework、 BaiduMapAPI_Map.framework、BaiduMapAPI_Location.framework、liblibMap.a、libbmapimp.a、libBaiduKeyVerify.a|libstdc++.tbd、libsqlite3.0.dylib、QuartzCore.framework 、CoreGraphics.framework 、CoreTelephony.framework、SystemConfiguration.framework 、Security.framework、MapKit.framework 、OpenGLES.framework、CoreLocation.framework|mapapi.bundle|

### 账号配置
1、申请Appkey,如果没有appkey将会导致地图显示不出
 参考[百度地图Appkey申请章节](http://ask.dcloud.net.cn/article/29)

2、打开Info.plist文件找到baidu项，如果没有按图片中的格式添加该项，在下图中的红色区域输入申请的Appkey
注意info.plist中Bundle identifier要和你输入的安全码一致

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/1153.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/2460.png)


### 常见问题解决
1.如下图只能看见栅格图可能的原因appkey配置不对、Bundle identifier和安全码不一致、百度地图缓存导致的可以删除app重新安装

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/2461.png)


2.提示appKey校验错误

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/5178.png)

在XCode控制台搜索baidu maponGetPermissionState 查看错误码是多少,对比百度开发平台错误信息


## 高德地图
### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibMap.a、libAMapImp.a|MapKit.framework、AMapSearchKit.framework、MAMapKit.framework、CoreLocation.framework、AMapFoundationKit.framework、libc++.tbd、GLKit.framework|AMap.bundle、userPosition@2x.png|

注：userPosition@2x.png 为显示带方向的用户位置的图标，可替换为自己的设计

### 账号配置
1.在[高德地图官网](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)申请Appkey

2.在工程的 info.plist 添加 `amap`节点，添加 appkey 信息，如下图
   
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181218/4e630bfdb3d418b8847d82d7d4ada95d.png)


### uni项目的nvue页面中使用地图组件，目前只支持高德地图

### 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libDCUniMap.a、libDCUniAmap.a 、DCUniVideoPublic.framework|MapKit.framework、AMapSearchKit.framework、MAMapKit.framework、CoreLocation.framework、AMapFoundationKit.framework、libc++.tbd、GLKit.framework|AMap.bundle、userPosition@2x.png|

注：userPosition@2x.png 为显示带方向的用户位置的图标，可替换为自己的设计

### 账号配置
1.在[高德地图官网](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)申请Appkey

2.在工程的 info.plist 添加 `amap`节点，添加 appkey 信息，如下图
   
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181218/4e630bfdb3d418b8847d82d7d4ada95d.png)


**注意：工程里只能有一个地图，其他的地图功能，要删除info.plist里的key，和对应的库文件,请详细根据Feature-iOS.xml文件的内容配置**
