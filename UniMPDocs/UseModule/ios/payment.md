## 概述

目前支持支付宝、微信支付和苹果内购支付：

支付插件首先需要到各开放平台申请帐号,申请查看该[文档](http://ask.dcloud.net.cn/article/71)

## 配置支付平台参数

在工程中搜索 feature.plist 文件（位于PandoraApi.bundle中），在 Payment-> extend 节点下添加对应平台的配置

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200415/4fb6270ceaedb5244ae8da70a4e9782a.png)

## 支付宝

### 添加依赖库及资源

|依赖库|系统库|资源文件|
|:--|:--|:--|
|liblibPayment.a、libalixpayment.a、AlipaySDK.framework|Security.framework、CoreMotion.framework、SystemConfiguration.framework、CFNetwork.framework、libc++.dylib|AlipaySDK.bundle|

### 工程配置
1.在URL Types 中添加配置： identifier 填写 `alixpay` ，URL Schemes 填写 `alix[后面是您在支付宝平台申请的appid]` ,如果没有该项按照图中的格式创建

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200415/e99c7479d3ff7ebbd6063e5687bcaeac.png)


2.在 info.plist 添加 Schemes 白名单配置

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200415/2547027bea852aa761c90363aed36688.png)


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

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200415/c12811edad437d8ce204cbdc8ac72803.png)

2.在 info.plist 添加 Schemes 白名单配置

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191203/7bc7afb901b0c2a7b8f057be5cc81a89.png)

3.在 info.plist root 节点添加`UniversalLinks`字段，值和微信开放平台配置的一致，参考如下：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191016/dfc79b582f04429a83bc2640ec26b2e2.png)

4.在工程的 AppDelegate.m 系统通用链接回调方法中调用框架方法如下：

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

