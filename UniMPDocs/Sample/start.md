宿主应用启动小程序时可实现如下功能

- 支持传入参数到小程序环境，
- 支持启动后直接打开指定页面

下面讲解一下具体实现

## API 说明

### iOS 平台

```
Class DCUniMPSDKEngine
/// 启动小程序
+ (void)openApp:(NSString *)appid
      arguments:(NSDictionary * _Nullable)arguments
   redirectPath:(NSString * _Nullable)redirectPath;
```

|参数|类型|说明|
|:--|:--|:--|
|appid|NSString|小程序的 appid|
|arguments|NSDictionary|启动小程序传入的参数|
|redirectPath|NSString|指定启动应用后直接打开的页面路径|

### Android 平台

```JAVA
// 启动小程序
DCUniMPSDK.getInstance().startApp(context, appid, splashClass, redirectPath, arguments)
```

|参数|类型|必填|说明|
|:----|:----|:----|:-----|
|context|Context|是|上下文|
|appid|String|是|小程序的 appid|
|splashClass|IDCUniMPAppSplashView|否|自定义splashView接口类|
|redirectPath|String|否|指定启动应用后直接打开的页面路径|
|arguments|JSONObject|否|启动小程序传入的参数|

**Tips**

Android startApp详细说明可参考[uni小程序SDK API参考手册](https://ask.dcloud.net.cn/article/36984)

## 启动小程序并传参
宿主启动小程序时支持传入参数到小程序环境，小程序中可以通过 `plus.runtime.arguments` 获取宿主传入的参数

**iOS 示例**

```Objective-C
// 启动小程序并传入参数
NSDictionary *arguments = @{@"value":@"Hello uni microprogram"};
[DCUniMPSDKEngine openApp:appid arguments:arguments];
```

**Android 示例**

```JAVA
// 启动小程序并传入参数 "Hello uni microprogram"
try {
	JSONObject arguments = new JSONObject();
	arguments.put("MSG","Hello uni microprogram");
	DCUniMPSDK.getInstance().startApp(context, "__UNI__04E3A11", arguments);
} catch (Exception e) {
	e.printStackTrace();
}
```

**小程序中获取参数**

```JavaScript
var arguments = plus.runtime.arguments;
```

## 启动打开指定页面

宿主启动小程序时可通过传入页面路径来打开指定页面

**页面路径格式要求** 

路径从 pages/ 开始填写绝对路径并支持参数 示例：

```
pages/component/view/view?action=redirect
```

**iOS 示例**

```Objcetive-C
// 启动直达页面
NSString *pagePath = @"pages/component/view/view?action=redirect";
[DCUniMPSDKEngine openApp:k_AppId arguments:nil redirectPath:pagePaht];
```

**Android 示例**

```JAVA
// 启动直达页面
DCUniMPSDK.getInstance().startApp(context,"__UNI__04E3A11", "pages/component/view/view?action=redirect");
```

**屏蔽返回**

直达二级页面如果您想屏蔽返回按钮及返回手势，可以在小程序页面的 `onLoad()` 方法中获取当前页面调用 `setStyle()` 方法实现，代码如下

**Tips**

`onLoad(e){}` 方法的参数`e`即为直达页面时传入的参数比如`pages/component/view/view?action=redirect`，框架会自动将参数转换成 jsonObject 类型 {"action":"redirect"} 

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