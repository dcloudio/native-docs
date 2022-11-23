### 适配暗黑模式
### Adapt to dark mode

3.6.9适配暗黑模式新增了webkit依赖库，需要将如下配置添加到build.gradle中
3.6.9 Adapting to dark mode Added a webkit dependency library, the following configuration needs to be added to build.gradle
```
dependencies {
    implementation 'androidx.webkit:webkit:1.3.0'
}
```

为适配暗黑模式，需要在AndroidManifest.xml中PandoraEntryActivity对应的android:configChanges中添加uiMode，可参考如下配置
In order to adapt to the dark mode, you need to add uiMode to android:configChanges corresponding to PandoraEntryActivity in AndroidManifest.xml, you can refer to the following configuration
```
<activity
    android:name="io.dcloud.PandoraEntryActivity"
    android:launchMode="singleTask"
    android:configChanges="orientation|keyboardHidden|screenSize|mcc|mnc|fontScale|keyboard|smallestScreenSize|screenLayout|screenSize|uiMode"
    android:hardwareAccelerated="true"
    android:permission="com.miui.securitycenter.permission.AppPermissionsEditor"
    android:screenOrientation="user"
    android:theme="@style/DCloudTheme"
    android:windowSoftInputMode="adjustResize">
    <intent-filter>
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <action android:name="android.intent.action.VIEW" />
        <data android:scheme=" " />
    </intent-filter>
</activity>
```

### 升级到3.6.9，离线打包卡在Splash界面无法进入主页
### Upgraded to 3.6.9, the offline packaging card is stuck on the Splash interface and cannot enter the home page

3.6.9适配暗黑模式新增了依赖库，参考上述适配暗黑模式即可解决
3.6.9 Added a new dependent library for adapting to dark mode, which can be solved by referring to the above adaptation of dark mode

### 升级离线SDK到3.5.0之后，离线打包报：java.lang.NoClassDefFoundError: Failed resolution of: Lcom/sample/breakpad/BreakpadInit;
### After upgrading the offline SDK to 3.5.0, the offline packaging report: java.lang.NoClassDefFoundError: Failed resolution of: Lcom/sample/breakpad/BreakpadInit;

离线SDK3.5.0及以上版本新增加了breakpad-build-release.aar，直接将这个库拷贝到libs目录下即可。详情可参考[文档](/AppDocs/usesdk/android.md)
Offline SDK3.5.0 and above have newly added breakpad-build-release.aar, just copy this library to the libs directory. For details, please refer to [Documentation](/AppDocs/usesdk/android.md)

### 离线打包设置隐私协议状态
### Offline package setting privacy protocol status

如果离线打包需要自定义隐私协议，为了不影响SDK正常使用，需要用户在同意或拒绝隐私状态时同步到SDK。
If offline packaging requires a custom privacy protocol, in order not to affect the normal use of the SDK, the user needs to synchronize to the SDK when agreeing or rejecting the privacy status.

- SDK.setAgreePrivacy(Context context,boolean isAllow)

  设置SDK隐私协议的状态
  Sets the state of the SDK privacy protocol
  
  支持版本：3.3.1+
  Support version: 3.3.1+
  
- SDK.isAgreePrivacy(Context context)

  获取SDK隐私协议的状态
  Get the status of the SDK privacy agreement
  
  支持版本：3.3.1+
  Support version: 3.3.1+

### Android 12 适配
### Android 12 adaptation

离线打包如果将targetSdkVersion设置为31时，在Android 12设备上安装是可能会报如下错误信息
For offline packaging, if the targetSdkVersion is set to 31, the following error message may be reported when installing on an Android 12 device

```
adb: failed to install XXX.apk: Failure [INSTALL_PARSE_FAILED_MANIFEST_MALFORMED: Failed parse during installPackageLI: /data/base.apk (at Binary XML file line #173): XXX.XXX.XXX.TestActivity: Targeting S+ (version 31 and above) requires that an explicit value for android:exported be defined when intent filters are present]
```

Android 12 中要求包含 intent-filter 的 activity 、 service 或 receiver 必须为这些应用组件显示声明 android:exported 属性，如下所示：
Android 12 requires that an activity, service, or receiver that includes an intent-filter must explicitly declare the android:exported attribute for these application components, as follows:

```
<activity
    android:name="XXX.XXX.XXX.TestActivity"
    android:exported="true">
    <intent-filter>
        ......
    </intent-filter>
</activity>

```

如果冲突的组件注册在aar的AndroidManifest.xml中，只需要将组件的注册信息拷贝到主项目，然后添加android:exported="true"即可
If the conflicting components are registered in the AndroidManifest.xml of aar, just copy the registration information of the components to the main project, and then add android:exported="true"

