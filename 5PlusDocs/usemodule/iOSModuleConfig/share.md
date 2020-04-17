目前分享插件支持新浪微博分享、QQ分享、腾讯微博分享、微信分享

分享插件首先需要到各开放平台申请帐号,申请查看该[文档](http://ask.dcloud.net.cn/article/36)

## 新浪微博分享配置
注: Linker Flags、framework等添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.添加以下Linker Flags: -llibShare、-lSinaShare、-lWeiboSDK

2.添加以下framwork:  QuartzCore.framework、ImageIO.framework、SystemConfiguration.framework、Security.framwork、CoreTelephny。framwork、CoreText.framework、libz.dylib、libsqlite3.dylib

3.添加下列文件:WeiboSDK.bundle

4.打开info.plist，找到sinweibo项，填入自己帐号的信息，如果没有该项，按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/1161.png)


5.找到URL types ，打开URL identifier为com.weibo的项目，修改item0值为wb[这个是你的appkey] ,如果没有该项按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/1162.png)

6.iOS9.0以上版本需要在info.plist增加以下配置

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/4827.png)


## QQ分享配置
注: Linker Flags、framework等添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.添加以下Linker Flags: -llibShare、-lQQShare

2.添加以下framwork:  TencentOpenAPI.framework

3.添加下列文件: TencentOpenApi_IOS_Bundle.bundle

4.找到URL types,打开URL identifier为tencentopenapi的项目， 修改item0值为tencent[这个是你的appId] ,如果没有该项按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/2363.png)

5.iOS9.0以上版本需要在info.plist增加以下配置

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/3728.png)

## 微信分享配置

注: Linker Flags、framework等添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.添加以下Linker Flags: -llibShare、 -lweixinShare、-lWeChatSDK

2.添加以下framwork: Social.framework、Accounts.framework

3.找到URL types ,打开URL identifier为weixin的项目，修改item0值为wx[这个是你的appid] ,如果没有该项按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/1165.png)

4.iOS9.0以上版本需要在info.plist增加以下配置

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/45099.png)

<a id="ulink"/>

5.HBuilderX2.3.4+ 版本需要配置 Universal Link在info.plist root 节点添加UniversalLinks项，值和微信开放平台配置的一致，参考如下：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/42488.png)

查看工程里的AppDelegate.m文件里是否有下面的方法：

> //@Summary:通用链接
-(BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void(^)(NSArray<id<UIUserActivityRestoring>> * __nullable restorableObjects))restorationHandler {
    [PDRCore handleSysEvent:PDRCoreSysEventContinueUserActivity withObject:userActivity];
    restorationHandler(nil);
    return YES;
}

<!-- ### 腾讯微博分享分享插件配置
1.添加以下Linker Flags: -llibShare、-lTCWeiboSDK

2.找到URL types ，打开URL identifier为com.tencent的项目，修改item0值为wb[这个是你的appkey] ,如果没有该项按照图中的格式创建

3.打开info.plist，找到tencentweibo项，填入自己帐号的信息，如果没有该项，按照图中的格式创建
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/3730.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/3731.png)

4.iOS9.0以上版本需要在info.plist增加以下配置
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/3729.png) -->
