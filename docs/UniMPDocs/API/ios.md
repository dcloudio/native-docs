## DCUniMPSDKEngine

### 初始化 sdk 全局环境
```objc
/// 初始化 sdk 全局环境
/// @param options 启动参数
+ (void)initSDKEnvironmentWihtLaunchOptions:(NSDictionary *)options;
```

初始化 sdk engine，并设置启动参数，建议在 application:didFinishLaunchingWithOptions 方法中添加

### App系统生命周期事件方法

需要在 App 系统生命周期方法中调用 SDK 相关方法

**示例**

```objc
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

```objc
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


### 获取uni小程序应用资源部署路径

```objc
/// 获取 App 运行路径，注：需要将应用资源放到此路径下 （3.3.7+ 支持）
/// @param appid appid
+ (NSString *)getUniMPRunPathWithAppid:(NSString *)appid;
```

```objc
/// 获取 App 运行路径，注：需要将应用资源放到此路径下 (3.3.7+ 已废弃)
/// @param appid appid
+ (NSString *)getAppRunPathWithAppid:(NSString *)appid;
```

### 判断应用资源是否已经部署

```objc
/// 运行目录中是否已经存在小程序资源 （3.3.7+ 支持）
/// @param appid appid
+ (BOOL)isExistsUniMP:(NSString *)appid;
```

```objc
/// 运行目录中是否已经存在 App （3.3.7+ 已废弃）
/// @param appid appid
+ (BOOL)isExistsApp:(NSString *)appid;
```

### 将wgt应用资源包部署到运行路径中 @installwgt

```objc
/// 将wgt资源部署到运行路径中 (3.3.7+ 支持)
/// @param appid appid
/// @param wgtPath wgt资源路径
/// @param password wgt资源解压密码（没有密码传 nil）
/// @param error 解压报错对应的 Error
+ (BOOL)installUniMPResourceWithAppid:(NSString *)appid
                     resourceFilePath:(NSString *)wgtPath
                             password:(nullable NSString *)password
                                error:(NSError * *)error;
```

```
/// 将wgt应用资源包部署到运行路径中 （3.3.7+ 已废弃）
/// @param appid appid
/// @param wgtPath wgt应用资源包路径
+ (BOOL)releaseAppResourceToRunPathWithAppid:(NSString *)appid
                            resourceFilePath:(NSString *)wgtPath;
```

### 启动小程序应用

```objc
/// 启动小程序 （2.8.0+ 支持）
/// @param appid appid
/// @param configuration 小程序的配置信息
/// @param completionBlock 方法执行回调
+ (void)openUniMP:(NSString *)appid
    configuration:(DCUniMPConfiguration *)configuration
        completed:(DCUniMPCompletionBlock)completionBlock;
```


```objc
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

```objc
/// 加载小程序 block 回调
/// uniMPInstance: 加载成功返回小程序实例，失败则为 nil
/// error：失败信息
typedef void(^DCUniMPCompletionBlock)(DCUniMPInstance *_Nullable uniMPInstance, NSError *_Nullable error);
```

### 预加载小程序
> 2.8.0+ 支持

```objc
/// 预加载小程序
/// @param appid appid
/// @param configuration 小程序的配置信息
/// @param completionBlock 方法执行回调
+ (void)preloadUniMP:(NSString *)appid
       configuration:(DCUniMPConfiguration * __nullable)configuration
           completed:(DCUniMPCompletionBlock)completionBlock;
