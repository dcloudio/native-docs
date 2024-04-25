## 开发环境
## Development environment

-  安装 Xcode 15 及以上版本 
-  [HBuilderX下载](https://www.dcloud.io/hbuilderx.html)
- [HBuilderX Download](https://www.dcloud.io/hbuilderx.html)
- App离线SDK下载：[最新iOS平台SDK下载](/AppDocs/download/ios.md)
- App offline SDK download: [Latest iOS platform SDK download](/AppDocs/download/ios.md)
- 确保版本一致,请确保从HBuilderX导出的打包资源的HBuilderX的版本号和App离线SDK发布的版本号是一致的，如下2张图里的版本号：
- Make sure the versions are consistent. Please ensure that the version number of HBuilderX of the packaged resources exported from HBuilderX is consistent with the version number released by App Offline SDK, as shown in the following two pictures:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbeny1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbeny2.png)

**注意：如果版本不一致，app启动时会弹出版本不一致的提示框，并且可能导致功能异常**
**Note: If the versions are inconsistent, a prompt box of inconsistent versions will pop up when the app starts, and may cause abnormal functions**

**注意：3.1.10版本起需要申请Appkey，具体请点击[链接](/AppDocs/usesdk/appkey.md)**
**Note: Starting from version 3.1.10, you need to apply for an Appkey. For details, please click [link](/AppDocs/usesdk/appkey.md)**

## SDK目录说明
## SDK directory description

```
    |-- HBuilder-Hello       给用户打uni-app项目的离线打包工程
    |-- Feature-iOS.xls      配置表（依赖的库、资源文件、参数配置等）
    |-- SDK                 工程需要的库文件，.h头文件，配置文件，资源文件
```

- 详细说明:[App离线SDK内不同文件的作用](/AppDocs/usesdk/iOSReadMe.md)
- Detailed description: [The role of different files in App offline SDK](/AppDocs/usesdk/iOSReadMe.md)

<!--  ## 准备工程
<!-- ## Prepare project
### 新建一个Xcode工程，步骤如下：
### Create a new Xcode project, the steps are as follows:
1、打开Xcode，创建新工程，选择“Single View Application”
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createxcode.jpg)

2、添加创建工程的名称（注意：最好不要填中文或特殊字符）
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createPname.jpg)
 -->


## 配置工程 
## Configuration project
      找到App离线SDK压缩包，并解压，再进入目录；找到HBuilder-Hello文件夹，并打开原生工程，然后准备配置工程。
      Find the App offline SDK compressed package, unzip it, and then enter the directory; find the HBuilder-Hello folder, open the native project, and prepare to configure the project.
### uni-app项目
### uni-app project
      App离线SDK中的HBuilder-Hello文件夹下的打包工程 是按照uni-app项目来配置的，所以基础配置不需要动。
      The packaging project under the HBuilder-Hello folder in the App offline SDK is configured according to the uni-app project, so the basic configuration does not need to be changed.
      
<!-- 
### 5+app项目
### 5+app projects
	如果您是5+app项目，为了减少ipa包的大小，可以相应的删除一些配置，可删除的配置如下：
	If you are a 5+app project, in order to reduce the size of the ipa package, you can delete some configurations accordingly. The configurations that can be deleted are as follows:
   
    
|库|js文件|其他|
|library|js-file|other|
|:--|:--|:--|
|liblibWeex.a|weex-polyfill.js、uni-jsframework.js、weexUniJs.js、__uniappes6.js | unincomponents.ttf|
-->

<!-- 
### 基础模块配置
### Basic module configuration
 
1、从离线包中的HBuilder-Hello工程里找到AppDelegate和ViewController的.h和.m文件,
1、 Find the .h and .m files of AppDelegate and ViewController from the HBuilder-Hello project in the offline package,
然后覆盖掉刚创建的工程里的相应文件
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createdeCo.jpg)

2、拷贝以下文件到新创建工程目录下
2、 Copy the following files to the newly created project directory

iOSSDK/SDK/Bundles/PandoraApi.bundle

iOSSDK/SDK/control.xml

iOSSDK/SDK/Libs/liblibPDRCore.a

iOSSDK/SDK/Libs/libcoreSupport.a

iOSSDK/SDK/Libs/liblibUI.a

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createkaobei.jpg)

