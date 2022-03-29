## 支付宝配置

### 需要拷贝添加的文件

| 路径 | 文件 | 
| :-------: | :-------: |
| uniMPSDK\Features\libs | payment-alipay-release.aar, utdid4all-1.5.2.1-proguard.jar, alipaysdk-noutdid-15.8.00.201112210139.aar|

将表格中的文件拷贝至主Module中的libs下。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

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

### 修改dcloud_properties.xml配置

dcloud_properties.xml文件在assets/data目录下 

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

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
| uniMPSDK\Features\libs | payment-weixin-release.aar, wechat-sdk-android-without-mta-6.6.5.aar |

将表格中的文件拷贝至主Module中的libs下。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

需要将以下代码文件引入到工程，包名为”$你的包名.wxapi”

| 路径 | 文件 | 
| :-------: | :-------: |
| $你的包名\wxapi | WXPayEntryActivity.java |

### WXPayEntryActivity

继承AbsWXPayCallbackActivity即可。

~~~
package 应用包名.wxapi;

import io.dcloud.feature.payment.weixin.AbsWXPayCallbackActivity;

public class WXPayEntryActivity extends AbsWXPayCallbackActivity{

}
~~~

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
<!--如果是小程序模式，还需要添加这行配置-->
<activity android:name="io.dcloud.feature.payment.weixin.WXPayProcessMeadiatorActivity"
            android:exported="false"
            android:excludeFromRecents="true"
            android:theme="@style/ProjectDialogTheme"
            ></activity>

~~~

### 修改dcloud_properties.xml配置

dcloud_properties.xml文件在assets/data目录下 

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息

#### features节点下设置

~~~
<feature name="Payment" value="io.dcloud.feature.payment.PaymentFeatureImpl"><module name="Payment-Weixin" value="io.dcloud.feature.payment.weixin.WeiXinPay"/></feature>
~~~