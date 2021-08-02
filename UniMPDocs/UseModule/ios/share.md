## 概述

目前分享模块支持新浪微博分享、QQ分享、微信分享

首先需要到各开放平台申请帐号，参考 [文档](http://ask.dcloud.net.cn/article/36)

## 新浪微博分享

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibShare.a、libSinaShare.a、libWeiboSDK.a|ImageIO.framework、libsqlite3.0.tbd|WeiboSDK.bundle|

### 工程配置

1.在 info.plist 中添加 sinweibo 字段，填入自己帐号的信息，如下图

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150203/02e43567316bd7b11b7228a5c29121cf.png)

2.在工程的 info -> URL types 中添加配置，identifier 填写`com.weibo`，URL Schemes 填写`wb[后面填写appkey]`,如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareweibo1.png)

3.在 info.plist 添加微博的 Schemes 白名单

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/nativeplugin/Iosimgs/weibo3_3.jpg)

#### 注意
从HBuilder 3.2.0 开始, 新浪微博使用SDK版本升级为V3.3.1 需要开发者配置去微博开放平台后台配置通用链接才可以正常使用,必须添加 weibosdk3.3 到工程白名单里，不然 ios14 的适配 bug 还会存在



## QQ分享

### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibShare.a、libQQShare.a、TencentOpenAPI.framework|无|无|

### 工程配置

1.在工程的 info -> URL types 中添加配置，identifier 填写`tencentopenapi `，URL Schemes 填写`tencent[后面填写appid]`,如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareqq1.png)

2.在 info.plist 添加 Schemes 白名单

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150929/9f59a997933e98849dad6289c83cce9d.png)

## 微信分享
### 添加依赖库及资源

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibShare.a、libweixinShare.a、libWeChatSDK.a|libsqlite3.0.tbd、libz.tbd、CoreTelephony.framework、SystemConfiguration.framework|无|

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

4.在info.plist root 节点添加`UniversalLinks`字段，值和您在微信开放平台配置的一致，参考如下：

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191016/dfc79b582f04429a83bc2640ec26b2e2.png)

5.在工程的 AppDelegate.m 系统通用链接回调方法中调用框架方法如下：

```
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
    // 通过通用链接唤起 App
    [DCUniMPSDKEngine application:application continueUserActivity:userActivity];
    return YES;
}
```