注意：如果是uni-app项目，必须参考这遍[文章](https://ask.dcloud.net.cn/article/35871)
Note: If it is a uni-app project, you must refer to this [article](https://ask.dcloud.net.cn/article/35871)


3、添加刚才拷贝的文件到工程内
3、 Add the file just copied to the project

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/creattjia.jpg)

4、拷贝IOS-SDK/SDK/inc目录到新创建工程目录下，并添加到工程内
4、 Copy the IOS-SDK/SDK/inc directory to the newly created project directory and add it to the project

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/creatotherlink.jpg)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createinc1.jpg)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createinc2.jpg)

5、点击Project->TARGETS->Build Settings搜索“Other Linker Flags”，双击搜索到的项双击，在弹出框内添加想“-ObjC”
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createother.jpg)

6、点击Projcet->General->Linked Frameworks and Libraries 添加系统库到工程
6、 Click Projcet->General->Linked Frameworks and Libraries to add the system library to the project

|  系统库 |
| System Libraries |
| :------: |
| JavaScriptCore.framework,WebKit.framework,CoreTelephony.framework,MobileCoreServices.framework,SystemConfiguration.framework|
| MediaPlayer.framework, AudioToolbox.framework,Security.framework,QuartzCore.framework,CFNetwork.framework|
|Foundation.framework,CoreFoundation.framework,CoreGraphics.framework,UIKit.framework,QuickLook.framework,libc++.tbd|
|libxml2.tbd,libz.tbd,libsqlite3.0.tbd ,ImageIO.framework,CoreText.framework,UserNotifications(设置为Optianal)|
| libxml2.tbd, libz.tbd, libsqlite3.0.tbd , ImageIO.framework, CoreText.framework, UserNotifications (set to Optional)|

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/creatextk.jpg)

7、 修改BitCode
7、 Modify BitCode
点击Project->TARGETS->Build Settings搜索BitCode
Click Project->TARGETS->Build Settings to search for BitCode
将Enable Bitcode项的值改成 ‘NO’
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createbitcode.jpg)

 8、点击Project->TARGETS->Build Settings搜索“ARC”，修改"Objective-C Automatic Reference Counting"项的值为"NO", 如果希望使用ARC则需要修改相应的内存管理代码。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createARC.jpg)

8、 修改info.plist文件，添加App Transport Security Settings类型为Dictionary，在该项下添加Allow Arbitrary Loads项类型为Boolean，值为YES
8、 Modify the info.plist file, add the App Transport Security Settings type as Dictionary, and add the Allow Arbitrary Loads item type as Boolean under this item, and the value is YES

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createinfo.jpg)
 -->


### 配置Appkey
### Configure Appkey

**3.1.10版本起需要申请 Appkey，申请请 [参考](/AppDocs/usesdk/appkey.md)**
**Version 3.1.10 needs to apply for Appkey, please apply for [reference](/AppDocs/usesdk/appkey.md)**

打开info.plist，创建key为dcloud_appkey，Value选择String类型，内容为申请的AppKey如下：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/info-plist-appkey-config.png)

**注意：**需要按照下面的教程将 **「应用标识」**以及 [导入资源教程](https://nativesupport.dcloud.net.cn/AppDocs/importfeproject/ios) 中**「control.xml 中对应的 appid」** 修改为正确的值，否则运行时会还是会提示 appkey 错误；
**Note: **You need to follow the tutorial below to add **“Application Identification”** and **“control” in [Import Resource Tutorial](https://nativesupport.dcloud.net.cn/AppDocs/importfeproject/ios) Modify the corresponding appid in .xml to the correct value, otherwise the appkey error will still be prompted during runtime;

### 配置应用标识(Bundle Identifier)
### Configure Bundle Identifier

选择左侧应用工程根目录，选中TARGETS下的HBuilder打开工程属性界面，在General下修改Identity的值：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongboundleID.png)

其中,Bundle Identifier为苹果的AppID，必须与应用发布时配置的Profile关联的AppID一致；
Among them, the Bundle Identifier is Apple's AppID, which must be consistent with the AppID associated with the Profile configured when the application is released;

Version为应用版本号，在App Store中显示的版本号，推荐与manifest.json中version下的name值一致；
Version is the application version number, which is displayed in the App Store. It is recommended to be consistent with the name value under version in manifest.json;

Build为编译版本号，App Store判断升级使用，推荐与manifest.json中version下的code值一致。
Build is the compiled version number, which is used by the App Store to determine whether to upgrade, and it is recommended to be consistent with the code value under version in manifest.json.


###  配置应用名称 
### Configure application name

1、在打开的原生工程中，点击工程的targets和点开manifest文件，然后将manifest文件里的“name”字段的内容 和原生工程里的Display Name 的写成一样。
1、 In the opened native project, click the targets of the project and click to open the manifest file, and then write the content of the "name" field in the manifest file the same as the Display Name in the native project.

注意，manifest文件里的”name“ 对应的是HBuilderX打开的工程里的“基础配置”里的应用名称。如下图红色框所示：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongmc1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongmc2.png)

