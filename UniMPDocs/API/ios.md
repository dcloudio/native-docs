## DCUniMPSDKEngine

### 初始化 sdk 全局环境
```objective-c
/// 初始化 sdk 全局环境
/// @param options 启动参数
+ (void)initSDKEnvironmentWihtLaunchOptions:(NSDictionary *)options;
```

初始化 sdk engine，并设置启动参数，建议在 application:didFinishLaunchingWithOptions 方法中添加

### App系统生命周期事件方法

需要在 App 系统生命周期方法中调用 SDK 相关方法

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


### 获取uni小程序应用资源部署路径

```objective-c
/// 获取 App 运行路径，注：需要将应用资源放到此路径下
/// @param appid appid
+ (NSString *)getAppRunPathWithAppid:(NSString *)appid;
```

### 判断应用资源是否已经部署

```objective-c
/// 运行目录中是否已经存在 App
/// @param appid appid
+ (BOOL)isExistsApp:(NSString *)appid;
```

### 将wgt应用资源包部署到运行路径中

```objective-c
/// 将wgt应用资源包部署到运行路径中
/// @param appid appid
/// @param wgtPath wgt应用资源包路径
+ (BOOL)releaseAppResourceToRunPathWithAppid:(NSString *)appid
                            resourceFilePath:(NSString *)wgtPath;
```

### 启动小程序应用

```objective-c
/// 启动小程序 2.7.15+ 支持
/// @param appid appid
/// @param configuration 小程序的配置信息
/// @param completionBlock 方法执行回调
+ (void)openUniMP:(NSString *)appid
    configuration:(DCUniMPConfiguration *)configuration
        completed:(DCUniMPCompletionBlock)completionBlock;
```


```objective-c
/// 启动 App 已废弃
/// @param appid appid
/// @param arguments 启动参数（可以在小程序中通过 plus.runtime.arguments 获取此参数）
+ (void)openApp:(NSString *)appid
      arguments:(NSDictionary * __nullable)arguments __attribute__((deprecated("deprecated, Use -openUniMP:configuration:completed:")));


/// 启动 App 已废弃
/// @param appid appid
/// @param arguments 启动参数（可以在小程序中通过 plus.runtime.arguments 获取此参数）
/// @param redirectPath 启动后直接打开的页面路径 例："pages/component/view/view?a=1&b=2"
+ (void)openApp:(NSString *)appid
      arguments:(NSDictionary * _Nullable)arguments
   redirectPath:(NSString * _Nullable)redirectPath __attribute__((deprecated("deprecated, Use -openUniMP:configuration:completed:")));
```

**DCUniMPCompletionBlock**

```
/// 加载小程序 block 回调
/// uniMPInstance: 加载成功返回小程序实例，失败则为 nil
/// error：失败信息
typedef void(^DCUniMPCompletionBlock)(DCUniMPInstance *_Nullable uniMPInstance, NSError *_Nullable error);
```

### 预加载小程序
> 2.7.15+ 支持

```objective-c
/// 预加载小程序
/// @param appid appid
/// @param configuration 小程序的配置信息
/// @param completionBlock 方法执行回调
+ (void)preloadUniMP:(NSString *)appid
       configuration:(DCUniMPConfiguration * __nullable)configuration
           completed:(DCUniMPCompletionBlock)completionBlock;
```

### 关闭当前小程序应用

```objective-c
/// 关闭当前小程序应用
+ (void)closeUniMP;
```

### 获取当前运行的小程序appid

```objective-c
/// 获取当前运行的小程序appid
+ (NSString *)getActiveUniMPAppid;
```

### 获取当前小程序页面的直达链接url

```objective-c
/// 获取当前小程序页面的直达链接url
+ (NSString *)getCurrentPageUrl;
```

### 获取已经部署的小程序应用资源版本信息

```objective-c
/// 获取已经部署的小程序应用资源版本信息
/// @param appid appid
/// 返回数据为 manifest 中的配置信息
/// {
///     "name": "1.0.0",     // 应用版本名称
///     "code": 100          // 应用版本号
/// }
+ (NSDictionary *__nullable)getUniMPVersionInfoWithAppid:(NSString *)appid;
```

