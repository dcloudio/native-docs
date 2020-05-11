## 开发环境

-  OS X 10.14.0+、Xcode 11.0+ 
-  [HBuilderX下载](https://www.dcloud.io/hbuilderx.html)
- App离线SDK下载：[最新iOS平台SDK下载](/AppDocs/download/ios.md)
- 确保版本一致,请确保从HBuilderX导出的打包资源的HBuilderX的版本号和App离线SDK发布的版本号是一致的，如下2张图里的版本号：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbeny1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbeny2.png)

**注意：如果版本不一致，app启动时会弹出版本不一致的提示框，并且可能导致功能异常**


## SDK目录说明

~~~
    |-- HBuilder-Hello       给用户打5+app、uni-app项目的离线打包工程
    |-- Feature-iOS.xls      配置表（依赖的库、资源文件、参数配置等）
    |-- SDK                 工程需要的库文件，.h头文件，配置文件，资源文件
~~~

- 详细说明:[App离线SDK内不同文件的作用](/AppDocs/usesdk/iOSReadMe.md)

<!--  ## 准备工程
### 新建一个Xcode工程，步骤如下：
1、打开Xcode，创建新工程，选择“Single View Application”
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createxcode.jpg)

2、添加创建工程的名称（注意：最好不要填中文或特殊字符）
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createPname.jpg)
 -->


## 配置工程 
      找到App离线SDK压缩包，并解压，再进入目录；找到HBuilder-Hello文件夹，并打开原生工程，然后准备配置工程。
### uni-app项目
      App离线SDK中的HBuilder-Hello文件夹下的打包工程 是按照uni-app项目来配置的，所以基础配置不需要动。
### 5+app项目
	如果您是5+app项目，为了减少ipa包的大小，可以相应的删除一些配置，可删除的配置如下：
	    
|库|js文件|其他|
|:--|:--|:--|
|liblibWeex.a|weex-main-jsfm.js、weex-main-jsfm-nvue-uni.js、weex-main-jsfm-nvue.js、weex-main-jsfm-uni.js、weex-polyfill.js、uni-jsframework.js、uni-app-service.js、weexUniJs.js、__uniappes6.js | unincomponents.ttf|


<!-- 
### 基础模块配置
 
1、从离线包中的HBuilder-Hello工程里找到AppDelegate和ViewController的.h和.m文件,
然后覆盖掉刚创建的工程里的相应文件
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createdeCo.jpg)

2、拷贝以下文件到新创建工程目录下

iOSSDK/SDK/Bundles/PandoraApi.bundle

iOSSDK/SDK/control.xml

iOSSDK/SDK/Libs/liblibPDRCore.a

iOSSDK/SDK/Libs/libcoreSupport.a

iOSSDK/SDK/Libs/liblibUI.a

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createkaobei.jpg)

注意：如果是uni-app项目，必须参考这遍[文章](https://ask.dcloud.net.cn/article/35871)


3、添加刚才拷贝的文件到工程内

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/creattjia.jpg)

4、拷贝IOS-SDK/SDK/inc目录到新创建工程目录下，并添加到工程内

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/creatotherlink.jpg)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createinc1.jpg)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createinc2.jpg)

5、点击Project->TARGETS->Build Settings搜索“Other Linker Flags”，双击搜索到的项双击，在弹出框内添加想“-ObjC”
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createother.jpg)

6、点击Projcet->General->Linked Frameworks and Libraries 添加系统库到工程

|  系统库 |
| :------: |
| JavaScriptCore.framework,WebKit.framework,CoreTelephony.framework,MobileCoreServices.framework,SystemConfiguration.framework|
| MediaPlayer.framework, AudioToolbox.framework,Security.framework,QuartzCore.framework,CFNetwork.framework|
|Foundation.framework,CoreFoundation.framework,CoreGraphics.framework,UIKit.framework,QuickLook.framework,libc++.tbd|
|libxml2.tbd,libz.tbd,libsqlite3.0.tbd ,ImageIO.framework,CoreText.framework,UserNotifications(设置为Optianal)|

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/creatextk.jpg)

7、 修改BitCode
点击Project->TARGETS->Build Settings搜索BitCode
将Enable Bitcode项的值改成 ‘NO’
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createbitcode.jpg)

 8、点击Project->TARGETS->Build Settings搜索“ARC”，修改"Objective-C Automatic Reference Counting"项的值为"NO", 如果希望使用ARC则需要修改相应的内存管理代码。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createARC.jpg)

8、 修改info.plist文件，添加App Transport Security Settings类型为Dictionary，在该项下添加Allow Arbitrary Loads项类型为Boolean，值为YES

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/createinfo.jpg)
 -->