**注意：Android系统默认包含 intent-filter 的组件android:exported默认值为true，所以建议将android:exported设置为true**
**Note: The Android system includes the intent-filter component android:exported by default. The default value is true, so it is recommended to set android:exported to true**

### 升级到3.2.5以上版本之后离线打包无法正常启动
### After upgrading to version 3.2.5 or above, offline packaging cannot start normally

3.2.5及以上版本支持了Java 8，集成时需要在项目的build.gradle添加如下配置
Version 3.2.5 and above supports Java 8, and the following configuration needs to be added to the project's build.gradle during integration

```
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }	
}
```

3.2.5版本之后更新到AndroidX，老项目需要在gradle.properties添加如下配置
After updating to AndroidX after version 3.2.5, the old project needs to add the following configuration in gradle.properties

```
android.useAndroidX=true
android.enableJetifier=true
```

其余AndroidX依赖库配置可参考[Android 原生工程配置](/AppDocs/usesdk/android.md)
For other AndroidX dependent library configurations, please refer to [Android Native Project Configuration](/AppDocs/usesdk/android.md)

### 应用启动白屏或者提示打包时未添加ui模块
### No ui module is added when the application starts with a white screen or prompts for packaging

出现白屏或者提示打包时未添加ui模块时，大多数是因为build.gradle中配置了混淆。
When a white screen appears or prompts that the ui module is not added during packaging, most of them are caused by confusion configured in build.gradle.

如果您需要使用proguard混淆代码，需确保不要混淆SDK的代码。
If you need to use proguard to obfuscate the code, make sure not to obfuscate the code of the SDK.

混淆配置和混淆文件可以参考SDK中的UniPlugin-Hello-AS项目。
For obfuscation configuration and obfuscation files, please refer to the UniPlugin-Hello-AS project in the SDK.

### 编译报错 style attribute 'android:attr/forceDarkAllowed' not found.
### compile error style attribute 'android:attr/forceDarkAllowed' not found.

当运行原生SDK的时候提示 style attribute 'android:attr/forceDarkAllowed' not found. 需要将 compileSdkVersion 设置为 29 或以上
When running the native SDK, it prompts that style attribute 'android:attr/forceDarkAllowed' not found. You need to set compileSdkVersion to 29 or above

### 移动安全联盟
### Mobile Security Alliance
	
HBuilder X 3.1.0升级移动安全联盟SDK到1.0.25版本，集成时需将minSdkVersion调整为21。
HBuilder X 3.1.0 upgrades the Mobile Security Alliance SDK to version 1.0.25, and minSdkVersion needs to be adjusted to 21 when integrating.

### gallery 冲突问题
### gallery conflicts
	
HBuilder X 3.0.7及以上版本，gallery-dmcBig-release.aar相应代码被加入到lib.5plus.base-release.aar，使用时请删除gallery-dmcBig-release.aar库。
For HBuilder X 3.0.7 and above, the corresponding code of gallery-dmcBig-release.aar is added to lib.5plus.base-release.aar, please delete the gallery-dmcBig-release.aar library when using it.

### 离线打包编译报错
### Offline packaging and compilation error reporting
	
如果离线打包编译时提示如下错误，请参考以下做法
If the following error is displayed during offline packaging and compilation, please refer to the following methods

```
	Execution failed for task ':hbuilder:checkDebugDuplicateClasses'.
	> 1 exception was raised by workers:
	java.lang.IllegalStateException: java.lang.IllegalStateException: Worker finished without being first started
```
	
将项目根目录下的build.gradle中的gradle插件版本升级到4.1.1
Upgrade the gradle plugin version in build.gradle in the project root directory to 4.1.1
	
```
	buildscript {
		repositories {
			jcenter()
			google()
		}
		dependencies {
			classpath 'com.android.tools.build:gradle:4.1.1'
		}
	}
```
	
修改项目根目录 gradle/gradle-wrapper.properties 下的gradle的版本到6.5
Modify the version of gradle under the project root directory gradle/gradle-wrapper.properties to 6.5
	
```
	distributionBase=GRADLE_USER_HOME
	distributionPath=wrapper/dists
	zipStoreBase=GRADLE_USER_HOME
	zipStorePath=wrapper/dists
	distributionUrl=https\://services.gradle.org/distributions/gradle-6.5-bin.zip
```

### 离线打包无法调起应用安装界面
### Offline packaging cannot call up the application installation interface
	
如果离线打包调用plus.runtime.install无法调起安装界面，需要在Androidmanifest.xml中添加如下内容
If offline packaging call plus.runtime.install fails to call up the installation interface, you need to add the following content in Androidmanifest.xml
	
在manifest节点下添加安装应用的权限
Add permission to install applications under the manifest node
	
