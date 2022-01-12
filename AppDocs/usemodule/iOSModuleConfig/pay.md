目前支持支付宝、微信支付、苹果内购支付、paypal支付、stripe支付：

支付插件首先需要到各开放平台申请帐号,查看该[文档](http://ask.dcloud.net.cn/article/71)

## 支付宝

### 添加依赖库及资源

|依赖库|系统库|资源文件|
|:--|:--|:--|
|liblibPayment.a、libalixpayment.a、AlipaySDK.framework|Security.framework、CoreMotion.framework、SystemConfiguration.framework、CFNetwork.framework、libc++.dylib|AlipaySDK.bundle|

### 工程配置
1.在URL Types 中添加配置： identifier 填写 `alixpay` ，URL Schemes 填写 `alix[后面是您在支付宝平台申请的appid]` ,如果没有该项按照图中的格式创建

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20200415/e99c7479d3ff7ebbd6063e5687bcaeac.png)

2.在 info.plist 添加 Schemes 白名单配置

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20200415/2547027bea852aa761c90363aed36688.png)

## 微信支付

### 添加依赖库及资源
| 依赖库 | 系统库 | 资源文件 |
|  :--  |  :--  |  :--  |
|liblibPayment.a、libwxpay.a、libWeChatSDK_pay.a | libsqlite3.0.dylib、libz.dylib、CoreTelephony.framework、SystemConfiguration.framework| 无 |

注意：SDK 中的 

- libWeChatSDK_pay.a 为带支付功能的微信SDK，支持微信分享、微信支付及微信授权登录功能
- libWeChatSDK.a 为不带支付功能的SDK，仅支持微信分享和授权登录，**不使用支付功能请添加此库，避免审核被拒**
- 不要同时添加到工程避免冲突

### 工程配置
1.在URL Types 中添加配置： identifier 填写 `weixin` ，URL Schemes 填写`wx[后面是您在微信平台申请的appkey]` ,如果没有该项按照图中的格式创建

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20200415/c12811edad437d8ce204cbdc8ac72803.png)

2.在 info.plist 添加 Schemes 白名单配置

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
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
    // 通过通用链接唤起 App
    [DCUniMPSDKEngine application:application continueUserActivity:userActivity];
    return YES;
}
```

## 苹果应用内购支付

### 添加依赖库及资源

| 依赖库 | 系统库 | 资源文件 |
|  :--  |  :--  |  :--  |
|liblibPayment.a、libIAPPay.a| StoreKit.framework| 无 |

## paypal支付

### 添加依赖库及资源

|依赖库|系统库|资源文件|
|:--|:--|:--|
|liblibPayment.a、libpaypalpay.a、PayPalCheckout.xcframework|无|无|

### 工程配置
1. 在 info.plist 添加 `paypal` 项，填写`returnUrl`，参考如下

![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/nativedocs/iOS/payment_paypal_returnurl.png)

## stripe支付

### 添加依赖库及资源

|依赖库|系统库|资源文件|
|:--|:--|:--|
|liblibPayment.a、libstripepay.a、Stripe.xcframework、StripeCore.xcframework、StripeUICore.xcframework、Stripe3DS2.xcframework|无|无|

### 工程配置
1. 在URL Types 中添加当前应用的自定义URL Schemes，参考如下
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/nativedocs/iOS/payment_stripe_urlscheme.png)

2. 在 info.plist 添加 `stripe` 项，填写`returnUrl`，returnUrl为当前应用的自定义URL Schemes参考如下
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/nativedocs/iOS/payment_stripe_returnurl.png)





 **注意：以上支付方式都需要配置支付平台参数**

1、在工程中搜索 feature.plist 文件（位于PandoraApi.bundle中），在 Payment-> extend 节点下添加对应平台的配置

![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/nativedocs/iOS/payment_feature.png)


2、除苹果支付外，其他支付需在 AppDelegate.m 文件的系统回调方法中调用框架的方法如下

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
