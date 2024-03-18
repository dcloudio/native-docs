### 离线SDK集成实人认证时报错：`lib/*/libc++_shared.so`

离线SDK集成实人认证如果出现`lib/*/libc++_shared.so`报错时，需要在module的build.gradle的android节点下添加如下内容

```
packagingOptions {
  pickFirst 'lib/*/libc++_shared.so'
}
```

### 解决 上架 google play 审核报 DCloud SDK 包含从未知来源下载或安装应用 的问题

HBuilder X 3.8.7-alpha开始。离线打包将安装功能独立成单独的aar —— install-apk-release.aar，上架谷歌市场不能包含此库，非谷歌市场可酌情考量。

不包含此库，调用plus.runtime.install将无法安装apk文件。

其余上架谷歌市场注意事项可参考[文档](https://uniapp.dcloud.net.cn/tutorial/android-gp.html)。

### 离线打包存在多个以uni-jsframework开头的文件

离线打包时为较少集成难度，默认会将所有框架都包含在内，如果需要去除其余框架，可参考[文档](/AppDocs/FAQ/jsframeworkdeclare.md)配置。

### 适配暗黑模式

3.6.9适配暗黑模式新增了webkit依赖库，需要将如下配置添加到build.gradle中
```
dependencies {
    implementation 'androidx.webkit:webkit:1.3.0'
}
```

为适配暗黑模式，需要在AndroidManifest.xml中PandoraEntryActivity对应的android:configChanges中添加uiMode，可参考如下配置
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

3.6.9适配暗黑模式新增了依赖库，参考上述适配暗黑模式即可解决

### 升级离线SDK到3.5.0之后，离线打包报：java.lang.NoClassDefFoundError: Failed resolution of: Lcom/sample/breakpad/BreakpadInit;

离线SDK3.5.0及以上版本新增加了breakpad-build-release.aar，直接将这个库拷贝到libs目录下即可。详情可参考[文档](/AppDocs/usesdk/android.md)

### 离线打包设置隐私协议状态

如果离线打包需要自定义隐私协议，为了不影响SDK正常使用，需要用户在同意或拒绝隐私状态时同步到SDK。

- SDK.setAgreePrivacy(Context context,boolean isAllow)

  设置SDK隐私协议的状态
  
  支持版本：3.3.1+
  
- SDK.isAgreePrivacy(Context context)

  获取SDK隐私协议的状态
  
  支持版本：3.3.1+

### Android 12 适配

离线打包如果将targetSdkVersion设置为31时，在Android 12设备上安装是可能会报如下错误信息

```
adb: failed to install XXX.apk: Failure [INSTALL_PARSE_FAILED_MANIFEST_MALFORMED: Failed parse during installPackageLI: /data/base.apk (at Binary XML file line #173): XXX.XXX.XXX.TestActivity: Targeting S+ (version 31 and above) requires that an explicit value for android:exported be defined when intent filters are present]
```

Android 12 中要求包含 intent-filter 的 activity 、 service 或 receiver 必须为这些应用组件显示声明 android:exported 属性，如下所示：

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

**注意：Android系统默认包含 intent-filter 的组件android:exported默认值为true，所以建议将android:exported设置为true**

### 升级到3.2.5以上版本之后离线打包无法正常启动

3.2.5及以上版本支持了Java 8，集成时需要在项目的build.gradle添加如下配置

```
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }	
}
```

3.2.5版本之后更新到AndroidX，老项目需要在gradle.properties添加如下配置

```
android.useAndroidX=true
android.enableJetifier=true
```

其余AndroidX依赖库配置可参考[Android 原生工程配置](/AppDocs/usesdk/android.md)

### 应用启动白屏或者提示打包时未添加ui模块

出现白屏或者提示打包时未添加ui模块时，大多数是因为build.gradle中配置了混淆。

如果您需要使用proguard混淆代码，需确保不要混淆SDK的代码。

混淆配置和混淆文件可以参考SDK中的UniPlugin-Hello-AS项目。

### 编译报错 style attribute 'android:attr/forceDarkAllowed' not found.

当运行原生SDK的时候提示 style attribute 'android:attr/forceDarkAllowed' not found. 需要将 compileSdkVersion 设置为 29 或以上

### 移动安全联盟
	
HBuilder X 3.1.0升级移动安全联盟SDK到1.0.25版本，集成时需将minSdkVersion调整为21。

### gallery 冲突问题
	
HBuilder X 3.0.7及以上版本，gallery-dmcBig-release.aar相应代码被加入到lib.5plus.base-release.aar，使用时请删除gallery-dmcBig-release.aar库。

### 离线打包编译报错
	
如果离线打包编译时提示如下错误，请参考以下做法

```
	Execution failed for task ':hbuilder:checkDebugDuplicateClasses'.
	> 1 exception was raised by workers:
	java.lang.IllegalStateException: java.lang.IllegalStateException: Worker finished without being first started
```
	
将项目根目录下的build.gradle中的gradle插件版本升级到4.1.1
	
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
	
```
	distributionBase=GRADLE_USER_HOME
	distributionPath=wrapper/dists
	zipStoreBase=GRADLE_USER_HOME
	zipStorePath=wrapper/dists
	distributionUrl=https\://services.gradle.org/distributions/gradle-6.5-bin.zip
```

### 离线打包无法调起应用安装界面
	
如果离线打包调用plus.runtime.install无法调起安装界面，需要在Androidmanifest.xml中添加如下内容
	
在manifest节点下添加安装应用的权限
	
```
	<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>
```
	
在application节点下添加provider节点
	
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
	
### 离线打包Android 10上无法启动相机

在application节点下添加provider节点
	
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
	
### uni-AD业务状态异常

如果出现uni-AD业务状态异常提醒，如下图：

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-5.png)

