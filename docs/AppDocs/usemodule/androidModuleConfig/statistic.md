## 友盟统计

### Androidmainfest.xml文件需要修改的项
**需要在application节点前添加权限**

```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />,
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />,
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />,
<uses-permission android:name="android.permission.INTERNET"/>
```

**application节点内配置如下代码**
```xml
<meta-data            
    android:name="UMENG_APPKEY"
    android:value="%appkey_android%" />
<meta-data            
    android:name="UMENG_CHANNEL"
    android:value="%channelid_android%" />"
```

其中`appkey_android`、`channelid_android`分别为友盟平台的appkey和渠道id，请开发者根据自身信息填写。


**需要引入工程的jar、aar文件**

需要将以下jar、aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | statistic-release.aar, statistic-umeng-release.aar, umeng-abtest-v1.0.1.aar, utdid4all-XXX-proguard.jar(XXX为版本号)|

**注意**
- 3.3.6及以下版本需要使用alipayutdid.jar来代替utdid4all-XXX-proguard.jar(XXX为版本号)
- 3.8.3及以上版本，友盟SDK改为gradle依赖，需要将libs目录下的umeng-abtest-v1.0.1.aar、utdid4all-XXX-proguard.jar移除

**通过gradle集成友盟SDK**

在主工程的build.gradle文件配置dependencies
```
dependencies {
    implementation 'com.umeng.umsdk:common:9.6.1'
    implementation 'com.umeng.umsdk:asms:1.8.0'
    implementation 'com.umeng.umsdk:abtest:1.0.1'
    implementation 'com.umeng.umsdk:apm:1.9.1'
}
```

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

``` xml
<feature name="Statistic" value="io.dcloud.feature.statistics.StatisticsFeatureImpl">
	<module name="Statistic-Umeng" value="io.dcloud.feature.statistics.umeng.UmengStatistics" />
</feature>
```
services节点下添加

```xml
	<service name="Statistic-Umeng" value="io.dcloud.feature.statistics.umeng.StatisticsBootImpl"/>
```

## 谷歌统计

### Gradle配置
**需要在project级的build.gradle设置**
```

buildscript {

  repositories {

    google()  // Google's Maven repository
  }

  dependencies {
    // ...
    classpath 'com.google.gms:google-services:4.2.0'  // Google Services plugin
  }
}

allprojects {
  // ...

  repositories {
    google()  // Google's Maven repository
    // ...
  }
}

```

**app级的build.gradle设置**
- 在build.gradle最前面添加下面内容
```
apply plugin: 'com.google.gms.google-services'  // Google Services plugin
```
- 在dependencies下添加下面内容
```
dependencies {
    implementation 'com.google.firebase:firebase-analytics:21.3.0'
}
```

### 需要拷贝的文件

**添加google-services.json**

在创建好Firebase应用时，会有自动弹框指引下载googie-services.json，请根据指引下载google-services.json文件，并根据官网指引将google-services.json文件放在对应的文件夹下, 然后点击continue.


**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs |statistic-release.aar, statistic-google-release.aar |

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

``` xml
<feature name="Statistic" value="io.dcloud.feature.statistics.StatisticsFeatureImpl">
	<module name="Statistic-Google" value="io.dcloud.feature.statistics.google.GoogleStatistics" />
</feature>
```