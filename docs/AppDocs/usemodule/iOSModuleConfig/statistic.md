## 友盟统计
### 将友盟统计模块依赖库及资源添加到工程

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibStatistic.a、libUmengStatistic.a、UMDevice.xcframework、UMCommon.xcframework、UMAPM.framework|libz.tbd、libsqlite3.tbd、SystemConfiguration.framework、CoreTelephony.framework|无|

![](https://native-res.dcloud.net.cn/images/uniapp/statistic/feature_umeng.png)

### 帐号配置
1.到[友盟开放平台](http://www.umeng.com/analytics)申请Appkey

2.打开Info.plist文件找到umeng项，如果没有按图片中的格式添加该项，在下图中的红色区域输入申请的Appkey

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/statistic/2117.png)

**注意：**
 IDFA说明

从HBuilderX2.2.5版本之后（含2.2.5），基座里集成了友盟v6.0.5统计SDK，因友盟官方，从组件化产品开始，【友盟+】SDK默认采集idfa标识，用来更准确的分析核对数据。对于应用本身没有获取idfa的情况，建议将应用提交至AppStore时按如下方式配置：（以避免被苹果以“应用不含广告功能，但获取了广告标示符IDFA”的而拒绝其上架。）

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/statistic/40552.png)
### 隐私清单
![友盟统计隐私清单](https://web-ext-storage.dcloud.net.cn/doc/app/ios/native-ios-statistic-umeng-privacyinfo.jpg)


## Firebase Analytics （3.3.7+ 新增）
### 将Firebase Analytics模块依赖库及资源添加到工程


**需要在/SDK/Bundles/PandoraApi.bundle/feature.plist文件中 修改如下字段**

![](https://native-res.dcloud.net.cn/images/uniapp/statistic/feature_google.png)


|依赖库|系统库|依赖资源|
|:--:|:--:|:--:|
|liblibStatistic.a<br>libGoogleStatistic.a<br>FirebaseCore.xcframework,<br>FirebaseCoreInternal.xcframework<br>FirebaseInstallations.xcframework,<br>GoogleAppMeasurement.xcframework<br>GoogleAppMeasurementIdentitySupport.xcframework<br>GoogleUtilities.xcframework<br>FBLPromises.xcframework<br>nanopb.xcframework<br>||GoogleService-Info.plist|



### 帐号配置
1. 在 [Firebase官网](https://firebase.google.com/) 创建新项目或找到已创建项目
2. 下载Firebase生成的 `GoogleService-Info.plist` 加到工程中
