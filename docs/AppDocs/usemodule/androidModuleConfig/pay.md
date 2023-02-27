## 支付宝
## Alipay

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar文件**
**Need to import the jar file of the project**

需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | payment-alipay-release.aar, alipaysdk-android-15.8.11.aar |

**注意：3.7.6及以上版本，支付宝SDK改为gradle依赖，需要将libs目录下的alipaysdk-android-15.8.11.aar移除**

### 通过gradle集成支付宝SDK

在主工程的build.gradle文件配置dependencies
```
dependencies {
    implementation 'com.alipay.sdk:alipaysdk-android:15.8.11'
}
```

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

```
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl"><module name="AliPay" value="io.dcloud.feature.payment.alipay.AliPay"/></feature>
```


## 微信支付
## WeChat Pay

[微信appkey申请方法](http://ask.dcloud.net.cn/article/208)
[WeChat appkey application method](http://ask.dcloud.net.cn/article/208)

### 需要拷贝的文件
### Files to copy

**需要引入工程的jar文件**
**Need to import the jar file of the project**

需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | payment-weixin-release.aar, wechat-sdk-android-without-mta-6.7.9.aar |

**注意：3.7.6及以上版本，微信SDK改为gradle依赖，需要将libs目录下的wechat-sdk-android-without-mta-6.7.9.aar移除**

### 通过gradle集成微信SDK

在主工程的build.gradle文件配置dependencies
```
dependencies {
    implementation 'com.tencent.mm.opensdk:wechat-sdk-android-without-mta:6.7.9'
}
```

需要将以下代码文件引入到工程，包名为”$你的包名.wxapi”
The following code files need to be introduced into the project, the package name is "$yourpackagename.wxapi"

**注意：文件位于离线sdk的/SDK/src/wxapi下，可直接拷贝文件并将文件内的包名替换成自己的包名。**
**Note: The file is located under /SDK/src/wxapi of the offline sdk, you can directly copy the file and replace the package name in the file with your own package name. **

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| $你的包名\wxapi | WXPayEntryActivity.java |
| $your package name\wxapi | WXPayEntryActivity.java |

**比如开发者的包名为`com.company.xxx`，那么应该把`WXPayEntryActivity.java`文件拷贝到
** For example, the developer's package name is `com.company.xxx`, then the `WXPayEntryActivity.java` file should be copied to
`com.company.xxx.wxapi`目录下，并编辑`WXPayEntryActivity.java`文本，把第一行的`package io.dcloud.HBuilder.wxapi`替换为实际的路径。**
In the `com.company.xxx.wxapi` directory, edit the `WXPayEntryActivity.java` text, and replace `package io.dcloud.HBuilder.wxapi` in the first line with the actual path. **

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
```

**application节点下配置如下代码**
**The following code is configured under the application node**

```
 <meta-data  android:name="WX_APPID"  android:value="$微信APPID" />
 <activity android:name="io.dcloud.feature.payment.weixin.WXPayProcessMeadiatorActivity"
            android:exported="false"
            android:excludeFromRecents="true"
            android:theme="@style/ProjectDialogTheme"
            ></activity>
  <activity
            android:name="$你的包名.wxapi.WXPayEntryActivity"
            android:exported="true"
            android:theme="@android:style/Theme.Translucent.NoTitleBar"
            android:launchMode="singleTop" />
```

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

```
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl"><module name="Payment-Weixin" value="io.dcloud.feature.payment.weixin.WeiXinPay"/></feature>
```


## paypal支付
## paypal payment

### Gradle配置
### Gradle configuration
**需要在project级的build.gradle设置PayPal私有库**
**Need to set PayPal private library in project-level build.gradle**
```
allprojects {
    repositories {
        maven {
                url  "https://cardinalcommerceprod.jfrog.io/artifactory/android"
                credentials {
                    username 'paypal_sgerritz'
                    password 'AKCp8jQ8tAahqpT5JjZ4FRP2mW7GMoFZ674kGqHmupTesKeAY2G8NcmPKLuTxTGkKjDLRzDUQ'
            }
        }
    }
}
```

**在app级的build.gradle配置**
**Configuration in app-level build.gradle**
```
dependencies {
    implementation('com.paypal.checkout:android-sdk:0.6.2')
}
```


### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

**application节点内配置如下代码**
**The following code is configured in the application node**
```xml

<activity
            android:name="com.paypal.openid.RedirectUriReceiverActivity"
            android:excludeFromRecents="true"
			android:exported="true"
            android:theme="@style/PYPLAppTheme">
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data
                    android:host="paypalpay"
                    android:scheme="%YOUR-CUSTOM-SCHEME%" />
            </intent-filter>
        </activity>

        <activity
            android:name="com.paypal.pyplcheckout.home.view.activities.PYPLInitiateCheckoutActivity"
			android:exported="true"
            android:theme="@style/AppFullScreenTheme">
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data
                    android:host="paypalxo"
                    android:scheme="%YOUR-CUSTOM-SCHEME%" />
            </intent-filter>
        </activity>
		
		<meta-data android:name="returnUrl" android:value="%YOUR-CUSTOM-SCHEME%://paypalpay"/>
```

其中`YOUR-CUSTOM-SCHEME`替换为你自定义的scheme，具体说明参考官方[文档](https://developer.paypal.com/sdk/in-app/android/customize-return-url/)
Among them, replace `YOUR-CUSTOM-SCHEME` with your customized scheme. For details, refer to the official [documentation](https://developer.paypal.com/sdk/in-app/android/customize-return-url/)

### 需要拷贝的文件
### Files to copy
**需要引入工程的jar文件**
**Need to import the jar file of the project**
需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | payment-paypal-release.aar |

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

``` xml
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl">
    <module name="Payment-Paypal" value="io.dcloud.feature.payment.paypal.PaypalPay" />
</feature>
```


## stripe支付
## stripe payment

### Gradle配置
### Gradle configuration
**app级的build.gradle设置**
**app-level build.gradle settings**
- 在android节点下配置
- Configure under the android node
```
android {
	defaultConfig {
        minSdkVersion 21
    }
	
    dependencies {
        implementation "androidx.appcompat:appcompat:${rootProject.ext.androidxVersion}"
        implementation "androidx.legacy:legacy-support-v4:${rootProject.ext.androidxVersion}"
        implementation 'com.stripe:stripe-android:18.2.0'
    }
}
```

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file
**application节点内配置如下代码**
**The following code is configured in the application node**

```xml
<activity
            android:name="io.dcloud.feature.payment.stripe.TransparentActivity"
            android:excludeFromRecents="true"
            android:exported="false"
            android:theme="@style/TranslucentTheme" />
```

### 需要拷贝的文件
### Files to copy
**需要引入工程的jar文件**
**Need to import the jar file of the project**

需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | payment-stripe-release.aar |


**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

``` xml
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl">
    <module name="Payment-Stripe" value="io.dcloud.feature.payment.stripe.StripePay"/>
</feature>
```


## Google支付
## Google Pay

### Gradle配置
### Gradle configuration

```
dependencies {
    implementation "androidx.appcompat:appcompat:${rootProject.ext.androidxVersion}"
    implementation 'com.google.android.gms:play-services-wallet:18.1.3'
}
```

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file
**application节点内配置如下代码**
**The following code is configured in the application node**

```xml
<meta-data
            android:name="com.google.android.gms.wallet.api.enabled"
            android:value="true" />

```


### 需要拷贝的文件
### Files to copy

**需要引入工程的jar文件**
**Need to import the jar file of the project**

需要将以下jar文件放到工程的libs目录下
The following jar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK\libs | payment-google-release.aar |

**dcloud_properties.xml需要添加如下代码**
**dcloud_properties.xml needs to add the following code**

dcloud_properties.xml文件在assets/data目录下
The dcloud_properties.xml file is in the assets/data directory

``` xml
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl">
    <module name="Payment-Google" value="io.dcloud.feature.payment.google.GooglePay"/>
</feature>
```