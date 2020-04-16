## DCUniMPSDKEngine 类

### 初始化 SDK 全局环境

```objective-c
/// @param options 初始化参数
+ (void)initSDKEnvironmentWihtLaunchOptions:(NSDictionary *)options;
```

初始化 sdk engine，并设置启动参数，建议在 application:didFinishLaunchingWithOptions 方法中添加

**示例**

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

### App系统生命周期事件方法

App 系统生命周期方法中调用 SDK 相关方法

**示例**

```objective-c
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

### App系统事件回调方法

可根据项目需求，选择实现以下方法

**示例**

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
    [DCUniMPSDKEngine application:application didFailToRegisterForRemoteNotificationsWithError:error];  
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

### 判断应用资源是否已经部署

```objective-c
+ (BOOL)isExistsApp:(NSString *)appid;
```

### 将wgt应用资源包部署到运行路径中

```objective-c
/// @param appid appid
/// @param wgtPath wgt应用资源包路径
+ (BOOL)releaseAppResourceToRunPathWithAppid:(NSString *)appid
                            resourceFilePath:(NSString *)wgtPath;
```

**示例**

```objective-c
if (![DCUniMPSDKEngine isExistsApp:k_AppId]) {
        // 读取导入到工程中的wgt应用资源
        NSString *appResourcePath = [[NSBundle mainBundle] pathForResource:k_AppId ofType:@"wgt"];
        if (!appResourcePath) {
            NSLog(@"资源路径不正确，请检查");
            return;
        }
        // 将应用资源部署到运行路径中
        if ([DCUniMPSDKEngine releaseAppResourceToRunPathWithAppid:k_AppId resourceFilePath:appResourcePath]) {
            NSLog(@"应用资源文件部署成功");
        }
}
```

### 打开小程序应用

```objective-c
/// @param appid appid
/// @param arguments 启动参数（可以在小程序中通过 plus.runtime.arguments 获取此参数）
/// @param redirectPath 启动后直接打开的页面路径 例："pages/component/view/view?a=1&b=2"
+ (void)openApp:(NSString *)appid
      arguments:(NSDictionary * _Nullable)arguments
   redirectPath:(NSString * _Nullable)redirectPath;

```

### 获取应用资源运行路径

```objective-c
+ (NSString *)getAppRunPathWithAppid:(NSString *)appid;
```

<a id="getUniMPVersionInfo"></a>
### 获取已经部署的小程序应用资源版本信息

```objective-c
+ (NSDictionary *)getUniMPVersionInfoWithAppid:(NSString *)appid;

注：返回数据如下对应小程序应用中 manifest.json 配置的信息
{
     "name": "1.0.0",     // 应用版本名称
     "code": 100          // 应用版本号
}
```

### 关闭当前小程序应用

```objective-c
+ (void)closeUniMP;
```

### 获取当前运行的小程序appid

```objective-c
+ (NSString *)getActiveUniMPAppid;
```

<a id="getCurrentPageUrl"></a>
### 获取当前显示小程序页面的直达链接url 
用于打开小程序直达二级页面

```objective-c
+ (NSString *)getCurrentPageUrl;
```