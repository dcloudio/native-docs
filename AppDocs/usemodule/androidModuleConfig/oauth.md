## 一键登录
>2.9.12+ 版本新增支持

### 需要拷贝的文件

**需要引入工程的aar文件**

|路径|文件|
| :-------: | :-------: |
| SDK\libs | elogin-1.2.0.1.aar |
| SDK\libs | gtc.aar (如同时集成unipush谷歌渠道，应引入gtc-gp.aar。)|
| SDK\libs | gysdk-2.0.0.8.aar |
| SDK\libs | oauth-univerify-release.aar |


### 需要修改的配置选项

**需要在build.gradle 中 defaultConfig 节点下的 manifestPlaceholders 新增配置选项**


~~~
"GETUI_APPID"     : "%GETUI_APPID%",
"GY_APP_ID"       : "%GY_APP_ID%",
"GT_INSTALL_CHANNEL":"HBuilder",
（GT_INSTALL_CHANNEL 固定值 "HBuilder"）
~~~

GETUI_APPID与GY_APP_ID对应[开发者中心](https://dev.dcloud.net.cn/)一键登录->基础配置->一键登录应用ID（离线打包使用），GETUI_APPID与GY_APP_ID取值相同。

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-IGETui" value="io.dcloud.feature.igetui.GeTuiOAuthService"/></feature>
~~~

应用中使用一键登录功能请参考 [一键登录 使用指南](https://uniapp.dcloud.io/univerify)



## 微信登录

### 需要拷贝的文件

**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | oauth-weixin-release.aar，wechat-sdk-android-without-mta-6.7.9.aar |

需要将`WXEntryActivity.java`代码文件引入到工程

**注意：文件位于离线sdk的/SDK/src/wxapi下，可直接拷贝并将文件内的包名替换成自己的包名。**


| 路径 | 文件 | 
| :-------: | :-------: |
| %应用包名%\wxapi | WXEntryActivity.java |

**比如开发者的包名为`com.company.xxx`，那么应该把`WXEntryActivity.java`文件拷贝到
`com.company.xxx.wxapi`目录下，并编辑`WXEntryActivity.java`文本，把第一行的`package io.dcloud.HBuilder.wxapi`替换为实际的路径。**


### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~
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
~~~

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-Weixin" value="io.dcloud.feature.oauth.weixin.WeiXinOAuthService"/></feature>
~~~


## QQ登录

### 需要拷贝的文件

**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | oauth-qq-release.aar，qq_mta-sdk-1.6.2.jar，open_sdk_3.5.12.2_r97423a8_lite.jar|

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
~~~

**<application>节点下配置如下代码**

~~~
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
~~~

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-QQ" value="io.dcloud.feature.oauth.qq.QQOAuthService"/></feature>
~~~


## 新浪微博登录

### 需要拷贝的文件

**需要引入工程的aar文件**

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | openDefault-4.4.1.aar，oauth-sina-release.aar|

### Androidmainfest.xml文件需要修改的项

**<application>节点下配置如下代码**

~~~
<!-- Oauth Sina start -->
        <meta-data android:value="%redirect_uri%" android:name="SINA_REDIRECT_URI"/> 
        <meta-data android:value="_%appkey%" android:name="SINA_APPKEY"/> 
       <activity android:name="com.sina.weibo.sdk.web.WeiboSdkWebActivity"
            android:configChanges="keyboardHidden|orientation"
            android:exported="false"
            android:windowSoftInputMode="adjustResize">
        </activity>
        <!-- Oauth Sina end -->
~~~

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-Sina" value="io.dcloud.feature.oauth.sina.SinaOAuthService"/></feature>
~~~


## 小米登录

### 需要拷贝的文件

需要将以下jar文件拷贝到工程中

|路径|文件|
| :-------: | :-------: |
| SDK\libs | oauth-miui-release.aar |

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~
<uses-permission android:name="com.xiaomi.permission.AUTH_SERVICE"/>
~~~

**application节点下配置如下代码**

~~~
<meta-data android:value="_%小米登陆的APPID%" android:name="MIUI_APPID"/>
<meta-data android:value="%小米登陆的APPSecret%" android:name="MIUI_APPSECRET"/>
<meta-data android:value="%小米登陆的RegURL%" android:name="MIUI_REDIRECT_URI"/>
<activity android:name="com.xiaomi.account.openauth.AuthorizeActivity"/>
~~~

### dcloud_properties.xml需要添加如下代码

**dcloud_properties.xml文件在ADT工程assets/data目录下**

**Features节点下添加**

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl">
<module name="OAuth-MiUi" value="io.dcloud.feature.oauth.miui.MiUiOAuthService"/>
</feature>
~~~

## Google登录Android离线打包

>3.2.7+ 版本新增支持

### 需要拷贝的文件

**需要引入工程的aar文件**

|路径|文件|
| :-------: | :-------: |
| SDK\libs | oauth-google-release.aar |


**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~
<module name="OAuth-Google" value="io.dcloud.feature.google.GoogleOAuthService"/>
~~~

**gradle配置**

在project目录下build.gradle配置如下：
~~~
buildscript {
    repositories {
        google()
    }
    dependencies {
        ...
        classpath 'com.google.gms:google-services:4.2.0'
    }
}
~~~

在app目录下的build.gradle配置如下：

~~~
dependencies {
    ...
    implementation 'com.google.android.gms:play-services-auth:19.2.0'
}

~~~


## Facebook登录Android离线打包

>3.2.7+ 版本新增支持

### 需要拷贝的文件

**需要引入工程的aar文件**

|路径|文件|
| :-------: | :-------: |
| SDK\libs | oauth-facebook-release.aar |


**应用目录  res/values/strings.xml 需要添加如下资源**

facebook_app_id 和  fb_login_protocol_scheme



下面是一个完整的示例
~~~
<string name="facebook_app_id">1966893263469923</string>
<string name="fb_login_protocol_scheme">fb1966893263469923</string>
~~~

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~
<module name="OAuth-Facebook" value="io.dcloud.feature.facebook.FacebookOAuthService"/>
~~~

**gradle配置**

在app目录下的build.gradle配置如下：

~~~
dependencies {
    ...
    implementation 'com.facebook.android:facebook-login:12.0.0'
}
~~~

