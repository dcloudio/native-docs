## 微信登陆
## WeChat login

### 需要拷贝添加的文件
### Need to copy the added files

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| uniMPSDK\Features\libs | oauth-weixin-release.aar，wechat-sdk-android-without-mta-6.7.9.aar |

将表格中的文件拷贝至主Module中的libs下。
Copy the files in the table to libs in the main Module.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

**注意：3.7.6及以上版本，微信SDK改为gradle依赖，需要将libs目录下的wechat-sdk-android-without-mta-6.7.9.aar移除**

### 通过gradle集成微信SDK

在主工程的build.gradle文件配置dependencies
```
dependencies {
    implementation 'com.tencent.mm.opensdk:wechat-sdk-android-without-mta:6.7.9'
}
```

### WXPayEntryActivity 

需要自主创建`WXPayEntryActivity.java`代码文件并引入到工程
You need to create the `WXPayEntryActivity.java` code file independently and import it into the project

**`WXPayEntryActivity`的实现只需继承AbsWXCallbackActivity即可 package路径规范：`应用包名.wxapi`**
**The implementation of `WXPayEntryActivity` only needs to inherit AbsWXCallbackActivity. Package path specification: `application package name.wxapi`**

**示例：**
**Example:**

```
package 应用包名.wxapi;

import io.dcloud.feature.oauth.weixin.AbsWXCallbackActivity;

public class WXEntryActivity extends AbsWXCallbackActivity{

}
```

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```
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

### 修改dcloud_properties.xml配置
### Modify dcloud_properties.xml configuration

dcloud_properties.xml文件在assets/data目录下 
The dcloud_properties.xml file is in the assets/data directory

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息
Add the following information in dcloud_properties.xml

#### features节点下设置
#### Settings under the features node

```
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-Weixin" value="io.dcloud.feature.oauth.weixin.WeiXinOAuthService"/></feature>
```
## QQ登陆
## QQ login

### 需要拷贝添加的文件
### Need to copy the added files

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| uniMPSDK\Features\libs | oauth-qq-release.aar，qq_mta-sdk-1.6.2.jar，qq_open_sdk_3.5.2.152.jar|

将表格中的文件拷贝至主Module中的libs下。
Copy the files in the table to libs in the main Module.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
```

**\<application\>节点下配置如下代码**
**The following code is configured under the \<application\> node**

```
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

### 修改dcloud_properties.xml配置
### Modify dcloud_properties.xml configuration

dcloud_properties.xml文件在assets/data目录下 
The dcloud_properties.xml file is in the assets/data directory

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息
Add the following information in dcloud_properties.xml

#### features节点下设置
#### Settings under the features node

```
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-QQ" value="io.dcloud.feature.oauth.qq.QQOAuthService"/></feature>
```
## 新浪微博登陆
## Sina Weibo login

### 需要拷贝添加的文件
### Need to copy the added files

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| uniMPSDK\Features\libs | sina-libs-release.aar，oauth-sina-release.aar|

将表格中的文件拷贝至主Module中的libs下。
Copy the files in the table to libs in the main Module.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**\<application\>节点下配置如下代码**
**The following code is configured under the \<application\> node**

```
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

### 修改dcloud_properties.xml配置
### Modify dcloud_properties.xml configuration

dcloud_properties.xml文件在assets/data目录下 
The dcloud_properties.xml file is in the assets/data directory

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息
Add the following information in dcloud_properties.xml

#### features节点下设置
#### Settings under the features node

```
<feature name="OAuth" value="io.dcloud.feature.oauth.OAuthFeatureImpl"><module name="OAuth-Sina" value="io.dcloud.feature.oauth.sina.SinaOAuthService"/></feature>
```
