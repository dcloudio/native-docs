## 简介
## Introduction

本文档主要介绍如何在 iOS 平台开发 uni-app 原生插件，在您阅读此文档时，您需要具备 iOS 应用开发经验，对 HTML、JavaScript、CSS 等前端开发有一定的了解，并且熟悉在JavaScript 和 Objective-C 环境下的 JSON 格式数据操作等。
This document mainly introduces how to develop uni-app native plug-ins on the iOS platform. When you read this document, you need to have iOS application development experience, have a certain understanding of HTML, JavaScript, CSS and other front-end development, and be familiar with JavaScript and Objective - JSON format data manipulation in C environment, etc.

### 什么是uni原生插件
### What is uni native plugin
uni原生插件指的是将您原生开发的功能按照规范封装成插件包，然后即可在 `uni-app` 前端项目中通过`js`调用您开发的原生能力。
The uni native plug-in refers to encapsulating your natively developed functions into a plug-in package according to the specifications, and then calling the native capabilities you develop through `js` in the `uni-app` front-end project.

## 开发环境
## Development environment

- iOS开发环境，Xcode14 及以上版本
- 下载开发插件需要的 [SDK包](AppDocs/download/ios.md) 并解压
- Download the [SDK package](AppDocs/download/ios.md) needed to develop the plug-in and decompress it
- 安装 uni-app 开发工具 [HBuilderX](http://www.dcloud.io/hbuilderx.html) 
- Install the uni-app development tool [HBuilderX](http://www.dcloud.io/hbuilderx.html)

### SDK 包结构说明
### SDK package structure description

```
|--iOSSDK	
	|-- HBuilder-Hello				// uni-app 离线打包工程
	|-- HBuilder-uniPluginDemo		// uni-app 插件开发主工程 （本文档需要使用的工程）
	|-- SDK							// 依赖库及依赖资源文件
	|-- Feature-iOS.xls				// 功能模块与依赖库对应关系说明表格
	|-- readme.txt					// 目录说明
```

SDK 目录中的 `HBuilder-uniPluginDemo`为 **uni原生插件开发主工程**，该工程已经将各项配置都配置齐全，开发uni原生插件需要依赖此工程，本文档的插件示例工程`DCTestUniPlugin`也在目录中，另外插件市场的 [原生增强提示框插件](https://ext.dcloud.net.cn/plugin?id=36) 对应的原生插件工程`DCRichAlert`也放到了此目录中提供给开发者作为参考，其他工程及文件，开发uni原生插件不需要关心，如果想了解更多可以参考 App离线打包 [相关文档](AppDocs/README.md)
The `HBuilder-uniPluginDemo` in the SDK directory is the main project for **uni native plug-in development**. This project has been fully configured with all configurations. The development of uni native plug-ins needs to rely on this project. The plug-in example project `DCTestUniPlugin` in this document It is also in the directory, and the native plug-in project `DCRichAlert` corresponding to [Native Enhanced Prompt Box Plug-in](https://ext.dcloud.net.cn/plugin?id=36) in the plug-in market is also placed in this directory. As a reference for developers, other projects and documents, you don’t need to care about developing uni native plug-ins. If you want to know more, you can refer to App Offline Packaging [Related Documents](AppDocs/README.md)

## 创建插件工程
## Create plugin project

打开 Xcode，创建一个新的工程，template 选择 `Framework` 或 `Static Library`（示例工程选择的是 Framework），然后点击 `Next`
Open Xcode, create a new project, select `Framework` or `Static Library` for template (the example project selects Framework), and then click `Next`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi1.png)


在 Product Name 中输入插件工程名称（建议使用一个性化的前缀，避免与其他人的插件包名冲突），其他项不需要修改保持工程默认填充的即可，然后点击`Next`
Enter the name of the plug-in project in Product Name (it is recommended to use a personalized prefix to avoid conflicts with other people’s plug-in package names), and other items do not need to be modified, just keep the default filling of the project, and then click `Next`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi2.png)

然后选择工程存放路径，建议直接存放在 iOSSDK目录中的 `HBuilder-uniPluginDemo` 插件开发主工程目录下，如下图所示，然后点击 `Create`
Then select the project storage path. It is recommended to store it directly in the `HBuilder-uniPluginDemo` plug-in development main project directory in the iOSSDK directory, as shown in the figure below, and then click `Create`
> 强烈建议将插件工程存放在 `HBuilder-uniPluginDemo` 插件开发主工程目录中，因为插件工程需要根据插件开发主工程相对路径引用一些文件，之后您升级SDK的时候只需要将您的插件工程 Copy 到新的 SDK 的相同位置下即可
> It is strongly recommended to store the plug-in project in the `HBuilder-uniPluginDemo` plug-in development main project directory, because the plug-in project needs to refer to some files according to the relative path of the plug-in development main project, and then when you upgrade the SDK, you only need to copy your plug-in project to Just under the same location of the new SDK

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi2-1.png)

可以删除工程自动创建的 .h 文件，这个文件用不到
You can delete the .h file automatically created by the project, this file is not used

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi3.png)

然后选中工程名，在`TARGETS->Build Settings`中，将 `Mach-O Type` 设置为 `Static Library` 如下图所示
Then select the project name, in `TARGETS->Build Settings`, set `Mach-O Type` to `Static Library`, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi3-1.png)

然后将插件工程关闭，接下来需要将插件工程导入到插件开发主工程中
Then close the plug-in project, and then you need to import the plug-in project into the main plug-in development project

## 导入插件工程
## Import plugin project

打开 `iOSSDK/HBuilder-uniPluginDemo`工程目录，双击目录中的`HBuilder-uniPlugin.xcodeproj` 文件运行插件开发主工程
Open the `iOSSDK/HBuilder-uniPluginDemo` project directory, double-click the `HBuilder-uniPlugin.xcodeproj` file in the directory to run the main plug-in development project

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi3-2.png)

在 Xcode 项目左侧目录选中**主工程名**，然后点击右键选择`Add Files to “HBuilder-uniPlugin” ...`
Select **Main Project Name** in the directory on the left side of the Xcode project, then right-click and select `Add Files to “HBuilder-uniPlugin” ...`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi4.png)

然后选择您刚刚创建的插件工程路径中，选中插件工程文件，勾选 `Create folder references` 和 `Add to targets` 两项，然后点击`Add`
Then select the plug-in project path you just created, select the plug-in project file, check `Create folder references` and `Add to targets`, and click `Add`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi5.png)

这时在 Xcode 左侧目录中可以看到插件工程已经添加到了主工程中，如下图所示
At this time, in the directory on the left side of Xcode, you can see that the plug-in project has been added to the main project, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi6.png)

### 工程配置
### Project configuration

然后在 Xcode 项目左侧目录选中**主工程名**，在`TARGETS->Build Phases->Dependencies`中点击`+`
Then select **Main Project Name** in the directory on the left side of the Xcode project, and click `+` in `TARGETS->Build Phases->Dependencies`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi7.png)

在弹窗中选中插件工程，如图所示，然后点击`Add`，将插件工程添加到`Dependencies`中
Select the plug-in project in the pop-up window, as shown in the figure, and click `Add` to add the plug-in project to `Dependencies`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi8.png)

然后在`Link Binary With Libraries`中点击`+`，同样在弹窗中选中插件工程，点击`Add`
Then click `+` in `Link Binary With Libraries`, also select the plug-in project in the pop-up window, and click `Add`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi9.png)

此时可以看到 `Dependencies` 和 `Link Binary With Libraries` 都添加了插件工程，如下图所示
At this point, you can see that both `Dependencies` and `Link Binary With Libraries` have added plug-in projects, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi10.png)