```

### 关闭当前小程序应用

```objc
/// 关闭当前小程序应用
+ (void)closeUniMP;
```

### 获取当前运行的小程序appid

```objc
/// 获取当前运行的小程序appid
+ (NSString *)getActiveUniMPAppid;
```

### 获取当前小程序页面的直达链接url

```objc
/// 获取当前小程序页面的直达链接url
+ (NSString *)getCurrentPageUrl;
```

### 获取已经部署的小程序应用资源版本信息

```objc
/// 获取已经部署的小程序应用资源版本信息
/// @param appid appid
/// 返回数据为 manifest 中的配置信息
/// {
///     "name": "1.0.0",     // 应用版本名称
///     "code": 100          // 应用版本号
/// }
+ (NSDictionary *__nullable)getUniMPVersionInfoWithAppid:(NSString *)appid;
```

### 获取小程序对应的 ViewController 实例
> 3.0.0+ 版本支持

```objc
/// 小程序打开状态，调用此方法可获取小程序对应的 ViewController 实例
+ (UIViewController *)getUniMPViewController;
```


### 小程序页面关闭时设置原生导航栏的显隐 @setnavigationbarhidden
> 3.1.0+ 版本支持

**说明：** 当小程序是通过 DCUniMPOpenModePush 方式打开（即通过原生导航控制器push方式打开小程序页面）如果系统导航栏是显示状态，进入小程序时会隐藏系统导航栏并在小程序页面关闭或从小程序页面在 push 到宿主其他原生页面时会将系统导航栏恢复之前的显隐状态；如果您想控制导航栏的显隐可通过此方法来实现 <br>
**场景：** 在显示系统导航栏的页面 push 进入小程序页面，从小程序页面 push 到其他原生页面时需要隐藏系统导航栏，则可以在跳转页面前调用此方法来处理；

```objc
/// 注意：只有通过 push 的方式打开小程序才生效
/// @param hidden 是否隐藏
+ (void)whenUniMPCloseSetNavigationBarHidden:(BOOL)hidden;
```

### 设置 push 打开方式小程序内是否自动控制原生导航栏的显隐（默认控制）
> 3.1.22+ 支持

```objc
/// 设置 push 打开方式小程序内是否自动控制原生导航栏的显隐（默认控制）
/// @param isControl Bool
+ (void)setAutoControlNavigationBar:(BOOL)isControl;
```

### 向小程序发送事件（已废弃，使用 DCUniMPInstance 实例方法）

```objc
/// 向小程序发送事件
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
+ (void)sendUniMPEvent:(NSString *)event data:(id)data;
```

### 设置导航栏上的胶囊按钮显示还是隐藏（默认显示）

```objc
/// 设置导航栏上的胶囊按钮显示还是隐藏（默认显示） （3.1.22+ 支持）
/// @param capsuleButtonHidden Bool 是否隐藏胶囊按钮
+ (void)setCapsuleButtonHidden:(BOOL)capsuleButtonHidden;
```


```objc
/// 设置导航栏上的胶囊按钮显示还是隐藏（默认显示）(已废弃)
/// @param menuButtonHidden Bool 是否隐藏胶囊按钮
+ (void)setMenuButtonHidden:(BOOL)menuButtonHidden;
```

### 配置胶囊按钮样式
> 3.1.22+ 版本支持

```objc
/// 配置胶囊按钮样式
/// @param capsuleButtonStyle DCUniMPCapsuleButtonStyle
+ (void)configCapsuleButtonStyle:(DCUniMPCapsuleButtonStyle *)capsuleButtonStyle;
```

### 配置点击菜单按钮弹出 ActionSheet 视图的样式

```objc
/// 配置点击菜单按钮弹出 ActionSheet 视图的样式
/// @param menuActionSheetStyle DCUniMPMenuActionSheetStyle
+ (void)configMenuActionSheetStyle:(DCUniMPMenuActionSheetStyle *)menuActionSheetStyle;
```

### 配置胶囊按钮菜单 ActionSheet 全局项

```objc
/// 配置胶囊按钮菜单 ActionSheet 全局项
/// @param items DCUniMPMenuActionSheetItem 数组
+ (void)setDefaultMenuItems:(NSArray<DCUniMPMenuActionSheetItem *> *)items;
```

### 设置 DCUniMPSDKEngineDelegate

```objc
/// 设置 DCUniMPSDKEngineDelegate
/// @param delegate 代理对象
+ (void)setDelegate:(id<DCUniMPSDKEngineDelegate>)delegate;
```


### DCUniMPSDKEngineDelegate 相关方法

```objc
/// 拦截胶囊`x`关闭按钮事件，注意：实现该方法后框架内不会执行关闭小程序的逻辑，需要宿主自行处理逻辑 （3.2.9+ 支持）
/// @param appid appid
- (void)hookCapsuleCloseButtonClicked:(NSString *)appid;
```

```objc
/// 拦截胶囊`···`菜单按钮事件，注意：实现该方法后框架内不会弹出actionSheet弹窗，需宿主自行处理逻辑 （3.2.9+ 支持）
/// @param appid appid
- (void)hookCapsuleMenuButtonClicked:(NSString *)appid;
```


```objc
/// 胶囊按钮‘x’关闭按钮点击回调 （3.1.22+ 支持）
/// @param appid appid
- (void)closeButtonClicked:(NSString *)appid;
```

```objc
/// 胶囊按钮菜单 ActionSheetItem 点击回调方法
/// @param appid appid
/// @param identifier item 项的标识
- (void)defaultMenuItemClicked:(NSString *)appid identifier:(NSString *)identifier;
```

```objc
/// 返回打开小程序时的闪屏视图
/// @param appid appid
- (UIView *)splashViewForApp:(NSString *)appid;
```

```objc
/// 关闭小程序的回调方法
/// @param appid appid
- (void)uniMPOnClose:(NSString *)appid;
```

```objc
/// 小程序向原生发送事件回调方法
/// @param appid 对应小程序的appid
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param callback 回调数据给小程序
- (void)onUniMPEventReceive:(NSString *)appid event:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback;


