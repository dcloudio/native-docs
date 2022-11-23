## DCUniMPSDKEngine

### 初始化 sdk 全局环境
### Initialize the sdk global environment
```objective-c
/// 初始化 sdk 全局环境
/// Initialize the sdk global environment
/// @param options 启动参数
/// @param options startup parameters
+ (void)initSDKEnvironmentWihtLaunchOptions:(NSDictionary *)options;
```

初始化 sdk engine，并设置启动参数，建议在 application:didFinishLaunchingWithOptions 方法中添加
Initialize the sdk engine and set the startup parameters, it is recommended to add in the application:didFinishLaunchingWithOptions method

### App系统生命周期事件方法
### App system life cycle event method

需要在 App 系统生命周期方法中调用 SDK 相关方法
SDK-related methods need to be called in App system lifecycle methods

**示例**
**example**

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
### App system event callback method

可根据项目需求，选择实现以下方法
According to the needs of the project, you can choose to implement the following methods

```objective-c
#pragma mark - 如果需要使用 URL Scheme 或 通用链接相关功能，请实现以下方法  
#pragma mark - If you need to use URL Scheme or universal link related functions, please implement the following methods
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {  
    // 通过 url scheme 唤起 App  
    // invoke the App via the url scheme
    [DCUniMPSDKEngine application:app openURL:url options:options];  
    return YES;  
}  

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {  
    // 通过通用链接唤起 App  
    // invoke the App via a universal link
    [DCUniMPSDKEngine application:application continueUserActivity:userActivity];  
    return YES;  
}  

```


### 获取uni小程序应用资源部署路径
### Get the uni applet application resource deployment path

```objective-c
/// 获取 App 运行路径，注：需要将应用资源放到此路径下 （3.3.7+ 支持）
/// @param appid appid
+ (NSString *)getUniMPRunPathWithAppid:(NSString *)appid;
```

```
/// 获取 App 运行路径，注：需要将应用资源放到此路径下 (3.3.7+ 已废弃)
/// @param appid appid
+ (NSString *)getAppRunPathWithAppid:(NSString *)appid;
```

### 判断应用资源是否已经部署
### Determine whether the application resource has been deployed

```objective-c
/// 运行目录中是否已经存在小程序资源 （3.3.7+ 支持）
/// @param appid appid
+ (BOOL)isExistsUniMP:(NSString *)appid;
```

```
/// 运行目录中是否已经存在 App （3.3.7+ 已废弃）
/// @param appid appid
+ (BOOL)isExistsApp:(NSString *)appid;
```

<h3 id="installWgt"></h3>
### 将wgt应用资源包部署到运行路径中
### Deploy the wgt application resource package to the running path

```objective-c
/// 将wgt资源部署到运行路径中 (3.3.7+ 支持)
/// @param appid appid
/// @param wgtPath wgt资源路径
/// @param wgtPath wgt resource path
/// @param password wgt资源解压密码（没有密码传 nil）
/// @param password wgt resource decompression password (pass nil without password)
/// @param error 解压报错对应的 Error
/// @param error Error corresponding to decompression error
+ (BOOL)installUniMPResourceWithAppid:(NSString *)appid
                     resourceFilePath:(NSString *)wgtPath
                             password:(nullable NSString *)password
                                error:(NSError * *)error;
```

```
/// 将wgt应用资源包部署到运行路径中 （3.3.7+ 已废弃）
/// @param appid appid
/// @param wgtPath wgt应用资源包路径
/// @param wgtPath wgt application resource package path
+ (BOOL)releaseAppResourceToRunPathWithAppid:(NSString *)appid
                            resourceFilePath:(NSString *)wgtPath;
```

### 启动小程序应用
### Start the applet application

```objective-c
/// 启动小程序 （2.8.0+ 支持）
/// @param appid appid
/// @param configuration 小程序的配置信息
/// @param configuration The configuration information of the applet
/// @param completionBlock 方法执行回调
/// @param completionBlock method execution callback
+ (void)openUniMP:(NSString *)appid
    configuration:(DCUniMPConfiguration *)configuration
        completed:(DCUniMPCompletionBlock)completionBlock;
```


```objective-c
/// 启动 App 已废弃
/// @param appid appid
/// @param arguments 启动参数（可以在小程序中通过 plus.runtime.arguments 获取此参数）
/// @param arguments startup parameters (you can get this parameter through plus.runtime.arguments in the applet)
+ (void)openApp:(NSString *)appid
      arguments:(NSDictionary * __nullable)arguments __attribute__((deprecated("deprecated, Use -openUniMP:configuration:completed:")));


/// 启动 App 已废弃
/// @param appid appid
/// @param arguments 启动参数（可以在小程序中通过 plus.runtime.arguments 获取此参数）
/// @param arguments startup parameters (you can get this parameter through plus.runtime.arguments in the applet)
/// @param redirectPath 启动后直接打开的页面路径 例："pages/component/view/view?a=1&b=2"
/// @param redirectPath The page path opened directly after startup Example: "pages/component/view/view?a=1&b=2"
+ (void)openApp:(NSString *)appid
      arguments:(NSDictionary * _Nullable)arguments
   redirectPath:(NSString * _Nullable)redirectPath __attribute__((deprecated("deprecated, Use -openUniMP:configuration:completed:")));
```