接下来需要在插件工程的`Header Search Paths`中添加开发插件所需的头文件引用，头文件存放在主工程的`HBuilder-Hello/inc`中，添加方法如下图所示，在 Xcode 项目左侧目录选中**插件工程名**，找到`TARGETS->Build Settings->Header Search Paths`双击右侧区域打开添加窗口，然后将`inc`目录拖入会自动填充相对路径，然后将模式改成`recursive`
Next, you need to add the header file references required to develop the plug-in in the `Header Search Paths` of the plug-in project. The header file is stored in `HBuilder-Hello/inc` of the main project. The adding method is shown in the figure below. On the left side of the Xcode project Select **plug-in project name** in the side directory, find `TARGETS->Build Settings->Header Search Paths`, double-click the right area to open the add window, then drag the `inc` directory to automatically fill in the relative path, and then change the mode to `recursive`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi11.gif)

## 代码实现
## Code

### 写法说明
### Writing instructions
**从`HBuilderX 3.0.5` 版本开始， 推荐使用新的插件写法。**
**From the `HBuilderX 3.0.5` version, it is recommended to use the new plug-in writing method. **

如果插件按照新写法，出现云打包报错， 请先确认`HBuilderX`版本在`3.0.5`或其以上。
If the plug-in is written according to the new method and cloud packaging error occurs, please confirm that the version of `HBuilderX` is `3.0.5` or above.

### 插件扩展方式
### Plugin extension method
原生插件是基于 DCUniPlugin 规范来实现，扩展原生功能有两种方式：
Native plug-ins are implemented based on the DCUniPlugin specification. There are two ways to extend native functions:

- module：不需要参与页面布局，只需要通过 API 调用原生功能，比如：获取当前定位信息、数据请求等功能，通过扩展`module`的方式来实现；
- module: No need to participate in page layout, only need to call native functions through API, such as: obtain current location information, data request and other functions, and realize it by extending `module`;
- component：需要参与页面布局，比如：`map`、`image`等需要显示`UI`的功能，通过扩展`component`即组件的方法来实现；
- component: need to participate in the page layout, such as `map`, `image` and other functions that need to display `UI`, which are realized by extending `component`, that is, the method of components;
  
您需要根据实际的情况选择扩展方式，当然插件中可以同时存在 `module` 和 `component`，也可以是多个 `module` 和 多个 `component`；
You need to choose the extension method according to the actual situation. Of course, `module` and `component` can exist in the plug-in at the same time, or there can be multiple `module` and multiple `component`;

**特别注意**
**pay attention**
如果需要扩展自定义的 `module` 或者 `component` ，一定注意不要将 `oc` 的 `runtime` 暴露给 `JS` ，不要将一些诸如 `dlopen()`， `dlsym()`， `respondsToSelector:`，`performSelector:`，`method_exchangeImplementations()` 的动态和不可控的方法暴露给JS，也不要将系统的私有API暴露给JS。否则将可能面临苹果上架审核问题。
If you need to extend a custom `module` or `component`, be careful not to expose the `runtime` of `oc` to `JS`, and don’t use things such as `dlopen()`, `dlsym()`, `respondsToSelector: `, `performSelector:`, `method_exchangeImplementations()` dynamic and uncontrollable methods are exposed to JS, and do not expose the system's private API to JS. Otherwise, it may face the problem of Apple's listing review.


### 扩展 module
### Extension module
> 以`TestModule`为例，源码请查看 `iOSSDK/HBuilder-uniPluginDemo/DCTestUniPlugin` 插件工程；
> Take `TestModule` as an example, please refer to `iOSSDK/HBuilder-uniPluginDemo/DCTestUniPlugin` plug-in project for source code;

新建`TestModule`类，继承 `DCUniModule`，引入 `DCUniModule.h` 头文件。
Create a new `TestModule` class, inherit `DCUniModule`, and import the `DCUniModule.h` header file.




TestModule.h 文件
TestModule.h file

```objc
#import <Foundation/Foundation.h>
// 引入 DCUniModule.h 头文件
// import DCUniModule.h header file
#import "DCUniModule.h"

@interface TestModule : DCUniModule

@end

```

TestModule.h 文件截图：
Screenshot of TestModule.h file:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/testModuleH.jpg)

然后在 TestModule.m 文件中添加实现方法
Then add the implementation method in the TestModule.m file

**异步方法实现**
**Asynchronous method implementation**

```objc
/// 异步方法（注：异步方法会在主线程（UI线程）执行）
/// Asynchronous method (Note: The asynchronous method will be executed on the main thread (UI thread))
/// @param options js 端调用方法时传递的参数   支持：String、Number、Boolean、JsonObject 类型
/// @param options The parameters passed when calling the method on the js side Support: String, Number, Boolean, JsonObject type
/// @param callback 回调方法，回传参数给 js 端   支持： NSString、NSDictionary（只能包含基本数据类型）、NSNumber 类型
/// @param callback Callback method, return parameters to js side Support: NSString, NSDictionary (can only contain basic data types), NSNumber type
- (void)testAsyncFunc:(NSDictionary *)options callback:(UniModuleKeepAliveCallback)callback { 
    
    // options 为 js 端调用此方法时传递的参数 NSLog(@"%@",options); // 可以在该方法中实现原生能力，然后通过 callback 回调到 js 
    // options is the parameter passed when calling this method on the js side NSLog(@"%@",options); // You can implement native capabilities in this method, and then call back to js through callback
 
   if (callback) {
       // 第一个参数为回传给js端的数据，第二个参数为标识，表示该回调方法是否支持多次调用，如果原生端需要多次回调js端则第二个参数传 YES;
       // The first parameter is the data sent back to the js side, and the second parameter is the identifier, indicating whether the callback method supports multiple calls. If the native side needs to call back the js side multiple times, the second parameter is YES;
        callback(@"success",NO);

    }
}
```

通过宏 `UNI_EXPORT_METHOD` 将异步方法暴露给 js 端，只有通过`UNI_EXPORT_METHOD`暴露的原生方法才能被 js 端识别到
The asynchronous method is exposed to the js side through the macro `UNI_EXPORT_METHOD`, and only the native method exposed through `UNI_EXPORT_METHOD` can be recognized by the js side

``` Objective-C
// 通过宏 UNI_EXPORT_METHOD 将异步方法暴露给 js 端
// Expose the asynchronous method to the js side through the macro UNI_EXPORT_METHOD
UNI_EXPORT_METHOD(@selector(testAsyncFunc:callback:))
```

**同步方法实现**
**Synchronous method implementation**

``` objc
/// 同步方法（注：同步方法会在 js 线程执行）
/// Synchronous method (note: the synchronous method will be executed on the js thread)
/// @param options js 端调用方法时传递的参数   支持：String、Number、Boolean、JsonObject 类型
/// @param options The parameters passed when calling the method on the js side Support: String, Number, Boolean, JsonObject type
- (NSString *)testSyncFunc:(NSDictionary *)options {
    // options 为 js 端调用此方法时传递的参数
    // options is the parameter passed when calling this method on the js side
    NSLog(@"%@",options);

    /*
     可以在该方法中实现原生功能，然后直接通过 return 返回参数给 js
     */

    // 同步返回参数给 js 端  支持：NSString、NSDictionary（只能包含基本数据类型）、NSNumber 类型
    // Synchronously return parameters to the js side Support: NSString, NSDictionary (can only contain basic data types), NSNumber type
    return @"success";
}
```

通过宏 `UNI_EXPORT_METHOD_SYNC` 将同步方法暴露给 js 端
Expose the synchronous method to the js side through the macro `UNI_EXPORT_METHOD_SYNC`

