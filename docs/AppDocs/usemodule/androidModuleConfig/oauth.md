## 一键登录
## One-click login
>2.9.12+ 版本新增支持
>2.9.12+ version added support

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

|路径|文件|
|path|file|
| :-------: | :-------: |
| SDK\libs | gtc.aar (HBuilderX3.6.16以下时，如同时集成unipush谷歌渠道，应引入gtc-gp.aar，3.6.16及以上时无需处理。)|
| SDK\libs | gysdk-3.0.6.0.aar |
| SDK\libs | oauth-univerify-release.aar |


### 需要修改的配置选项
### Configuration options that need to be modified

**需要在build.gradle 中 defaultConfig 节点下的 manifestPlaceholders 新增配置选项**
**Need to add configuration options to manifestPlaceholders under the defaultConfig node in build.gradle**


```js
"GETUI_APPID"     : "%GETUI_APPID%",
"GY_APP_ID"       : "%GY_APP_ID%",
"GT_INSTALL_CHANNEL":"HBuilder",
// （GT_INSTALL_CHANNEL 固定值 "HBuilder"）
// (GT_INSTALL_CHANNEL fixed value "HBuilder")
```

GETUI_APPID与GY_APP_ID对应[开发者中心](https://dev.dcloud.net.cn/)一键登录->基础配置->一键登录应用ID（离线打包使用），GETUI_APPID与GY_APP_ID取值相同。
GETUI_APPID and GY_APP_ID correspond to [Developer Center](https://dev.dcloud.net.cn/) one-click login -> basic configuration -> one-click login application ID (offline packaged use), GETUI_APPID and GY_APP_ID have the same value.

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

```xml
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl">
    <module name="OAuth-IGETui" value="io.dcloud.feature.igetui.GeTuiOAuthService"/>
</feature>
```

应用中使用一键登录功能请参考 [一键登录 使用指南](https://uniapp.dcloud.io/univerify)
To use the one-key login function in the application, please refer to [One-key login user guide](https://uniapp.dcloud.io/univerify)



## 微信登录
## WeChat login

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar文件**
**Need to import the jar file of the project**

需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | oauth-weixin-release.aar，wechat-sdk-android-without-mta-6.8.0.aar |

**注意：3.7.6及以上版本，微信SDK改为gradle依赖，需要将libs目录下的wechat-sdk-android-without-mta-X.X.X.aar移除**

### 通过gradle集成微信SDK

在主工程的build.gradle文件配置dependencies
```
dependencies {
    implementation 'com.tencent.mm.opensdk:wechat-sdk-android-without-mta:6.8.0'
}
```

需要将`WXEntryActivity.java`代码文件引入到工程
Need to import the `WXEntryActivity.java` code file into the project

**注意：文件位于离线sdk的/SDK/src/wxapi下，可直接拷贝并将文件内的包名替换成自己的包名。**
**Note: The file is located under /SDK/src/wxapi of the offline sdk, you can directly copy and replace the package name in the file with your own package name. **


| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| %应用包名%\wxapi | WXEntryActivity.java |
| %application package name%\wxapi | WXEntryActivity.java |

**比如开发者的包名为`com.company.xxx`，那么应该把`WXEntryActivity.java`文件拷贝到
** For example, the developer's package name is `com.company.xxx`, then the `WXEntryActivity.java` file should be copied to
`com.company.xxx.wxapi`目录下，并编辑`WXEntryActivity.java`文本，把第一行的`package io.dcloud.HBuilder.wxapi`替换为实际的路径。**
`com.company.xxx.wxapi` directory, and edit `WXEntryActivity.java` text, replace `package io.dcloud.HBuilder.wxapi` in the first line with the actual path. **


### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```xml
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
<application>节点下配置如下代码
<meta-data android:value="%用户申请的微信Appcert%" android:name="WX_SECRET"/> 
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

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

```xml
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-Weixin" value="io.dcloud.feature.oauth.weixin.WeiXinOAuthService"/></feature>
```


## QQ登录
## QQ login

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar文件**
**Need to import the jar file of the project**

需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | oauth-qq-release.aar，~~qq_mta-sdk-1.6.2.jar（3.6.7以下版本需要）~~，open_sdk_3.5.12.2_r97423a8_lite.jar|
| SDK\libs | oauth-qq-release.aar, ~~qq_mta-sdk-1.6.2.jar (required for versions below 3.6.7) ~~, open_sdk_3.5.12.2_r97423a8_lite.jar|

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
<!-- Oauth QQ start -->
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
        <!-- Oauth QQ end -->
```

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

```
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-QQ" value="io.dcloud.feature.oauth.qq.QQOAuthService"/></feature>
```


## 新浪微博登录
## Sina Weibo Login

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | openDefault-12.5.0.aar，oauth-sina-release.aar|

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**\\<application\\>节点下配置如下代码**
**The following code is configured under the \\<application\\> node**

```xml
<!-- Oauth Sina start -->
        <meta-data android:value="%redirect_uri%" android:name="SINA_REDIRECT_URI"/> 
        <meta-data android:value="_%appkey%" android:name="SINA_APPKEY"/> 
       <activity android:name="com.sina.weibo.sdk.web.WeiboSdkWebActivity"
            android:configChanges="keyboardHidden|orientation"
            android:exported="false"
            android:windowSoftInputMode="adjustResize">
        </activity>
        <!-- Oauth Sina end -->
```

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

```xml
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-Sina" value="io.dcloud.feature.oauth.sina.SinaOAuthService"/></feature>
```


## 小米登录
## Mi login

### 需要拷贝的文件
### Files to copy

需要将以下jar文件拷贝到工程中
The following jar files need to be copied into the project

|路径|文件|
|path|file|
| :-------: | :-------: |
| SDK\libs | oauth-miui-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```xml
<uses-permission android:name="com.xiaomi.permission.AUTH_SERVICE"/>
```

**application节点下配置如下代码**
**The following code is configured under the application node**

```xml
<meta-data android:value="_%小米登陆的APPID%" android:name="MIUI_APPID"/>
<meta-data android:value="%小米登陆的APPSecret%" android:name="MIUI_APPSECRET"/>
<meta-data android:value="%小米登陆的RegURL%" android:name="MIUI_REDIRECT_URI"/>
<activity android:name="com.xiaomi.account.openauth.AuthorizeActivity"/>
```

### dcloud_properties.xml需要添加如下代码
### dcloud_properties.xml needs to add the following code

**dcloud_properties.xml文件在ADT工程assets/data目录下**
**The dcloud_properties.xml file is in the ADT project assets/data directory**

**Features节点下添加**
**Add under the Features node**

```xml
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl">
<module name="OAuth-MiUi" value="io.dcloud.feature.oauth.miui.MiUiOAuthService"/>
</feature>
```

## Google登录Android离线打包
## Google login Android offline packaging

>3.2.7+ 版本新增支持
>3.2.7+ version added support

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

|路径|文件|
|path|file|
| :-------: | :-------: |
| SDK\libs | oauth-google-release.aar |


**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

```xml
<module name="OAuth-Google" value="io.dcloud.feature.google.GoogleOAuthService"/>
```

**gradle配置**
**gradle configuration**

在project目录下build.gradle配置如下：
The build.gradle configuration in the project directory is as follows:
```js
buildscript {
    repositories {
        google()
    }
    dependencies {
        ...
        classpath 'com.google.gms:google-services:4.2.0'
    }
}
```

在app目录下的build.gradle配置如下：
The build.gradle configuration in the app directory is as follows:

```js
dependencies {
    ...
    implementation 'com.google.android.gms:play-services-auth:19.2.0'
}

```


## Facebook登录Android离线打包
## Facebook login Android offline packaging

>3.2.7+ 版本新增支持
>3.2.7+ version added support

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

|路径|文件|
|path|file|
| :-------: | :-------: |
| SDK\libs | oauth-facebook-release.aar |


**应用目录  res/values/strings.xml 需要添加如下资源**
**The application directory res/values/strings.xml needs to add the following resources**

facebook_app_id 和  fb_login_protocol_scheme
facebook_app_id and  fb_login_protocol_scheme



下面是一个完整的示例
Here is a complete example
```xml
<string name="facebook_app_id">1966893263469923</string>
<string name="fb_login_protocol_scheme">fb1966893263469923</string>
```

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

```xml
<module name="OAuth-Facebook" value="io.dcloud.feature.facebook.FacebookOAuthService"/>
```

**gradle配置**
**gradle configuration**

在app目录下的build.gradle配置如下：
The build.gradle configuration in the app directory is as follows:

```js
dependencies {
    ...
    implementation 'com.facebook.android:facebook-login:12.0.0'
}
```