**DCUniMPCompletionBlock**

```
/// 加载小程序 block 回调
/// Load applet block callback
/// uniMPInstance: 加载成功返回小程序实例，失败则为 nil
/// uniMPInstance: The mini program instance is returned if the loading is successful, and nil if it fails
/// error：失败信息
/// error: failure information
typedef void(^DCUniMPCompletionBlock)(DCUniMPInstance *_Nullable uniMPInstance, NSError *_Nullable error);
```

### 预加载小程序
### Preload applet
> 2.8.0+ 支持
> 2.8.0+ support

```objective-c
/// 预加载小程序
/// @param appid appid
/// @param configuration 小程序的配置信息
/// @param configuration The configuration information of the applet
/// @param completionBlock 方法执行回调
/// @param completionBlock method execution callback
+ (void)preloadUniMP:(NSString *)appid
       configuration:(DCUniMPConfiguration * __nullable)configuration
           completed:(DCUniMPCompletionBlock)completionBlock;
```

### 关闭当前小程序应用
### Close the current applet application

```objective-c
/// 关闭当前小程序应用
/// Close the current applet application
+ (void)closeUniMP;
```

### 获取当前运行的小程序appid
### Get the currently running applet appid

```objective-c
/// 获取当前运行的小程序appid
/// Get the currently running applet appid
+ (NSString *)getActiveUniMPAppid;
```

### 获取当前小程序页面的直达链接url
### Get the direct link url of the current applet page

```objective-c
/// 获取当前小程序页面的直达链接url
/// Get the direct link url of the current applet page
+ (NSString *)getCurrentPageUrl;
```

### 获取已经部署的小程序应用资源版本信息
### Get the version information of the deployed Mini Program application resources

```objective-c
/// 获取已经部署的小程序应用资源版本信息
/// @param appid appid
/// 返回数据为 manifest 中的配置信息
/// {
///     "name": "1.0.0",     // 应用版本名称
/// "name": "1.0.0", // Application version name
///     "code": 100          // 应用版本号
/// }
+ (NSDictionary *__nullable)getUniMPVersionInfoWithAppid:(NSString *)appid;
```

### 获取小程序对应的 ViewController 实例
### Get the ViewController instance corresponding to the applet
> 3.0.0+ 版本支持
> 3.0.0+ version support

```
/// 小程序打开状态，调用此方法可获取小程序对应的 ViewController 实例
/// The open state of the applet, call this method to get the ViewController instance corresponding to the applet
+ (UIViewController *)getUniMPViewController;
```

<h3 id="SetNavigationBarHidden"></h3>
### 小程序页面关闭时设置原生导航栏的显隐
### Set the visibility of the native navigation bar when the applet page is closed
> 3.1.0+ 版本支持
> 3.1.0+ version support

**说明：**当小程序是通过 DCUniMPOpenModePush 方式打开（即通过原生导航控制器push方式打开小程序页面）如果系统导航栏是显示状态，进入小程序时会隐藏系统导航栏并在小程序页面关闭或从小程序页面在 push 到宿主其他原生页面时会将系统导航栏恢复之前的显隐状态；如果您想控制导航栏的显隐可通过此方法来实现 <br>
**Note: **When the applet is opened by DCUniMPOpenModePush (that is, the applet page is opened by native navigation controller push), if the system navigation bar is displayed, the system navigation bar will be hidden and displayed on the applet page when entering the applet. When the applet page is closed or pushed to host other native pages, the system navigation bar will be restored to its previous visible and hidden state; if you want to control the visible and hidden of the navigation bar, you can use this method to achieve it<br>
**场景：**在显示系统导航栏的页面 push 进入小程序页面，从小程序页面 push 到其他原生页面时需要隐藏系统导航栏，则可以在跳转页面前调用此方法来处理；
**Scenario: **Push the page displaying the system navigation bar to enter the applet page. When pushing from the applet page to other native pages, you need to hide the system navigation bar. You can call this method to handle it before jumping to the page;

```
/// 注意：只有通过 push 的方式打开小程序才生效
/// Note: Only when the applet is opened via push will it take effect
/// @param hidden 是否隐藏
/// @param hidden Whether to hide
+ (void)whenUniMPCloseSetNavigationBarHidden:(BOOL)hidden;
```

