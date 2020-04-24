## 简介

本文档主要介绍如何在 iOS 平台开发 uni-app 原生插件，在您阅读此文档时，您需要具备 iOS 应用开发经验，对 HTML、JavaScript、CSS 等前端开发有一定的了解，并且熟悉在JavaScript 和 Objective-C 环境下的 JSON 格式数据操作等。

### 什么是uni原生插件
uni原生插件指的是将您原生开发的功能按照规范封装成插件包，然后即可在 `uni-app` 前端项目中通过`js`调用您开发的原生能力。

## 开发环境

- iOS开发环境，Xcode 11.0+
- 下载开发插件需要的 [SDK包](AppDocs/download/ios.md) 并解压
- 安装 uni-app 开发工具 [HBuilderX](http://www.dcloud.io/hbuilderx.html) （请与 SDK 包的版本保持一致）

### SDK 包结构说明

```
|--iOSSDK
	|-- 5+app-uniplugin-demo		// 在 uni-app 中按照 5+ App 规范开发插件工程		
	|-- HBuilder-Hello				// uni-app 或 5+ App 离线打包工程
	|-- HBuilder-Integrate			// 5+ App 插件开发工程
	|-- HBuilder-uniPluginDemo		// uni-app 插件开发主工程 （本文档需要使用的工程）
	|-- SDK							// 依赖库及依赖资源文件
	|-- Feature-iOS.xls				// 功能模块与依赖库对应关系说明表格
	|-- readme.txt					// 目录说明
```

SDK 目录中的 `HBuilder-uniPluginDemo`为 **uni原生插件开发主工程**，该工程已经将各项配置都配置齐全，开发uni原生插件需要依赖此工程，其他工程及文件，开发uni原生插件不需要关心，如果想了解更多可以参考 App离线打包 [相关文档](AppDocs/README.md)

## 创建插件工程

打开 Xcode，创建一个新的工程，template 选择 `Framework` 或 `Static Library`（示例工程选择的是 Framework），然后点击 `Next`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi1.png)


在 Product Name 中输入插件工程名称（建议使用一个性化的前缀，避免与其他人的插件包名冲突），其他项不需要修改保持工程默认填充的即可，然后点击`Next`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi2.png)

然后选择工程存放路径，建议直接存放在 iOSSDK目录中的 `HBuilder-uniPluginDemo` 插件开发主工程目录下，如下图所示，然后点击 `Create`
> 强烈建议将插件工程存放在 `HBuilder-uniPluginDemo` 插件开发主工程目录中，因为插件工程需要根据插件开发主工程相对路径引用一些文件，之后您升级SDK的时候只需要将您的插件工程 Copy 到新的 SDK 的相同位置下即可

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi2-1.png)

可以删除工程自动创建的 .h 文件，这个文件用不到

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi3.png)

然后选中工程名，在`TARGETS->Build Settings`中，将 `Mach-O Type` 设置为 `Static Library` 如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi3-1.png)

然后将插件工程关闭，接下来需要将插件工程导入到插件开发主工程中

## 导入插件工程

打开 `iOSSDK/HBuilder-uniPluginDemo`工程目录，双击目录中的`HBuilder-uniPlugin.xcodeproj` 文件运行插件开发主工程

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi3-2.png)

在 Xcode 项目左侧目录选中**主工程名**，然后点击右键选择`Add Files to “HBuilder-uniPlugin” ...`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi4.png)

然后选择您刚刚创建的插件工程路径中，选中插件工程文件，勾选 `Create folder references` 和 `Add to targets` 两项，然后点击`Add`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi5.png)

这时在 Xcode 左侧目录中可以看到插件工程已经添加到了主工程中，如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi6.png)

### 工程配置

然后在 Xcode 项目左侧目录选中**主工程名**，在`TARGETS->Build Phases->Dependencies`中点击`+`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi7.png)

在弹窗中选中插件工程，如图所示，然后点击`Add`，将插件工程添加到`Dependencies`中

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi8.png)

然后在`Link Binary With Libraries`中点击`+`，同样在弹窗中选中插件工程，点击`Add`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi9.png)

此时可以看到 `Dependencies` 和 `Link Binary With Libraries` 都添加了插件工程，如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi10.png)