请删除掉未申请的平台的相关配置和aar，例如广告后台添加了穿山甲广告，但没有添加360和广点通的广告，请删除掉广点通和360的相关配置和aar。

### x5配置

如果需要使用x5内核，将webview-x5-release.aar拷贝到libs目录下，直接运行即可。
	
uni-app将webview-x5-release.aar和weex_webview-x5-release.aar拷贝到libs目录下即可。
	
### 推送上传谷歌市场注意事项

[Android离线SDK解决使用UniPush和个推推送违反谷歌应用商店（GooglePlay）个人和敏感信息政策的问题](https://ask.dcloud.net.cn/article/36495)

### 高德地图上传谷歌市场注意事项

如需上传谷歌市场，将原来的amap-libs-release.aar替换成amap-gp-libs-release.aar即可。
	
### uni-app离线打包注意事项

[uni-app离线打包Android平台注意事项](https://ask.dcloud.net.cn/article/35139)
	
### 重写application

如果集成离线SDK时需要重写application，必须继承自DCloudApplication，否则会导致SDK中业务逻辑无法正常运行。
	
将对应的application配置到Androidmanifest.xml中（如下），并添加tools:replace="android:name"以防出现冲突。
	
```
	<application  
	    android:name="io.dcloud.test.TestApplication"  
	    android:icon="@drawable/icon"  
	    android:label="@string/app_name"  
	    tools:replace="android:name">
	</application>
```
	
### 添加so库

如果需要集成的第三方sdk存在so库文件，只需添加armeabi-v7a、arm64-v8a、x86三个文件夹即可，如果添加其他文件夹会导致在部分手机上无法运行。

### 打包aab运行白屏

请按以下配置修改：

1、原生项目主app的AndroidManifest.xml中。application节点配置android:extractNativeLibs="true"。

2、原生项目根目录 gradle.properties 配置android.bundle.enableUncompressedNativeLibs=false

重新编译打包


### 适配android13 文件权限

为了兼容android 13 新的权限要求，需要在AndroidManifest.xml 中新增下面的权限声明，以适配图片选择功能。

```
 <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
 <uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
```