### 设置 push 打开方式小程序内是否自动控制原生导航栏的显隐（默认控制）
### Set whether to automatically control the visibility of the native navigation bar in the push open mode applet (default control)
> 3.1.22+ 支持
> 3.1.22+ support

```
/// 设置 push 打开方式小程序内是否自动控制原生导航栏的显隐（默认控制）
/// @param isControl Bool
+ (void)setAutoControlNavigationBar:(BOOL)isControl;
```

### 向小程序发送事件（已废弃，使用 DCUniMPInstance 实例方法）
### Send events to applets (deprecated, use DCUniMPInstance instance method)

```objective-c
/// 向小程序发送事件
/// Send events to the applet
/// @param event 事件名称
/// @param event event name
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param data data: NSString or NSDictionary type
+ (void)sendUniMPEvent:(NSString *)event data:(id)data;
```

### 设置导航栏上的胶囊按钮显示还是隐藏（默认显示）
### Set whether to display or hide the capsule button on the navigation bar (default display)

```
/// 设置导航栏上的胶囊按钮显示还是隐藏（默认显示） （3.1.22+ 支持）
/// Set whether to display or hide the capsule button on the navigation bar (default display) (supported by 3.1.22+)
/// @param capsuleButtonHidden Bool 是否隐藏胶囊按钮
/// @param capsuleButtonHidden Bool Whether to hide the capsule button
+ (void)setCapsuleButtonHidden:(BOOL)capsuleButtonHidden;
```


```objective-c
/// 设置导航栏上的胶囊按钮显示还是隐藏（默认显示）(已废弃)
/// Set whether to display or hide the capsule button on the navigation bar (default display) (deprecated)
/// @param menuButtonHidden Bool 是否隐藏胶囊按钮
/// @param menuButtonHidden Bool Whether to hide the capsule button
+ (void)setMenuButtonHidden:(BOOL)menuButtonHidden;
```

### 配置胶囊按钮样式
### Configure capsule button style
> 3.1.22+ 版本支持
> 3.1.22+ version support

```
/// 配置胶囊按钮样式
/// @param capsuleButtonStyle DCUniMPCapsuleButtonStyle
+ (void)configCapsuleButtonStyle:(DCUniMPCapsuleButtonStyle *)capsuleButtonStyle;
```

### 配置点击菜单按钮弹出 ActionSheet 视图的样式
### Configure the style of the ActionSheet view that pops up when the menu button is clicked

```objective-c
/// 配置点击菜单按钮弹出 ActionSheet 视图的样式
/// @param menuActionSheetStyle DCUniMPMenuActionSheetStyle
+ (void)configMenuActionSheetStyle:(DCUniMPMenuActionSheetStyle *)menuActionSheetStyle;
```

### 配置胶囊按钮菜单 ActionSheet 全局项
### Configure capsule button menu ActionSheet global items

```objective-c
/// 配置胶囊按钮菜单 ActionSheet 全局项
/// Configure capsule button menu ActionSheet global items
/// @param items DCUniMPMenuActionSheetItem 数组
/// @param items DCUniMPMenuActionSheetItem array
+ (void)setDefaultMenuItems:(NSArray<DCUniMPMenuActionSheetItem *> *)items;
```

### 设置 DCUniMPSDKEngineDelegate
### Set DCUniMPSDKEngineDelegate

```objective-c
/// 设置 DCUniMPSDKEngineDelegate
/// Set DCUniMPSDKEngineDelegate
/// @param delegate 代理对象
/// @param delegate proxy object
+ (void)setDelegate:(id<DCUniMPSDKEngineDelegate>)delegate;
```


### DCUniMPSDKEngineDelegate 相关方法
### DCUniMPSDKEngineDelegate related methods

```
/// 拦截胶囊`x`关闭按钮事件，注意：实现该方法后框架内不会执行关闭小程序的逻辑，需要宿主自行处理逻辑 （3.2.9+ 支持）
/// @param appid appid
- (void)hookCapsuleCloseButtonClicked:(NSString *)appid;
```

```
/// 拦截胶囊`···`菜单按钮事件，注意：实现该方法后框架内不会弹出actionSheet弹窗，需宿主自行处理逻辑 （3.2.9+ 支持）
/// @param appid appid
- (void)hookCapsuleMenuButtonClicked:(NSString *)appid;
```


```
/// 胶囊按钮‘x’关闭按钮点击回调 （3.1.22+ 支持）
/// @param appid appid
- (void)closeButtonClicked:(NSString *)appid;
```

```
/// 胶囊按钮菜单 ActionSheetItem 点击回调方法
/// @param appid appid
/// @param identifier item 项的标识
/// @param identifier item identifier
- (void)defaultMenuItemClicked:(NSString *)appid identifier:(NSString *)identifier;
```