``` objc
// 通过宏 UNI_EXPORT_METHOD_SYNC 将同步方法暴露给 js 端
// Expose the synchronous method to the js side through the macro UNI_EXPORT_METHOD_SYNC
UNI_EXPORT_METHOD_SYNC(@selector(testSyncFunc:))
```

TestModule.m 文件截图：
Screenshot of TestModule.m file:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/testModuleM.png)


#### Hook系统事件
#### Hook System Events
如果需要在 `App` 启动时初始化或者需要获取系统的一些事件， 需要新建一个`XXXXProxy`类（注意命名加前缀防止冲突），继承 `NSObject`
If you need to initialize when `App` starts or need to get some events of the system, you need to create a new `XXXXProxy` class (note that the name is prefixed to prevent conflicts), inheriting `NSObject`
遵守`UniPluginProtocol`协议
Comply with the `UniPluginProtocol` protocol

```
-(void)onCreateUniPlugin;

- (BOOL)application:(UIApplication *_Nullable)application didFinishLaunchingWithOptions:(NSDictionary *_Nullable)launchOptions;
- (void)didRegisterForRemoteNotificationsWithDeviceToken:(NSData *_Nullable)deviceToken;
- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *_Nullable)err;
- (void)didReceiveRemoteNotification:(NSDictionary *_Nullable)userInfo;
- (void)didReceiveLocalNotification:(UILocalNotification *_Nullable)notification;
- (BOOL)application:(UIApplication *_Nullable)application handleOpenURL:(NSURL *_Nullable)url;
- (BOOL)application:(UIApplication *_Nullable)app openURL:(NSURL *_Nonnull)url options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *_Nullable)options NS_AVAILABLE_IOS(9_0);

- (void)applicationWillResignActive:(UIApplication *_Nullable)application;
- (void)applicationDidBecomeActive:(UIApplication *_Nullable)application;
- (void)applicationDidEnterBackground:(UIApplication *_Nullable)application;
- (void)applicationWillEnterForeground:(UIApplication *_Nullable)application;


- (void)applicationMain:(int)argc argv:(char * _Nullable [_Nonnull])argv;

- (BOOL)application:(UIApplication *_Nullable)application continueUserActivity:(NSUserActivity *_Nullable)userActivity restorationHandler:(void(^_Nullable)(NSArray * __nullable restorableObjects))restorationHandler API_AVAILABLE(ios(8.0));
```

具体示例请查看 [离线SDK包](AppDocs/download/ios.md) 中 `HBuilder-uniPluginDemo/DCTestUniPlugin/DCTestUniPlugin/TestPluginProxy.m`
For specific examples, please see `HBuilder-uniPluginDemo/DCTestUniPlugin/DCTestUniPlugin/TestPluginProxy.m` in [Offline SDK Package](AppDocs/download/ios.md)


![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/TestPluginProxy_h.jpg)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/TestPluginProxy_m.jpg)

**Module 进阶**
**Module Advanced**

关于 `Module` 和 `Module` 方法的执行特性（同步、异步；执行线程），需要了解：
Regarding the execution characteristics of `Module` and `Module` methods (synchronous, asynchronous; execution threads), you need to know:

`uniExecuteThread`

`Module` 方法默认会在 `UI` 线程（`iOS` 主线程）中被调用，建议不要在这做太多耗时的任务。
The `Module` method will be called in the `UI` thread (`iOS` main thread) by default, it is recommended not to do too many time-consuming tasks here.

如果你的任务不需要在 `UI` 线程执行或需要在特定线程执行，需要实现 `DCUniModule` 中的 `uniExecuteThread` 的属性，并返回你希望方法执行所在的线程。
If your task does not need to be executed on the `UI` thread or needs to be executed on a specific thread, you need to implement the `uniExecuteThread` attribute in `DCUniModule` and return the thread where you want the method to execute.


**Module 自定义队列和线程**
**Module custom queue and thread**

在 `DCUniModule` 中可以通过 `uniExecuteQueue`来实现自定义 `queue`，通过`uniExecuteThread` 来实现自定义的 `thread`
In `DCUniModule`, you can implement custom `queue` through `uniExecuteQueue`, and implement custom `thread` through `uniExecuteThread`

**特别注意**
**pay attention**
如果同时指定了 `uniExecuteQueue` 和 `uniExecuteThread`, 只会执行 `uniExecuteQueue`, `uniExecuteThread`将会被忽略。
If both `uniExecuteQueue` and `uniExecuteThread` are specified, only `uniExecuteQueue` will be executed, and `uniExecuteThread` will be ignored.

如果只实现了 `uniExecuteThread`, 代码中注意 要线程保活
If only `uniExecuteThread` is implemented, pay attention to keep the thread alive in the code

参考示例代码
Reference sample code

```
    -(NSThread*)uniExecuteThread
{
    if ( nil == _uniExecuteThread) {
        _uniExecuteThread = [[NSThread alloc] initWithTarget:self selector:@selector(uniNewThread) object:nil];
        [_uniExecuteThread setName:@"TestUniModule"];
        [_uniExecuteThread start];
    }

    return _uniExecuteThread;
}

-(void)uniNewThread
{
    @autoreleasepool {
        NSRunLoop *runLoop = [NSRunLoop currentRunLoop];
        [runLoop addPort:[NSMachPort port] forMode:NSRunLoopCommonModes];
        [runLoop run];

    }
}
```


#### 配置插件信息
#### Configure plugin information
选中工程中的`HBuilder-uniPlugin-Info.plist`文件`右键->Open As->Source Code`找到`dcloud_uniplugins`节点，copy下面的内容添加到`dcloud_uniplugins`节点下，按您插件的实际信息填写对应的项
Select the `HBuilder-uniPlugin-Info.plist` file in the project `right click -> Open As->Source Code` to find the `dcloud_uniplugins` node, copy the content below and add it to the `dcloud_uniplugins` node, and fill in the actual information of your plugin corresponding item

```
<dict>
	<key>hooksClass</key>
	<string>填写 hooksClass 类名 </string>
	<key>plugins</key>
	<array>
		<dict>
			<key>class</key>
			<string>填写 module 或 component 的类名</string>
			<key>name</key>
			<string>填写暴露给js端对应的 module 或 component 名称</string>
			<key>type</key>
			<string>填写 module 或 component</string>
		</dict>
	</array>
</dict>
```

配置说明
Configuration instructions

- hooksClass：App系统方法钩子类，值是类名，是给有些插件需要在 app 启动时做初始化或者获取系统事件用的，如果没有可以不填为空
- hooksClass: App system method hook class, the value is the class name, which is used for some plug-ins that need to be initialized when the app starts or to obtain system events, if not, you can leave it blank
- class：module 或 component 对应的原生类名（示例中为 `TestModule`）
- class: the native class name corresponding to the module or component (`TestModule` in the example)
- name：暴露给js端使用的 module 或 component 对应的名称（注意：module 的 name 必须以**插件id为前缀或和插件id相同**，示例为`DCTestUniPlugin-TestModule`，**其中 DCTestUniPlugin 为插件的id，需要保证唯一性，避免与其他插件冲突**，component 的name 没有强制要求，但是也要保证唯一比如 `dc-map`）
- name: The name corresponding to the module or component exposed to the js side (note: the name of the module must be prefixed with **plugin id or be the same as the plugin id**, an example is `DCTestUniPlugin-TestModule`, where **DCTestUniPlugin is The id of the plug-in needs to be unique to avoid conflicts with other plug-ins**, the name of the component is not mandatory, but it must also be unique, such as `dc-map`)
- type：module 或 component （示例为`module`）
- type: module or component (example is `module`)

