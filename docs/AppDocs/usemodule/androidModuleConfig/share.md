
## 微信分享 
## WeChat share

[微信appkey申请方法](http://ask.dcloud.net.cn/article/208)
[WeChat appkey application method](http://ask.dcloud.net.cn/article/208)

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar/aar文件**
**The jar/aar file of the project needs to be imported**

需要将以下jar/aar文件放到工程的libs目录下
The following jar/aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | share-weixin-release.aar，wechat-sdk-android-without-mta-6.8.0.aar |

**注意：3.7.6及以上版本，微信SDK改为gradle依赖，需要将libs目录下的wechat-sdk-android-without-mta-X.X.X.aar移除**

### 通过gradle集成微信SDK

在主工程的build.gradle文件配置dependencies
```
dependencies {
    implementation 'com.tencent.mm.opensdk:wechat-sdk-android-without-mta:6.8.0'
}
```

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```xml
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
```

**\<application\>节点下配置如下代码**
**The following code is configured under the \<application\> node**

```xml
<!-- 微信分享 配置begin -->
<!-- WeChat share configuration begin -->
<meta-data android:name="WX_APPID" android:value="%微信开放平台申请应用的AppID%">
</meta-data>
<meta-data android:name="WX_SECRET" android:value="%微信开放平台申请应用的Secret%">
        </meta-data>
        <activity
            android:name="【包名】.wxapi.WXEntryActivity"
            android:label="@string/app_name"
            android:exported="true"
            android:launchMode="singleTop">
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <data android:scheme="%微信开放平台申请应用的AppID%""/>
            </intent-filter>
        </activity>
        <!-- 微信分享 配置 end -->
        <!-- Wechat sharing configuration end -->
```

**properties.xml需要添加如下代码**
**properties.xml needs to add the following code**

properties.xml文件在assets/data目录下
The properties.xml file is in the assets/data directory

```xml
<feature name="Share" value="io.dcloud.share.ShareFeatureImpl"><module name="Weixin" value="io.dcloud.share.mm.WeiXinApiManager"/></feature>
```
**提示：**
**hint:**

1) androidmanifest.xml文件中声明的包名必须与申请微信appkey使用的包名一致，否则分享插件会调用失败
1) The package name declared in the androidmanifest.xml file must be consistent with the package name used to apply for WeChat appkey, otherwise the sharing plugin will fail to call

2) 微信分享测试需要使用在微信开放平台申请应用时使用的应用签名文件进行签名打包，否则无法获取好友列表。
2) The WeChat sharing test needs to be signed and packaged with the application signature file used when applying for the application on the WeChat open platform, otherwise the friend list cannot be obtained.


## QQ分享
## QQ share

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar文件**
**Need to import the jar file of the project**

需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | share-qq-release.aar，~~qq_mta-sdk-1.6.2.jar（3.6.7以下版本需要）~~，open_sdk_3.5.12.2_r97423a8_lite.jar |
| SDK\libs | share-qq-release.aar, ~~qq_mta-sdk-1.6.2.jar (required for versions below 3.6.7) ~~, open_sdk_3.5.12.2_r97423a8_lite.jar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```xml
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
```

**\<application\>节点下配置如下代码**
**The following code is configured under the \<application\> node**

```xml
<!-- Share QQ start -->
        <meta-data android:value="%appid%" android:name="QQ_APPID"/> 
        <activity android:name="com.tencent.tauth.AuthActivity" android:launchMode="singleTask" android:noHistory="true"> 
        <intent-filter>
        <action android:name="android.intent.action.VIEW"/> 
        <category android:name="android.intent.category.DEFAULT"/> 
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="%appid%"/> 
        </intent-filter> 
        </activity> 
        <activity android:name="com.tencent.connect.common.AssistActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:screenOrientation="portrait"/>
        <!-- Share QQ end -->
```
**properties.xml需要添加如下代码**
**properties.xml needs to add the following code**

properties.xml文件在assets/data目录下
The properties.xml file is in the assets/data directory

```xml
<feature name="Share" value="io.dcloud.share.ShareFeatureImpl"><module name="QQ" value="io.dcloud.share.qq.QQApiManager"/></feature>
```

<!--
## 腾讯微博
## Tencent Weibo

