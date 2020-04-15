## 配置离线打包广告支持

配置离线广告之前，需先在dcloud广告联盟申请账号。

AndroidManifest.xml文件中添加如下节点到节点中，并配置替换其中5+应用appid和广告联盟会员adid的值，**因为涉及到开屏广告业务，项目工程必须以io.dcloud.PandoraEntry作为5+应用的入口Activity。该activity已包含在lib.5plus.base-release中，开发者无需实现。**

~~~
<meta-data android:name="DCLOUD_AD_ID" android:value="广告标识"/>  
<meta-data android:name="DCLOUD_AD_SPLASH" android:value="true"/><!--如果不开启开屏广告则不设置此字段或者值设置为false-->  
<meta-data android:name="DCLOUD_STREAMAPP_CHANNEL" android:value="包名|应用标识|广告标识|渠道，如io.dcloud.appid|appid|adid|google" /><!--为了保证广告统计的有效性，请正确设置此值-->
~~~

* 包名：对应Android项目中build.gradle中的applicationId，如io.dcloud.HBuilder
* 应用标识：对应对应5+或uni-app项目manifest.json中appid
* 广告标识：DCloud的广告标识，开通广告后可在dev.dcloud.net.cn获取，如果没有开通广告，设置值为空即可
* 渠道：[渠道包制作指南](https://ask.dcloud.net.cn/article/35974)

## 平台配置

### 360聚合广告

#### 库文件配置

将以下文件放入工程的libs目录下

路径 | 360聚合记错模块配置 | 360聚合穿山甲模块配置 | 360聚合广点通模块配置
- | - | - | -
SDK/libs| ads-release.aar、ads-360-release.aar、torch-adcore-5.12.3140.aar | open_ad_sdk.aar、torch-plcsjsdk-5.12.3140.aar | torch-plgdtapi-5.12.3140.aar、torch-plgdtsdk-5.12.3140.aar

**如果没有在360聚合平台申请穿山甲和广点通的广告，则对应的aar不需要添加**

#### dcloud_properties.xml配置

features 节点添加

~~~
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="360" value="io.dcloud.feature.ad.juhe360.AD360Module"/>
        </feature>
~~~

### 穿山甲广告

#### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
-|-
SDK/libs| ads-release.aar、ads-csj-release.aar、open_ad_sdk.aar

#### Androidmanifest.xml配置

application节点下添加

将“${applicationId}”替换成应用的包名

~~~
        <provider
            android:name="com.bytedance.sdk.openadsdk.TTFileProvider"
            android:authorities="${applicationId}.TTFileProvider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/file_paths"
                tools:replace="android:resource"/>
        </provider>

        <provider
            android:name="com.bytedance.sdk.openadsdk.multipro.TTMultiProvider"
            android:authorities="${applicationId}.TTMultiProvider"
            android:exported="false" />
~~~

#### dcloud_properties.xml配置

features 节点添加

~~~
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="csj" value="io.dcloud.feature.ad.csj.ADCsjModule"/>
        </feature>
~~~

### 广点通广告

#### 库文件配置

将以下文件放入工程的libs目录下

路径 | 文件名
-|-
SDK/libs| ads-release.aar、ads-gdt-release.aar、GDTSDK.unionNormal.4.110.980.aar

#### Androidmanifest.xml配置

application节点下添加

将“${applicationId}”替换成应用的包名

~~~
        <provider
            android:name="io.dcloud.gdt.GdtFileProvider"
            android:authorities="${applicationId}.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/gdt_file_path"
                tools:replace="android:resource"/>
        </provider>
~~~

#### dcloud_properties.xml配置

features 节点添加

~~~ 
        <feature name="Ad" value="io.dcloud.feature.ad.AdFlowFeatureImpl">
            <module name="gdt" value="io.dcloud.feature.ad.gdt.ADGdtModule"/>
        </feature>
~~~

[uni-AD广告联盟开通指南](https://ask.dcloud.net.cn/article/36769)

### 注意事项

如果出现uni-AD业务状态提醒，如下图：

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-5.png)

请删除掉未申请的平台的相关配置和aar，例如广告后台添加了穿山甲广告，但没有添加360和广点通的广告，请删除掉广点通和360的相关配置和aar。

