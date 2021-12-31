## 启动小程序
从宿主应用页面跳转到小程序应用

<!--### 实现原理
获取当前宿主显示的 `ViewController`，通过`present`的方式打开小程序对应的 `DCUniMPViewController` 
> 注：您可以通过自定义转场动画的方式自定义打开小程序时的动画，详情请看 [自定义专场动画](/UniMPDocs/Sample/ios?id=自定义转场动画)-->

### 特性

- [支持传入启动参数到小程序环境](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e5%b0%8f%e7%a8%8b%e5%ba%8f%e5%b9%b6%e4%bc%a0%e5%8f%82)
- [支持启动后直接打开指定页面](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e6%89%93%e5%bc%80%e6%8c%87%e5%ae%9a%e9%a1%b5%e9%9d%a2)
- [支持设置是否需要启动或关闭动画效果 （2.8.0+ 版本支持）](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e8%bd%ac%e5%9c%ba%e5%8a%a8%e7%94%bb)
- [支持开启后台运行模式（2.8.0+ 版本支持）](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%bc%80%e5%90%af%e5%90%8e%e5%8f%b0%e8%bf%90%e8%a1%8c)
- [支持设置启动模式‘`present`’或‘`push`’ （3.0.0+ 版本支持）](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e6%96%b9%e5%bc%8f)
- [支持侧滑手势关闭小程序 （3.0.0+ 版本支持）](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e4%be%a7%e6%bb%91%e6%89%8b%e5%8a%bf%e5%85%b3%e9%97%ad%e5%b0%8f%e7%a8%8b%e5%ba%8f)

### API

```objective-c
Class DCUniMPSDKEngine
/// 启动小程序
/// @param appid appid
/// @param configuration 小程序的配置信息
/// @param completionBlock 方法执行回调
+ (void)openUniMP:(NSString *)appid
    configuration:(DCUniMPConfiguration *)configuration
        completed:(DCUniMPCompletionBlock)completionBlock;
```

#### DCUniMPConfiguration 类说明

`DCUniMPConfiguration` 为小程序配置信息类，启动小程序时可传入 DCUniMPConfiguration 实例对象设置小程序的`启动参数`、`直达页面路径`、`是否开启打开关闭动画`、`是否支持后台运行`等信息，DCUniMPConfiguration 类的详细定义请参考 [API文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=dcunimpconfiguration)；

#### DCUniMPCompletionBlock 说明

```objective-c
/// 加载小程序 block 回调
/// uniMPInstance: 加载成功返回小程序实例，失败则为 nil
/// error：失败信息
typedef void(^DCUniMPCompletionBlock)(DCUniMPInstance *_Nullable uniMPInstance, NSError *_Nullable error);
```
启动方法执行完会回调 `completionBlock`，成功则返回 `DCUniMPInstance`类型的小程序实例对象`uniMPInstance`，用于管理小程序，`DCUniMPInstance` 类的详细定义请参考 [API文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=dcunimpinstance)；

注意：应使用`weak`弱引用类型指针引用`uniMPInstance`对象，框架内部会在小程序销毁时将其置为`nil`，如果使用强类型引用，应在小程序关闭的回调中将其置为`nil`；

```objective-c
@property (nonatomic, weak) DCUniMPInstance *currentUniMP; /**< 引用当前启动的uni小程序 */
```

### 启动小程序并传参  
宿主启动小程序时支持传入数据到小程序环境

> 注意：3.3.4+ 版本开始 DCUniMPConfiguration 的 arguments 不在推荐使用，请使用 extraData 属性代替

**示例**

```Objective-C
// 初始化小程序的配置信息对象
DCUniMPConfiguration *configuration = [[DCUniMPConfiguration alloc] init];
// 配置启动小程序时传递的参数
configuration.extraData = @{ @"arguments":@"Hello uni microprogram" };
// 启动小程序
[DCUniMPSDKEngine openUniMP:k_AppId configuration:configuration completed:^(DCUniMPInstance * _Nullable uniMPInstance, NSError * _Nullable error) {
	if (uniMPInstance) {
		// success
	} else {
		// error
	}
}];
```

**小程序中获取参数**

小程序中可在 `App.onLaunch，App.onShow` 中获取到启动时传递的数据

```JavaScript
// App.vue
onLaunch: function(launchInfo) {
	console.log('App Launch:', launchInfo);
}
```

启动参数 launchInfo 为 Object 类型，结构如下

属性|类型 |说明:--|:--|:--|path |String|打开的页面路径query |Object| 页面参数
referrerInfo| Object |启动小程序时传递的数据

