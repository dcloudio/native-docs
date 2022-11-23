## 概述
## Overview
uni小程序中目前仅支持高德地图
The uni applet currently only supports Gaode map

## 添加依赖资源及文件
## Add dependent resources and files

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|libDCUniMap.a、libDCUniAmap.a、Masonry.framework、AMapSearchKit.framework、MAMapKit.framework、AMapFoundationKit.framework|MapKit.framework、CoreLocation.framework、libc++.tbd、GLKit.framework|AMap.bundle、userPosition@2x.png|

注：userPosition@2x.png 为显示带方向的用户位置的图标，可替换为自己的设计
Note: userPosition@2x.png is an icon showing user position with directions, which can be replaced with your own design

## 账号配置
## Account configuration
1.在[高德地图官网](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)申请Appkey
1. Apply for an Appkey on the [Automap official website](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)

2.在工程的 info.plist 添加 `amap`节点，添加 appkey 信息，如下图
2. Add the `amap` node in the info.plist of the project, and add the appkey information, as shown in the figure below
   
![](https://ask.dcloud.net.cn/uploads/article/20181218/4e630bfdb3d418b8847d82d7d4ada95d.png)

3.在工程的 info.plist 添加 `NSLocationAlwaysAndWhenInUseUsageDescription` 和 `NSLocationWhenInUseUsageDescription` key，并填写获取权限描述信息
3. Add `NSLocationAlwaysAndWhenInUseUsageDescription` and `NSLocationWhenInUseUsageDescription` keys in the info.plist of the project, and fill in the permission description information

![](https://img.cdn.aliyun.dcloud.net.cn/client/doc/ios/locationDes.png)