### 配置应用标识(Boundle Identifier)

选择左侧应用工程根目录，选中TARGETS下的HBuilder打开工程属性界面，在General下修改Identity的值：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongboundleID.png)

其中,Bundle Identifier为苹果的AppID，必须与应用发布时配置的Profile关联的AppID一致；

Version为应用版本号，在App Store中显示的版本号，推荐与manifest.json中version下的name值一致；

Build为编译版本号，App Store判断升级使用，推荐与manifest.json中version下的code值一致。


###  配置应用名称 

1、在打开的原生工程中，点击工程的targets和点开manifest文件，然后将manifest文件里的“name”字段的内容 和原生工程里的Display Name 的写成一样。

注意，manifest文件里的”name“ 对应的是HBuilderX打开的工程里的“基础配置”里的应用名称。如下图红色框所示：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongmc1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongmc2.png)

###  配置应用版本名称 
在打开的原生工程中，点击工程的targets和点开manifest文件，然后将manifest文件里的“version”字段里的“name”的内容 和原生工程里的Version 的写成一样。注意，manifest文件里的“version”字段里的“name” 对应的是HBuilderX打开的工程里的“基础配置”里的应用版本名称。如下图红色框所示：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbmc1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbmc2.png)



###  配置应用版本号 
在打开的原生工程中，点击工程的targets和点开工程里的manifest文件，然后将manifest文件里的“version”字段里的“code”的内容 和原生工程里的Build 的写成一样。注意，manifest文件里的“version”字段里的“code” 对应的是HBuilderX打开的工程里的“基础配置”里的应用版本号。如下图红色框所示：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbh1.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongbanbh2.png)

### 配置应用的图标
点击project->target->General->App Icons and Launch Images->App Icons Source项右侧小箭头
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongicon1.jpg)
在新开页面根据提示将对应尺寸的应用图标拖入到虚线框中即可
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongicon2.jpg)

### 配置应用启动界面
<!-- #### 第一种Launch Images Source方式
1、按下图所示，在配置的地方设置为空，这样配置之后启动界面就会是splash目录里配置的图了，就不会是LaunchScreen.storyboard 作为启动界面了。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongqdtu1.png)

2、拷贝HBuider-Hello工程的info.plist文件的UILaunchImages节点到新工程info.plist文件，同时拷贝HBuilder-Hello工程下的splash目录到新工程目录下并将其添加到新工程中
根据图片的尺寸逐个替换splash图片，注意文件名不能修改

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/gongqdtu2.jpg)
#### 第二种Launch Screen File方式
 -->

1、按下图方法配置Launch Screen File，这样配置之后启动界面就会是设置的LaunchScreen.storyboard。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/launchSrreen1.png)

2、使用官方已经制作好的storyboard，官方提供了2个storyboard，一个是图标、名称在上方的；另外一个是图标、名称在下方的(这种的LaunchScreen.storyboard主要是适配用户配置广告后，使其启动时不会有视觉上的跳跃感，增加用户体验)。
注意：在使用Launch Screen File方式作为启动界面时，需要把一张或几张清晰的图标拷贝到工程的根文件夹下并引入到工程中，
用来给启动界面加载图标。如果拷贝过去的图标不清晰，会导致启动界面上出现图标不清晰、模糊的现象。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/other/launcher1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/other/launcher2.png)


3、制作LaunchScreen.storyboard(这个storyboard的名称是可以自定义的)，如果想自定义LaunchScreen.storyboard，
这需要你会原生知识，知道怎样创建Launch Screen File，知道怎样在storyboard中布局视图，设置约束等。

     注意，这里的storyboard，不是普通的storyboard；
	 注意，配置了广告之后，如果自定义的LaunchScreen.storyboard约束没设置好，会有启动页到广告页跳跃的视觉效果。

### 配置国际化，有2部分：

第一部分：内容相关的国际化，离线打包时如果弹出提示框且内容为：“HTML5+ Rumtime D”时，需要在打包的原生工程里配置国际化[如何配置]( https://ask.dcloud.net.cn/article/35963)

第二部分：Info.plist的国际化，新建一个 .strings文件，叫做InfoPlist.strings（文件名必须是这个）然后点击右侧的 localized，
再在工程导航界面，选择InfoPlist.strings文件，比如添加key为CFBundleDisplayName，值为应用名字（HBuilder你好），InfoPlist.strings(English)为英文系统,Simplified为中文简体系统

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/bundledisplay2.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/bundledisplay1.png)

另外，对HBuilderX，manifest.json文件里，“模块权限配置”项中的“iOS隐私信息访问的许可描述”栏下的隐私权限描述国际化，可以这样配置，如下：

