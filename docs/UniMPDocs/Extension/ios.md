## 概述
## Overview
扩展原生能力指的是将您原生开发的功能通过一定规范暴露给 uni小程序环境，然后即可在 uni小程序应用中调用您的原生功能。
Extending native capabilities refers to exposing your natively developed functions to the uni applet environment through certain specifications, and then you can call your native functions in the uni applet application.

### TIPS
[插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51&orderBy=UpdatedDate) 上的所有原生插件都支持在 uni小程序SDK 中集成使用，集成方式请 [参考文档](https://nativesupport.dcloud.net.cn/NativePlugin/offline_package/ios)（注：需要将插件包下载到本地集成，由于付费插件不提供下载，所有目前只能使用免费的插件）；
All native plug-ins on [Plug-in Market](https://ext.dcloud.net.cn/?cat1=5&cat2=51&orderBy=UpdatedDate) support integration in the uni applet SDK. For the integration method, please refer to [Reference Document]( https://nativesupport.dcloud.net.cn/NativePlugin/offline_package/ios) (Note: The plug-in package needs to be downloaded to the local integration, since paid plug-ins do not provide downloads, so currently only free plug-ins can be used);

### 扩展方式
### Extension method
uni 原生端是基于 WeexSDK 来实现扩展原生能力，扩展原生能力有两种方式：一种是不需要参与页面布局，只需要通过 API 调用原生功能，比如：获取当前定位信息、数据请求等功能，这种情况可通过扩展`module`的方式来实现；另一种是需要参与页面布局，比如：map、image，这种情况需要通过扩展`component`即组件的方法来实现；
The native end of uni is based on WeexSDK to realize the expansion of native capabilities. There are two ways to extend native capabilities: one is not required to participate in page layout, and only needs to call native functions through API, such as obtaining current location information, data requests and other functions. One case can be achieved by extending `module`; the other is that it needs to participate in page layout, such as: map, image, this case needs to be realized by extending `component`, that is, the method of components;

## 开发环境
## Development environment
- iOS开发环境，请使用 Xcode 11.0 及以上版本；
- iOS development environment, please use Xcode 11.0 and above;
- 已有集成 iOS uni小程序SDK 原生工程；[集成文档](UniMPDocs/UseSdk/ios.md)
- There is an integrated iOS uni applet SDK native project; [Integration Documentation](UniMPDocs/UseSdk/ios.md)
- 安装 uni小程序开发工具 [HBuilderX](https://www.dcloud.io/hbuilderx.html) （注：版本需与您使用的 uni小程序SDK 版本保持一致）
- Install the uni applet development tool [HBuilderX](https://www.dcloud.io/hbuilderx.html) (Note: The version must be consistent with the uni applet SDK version you use)

## 扩展 module
## Extend module
下面以`TestModule`为例，源码请查看 uni小程序SDK 包中的示例 demo 工程；
Let's take `TestModule` as an example, please refer to the sample demo project in the uni applet SDK package for the source code;

#### 1. 新建`TestModule`类，继承 `NSObject`，让该类遵循 `WXModuleProtocol` 的协议。
#### 1. Create a new `TestModule` class, inherit `NSObject`, and let this class follow the protocol of `WXModuleProtocol`.

```Objective-C
#import <Foundation/Foundation.h>
// 引入 WeexSDK.h 头文件
// import WeexSDK.h header file
#import "WeexSDK.h"

@interface TestModule : NSObject <WXModuleProtocol>

@end

```

#### 2. 添加实现方法
#### 2. Add implementation method

**异步方法实现**
**Asynchronous method implementation**

```Objective-C
/// 异步方法（注：异步方法会在主线程（UI线程）执行）
/// Asynchronous method (Note: The asynchronous method will be executed on the main thread (UI thread))
/// @param options js 端调用方法时传递的参数
/// @param options The parameters passed when calling the method on the js side
/// @param callback 回调方法，回传参数给 js 端
/// @param callback callback method, returns parameters to the js side
- (void)testAsyncFunc:(NSDictionary *)options callback:(WXModuleKeepAliveCallback)callback {
    // options 为 js 端调用此方法时传递的参数
    // options is the parameter passed when calling this method on the js side
    NSLog(@"%@",options);
    
    // 可以在该方法中实现原生能力，然后通过 callback 回调到 js
    // You can implement native capabilities in this method, and then call back to js through callback
    
    // 回调方法，传递参数给 js 端 注：只支持返回 String 或 NSDictionary (map) 类型
    // callback method, passing parameters to the js side Note: only supports returning String or NSDictionary (map) types
    if (callback) {
        // 第一个参数为回传给js端的数据，第二个参数为标识，表示该回调方法是否支持多次调用，如果原生端需要多次回调js端则第二个参数传 YES;
        // The first parameter is the data sent back to the js side, and the second parameter is the identifier, indicating whether the callback method supports multiple calls. If the native side needs to call back the js side multiple times, the second parameter is YES;
        callback(@"success",NO);
    }
}
```

通过宏 `WX_EXPORT_METHOD` 将异步方法暴露给 js 端，只有通过`WX_EXPORT_METHOD`暴露的原生方法才能被 js 端识别到
The asynchronous method is exposed to the js side through the macro `WX_EXPORT_METHOD`, and only the native method exposed through `WX_EXPORT_METHOD` can be recognized by the js side

```Objective-C
// 通过宏 WX_EXPORT_METHOD 将异步方法暴露给 js 端
// Expose the asynchronous method to the js side through the macro WX_EXPORT_METHOD
WX_EXPORT_METHOD(@selector(testAsyncFunc:callback:))
```

**同步方法实现**
**Synchronous method implementation**

```Objective-C
/// 同步方法（注：同步方法会在 js 线程执行）
/// Synchronous method (note: the synchronous method will be executed on the js thread)
/// @param options js 端调用方法时传递的参数
/// @param options The parameters passed when calling the method on the js side
- (NSString *)testSyncFunc:(NSDictionary *)options {
    // options 为 js 端调用此方法时传递的参数
    // options is the parameter passed when calling this method on the js side
    NSLog(@"%@",options);
    
    /*
     可以在该方法中实现原生功能，然后直接通过 return 返回参数给 js
     */
    
    // 同步返回参数给 js 端 注：只支持返回 String 或 NSDictionary (map) 类型
    // Synchronously return parameters to the js side Note: only supports returning String or NSDictionary (map) types
    return @"success";
}
```

通过宏 `WX_EXPORT_METHOD_SYNC` 将同步方法暴露给 js 端
Expose the synchronous method to the js side through the macro `WX_EXPORT_METHOD_SYNC`

```Objective-C
// 通过宏 WX_EXPORT_METHOD_SYNC 将同步方法暴露给 js 端
// Expose the synchronous method to the js side through the macro WX_EXPORT_METHOD_SYNC
WX_EXPORT_METHOD_SYNC(@selector(testSyncFunc:))
```

#### 3. 注册 module
#### 3. Register module

在初始化 DCUniMPSDKEngine 方法后，进行 module 的注册
After initializing the DCUniMPSDKEngine method, register the module

```Objective-C
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    ...
    // 初始化引擎
    // Initialize the engine
    [DCUniMPSDKEngine initSDKEnvironmentWihtLaunchOptions:options];
    
    // 注册 module 注：module的 Name 需要保证唯一， class：为 module 的类名
    // Register module Note: The Name of the module needs to be unique, class: the class name of the module
    [WXSDKEngine registerModule:@"TestModule" withClass:NSClassFromString(@"TestModule")];
    
    return YES;
}
``` 


到此，我们已经完成了一个简单的 module 扩展
So far, we have completed a simple module extension

#### 4. 在 uni小程序 中调用 module 方法
#### 4. Call the module method in the uni applet

module 支持在 vue 和 nvue 中使用
module supports use in vue and nvue

```Javascript
<template>
	<div>
		<button type="primary" @click="testAsyncFunc">testAsyncFunc</button>
		<button type="primary" @click="testSyncFunc">testSyncFunc</button>
	</div>
</template>

<script>
	// 获取 module 
	// get module
	var testModule = uni.requireNativePlugin("TestModule")
	export default {
		methods: {
			testAsyncFunc() {
				// 调用异步方法
				// call asynchronous method
				testModule.testAsyncFunc({
						'name': 'unimp',
						'age': 1
					},
					(ret) => {
						console.log(ret)
					})
			},
			testSyncFunc() {
				// 调用同步方法
				// call the synchronous method
				var ret = testModule.testSyncFunc({
					'name': 'unimp',
					'age': 1
				})
			}
		}
	}
</script>

```
然后可以导出 uni小程序资源，导入到 App 中查看效果； 
Then you can export the uni applet resource and import it into the App to view the effect;


## 扩展组件 component 
## Extension component component

下面以`TestComponent`为例，源码请查看 uni小程序SDK 包中的示例 demo 工程；
Let's take `TestComponent` as an example, please refer to the sample demo project in the uni applet SDK package for the source code;

#### 1. 新建`TestComponent`类，继承`WXComponent`类。如果这个类里什么代码也不写，它和默认的的 `view` 组件能力是一致的
#### 1. Create a new `TestComponent` class and inherit the `WXComponent` class. If no code is written in this class, it has the same capabilities as the default `view` component

```Objective-C
#import "WXComponent.h"

@interface TestComponent : WXComponent

@end

```
 
#### 2. 覆写 `WXComponent` 中的生命周期方法
#### 2. Override the lifecycle methods in `WXComponent`

**- `loadView` 方法**
**- `loadView` method**

一个组件默认对应于一个原生 view，如果未覆盖`loadView`提供自定义 view，基类会默认返回一个继承于 UIView 的实例。比如我们要实现一个组件支持地图功能，我们可以返回系统的 `MKMapView`。
A component corresponds to a native view by default. If `loadView` is not overridden to provide a custom view, the base class will return an instance inherited from UIView by default. For example, if we want to implement a component to support the map function, we can return the system's `MKMapView`.

```Objective-C
- (UIView *)loadView {
    return [MKMapView new];
}
```

**- `viewDidLoad`**

对组件 view 需要做一些配置，比如设置 delegate，可以在 `viewDidLoad` 生命周期做。如果当前 view 没有添加 subview 的话，不要设置 view 的 frame，WeexSDK 会根据 style 进行排版后设置。
Some configuration needs to be done on the component view, such as setting the delegate, which can be done in the `viewDidLoad` life cycle. If the current view does not add a subview, do not set the frame of the view, WeexSDK will set it after typesetting according to the style.

```Objective-C
- (void)viewDidLoad {
      ((MKMapView*)self.view).delegate = self;
}
```

#### 3. 注册组件
#### 3. Register component
在初始化 DCUniMPSDKEngine 方法后，进行 component 的注册
After initializing the DCUniMPSDKEngine method, register the component

```Objective-C
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    ...
    // 初始化引擎
    // Initialize the engine
    [DCUniMPSDKEngine initSDKEnvironmentWihtLaunchOptions:options];
    
    // 注册 component 注：component 的 Name 需要保证唯一， class：为 component 的类名
    // Register component Note: The Name of the component needs to be unique, class: the class name of the component
    [WXSDKEngine registerComponent:@"testmap" withClass:NSClassFromString(@"TestMapComponent")];
    
    return YES;
}
```

#### 4. 在uni小程序代码中使用组件
#### 4. Use components in uni applet code
注意：扩展的 component 只能在 `nvue` 文件中使用
Note: extended components can only be used in `nvue` files

```Javascript
<template>
    <div>
        <testmap style="width:200px;height:200px"></testmap>
    </div>
</template>
```

#### 自定义事件  
#### Custom Events

##### 1. 对于每个组件默认提供了一些事件能力，如点击等。假如想给我们的地图组件提供 `mapLoaded` 事件。
##### 1. For each component, some event capabilities are provided by default, such as click and so on. Let's say we want to provide a `mapLoaded` event to our map component.

在uni小程序代码中，通过 `@事件名="方法名"` 添加事件，如下添加`mapLoaded` 事件
In the uni applet code, add an event through `@event name="method name"`, add the `mapLoaded` event as follows

```Javascript
<template>
    <div>
        <testmap style="width:200px;height:200px" @mapLoaded="onMapLoaded"></testmap>
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

##### 2. 原生端实现：覆盖组件生命周期方法，记录事件是否需要处理
##### 2. Native side implementation: override component lifecycle methods, record whether events need to be processed

我们需要额外添加一个 `BOOL` 成员 `mapLoadedEvent` 用来记录该事件是否生效。
We need to add an additional `BOOL` member `mapLoadedEvent` to record whether the event is valid.

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

##### 3. 给前端发送事件
##### 3. Send events to the front end

```Objective-C
- (void)mapViewDidFinishLoadingMap:(MKMapView *)mapView {
    if (_mapLoadedEvent) {
        // 向前端发送事件，params 为传给前端的数据 注：数据为 NSDictionary 格式，需要以 "detail" 作为 key 值
        // Send events to the front end, params is the data passed to the front end Note: The data is in NSDictionary format, and "detail" needs to be used as the key value
        [self fireEvent:@"mapLoaded" params:@{@"detail":@{@"mapLoaded":@"success"}} domChanges:nil];
    }
}
```

#### 自定义属性
#### Custom Attributes

给我们的地图组件添加一个新的属性`showTraffic`。在前端代码里可以控制组件是否显示路况信息
Add a new property `showTraffic` to our map component. In the front-end code, you can control whether the component displays traffic information

```Javascript
<template>
    <div>
        <testmap style="width:200px;height:200px" showTraffic="true"></testmap>
    </div>
</template>
```

##### 原生端实现
##### Native implementation

**1. 覆盖组件初始化方法 `initWithRef...`
**1. Override component initialization method `initWithRef...`
给组件添加一个成员变量记录 `showTraffic` 属性的值，并在 init 方法中初始化。**   
Add a member variable to the component to record the value of the `showTraffic` property and initialize it in the init method. **

```Objective-C
- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance {
    if(self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {
        if (attributes[@"showsTraffic"]) {
            _showsTraffic = [WXConvert BOOL: attributes[@"showsTraffic"]];
        }
    }
    return self;
}
```

**2. 在生命期事件中记得将属性值同步给地图控件**
**2. Remember to synchronize the property value to the map control in the life cycle event**

```Objective-C
- (void)viewDidLoad {
  ((MKMapView*)self.view).showsTraffic = _showsTraffic;
}
```

**3. 当属性更新时，同步给地图控件**
**3. When the property is updated, it is synchronized to the map control**

```Objective-C
/// 前端更新属性回调方法
/// Front-end update attribute callback method
/// @param attributes 更新的属性
/// @param attributes updated attributes
- (void)updateAttributes:(NSDictionary *)attributes {
    // 解析属性
    // parse properties
    if (attributes[@"showsTraffic"]) {
        _showsTraffic = [WXConvert BOOL: attributes[@"showsTraffic"]];
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
| `initWithRef:type:...`| 用给定的属性初始化一个component. |
| `initWithRef:type:...`| Initializes a component with the given properties. |
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

**1.原生端实现**
**1. Native end implementation**

在组件代码中使用宏 `WX_EXPORT_METHOD` 暴露原生方法供前端调用
Use the macro `WX_EXPORT_METHOD` in the component code to expose native methods for front-end calls

```Objective-C
@implementation TestMapComponent

// 通过 WX_EXPORT_METHOD 将方法暴露给前端
// Expose the method to the front end through WX_EXPORT_METHOD
WX_EXPORT_METHOD(@selector(focus:))

- (void)focus:(NSDictionary *)options {
    // options 为前端传递的参数
    // options are the parameters passed by the front end
    NSLog(@"%@",options);
}
@end
```

**2.在uni小程序代码 中调用 `focus:` 方法。**
**2. Call the `focus:` method in the uni applet code. **

```Javascript
<template>
  <testmap ref='mycomponent'></testmap>
</template>
<script>
  module.exports = {
    created: function() {
      this.$refs.mycomponent.focus("Hello");
    }
  }
</script>
```

至此，您已完成组件扩展；
So far, you have completed component extension;

#### 以上示例中的完整uni小程序代码
#### The complete uni applet code in the above example



```Javascript
<template>
	<div>
		<button type="primary" @click="testAsyncFunc">testAsyncFunc</button>
		<button type="primary" @click="testSyncFunc">testSyncFunc</button>
		<testmap ref='mycomponent' style="width:200px;height:200px" showTraffic="true" @mapLoaded="onMapLoaded"></testmap>
	</div>
</template>

<script>
	// 获取 module 
	// get module
	var testModule = uni.requireNativePlugin("TestModule")
	export default {
		onLoad() {
			// 调用组件方法
			// call component method
			this.$nextTick(()=>{
				this.$refs.mycomponent.focus("Hello")
			})
		},
		methods: {
			testAsyncFunc() {
				// 调用异步方法
				// call asynchronous method
				testModule.testAsyncFunc({
						'name': 'unimp',
						'age': 1
					},
					(ret) => {
						console.log(ret)
					})
			},
			testSyncFunc() {
				// 调用同步方法
				// call the synchronous method
				var ret = testModule.testSyncFunc({
					'name': 'unimp',
					'age': 1
				})
			},
			onMapLoaded(e) {
				console.log("map loaded" + JSON.stringify(e))
			}
		}
	}
</script>
```