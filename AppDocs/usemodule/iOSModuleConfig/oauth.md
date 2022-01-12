Oauth 模块支持
 
- 手机号一键登录
- 新浪微博登录
- QQ登录
- 微信登录
- 苹果授权登录
- Google登录
- Facebook登录

需要到各开放平台申请帐号

## 一键登录（univerify）
>2.9.12+ 版本支持，手机号一键登录

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|UniVerify.framework、libGTCommonSDK-1.2.2.0.a、GeYanSdk.framework|libz.tbd、libc++.tbd、libsqlite3.0.tbd、AdSupport.framework|TYRZResource.bundle|

### 工程配置

1.在 info.plist 中添加 `DCloudConfig` 节点类型为 Dictionary，然后添加`univerify`子节点类型为 Dictionary，然后在添加`appid`节点类型为 String，值填写您在 [DCloud开发者中心](https://dev.dcloud.net.cn/) 申请一键登录对应的 appid，如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/univerify01.png)

2.使用方法请参考 [一键登录 使用指南](https://uniapp.dcloud.io/univerify)

## 新浪微博登录

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibOauth.a、libSinaWBOauth.a、liblWeiboSDK.a|ImageIO.framework、libsqlite3.0.tbd|WeiboSDK.bundle|

### 工程配置

1.在 info.plist 中添加 sinaweibo 字段，填入自己帐号的信息，如下图

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150203/02e43567316bd7b11b7228a5c29121cf.png)

#### 注意 SDK 3.2.0+ 必须按照下图填写
![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/nativeplugin/Iosimgs/sina_plist.jpg)


2.在工程的 info -> URL types 中添加配置，identifier 填写`com.weibo`，URL Schemes 填写`wb[后面填写appkey]`,如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareweibo1.png)


3.在 info.plist 添加 Schemes 白名单

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20151222/9637d63385bc52fee7cdfd45ee3aee55.png)

#### 注意 SDK 3.2.0+ 必须按照下图填写
![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/nativeplugin/Iosimgs/weibo3_3.jpg)


配置Associated Domains（域名）

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191024/2d348820422e3b02d8a65b8f6c6cd830.png)

填写通用链接域名

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191024/0221225d811e93279784d3235a32d055.png)



## QQ登录

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibOauth.a、libQQOauth.a、TencentOpenAPI.framework|无|无|

### 工程配置

1.在工程的 info -> URL types 中添加配置，identifier 填写`tencentopenapi `，URL Schemes 填写`tencent[后面填写appid]`,如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareqq1.png)

2.在 info.plist 添加 Schemes 白名单

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150929/9f59a997933e98849dad6289c83cce9d.png)


#### 注意 SDK 3.2.0+ 必须按照下图填写
1. 在 info.plist 中添加 qq 字段，填入自己帐号的信息

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/nativeplugin/Iosimgs/qq_plist.jpg)

2. 配置Associated Domains（域名）

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191024/2d348820422e3b02d8a65b8f6c6cd830.png)

填写通用链接域名

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191024/0221225d811e93279784d3235a32d055.png)

## 微信登录

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibOauth.a、libWXOauth.a、libWeChatSDK.a|libsqlite3.0.tbd、libz.tbd、CoreTelephony.framework、SystemConfiguration.framework|无|

注意：SDK 中的 

- libWeChatSDK_pay.a 为带支付功能的微信SDK，支持微信分享、微信支付及微信授权登录功能
- libWeChatSDK.a 为不带支付功能的SDK，仅支持微信分享和授权登录，**不使用支付功能请添加此库，避免审核被拒**
- 不要同时添加到工程避免冲突

### 工程配置

1.在工程的 info -> URL types 中添加配置，identifier 填写`weixin`，URL Schemes 填写`wx[后面填写appid]`,如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareWeixin1.png)

2.在 info.plist 添加 Schemes 白名单

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191203/7bc7afb901b0c2a7b8f057be5cc81a89.png)

3.配置Associated Domains（域名）

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191024/2d348820422e3b02d8a65b8f6c6cd830.png)

填写通用链接域名

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191024/0221225d811e93279784d3235a32d055.png)

4.在info.plist root 节点添加`UniversalLinks`字段，值和您在微信开放平台配置的一致，参考如下：(SDK 3.2.0版本以后 此项已废弃，仅保留字段,配置参数已经位置如步骤5所示)

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191016/dfc79b582f04429a83bc2640ec26b2e2.png)

5.在 info.plist 添加 `weixin`(3.2.0 以前为`weixinoauth`) 项，填写微信 `appid` 及 `appSecret`, `UniversalLinks`,值和您在微信开放平台配置的一致，参考如下：

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/nativeplugin/Iosimgs/weixin_plist.jpg)


6.在工程的 AppDelegate.m 系统通用链接回调方法中调用框架方法如下：

```
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void(^)(NSArray<id<UIUserActivityRestoring>> * __nullable restorableObjects))restorationHandler {
    [PDRCore handleSysEvent:PDRCoreSysEventContinueUserActivity withObject:userActivity];
    restorationHandler(nil);
    return YES;
}
```


## 苹果登录

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibOauth.a、libAppleOauth.a|AuthenticationServices.framework|无|

**注意：AuthenticationServices.framework Status 为 Optional**

### 开启 Sign in with Apple
在原生工程 -> Signing&Capabilities-> + Capability 中添加 Sign in with Apple 服务

证书配置及使用说明请参考 [文档](https://ask.dcloud.net.cn/article/36651)


## Google登录

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibOauth.a、libGoogleOauth.a、GoogleSignIn.framework、GoogleSignInDependencies.framework|AuthenticationServices.framework、CoreText.framework、CoreGraphics.framework、LocalAuthentication.framework、SafariServices.framework、Security.framework|GoogleSignIn.bundle|

### 工程配置

1.在 info.plist 添加 `googleOauth` 项，填写Google `clientid`，参考如下：
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/nativedocs/iOS/oauth_google_clientid.png)

2.在工程的 info -> URL types 中添加配置，identifier 填写`google_url`， 添加您的反向clientid作为URL Schemes，如下图所示
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/gg_urlschemes.png)

## Facebook登录

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibOauth.a、libFBOauth.a、FBSDKCoreKit.framework、FBAEMKit.framework、FBSDKCoreKit_Basics.framework、FBSDKLoginKit.framework|libc++.tbd、Accelerate.framework、Accounts.framework、AdSupport.framework、AudioToolbox.framework、CoreGraphics.framework、QuartzCore.framework、Security.framework、Social.framework、StoreKit.framework、|无|

### 工程配置

1.在 info.plist 添加 `FacebookAppID` 项，填写Facebook `appid`，参考如下：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/fb_appid.png)

2.在工程的 info -> URL types 中添加配置，identifier 填写`facebook `，URL Schemes 填写`fb[后面填写appid]`,如下图所示
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/fb_urlschemes.png)

3.在 info.plist 添加 Schemes 白名单

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/oauth/fb_bmd.png)


**注意 :除苹果授权登录外，都需要实现如下方法**

在 AppDelegate.m 文件的系统回调方法中调用框架的方法如下

```
- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url
{
    [PDRCore handleSysEvent:PDRCoreSysEventOpenURL withObject:url];
    return YES;
}


- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    [PDRCore handleSysEvent:PDRCoreSysEventOpenURLWithOptions withObject:@[url,options]];
    return YES;
}

```

