## 支付宝配置

### 需要拷贝添加的文件

| 路径 | 文件 | 
| :-------: | :-------: |
| uniMPSDK\Features\libs | payment-alipay-release.aar, alipayutdid.jar |

将表格中的文件拷贝至主Module中的libs下。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200217/d8d4ac2339d1643def4c8dee1567102a.png)

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

**application节点下配置如下代码**

~~~
<activity android:name="com.alipay.sdk.app.H5PayActivity" 
    android:configChanges="orientation|keyboardHidden|navigation" 
    android:exported="false" 
    android:screenOrientation="behind" 
    android:windowSoftInputMode="adjustResize|stateHidden" > 
</activity> 
<activity android:name="com.alipay.sdk.auth.AuthActivity" 
    android:configChanges="orientation|keyboardHidden|navigation" 
    android:exported="false" 
    android:screenOrientation="behind" >
</activity>
~~~

### 修改dcloud_properties.xml配置

dcloud_properties.xml文件在assets/data目录下 

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200217/ac1dc92cb78eaf4ee9ede9b37d92aa5f.png)

在dcloud_properties.xml添加以下信息

#### features节点下设置

~~~
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl"><module name="AliPay" value="io.dcloud.feature.payment.alipay.AliPay"/></feature>
~~~

## 微信支付配置

[微信appkey申请方法](http://ask.dcloud.net.cn/article/208)

### 需要拷贝添加的文件

| 路径 | 文件 | 
| :-------: | :-------: |
| uniMPSDK\Features\libs | payment-weixin-release.aar, wechat-sdk-android-with-mta-5.1.4.jar |

将表格中的文件拷贝至主Module中的libs下。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200217/d8d4ac2339d1643def4c8dee1567102a.png)

需要将以下代码文件引入到工程，包名为”$你的包名.wxapi”

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

### 修改dcloud_properties.xml配置

dcloud_properties.xml文件在assets/data目录下 

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200217/ac1dc92cb78eaf4ee9ede9b37d92aa5f.png)

在dcloud_properties.xml添加以下信息

#### features节点下设置

~~~
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl"><module name="Payment-Weixin" value="io.dcloud.feature.payment.weixin.WeiXinPay"/></feature>
~~~