接下来需要在插件工程的`Header Search Paths`中添加开发插件所需的头文件引用，头文件存放在主工程的`HBuilder-Hello/inc`中，添加方法如下图所示，在 Xcode 项目左侧目录选中**插件工程名**，找到`TARGETS->Build Settings->Header Search Paths`双击右侧区域打开添加窗口，然后将`inc`目录拖入会自动填充相对路径，然后将模式改成`recursive`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi11.gif)

## 代码实现

### 插件扩展方式
原生插件是基于 WeexSDK 规范来实现，扩展原生功能有两种方式：

- module：不需要参与页面布局，只需要通过 API 调用原生功能，比如：获取当前定位信息、数据请求等功能，通过扩展`module`的方式来实现；
- component：需要参与页面布局，比如：map、image等需要显示UI的功能，通过扩展`component`即组件的方法来实现；
  
您需要根据实际的情况选择扩展方式，当然插件中可以同时存在 module 和 component，也可以是多个 module 和 多个 component；

### 扩展 module
> 以`TestModule`为例，源码请查看 `iOSSDK/HBuilder-uniPluginDemo/DCTestUniPlugin` 插件工程；

新建`TestModule`类，继承 `NSObject`，引入 `WeexSDK.h` 头文件，让该类遵循 `WXModuleProtocol` 的协议。

TestModule.h 文件

```Objective-C
#import <Foundation/Foundation.h>
// 引入 WeexSDK.h 头文件
#import "WeexSDK.h"

@interface TestModule : NSObject <WXModuleProtocol>

@end

```

TestModule.h 文件截图：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi11-1.png)

然后在 TestModule.m 文件中添加实现方法

**异步方法实现**

```Objective-C
/// 异步方法（注：异步方法会在主线程（UI线程）执行）
/// @param options js 端调用方法时传递的参数
/// @param callback 回调方法，回传参数给 js 端
- (void)testAsyncFunc:(NSDictionary *)options callback:(WXModuleKeepAliveCallback)callback {
    // options 为 js 端调用此方法时传递的参数
    NSLog(@"%@",options);
    
    // 可以在该方法中实现原生能力，然后通过 callback 回调到 js
    
    // 回调方法，传递参数给 js 端 注：只支持返回 String 或 NSDictionary (map) 类型
    if (callback) {
        // 第一个参数为回传给js端的数据，第二个参数为标识，表示该回调方法是否支持多次调用，如果原生端需要多次回调js端则第二个参数传 YES;
        callback(@"success",NO);
    }
}
```

通过宏 `WX_EXPORT_METHOD` 将异步方法暴露给 js 端，只有通过`WX_EXPORT_METHOD`暴露的原生方法才能被 js 端识别到

```Objective-C
// 通过宏 WX_EXPORT_METHOD 将异步方法暴露给 js 端
WX_EXPORT_METHOD(@selector(testAsyncFunc:callback:))
```

**同步方法实现**

```Objective-C
/// 同步方法（注：同步方法会在 js 线程执行）
/// @param options js 端调用方法时传递的参数
- (NSString *)testSyncFunc:(NSDictionary *)options {
    // options 为 js 端调用此方法时传递的参数
    NSLog(@"%@",options);
    
    /*
     可以在该方法中实现原生功能，然后直接通过 return 返回参数给 js
     */
    
    // 同步返回参数给 js 端 注：只支持返回 String 或 NSDictionary (map) 类型
    return @"success";
}
```

通过宏 `WX_EXPORT_METHOD_SYNC` 将同步方法暴露给 js 端

```Objective-C
// 通过宏 WX_EXPORT_METHOD_SYNC 将同步方法暴露给 js 端
WX_EXPORT_METHOD_SYNC(@selector(testSyncFunc:))
```

TestModule.m 文件截图：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi12.png)

#### 配置插件信息
选中工程中的`HBuilder-uniPlugin-Info.plist`文件`右键->Open As->Source Code`找到`dcloud_uniplugins`节点，copy下面的内容添加到`dcloud_uniplugins`节点下，按您插件的实际信息填写对应的项

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