/// 回调数据给小程序
/// result：回调参数支持 NSString 或 NSDictionary 类型
/// keepAlive：如果 keepAlive 为 YES，则可以多次回调数据给小程序，反之触发一次后回调方法即被移除
typedef void (^DCUniMPKeepAliveCallback)(id result, BOOL keepAlive);

```

## DCUniMPConfiguration
> 2.8.0+ 支持

DCUniMPConfiguration 类为小程序提供配置信息

### 支持的属性

```
@property (nonatomic, strong, nullable) NSDictionary *arguments; /**< 启动参数（在小程序中通过 plus.runtime.arguments 获取此参数）默认：nil*/
@property (nonatomic, copy, nullable) NSString *redirectPath;   /**< 启动后直接打开的页面路径 例："pages/component/view/view?a=1&b=2" 默认：nil*/
@property (nonatomic, assign) BOOL enableBackground;    /**< 是否开启后台运行（退出小程序时隐藏到后台不销毁小程序应用） 默认：NO*/
@property (nonatomic, assign) BOOL showAnimated;    /**< 是否开启 show 小程序时的动画效果 默认：YES */
@property (nonatomic, assign) BOOL hideAnimated;    /**< 是否开启 hide 时的动画效果 默认：YES*/
@property (nonatomic, assign) DCUniMPOpenMode openMode;  /**<（3.0.0+支持） 打开小程序的方式 默认： DCUniMPOpenModePresent*/
@property(nonatomic, assign) BOOL enableGestureClose;   /**<（3.0.0+支持）是否开启手势关闭小程序 默认：NO */
```

## DCUniMPInstance
> 2.8.0+ 支持

### DCUniMPResultBlock
```objc
/// 方法执行回调block
/// @param success 是否执行成功
/// @param error 失败信息
typedef void(^DCUniMPResultBlock)(BOOL success, NSError *_Nullable error);
```

### 将小程序显示到前台
```objc
- (void)showWithCompletion:(DCUniMPResultBlock)completion;
```

### 将小程序隐藏到后台
```objc
- (void)hideWithCompletion:(DCUniMPResultBlock)completion;
```

### 关闭小程序
```objc
- (void)closeWithCompletion:(DCUniMPResultBlock)completion;
```

### 向小程序发送事件 @sendunimpevent

> 3.2.1+ 支持

```objc
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
- (void)sendUniMPEvent:(NSString *)event data:(id __nullable)data;
```