###  配置应用版本名称 
### Configure the application version name
在打开的原生工程中，点击工程的targets和点开manifest文件，然后将manifest文件里的“version”字段里的“name”的内容 和原生工程里的Version 的写成一样。注意，manifest文件里的“version”字段里的“name” 对应的是HBuilderX打开的工程里的“基础配置”里的应用版本名称。如下图红色框所示：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbmc1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbmc2.png)



###  配置应用版本号 
### Configure the application version number
在打开的原生工程中，点击工程的targets和点开工程里的manifest文件，然后将manifest文件里的“version”字段里的“code”的内容 和原生工程里的Build 的写成一样。注意，manifest文件里的“version”字段里的“code” 对应的是HBuilderX打开的工程里的“基础配置”里的应用版本号。如下图红色框所示：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbh1.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbh2.png)

### 配置应用的图标
### Configure the icon of the application
点击project->target->General->App Icons and Launch Images->App Icons Source项右侧小箭头
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongicon1.jpg)
在新开页面根据提示将对应尺寸的应用图标拖入到虚线框中即可
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongicon2.jpg)

### 配置应用启动界面
### Configure the application startup interface
<!-- #### 第一种Launch Images Source方式
<!-- #### The first Launch Images Source method
1、按下图所示，在配置的地方设置为空，这样配置之后启动界面就会是splash目录里配置的图了，就不会是LaunchScreen.storyboard 作为启动界面了。
1、 As shown in the figure below, set it to empty in the configuration area, so that the startup interface will be the one configured in the splash directory after configuration, and it will not be LaunchScreen.storyboard as the startup interface.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongqdtu1.png)

2、拷贝HBuider-Hello工程的info.plist文件的UILaunchImages节点到新工程info.plist文件，同时拷贝HBuilder-Hello工程下的splash目录到新工程目录下并将其添加到新工程中
2、 Copy the UILaunchImages node of the info.plist file of the HBuider-Hello project to the info.plist file of the new project, and copy the splash directory under the HBuilder-Hello project to the new project directory and add it to the new project
根据图片的尺寸逐个替换splash图片，注意文件名不能修改
Replace the splash pictures one by one according to the size of the picture, note that the file name cannot be modified

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongqdtu2.jpg)
#### 第二种Launch Screen File方式
#### The second Launch Screen File method
 -->

1、按下图方法配置Launch Screen File，这样配置之后启动界面就会是设置的LaunchScreen.storyboard。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/launchSrreen1.png)

2、使用官方已经制作好的storyboard，官方提供了2个storyboard，一个是图标、名称在上方的；另外一个是图标、名称在下方的(这种的LaunchScreen.storyboard主要是适配用户配置广告后，使其启动时不会有视觉上的跳跃感，增加用户体验)。
2、 Use the official storyboard that has been made. The official provides two storyboards, one with an icon and a name on the top; the other with an icon and a name below (this kind of LaunchScreen. , so that there will be no visual jump when starting up, which will increase the user experience).
注意：在使用Launch Screen File方式作为启动界面时，需要把一张或几张清晰的图标拷贝到工程的根文件夹下并引入到工程中，
Note: When using the Launch Screen File method as the startup interface, one or several clear icons need to be copied to the root folder of the project and imported into the project.
用来给启动界面加载图标。如果拷贝过去的图标不清晰，会导致启动界面上出现图标不清晰、模糊的现象。
Used to load icons for the splash screen. If the copied icon is not clear, it will cause unclear and fuzzy icons on the startup interface.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/other/launcher1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/other/launcher2.png)


3、制作LaunchScreen.storyboard(这个storyboard的名称是可以自定义的)，如果想自定义LaunchScreen.storyboard，
3、 Make LaunchScreen.storyboard (the name of this storyboard can be customized), if you want to customize LaunchScreen.storyboard,
这需要你会原生知识，知道怎样创建Launch Screen File，知道怎样在storyboard中布局视图，设置约束等。
This requires you to have native knowledge, know how to create a Launch Screen File, know how to layout views in the storyboard, set constraints, etc.

     注意，这里的storyboard，不是普通的storyboard；
     Note that the storyboard here is not an ordinary storyboard;
	 注意，配置了广告之后，如果自定义的LaunchScreen.storyboard约束没设置好，会有启动页到广告页跳跃的视觉效果。
	 Note that after the advertisement is configured, if the custom LaunchScreen.storyboard constraint is not set, there will be a visual effect of jumping from the startup page to the advertisement page.