- hooksClass：App系统方法钩子类，值是类名，是给有些插件需要在 app 启动时做初始化或者获取系统事件用的，如果没有可以不填为空（示例中不需要所以置空，后面章节会详细说明 hooksClass 的使用）
- class：module 或 component 对应的原生类名（示例中为 `TestModule`）
- name：暴露给js端使用的 module 或 component 对应的名称（示例为`DC-TestModule`，**一定要使用一个个性化的前缀，避免与其他插件冲突**）
- type：module 或 component （示例为`module`）

配置完如下图所示**（必须严格按照格式配置）**：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi13.png)


到此，我们已经完成了一个简单的 module 扩展，接下来讲解如何在 uni-app 项目中调用刚刚扩展的 module 方法

#### 在 uni-app 项目中调用 module 方法
module 支持在 vue 和 nvue 中调用，添加如下代码

```Javascript
<template>
	<div>
		<button type="primary" @click="testAsyncFunc">testAsyncFunc</button>
		<button type="primary" @click="testSyncFunc">testSyncFunc</button>
	</div>
</template>

<script>
	// 首先需要通过 uni.requireNativePlugin("ModuleName") 获取 module 
	var testModule = uni.requireNativePlugin("DC-TestModule")
	export default {
		methods: {
			testAsyncFunc() {
				// 调用异步方法
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

### 导入 uni-app 资源

#### 生成 uni-app 本地打包资源

首先需要生成本地打包资源，在 HBuilderX 中选您的 uni-app 工程，`右键->发现->原生App-本地打包->生成本地打包App资源`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi14.png)

项目编译完成后会在 HBuilderX 控制台输出资源存路径，点击路径会自动打开资源所在文件夹

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi15.png)

如下图所示，`__UNI_7F5F813`文件夹即为应用资源包（`__UNI_7F5F813` 为 uni-app 的 id）

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi16.png)

#### 导入 uni-app 资源

接下来，将应用资源导入到插件开发主工程的`HBuilder-Hello/Pandora/apps/`中，如下图所示，直接拖进去即可

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi17.gif)

然后打开工程的 `control.xml` 文件，将 appid 改成 uni-app 的 id，如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi18.png)

然后运行项目测试，如下图所示（能调到 module 的方法，并且可以获取 module 返回的数据，则说明功能正常）

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi19.gif)

#### 再次导入资源时注意事项

**注**：前端代码修改后重新导入资源时，需要在插件开发工程中删除之前导入的资源，同时将模拟器或真机上的 App 删除，在按照上面的教程操作，避免因为缓存问题导致加载的还是旧的资源；

接下来，我们学习一下如何扩展 Component 

### 扩展组件 component 
> 以`TestComponent`为例，源码请查看 `iOSSDK/HBuilder-uniPluginDemo/DCTestUniPlugin` 插件工程；

新建`TestComponent`类，继承`WXComponent`类（如果这个类里什么代码也不写，它和默认的的 `<view>` 组件能力是一致的）

```Objective-C
#import "WXComponent.h"

@interface TestComponent : WXComponent

@end

```
 
#### 复写 `WXComponent` 中的生命周期方法

**- `loadView` 方法**

一个组件默认对应一个原生 view，如果未复写`loadView`方法提供自定义`view`，会默认调用基类方法返回一个继承于 `UIView` 的实例。比如我们要实现一个组件支持地图功能，我们可以返回系统的 `MKMapView`。

**注：**不需要为`view`设置`frame`，`view`的大小及位置由前端`css`决定

```Objective-C
- (UIView *)loadView {
    return [MKMapView new];
}
```

**- `viewDidLoad`**

如果需要对组件`view`做一些配置，比如设置`delegate`，在 `viewDidLoad` 生命周期方法中是一个比较好的时机

**注：**可以直接通过 `self.view` 获取 `view` 实例

```Objective-C
- (void)viewDidLoad {
      ((MKMapView*)self.view).delegate = self;
}
```

至此，已经完成了一个简单 component 的实现

然后我们需要在`info.plist` 中添加 component 的配置信息，和 module 配置格式一样具体请参考 [配置插件信息](添加一个锚点)

- class：填写`TestComponent`
- name：填写`dc-testmap` **(在页面中使用时的组件名称，添加一个个性化的前缀，避免与其他组件冲突)**
- type：填写`component`

配置完后如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi20.png)

接下来可以在 uni-app 中使用组件

#### 在 uni-app 中使用组件
**注意：扩展的 component 只能在 `nvue` 文件中使用，不需要引入即可直接使用**

在 uni-app 项目中新建 nvue 文件，加入下面的代码

```Javascript
<template>
    <view>
        <dc-testmap style="width:750rpx;height:300px"></dc-testmap>
    </view>
