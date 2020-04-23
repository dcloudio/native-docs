目前登录支持新浪微博登录、QQ登录、微信登录，登录功能首先需要到各开放平台申请帐号,参考[文档](http://ask.dcloud.net.cn/article/36)

## 微信登录

1.添加以下Linker Flags: -llibOauth、 -lWXOauth、-lWeChatSDK

2.添加以下framwork: Social.framework、Accounts.framework

3.找到URL types ,打开URL identifier为weixin的项目，修改item0值为wx[这个是你的appid] ,这个应该和下步weixinaouth中appid一致,如果没有该项按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)

4.打开info.plist，找到weixinoauth项，填入自己帐号的信息，如果没有该项，按照图中的格式创建


![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)

5.iOS9.0以上版本需要在info.plist增加以下配置

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)


6.UIApplicationDelegate实现类中增加下列实现

```javascript
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
   [PDRCore handleSysEvent:PDRCoreSysEventOpenURL withObject:url];
    return YES;
}

- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url
{
    [PDRCore handleSysEvent:PDRCoreSysEventOpenURL withObject:url];
    return YES;
}
```



7.HBuilderX2.3.4+版本需要配置 Universal Link

一.启用通用链接请参考:[https://ask.dcloud.net.cn/article/36393#unilink](https://ask.dcloud.net.cn/article/36393#unilink) 

二 .在info.plist root 节点添加UniversalLinks项，值和微信开放平台配置的一致，参考如下：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)


查看工程里的AppDelegate.m文件里是否有下面的方法：

>//@Summary:通用链接
-(BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void(^)(NSArray<id<UIUserActivityRestoring>> * __nullable restorableObjects))restorationHandler {
    [PDRCore handleSysEvent:PDRCoreSysEventContinueUserActivity withObject:userActivity];
    restorationHandler(nil);
    return YES;
}
## QQ登录

1.添加以下Linker Flags: -llibOauth、-lQQOauth

2.添加以下framwork:  TencentOpenAPI.framework

3.添加下列文件: TencentOpenApi_IOS_Bundle.bundle

4.找到URL types,打开URL identifier为tencentopenapi的项目， 修改item0值为tencent[这个是你的appkey] ,如果没有该项按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)

5.iOS9.0以上版本需要在info.plist增加以下配置


![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)

或者直接拷贝以下内容:
<key>LSApplicationQueriesSchemes</key>
	<array>
		<string>mqq</string>
		<string>mqqapi</string>
		<string>mqzone</string>
		<string>wtloginmqq2</string>
		<string>mqqopensdkapiV3</string>
		<string>mqqwpa</string>
		<string>mqqopensdkapiV2</string>
		<string>mqqOpensdkSSoLogin</string>
	</array>

6.UIApplicationDelegate实现类中增加下列实现

```javascript
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
   [PDRCore handleSysEvent:PDRCoreSysEventOpenURL withObject:url];
    return YES;
}

- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url
{
    [PDRCore handleSysEvent:PDRCoreSysEventOpenURL withObject:url];
    return YES;
}
```


## 新浪登录
1.添加以下Linker Flags: -llibOauth、-lSinaWBOauth、-lWeiboSDK

2.添加下列文件:WeiboSDK.bundle

3.打开info.plist，找到sinweibo项，填入自己帐号的信息，如果没有该项，按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)

4.找到URL types ，打开URL identifier为com.weibo的项目，修改item0值为wb[这个是你的appkey] ,如果没有该项按照图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)

5.iOS9.0以上版本需要在info.plist增加以下配置

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/1161.png)

6.UIApplicationDelegate实现类中增加下列实现

```javascript
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
   [PDRCore handleSysEvent:PDRCoreSysEventOpenURL withObject:url];
    return YES;
}

- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url
{
    [PDRCore handleSysEvent:PDRCoreSysEventOpenURL withObject:url];
    return YES;
}
```

## 苹果登录配置
## 
[点击查看](/5PlusDocs/usemodule/iOSModuleConfig/otherModule/appleOauth.md)