配置完如下图所示**（必须严格按照格式配置）**：
The configuration is shown in the figure below** (must be configured in strict accordance with the format)**:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi13-1.png)


到此，我们已经完成了一个简单的 module 扩展，接下来讲解如何在 uni-app 项目中调用刚刚扩展的 module 方法
So far, we have completed a simple module extension, and then we will explain how to call the newly extended module method in the uni-app project

#### 在 uni-app 项目中调用 module 方法
#### Call the module method in the uni-app project
module 支持在 vue 和 nvue 中调用，添加如下代码
module supports calling in vue and nvue, add the following code

```Javascript
<template>
	<div>
		<button type="primary" @click="testAsyncFunc">testAsyncFunc</button>
		<button type="primary" @click="testSyncFunc">testSyncFunc</button>
	</div>
</template>

<script>
	// 首先需要通过 uni.requireNativePlugin("ModuleName") 获取 module 
	// First you need to get the module through uni.requireNativePlugin("ModuleName")
	var testModule = uni.requireNativePlugin("DCTestUniPlugin-TestModule")
	export default {
		methods: {
			testAsyncFunc() {
				// 调用异步方法
				// call asynchronous method
				testModule.testAsyncFunc({
						'name': 'uni-app',
						'age': 1
					},
					(ret) => {
						uni.showToast({
							title:'调用异步方法 ' + ret,
							icon: "none"
						})
					})
			},
			testSyncFunc() {
				// 调用同步方法
				// call the synchronous method
				var ret = testModule.testSyncFunc({
					'name': 'uni-app',
					'age': 1
				})
				
				uni.showToast({
					title:'调用同步方法 ' + ret,
					icon: "none"
				})
			}
		}
	}
</script>
```

然后我们要生成 uni-app 项目的本地打包资源，导入到插件开发工程中，测试一下功能是否正常
Then we need to generate the local packaging resource of the uni-app project, import it into the plug-in development project, and test whether the function is normal

### 导入 uni-app 资源
### Import uni-app resources

#### 生成 uni-app 本地打包资源
#### Generate uni-app local packaging resources
本操作需要在 HBuilderX 中进行,需要您新建一个uni-app项目,
This operation needs to be done in HBuilderX, you need to create a new uni-app project,
并编写js端代码,最后导出本地资源
And write js-side code, and finally export local resources
`右键->发现->原生App-本地打包->生成本地打包App资源`
`Right-click->Discover->Native App-Local Packaging->Generate Local Packaged App Resources`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi14.png)

项目编译完成后会在 HBuilderX 控制台输出资源存路径，点击路径会自动打开资源所在文件夹
After the project is compiled, the resource storage path will be output on the HBuilderX console. Clicking on the path will automatically open the folder where the resource is located.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi15.png)

如下图所示，`__UNI_7F5F813`文件夹即为应用资源包（`__UNI_7F5F813` 为 uni-app 的 id）
As shown in the figure below, the `__UNI_7F5F813` folder is the application resource package (`__UNI_7F5F813` is the id of uni-app)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi16.png)

#### 导入 uni-app 资源
#### Import uni-app resources

接下来，将应用资源导入到插件开发主工程的`HBuilder-Hello/Pandora/apps/`中，如下图所示，直接拖进去即可
Next, import the application resources into `HBuilder-Hello/Pandora/apps/` of the main plug-in development project, as shown in the figure below, just drag it in

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi17.gif)

然后打开工程的 `control.xml` 文件，将 appid 改成 uni-app 的 id，如下图所示
Then open the `control.xml` file of the project, and change the appid to the id of uni-app, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi18.png)

然后运行项目测试，如下图所示（能调到 module 的方法，并且可以获取 module 返回的数据，则说明功能正常）
Then run the project test, as shown in the figure below (the method of the module can be transferred, and the data returned by the module can be obtained, indicating that the function is normal)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi19.gif)

#### 再次导入资源时注意事项
#### Precautions when importing resources again

**注**：前端代码修改后重新导入资源时，需要在插件开发工程中删除之前导入的资源，同时将模拟器或真机上的 App 删除，在按照上面的教程操作，避免因为缓存问题导致加载的还是旧的资源；
**Note**: When re-importing resources after the front-end code is modified, you need to delete the previously imported resources in the plug-in development project, and delete the app on the simulator or the real machine at the same time. Follow the above tutorial to avoid caching problems. The old resources are still loaded;

接下来，我们学习一下如何扩展 Component 
Next, let's learn how to extend Component

### 扩展组件 component 
### Extension component component
> 以`TestComponent`为例，源码请查看 `iOSSDK/HBuilder-uniPluginDemo/DCTestUniPlugin` 插件工程；
> Take `TestComponent` as an example, please refer to `iOSSDK/HBuilder-uniPluginDemo/DCTestUniPlugin` plug-in project for source code;

新建`TestComponent`类，继承`DCUniComponent`类（如果这个类里什么代码也不写，它和默认的的 `<view>` 组件能力是一致的）
Create a new `TestComponent` class and inherit the `DCUniComponent` class (if no code is written in this class, it is consistent with the default `<view>` component capabilities)

```Objective-C
#import "DCUniComponent.h"

@interface TestComponent : DCUniComponent

@end

```
 
#### 复写 `DCUniComponent` 中的生命周期方法
#### Override the lifecycle method in `DCUniComponent`

**- `loadView` 方法**
**- `loadView` method**

一个组件默认对应一个原生 view，如果未复写`loadView`方法提供自定义`view`，会默认调用基类方法返回一个继承于 `UIView` 的实例。比如我们要实现一个组件支持地图功能，我们可以返回系统的 `MKMapView`。
A component corresponds to a native view by default. If the `loadView` method is not overridden to provide a custom `view`, the base class method will be called by default to return an instance inherited from `UIView`. For example, if we want to implement a component to support the map function, we can return the system's `MKMapView`.

**注：**不需要为`view`设置`frame`，`view`的大小及位置由前端`css`决定
**Note: **There is no need to set `frame` for `view`, the size and position of `view` are determined by the front-end `css`

```Objective-C
- (UIView *)loadView {
    return [MKMapView new];
}
```

**- `viewDidLoad`**

如果需要对组件`view`做一些配置，比如设置`delegate`，在 `viewDidLoad` 生命周期方法中是一个比较好的时机
If you need to do some configuration on the component `view`, such as setting `delegate`, it is a better time in the `viewDidLoad` life cycle method

**注：**可以直接通过 `self.view` 获取 `view` 实例
**Note:** You can directly get `view` instance through `self.view`

```Objective-C
- (void)viewDidLoad {
      ((MKMapView*)self.view).delegate = self;
}
```

至此，已经完成了一个简单 component 的实现
So far, the implementation of a simple component has been completed

然后我们需要在`info.plist` 中添加 component 的配置信息，和 module 配置格式一样具体请参考 [配置插件信息](/NativePlugin/course/ios?id=配置插件信息)
Then we need to add component configuration information in `info.plist`, which is the same as module configuration format, please refer to [Configuration Plugin Information](/NativePlugin/course/ios?id=%E9%85%8D%E7%BD% AE%E6%8F%92%E4%BB%B6%E4%BF%A1%E6%81%AF)

- class：填写`TestComponent`
- class: fill in `TestComponent`
- name：填写`dc-testmap` **(在页面中使用时的组件名称，添加一个个性化的前缀，避免与其他组件冲突)**
- name: Fill in `dc-testmap` **(the component name when used in the page, add a personalized prefix to avoid conflicts with other components)**
- type：填写`component`
- type: fill in `component`

配置完后如下图所示
After configuration, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi20-1.png)

接下来可以在 uni-app 中使用组件
Then you can use the component in uni-app