</template>
```

然后生成本地打包资源，导入到插件开发工程中进行测试，具体操作参考文档上方的教程 [导入 uni-app 资源](添加一个锚点)

然后运行测试，效果如下图：

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi21.png" width="35%">

刚刚做的组件只实现了 UI 显示，下面讲解组件的交互方式等一些高阶用法

#### 自定义事件  

##### 对于每个组件默认提供了一些事件能力，如点击等。假如想给我们的地图组件提供 `mapLoaded` 事件。

uni-app 中是通过 `@事件名="方法名"` 添加事件，如下方代码所示在`nvue`中，给他地图组件添加`mapLoaded` 事件

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
            console.log("map loaded"+JSON.stringify(e))
        }
    }
}
</script>
```

##### 对应的原生端实现

我们需要添加一个 `BOOL` 类型成员变量 `mapLoadedEvent` 用来记录该事件是否生效，如下方代码所示：

```Objective-C
/// 前端注册的事件会调用此方法
/// @param eventName 事件名称
- (void)addEvent:(NSString *)eventName {
    if ([eventName isEqualToString:@"mapLoaded"]) {
        _mapLoadedEvent = YES;
    }
}

/// 对应的移除事件回调方法
/// @param eventName 事件名称
- (void)removeEvent:(NSString *)eventName {
    if ([eventName isEqualToString:@"mapLoaded"]) {
        _mapLoadedEvent = NO;
    }
}
```

##### 原生端向前端发送事件
在地图加载完毕的方法中触发 mapLoaded 事件

```Objective-C
- (void)mapViewDidFinishLoadingMap:(MKMapView *)mapView {
    if (_mapLoadedEvent) {
        // 想前端发送事件 params：传给前端的数据
        [self fireEvent:@"mapLoaded" params:@{@"customKey":@"customValue"} domChanges:nil];
    }
}
```

#### 自定义属性

给我们的地图组件添加一个新的属性`showTraffic`，在前端代码里可以控制组件是否显示路况信息

```Javascript
<template>
    <div>
        <dc-testmap style="width:750rpx;height:300px" showTraffic="true"></dc-testmap>
    </div>
</template>
```

##### 对应的原生端实现

覆盖组件初始化方法 `initWithRef...`
给组件添加一个成员变量记录 `showTraffic` 属性的值，并在 init 方法中初始化

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

在生命期事件中记得将属性值同步给地图控件

```Objective-C
- (void)viewDidLoad {
  ((MKMapView*)self.view).showsTraffic = _showsTraffic;
}
```

当前端更新属性时，会触发`updateAttributes:`方法，同步给地图控件**

```Objective-C
/// 前端更新属性回调方法
/// @param attributes 更新的属性
- (void)updateAttributes:(NSDictionary *)attributes {
    // 解析属性
    if (attributes[@"showsTraffic"]) {
        _showsTraffic = [WXConvert BOOL: attributes[@"showsTraffic"]];
        ((MKMapView*)self.view).showsTraffic = _showsTraffic;
    }
}
```

#### 更多的组件生命期方法

组件是由框架管理的，比如创建、布局、渲染、销毁。组件的生命周期方法都是可以重写的，你可以在这些生命周期中去做自己的事情。

| 方法 | 描述 |
| ---------- | --------- |
| `initWithRef:type:...`| 用给定的属性初始化一个component. |
| layoutDidFinish | 在component完成布局时候会调用. |
| loadView | 创建component管理的view. |
| viewWillLoad | 在component的view加载之前会调用. |
| viewDidLoad | 在component的view加载完之后调用. |
| viewWillUnload | 在component的view被释放之前调用. |
| viewDidUnload | 在component的view被释放之后调用. |
| updateStyles: | 在component的style更新时候调用. |
| updateAttributes: | 在component的attribute更新时候调用. |
| addEvent: | 给component添加event的时候调用. |
| removeEvent: | 在event移除的时候调用. |