referrerInfo 

属性|类型 |说明:--|:--|:--|extraData |String/Object| 启动时传递的数据

##### 注意事项：
- 使用 `DCUniMPConfiguration` 的 `extraData` 属性设置启动参数，宿主更新 `extraData` 值后再次调用 open 方法打开小程序不区分冷启动和热启动，小程序中都可以获取最新的值，之前的 `arguments` 属性只有冷启动时才会生效；

### 启动打开指定页面

宿主启动小程序时可通过传入页面路径来打开指定页面

> 注意：3.3.4+ 版本开始 DCUniMPConfiguration 的 redirectPath 不在推荐使用，请使用 path 属性代替

**页面路径格式要求** 

路径从 `pages/` 开始填写绝对路径并支持参数  

```
// 页面路径 path 中 ? 后面的部分会成为 query
pages/component/view/view?action=redirect
```

**示例**

```Objective-C
// 初始化小程序的配置信息对象
DCUniMPConfiguration *configuration = [[DCUniMPConfiguration alloc] init];
// 配置启动小程序时直达页面路径
configuration.path = @"pages/component/view/view?action=redirect";
// 启动小程序
[DCUniMPSDKEngine openUniMP:k_AppId configuration:configuration completed:^(DCUniMPInstance * _Nullable uniMPInstance, NSError * _Nullable error) {
	if (uniMPInstance) {
		// success
		self.currentUniMP = uniMPInstance;
	} else {
		// error
	}
}];
```

#### 屏蔽返回

直达二级页面如果您想屏蔽返回按钮及返回手势，可以在小程序页面的 `onLoad()` 方法中获取当前页面调用 `setStyle()` 方法实现

**Tips**

`onLoad(e){}` 方法的参数`e`即为直达页面时传入的参数比如`pages/component/view/view?action=redirect`，框架会自动将参数转换成 jsonObject 类型 {"action":"redirect"} 

**示例**

```
// 启动直达二级页面屏蔽返回手势及返回按钮
<script>
	export default {
		onLoad(e) {
			// #ifdef APP-PLUS
			// 判断是否为启动直达页面
			if (e.action === "redirect") {
				const currentWebview = this.$scope.$getAppWebview();
				currentWebview.setStyle({
					popGesture: 'none', // 取消手势返回
					titleNView: { 
						autoBackButton: false // 取消默认返回按钮
					}
				})
			}
			// #endif
		}
	}
</script>
``` 

##### 注意事项：
- **如果直达的页面为首页并且是 vue 的话页面参数无效** 应使用启动传参的方式；
- 使用 `DCUniMPConfiguration` 的 `path` 属性设置直达页面，宿主更新 `path` 值后再次调用 open 方法打开小程序不区分冷启动和热启动，小程序中都会进入直达页面，之前的 `redirectPath` 属性只有冷启动时才会生效；

### 转场动画
> 2.8.0+ 版本支持

可通过 DCUniMPConfiguration 配置开启或关闭小程序时的动画效果，默认开启动画效果

**示例**

```Objective-C
// 初始化小程序的配置信息对象
DCUniMPConfiguration *configuration = [[DCUniMPConfiguration alloc] init];
// 打开动画
configuration.showAnimated = YES;
// 关闭动画
configuration.hideAnimated = NO;
```

### 启动方式
> 3.0.0+ 版本支持
 
可通过 DCUniMPConfiguration 配置小程序的打开方式，支持`DCUniMPOpenModePresent `、和`DCUniMPOpenModePush `两种方式，默认为：`DCUniMPOpenModePresent`方式

**说明**

-  `DCUniMPOpenModePresent`：获取宿主当前显示的 ViewController 调用 presentViewController:animated:completion: 方法打开小程序页面对应的  DCUniMPViewController
-  `DCUniMPOpenModePush`：获取宿主当前显示的 ViewController 对应的 navigationController 调用 pushViewController:animated: 方法打开小程序页面对应的 DCUniMPViewController，注意：如果 navigationController 不存在则使用 `DCUniMPOpenModePresent` 的方式打开

**示例**

```
DCUniMPConfiguration *configuration = [[DCUniMPConfiguration alloc] init];
configuration.openMode = DCUniMPOpenModePush;  // 使用push方式打开小程序
```

### 侧滑手势关闭小程序
> 3.0.0+ 版本支持
 
可通过 DCUniMPConfiguration 配置开启侧滑手势关闭小程序功能，默认不开启

**示例**