#### 在 uni-app 中使用组件
#### Using components in uni-app
**注意：扩展的 component 只能在 `nvue` 文件中使用，不需要引入即可直接使用**
**Note: The extended component can only be used in the `nvue` file, it can be used directly without import**

在 uni-app 项目中新建 nvue 文件，加入下面的代码
Create a new nvue file in the uni-app project and add the following code

```Javascript
<template>
    <view>
        <dc-testmap style="width:750rpx;height:300px"></dc-testmap>
    </view>
</template>
```

然后生成本地打包资源，导入到插件开发工程中进行测试，具体操作参考文档上方的教程 [导入 uni-app 资源](/NativePlugin/course/ios?id=导入-uni-app-资源)
Then generate local packaging resources and import them into the plug-in development project for testing. For specific operations, refer to the tutorial above the document [Import uni-app resources](/NativePlugin/course/ios?id=%E5%AF%BC%E5%85% A5-uni-app-%E8%B5%84%E6%BA%90)

然后运行测试，效果如下图：
Then run the test, the effect is as follows:

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi21.png" width="35%">

刚刚做的组件只实现了 UI 显示，下面讲解组件的交互方式等一些高阶用法
The component just made only realizes the UI display, and some advanced usages such as the interaction method of the component are explained below

#### 自定义事件  
#### Custom Events

##### 对于每个组件默认提供了一些事件能力，如点击等。假如想给我们的地图组件提供 `mapLoaded` 事件。
##### For each component, some event capabilities are provided by default, such as click and so on. Let's say we want to provide a `mapLoaded` event to our map component.

uni-app 中是通过 `@事件名="方法名"` 添加事件，如下方代码所示在`nvue`中，给地图组件添加`mapLoaded` 事件
In uni-app, events are added through `@event name="method name"`, as shown in the code below In `nvue`, add a `mapLoaded` event to the map component

```Javascript
<template>
    <div>
        <dc-testmap style="width:750rpx;height:300px" @mapLoaded="onMapLoaded"></dc-testmap>
    </div>
</template>

<script>
export default {
    methods: {
        onMapLoaded:function(e) {
            // 原生端传递的数据保存在 e.detail 中
            // The data passed by the native end is stored in e.detail
            console.log("map loaded: "+JSON.stringify(e.detail))
        }
    }
}
</script>
```

##### 对应的原生端实现
##### Corresponding native implementation

我们需要添加一个 `BOOL` 类型成员变量 `mapLoadedEvent` 用来记录该事件是否生效，如下方代码所示：
We need to add a `BOOL` type member variable `mapLoadedEvent` to record whether the event is valid, as shown in the following code:

```Objective-C
/// 前端注册的事件会调用此方法
/// The event registered by the front end will call this method
/// @param eventName 事件名称
/// @param eventName event name
- (void)addEvent:(NSString *)eventName {
    if ([eventName isEqualToString:@"mapLoaded"]) {
        _mapLoadedEvent = YES;
    }
}

/// 对应的移除事件回调方法
/// Corresponding remove event callback method
/// @param eventName 事件名称
/// @param eventName event name
- (void)removeEvent:(NSString *)eventName {
    if ([eventName isEqualToString:@"mapLoaded"]) {
        _mapLoadedEvent = NO;
    }
}
```

##### 原生端向前端发送事件
##### The native end sends events to the front end
在地图加载完毕的方法中触发 mapLoaded 事件
Trigger the mapLoaded event in the method when the map is loaded

```Objective-C
- (void)mapViewDidFinishLoadingMap:(MKMapView *)mapView {
    if (_mapLoadedEvent) {
        // 向前端发送事件，params 为传给前端的数据 注：数据最外层为 NSDictionary 格式，需要以 "detail" 作为 key 值
        // Send events to the front end, params is the data passed to the front end Note: The outermost layer of the data is in NSDictionary format, and "detail" needs to be used as the key value
        [self fireEvent:@"mapLoaded" params:@{@"detail":@{@"mapLoaded":@"success"}} domChanges:nil];
    }
}
```


#### 自定义属性
#### Custom Attributes

给我们的地图组件添加一个新的属性`showTraffic`，在前端代码里可以控制组件是否显示路况信息
Add a new attribute `showTraffic` to our map component, which can control whether the component displays traffic information in the front-end code

```Javascript
<template>
    <div>
        <dc-testmap style="width:750rpx;height:300px" showTraffic="true"></dc-testmap>
    </div>
</template>
```

##### 对应的原生端实现
##### Corresponding native implementation

覆盖组件方法 `onCreateComponentWithRef...`
Override component method `onCreateComponentWithRef...`
给组件添加一个成员变量记录 `showTraffic` 属性的值，并在 init 方法中初始化
Add a member variable to the component to record the value of the `showTraffic` attribute and initialize it in the init method

```Objective-C
-(void)onCreateComponentWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events uniInstance:(DCUniSDKInstance *)uniInstance
{
    if (attributes[@"showsTraffic"]) {
        _showsTraffic = [DCUniConvert BOOL: attributes[@"showsTraffic"]];
    }
}
```

在生命周期方法中记得将属性值同步给地图控件
In the life cycle method, remember to synchronize the property value to the map control

```Objective-C
- (void)viewDidLoad {
  ((MKMapView*)self.view).showsTraffic = _showsTraffic;
}
```

当前端更新属性时，会触发`updateAttributes:`方法，同步给地图控件**
When the front-end updates the attributes, it will trigger the `updateAttributes:` method, which is synchronized to the map control**

```Objective-C
/// 前端更新属性回调方法
/// Front-end update attribute callback method
/// @param attributes 更新的属性
/// @param attributes updated attributes
- (void)updateAttributes:(NSDictionary *)attributes {
    // 解析属性
    // parse properties
    if (attributes[@"showsTraffic"]) {
        _showsTraffic = [DCUniConvert BOOL: attributes[@"showsTraffic"]];
        ((MKMapView*)self.view).showsTraffic = _showsTraffic;
    }
}
```

#### 更多的组件生命期方法
#### More component lifecycle methods

组件是由框架管理的，比如创建、布局、渲染、销毁。组件的生命周期方法都是可以重写的，你可以在这些生命周期中去做自己的事情。
Components are managed by the framework, such as creation, layout, rendering, and destruction. The lifecycle methods of components can be rewritten, and you can do your own things in these lifecycles.

| 方法 | 描述 |
| Method | Description |
| ---------- | --------- |
| onCreateComponentWithRef:type:...| 用给定的属性初始化一个component后会调用 |
| onCreateComponentWithRef:type:...| will be called when a component is initialized with the given properties |
| layoutDidFinish | 在component完成布局时候会调用. |
| layoutDidFinish | Called when the component finishes layout. |
| loadView | 创建component管理的view. |
| loadView | Create the view managed by the component. |
| viewWillLoad | 在component的view加载之前会调用. |
| viewWillLoad | Called before the component's view is loaded. |
| viewDidLoad | 在component的view加载完之后调用. |
| viewDidLoad | Called after the component's view is loaded. |
| viewWillUnload | 在component的view被释放之前调用. |
| viewWillUnload | Called before the component's view is released. |
| viewDidUnload | 在component的view被释放之后调用. |
| viewDidUnload | Called after the component's view is released. |
| updateStyles: | 在component的style更新时候调用. |
| updateStyles: | Called when the component's style is updated. |
| updateAttributes: | 在component的attribute更新时候调用. |
| updateAttributes: | Called when component attributes are updated. |
| addEvent: | 给component添加event的时候调用. |
| addEvent: | Called when an event is added to the component. |
| removeEvent: | 在event移除的时候调用. |
| removeEvent: | Called when the event is removed. |

