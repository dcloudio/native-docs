## uniPush

注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)
1. 依次添加下列Linker Flags:  -lUniPush,
   -lGeTuiSdk,
   -llibPush
   s
2. 添加下列framework:"GTSDK.framework",
      "CoreTelephony.framework",
      "AVFoundation.framework",
      "CoreLocation.framework",
      "SystemConfiguration.framework",
      "MobileCoreServices.framework",
      "Security.framework",
      "libresolv.tbd",
      "libz.tbd",
      "libsqlite3.tbd",
      "libc++.tbd",
      "UserNotifications.framework"
	  

3.到uniPush网站申请appkey等信息,查看该[链接](https://dev.dcloud.net.cn/uni/push)
  
4.打开info.plist，找到getui项，填入自己帐号的信息，如果没有该项，按照图中的格式创建
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28612.png)


## 个推推送

注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.依次添加下列Linker Flags: -lGeTuiPush,
   -lGeTuiSdk,
   -llibPush

2.添加下列framework:"GTSDK.framework",
      "CoreTelephony.framework",
      "AVFoundation.framework",
      "CoreLocation.framework",
      "SystemConfiguration.framework",
      "MobileCoreServices.framework",
      "Security.framework",
      "libresolv.tbd",
      "libz.tbd",
      "libsqlite3.tbd",
      "libc++.tbd",
      "UserNotifications.framework"
	  

3.到个推申请appkey等信息,查看该[文档](http://ask.dcloud.net.cn/article/34)
  
4.打开info.plist，找到getui项，填入自己帐号的信息，如果没有该项，按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28612.png)


<!-- 
 ## 小米推送配置
注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)
1. 依次添加下列Linker Flags:-lXiaomiPush,-lMiPushSDK
2. 添加下列framework:libresolv.dylib, libxml2.dylib,libz.dylib,SystemConfiguration.framework,MobileCoreServices.framework,CFNetwork.framework,CoreTelephony.framework,

### 帐号配置
1.首先到小米申请appkey等信息,查看该[文档](http://ask.dcloud.net.cn/article/34)

2.打开info.plist，找到"MiSDKAppID"项，填入自己小米推送帐号的的APPID，如果没有该项，按照图中的格式创建
找到"MiSDKAppKey"项，填入自己小米推送帐号的的appKey，如果没有该项，按照图中的格式创建

3 小米推送调试/发布时需要设置不同的MiSDKRun值 调试证书对应值设置为“debug”，生产证书对应值设置为“online”，可参考[小米推送文档](https://dev.mi.com/console/doc/detail?pId=98#_1_1)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28604.jpeg)

### 申请带APNS功能的profile文件(缺少该项将导致后台收不到推送)
1.创建应用程序ID
登陆iOS Dev Center选择进入iOS Provisioning Portal。
在Certificates，Identifiers &Profiles中，点iOS Apps的任何一项进入
在iOS Provisioning Portal中，点击App IDs进入App ID列表。
创建App ID，如果ID已经存在可以直接跳过此步骤

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28610.png)

为App开启Push Notification功能。如果是已经创建的App ID也可以通过设置开启Push Notification功能。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28609.png)

根据实际情况完善App ID信息并提交,注意此处需要指定具体的Bundle ID不要使用通配符。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28607.png)

2.  重新生成新的profile,下载到本地双击导入，并在Code signing 配置中选择该profile文件

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28605.png)


### 生成APNS证书并上传到个推平台(缺少该项将导致后台收不到推送)
 如果你之前没有创建过Push证书或者是要重新创建一个新的，请在证书列表下面新建。 
新建证书需要注意选择证书种类（开发证书用于开发和调试使用，生产证书用于App Store发布）

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28608.png)

点击Continue后选择证书对应的应用ID，然后继续会出现“About Creating a Certificate Signing Request (CSR)”

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28603.png)


根据它的说明创建Certificate Signing Request。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28611.png)


然后点击Continue ，上传刚刚生成的 .certSigningRequest文件 点”generate”生成APNs Push Certificate。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28606.png)


下载并双击打开证书，证书打开时会启动“钥匙串访问”工具。 
在“钥匙串访问”中你的证书会显示在“我的证书”中，注意选择“My Certificates” 和”login”
导出 .p12证书文件
在“钥匙串访问”中，选择刚刚加进来的证书，选择右键菜单中的“导出“...””。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28602.jpg)

将文件保存为Personal Information Exchange (.p12)格式。
注意：务必选择证书然后再导出。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/push/28613.png)

保存p12文件时，需为其设置密码，上传到个推平台

**UniPush使用指南：http://ask.dcloud.net.cn/article/35622**
 -->