#### 给组件添加方法

**原生端实现**

在组件代码中使用宏 `WX_EXPORT_METHOD` 暴露原生方法供前端调用

```Objective-C
@implementation TestMapComponent

// 通过 WX_EXPORT_METHOD 将方法暴露给前端
WX_EXPORT_METHOD(@selector(focus:))

- (void)focus:(NSDictionary *)options {
    // options 为前端传递的参数
    NSLog(@"%@",options);
}
@end
```

**在 uni-app 中调用 `focus:` 方法**

```Javascript
<template>
  <dc-testmap ref='mycomponent'></dc-testmap>
</template>
<script>
  module.exports = {
    created: function() {
      // 通过 this.$refs.mycomponent 获取地图组件
      this.$refs.mycomponent.focus("Hello");
    }
  }
</script>
```

**uni-app 完整项目存放在 `iOSSDK/HBuilder-uniPluginDemo/UniPluginDemo`**

插件开发完毕并通过测试后，接下来就可以生成插件包了

## 生成插件包

此步骤应该在您插件所有功能都开发完毕，并在开发工程中测试完成进行

### 插件包结构说明

```javascript
|-- 插件id							// 插件包是一个以插件id命名的文件夹
	|-- android						// 存放 android 插件所需要的依赖库及资源文件
	|-- ios							// 存放 ios 插件所需要的依赖库及资源文件
	|-- package.json				// 插件配置文件
```

插件包的目录结构是固定的，是一个以插件id命名的文件夹，其中 android 路径中放的是 android 端插件所需要的依赖库及资源文件，ios 路径中放的是 ios 端插件所需要的依赖库及资源文件，`package.json`为插件的配置文件，接下来，我们需要生成 iOS 插件所需的依赖库，和编写 `package.json` 文件

### 编译生成插件库文件（.framework 或 .a）

如下图所示，将编译工程选择为插件项目（DCTestUniPlugin），运行设备选择`Generic iOS Device`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi22.png)

然后点击`Edit Scheme...`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi23.png)

在弹窗中，将`Run->Info->Build Configuration`切换到`Release`，然后点击`Close`关闭弹窗

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi24.png)

然后在 Xcode 左侧目录中选中插件工程名，查看`TARGETS->Build Settings->Architectures`，确保

- `Build Active Architecture Only->Release` 为 `No`
- `Valid Architectures` 中至少包含 `arm64` 和 `armv7`(一般保持工程默认配置即可)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi25.png)

在`iOS Deployment Target`中选中最低支持的 iOS 版本，建议选择 `iOS9.0`

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi26.png)

然后点击`运行按钮`或 `Command + B` 编译运行工程

编译完成后，在插件工程 Products 下生成的库（`DCTestUniPlugin.framework`）即为插件所需要的依赖库文件，`右键->Show in Finder`，可打开库所在文件夹

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi27.png)

### 编写 package.json 配置文件
> package.json 为插件的配置文件，配置了插件id、格式、插件资源以及插件所需权限等等信息

新建一个 `package.json` 文件，然后请参考 [uni原生插件包格式](NativePlugin/course/package) 说明，根据您插件实际情况填写插件配置信息，示例插件配置完后如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi28.png)

然后以`插件id`为名新建一个文件夹，将编辑好的 `package.json` 放进去，然后在文件夹中在新建一个 `ios` 文件夹，将刚刚生成的依赖库（DCTestUniPlugin.framework）copy 到 `ios` 根目录，这样我们的插件包就构建完成了，如下图所示

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/upi29.png)

**注：**iOS 插件包至少需要包含：`package.json`文件  和`ios`文件夹（小写的ios）里面包含 .a 或 .framework 依赖库；

## 使用插件

### 放到 HBuilderX 的 uni-app 项目中直接使用