#### 给组件添加方法
#### Add methods to components

**原生端实现**
**Native end implementation**

在组件代码中使用宏 `UNI_EXPORT_METHOD` 暴露原生方法供前端调用
Use the macro `UNI_EXPORT_METHOD` in the component code to expose native methods for front-end calls

```Objective-C
@implementation TestMapComponent

// 通过 UNI_EXPORT_METHOD 将方法暴露给前端
// Expose the method to the front end through UNI_EXPORT_METHOD
UNI_EXPORT_METHOD(@selector(focus:))

// options 为前端传递的参数，支持 NSDictionary 或 NSString 类型
// options is the parameter passed by the front end, supporting NSDictionary or NSString type
- (void)focus:(NSDictionary *)options {
    NSLog(@"%@",options);
}
@end
```

**在 uni-app 中调用 `focus:` 方法**
**Call `focus:` method in uni-app**

```Javascript
<template>
  <dc-testmap ref='mycomponent'></dc-testmap>
</template>
<script>
  module.exports = {
    created: function() {
      // 通过 this.$refs.mycomponent 获取地图组件
      // Get the map component through this.$refs.mycomponent
      // 调用组件 focus 方法
      // call the component focus method
      this.$refs.mycomponent.focus({'value':'Hello'});
    }
  }
</script>
```

**uni-app 完整项目存放在 `iOSSDK/HBuilder-uniPluginDemo/UniPluginDemo`**
**uni-app complete project is stored in `iOSSDK/HBuilder-uniPluginDemo/UniPluginDemo`**


### globalEvent 事件
### globalEvent event

在`module` 和 `component`中 用于页面监听持久性事件，例如定位信息，陀螺仪等的变化。
In `module` and `component`, it is used for the page to monitor persistent events, such as changes in location information, gyroscope, etc.

globalEvent事件只能通过页面的DCUniSDKInstance实例给当前页面发送globalEvent事件。其他页面无法接受。
The globalEvent event can only be sent to the current page through the DCUniSDKInstance instance of the page. Other pages cannot be accepted.

**示例：**
**Example:**

页面监听event事件
The page listens to the event event

```JS
var globalEvent = uni.requireNativePlugin('globalEvent');
globalEvent.addEventListener('myEvent', function(e) {
  console.log('myEvent'+JSON.stringify(e));
});
```

在原生代码 发出`myEvent`事件
Emit the `myEvent` event in native code

```Objective-C
NSDictionary * dict = [NSDictionary dictionaryWithObjectsAndKeys:@"value",@"key",nil];
NSString * eventName = @"myEvent";

DCUniSDKInstance * instance = self.uniInstance;

[instance fireGlobalEvent:eventName params:params];
```




插件开发完毕并通过测试后，接下来就可以生成插件包了
After the plug-in is developed and tested, the plug-in package can be generated next.

## 生成插件包
## Generate plugin package

此步骤应该在您插件所有功能都开发完毕，并在开发工程中测试完成进行
This step should be done after all the functions of your plugin have been developed and tested in the development project

### 插件包结构说明
### Plug-in package structure description

```javascript
|-- 插件id							// 插件包是一个以插件id命名的文件夹
	|-- android						// 存放 android 插件所需要的依赖库及资源文件
	|-- ios							// 存放 ios 插件所需要的依赖库及资源文件
	|-- package.json				// 插件配置文件
```

插件包的目录结构是固定的，是一个以插件id命名的文件夹，其中 android 路径中放的是 android 端插件所需要的依赖库及资源文件，ios 路径中放的是 ios 端插件所需要的依赖库及资源文件，`package.json`为插件的配置文件，接下来，我们需要生成 iOS 插件所需的依赖库，和编写 `package.json` 文件
The directory structure of the plug-in package is fixed, and it is a folder named after the plug-in id. The android path contains the dependent libraries and resource files required by the android plug-in, and the ios path contains the ios-side plug-ins. Dependent libraries and resource files, `package.json` is the configuration file of the plug-in, next, we need to generate the dependent libraries required by the iOS plug-in, and write the `package.json` file

### 编译生成插件库文件（.framework 或 .a）
### Compile and generate plugin library files (.framework or .a)

如下图所示，将编译工程选择为插件项目（DCTestUniPlugin），运行设备选择`Generic iOS Device`
As shown in the figure below, select the compilation project as a plug-in project (DCTestUniPlugin), and select `Generic iOS Device` for the running device

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi22.png)

然后点击`Edit Scheme...`
Then click `Edit Scheme...`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi23.png)

在弹窗中，将`Run->Info->Build Configuration`切换到`Release`，然后点击`Close`关闭弹窗
In the pop-up window, switch `Run->Info->Build Configuration` to `Release`, and then click `Close` to close the pop-up window

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi24.png)

然后在 Xcode 左侧目录中选中插件工程名，查看`TARGETS->Build Settings->Architectures`，确保
Then select the plug-in project name in the left directory of Xcode, check `TARGETS->Build Settings->Architectures`, make sure

- `Build Active Architecture Only->Release` 为 `No`
- `Build Active Architecture Only->Release` is `No`
- `Valid Architectures` 中至少包含 `arm64` 和 `armv7`(一般保持工程默认配置即可)
- `Valid Architectures` contains at least `arm64` and `armv7` (generally keep the default configuration of the project)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi25.png)

在`iOS Deployment Target`中选中最低支持的 iOS 版本，建议选择 `iOS9.0`
Select the minimum supported iOS version in `iOS Deployment Target`, it is recommended to choose `iOS9.0`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi26.png)

然后点击`运行按钮`或 `Command + B` 编译运行工程
Then click `Run button` or `Command + B` to compile and run the project

**Xcode12：** 编译完成后，在插件工程 Products 下生成的库（`DCTestUniPlugin.framework`）即为插件所需要的依赖库文件，`右键->Show in Finder`，可打开库所在文件夹
**Xcode12:** After the compilation is complete, the library (`DCTestUniPlugin.framework`) generated under the plug-in project Products is the dependent library file required by the plug-in, `right-click->Show in Finder`, you can open the folder where the library is located

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi27.png)

**xcode13+：** 工程目录中没有 products 路径了，点击顶部菜单 `Product > Show Build Folder in Finder` 打开编译后的路径，Release-iphoneos 中的库就是编译后的插件库文件；
**xcode13+:** There is no products path in the project directory, click the top menu `Product > Show Build Folder in Finder` to open the compiled path, the library in Release-iphoneos is the compiled plugin library file;

### 编写 package.json 配置文件
### Write package.json configuration file
> package.json 为插件的配置文件，配置了插件id、格式、插件资源以及插件所需权限等等信息
> package.json is the configuration file of the plug-in, which configures the plug-in id, format, plug-in resources, permissions required by the plug-in, etc.

新建一个 `package.json` 文件，然后请参考 [uni原生插件包格式](NativePlugin/course/package) 说明，根据您插件实际情况填写插件配置信息，示例插件配置完后如下所示
Create a `package.json` file, and then please refer to [uni native plug-in package format](NativePlugin/course/package) instructions, fill in the plug-in configuration information according to the actual situation of your plug-in, the example plug-in is configured as follows

```json
{
	"name": "TestUniPlugin",
	"id": "DCTestUniPlugin",
	"version": "1.0.0",
	"description": "uni示例插件",
	"_dp_type": "nativeplugin",
	"_dp_nativeplugin": {
		"ios": {
			"plugins": [{
				"type": "module",
				"name": "DCTestUniPlugin-TestModule",
				"class": "TestModule"
			}, {
				"type": "component",
				"name": "dc-testmap",
				"class": "TestComponent"
			}],
			"frameworks": ["MapKit.framework"],
			"integrateType": "framework",
			"deploymentTarget": "9.0"
		}
	}
}

```