1、将manifest.json页面切换到“模块权限配置”项，在“iOS隐私信息访问的许可描述”栏下配置应用需要使用到的隐私描述信息：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190420/a19ff51f22c97f0af9add83788878684.png)

2、输入完成后切换到代码视图，uni-app项目在"app-plus"->"distribute"->"ios"->"privacyDescription"节点，5+ APP项目在"plus"->"distribute"->"apple"->"privacyDescription"节点下可看到输入的内容：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190420/8f37db8f8bf2ada8d86612f1f93c4229.png)

3、将"privacyDescription"节点下的key（NSPhotoLibraryUsageDescription）和值按下图的方式拷贝到InfoPlist.strings下对应的语言文件里去。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/infokey1.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/infokey2.png)

完整可配置的隐私项可参考[苹果官网](https://developer.apple.com/documentation/bundleresources/information_property_list)中以“NS”开头、“Description”结尾的项。


### 如何配置多渠道
在需要的打包的原生工程中找到工程的配置文件-Info.plist ，然后添加marketChannel节点，节点内容格式为：包名|应用标识|广告标识|渠道 如io.dcloud.HB|appid|adid|apple

包名：对应xcode里的bundleid，如io.dcloud.HBuilder。

应用标识：对应5+或uni-app项目manifest.json中appid。

广告标识：DCloud的广告标识，开通广告后可在dev.dcloud.net.cn获取，如果没有开通广告，设置值为空即可。
渠道：可以填apple。


### 如何配置广告
[如何配置广告](/AppDocs/usemodule/iOSModuleConfig/uniad.md)

### 如何配置3D Touch
[配置3D Touch](/AppDocs/usesdk/iosOther/3DTouch.md)


### 如何配置IDFA
首先要知道：打开IDFA不影响AppStore审核
如何知道项目中是否使用广告标示符，其实就是查看framework中是否有个叫AdSupport.framework的框架，如果检查工程中没有AdSupport.framework,可能是接入的第三方库里面有,用以下方法检查第三方中是否包含有IDFA版本：

1、打开终端cd到要检查的文件的目录;

2、执行命令:grep -r advertisingIdentifier .  (注意别少了点);

[iOS平台配置应用使用广告标识（IDFA）](https://ask.dcloud.net.cn/article/36107)



###  如何配置启动时是否注册Push
1、如果希望在应用启动时不弹出"发送通知"系统授权框，可以不向系统注册要使用消息推送功能，配置方法如下：
    找到工程里的info.plist文件，然后配置pushRegisterMode字段，值为manual。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/IntegrationProject/pushRegister.png)

2、如果希望在应用启动时弹出"发送通知"系统授权框，不需要做任何配置。

[iOS平台隐私与政策提示框实现注意问题](https://ask.dcloud.net.cn/article/36955)


### 如何配置iOS平台的某些较特殊的功能
[平台功能配置](/AppDocs/usesdk/iosOther/project.md)

### 如何处理提交审核时提示有其他支付并隐藏功能被拒的问题
[点击处理办法](https://ask.dcloud.net.cn/article/36447)

### 如何用离线打包工程制作自定义调试基座
1、在打包原生工程里找到 control.xml文件，在HBuilder节点里查看是否有这2个： debug="true"  syncDebug="true" 配置，没有的话增加上，然后保存。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190115/a0f6ee9a9eb0536f7a0e3cd42b4cb133.png)

2、 确保Xcode工程的Bundle identifier不为 io.dcloud.HBuidler。

3、在原生工程里找到info.plist文件并增加一项，如下图：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190115/bd9b12b4d150001d5bb4b38d3e636e7f.jpg)

4、确保原生工程里Pandora文件夹下的apps文件夹里只有一个文件夹（文件夹的名称和里面的manifest的id值相同）

5、确保control.xml文件里的appid的值和apps目录下的第一个文件夹的名称一致

6、确保HBuilderX里要调试的代码的appid和control.xml的appid值一致

7、使用Xcode的Product下的archive 打包，然后生成ipa，并把ipa名称命名为：iOS_debug.ipa

8、在js工程里主目录下新建一个名称为unpackage的文件夹（如果有不用新建），再在unpackage文件夹下新建一个名称为debug文件夹，并把生成的iOS_debug.ipa包放入debug文件夹。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/unimpimgs/debug.png)

9、在HBuildX里，找到之前appid相同的js工程准备调试，点击“运行” --“运行到手机或模拟器“--“使用自定义基座运行（iOS）”，等待连接成功之后就可以了。

## 运行

连接手机，编译运行，如果App成功跑起来了，说明原生工程配置完成。
