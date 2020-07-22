## 开发环境
	
- iOS开发环境，请使用 Xcode 11 及以上版本；
- [下载 uni小程序SDK](UniMPDocs/SDKDownload/ios)；
- 安装开发工具 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 请与SDK的版本保持一致

## 集成方式
首先您需要一个 iOS 项目，已有项目或 新建一个 `Single View Application` 的项目，解压 SDK 包，将目录中的 UniMPSDK 文件夹 copy 到工程目录中， 然后按照以下步骤配置您的项目。

### 添加基础依赖库及资源文件

基础依赖库及资源是必须要引入到工程中的，基础依赖库及资源存放在 `UniMPSDK/Core` 目录中

UniMPSDK/Core 目录结构说明

```
|-- UniMPSDK/Core
	|-- Headers  		// .h 头文件
	|-- Libs     		// 基础依赖库
	|-- Resources		// 资源文件
```

#### 添加基础依赖库

在 Xcode 项目左侧目录选中工程名，在 `TARGETS->Build Phases-> Link Binary With Libaries` 中点击“+”按钮，在弹出的窗口中点击 `Add Other -> Add Files...`，然后打开 UniMPSDK/Core/Libs 基础依赖库目录，选中目录中的 .a 库以及 .framework 库单击 `open` 按钮将依赖库添加到工程中

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200211/edd12a8e2f38a9ec8887780f5da55765.png" width="50%">
<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200211/30ba4060cd50628e0a33995ecb4f244a.png" width="50%">

#### 添加系统依赖库

接下来需要添加系统依赖库，在 Xcode 项目左侧目录选中工程名，在 `TARGETS->Build Phases-> Link Binary With Libaries` 中点击“+”按钮，在弹出的窗口中查找并选择所需的库（见下表），单击 “Add” 按钮，将库文件添加到工程中。

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200211/ce0186518a6ea354826d200f70aea8f9.png" width="50%">

|依赖的系统库|   |   |
|:-:|:-:|:-:|
|JavaScriptCore.framework|CoreMedia.framework|MediaPlayer.framework|
|AVFoundation.framework|AVKit.framework|GLKit.framework|
|OpenGLES.framework|CoreText.framework|QuartzCore.framework|
|CoreGraphics.framework|libc++.tbd|QuickLook.framework|
|CoreTelephony.framework|AssetsLibrary.framework|CoreLocation.framework|
|AddressBook.framework|

#### 添加依赖资源文件

接下来需要添加依赖资源文件，建议在项目中新建一个 `Group`，来管理资源文件，如示例在工程目录中创建的 UniMP 文件夹，然后按功能模块创建不同的目录存放资源文件；
添加资源文件方法：在左侧目录中选中导入资源文件的位置（示例中是 UniMP/Core），在右键菜单中选择Add Files to “工程名...”，然后打开 UniMPSDK/Core 目录，选择 Resources 文件夹，然后点击“Add”，将资源文件添加到工程中

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200211/6a037b32c1db4baa344f4fcca8c44d72.png" width="50%">

#### 添加 .h 头文件

在左侧目录中选中导入头文件的位置（示例中是 UniMP/Core），在右键菜单中选择Add Files to “工程名...”，然后打开 UniMPSDK/Core 目录，选择 Headers 文件夹，然后点击“Add”，将头文件资源添加到工程中

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200211/9d94926d59357b9bd97fdc5e2a35ace9.png" width="50%">

#### 配置工程

在 Xcode 项目左侧目录选中工程名，在 `TARGETS->Build Settings->Other Linker Flags` 中添加 `-ObjC` 如下图

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200211/112a127235e7922473555ca79d3c017d.png" width="50%">

## 生成小程序应用资源

**注意！！！！ uni小程序仅支持v3模式编译的uni应用！！！**

首先在 HBuilderX 中选择您的 uni-app 项目，如果没有请新建一个 uni-app 项目，如下图，创建 uni-app 项目

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200208/b57287eaf2e63b0076bf36b943fc486a.png" width="50%">

有一点需要注意，项目的编译模式必须选择 v3 编译器（新建uni-app项目默认是v3编译模式），点击页面中的“详情”可了解更多关于 v3 模式的注意事项，如下图，查看编译模式

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200208/f1c5691f8ac4d9b42ba16ea7ecc07756.png" width="50%">