```
DCUniMPConfiguration *configuration = [[DCUniMPConfiguration alloc] init];
configuration.enableGestureClose = YES; // 开启侧滑手势关闭小程序
```

<!--#### 自定义转场动画

小程序的打开方式是：获取当前宿主显示的 `ViewController`，通过`present`的方式从页面下方打开小程序对应的 `DCUniMPViewController`，可以通过自定义专场动画的方式自定义打开动画效果，您可以参考 [DCUniMPPresentCustomAnimation](https://github.com/xiaohuapunk/DCUniMPPresentCustomAnimation) 的实现，从页面右侧打开小程序类似 push 的效果；-->


## 关闭小程序
> 2.6.3开始支持此功能

### 小程序环境中关闭方法
> 注：需要在集成SDK的原生工程中使用，在 HBuilderX 内置基座运行无效果；

小程序中可调用`plus.runtime.quit()`方法关闭自己，返回宿主App

```
plus.runtime.quit()
```

### 宿主App中关闭方法

宿主可以直接调用 sdk 的方法，关闭当前运行显示的小程序

**iOS 示例**

1.关闭当前运行显示的小程序

```Objective-C
[DCUniMPSDKEngine closeUniMP];
```

2.通过 DCUniMPInstance 实例对象关闭自己**（2.8.0+版本支持）**

```
[self.currentUniMP closeWithCompletion:^(BOOL success, NSError * _Nullable error) {
	if (success) {
		NSLog(@"小程序被关闭了");
	}
}];
```

当小程序关闭时会触发 DCUniMPSDKEngineDelegate 协议的`uniMPOnClose:`方法

```Objective-C
/// 监听关闭小程序的回调方法
- (void)uniMPOnClose:(NSString *)appid {
    NSLog(@"小程序 %@ 被关闭了",appid);
}
```

**注：当开启后台运行时，点击胶囊按钮的`x`，或小程序中调用`plus.runtime.quit()`，原生调用`[DCUniMPSDKEngine closeUniMP]` 会将小程序隐藏到后台并不会销毁，如果想真正关闭并销毁请使用 方法2 通过 DCUniMPInstance 实例对象执行关闭**

## 宿主与小程序通讯

### 宿主 App 向小程序发送事件

**API**

```Objective-C
Class DCUniMPInstance
/// 向小程序发送事件
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
- (void)sendUniMPEvent:(NSString *)event data:(id __nullable)data;
```

**示例**

```Objective-C
[self.uniMPInstance sendUniMPEvent:@"NativeEvent" data:@{@"msg":@"native message"}];
```

#### 小程序中接收宿主App发送事件

```JavaScript
uni.onNativeEventReceive((event,data)=>{
	console.log('接收到宿主App消息：' + event + data);
	this.nativeMsg = '接收到宿主App消息 event：' + event + " data: " + data;
})
```

**参数说明**

|属性|类型|说明
|:---|:---|:---
|event|String|事件名称
|data|String或JsonObject|宿主传递的数据

### 小程序向宿主 App 发送事件

### 向宿主App发送事件

```
uni.sendNativeEvent(event,callback)
```

**参数说明**

|属性|类型|说明
|:--|:--|:--
|event|String|事件名称
|data|String / JsonObject|事件携带参数
|callback|Function|宿主App回调方法。参数可以是 String 或 JsonObject。取决于宿主的实现

**示例**

```JavaScript
// 向宿主App发送事件
uni.sendNativeEvent('unimp-event', {
	msg: 'unimp message!!!'
}, ret => {
	this.nativeMsg = '宿主App回传的数据：' + ret;
})
```


### 宿主接收小程序发送的事件

当接收到小程序发送的事件会触发 DCUniMPSDKEngineDelegate 的协议方法，需宿主App实现该方法

**协议方法说明**

```
/// 监听小程序向原生发送事件方法
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param callback 回调数据给小程序
- (void)onUniMPEventReceive:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback;

DCUniMPKeepAliveCallback 说明
/// 回调数据给小程序的 block 定义
/// result：回调参数支持 NSString 或 NSDictionary 类型
/// keepAlive：如果 keepAlive 为 YES，则可以多次回调数据给小程序，反之触发一次后回调方法即被移除
typedef void (^DCUniMPKeepAliveCallback)(id result, BOOL keepAlive);

```

**示例**


```Objective-C
/// 监听小程序发送的事件方法
- (void)onUniMPEventReceive:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback {
    
    NSLog(@"Receive UniMP event: %@ data: %@",event,data);
    
    // 回传数据给小程序
    // DCUniMPKeepAliveCallback 用法请查看定义说明
    if (callback) {
        callback(@"native callback message",NO);
    }
}
```

## 胶囊按钮
胶囊按钮即小程序页面导航栏右侧的按钮，包含`···`菜单按钮和`X`关闭按钮，如下图所示：
> 目前胶囊按钮的样式不支持修改，框架默认会根据导航栏的颜色自适应胶囊按钮的颜色，不过您可以隐藏默认的胶囊按钮，然后自定义实现

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt1.png" width=35%>

### 自定义胶囊按钮样式

#### 宿主设置全局样式

宿主可以设置胶囊按钮的全局样式，参考下面的示例

```objective-c
DCUniMPCapsuleButtonStyle *capsuleButtonStyle = [DCUniMPCapsuleButtonStyle new];
// 胶囊按钮背景颜色
capsuleButtonStyle.backgroundColor = @"rgba(169,169,169,0.2)";
// 胶囊按钮 “···｜x” 的字体颜色
capsuleButtonStyle.textColor = @"#FFFFFF";
// 胶囊按钮按下状态背景颜色
capsuleButtonStyle.highlightColor = @"rgb(203,204,205)";
// 胶囊按钮边框颜色
capsuleButtonStyle.borderColor = @"rgba(229,229,229,0.3)";
// 设置样式
[DCUniMPSDKEngine configCapsuleButtonStyle:capsuleButtonStyle];
```

#### 小程序中设置某个页面胶囊按钮的样式

在小程序中可以单独为某个页面设置胶囊按钮的样式，**优先级高于宿主中设置的样式**，打开`pages.json`，在页面的 `style->app-plus->titleNView `节点下添加`capsuleButtonStyle`配置

```
{
	"pages": [ 
		{
			"path": "pages/tabBar/component/component",
			"style": {
				"navigationBarTitleText": "内置组件",
				"app-plus": {
					"bounce": "vertical",
					"titleNView": {
						"capsuleButtonStyle": {
							"backgroundColor": "rgba(169,169,169,0.2)",   // 胶囊按钮背景颜色
							"textColor":""#FFFFFF",    // 胶囊按钮 “···｜x” 的字体颜色
							"highlightColor": "rgb(203,204,205)",  // 胶囊按钮按下状态背景颜色
							"borderColor": "rgba(229,229,229,0.3)" // 胶囊按钮边框颜色
						}
					}
				}
			}
		},
		...
	],
	...
}
```

### 监听`x`按钮的点击事件

点击`x`按钮会回调 `DCUniMPSDKEngineDelegate`协议的 `closeButtonClicked:`方法

```objective-c
///  监听关闭按钮点击
- (void)closeButtonClicked:(NSString *)appid {
	
}
```

### 自定义菜单项
点击胶囊按钮左侧的`···`按钮会弹出`ActionSheet`菜单，菜单中的按钮支持自定义，其中上部分的按钮是在小程序中定义，下部分的按钮在宿主中定义，取消按钮为框架默认添加，如下图所示：

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt2.png" width=35%>

#### 宿主中添加菜单按钮

宿主添加的菜单按钮在每个页面都会显示

```objective-c
// 创建按钮
DCUniMPMenuActionSheetItem *item1 = [[DCUniMPMenuActionSheetItem alloc] initWithTitle:@"Item 1" identifier:@"item1"];
DCUniMPMenuActionSheetItem *item2 = [[DCUniMPMenuActionSheetItem alloc] initWithTitle:@"Item 2" identifier:@"item2"];
// 添加到全局配置
[DCUniMPSDKEngine setDefaultMenuItems:@[item1,item2]];
```

点击按钮会回调 `DCUniMPSDKEngineDelegate`协议的 `defaultMenuItemClicked:`方法

```objective-c
/// 监听菜单按钮点击
- (void)defaultMenuItemClicked:(NSString *)identifier {
    NSLog(@"标识为 %@ 的 item 被点击了", identifier);
    
    // 向小程序发送消息
    if ([identifier isEqualToString:@"SendUniMPEvent"]) {
        [DCUniMPSDKEngine sendUniMPEvent:@"NativeEvent" data:@{@"msg":@"native message"}];
    }
}
```

#### 小程序中添加菜单按钮

在小程序中可以单独为某个页面添加菜单按钮，打开`pages.json`，在页面的 `style->app-plus->titleNView->buttons`节点下添加配置，`pages.json` 的更多配置说明请参考此 [文档](https://uniapp.dcloud.io/collocation/pages?id=app-plus)

```
{
	"pages": [ 
		{
			"path": "pages/tabBar/component/component",
			"style": {
				"navigationBarTitleText": "内置组件",
				"app-plus": {
					"bounce": "vertical",
					"titleNView": {
						"buttons": [{
							"text": "\ue534",  
							"title":"关于", 	  //注意：title 为 uni小程序中显示的按钮标题，如果没有设置则显示 text 字段
							"fontSrc": "/static/uni.ttf",
							"fontSize": "22px",
							"color": "#FFFFFF"
						}]
					}
				}
			}
		},
		...
	],
	...
}
```

按钮点击后会在小程序中触发`onNavigationBarButtonTap(e)`方法

```javascript
// 监听按钮点击事件
onNavigationBarButtonTap(e) {
	console.log(e)
}
```

### 隐藏胶囊按钮
uni小程序默认会显示胶囊按钮，您可以将其隐藏（目前只支持全局隐藏，不支持单个页面隐藏）


```objective-c
[DCUniMPSDKEngine setMenuButtonHidden:YES];
```

需要注意，如果您隐藏了胶囊按钮，原生中添加的菜单按钮就会无效，小程序中添加的菜单按钮会显示到页面导航栏上并且显示的是`text`字段配置信息（和在HX内置基座运行效果一样）如下图所示

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt3.png" width=35%>



## 开启后台运行
> 2.8.0+ 版本支持

通过 DCUniMPConfiguration 可配置小程序是否支持后台运行，默认点击胶囊按钮的`x`或者在小程序中调用`plus.runtime.quit()`方法会直接关闭小程序，当开启后台运行时会只是将小程序隐藏到后台，下次打开时直接显示之前的状态；

**示例**

```Objective-C
// 初始化小程序的配置信息对象
DCUniMPConfiguration *configuration = [[DCUniMPConfiguration alloc] init];
// 开启后台运行
configuration.enableBackground = YES;
// 启动小程序
[DCUniMPSDKEngine openUniMP:k_AppId configuration:configuration completed:^(DCUniMPInstance * _Nullable uniMPInstance, NSError * _Nullable error) {
	if (uniMPInstance) {
		// success
		self.currentUniMP = uniMPInstance;
	} else {
		// error
	}
}];
```

### 将小程序隐藏到后台

宿主可调用 DCUniMPInstance 实例对象方法隐藏对应的小程序，**注意：如果未开启后台运行执行此方法会直接关闭并销毁小程序相当于下面的 close 方法**

```
[self.currentUniMP hideWithCompletion:^(BOOL success, NSError * _Nullable error) {
	if (success) {
		//
	}
}];
```

### 将小程序显示到前台

宿主可调用 DCUniMPInstance 实例对象方法将小程序从后台显示到前台

```
[self.currentUniMP showWithCompletion:^(BOOL success, NSError * _Nullable error) {
	if (success) {
		//
	}
}];
```

### 关闭小程序

宿主可调用 DCUniMPInstance 实例对象方法关闭对应的小程序

```
[self.currentUniMP closeWithCompletion:^(BOOL success, NSError * _Nullable error) {
	if (success) {
		//
	}
}];
```

## 预加载小程序
> 2.8.0+ 版本支持

宿主调用预加载方法在后台提前将小程序渲染出来，在需要显示的时候在`show`出来，提升用户体验

**API**

```
/// 预加载小程序
/// @param appid appid
/// @param configuration 小程序的配置信息
/// @param completionBlock 方法执行回调
+ (void)preloadUniMP:(NSString *)appid
       configuration:(DCUniMPConfiguration * __nullable)configuration
           completed:(DCUniMPCompletionBlock)completionBlock;
```

**示例**

```
// 初始化小程序的配置信息对象
DCUniMPConfiguration *configuration = [[DCUniMPConfiguration alloc] init];
configuration.enableBackground = YES;
configuration.showAnimated = YES;
configuration.hideAnimated = NO;
[DCUniMPSDKEngine preloadUniMP:k_AppId configuration:configuration completed:^(DCUniMPInstance * _Nullable uniMPInstance, NSError * _Nullable error) {
	if (uniMPInstance) {
		self.currentUniMP = uniMPInstance;
		NSLog(@"预加载完成》》》》》》》》》》》》》>>>>>>>>>>>>>>>>>>>>>>>>>>>");
	} else {
		NSLog(@"%@",error);
	}
}];
```

在需要显示的时候调用调用 DCUniMPInstance 实例对象的`show`方法将小程序从显示到前台

```
[self.currentUniMP showWithCompletion:^(BOOL success, NSError * _Nullable error) {
	if (success) {
		//
	}
}];
```