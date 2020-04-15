## 微信登陆

### 需要拷贝的文件

**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | oauth-weixin-release.aar，wechat-sdk-android-with-mta-5.1.4.jar |

需要将以下代码文件引入到工程，包名为**”%用户包名%.wxapi”**

| 路径 | 文件 | 
| :-------: | :-------: |
| %用户包名%\wxapi | WXEntryActivity.java |


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

**properties.xml需要添加如下代码**

properties.xml文件在assets/data目录下

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-Weixin" value="io.dcloud.feature.oauth.weixin.WeiXinOAuthService"/></feature>
~~~
## QQ登陆

### 需要拷贝的文件

**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | oauth-qq-release.aar，qq_mta-sdk-1.6.2.jar，qq_sdk_v3.1.0.jar|

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

**properties.xml需要添加如下代码**

properties.xml文件在assets/data目录下

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-QQ" value="io.dcloud.feature.oauth.qq.QQOAuthService"/></feature>
~~~
## 新浪微博登陆

### 需要拷贝的文件

**需要引入工程的aar文件**

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | sina-libs-release.aar，oauth-sina-release.aar|

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

**properties.xml需要添加如下代码**

properties.xml文件在assets/data目录下

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-Sina" value="io.dcloud.feature.oauth.sina.SinaOAuthService"/></feature>
~~~

## 小米登陆

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

### properties.xml需要添加如下代码

**properties.xml文件在ADT工程assets/data目录下**

**Features节点下添加**

~~~
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl">
<module name="OAuth-MiUi" value="io.dcloud.feature.oauth.miui.MiUiOAuthService"/>
</feature>
~~~