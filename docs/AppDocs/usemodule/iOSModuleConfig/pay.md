目前支持支付宝、微信支付、苹果内购支付、paypal支付、stripe支付：
Currently supports Alipay, WeChat payment, Apple in-app purchase payment, paypal payment, stripe payment:

支付插件首先需要到各开放平台申请帐号,查看该[文档](http://ask.dcloud.net.cn/article/71)
The payment plug-in first needs to apply for an account on each open platform, check this [document](http://ask.dcloud.net.cn/article/71)

## 配置支付平台参数
## Configure payment platform parameters

在工程中搜索 feature.plist 文件（位于PandoraApi.bundle中），在 Payment-> extend 节点下添加对应平台的配置<br>
**注意：如果用不到的不要配置，以免影响审核**

![](https://native-res.dcloud.net.cn/images/uniapp/nativedocs/iOS/payment_feature.png)


## 支付宝
## Alipay

### 添加依赖库及资源
### Add dependent libraries and resources

|依赖库|系统库|资源文件|
|Dependent Libraries|System Libraries|Resource Files|
|:--|:--|:--|
|liblibPayment.a、libalixpayment.a、AlipaySDK.framework|Security.framework、CoreMotion.framework、SystemConfiguration.framework、CFNetwork.framework、libc++.tbd|AlipaySDK.bundle|

### 工程配置
### Project configuration
1.在URL Types 中添加配置： identifier 填写 `alixpay` ，URL Schemes 填写 `alix[后面是您在支付宝平台申请的appid]` ,如果没有该项按照图中的格式创建
1. Add configuration in URL Types: fill in `alixpay` for identifier, fill in `alix[followed by the appid you applied for on the Alipay platform]` for URL Schemes, if there is no such item, create it according to the format in the figure

![](https://ask.dcloud.net.cn/uploads/article/20200415/e99c7479d3ff7ebbd6063e5687bcaeac.png)

2.在 info.plist 添加 Schemes 白名单配置
2. Add Schemes whitelist configuration in info.plist

![](https://ask.dcloud.net.cn/uploads/article/20200415/2547027bea852aa761c90363aed36688.png)

## 微信支付
## WeChat Pay

### 添加依赖库及资源
### Add dependent libraries and resources
| 依赖库 | 系统库 | 资源文件 |
| Dependent Libraries | System Libraries | Resource Files |
|  :--  |  :--  |  :--  |
|liblibPayment.a、libwxpay.a、libWeChatSDK_pay.a | libsqlite3.0.tbd、libz.tbd、CoreTelephony.framework、SystemConfiguration.framework| 无 |
| liblibPayment.a、libwxpay.a、libWeChatSDK_pay.a | libsqlite3.0.tbd、libz.tbd、CoreTelephony.framework、SystemConfiguration.framework| none |

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
1.在URL Types 中添加配置： identifier 填写 `weixin` ，URL Schemes 填写`wx[后面是您在微信平台申请的appkey]` ,如果没有该项按照图中的格式创建
1. Add configuration in URL Types: fill in `weixin` for identifier, fill in `wx[followed by the appkey you applied for on the WeChat platform]` for URL Schemes, if there is no such item, create it according to the format in the figure

![](https://ask.dcloud.net.cn/uploads/article/20200415/c12811edad437d8ce204cbdc8ac72803.png)

2.在 info.plist 添加 Schemes 白名单配置
2. Add Schemes whitelist configuration in info.plist

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
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void(^)(NSArray<id<UIUserActivityRestoring>> * __nullable restorableObjects))restorationHandler {
    [PDRCore handleSysEvent:PDRCoreSysEventContinueUserActivity withObject:userActivity];
    restorationHandler(nil);
    return YES;
}
```

## 苹果应用内购支付
## Apple in-app purchase payment

### 添加依赖库及资源
### Add dependent libraries and resources

| 依赖库 | 系统库 | 资源文件 |
| Dependent Libraries | System Libraries | Resource Files |
|  :--  |  :--  |  :--  |
|liblibPayment.a、libIAPPay.a| StoreKit.framework| 无 |
| liblibPayment.a、libIAPPay.a| StoreKit.framework| none |

## paypal支付
## paypal payment
注:SDK3.3.7+、iOS11.0+
Note: SDK3.3.7+, iOS11.0+

### 添加依赖库及资源
### Add dependent libraries and resources

|依赖库|系统库|资源文件|
|Dependent Libraries|System Libraries|Resource Files|
|:--|:--|:--|
|liblibPayment.a、libpaypalpay.a、PayPalCheckout.xcframework|无|无|
| liblibPayment.a, libpaypalpay.a, PayPalCheckout.xcframework|None|None|

### 工程配置
### Project configuration
1. 在 info.plist 添加 `paypal` 项，填写`returnUrl`，参考如下
1. Add `paypal` item in info.plist, fill in `returnUrl`, refer to the following

![](https://native-res.dcloud.net.cn/images/uniapp/nativedocs/iOS/payment_paypal_returnurl.png)

## stripe支付
## stripe payment
注:SDK3.3.7+、iOS13.0+
Note: SDK3.3.7+, iOS13.0+

### 添加依赖库及资源
### Add dependent libraries and resources

|依赖库|系统库|资源文件|
|Dependent Libraries|System Libraries|Resource Files|
|:--|:--|:--|
|liblibPayment.a、libstripepay.a、Stripe.xcframework、StripeCore.xcframework、StripeUICore.xcframework、Stripe3DS2.xcframework|无|无|
| liblibPayment.a, libstripepay.a, Stripe.xcframework, StripeCore.xcframework, StripeUICore.xcframework, Stripe3DS2.xcframework|None|None|

### 工程配置
### Project configuration
1. 在URL Types 中添加当前应用的自定义URL Schemes，参考如下
1. Add the custom URL Schemes of the current application in URL Types, as follows
![](https://native-res.dcloud.net.cn/images/uniapp/nativedocs/iOS/payment_stripe_urlscheme.png)

2. 在 info.plist 添加 `stripe` 项，填写`returnUrl`，returnUrl为当前应用的自定义URL Schemes参考如下
2. Add `stripe` item in info.plist, fill in `returnUrl`, returnUrl is the custom URL Schemes of the current application, refer to the following
![](https://native-res.dcloud.net.cn/images/uniapp/nativedocs/iOS/payment_stripe_returnurl.png)





 **注意：以上支付方式都需要配置支付平台参数**
 **Note: All the above payment methods need to configure payment platform parameters**

除苹果支付外，其他支付需在 AppDelegate.m 文件的系统回调方法中调用框架的方法如下
Except for Apple Pay, other payments need to call the framework in the system callback method of the AppDelegate.m file as follows

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