然后以`插件id`为名新建一个文件夹，将编辑好的 `package.json` 放进去，然后在文件夹中在新建一个 `ios` 文件夹，将刚刚生成的依赖库（DCTestUniPlugin.framework）copy 到 `ios` 根目录，这样我们的插件包就构建完成了，如下图所示
Then create a new folder with the name of `plugin id`, put the edited `package.json` into it, and then create a new `ios` folder in the folder, and add the dependency library (DCTestUniPlugin.framework) just generated copy to the `ios` root directory, so that our plug-in package is built, as shown in the figure below

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi29.png)

**注：**iOS 插件包至少需要包含：`package.json`文件  和`ios`文件夹（小写的ios）里面包含 .a 或 .framework 依赖库；
**Note:** The iOS plug-in package needs to contain at least: `package.json` file and `ios` folder (lowercase ios) which contains .a or .framework dependent libraries;

## 使用插件
## Using plugins

### 放到 HBuilderX 的 uni-app 项目中直接使用
### Put it in the uni-app project of HBuilderX and use it directly

插件包开发完后，可以直接放到 HX 的 uni-app 项目中使用，具体请参考文档 [HBuilderX 中使用本地插件](/NativePlugin/use/use_local_plugin?id=开发者自己开发uni-app原生插件)
After the plug-in package is developed, it can be directly used in the uni-app project of HX. For details, please refer to the document [Use local plug-ins in HBuilderX](/NativePlugin/use/use_local_plugin?id=%E5%BC%80%E5%8F %91%E8%80%85%E8%87%AA%E5%B7%B1%E5%BC%80%E5%8F%91uni-app%E5%8E%9F%E7%94%9F%E6%8F %92%E4%BB%B6)

### 提交插件市场
### Submit plugins to the marketplace

