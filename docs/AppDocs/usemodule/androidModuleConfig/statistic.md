## 友盟统计
## Union Statistics

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file
**需要在application节点前添加权限**
**Need to add permissions before the application node**

```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />,
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />,
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />,
<uses-permission android:name="android.permission.INTERNET"/>
```

**application节点内配置如下代码**
**The following code is configured in the application node**
```xml
<meta-data            
    android:name="UMENG_APPKEY"
    android:value="%appkey_android%" />
<meta-data            
    android:name="UMENG_CHANNEL"
    android:value="%channelid_android%" />"
```

其中`appkey_android`、`channelid_android`分别为友盟平台的appkey和渠道id，请开发者根据自身信息填写。
Among them, `appkey_android` and `channelid_android` are the appkey and channel id of the Youmeng platform respectively, and developers are requested to fill in according to their own information.


**需要引入工程的jar、aar文件**
**The jar and aar files of the project need to be imported**

需要将以下jar、aar文件放到工程的libs目录下
The following jar and aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
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
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

``` xml
<feature name="Statistic" value="io.dcloud.feature.statistics.StatisticsFeatureImpl">
	<module name="Statistic-Umeng" value="io.dcloud.feature.statistics.umeng.UmengStatistics" />
</feature>
```
services节点下添加
Add under the services node

```xml
	<service name="Statistic-Umeng" value="io.dcloud.feature.statistics.umeng.StatisticsBootImpl"/>
```


## 友盟统计-google play

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
| SDK\libs | statistic-release.aar, statistic-umeng-release-gp.aar|


**通过gradle集成友盟SDK**

在主工程的build.gradle文件配置dependencies
```
dependencies {
    implementation 'com.umeng.umsdk:apm:1.9.5'
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
## Google Statistics

### Gradle配置
### Gradle configuration
**需要在project级的build.gradle设置**
**Requires build.gradle settings at the project level**
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
**app-level build.gradle settings**
- 在build.gradle最前面添加下面内容
- Add the following content at the front of build.gradle
```
apply plugin: 'com.google.gms.google-services'  // Google Services plugin
```
- 在dependencies下添加下面内容
- Add the following content under dependencies
```
dependencies {
    implementation 'com.google.firebase:firebase-analytics:21.3.0'
}
```

### 需要拷贝的文件
### Files to copy

**添加google-services.json**
**add google-services.json**

在创建好Firebase应用时，会有自动弹框指引下载googie-services.json，请根据指引下载google-services.json文件，并根据官网指引将google-services.json文件放在对应的文件夹下, 然后点击continue.
When you create a Firebase application, there will be an automatic pop-up box to guide you to download googie-services.json. Please download the google-services.json file according to the instructions, and put the google-services.json file in the corresponding folder according to the official website guidelines. Then click continue.


**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs |statistic-release.aar, statistic-google-release.aar |

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

``` xml
<feature name="Statistic" value="io.dcloud.feature.statistics.StatisticsFeatureImpl">
	<module name="Statistic-Google" value="io.dcloud.feature.statistics.google.GoogleStatistics" />
</feature>
```