### 向小程序发送事件

```objective-c
/// 向小程序发送事件
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
+ (void)sendUniMPEvent:(NSString *)event data:(id)data;
```

### 设置导航栏上的胶囊按钮显示还是隐藏（默认显示）

```objective-c
/// 设置导航栏上的胶囊按钮显示还是隐藏（默认显示）
/// @param menuButtonHidden Bool 是否隐藏胶囊按钮
+ (void)setMenuButtonHidden:(BOOL)menuButtonHidden;
```objective-c

### 配置点击菜单按钮弹出 ActionSheet 视图的样式

```objective-c
/// 配置点击菜单按钮弹出 ActionSheet 视图的样式
/// @param menuActionSheetStyle DCUniMPMenuActionSheetStyle
+ (void)configMenuActionSheetStyle:(DCUniMPMenuActionSheetStyle *)menuActionSheetStyle;
```

### 配置胶囊按钮菜单 ActionSheet 全局项

```objective-c
/// 配置胶囊按钮菜单 ActionSheet 全局项
/// @param items DCUniMPMenuActionSheetItem 数组
+ (void)setDefaultMenuItems:(NSArray<DCUniMPMenuActionSheetItem *> *)items;
```

### 设置 DCUniMPSDKEngineDelegate

```objective-c
/// 设置 DCUniMPSDKEngineDelegate
/// @param delegate 代理对象
+ (void)setDelegate:(id<DCUniMPSDKEngineDelegate>)delegate;
```


### DCUniMPSDKEngineDelegate 相关方法

```objective-c
/// 回调数据给小程序
/// result：回调参数支持 NSString 或 NSDictionary 类型
/// keepAlive：如果 keepAlive 为 YES，则可以多次回调数据给小程序，反之触发一次后回调方法即被移除
typedef void (^DCUniMPKeepAliveCallback)(id result, BOOL keepAlive);

@optional
/// 胶囊按钮菜单 ActionSheetItem 点击回调方法
/// @param identifier item 项的标识
- (void)defaultMenuItemClicked:(NSString *)identifier;

/// 返回打开小程序时的闪屏视图
/// @param appid appid
- (UIView *)splashViewForApp:(NSString *)appid;

/// 关闭小程序的回调方法
/// @param appid appid
- (void)uniMPOnClose:(NSString *)appid;


/// 小程序向原生发送事件回调方法
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param callback 回调数据给小程序
- (void)onUniMPEventReceive:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback;
```

## DCUniMPConfiguration
> 2.7.15+ 支持

DCUniMPConfiguration 类为小程序提供配置信息

### 支持的属性

```
@property (nonatomic, strong, nullable) NSDictionary *arguments; /**< 启动参数（在小程序中通过 plus.runtime.arguments 获取此参数）默认：nil*/
@property (nonatomic, copy, nullable) NSString *redirectPath;   /**< 启动后直接打开的页面路径 例："pages/component/view/view?a=1&b=2" 默认：nil*/
@property (nonatomic, assign) BOOL enableBackground;    /**< 是否开启后台运行（退出小程序时隐藏到后台不销毁小程序应用） 默认：NO*/
@property (nonatomic, assign) BOOL showAnimated;    /**< 是否开启 show 小程序时的动画效果 默认：YES */
@property (nonatomic, assign) BOOL hideAnimated;    /**< 是否开启 hide 时的动画效果 默认：YES*/
```

## DCUniMPConfiguration
> 2.7.15+ 支持
 
### DCUniMPResultBlock
```
/// 方法执行回调block
/// @param success 是否执行成功
/// @param error 失败信息
typedef void(^DCUniMPResultBlock)(BOOL success, NSError *_Nullable error);
```

### 将小程序显示到前台
```
- (void)showWithCompletion:(DCUniMPResultBlock)completion;
```

### 将小程序隐藏到后台
```
- (void)hideWithCompletion:(DCUniMPResultBlock)completion;
```

### 关闭小程序
```
- (void)closeWithCompletion:(DCUniMPResultBlock)completion;
```