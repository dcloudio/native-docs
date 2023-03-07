uni小程序SDK原生开发者交流QQ群： 892918401
uni applet SDK native developer communication QQ group: 892918401

## 开发环境
## Development environment

- JAVA环境 jdk1.7+(最优1.8)
- JAVA environment jdk1.7+ (best 1.8)
- Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
- Android Studio download address: [Android Studio official website](https://developer.android.google.cn/studio/index.html) OR [Android Studio Chinese community] (http://www.android-studio.org/ )
- 下载uni小程序 SDK [详情](UniMPDocs/SDKDownload/android.md)；
- [HBuilderX-2.6.2+](https://www.dcloud.io/hbuilderx.html)
- Android API 最低运行版本 21
- Android API minimum running version 21



## 版本更新注意事项
## Version update notes

+  3.7.3 之后版本不需要考虑这个选项  ~~升级SDK时第一步就是先将SDK目录下的assets文件相关资源替换更新。最主要的就是uni-jsframework.js 一定要替换! uni-jsframework-vue3.js是vue3的框架如果集成的小程序不会使用vue3可以不集成。~~

+  更新proguard.cfg混淆配置，文件在SDK文件夹根目录！
+ Update the proguard.cfg obfuscation configuration, the file is in the root directory of the SDK folder!

+  将文档说的4个必须库全部替换更新uniMPSDK-release.aar、uniapp-release.aar、base_oaid_sdk.aar、android-gif-drawable-release@1.xx.aar。其他aar根据之前版本是否集成选择更新替换。
+ Replace all the 4 required libraries mentioned in the document and update uniMPSDK-release.aar, uniapp-release.aar, base_oaid_sdk.aar, android-gif-drawable-release@1.xx.aar. Other aars choose to update and replace according to whether the previous version is integrated.


## 集成方法
## Integration method

打开Android Studio加载已有android项目或新建android项目。然后按照以下步骤配置您的项目。
Open Android Studio to load an existing android project or create a new android project. Then follow the steps below to configure your project.

## 添加基础依赖库及资源文件
## Add basic dependent libraries and resource files

解压uni小程序SDK包。得到uniMPSDK文件夹。
Unzip the uni applet SDK package. Get the uniMPSDK folder.
uniMPSDK文件夹目录结构说明:
uniMPSDK folder directory structure description:

```
|-- uniMPSDK/SDK	//uni小程序SDK
	|-- assets		// assets资源文件
	|-- Libs		//依赖库
	|-- res			// 资源文件
	|-- src			//微信分享支付需要的activity
	|-- AndroidManifest.xml //模块配置信息
	|-- proguard.cfg  //混淆配置
/-- uniMPSDK/DEMO	//uni小程序SDK示例DEMO
/-- uniMPSDK\Features // 框架已有的原生功能依赖库
	|-- libs //原生功能依赖库
```


#### uniMPSDK/SDK/Libs 依赖库说明
#### uniMPSDK/SDK/Libs dependent library description

Libs文件夹中的`依赖库`是不用全部都集成到宿主项目中。可根据功能增删修改。具体可阅读 [模块配置在线文档](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/android) 参考修改添加等操作。
The `Dependent Libraries` in the Libs folder do not need to be integrated into the host project. It can be added, deleted or modified according to the function. For details, please read [Module Configuration Online Documentation](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/android) for reference to modify and add operations.

除视频、地图、分享、支付、登录、直播pusher等SDK，只集成基础模块如下:
In addition to SDKs such as video, map, sharing, payment, login, and live pusher, only the basic modules are integrated as follows:

 ```
 uniMPSDK-V2-release.aar  //必须集成
 uniapp-v8-release.aar //必须集成
 breakpad-build-release.aar //必须集成
 sqlite-release.aar
 base_oaid_sdk.aar //必须集成 注意(3.3.8版本的SDK及以下版本请集成oaid_sdk_1.0.25.aar)
 messaging-release.aar
 iBeacon-release.aar
 fingerprint-release.aar
 contacts-release.aar
 Bluetooth-release.aar
 android-gif-drawable-release@1.2.23.aar //必须集成
 ```
 
```
dependencies {
	implementation 'androidx.recyclerview:recyclerview:1.0.0' //必须集成
    implementation 'androidx.legacy:legacy-support-v4:1.0.0' //必须集成
    implementation 'androidx.appcompat:appcompat:1.0.0' //必须集成
    implementation 'com.alibaba:fastjson:1.1.46.android' //必须集成
    implementation 'com.facebook.fresco:fresco:2.5.0'//必须集成
    implementation 'com.facebook.fresco:animated-gif:2.5.0'//必须集成
    implementation 'com.github.bumptech.glide:glide:4.9.0'//必须集成
    implementation 'androidx.webkit:webkit:1.3.0' //3.6.15版本之后 必须集成
}
```

**res资源：**
**res resource:**

3.1.6版本开始增加values-zh中文资源。默认values目录资源存放英文资源。只修改values下的数据在中文系统手机上运行无法正常显示改后数据。需要添加values-zh资源一并修改。
Version 3.1.6 began to add values-zh Chinese resource. The default values directory resource stores English resources. Only modify the data under values, and the modified data cannot be displayed normally when running on a Chinese system mobile phone. The values-zh resource needs to be added and modified together.



**标注`必须集成`的依赖库一定要集成。版本号尽量一致。如果依赖库不一致或未集成可能会出现页面显示异常等现象**
**Dependent libraries marked `must be integrated` must be integrated. The version numbers should be as consistent as possible. If the dependent library is inconsistent or not integrated, there may be phenomena such as abnormal page display**

**注意**
**Notice**

不要只拷贝`依赖库`(aar资源)。SDK根目录下的其他资源（非Libs）必须要拷贝到项目中的。
Don't just copy `dependencies` (aar resources). Other resources (non-Libs) under the SDK root directory must be copied into the project.

**3.1.0版本开始 unimpSDK的minSdkVersion从19调整到21**
**Starting from version 3.1.0, minSdkVersion of unimpSDK is adjusted from 19 to 21**

#### 复制SDK资源到android项目目录
#### Copy SDK resources to the android project directory

将SDK目录下的资源拷贝到工程项目相对路径中.具体可参考uniMPSDK示例DEMO
Copy the resources in the SDK directory to the relative path of the project. For details, please refer to the uniMPSDK sample DEMO

![](https://ask.dcloud.net.cn/uploads/article/20200215/69ac35d5a6db85d8890c610d567acf25.png)

**注意**
**Notice**

SDK资源必须都要拷贝到项目中。缺少则无法正常运行。如：assets中的资源不拷贝。会报错`未添加ui模块`的弹窗
SDK resources must be copied into the project. Without it, it cannot function properly. For example: resources in assets are not copied. It will report an error pop-up window of `no ui module added`

#### gradle配置
#### gradle configuration
以下为基础配置。具体可参考uniMPSDK示例DEMO中app/build.gradle文件
The following is the basic configuration. For details, please refer to the app/build.gradle file in the uniMPSDK sample DEMO
```
//必须配置
//Must be configured
def mfph = [
    //宿主包名
    //host package name
    "apk.applicationId" : "xxx.xxx.xxxxx",
]
android {
	defaultConfig {
		targetSdkVersion 26 //最优26 2.8.11开始支持29~30
		ndk {
            abiFilters 'x86','armeabi-v7a',"arm64-v8a" //不支持armeabi
        }
		manifestPlaceholders = mfph
	}
	//此处配置必须添加 否则无法正确运行
	//The configuration must be added here, otherwise it will not work correctly
    aaptOptions {
        additionalParameters '--auto-add-overlay'
        //noCompress 'foo', 'bar'
        ignoreAssetsPattern "!.svn:!.git:.*:!CVS:!thumbs.db:!picasa.ini:!*.scc:*~"
    }
}
//导入aar需要的配置
//Import the configuration required by aar
repositories {
    flatDir {
        dirs 'libs'
    }
}

dependencies {
	//导入SDK相关依赖jar、aar
	//Import SDK related dependencies jar, aar
	implementation fileTree(include: ['*.jar'], dir: 'libs')
	implementation fileTree(include: ['*.aar'], dir: 'libs')
	//必须添加的依赖
	// dependencies that must be added
	implementation 'com.android.support:recyclerview-v7:28.0.0'
    implementation 'com.android.support:support-v4:28.0.0'
    implementation 'com.android.support:appcompat-v7:28.0.0'
    implementation 'com.alibaba:fastjson:1.1.46.android'
    implementation 'com.facebook.fresco:fresco:1.13.0'
    implementation 'com.facebook.fresco:animated-gif:1.13.0'
    implementation 'com.github.bumptech.glide:glide:4.9.0'
    implementation 'androidx.webkit:webkit:1.3.0'
}
```

**注意！！！！ targetSdkVersion 取值范围最高30 最优26 HX2.8.11+已支持targetSdkVersion设置30**
**Notice! ! ! ! targetSdkVersion The value range is up to 30, the best is 26 HX2.8.11+ already supports targetSdkVersion setting 30**


### uni小程序集成的第三方依赖库与宿主发生冲突
### The third-party dependent library integrated by the uni applet conflicts with the host

 - 遇到此问题。请先检查宿主使用的先关三方依赖库的版本与[uni小程序SDK集成的三方依赖库的版本](https://ask.dcloud.net.cn/article/35419)是否一致。
 - encountered this problem. Please first check whether the version of the third-party dependent library used by the host is consistent with [the version of the third-party dependent library integrated with the uni applet SDK](https://ask.dcloud.net.cn/article/35419).
 - 如果版本号一致！删除uni小程序SDK三方依赖库的文件或gradle配置即可。
 - If the version numbers match! Just delete the file or gradle configuration of the three-party dependent library of the uni applet SDK.
 - 如果版本号不一致！则需要宿主主动修改相关集成三方依赖库的java代码。来适配uni小程序中的三方依赖库的版本逻辑。
 - If the version numbers do not match! The host needs to actively modify the java code of the relevant integrated three-party dependent library. To adapt the version logic of the three-party dependent library in the uni applet.

## 生成小程序应用资源
## Generate Mini Program application resources

**注意！！！！ uni小程序仅支持uni应用！！！**
**Notice! ! ! ! The uni applet only supports uni applications! ! ! **

首先在 HBuilderX 中选择您的 uni-app 项目，如果没有请新建一个 uni-app 项目，如下图，创建 uni-app 项目
First select your uni-app project in HBuilderX, if not, please create a new uni-app project, as shown in the figure below, create a uni-app project

![](https://ask.dcloud.net.cn/uploads/article/20200215/1943ed21ceedcd85c9ba0bc74d4cd0f5.png)

然后选中您的项目，右键->发行->原生App-制作应用wgt包
Then select your project, right-click->release->native App-make application wgt package

![](https://ask.dcloud.net.cn/uploads/article/20200225/9d254389e00fe11f36606b3fc6577ddb.png)

项目编译完成后会在控制台，输出wgt包的路径，点击路径可以直接打开wgt所在目录
After the project is compiled, it will output the path of the wgt package on the console, click the path to directly open the directory where wgt is located

![](https://ask.dcloud.net.cn/uploads/article/20200225/dc6b2614816763dcdd9a25ad4c56a25a.png)

![](https://ask.dcloud.net.cn/uploads/article/20200225/9e9da9a8e0a0a5da8c331917a0225ba5.png)

如图，`__UNI__04E3A11.wgt`就是应用资源包，（`__UNI__04E3A11` 为小程序的 appid）
As shown in the figure, `__UNI__04E3A11.wgt` is the application resource package, (`__UNI__04E3A11` is the appid of the applet)

## 导入小程序应用资源
## Import applet application resources

> 内置uni小程序集成方式
> Built-in uni applet integration method

打开android原生项目。在主Module模块的assets路径下创建apps/(内置uni小程序的appid)/www 路径。例如：`apps/__UNI__04E3A11/www `。将之前导出的应用资源包解压释放到`apps/__UNI__04E3A11/www `路径下。可参考DEMO示例工程。如下图:
Open the android native project. Create the apps/(appid of the built-in uni applet)/www path under the assets path of the main Module module. For example: `apps/__UNI__04E3A11/www`. Unzip and release the previously exported application resource package to the path `apps/__UNI__04E3A11/www`. Please refer to DEMO sample project. As shown below:
**(解压方法将资源包的扩展 .wgt 重命名为 .zip 然后使用解压软件打开)**
**(The decompression method renames the extension .wgt of the resource pack to .zip and then uses the decompression software to open)**

`内置uni小程序资源 更新资源时需要修改uniapp版本号（versionName、versionCode都需要修改）才会更新，如果版本号相同则不会更新需要注意！！！`
`Built-in uni applet resources When updating resources, the uniapp version number (versionName and versionCode both need to be modified) will be updated. If the version number is the same, it will not be updated. Note! ! ! `

注意：不少开发者对示例图片有些误解 是创建`apps/__UNI__04E3A11/www `目录，不是创建`apps.__UNI__04E3A11.www`文件夹。请注意是`apps/__UNI__04E3A11/www `目录。并将wgt资源包解压释放到www文件夹中！！！
Note: Many developers have misunderstood the sample picture. They created the `apps/__UNI__04E3A11/www` directory instead of the `apps.__UNI__04E3A11.www` folder. Note the `apps/__UNI__04E3A11/www` directory. And unzip the wgt resource package and release it to the www folder! ! !

![](https://ask.dcloud.net.cn/uploads/article/20200305/f96b6f4e801b8c7cc3e89ed7f0242e42.png)

> 非内置uni小程序集成方式
> Non-built-in uni applet integration method

3.3.7+ 版本 应用资源包(.wgt)可以选择从云端获取或共享文件等方式。存放到手机SD卡中。宿主通过uni小程序SDK的API调用`releaseWgtToRunPath`实现释放资源包集成uni小程序。 （暂时不支持assets路径下的资源）
Version 3.3.7+ The application resource package (.wgt) can choose to obtain or share files from the cloud. Save it to the phone SD card. The host releases the resource package and integrates the uni applet by calling `releaseWgtToRunPath` through the API of the uni applet SDK. (Resources under the assets path are not supported temporarily)

3.3.7 之前版本 应用资源包(.wgt)可以选择从云端获取或共享文件等方式。存放到手机SD卡中。宿主通过uni小程序SDK的API调用`releaseWgtToRunPathFromePath`实现释放资源包集成uni小程序。 （暂时不支持assets路径下的资源）
Versions before 3.3.7 The application resource package (.wgt) can choose to obtain or share files from the cloud. Save it to the phone SD card. The host releases the resource package and integrates the uni applet by calling `releaseWgtToRunPathFromPath` through the API of the uni applet SDK. (Resources under the assets path are not supported temporarily)

## 代码实现
## Code

阅读[uni小程序SDK API参考手册](UniMPDocs/API/android-v2)
Read [uni Mini Program SDK API Reference Manual](UniMPDocs/API/android-v2)

#### 初始化uniMPSDK
#### Initialize uniMPSDK

调用uni小程序SDK的DCUniMPSDK.getInstance().initialize 进行初始化。
Call DCUniMPSDK.getInstance().initialize of uni applet SDK to initialize.

**示例：**
**Example:**

```
MenuActionSheetItem item = new MenuActionSheetItem("关于", "gy");
List<MenuActionSheetItem> sheetItems = new ArrayList<>();
sheetItems.add(item);
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
                .setCapsule(true)
                .setMenuDefFontSize("16px")
                .setMenuDefFontColor("#ff00ff")
                .setMenuDefFontWeight("normal")
                .setMenuActionSheetItems(sheetItems)
                .build();
DCUniMPSDK.getInstance().initialize(this, config);
```

**Tips**

为了防止其他三方SDK可能影响小程序的运行 请禁止在小程序进程初始化其他三方SDK
In order to prevent other third-party SDKs from affecting the running of the Mini Program, please prohibit the initialization of other third-party SDKs in the Mini Program process

```
// 非小程序进程（这里的unimp 关键字 可以根据宿主的具体情况进行调整）
// Non-small program process (the unimp keyword here can be adjusted according to the specific conditions of the host)
if(!RuningAcitvityUtil.getAppName(getBaseContext()).contains("unimp")) {
	//请在此处初始化其他三方SDK
	// Please initialize other three-party SDKs here
	... ...
}
```

#### 设置DefaultMenuButton监听事件
#### Set DefaultMenuButton to listen to events

设置setDefMenuButtonClickCallBack监听默认菜单按钮点击事件。如示例中"关于"的设置，当关于被点击后会触发IMenuButtonClickCallBack
Set setDefMenuButtonClickCallBack to listen to default menu button click events. For example, the setting of "About" in the example will trigger IMenuButtonClickCallBack when About is clicked

**示例：**
**Example:**

```
DCUniMPSDK.getInstance().setDefMenuButtonClickCallBack(new IMenuButtonClickCallBack() {
            @Override
            public void onClick(String appid, String id) {
                switch (id) {
                    case "gy":{
                        Logger.e(appid+"用户点击了关于");
                    }
                }
            }
});
```

**Tips**

uni小程序运行在独立进程中。所以小程序中的内存与宿主是不会共享的。在点击事件处理上请注意！！！
The uni applet runs in an independent process. Therefore, the memory in the applet will not be shared with the host. Please pay attention to the click event processing! ! !


#### 启动内置uni小程序
#### Start the built-in uni applet

通过DCUniMPSDK.getInstance().openUniMP启动小程序
Start the applet through DCUniMPSDK.getInstance().openUniMP

**示例：**
**Example:**

```
try {
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context,"__UNI__04E3A11", MySplashView.class);
} catch (Exception e) {
	e.printStackTrace();
}
```

#### 启动非内置uni小程序  3.3.7+ 版本
#### Start non-built-in uni applet version 3.3.7+

 - 通过调用DCUniMPSDK.getInstance().releaseWgtToRunPath 释放wgt资源包到运行时目录下。
 - Release the wgt resource package to the runtime directory by calling DCUniMPSDK.getInstance().releaseWgtToRunPath.
 - 调用DCUniMPSDK.getInstance().openUniMP启动小程序
 - Call DCUniMPSDK.getInstance().openUniMP to start the applet

**示例：**
**Example:**

```
UniMPReleaseConfiguration uniMPReleaseConfiguration = new UniMPReleaseConfiguration();
uniMPReleaseConfiguration.wgtPath = file.getPath();
uniMPReleaseConfiguration.password = "789456123222";

DCUniMPSDK.getInstance().releaseWgtToRunPath("__UNI__A922B72_minimall", uniMPReleaseConfiguration, new IUniMPReleaseCallBack() {
      @Override
      public void onCallBack(int code, Object pArgs) {
            if(code ==1) {
                  //释放wgt完成
                  //Release wgt completed
                  try {
                       DCUniMPSDK.getInstance().openUniMP(MainActivity.this, "__UNI__A922B72_minimall");
                  } catch (Exception e) {
                       e.printStackTrace();
                  }
            } else{
                  //释放wgt失败
                  //Failed to release wgt
            }
    }
});

```

#### 启动非内置uni小程序  3.3.7之前 版本
#### Start the non-built-in uni applet version before 3.3.7

 - 通过调用DCUniMPSDK.getInstance().releaseWgtToRunPathFromePath释放wgt资源包到运行时目录下。
 - Release the wgt resource package to the runtime directory by calling DCUniMPSDK.getInstance().releaseWgtToRunPathFromPath.
 - 调用DCUniMPSDK.getInstance().openUniMP启动小程序
 - Call DCUniMPSDK.getInstance().openUniMP to start the applet

**示例：**
**Example:**

```
String wgtPath = context.getExternalCacheDir().getPath()+"/__UNI__04E3A11.wgt";
DCUniMPSDK.getInstance().releaseWgtToRunPathFromePath("__UNI__04E3A11", wgtPath, new ICallBack() {
	@Override
	public Object onCallBack(int code, Object pArgs) {
		if(code ==1) {//释放wgt完成
			try {
				DCUniMPSDK.getInstance().openUniMP(context, "__UNI__04E3A11");
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else{//释放wgt失败
			Toast.makeText(context, "资源释放失败", Toast.LENGTH_SHORT).show();
		}
		return null;
	}
});
```

#### 启动uni小程序携带启动参数
#### Start the uni applet with startup parameters

调用DCUniMPSDK.getInstance().openUniMP启动uni小程序时。设置相应arguments(启动参数)参数即可。具体说明请阅读[uni小程序SDK API参考手册](UniMPDocs/API/android-v2)中openUniMP方法相关说明。
When calling DCUniMPSDK.getInstance().openUniMP to start the uni applet. Just set the corresponding arguments (startup parameters) parameters. For specific instructions, please read the relevant instructions of the openUniMP method in [uni Mini Program SDK API Reference Manual](UniMPDocs/API/android-v2).

**示例**
**example**

```
try {
	JSONObject arguments = new JSONObject();
	arguments.put("a","1");
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context, "__UNI__04E3A11", arguments);
} catch (Exception e) {
	e.printStackTrace();
}
```

#### 启动uni小程序直达二级页面
#### Start the uni applet to go directly to the secondary page

调用DCUniMPSDK.getInstance().openUniMP启动uni小程序时。设置相应path(直达页面地址)参数即可。具体说明请阅读[uni小程序SDK API参考手册](UniMPDocs/API/android-v2)中openUniMP方法相关说明。
When calling DCUniMPSDK.getInstance().openUniMP to start the uni applet. Just set the corresponding path (direct page address) parameter. For specific instructions, please read the relevant instructions of the openUniMP method in [uni Mini Program SDK API Reference Manual](UniMPDocs/API/android-v2).

**示例**
**example**

```
try {
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context,"__UNI__04E3A11", "pages/component/scroll-view/scroll-view");
} catch (Exception e) {
	e.printStackTrace();
}
```

#### Tips

 - 以上示例代码可参考uniMPSDK中DEMO示例。
 - The above sample code can refer to the DEMO sample in uniMPSDK.
 - 由于uni小程序是多进程架构，在跨进程启动 Activity 的时候，activty 不可以是 singleTask 方式，否则会有页面栈问题（从小程序进入一个 activity，返回之后发现回到主进程了）。
 - Since the uni applet is a multi-process architecture, when starting an activity across processes, the activity cannot be singleTask, otherwise there will be a page stack problem (entering an activity from the applet, and returning to the main process after returning).


### 混淆配置
### Obfuscation configuration

具体请查看SDK目录下的`proguard.cfg`文件。涵盖了目前提供的模块相关的混淆配置。
Please check the `proguard.cfg` file in the SDK directory for details. Covers obfuscation configurations related to currently provided modules.

### 小程序应用管理
### Mini Program Application Management

#### uni小程序的应用资源集成方式
#### Application resource integration method of uni applet

 - 放在项目assets目录下 属于内置应用。无需开发者拷贝应用资源，直接通过appid 调用SDK的openUniMP启动即可。
 - Placed in the project assets directory, it is a built-in application. There is no need for developers to copy application resources, just call the SDK's openUniMP directly through the appid to start.
 - 开发者自行下载或其他方式获取到.wgt文件(uni小程序应用资源包)后。可通过SDK的getAppBasePath获取运行时路径。自行解压释放.wgt文件到运行时路径。.wgt文件生成请参考`第二步，生成小程序应用资源`。也可通过SDK的releaseWgtToRunPath方法释放wgt资源包。释放完毕后通过openUniMP启动uni小程序。
 - After the developer has downloaded or otherwise obtained the .wgt file (uni applet application resource package). The runtime path can be obtained through getAppBasePath of the SDK. Unzip and release the .wgt file to the runtime path by yourself. For .wgt file generation, please refer to `Step 2, Generating Mini Program Application Resources`. The wgt resource package can also be released through the releaseWgtToRunPath method of the SDK. After the release is complete, start the uni applet through openUniMP.

#### uni小程序应用资源升级
#### uni applet application resource upgrade

 - 可通过SDK的getAppBasePath获取运行时路径。自行拷贝应用资源到运行时路径。也可通过SDK的releaseWgtToRunPath方法释放升级后的wgt资源包。直接替换原有应用资源。
 - The runtime path can be obtained through SDK's getAppBasePath. Copy the application resources to the runtime path by itself. The upgraded wgt resource package can also be released through the releaseWgtToRunPath method of the SDK. Directly replace the original application resources.

#### uni小程序应用删除
#### uni applet application deletion

 - 可通过SDK的getAppBasePath获取运行时路径。遍历查找出要删除的appid应用资源路径。执行file删除操作即可。
 - The runtime path can be obtained through SDK's getAppBasePath. Traverse to find out the appid application resource path to be deleted. Execute the file delete operation.
 - assets目录下属于内置应用。不支持删除操作。
 - The assets directory belongs to the built-in application. Delete operation is not supported.