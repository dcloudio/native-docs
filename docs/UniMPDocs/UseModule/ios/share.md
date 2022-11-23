## 概述
## Overview

目前分享模块支持新浪微博分享、QQ分享、微信分享
Currently, the sharing module supports Sina Weibo sharing, QQ sharing, and WeChat sharing

首先需要到各开放平台申请帐号，参考 [文档](http://ask.dcloud.net.cn/article/36)
First, you need to apply for an account on each open platform, refer to [Documentation](http://ask.dcloud.net.cn/article/36)

## 新浪微博分享
## Share on Sina Weibo

### 添加依赖库及资源
### Add dependent libraries and resources

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|liblibShare.a、libSinaShare.a、libWeiboSDK.a|ImageIO.framework、libsqlite3.0.tbd|WeiboSDK.bundle|

### 工程配置
### Project configuration

1.在 info.plist 中添加 sinaweibo 字段，填入自己帐号的信息，如下图
1. Add the sinaweibo field in info.plist and fill in the information of your own account, as shown in the figure below

![](https://native-res.dcloud.net.cn/images/uniapp/oauth/sinaweibo_320_before.png)

#### 注意 SDK 3.2.0+ 必须按照下图填写
#### Note that SDK 3.2.0+ must be filled in as shown below
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/sinaweibo_plist.png)


2.在工程的 info -> URL types 中添加配置，identifier 填写`com.weibo`，URL Schemes 填写`wb[后面填写appkey]`,如下图所示
2. Add configuration in info -> URL types of the project, fill in `com.weibo` for identifier, and `wb[fill in appkey]` for URL Schemes, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareweibo1.png)


3.在 info.plist 添加 Schemes 白名单
3. Add Schemes whitelist in info.plist

![](https://ask.dcloud.net.cn/uploads/article/20151222/9637d63385bc52fee7cdfd45ee3aee55.png)

#### 注意 SDK 3.2.0+ 必须按照下图填写
#### Note that SDK 3.2.0+ must be filled in as shown below
![](https://img-cdn-aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/weibo3_3.jpg)


配置Associated Domains（域名）
Configure Associated Domains

![](https://ask.dcloud.net.cn/uploads/article/20191024/2d348820422e3b02d8a65b8f6c6cd830.png)

填写通用链接域名
Fill in the universal link domain name

![](https://ask.dcloud.net.cn/uploads/article/20191024/0221225d811e93279784d3235a32d055.png)



## QQ分享
## QQ share

### 添加依赖库及资源
### Add dependent libraries and resources

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|liblibShare.a、libQQShare.a、TencentOpenAPI.framework|无|无|
| liblibShare.a, libQQShare.a, TencentOpenAPI.framework|None|None|

### 工程配置
### Project configuration
1.在工程的 info -> URL types 中添加配置，identifier 填写`tencentopenapi `，URL Schemes 填写`tencent[后面填写appid]`,如下图所示
1. Add configuration in info -> URL types of the project, fill in `tencentopenapi` for identifier, fill in `tencent[fill in appid]` for URL Schemes, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareqq1.png)

2.在 info.plist 添加 Schemes 白名单
2. Add Schemes whitelist in info.plist

![](https://ask.dcloud.net.cn/uploads/article/20150929/9f59a997933e98849dad6289c83cce9d.png)


#### 注意 SDK 3.2.0+ 必须按照下图填写
#### Note that SDK 3.2.0+ must be filled in as shown below
1. 在 info.plist 中添加 qq 字段，填入自己帐号的信息
1. Add the qq field in info.plist and fill in the information of your own account

![](https://img-cdn-aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/qq_plist.jpg)

2. 配置Associated Domains（域名）
2. Configure Associated Domains (domain name)

![](https://ask.dcloud.net.cn/uploads/article/20191024/2d348820422e3b02d8a65b8f6c6cd830.png)

填写通用链接域名
Fill in the universal link domain name

![](https://ask.dcloud.net.cn/uploads/article/20191024/0221225d811e93279784d3235a32d055.png)


## 微信分享
## WeChat share
### 添加依赖库及资源
### Add dependent libraries and resources

|依赖库|系统库|依赖资源|
|Dependent Libraries|System Libraries|Dependent Resources|
|:--|:--|:--|
|liblibShare.a、libweixinShare.a、libWeChatSDK.a|libsqlite3.0.tbd、libz.tbd、CoreTelephony.framework、SystemConfiguration.framework|无|
| liblibShare.a、libweixinShare.a、libWeChatSDK.a| libsqlite3.0.tbd、libz.tbd、CoreTelephony.framework、SystemConfiguration.framework|none|

注意：SDK 中的 
NOTE: The SDK's

- libWeChatSDK_pay.a 为带支付功能的微信SDK，支持微信分享、微信支付及微信授权登录功能
- libWeChatSDK_pay.a is a WeChat SDK with payment function, which supports WeChat sharing, WeChat payment and WeChat authorized login functions
- libWeChatSDK.a 为不带支付功能的SDK，仅支持微信分享和授权登录，**不使用支付功能请添加此库，避免审核被拒**
- libWeChatSDK.a is an SDK without payment function. It only supports WeChat sharing and authorized login. **Please add this library if you don’t use the payment function to avoid being rejected**
- 不要同时添加到工程避免冲突
- Do not add to the project at the same time to avoid conflicts

### 工程配置
### Project configuration

1.在工程的 info -> URL types 中添加配置，identifier 填写`weixin`，URL Schemes 填写`wx[后面填写appid]`,如下图所示
1. Add configuration in info -> URL types of the project, fill in `weixin` for identifier, and `wx[fill in appid]` for URL Schemes, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/share/shareWeixin1.png)

2.在 info.plist 添加 Schemes 白名单
2. Add Schemes whitelist in info.plist

![](https://ask.dcloud.net.cn/uploads/article/20191203/7bc7afb901b0c2a7b8f057be5cc81a89.png)

3.配置Associated Domains（域名）
3. Configure Associated Domains (domain name)

![](https://ask.dcloud.net.cn/uploads/article/20191024/2d348820422e3b02d8a65b8f6c6cd830.png)

填写通用链接域名
Fill in the universal link domain name

![](https://ask.dcloud.net.cn/uploads/article/20191024/0221225d811e93279784d3235a32d055.png)

4.在info.plist root 节点添加`UniversalLinks`字段，值和您在微信开放平台配置的一致，参考如下：(SDK 3.2.0版本以后 此项已废弃，仅保留字段,配置参数已经位置如步骤5所示)
4. Add the `UniversalLinks` field to the root node of info.plist. The value is the same as what you configured on the WeChat open platform. The reference is as follows: (This item is obsolete after SDK 3.2.0, only the field is reserved, and the configuration parameters are located as in the steps 5)

![](https://ask.dcloud.net.cn/uploads/article/20191016/dfc79b582f04429a83bc2640ec26b2e2.png)

5.在 info.plist 添加 `weixin`(3.2.0 以前为`weixinoauth`) 项，填写微信 `appid` 及 `UniversalLinks`,值和您在微信开放平台配置的一致，参考如下：
5. Add `weixin` (before 3.2.0 is `weixinoauth`) item in info.plist, fill in WeChat `appid` and `UniversalLinks`, the value is consistent with your configuration on the WeChat open platform, refer to the following:

![](https://native-res.dcloud.net.cn/images/uniapp/oauth/weixin_plist.png)

6.在工程的 AppDelegate.m 系统通用链接回调方法中调用框架方法如下：
6. Call the framework method in the AppDelegate.m system universal link callback method of the project as follows:

```
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
    // 通过通用链接唤起 App
    // invoke the App via a universal link
    [DCUniMPSDKEngine application:application continueUserActivity:userActivity];
    return YES;
}
```