插件包开发完后，可以直接放到 HX 的 uni-app 项目中使用，具体请参考文档 [HBuilderX 中使用本地插件](https://nativesupport.dcloud.net.cn/NativePlugin/use/use_local_plugin?id=%e5%bc%80%e5%8f%91%e8%80%85%e8%87%aa%e5%b7%b1%e5%bc%80%e5%8f%91uni-app%e5%8e%9f%e7%94%9f%e6%8f%92%e4%bb%b6)

### 提交插件市场

按照上面的方式放到 HBuilderX 的 uni-app 项目中提交打包测试完插件后，可以将插件包压缩成 zip 格式，然后提交到插件市场共享给其他开发者使用，登录注册[DCloud插件市场](https://ext.dcloud.net.cn/)，然后按照提示步骤提交插件，（需要编写对应插件的使用说明文档，.md（markdown）格式）；

## 常见问题

### 广告插件说明

由于官方 UniAD 广告组件集成了“广点通”和“穿山甲”SDK，目前不支持自行开发包含这两个SDK的原生插件，云打包会导致冲突；

### 插件开发需要依赖第三方SDK，或需要依赖资源文件

- 如果您的插件需要依赖第三方的SDK，开发阶段将第三方SDK引入到开发工程中进行正常开发，然后在构建插件包的时候，需要将依赖的三方SDK库文件放到ios路径下，然后编辑 `package.json`；
- 如果需要依赖资源文件比如图片等，建议把资源文件放到 .bundle 包中使用，然后把 bundle 包放到 ios 路径下，然后配置 `package.json`

具体请参考开源项目[ 百度OCR识别插件源码](https://github.com/xiaohuapunk/DC-CardRecognize)，对应插件市场的 [插件](https://ext.dcloud.net.cn/plugin?id=135)

### 获取 UIViewController

> 因为 uni 框架机制，module 的 weexInstance 没有绑定 viewController，故 `weexInstance.viewController` 值为 nil，如果想通过 UIViewController 来跳转页面可使用下面的方法获取 UIViewController**

```javascript
// 获取当前显示的 UIViewController
+ (UIViewController *)dc_findCurrentShowingViewController {
    //获得当前活动窗口的根视图
    UIViewController *vc = [UIApplication sharedApplication].keyWindow.rootViewController;
    UIViewController *currentShowingVC = [self findCurrentShowingViewControllerFrom:vc];
    return currentShowingVC;
}
+ (UIViewController *)findCurrentShowingViewControllerFrom:(UIViewController *)vc
{
    // 递归方法 Recursive method
    UIViewController *currentShowingVC;
    if ([vc presentedViewController]) {
        // 当前视图是被presented出来的
        UIViewController *nextRootVC = [vc presentedViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else if ([vc isKindOfClass:[UITabBarController class]]) {
        // 根视图为UITabBarController
        UIViewController *nextRootVC = [(UITabBarController *)vc selectedViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else if ([vc isKindOfClass:[UINavigationController class]]){
        // 根视图为UINavigationController
        UIViewController *nextRootVC = [(UINavigationController *)vc visibleViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else {
        // 根视图为非导航类
        currentShowingVC = vc;
    }
    
    return currentShowingVC;
}
```

### 获取页面可访问图片资源存储路径 （vue页面需要注意，nvue页面不存这个问题）

> 有些插件可能需要返回本地的图片路径给页面来显示，如果页面是`vue`的话是使用 WKWebview 渲染，访问本地图片资源可能会存在跨域问题访问不到图片资源，所以需要将图片存放到指定路径下，按照下面的方法获取图片存储路径即可

**原生端实现**

```
// 引用头文件
#import "PDRCoreApp.h"
#import "PDRCoreAppManager.h"
#import "PDRCoreAppInfo.h"

// 获取路径信息
PDRCoreAppInfo *appinfo = [PDRCore Instance].appManager.getMainAppInfo;
// 将图片存储到 appinfo.documentPath 路径下即可，可以创建子目录；
// 示例，原生图片存储路径为
NSString *imgPath = [appinfo.documentPath stringByAppendingPathComponent:@"test.png"];
```

**js 端获取图片路径有两种方式**

```				
// 1.使用相对路径
var relativePath = "_doc/test.png"
				
// 2.使用平台的绝对路径
var docPath = plus.io.convertLocalFileSystemURL("_doc/");
var absolutePath = docPath + 'test.png'
```