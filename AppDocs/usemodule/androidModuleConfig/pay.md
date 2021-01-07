## 支付宝

### 需要拷贝的文件

**需要引入工程的jar文件**

需要将以下jar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK\libs | payment-alipay-release.aar, alipayutdid.jar, alipaySdk-15.6.5-20190718211159-noUtdid.aar |

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
| SDK\libs | payment-weixin-release.aar, wechat-sdk-android-with-mta-5.4.3.jar |

需要将以下代码文件引入到工程，包名为”$你的包名.wxapi”

**注意：文件位于离线sdk的/SDK/src/wxapi下，可直接拷贝并将文件内的包名替换成自己的包名。**

| 路径 | 文件 | 
| :-------: | :-------: |
| $你的包名\wxapi | WXPayEntryActivity.java |

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
~~~

**application节点下配置如下代码**

~~~
<meta-data  android:name="WX_APPID"  android:value="$微信APPID" />
 <meta-data android:name="WX_SECRET" android:value="$微信SECRET"/>
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