然后选中您的项目，右键->发行->原生App-制作应用wgt包 
（注：HBuilderX 2.6.2 以下版本选项是 “原生App-制作移动App资源升级包”）

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200225/9fea6e3877e029ef03f4fed4db434dea.png" width="50%">

然后点击“浏览” 选择wgt包导出路径，点击 “生成wgt”

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200225/ef2b2185095d906a6ea347c02a5bf6cf.png" width="50%">

项目编译完成后会在控制台输出wgt包的路径，点击路径打开 wgt 资源包所在目录

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200225/d64ae362a05b3a52bae197060cebe5b6.png" width="50%">

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200225/273b1f21d65d4e59a823e32adde0b772.png" width="50%">


如图，`__UNI__11E9B73.wgt`就是应用资源包，（`__UNI__11E9B73` 为小程序的 appid）

**应用wgt资源文件可以选择从云端获取，也可以直接放到工程中使用，为了方便演示，示例工程将应用wgt资源文件添加到工程中使用**

## 导入小程序应用资源

打开原生工程目录在 UniMP 路径中创建名称为`Apps`的文件夹，将之前导出的wgt包拷贝到`Apps `文件夹中，如下图

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200225/dc8fdeb59004c6cf2ec1cf3c62138b9b.png" width="50%">

然后在原生工程中左侧目录中选中导资源文件的位置（示例中是 UniMP/），在右键菜单中选择Add Files to “工程名...”，然后打开工程目录，选择 Apps 文件夹，然后点击“Add”，将应用资源包添加到工程中，如下图所示；

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200225/fc55a6d3f596ceb570bba82b82d83fdf.png" width="50%">

## 代码实现

首先需要初始化 sdk engine，并设置启动参数，建议在 `application:didFinishLaunchingWithOptions` 方法中添加

在 `AppDelegate.m` 中引用头文件 `#import "DCUniMP.h"`

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    // 配置参数
    NSMutableDictionary *options = [NSMutableDictionary dictionaryWithDictionary:launchOptions];
    // 设置 debug YES 会在控制台输出 js log，默认不输出 log，注：需要引入 liblibLog.a 库
    [options setObject:[NSNumber numberWithBool:YES] forKey:@"debug"];
    // 初始化引擎
    [DCUniMPSDKEngine initSDKEnvironmentWihtLaunchOptions:options];
    
    return YES;
}
```

在 `AppDelegate.m` App 的生命周期方法中调用 SDK 相关方法

```objective-c
#pragma mark - App 生命周期方法
- (void)applicationDidBecomeActive:(UIApplication *)application {
    [DCUniMPSDKEngine applicationDidBecomeActive:application];
}

- (void)applicationWillResignActive:(UIApplication *)application {
    [DCUniMPSDKEngine applicationWillResignActive:application];
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    [DCUniMPSDKEngine applicationDidEnterBackground:application];
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    [DCUniMPSDKEngine applicationWillEnterForeground:application];
}

- (void)applicationWillTerminate:(UIApplication *)application {
    [DCUniMPSDKEngine destory];
}
```

根据项目需求，可以实现以下方法

```objective-c
#pragma mark - 如果需要使用 URL Scheme 或 通用链接相关功能，请实现以下方法
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    // 通过 url scheme 唤起 App
    [DCUniMPSDKEngine application:app openURL:url options:options];
    return YES;
}

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
    // 通过通用链接唤起 App
    [DCUniMPSDKEngine application:application continueUserActivity:userActivity];
    return YES;
}

#pragma mark - 如需使用远程推送相关功能，请实现以下方法
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    // 远程通知注册成功，收到 deviceToken 调用sdk方法，传入 deviceToken
    [DCUniMPSDKEngine application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    // 远程通知注册失败
    [DCUniMPEngine application:application didFailToRegisterForRemoteNotificationsWithError:error];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
    // 收到远程推送消息
    [DCUniMPSDKEngine application:application didReceiveRemoteNotification:userInfo];
    completionHandler(UIBackgroundFetchResultNewData);
}

