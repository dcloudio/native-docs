## UniPush 
> DCloud 与 个推官方合作推出的推送功能（对应的Android端sdk支持离线消息）推荐使用

### 添加依赖库及资源添

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibPush.a、libUniPush.a、liblibNotification.a、GTSDK.framework|CoreTelephony.framework、AVFoundation.framework、CoreLocation.framework、SystemConfiguration.framework、MobileCoreServices.framework、Security.framework、libresolv.tbd、libz.tbd、libsqlite3.tbd、libc++.tbd、UserNotifications.framework|无|

### 账号配置

1. 在 [UniPush官网](https://dev.dcloud.net.cn/uni/push) 申请App，获取appid 等信息
2. 在工程的 info.plist 中添加 "getui" 字段，并填写如下信息

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181213/4688577602fe1429ecfa585eaca0c31b.png)

## 个推推送
> 基于个推官方标准SDK实现

### 添加依赖库及资源添

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibPush.a、libGeTuiPush.a、liblibNotification.a、GTSDK.framework|CoreTelephony.framework、AVFoundation.framework、CoreLocation.framework、SystemConfiguration.framework、MobileCoreServices.framework、Security.framework、libresolv.tbd、libz.tbd、libsqlite3.tbd、libc++.tbd、UserNotifications.framework|无|

### 账号配置

1. 在 [个推官网](https://dev.getui.com/) 申请App，获取appid 等信息
2. 在工程的 info.plist 中添加 "getui" 字段，并填写如下信息

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181213/4688577602fe1429ecfa585eaca0c31b.png)