```
/// 返回打开小程序时的闪屏视图
/// @param appid appid
- (UIView *)splashViewForApp:(NSString *)appid;
```

```
/// 关闭小程序的回调方法
/// @param appid appid
- (void)uniMPOnClose:(NSString *)appid;
```

```
/// 小程序向原生发送事件回调方法
/// Small program sends event callback method to native
/// @param appid 对应小程序的appid
/// @param appid corresponds to the appid of the applet
/// @param event 事件名称
/// @param event event name
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param data data: NSString or NSDictionary type
/// @param callback 回调数据给小程序
/// @param callback callback data to applet
- (void)onUniMPEventReceive:(NSString *)appid event:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback;


/// 回调数据给小程序
/// Call back data to the applet
/// result：回调参数支持 NSString 或 NSDictionary 类型
/// result: The callback parameter supports NSString or NSDictionary type
/// keepAlive：如果 keepAlive 为 YES，则可以多次回调数据给小程序，反之触发一次后回调方法即被移除
/// keepAlive: If keepAlive is YES, you can call back data to the applet multiple times, otherwise the callback method will be removed after triggering once
typedef void (^DCUniMPKeepAliveCallback)(id result, BOOL keepAlive);

```

## DCUniMPConfiguration
> 2.8.0+ 支持
> 2.8.0+ support

DCUniMPConfiguration 类为小程序提供配置信息
DCUniMPConfiguration class provides configuration information for applets

### 支持的属性
### Supported attributes

```
@property (nonatomic, strong, nullable) NSDictionary *arguments; /**< 启动参数（在小程序中通过 plus.runtime.arguments 获取此参数）默认：nil*/
@property (nonatomic, strong, nullable) NSDictionary *arguments; /**< startup parameter (obtain this parameter in the applet through plus.runtime.arguments) default: nil*/
@property (nonatomic, copy, nullable) NSString *redirectPath;   /**< 启动后直接打开的页面路径 例："pages/component/view/view?a=1&b=2" 默认：nil*/
@property (nonatomic, copy, nullable) NSString *redirectPath; /**< The path of the page opened directly after startup Example: "pages/component/view/view?a=1&b=2" Default: nil*/
@property (nonatomic, assign) BOOL enableBackground;    /**< 是否开启后台运行（退出小程序时隐藏到后台不销毁小程序应用） 默认：NO*/
@property (nonatomic, assign) BOOL enableBackground; /**< Whether to enable background running (when exiting the applet, hide it in the background without destroying the applet application) Default: NO*/
@property (nonatomic, assign) BOOL showAnimated;    /**< 是否开启 show 小程序时的动画效果 默认：YES */
@property (nonatomic, assign) BOOL showAnimated; /**< Whether to enable the animation effect of the show applet Default: YES */
@property (nonatomic, assign) BOOL hideAnimated;    /**< 是否开启 hide 时的动画效果 默认：YES*/
@property (nonatomic, assign) BOOL hideAnimated; /**< Whether to enable the animation effect when hide is enabled Default: YES*/
@property (nonatomic, assign) DCUniMPOpenMode openMode;  /**<（3.0.0+支持） 打开小程序的方式 默认： DCUniMPOpenModePresent*/
@property (nonatomic, assign) DCUniMPOpenMode openMode; /**<(3.0.0+ support) The way to open the applet Default: DCUniMPOpenModePresent*/
@property(nonatomic, assign) BOOL enableGestureClose;   /**<（3.0.0+支持）是否开启手势关闭小程序 默认：NO */
@property(nonatomic, assign) BOOL enableGestureClose; /**<(3.0.0+ support) whether to enable gesture to close applet Default: NO */
```

## DCUniMPInstance
> 2.8.0+ 支持
> 2.8.0+ support
 
### DCUniMPResultBlock
```
/// 方法执行回调block
/// Method execution callback block
/// @param success 是否执行成功
/// @param success Whether the execution is successful
/// @param error 失败信息
/// @param error failure message
typedef void(^DCUniMPResultBlock)(BOOL success, NSError *_Nullable error);
```

### 将小程序显示到前台
### Display the applet to the foreground
```
- (void)showWithCompletion:(DCUniMPResultBlock)completion;
```

### 将小程序隐藏到后台
### Hide the applet to the background
```
- (void)hideWithCompletion:(DCUniMPResultBlock)completion;
```

### 关闭小程序
### Close the applet
```
- (void)closeWithCompletion:(DCUniMPResultBlock)completion;
```

<h3 id="sendUniMPEvent"></h3>
### 向小程序发送事件
### Send events to applets
> 3.2.1+ 支持
> 3.2.1+ support

```
/// @param event 事件名称
/// @param event event name
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param data data: NSString or NSDictionary type
- (void)sendUniMPEvent:(NSString *)event data:(id __nullable)data;
```