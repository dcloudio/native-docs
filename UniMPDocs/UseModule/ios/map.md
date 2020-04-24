## 概述
uni小程序中目前仅支持高德地图

## 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|libDCUniMap.a、libDCUniAmap.a、DCUniVideoPublic.framework|MapKit.framework、AMapSearchKit.framework、MAMapKit.framework、CoreLocation.framework、AMapFoundationKit.framework、libc++.tbd、GLKit.framework|AMap.bundle、userPosition@2x.png|

注：userPosition@2x.png 为显示带方向的用户位置的图标，可替换为自己的设计

## 账号配置
1.在[高德地图官网](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)申请Appkey

2.在工程的 info.plist 添加 `amap`节点，添加 appkey 信息，如下图
   
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181218/4e630bfdb3d418b8847d82d7d4ada95d.png)