[腾讯微博appkey申请方法](http://ask.dcloud.net.cn/article/207)
[Tencent Weibo appkey application method](http://ask.dcloud.net.cn/article/207)

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar/aar文件**
**The jar/aar file of the project needs to be imported**

需要将以下jar/aar文件放到工程的libs目录下
The following jar/aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | share-tencent-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>   
 <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>      
  <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>      
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/> 
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>   
  <uses-permission android:name="android.permission.ACCESS_MOCK_LOCATION"/>   
```

**<application>节点下配置如下代码**
**The following code is configured under the <application> node**

```
        <meta-data
            android:name="TENCENT_APPKEY"
            android:value="_%腾讯微博开放平台申请应用的Appkey，注意前面要添加下划线%" />
        <meta-data
            android:name="TENCENT_SECRET"
            android:value="%腾讯微博开放平台申请应用的Secret%" />
        <meta-data
            android:name="TENCENT_REDIRECT_URI"
            android:value="%腾讯微博开放平台申请应用配置的回调地址%" />

        <activity
            android:name="io.dcloud.share.tencent.WebAuthorize"
            android:theme="@android:style/Theme.NoTitleBar" >
        </activity>
```

**properties.xml需要添加如下代码**
**properties.xml needs to add the following code**

properties.xml文件在ADT工程assets/data目录下
The properties.xml file is in the ADT project assets/data directory

```
<feature name="Share" value="io.dcloud.share.ShareFeatureImpl"><module name="Tencent" value="io.dcloud.share.tencent.TencentWeiboApiManager"/></feature>
```

**提示：**androidmanifest.xml文件中声明的包名必须与申请腾讯微博appkey使用的包名一致，否则分享插件会调用失败
**Tip: **The package name declared in the androidmanifest.xml file must be consistent with the package name used to apply for the Tencent Weibo appkey, otherwise the sharing plugin will fail to call

-->

## 新浪微博分享
## Share on Sina Weibo

[新浪微博appkey申请步骤](http://ask.dcloud.net.cn/article/209)
[Sina Weibo appkey application steps](http://ask.dcloud.net.cn/article/209)

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar文件**
**Need to import the jar file of the project**

需要将以下jar文件，so文件和cer文件放到工程的libs目录和assets目录下
The following jar files, so files and cer files need to be placed in the libs directory and assets directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | openDefault-12.5.0.aar，share-sina-release.aar|

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```xml
 <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>   
 <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>     
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>   
```

**application节点下配置如下代码**
**The following code is configured under the application node**

```xml
<!-- Share - 新浪微博分享 -->
<!-- Share - Share on Sina Weibo -->
        <!-- 官方网站：http://open.weibo.com/ -->
        <!-- Official website: http://open.weibo.com/ -->
        <meta-data android:name="SINA_APPKEY" android:value="_%新浪微博开放平台申请应用的Appkey，注意前面要添加下划线%" />
        <meta-data android:name="SINA_SECRET" android:value="%新浪微博开放平台申请应用的Secret%" />
        <meta-data android:name="SINA_REDIRECT_URI" android:value="%新浪微博开放平台申请应用配置的回调地址%" />
        <activity android:name="com.sina.weibo.sdk.web.WeiboSdkWebActivity"
            android:configChanges="keyboardHidden|orientation"
            android:exported="false"
            android:windowSoftInputMode="adjustResize">
        </activity>

        <activity android:name="com.sina.weibo.sdk.share.WbShareTransActivity"
            android:launchMode="singleTask"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen">
                <intent-filter>
                    <action android:name="com.sina.weibo.sdk.action.ACTION_SDK_REQ_ACTIVITY" />

                    <category android:name="android.intent.category.DEFAULT" />
                </intent-filter>
        </activity>
```

**properties.xml需要添加如下代码**
**properties.xml needs to add the following code**

properties.xml文件在ADT工程assets/data目录下
The properties.xml file is in the ADT project assets/data directory

```xml
<feature name="Share" value="io.dcloud.share.ShareFeatureImpl"><module name="Sina" value="io.dcloud.share.sina.SinaWeiboApiManager"/></feature>
```

**提示：**androidmanifest.xml文件中声明的包名必须与申请新浪微博appkey使用的包名一致，否则分享插件会调用失败
**Tip: **The package name declared in the androidmanifest.xml file must be consistent with the package name used to apply for the Sina Weibo appkey, otherwise the sharing plugin will fail to call