```
	<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>
```
	
在application节点下添加provider节点
Add a provider node under the application node
	
```
		<provider
            android:name="io.dcloud.common.util.DCloud_FileProvider"
            android:authorities="${apk.applicationId}.dc.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/dcloud_file_provider" />
        </provider>
```

${apk.applicationId}须替换成应用的包名。
${apk.applicationId} must be replaced with the package name of the application.
	
### 离线打包Android 10上无法启动相机
### Unable to start the camera on Android 10 when packaged offline

在application节点下添加provider节点
Add a provider node under the application node
	
```
		<provider
            android:name="io.dcloud.common.util.DCloud_FileProvider"
            android:authorities="${apk.applicationId}.dc.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/dcloud_file_provider" />
        </provider>
```

${apk.applicationId}须替换成应用的包名。
${apk.applicationId} must be replaced with the package name of the application.
	
### uni-AD业务状态异常
### uni-AD business status is abnormal

如果出现uni-AD业务状态异常提醒，如下图：
If there is a uni-AD business status abnormality reminder, as shown in the figure below:

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-5.png)

请删除掉未申请的平台的相关配置和aar，例如广告后台添加了穿山甲广告，但没有添加360和广点通的广告，请删除掉广点通和360的相关配置和aar。
Please delete the relevant configuration and aar of the unapplied platform. For example, the pangolin advertisement is added in the advertising background, but the advertisement of 360 and Guangdiantong is not added. Please delete the relevant configuration and aar of Guangdiantong and 360.

### x5配置
### x5 configuration

如果需要使用x5内核，将webview-x5-release.aar拷贝到libs目录下，直接运行即可。
If you need to use the x5 kernel, copy webview-x5-release.aar to the libs directory and run it directly.
	
uni-app将webview-x5-release.aar和weex_webview-x5-release.aar拷贝到libs目录下即可。
uni-app just copy webview-x5-release.aar and weex_webview-x5-release.aar to the libs directory.
	
### 推送上传谷歌市场注意事项
### Push and upload Google Market Notes

[Android离线SDK解决使用UniPush和个推推送违反谷歌应用商店（GooglePlay）个人和敏感信息政策的问题](https://ask.dcloud.net.cn/article/36495)
[Android offline SDK solves the problem of violating the personal and sensitive information policy of Google App Store (GooglePlay) by using UniPush and Push Push](https://ask.dcloud.net.cn/article/36495)

### 高德地图上传谷歌市场注意事项
### AutoNavi map upload Google market precautions

如需上传谷歌市场，将原来的amap-libs-release.aar替换成amap-gp-libs-release.aar即可。
If you need to upload to Google Market, replace the original amap-libs-release.aar with amap-gp-libs-release.aar.
	
### uni-app离线打包注意事项
### uni-app offline packaging precautions

[uni-app离线打包Android平台注意事项](https://ask.dcloud.net.cn/article/35139)
[Notes on Android platform for offline packaging of uni-app](https://ask.dcloud.net.cn/article/35139)
	
### 重写application
### rewrite application

如果集成离线SDK时需要重写application，必须继承自DCloudApplication，否则会导致SDK中业务逻辑无法正常运行。
If the application needs to be rewritten when integrating the offline SDK, it must inherit from DCloudApplication, otherwise the business logic in the SDK will not work properly.
	
将对应的application配置到Androidmanifest.xml中（如下），并添加tools:replace="android:name"以防出现冲突。
Configure the corresponding application to Androidmanifest.xml (as follows), and add tools:replace="android:name" to prevent conflicts.
	
```
	<application  
	    android:name="io.dcloud.test.TestApplication"  
	    android:icon="@drawable/icon"  
	    android:label="@string/app_name"  
	    tools:replace="android:name">
	</application>
```
	
### 添加so库
### Add so library

如果需要集成的第三方sdk存在so库文件，只需添加armeabi-v7a、arm64-v8a、x86三个文件夹即可，如果添加其他文件夹会导致在部分手机上无法运行。
If there are so library files in the third-party sdk that needs to be integrated, just add the three folders armeabi-v7a, arm64-v8a, and x86. If you add other folders, it will cause it to fail to run on some phones.

### 打包aab运行白屏
### Package aab to run white screen

请按以下配置修改：
Please modify the configuration as follows:

1、原生项目主app的AndroidManifest.xml中。application节点配置android:extractNativeLibs="true"。
1、 In the AndroidManifest.xml of the main app of the native project. The application node configures android:extractNativeLibs="true".

2、原生项目根目录 gradle.properties 配置android.bundle.enableUncompressedNativeLibs=false
2、 Native project root directory gradle.properties configuration android.bundle.enableUncompressedNativeLibs=false

重新编译打包
Recompile and package