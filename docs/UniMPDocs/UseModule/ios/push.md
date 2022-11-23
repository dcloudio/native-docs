## UniPush 
> DCloud 与 个推官方合作推出的推送功能（对应的Android端sdk支持离线消息）推荐使用
> The push function jointly launched by DCloud and Getui (the corresponding Android sdk supports offline messages) is recommended

### 添加依赖库及资源添
### Add dependencies and resources

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|liblibPush.a、libUniPush.a、liblibNotification.a、GTSDK.framework|CoreTelephony.framework、AVFoundation.framework、CoreLocation.framework、SystemConfiguration.framework、MobileCoreServices.framework、Security.framework、libresolv.tbd、libz.tbd、libsqlite3.tbd、libc++.tbd、UserNotifications.framework|无|
| liblibPush.a、libUniPush.a、liblibNotification.a、GTSDK.framework| CoreTelephony.framework、AVFoundation.framework、CoreLocation.framework、SystemConfiguration.framework、MobileCoreServices.framework、Security.framework、libresolv.tbd、libz.tbd、libsqlite3.tbd、libc++.tbd、UserNotifications.framework|none|

### 账号配置
### Account configuration

1. 在 [UniPush官网](https://dev.dcloud.net.cn/uni/push) 申请App，获取appid 等信息
1. Apply for the App on the [UniPush official website](https://dev.dcloud.net.cn/uni/push) and obtain appid and other information
2. 在工程的 info.plist 中添加 "getui" 字段，并填写如下信息
2. Add the "getui" field in the project's info.plist and fill in the following information

![](https://ask.dcloud.net.cn/uploads/article/20181213/4688577602fe1429ecfa585eaca0c31b.png)

## 个推推送
## push push
> 基于个推官方标准SDK实现
> Implemented based on Getui official standard SDK

### 添加依赖库及资源添
### Add dependencies and resources

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|liblibPush.a、libGeTuiPush.a、liblibNotification.a、GTSDK.framework|CoreTelephony.framework、AVFoundation.framework、CoreLocation.framework、SystemConfiguration.framework、MobileCoreServices.framework、Security.framework、libresolv.tbd、libz.tbd、libsqlite3.tbd、libc++.tbd、UserNotifications.framework|无|
| liblibPush.a、libGeTuiPush.a、liblibNotification.a、GTSDK.framework| CoreTelephony.framework、AVFoundation.framework、CoreLocation.framework、SystemConfiguration.framework、MobileCoreServices.framework、Security.framework、libresolv.tbd、libz.tbd、libsqlite3.tbd、libc++.tbd、UserNotifications.framework|none|

### 账号配置
### Account configuration

1. 在 [个推官网](https://dev.getui.com/) 申请App，获取appid 等信息
1. Apply for the app on [Getui official website](https://dev.getui.com/) and get appid and other information
2. 在工程的 info.plist 中添加 "getui" 字段，并填写如下信息
2. Add the "getui" field in the project's info.plist and fill in the following information

![](https://ask.dcloud.net.cn/uploads/article/20181213/4688577602fe1429ecfa585eaca0c31b.png)