#pragma mark - 如需使用本地推送通知功能，请实现以下方法
- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification {
    // 收到本地推送消息
    [DCUniMPSDKEngine application:application didReceiveLocalNotification:notification];
}
```

在您需要打开小程序的文件中添加以下逻辑（参考示例工程 ViewController.m ）

首先需要引用头文件

```objective-c
#import "DCUniMP.h"
```

添加代理协议 `DCUniMPEngineDelegate`

```objective-c
@interface ViewController () <DCUniMPSDKEngineDelegate>
@end
```

小程序应用资源必须部署到指定的沙盒路径中才可以正常运行，请参考下面的方法

```objective-c
/// 检查运行目录是否存在应用资源，不存在将应用资源部署到运行目录
- (void)checkUniMPResource {
    if (![DCUniMPSDKEngine isExistsApp:k_AppId]) {
        // 读取导入到工程中的wgt应用资源
        NSString *appResourcePath = [[NSBundle mainBundle] pathForResource:k_AppId ofType:@"wgt"];
        // 将应用资源部署到运行路径中
        if ([DCUniMPSDKEngine releaseAppResourceToRunPathWithAppid:k_AppId resourceFilePath:appResourcePath]) {
            NSLog(@"应用资源文件部署成功");
        }
    }
}
```

打开小程序应用

```objective-c
/// 打开 App
- (IBAction)openUniMP:(id)sender {
    
    // 配置胶囊按钮菜单 ActionSheet 全局项（点击胶囊按钮 ··· ActionSheet弹窗中的项）
    DCUniMPMenuActionSheetItem *item1 = [[DCUniMPMenuActionSheetItem alloc] initWithTitle:@"Item 1" identifier:@"item1"];
    DCUniMPMenuActionSheetItem *item2 = [[DCUniMPMenuActionSheetItem alloc] initWithTitle:@"Item 2" identifier:@"item2"];
    // 添加到全局配置
    [DCUniMPSDKEngine setDefaultMenuItems:@[item1,item2]];
        
    // 设置 delegate
    [DCUniMPSDKEngine setDelegate:self];
    
    // 启动 uni小程序，（参数可以在小程序中通过 plus.runtime.arguments 获取此参数）
    NSDictionary *arguments = @{ @"value":@"Hello uni microprogram" };
    [DCUniMPSDKEngine openApp:k_AppId
                    arguments:arguments];
}
```

实现代理方法

```objective-c
#pragma mark - DCUniMPSDKEngineDelegate
/// DCUniMPMenuActionSheetItem 点击触发回调方法
- (void)defaultMenuItemClicked:(NSString *)identifier {
    NSLog(@"标识为 %@ 的 item 被点击了", identifier);
}

/// 返回打开小程序时的自定义闪屏视图（此视图会以屏幕大小展示）
- (UIView *)splashViewForApp:(NSString *)appid {
    UIView *splashView = [[[NSBundle mainBundle] loadNibNamed:@"SplashView" owner:self options:nil] lastObject];
    return splashView;
}
```

至此代码部分已完成，可以运行查看效果

### 应用资源管理

#### uni小程序的应用资源集成方式
	
生成的 uni小程序 wgt 资源包可以**部署到远程服务器动态下发**也可以**直接内置到工程中**。然后通过 DCUniMPSDKEngine 类的`releaseAppResourceToRunPathWithAppid:resourceFilePath:`方法传入wgt资源路径即可将wgt资源部署到运行路径。然后通过`openApp:arguments:` 运行uni小程序应用。

#### uni小程序应用资源升级

1. **宿主触发更新：**宿主下载新的 wgt 资源包或者主App升级时内置新的 wgt 包，然后在此调用 DCUniMPSDKEngine 类的`releaseAppResourceToRunPathWithAppid:resourceFilePath:`方法传入wgt资源路径即可将wgt资源部署到运行路径，直接替换原有应用资源。 
 
2. **小程序触发更新：**小程序内下载新的wgt包，然后调用更新api应用新的wgt资源，具体请参考 [wgt 资源在线升级/热更新](https://ask.dcloud.net.cn/article/35667)



#### uni小程序应用删除

可通过 DCUniMPSDKEngine 类的 `getAppRunPathWithAppid:` 方法获取应用运行路径，删除应用资源即可；