### 配置国际化，有2部分：
### Configure internationalization, there are 2 parts:

第一部分：内容相关的国际化，离线打包时如果弹出提示框且内容为：“HTML5+ Rumtime D”时，需要在打包的原生工程里配置国际化[如何配置]( https://ask.dcloud.net.cn/article/35963)
The first part: content-related internationalization, if a prompt box pops up during offline packaging and the content is: "HTML5+ Rumtime D", you need to configure internationalization in the packaged native project [How to configure](https://ask.dcloud. net.cn/article/35963)

第二部分：Info.plist的国际化，新建一个 .strings文件，叫做InfoPlist.strings（文件名必须是这个）然后点击右侧的 localized，
The second part: the internationalization of Info.plist, create a new .strings file called InfoPlist.strings (the file name must be this) and click localized on the right,
再在工程导航界面，选择InfoPlist.strings文件，比如添加key为CFBundleDisplayName，值为应用名字（HBuilder你好），InfoPlist.strings(English)为英文系统,Simplified为中文简体系统
Then in the project navigation interface, select the InfoPlist.strings file, for example, add the key as CFBundleDisplayName, the value is the application name (HBuilder hello), InfoPlist.strings (English) is the English system, and Simplified is the Simplified Chinese system

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/bundledisplay2.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/bundledisplay1.png)

另外，对HBuilderX，manifest.json文件里，“模块权限配置”项中的“iOS隐私信息访问的许可描述”栏下的隐私权限描述国际化，可以这样配置，如下：
In addition, for HBuilderX, in the manifest.json file, the privacy permission description under the "IOS Privacy Information Access Permission Description" column in the "Module Permission Configuration" item can be configured as follows:

1、将manifest.json页面切换到“模块权限配置”项，在“iOS隐私信息访问的许可描述”栏下配置应用需要使用到的隐私描述信息：
1、 Switch the manifest.json page to the "Module permission configuration" item, and configure the privacy description information that the application needs to use under the "IOS privacy information access permission description" column:

![](https://ask.dcloud.net.cn/uploads/article/20190420/a19ff51f22c97f0af9add83788878684.png)

2、输入完成后切换到代码视图，uni-app项目在"app-plus"->"distribute"->"ios"->"privacyDescription"节点下可看到输入的内容：
2、 After the input is complete, switch to the code view. The uni-app project can see the input content under the "app-plus"->"distribute"->"ios"->"privacyDescription" node:

![](https://ask.dcloud.net.cn/uploads/article/20190420/8f37db8f8bf2ada8d86612f1f93c4229.png)

3、将"privacyDescription"节点下的key（NSPhotoLibraryUsageDescription）和值按下图的方式拷贝到InfoPlist.strings下对应的语言文件里去。
3、 Copy the key (NSPhotoLibraryUsageDescription) and value under the "privacyDescription" node to the corresponding language file under InfoPlist.strings as shown in the figure below.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/infokey1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/infokey2.png)

完整可配置的隐私项可参考[苹果官网](https://developer.apple.com/documentation/bundleresources/information_property_list)中以“NS”开头、“Description”结尾的项。
For complete configurable privacy items, please refer to the items starting with "NS" and ending with "Description" in [Apple's official website](https://developer.apple.com/documentation/bundleresources/information_property_list).


### 如何配置多渠道
### How to configure multichannel
在需要的打包的原生工程中找到工程的配置文件-Info.plist ，然后添加marketChannel节点，节点内容格式为：包名|应用标识|广告标识|渠道 如io.dcloud.HB|appid|adid|apple
Find the project configuration file -Info.plist in the required packaged native project, and then add the marketChannel node. The content format of the node is: package name|app ID|advertising ID|channel such as io.dcloud.HB|appid|adid|apple

包名：对应xcode里的bundleid，如io.dcloud.HBuilder。
Package name: corresponds to the bundleid in xcode, such as io.dcloud.HBuilder.

应用标识：对应uni-app项目manifest.json中appid。
Application ID: corresponding to the appid in the manifest.json of the uni-app project.

广告标识：DCloud的广告标识，开通广告后可在dev.dcloud.net.cn获取，如果没有开通广告，设置值为空即可。
Advertising ID: DCloud’s advertising ID, which can be obtained at dev.dcloud.net.cn after the advertisement is activated. If the advertisement is not activated, the setting value can be empty.
渠道：可以填apple。
Channel: you can fill in apple.

### 如何配置暗黑模式
1. 在需要的打包的原生工程中找到工程的配置文件-Info.plist，移除UIUserInterfaceStyle节点(若不想支持暗夜模式，添加该节点并将该节点的值修改为Light或Dark即可，其中Light为始终显示默认高亮模式，Dark为始终显示暗夜模式，值为String类型)
2. 如需设置启动时的默认模式，在上述Info.plist文件中添加DCloudConfig节点(如已有无需再次添加，节点类型为Dictionary)，在该节点下添加defaultTheme节点(值类型为String），根据需求添加light(高亮)、dark(暗夜)、auto(跟随系统)即可

### 如何配置广告
### How to configure ads
[如何配置广告](/AppDocs/usemodule/iOSModuleConfig/uniad.md)
[How to configure Ads](/AppDocs/usemodule/iOSModuleConfig/uniad.md)

### 如何配置3D Touch
### How to configure 3D Touch
[配置3D Touch](/AppDocs/usesdk/iosOther/3DTouch.md)
[Configure 3D Touch](/AppDocs/usesdk/iosOther/3DTouch.md)


### 如何配置IDFA
### How to configure IDFA

##### 如果您的应用符合下面其中一条就需要配置 IDFA ，反之可以不配置
##### If your application meets one of the following, you need to configure IDFA, otherwise you don’t need to configure it

- 只要您的应用使用了uni-AD广告模块，就需要开启 IDFA；
- As long as your app uses the uni-AD advertising module, you need to enable IDFA;
- 使用的 离线SDK 版本低于 3.2.15 并且应用使用了**新浪微博登录和分享、一键登录、友盟统计** 其中一个或多个功能模块，这些SDK内会触发获取IDFA，所以需要开启 IDFA **（注：HX 3.2.15及以上版本更新了这些三方SDK，不在获取IDFA）**
- The offline SDK version used is lower than 3.2.15 and the application uses one or more functional modules of **Sina Weibo login and sharing, one-click login, and Youmeng statistics**. These SDKs will trigger the acquisition of IDFA, so IDFA needs to be turned on ** (Note: HX 3.2.15 and above have updated these three-party SDKs, and no longer get IDFA)**

1、在工程 `TARGETS->Build Phases-> Link Binary With Libaries` 中点击“+”按钮，在弹出的窗口中点击 `Add Other -> Add Files...`，将 “SDK/Resources/Libs” 中的 `liblibAdSupport.a` 和 `AppTrackingTransparency.framework（系统库）` 添加到工程中，注意 AppTrackingTransparency.framework 的 Status 选择 Optional ，如下图所示
![](https://img.cdn.aliyun.dcloud.net.cn/client/doc/ios/attframework.png)

2、在工程的 info.plist 中添加 `NSUserTrackingUsageDescription` 权限描述，详情请参考 [iOS平台配置应用使用广告标识（IDFA）](https://ask.dcloud.net.cn/article/36107) 中的说明填写；
![](https://img.cdn.aliyun.dcloud.net.cn/client/doc/ios/trackingDes.png)

3、开启广告标识（IDFA）后，提交App Store审核之前，需要在App Store Connect 配置 “App 隐私”，详情请参考[iOS平台配置应用使用广告标识（IDFA）](https://ask.dcloud.net.cn/article/36107) 中的说明；
3、 After enabling IDFA, before submitting to the App Store for review, you need to configure "App Privacy" in App Store Connect. For details, please refer to [iOS platform configuration application using IDFA](https://ask.dcloud .net.cn/article/36107);



###  如何配置启动时是否注册Push
### How to configure whether to register Push at startup
1、如果希望在应用启动时不弹出"发送通知"系统授权框，可以不向系统注册要使用消息推送功能，配置方法如下：
1、 If you do not want to pop up the "Send Notification" system authorization box when the application starts, you can use the message push function without registering with the system. The configuration method is as follows:
    找到工程里的info.plist文件，然后配置dcloud_push_register_mode字段，值为manual。
    Find the info.plist file in the project, and configure the dcloud_push_register_mode field with a value of manual.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/pushRegister.png)

2、如果希望在应用启动时弹出"发送通知"系统授权框，不需要做任何配置。
2、 If you want the "Send Notification" system authorization box to pop up when the app starts, no configuration is required.

[iOS平台隐私与政策提示框实现注意问题](https://ask.dcloud.net.cn/article/36955)
[IOS platform privacy and policy prompt box implementation attention issues](https://ask.dcloud.net.cn/article/36955)


### 如何配置iOS平台的某些较特殊的功能
### How to configure some special functions of the iOS platform
[平台功能配置](/AppDocs/usesdk/iosOther/project.md)
[Platform function configuration](/AppDocs/usesdk/iosOther/project.md)

### 如何处理提交审核时提示有其他支付并隐藏功能被拒的问题
### How to deal with the problem that other payment and hidden functions are rejected when submitting for review
[点击处理办法](https://ask.dcloud.net.cn/article/36447)
[Click processing methods](https://ask.dcloud.net.cn/article/36447)

### 如何用离线打包工程制作自定义调试基座
### How to make a custom debugging base with an offline package project
1、在打包原生工程里找到 control.xml文件，在HBuilder节点里查看是否有这2个： debug="true"  syncDebug="true" 配置(注意-打AppStore包的时候，这个配置需要去掉，否则会导致热更新失败！)，没有的话增加上，然后保存。
1、 Find the control.xml file in the packaged native project, and check whether there are these two in the HBuilder node: debug="true" syncDebug="true" configuration (note - when packaging the AppStore package, this configuration needs to be removed, otherwise It will cause the hot update to fail!), if not, add it, and then save it.

![](https://ask.dcloud.net.cn/uploads/article/20190115/a0f6ee9a9eb0536f7a0e3cd42b4cb133.png)

2、 确保Xcode工程的Bundle identifier不为 io.dcloud.HBuidler。
2、 Make sure that the Bundle identifier of the Xcode project is not io.dcloud.HBuidler.

3、在原生工程里找到info.plist文件并增加一项，如下图：
3、 Find the info.plist file in the native project and add an item, as shown below:

![](https://ask.dcloud.net.cn/uploads/article/20190115/bd9b12b4d150001d5bb4b38d3e636e7f.jpg)

4、确保原生工程里Pandora文件夹下的apps文件夹里只有一个文件夹（文件夹的名称和里面的manifest的id值相同）
4、 Make sure that there is only one folder in the apps folder under the Pandora folder in the native project (the name of the folder is the same as the id value of the manifest inside)

5、确保control.xml文件里的appid的值和apps目录下的第一个文件夹的名称一致
5、 Make sure that the value of appid in the control.xml file is consistent with the name of the first folder in the apps directory

6、确保HBuilderX里要调试的代码的appid和control.xml的appid值一致
6、 Make sure that the appid of the code to be debugged in HBuilderX is consistent with the appid value of control.xml

7、使用Xcode的Product下的archive 打包，然后生成ipa，并把ipa名称命名为：iOS_debug.ipa
7、 Use the archive package under the Product of Xcode, then generate ipa, and name the ipa: iOS_debug.ipa

8、在js工程里主目录下新建一个名称为unpackage的文件夹（如果有不用新建），再在unpackage文件夹下新建一个名称为debug文件夹，并把生成的iOS_debug.ipa包放入debug文件夹。
8、 Create a folder named unpackage in the main directory of the js project (if there is no need to create a new one), then create a folder named debug under the unpackage folder, and put the generated iOS_debug.ipa package into the debug file folder.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/debug.png)

9、在HBuildX里，找到之前appid相同的js工程准备调试，点击“运行” --“运行到手机或模拟器“--“使用自定义基座运行（iOS）”，等待连接成功之后就可以了。
9、 In HBuildX, find the js project with the same appid before and prepare for debugging, click "Run" -- "Run to mobile phone or simulator" -- "Run with custom base (iOS)", wait for the connection to be successful up.

### 隐私清单
SDK 4.13之后的版本在示例工程中包含基础模块的隐私清单，4.13之前版本也可以直接用4.13的隐私清单
基础模块隐私清单如下所示：
![基础模块隐私清单](https://web-ext-storage.dcloud.net.cn/doc/app/ios/native-sdk-core-privacyinfo.jpg)

> 集成[uni-AD模块](/AppDocs/usemodule/iOSModuleConfig/uniad.md)以及[统计模块](/AppDocs/usemodule/iOSModuleConfig/statistic.md)需要根据该模块的文档补充填写隐私清单
> 
## 运行
## run

连接手机，编译运行，如果App成功跑起来了，说明原生工程配置完成。
Connect the mobile phone, compile and run, if the App runs successfully, it means that the native project configuration is completed.
