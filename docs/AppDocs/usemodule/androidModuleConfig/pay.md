## 支付宝

### 需要拷贝的文件

**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | payment-alipay-release.aar, utdid4all-XXX-proguard.jar(XXX为版本号), alipaysdk-android-15.8.11.aar |

**注意：3.3.6及以下版本需要使用alipayutdid.jar来代替utdid4all-XXX-proguard.jar(XXX为版本号)**

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
~~~

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl"><module name="AliPay" value="io.dcloud.feature.payment.alipay.AliPay"/></feature>
~~~


## 微信支付

[微信appkey申请方法](http://ask.dcloud.net.cn/article/208)

### 需要拷贝的文件

**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | payment-weixin-release.aar, wechat-sdk-android-without-mta-6.7.9.aar |

需要将以下代码文件引入到工程，包名为”$你的包名.wxapi”

**注意：文件位于离线sdk的/SDK/src/wxapi下，可直接拷贝文件并将文件内的包名替换成自己的包名。**

| 路径 | 文件 | 
| :-------: | :-------: |
| $你的包名\wxapi | WXPayEntryActivity.java |

**比如开发者的包名为`com.company.xxx`，那么应该把`WXPayEntryActivity.java`文件拷贝到
`com.company.xxx.wxapi`目录下，并编辑`WXPayEntryActivity.java`文本，把第一行的`package io.dcloud.HBuilder.wxapi`替换为实际的路径。**

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
~~~

**application节点下配置如下代码**

~~~
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
~~~

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl"><module name="Payment-Weixin" value="io.dcloud.feature.payment.weixin.WeiXinPay"/></feature>
~~~


## paypal支付

### Gradle配置
**需要在project级的build.gradle设置PayPal私有库**
~~~
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
~~~

**在app级的build.gradle配置**
~~~
dependencies {
    implementation('com.paypal.checkout:android-sdk:0.6.2')
}
~~~


### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~xml
<uses-permission android:name="android.permission.INTERNET" />
~~~

**application节点内配置如下代码**
~~~xml

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
~~~

其中`YOUR-CUSTOM-SCHEME`替换为你自定义的scheme，具体说明参考官方[文档](https://developer.paypal.com/sdk/in-app/android/customize-return-url/)

### 需要拷贝的文件
**需要引入工程的jar文件**
需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | payment-paypal-release.aar |

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~ xml
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl">
    <module name="Payment-Paypal" value="io.dcloud.feature.payment.paypal.PaypalPay" />
</feature>
~~~


## stripe支付

### Gradle配置
**app级的build.gradle设置**
- 在android节点下配置
~~~
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
~~~

### Androidmainfest.xml文件需要修改的项
**application节点内配置如下代码**

~~~xml
<activity
            android:name="io.dcloud.feature.payment.stripe.TransparentActivity"
            android:excludeFromRecents="true"
            android:exported="false"
            android:theme="@style/TranslucentTheme" />
~~~

### 需要拷贝的文件
**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | payment-stripe-release.aar |


**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~ xml
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl">
    <module name="Payment-Stripe" value="io.dcloud.feature.payment.stripe.StripePay"/>
</feature>
~~~


## Google支付

### Gradle配置

~~~
dependencies {
    implementation "androidx.appcompat:appcompat:${rootProject.ext.androidxVersion}"
    implementation 'com.google.android.gms:play-services-wallet:18.1.3'
}
~~~

### Androidmainfest.xml文件需要修改的项
**application节点内配置如下代码**

~~~xml
<meta-data
            android:name="com.google.android.gms.wallet.api.enabled"
            android:value="true" />

~~~


### 需要拷贝的文件

**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | payment-google-release.aar |

**dcloud_properties.xml需要添加如下代码**

dcloud_properties.xml文件在assets/data目录下

~~~ xml
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl">
    <module name="Payment-Google" value="io.dcloud.feature.payment.google.GooglePay"/>
</feature>
~~~