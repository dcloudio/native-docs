配置离线广告之前，需先在dcloud广告联盟申请账号。

AndroidManifest.xml文件的application节点中添加如下节点到节点中，并配置替换其中uni-app或5+应用appid和广告联盟会员adid的值，**因为涉及到开屏广告业务，项目工程必须以io.dcloud.PandoraEntry作为应用的入口Activity。该activity已包含在lib.5plus.base-release中，开发者无需实现。**

```
<meta-data android:name="DCLOUD_AD_ID" android:value="广告标识"/>  
<meta-data android:name="DCLOUD_AD_SPLASH" android:value="true"/><!--如果不开启开屏广告则不设置此字段或者值设置为false-->  
<meta-data android:name="DCLOUD_STREAMAPP_CHANNEL" android:value="包名|应用标识|广告标识|渠道，如io.dcloud.appid|appid|adid|google" /><!--为了保证广告统计的有效性，请正确设置此值-->
```

* 包名：对应Android项目中build.gradle中的applicationId，如io.dcloud.HBuilder
* 应用标识：对应5+ APP或uni-app项目manifest.json中appid，当前应用必须开通广告并且必须与dcloud_control.xml中的appid保持一致。
* 广告标识：联盟ID，开通广告后可在uniad.dcloud.net.cn获取，如果没有开通广告，设置值为空即可
* 渠道：[渠道包制作指南](https://ask.dcloud.net.cn/article/35974)


## 穿山甲

### 注意事项

穿山甲GroMore广告与穿山甲广告互斥，集成时必须二选一。

### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
-|-
SDK/libs| ads-release.aar、ads-csj-release.aar、open_ad_sdk.aar

### Androidmanifest.xml配置

application节点下添加

将“${applicationId}”替换成应用的包名

```
        <provider
            android:name="com.bytedance.sdk.openadsdk.TTFileProvider"
            android:authorities="${applicationId}.TTFileProvider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/file_paths"
                tools:replace="android:resource"/>
        </provider>

        <provider
            android:name="com.bytedance.sdk.openadsdk.multipro.TTMultiProvider"
            android:authorities="${applicationId}.TTMultiProvider"
            android:exported="false" />
```

### dcloud_properties.xml配置

features 节点添加

```
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="csj" value="io.dcloud.feature.ad.csj.ADCsjModule"/>
        </feature>
```


## 腾讯优量汇

### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
-|-
SDK/libs| ads-release.aar、ads-gdt-release.aar、GDTSDK.unionNormal.aar

### dcloud_properties.xml配置

features 节点添加

``` 
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="gdt" value="io.dcloud.feature.ad.gdt.ADGdtModule"/>
        </feature>
```

## 快手

### 库文件配置

将以下文件放入工程的libs目录下

**注意：快手广告联盟跟快手内容联盟只能二选一，使用时根据自己是否需要`短视频内容联盟广告`做选择。**

类型 | 路径 | 文件名
-|-|-
快手广告联盟|SDK/libs| ads-release.aar、ads-ks-release.aar、ks_adsdk-ad.aar
快手内容联盟|SDK/libs| ads-release.aar、ads-ks-content-release.aar、kssdk-allad-content.aar

### Androidmanifest.xml配置

manifest节点下添加

将“${applicationId}”替换成应用的包名

```
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <permission
        android:name="${applicationId}.permission.KW_SDK_BROADCAST"
        android:protectionLevel="signature" />
    <uses-permission android:name="${applicationId}.permission.KW_SDK_BROADCAST" />    
```

### dcloud_properties.xml配置

features 节点添加

``` 
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="ks" value="io.dcloud.feature.ad.ks.ADKsModule"/>
        </feature>
```

## Sigmob

### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
-|-
SDK/libs| ads-release.aar、ads-sigmob-release.aar、windAd.aar、wind-common.aar(3.5.2及以上版本)

### Androidmanifest.xml配置

manifest节点下添加

```
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" tools:node="replace"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
```

### dcloud_properties.xml配置

features 节点添加

``` 
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="sgm" value="io.dcloud.feature.ad.sigmob.ADSMModule"/>
        </feature>
```

## 百度广告

**最低支持版本：离线sdk 3.4.1**

### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
- | - 
SDK/libs| ads-release.aar、ads-bd-release.aar、Baidu_MobAds_SDK.aar

### dcloud_properties.xml配置

features 节点添加

```
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="bd" value="io.dcloud.feature.ad.bd.ADBDModule" />
        </feature>
```

## 华为广告

**最低支持版本：离线sdk 3.4.1**

### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
- | - 
SDK/libs| ads-release.aar、ads-hw-release.aar

### Gradle配置

项目级build.gradle

```
buildscript {
    repositories {
		...
        maven {url 'https://developer.huawei.com/repo/'}
    }
    dependencies {
		...
        classpath 'com.huawei.agconnect:agcp:1.6.0.300'
    }
}

allprojects {
    repositories {
		...
        maven {url 'https://developer.huawei.com/repo/'}
    }
}
```

应用级的build.gradle

```
dependencies {
    implementation 'com.huawei.hms:ads-lite:13.4.56.302'
    implementation 'com.huawei.hms:ads-omsdk:1.3.35'
}
```

### dcloud_properties.xml配置

features 节点添加

```
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="hw" value="io.dcloud.feature.ad.hw.AdHwModule" />
        </feature>
```


## 穿山甲GroMore

**最低支持版本：离线sdk 3.5.2**

### 注意事项

穿山甲GroMore广告与穿山甲广告互斥，集成时必须二选一。

### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
-|-
SDK/libs| ads-release.aar、ads-gromore-release.aar、mediation_ad_sdk.aar、open_ad_sdk.aar、pangle_adapter.aar

### Androidmanifest.xml配置

manifest节点下添加

```
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
	<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
	<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>
	<uses-permission android:name="android.permission.READ_PHONE_STATE" />
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES" />
	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
	<uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
	<uses-permission android:name="android.permission.GET_TASKS"/>
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```

### dcloud_properties.xml配置

features 节点添加

``` 
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
			<module name="gm" value="io.dcloud.feature.ad.gm.AdGMModule"/>
		</feature>
```

## uniMP激励视频广告

**最低支持版本：离线sdk 3.7.13**

### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
- | - 
SDK/libs| ads-release.aar、ads-wm-release.aar、wechat-sdk-android-without-mta-6.8.0.aar

uniMP激励视频广告 不需要配置dcloud_properties.xml文件

### 引入 WXEntryActivity.java

**注意：如果已经集成微信登录或者微信分享，当前部分内容可直接跳过**

| 路径 | 文件 | 
| :-------: | :-------: |
| %应用包名%\wxapi | WXEntryActivity.java |

**比如开发者的包名为`com.company.xxx`，那么应该把`WXEntryActivity.java`文件拷贝到
`com.company.xxx.wxapi`目录下，并编辑`WXEntryActivity.java`文本，把第一行的`package io.dcloud.HBuilder.wxapi`替换为实际的路径。**

可参考如下代码：

```java 
package %应用包名%.wxapi;

import io.dcloud.feature.aol.wm.AbsWXCallbackActivity;

public class WXEntryActivity extends AbsWXCallbackActivity {

}
```

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

```xml
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
<application>节点下配置如下代码
<meta-data android:value="%用户申请的微信Appid%" android:name="WX_APPID"/>  
<activity android:name="%用户包名%.wxapi.WXEntryActivity" 
	android:label="@string/app_name"  
	android:exported="true" 
	android:launchMode="singleTop"> 
	<intent-filter><action android:name="android.intent.action.VIEW"/>
		<category android:name="android.intent.category.DEFAULT"/> 
		<data android:scheme="%用户申请的微信Appid%"/>
	</intent-filter>
</activity>
```
<!--
## 360广告

### 库文件配置

将以下文件放入工程的libs目录下

路径 | 360聚合模块配置 | 360聚合穿山甲模块配置 | 360聚合广点通模块配置
- | - | - | -
SDK/libs| ads-release.aar、ads-360-release.aar、torch-adcore-5.12.3140.aar | open_ad_sdk.aar、torch-plcsjsdk-5.12.3140.aar | torch-plgdtapi-5.12.3140.aar、torch-plgdtsdk-5.12.3140.aar

**如果没有在360聚合平台申请穿山甲和广点通的广告，则对应的aar不需要添加**

### dcloud_properties.xml配置

features 节点添加

```
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="360" value="io.dcloud.feature.ad.juhe360.AD360Module"/>
        </feature>
```
-->
## nvue配置

### 库文件配置

注意：配置nvue组件之前需要先按照上面文档配置好对应的广告平台。

路径 | 文件名
-|-
SDK/libs| weex_ad-release.aar

[uni-AD广告联盟开通指南](https://ask.dcloud.net.cn/article/36769)

## 注意事项

如果出现uni-AD业务状态提醒如下提醒：

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-5.png)

请删除掉未申请的平台的相关配置和aar，例如广告后台添加了穿山甲广告，但没有添加360和广点通的广告，请删除掉广点通和360的相关配置和aar。

