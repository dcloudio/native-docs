## 开发环境

- iOS开发环境，请使用 Xcode 14 及以上版本；
- [下载 uni小程序SDK](/UniMPDocs/SDKDownload/ios)；
- [Cocoapods集成示例](https://gitcode.net/dcloud/unimpsdk-ios)；
- 安装开发工具 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 请与SDK的版本保持一致

## 集成方式
UniMPSDK 3.99+ 新增支持Cocoapods集成
### 1.Pod集成
#### 安装pod环境

参考[官方安装指南](https://guides.cocoapods.org/using/getting-started.html#getting-started)或[CocoaPods安装教程](https://www.jianshu.com/p/a7faeda8bcbb)。

#### 创建Podfile文件
在Xcode项目的根目录下，新建一个Podfile文件，在Podfile文件中添加对小程序SDK的依赖，Podfile完整示例如下:

<details> <summary>Podfile文件示例</summary>

``` shell

use_frameworks!   ## Swift项目需要添加

target 'HelloUniMPDemo' do

  pod 'unimp', :subspecs => [
        'Core',               ##核心库(必需)
#        'Accelerometer',      ##加速度传感器
#        'Contacts',           ##通讯录
#        'Audio',              ##音频
#        'Camera&Gallery',     ##相机&相册
#        'File',               ##文件
#        'Video',              ##视频播放
#        'LivePusher',         ##直播推流
#        'NativeJS',           ##JS Reflection call Native
#        'Orientation',        ##设备方向
#        'Message',            ##邮件消息
#        'Zip',                ##压缩
#        'Proximity',          ##距离传感器
#        'Sqlite',             ##数据库
#        'Barcode',            ##扫码
#        'XMLHttpRequest',     ##网络请求
#        'Fingerprint',        ##指纹识别
#        'FaceId',             ##人脸识别
#        'Log',                ##打印Console.log日志，发布时可移除
#        'IBeacon',            ##低功耗蓝牙
#        'BlueTooth',          ##蓝牙
#        'Speech-Baidu',       ##语音识别-百度
#        'Statistic-Umeng',    ##友盟统计
#        ##定位模块(百度高德不能同时引用)
#        'Geolocation',        ##系统定位
#        'Geolocation-Gaode',  ##高德定位
#        'Geolocation-Baidu',  ##百度定位
#        ##地图(二选一)
#        'Map-Gaode',          ##高德地图
#        'Map-Baidu',          ##百度地图
#        ##支付
#        'Payment-IAP',        ##苹果内购
#        'Payment-AliPay',     ##支付宝支付
#        'Payment-Wechat',     ##微信支付-同时使用微信分享或登录,必需使用包含支付的依赖库
#        'Payment-Paypal',     ##Paypal支付 iOS13+
#        'Payment-Stripe',     ##stripe支付 iOS13+
#        ##分享
#        'Share-Wechat',       ##微信分享-包含支付
#        'Share-Wechat-Nopay', ##微信分享-不包含支付
#        'Share-QQ',           ##QQ分享
#        'Share-Sina',         ##新浪微博分享
#        ##登录
#        'Oauth-Apple',        ##苹果登录
#        'Oauth-QQ',           ##QQ登录
#        'Oauth-Wechat',       ##微信登录-包含支付
#        'Oauth-Wechat-Nopay', ##微信登录-不包含支付
#        'Oauth-Sina',         ##新浪微博登录
#        'Oauth-Google',       ##Google登录
#        'Oauth-Facebook',     ##Facebook登录 iOS12+
  ]

#  pod 'FBSDKLoginKit','16.2.1' ##使用Oauth-Facebook 时需添加该库
#  pod 'Stripe','23.18.2'       ##使用Payment-Stripe 时需添加该库
#  pod 'PayPalCheckout','1.2.0' ##使用Payment-Paypal 时需添加该库

end
```

</details>



#### 加载依赖

执行` pod update `或者` pod install `即可。 

#### 其他
更多cocoapods问题详见[Cocoapods注意事项](/UniMPDocs/FAQ/cocoapods)；

### 2.手动集成
> 下载的SDK中包含对应的示例工程，供大家参考

首先您需要一个 iOS 项目，已有项目或 新建一个 `iOS App` 项目，解压 SDK 包，将目录中的 UniMPSDK 文件夹 copy 到工程目录中， 然后按照以下步骤配置您的项目。

#### 添加基础依赖库及资源文件

基础依赖库及资源是必须要引入到工程中的，基础依赖库及资源存放在 `UniMPSDK/Core` 目录中

UniMPSDK/Core 目录结构说明

```
|-- UniMPSDK/Core
	|-- Headers  		// .h 头文件
	|-- Libs     		// 基础依赖库
	|-- Resources		// 资源文件
```

##### 添加基础依赖库

在 Xcode 项目左侧目录选中工程名，在 `TARGETS->Build Phases-> Link Binary With Libaries` 中点击“+”按钮，在弹出的窗口中点击 `Add Other -> Add Files...`，然后打开 UniMPSDK/Core/Libs 基础依赖库目录，选中目录中的 .a 库以及 .framework 库单击 `open` 按钮将依赖库添加到工程中

<img src="http://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/unimp01.png" width="50%">
<img src="http://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/unimp02.png" width="50%">

##### 添加系统依赖库

接下来需要添加系统依赖库，在 Xcode 项目左侧目录选中工程名，在 `TARGETS->Build Phases-> Link Binary With Libaries` 中点击“+”按钮，在弹出的窗口中查找并选择所需的库（见下表），单击 “Add” 按钮，将库文件添加到工程中。

<img src="https://ask.dcloud.net.cn/uploads/article/20200211/ce0186518a6ea354826d200f70aea8f9.png" width="50%">

|依赖的系统库|   |   |
|:-:|:-:|:-:|
|JavaScriptCore.framework|CoreMedia.framework|MediaPlayer.framework|
|AVFoundation.framework|AVKit.framework|GLKit.framework|
|OpenGLES.framework|CoreText.framework|QuartzCore.framework|
|CoreGraphics.framework|libc++.tbd|QuickLook.framework|
|CoreTelephony.framework|libiconv.tbd|

##### 添加依赖资源文件

接下来需要添加依赖资源文件，建议在项目中新建一个 `Group`，来管理资源文件，如示例在工程目录中创建的 UniMP 文件夹，然后按功能模块创建不同的目录存放资源文件；
添加资源文件方法：在左侧目录中选中导入资源文件的位置（示例中是 UniMP/Core），在右键菜单中选择Add Files to “工程名...”，然后打开 UniMPSDK/Core 目录，选择 Resources 文件夹，然后点击“Add”，将资源文件添加到工程中

<img src="http://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/unimp03.png" width="50%">

##### 添加 .h 头文件

在左侧目录中选中导入头文件的位置（示例中是 UniMP/Core），在右键菜单中选择Add Files to “工程名...”，然后打开 UniMPSDK/Core 目录，选择 Headers 文件夹，然后点击“Add”，将头文件资源添加到工程中

<img src="http://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/unimp04.png" width="50%">

##### 配置工程

在 Xcode 项目左侧目录选中工程名，在 `TARGETS->Build Settings->Other Linker Flags` 中添加 `-ObjC` 如下图

<img src="https://ask.dcloud.net.cn/uploads/article/20200211/112a127235e7922473555ca79d3c017d.png" width="50%">

## 生成小程序应用资源

首先在 HBuilderX 中选择您的 uni-app 项目，如果没有请新建一个 uni-app 项目，如下图，创建 uni-app 项目

<img src="https://ask.dcloud.net.cn/uploads/article/20200208/b57287eaf2e63b0076bf36b943fc486a.png" width="50%">

然后选中您的项目，右键->发行->原生App-制作应用wgt包
（注：HBuilderX 2.6.2 以下版本选项是 “原生App-制作移动App资源升级包”）

<img src="https://ask.dcloud.net.cn/uploads/article/20200225/9fea6e3877e029ef03f4fed4db434dea.png" width="50%">

然后点击“浏览” 选择wgt包导出路径，点击 “生成wgt”

<img src="https://ask.dcloud.net.cn/uploads/article/20200225/ef2b2185095d906a6ea347c02a5bf6cf.png" width="50%">

项目编译完成后会在控制台输出wgt包的路径，点击路径打开 wgt 资源包所在目录

<img src="https://ask.dcloud.net.cn/uploads/article/20200225/d64ae362a05b3a52bae197060cebe5b6.png" width="50%">

<img src="https://ask.dcloud.net.cn/uploads/article/20200225/273b1f21d65d4e59a823e32adde0b772.png" width="50%">


如图，`__UNI__11E9B73.wgt`就是应用资源包，（`__UNI__11E9B73` 为小程序的 appid）

**应用wgt资源文件可以选择从云端获取，也可以直接放到工程中使用，为了方便演示，示例工程将应用wgt资源文件添加到工程中使用**

## 导入小程序应用资源

打开原生工程目录在 UniMP 路径中创建名称为`Apps`的文件夹，将之前导出的wgt包拷贝到`Apps `文件夹中，如下图

<img src="https://ask.dcloud.net.cn/uploads/article/20200225/dc8fdeb59004c6cf2ec1cf3c62138b9b.png" width="50%">

然后在原生工程中左侧目录中选中导资源文件的位置（示例中是 UniMP/），在右键菜单中选择Add Files to “工程名...”，然后打开工程目录，选择 Apps 文件夹，然后点击“Add”，将应用资源包添加到工程中，如下图所示；

<img src="https://ask.dcloud.net.cn/uploads/article/20200225/fc55a6d3f596ceb570bba82b82d83fdf.png" width="50%">

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
    [DCUniMPSDKEngine initSDKEnvironmentWithLaunchOptions:options];

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
- (void)checkUniMPResource:(NSString *)appid {
#warning 注意：isExistsUniMP: 方法判断的仅是运行路径中是否有对应的应用资源，宿主还需要做好内置wgt版本的管理，如果更新了内置的wgt也应该执行 installUniMPResourceWithAppid 方法应用最新的资源
    if (![DCUniMPSDKEngine isExistsUniMP:appid]) {
        // 读取导入到工程中的wgt应用资源
        NSString *appResourcePath = [[NSBundle mainBundle] pathForResource:appid ofType:@"wgt"];
        if (!appResourcePath) {
            NSLog(@"资源路径不正确，请检查");
            return;
        }
        // 将应用资源部署到运行路径中
        NSError *error;
        if ([DCUniMPSDKEngine installUniMPResourceWithAppid:appid resourceFilePath:appResourcePath password:nil error:&error]) {
            NSLog(@"小程序 %@ 应用资源文件部署成功，版本信息：%@",appid,[DCUniMPSDKEngine getUniMPVersionInfoWithAppid:appid]);
        } else {
            NSLog(@"小程序 %@ 应用资源部署失败： %@",appid,error);
        }
    } else {
        NSLog(@"已存在小程序 %@ 应用资源，版本信息：%@",appid,[DCUniMPSDKEngine getUniMPVersionInfoWithAppid:appid]);
    }
}
```

打开小程序应用

```objective-c
/// 打开 uni 小程序
- (IBAction)openUniMP:(id)sender {
    // 初始化小程序的配置信息对象
    DCUniMPConfiguration *configuration = [[DCUniMPConfiguration alloc] init];
    [DCUniMPSDKEngine openUniMP:k_AppId configuration:configuration completed:^(DCUniMPInstance * _Nullable uniMPInstance, NSError * _Nullable error) {
        if (uniMPInstance) {
            // success
        } else {
            // error
        }
    }];
}
```

实现代理方法

```objective-c
#pragma mark - DCUniMPSDKEngineDelegate
/// DCUniMPMenuActionSheetItem 点击触发回调方法
- (void)defaultMenuItemClicked:(NSString *)appid identifier:(NSString *)identifier {
    NSLog(@"标识为 %@ 的 item 被点击了", identifier);
}

/// 返回打开小程序时的自定义闪屏视图
- (UIView *)splashViewForApp:(NSString *)appid {
    UIView *splashView = [[[NSBundle mainBundle] loadNibNamed:@"SplashView" owner:self options:nil] lastObject];
    return splashView;
}
```

至此示例代码部分已完成，可以运行查看效果

### tips

- 集成遇到问题请先参考一下SDK目录中提供的demo工程，和查看一下 [常见问题](https://nativesupport.dcloud.net.cn/UniMPDocs/FAQ/ios)
- 本篇示例只讲解了集成基础模块，其他功能模块集成请参考 [内置功能模块集成](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/ios/ios)
- 小程序的一些使用技巧比如启动传参、启动直达二级页面等，更多 API 请参考 [功能示例](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e5%b0%8f%e7%a8%8b%e5%ba%8f)
- 内置功能如不满足您的需求可以通过扩展原生能力来自行实现参考文档 [iOS扩展原生能力](https://nativesupport.dcloud.net.cn/UniMPDocs/Extension/ios)
- 欢迎加入 uni小程序SDK官方QQ 交流群：892918401

### 应用资源管理

#### uni小程序的应用资源集成方式
生成的 uni小程序 wgt 资源包可以**部署到远程服务器动态下发**也可以**直接内置到工程中**。然后通过 DCUniMPSDKEngine 类的`installUniMPResourceWithAppid:resourceFilePath:password:error:`方法传入wgt资源路径即可将wgt资源部署到运行路径。然后通过`openUniMP:configuration:completed:` 运行uni小程序应用。

#### uni小程序应用资源升级

1. **宿主触发更新：**宿主更新 wgt 可以选择从云端下载新的 wgt 资源包或在 App 升级时内置新的 wgt 包，然后调用 DCUniMPSDKEngine 类的`installUniMPResourceWithAppid:resourceFilePath:password:error:`方法传入 wgt 资源路径即可将wgt资源部署到运行路径，覆盖原有应用资源。 **注意：宿主应对 wgt 资源包做好版本管理**

2. **小程序触发更新：**小程序内下载新的wgt包，然后调用更新api应用新的wgt资源，具体请参考 [wgt 资源在线升级/热更新](https://ask.dcloud.net.cn/article/35667)



#### uni小程序应用删除

可通过 DCUniMPSDKEngine 类的 `getUniMPRunPathWithAppid:` 方法获取应用运行路径，删除应用资源即可；