按照上面的方式放到 HBuilderX 的 uni-app 项目中提交打包测试完插件后，可以将插件包压缩成 zip 格式，然后提交到插件市场共享给其他开发者使用，登录注册[DCloud插件市场](https://ext.dcloud.net.cn/)，然后按照提示步骤提交插件，（需要编写对应插件的使用说明文档，.md（markdown）格式）；
Put it into the uni-app project of HBuilderX according to the above method, submit the package and test the plug-in, you can compress the plug-in package into a zip format, and then submit it to the plug-in market to share with other developers, log in and register [DCloud plug-in market](https ://ext.dcloud.net.cn/), and then follow the prompts to submit the plug-in, (need to write the corresponding plug-in instruction document, .md (markdown) format);


## 常见问题
## common problem

### Q:集成广告SDK说明
### Q: Instructions for integrating advertising SDK

A: 由于官方 UniAD 广告组件集成了“广点通”和“穿山甲”SDK，目前不支持自行开发包含这两个SDK的原生插件，云打包会导致冲突；
A: Since the official UniAD advertising component integrates the "Guangdiantong" and "Pangolin" SDKs, it currently does not support self-developed native plug-ins containing these two SDKs, and cloud packaging will cause conflicts;

### Q:插件开发需要依赖第三方SDK，或需要依赖资源文件
### Q: Plug-in development needs to rely on third-party SDK, or need to rely on resource files

- 如果您的插件需要依赖第三方的SDK，**开发阶段引入三方SDK的时候要引入到主工程**，然后将三方SDK提供的 .h 头文件直接添加到插件工程中这样就可以正常调用三方SDK的 API 了，功能开发完毕后在构建插件包的时候，需要将依赖的三方SDK库文件放到ios路径下，然后按照规范编辑 `package.json`；
- If your plug-in needs to rely on a third-party SDK, **when importing the third-party SDK in the development stage, it must be imported into the main project**, and then directly add the .h header file provided by the third-party SDK to the plug-in project so that it can be called normally The API of the third-party SDK is now available. When building the plug-in package after the function development, you need to put the dependent third-party SDK library file in the ios path, and then edit `package.json` according to the specification;
- 如果需要依赖资源文件比如图片、xib资源等，建议把资源文件放到`.bundle`包中使用，**开发阶段资源文件也要添加到主工程中**，不然引用不到，功能开发完毕后在构建插件包的时候，把 bundle 包放到 "ios/BundleResources" 路径下即可，打包时会将 BundleResources 中的所有文件都添加到应用中；
- If you need to rely on resource files such as pictures, xib resources, etc., it is recommended to put the resource files in the `.bundle` package for use. **Resource files in the development stage should also be added to the main project**, otherwise they will not be referenced. Function development When building the plug-in package after completion, put the bundle package in the "ios/BundleResources" path, and all the files in BundleResources will be added to the application when packaging;

具体请参考开源项目[ 百度OCR识别插件源码](https://github.com/xiaohuapunk/DC-CardRecognize)，对应插件市场的 [插件](https://ext.dcloud.net.cn/plugin?id=135)
For details, please refer to the open source project [Baidu OCR recognition plug-in source code](https://github.com/xiaohuapunk/DC-CardRecognize), corresponding to the plug-in market [plug-in] (https://ext.dcloud.net.cn/plugin? id=135)

### Q: 如何跳转原生 UIViewController
### Q: How to jump to native UIViewController

>A: 因为 uni 框架机制，module 的 uniInstance 没有绑定 viewController，故 `uniInstance.viewController` 值为 nil，如果想通过 UIViewController 来跳转页面可使用下面的方法获取 UIViewController**
>A: Because of the uni framework mechanism, the uniInstance of the module is not bound to viewController, so the value of `uniInstance.viewController` is nil. If you want to jump to the page through UIViewController, you can use the following method to get UIViewController**

```javascript
// 获取当前显示的 UIViewController
// Get the currently displayed UIViewController
+ (UIViewController *)dc_findCurrentShowingViewController {
    //获得当前活动窗口的根视图
    //Get the root view of the current active window
    UIViewController *vc = [UIApplication sharedApplication].keyWindow.rootViewController;
    UIViewController *currentShowingVC = [self findCurrentShowingViewControllerFrom:vc];
    return currentShowingVC;
}
+ (UIViewController *)findCurrentShowingViewControllerFrom:(UIViewController *)vc
{
    // 递归方法 Recursive method
    // Recursive method Recursive method
    UIViewController *currentShowingVC;
    if ([vc presentedViewController]) {
        // 当前视图是被presented出来的
        // The current view is presented
        UIViewController *nextRootVC = [vc presentedViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else if ([vc isKindOfClass:[UITabBarController class]]) {
        // 根视图为UITabBarController
        // The root view is UITabBarController
        UIViewController *nextRootVC = [(UITabBarController *)vc selectedViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else if ([vc isKindOfClass:[UINavigationController class]]){
        // 根视图为UINavigationController
        // The root view is UINavigationController
        UIViewController *nextRootVC = [(UINavigationController *)vc visibleViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else {
        // 根视图为非导航类
        // The root view is a non-navigation class
        currentShowingVC = vc;
    }
    
    return currentShowingVC;
}
```

### Q: 如何获取页面可访问图片资源存储路径 （vue页面需要注意，nvue页面不存这个问题）
### Q: How to get the storage path of image resources that can be accessed by the page (you need to pay attention to the vue page, this problem does not exist in the nvue page)

> A: 有些插件可能需要返回本地的图片路径给页面来显示，如果页面是`vue`的话是使用 WKWebview 渲染，访问本地图片资源可能会存在跨域问题访问不到图片资源，所以需要将图片存放到指定路径下，按照下面的方法获取图片存储路径即可
> A: Some plug-ins may need to return the local image path to the page to display. If the page is `vue`, it is rendered using WKWebview. There may be cross-domain problems when accessing local image resources. The image resource cannot be accessed, so the image needs to be stored. Go to the specified path, follow the method below to get the image storage path

**原生端实现**
**Native end implementation**

```
// 引用头文件
// reference header file
#import "PDRCoreApp.h"
#import "PDRCoreAppManager.h"
#import "PDRCoreAppInfo.h"

// 获取路径信息
// Get path information
PDRCoreAppInfo *appinfo = [PDRCore Instance].appManager.getMainAppInfo;
// 将图片存储到 appinfo.documentPath 路径下即可，可以创建子目录；
// Just store the picture in the path of appinfo.documentPath, you can create a subdirectory;
// 示例，原生图片存储路径为
// Example, the original image storage path is
NSString *imgPath = [appinfo.documentPath stringByAppendingPathComponent:@"test.png"];
```

**js 端获取图片路径有两种方式**
**There are two ways to get the image path on the js side**

说明：`"_doc"` 是一个特殊字符，和原生端的 `appinfo.documentPath`对应
Note: `"_doc"` is a special character, corresponding to `appinfo.documentPath` on the native side

```				
// 1.使用相对路径（直接使用 "_doc/" 拼接图片路径）
// 1. Use relative paths (directly use "_doc/" to stitch image paths)
var relativePath = "_doc/test.png"
				
// 2.使用平台的绝对路径（先将 "_doc/" 转换成原生绝对路径在拼接图片路径）
// 2. Use the absolute path of the platform (first convert "_doc/" into a native absolute path before stitching the image path)
var docPath = plus.io.convertLocalFileSystemURL("_doc/");
var absolutePath = docPath + 'test.png'
```

### Q: 打包报错 “Undefined symbols for architecture”
### Q: Packaging error "Undefined symbols for architecture"

A: 这类错误基本都是缺少依赖库导致的，仔细看报错信息，查看未定义的符号属于哪个库（有可能是系统库，也有可能是第三方库）然后将缺少的库放到插件包或修改package.json 配置文件后重新提交打包;
A: This type of error is basically caused by the lack of dependent libraries. Read the error message carefully to see which library the undefined symbol belongs to (it may be a system library or a third-party library) and then put the missing library into the plug-in package Or modify the package.json configuration file and resubmit the package;

### Q: 依赖库冲突 “duplicate symbols for ...”
### Q: Dependency library conflict "duplicate symbols for ..."

A：如果您依赖的三方库与SDK依赖的三方库冲突
A: If the third-party library you depend on conflicts with the third-party library that the SDK depends on

- 为了保证SDK功能的完整性所以请您使用SDK内置的三方库，移除您依赖的三方库，对于源码开源的三方库比如 SDWebImage、ZXing等，这些库的 .h 头文件存放在 SDK/inc 路径中的，将对应库的头文件引入到插件工程中使用即可，如果您使用内置的三方库导致原生功能异常，请反馈给我们；
- In order to ensure the integrity of the SDK functions, please use the third-party libraries built into the SDK and remove the third-party libraries you depend on. For the third-party libraries with open source code such as SDWebImage, ZXing, etc., the .h header files of these libraries are stored in SDK/inc In the path, just import the header file of the corresponding library into the plug-in project for use. If you use the built-in three-party library and the native function is abnormal, please give us feedback;
- 如果引入的是 .a 或 .framework 库里面包含某个三方库导致符号定义冲突，可根据 [这篇文档](https://www.jianshu.com/p/274f93ef6c1c) 移除对应库的符号，然后测试一下功能是否正常；
- If the imported .a or .framework library contains a third-party library that causes symbol definition conflicts, you can remove the symbols of the corresponding library according to [this document](https://www.jianshu.com/p/274f93ef6c1c) , and then test whether the function is normal;

[依赖的三方库版本说明](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/dependentLibrary)
[Dependent third-party library version description](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/dependentLibrary)

### Q: 之前引用的头文件和资源 现在找不到了
### Q: The previously referenced header files and resources are no longer found

A：为了解决部分功能库引用了一些第三方库 可能与开发者项目的第三方库重复引用
A: In order to solve some function libraries, some third-party libraries may be referenced repeatedly with third-party libraries of developer projects
我们从`3.0.7`后 对于部分库和资源进行了调整。
We have adjusted some libraries and resources since `3.0.7`.

如果开发者原来工程对资源文件有引用,现在找不到资源文件,请参考下边列表(文件路径去离线SDK下的 `SDK/Bundles/`下寻找)
If the developer’s original project referenced the resource file, but the resource file cannot be found now, please refer to the list below (the file path can be found under `SDK/Bundles/` under the offline SDK)

|旧资源|新资源|
|Old Resources|New Resources|
|:--|:--|:--|
|TZImagePickerController.bundle|DCTZImagePickerController.bundle|
|SVProgressHUD.bundle|DCSVProgressHUD.bundle|


如果开发者原来工程对库的头文件有引用,现在找不到头文件,请参考下边列表(文件路径去离线SDK下的 `SDK/inc/`下寻找)
If the developer’s original project referenced the header file of the library, but cannot find the header file now, please refer to the list below (the file path can be found under `SDK/inc/` under the offline SDK)

`TZImagePickerController` -> `DCTZImagePickerController`

|旧头文件|新头文件|
|Old Header Files|New Header Files|
|:--|:--|:--|
|TZAssetCell.h|DCTZAssetCell.h|
|TZAssetModel.h|DCTZAssetModel.h|
|TZGifPhotoPreviewController.h|DCTZGifPhotoPreviewController.h|
|TZImageCropManager.h|DCTZImageCropManager.h|
|TZImageManager.h|DCTZImageManager.h|
|TZImagePickerController.h|DCTZImagePickerController.h|
|TZLocationManager.h|DCTZLocationManager.h|
|TZPhotoPickerController.h|DCTZPhotoPickerController.h|
|TZPhotoPreviewCell.h|DCTZPhotoPreviewCell.h|
|TZPhotoPreviewController.h|DCTZPhotoPreviewController.h|
|TZProgressView.h|DCTZProgressView.h|
|TZVideoPlayerController.h|DCTZVideoPlayerController.h|
|UIViewControllerHUD.h|DCUIViewControllerHUD.h|
|NSBundle+TZImagePicker.h|NSBundle+DCTZImagePicker.h|
|UIView+Layout.h|UIView+DCLayout.h|


`SVProgressHUD` -> `DCSVProgressHUD`

|旧头文件|新头文件|
|Old Header Files|New Header Files|
|:--|:--|:--|
|SVIndefiniteAnimatedView.h|DCSVIndefiniteAnimatedView.h|
|SVProgressAnimatedView.h|DCSVProgressAnimatedView.h|
|SVProgressHUD.h|DCSVProgressHUD.h|
|SVRadialGradientLayer.h|DCSVRadialGradientLayer.h|

`SocketRoket` -> `DCSocketRoket`

|旧头文件|新头文件|
|Old Header Files|New Header Files|
|:--|:--|:--|
|SRWebSocket.h|DCSRWebSocket.h|

### Q: 升级后使用推送插件收不到消息
### Q: I can't receive messages using the push plug-in after the upgrade

A: 为了应对苹果审核规范，我们从`3.6.2`后，对于推送相关代理事件进行了调整，使用第三方推送插件时，云打包需要勾选Push模块，离线SDK需要引入liblibPush.a
A: In response to Apple's review specifications, we have adjusted the push-related proxy events since `3.6.2`. When using a third-party push plug-in, the Push module needs to be checked for cloud packaging, and liblibPush.a needs to be introduced in the offline SDK
