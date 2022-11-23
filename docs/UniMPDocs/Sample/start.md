宿主应用启动小程序时可实现如下功能
When the host application starts the applet, the following functions can be realized

- 支持传入参数到小程序环境，
- Support passing parameters to the applet environment,
- 支持启动后直接打开指定页面
- Support to open the specified page directly after startup

下面讲解一下具体实现
Let's explain the specific implementation

## API 说明
## API Description

### iOS 平台
### iOS platform

```
Class DCUniMPSDKEngine
/// 启动小程序
/// Start the applet
+ (void)openApp:(NSString *)appid
      arguments:(NSDictionary * _Nullable)arguments
   redirectPath:(NSString * _Nullable)redirectPath;
```

|参数|类型|说明|
|Parameter|Type|Description|
|:--|:--|:--|
|appid|NSString|小程序的 appid|
| appid| NSString|appid of the applet|
|arguments|NSDictionary|启动小程序传入的参数|
| arguments| NSDictionary|Parameters passed in to start the applet|
|redirectPath|NSString|指定启动应用后直接打开的页面路径|
| redirectPath| NSString|Specify the path of the page opened directly after starting the application|

### Android 平台
### Android platform

```JAVA
// 启动小程序
// Start the applet
DCUniMPSDK.getInstance().startApp(context, appid, splashClass, redirectPath, arguments)
```

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:----|:----|:----|:-----|
|context|Context|是|上下文|
| context| Context|Yes |context|
|appid|String|是|小程序的 appid|
| appid| String| Yes |appid of the applet|
|splashClass|IDCUniMPAppSplashView|否|自定义splashView接口类|
| splashClass| IDCUniMPAppSplashView|No|Custom splashView interface class|
|redirectPath|String|否|指定启动应用后直接打开的页面路径|
| redirectPath| String|No|Specify the path of the page opened directly after starting the application|
|arguments|JSONObject|否|启动小程序传入的参数|
| arguments | JSONObject | No | Parameters passed in to start the applet |

**Tips**

Android startApp详细说明可参考[uni小程序SDK API参考手册](https://ask.dcloud.net.cn/article/36984)
For details about Android startApp, please refer to [uni Mini Program SDK API Reference Manual](https://ask.dcloud.net.cn/article/36984)

## 启动小程序并传参
## Start the applet and pass parameters
宿主启动小程序时支持传入参数到小程序环境，小程序中可以通过 `plus.runtime.arguments` 获取宿主传入的参数
When the host starts the applet, it supports passing in parameters to the applet environment. In the applet, the parameters passed in by the host can be obtained through `plus.runtime.arguments`

**iOS 示例**
**iOS Example**

```Objective-C
// 启动小程序并传入参数
// Start the applet and pass in parameters
NSDictionary *arguments = @{@"value":@"Hello uni microprogram"};
[DCUniMPSDKEngine openApp:appid arguments:arguments];
```

**Android 示例**
**Android example**

```JAVA
// 启动小程序并传入参数 "Hello uni microprogram"
// Start the applet and pass in the parameter "Hello uni microprogram"
try {
	JSONObject arguments = new JSONObject();
	arguments.put("MSG","Hello uni microprogram");
	DCUniMPSDK.getInstance().startApp(context, "__UNI__04E3A11", arguments);
} catch (Exception e) {
	e.printStackTrace();
}
```

**小程序中获取参数**
** Obtain parameters in the applet **

```JavaScript
var arguments = plus.runtime.arguments;
```

## 启动打开指定页面
## Start to open the specified page

宿主启动小程序时可通过传入页面路径来打开指定页面
When the host starts the applet, the specified page can be opened by passing in the page path

**页面路径格式要求** 
**Page path format requirements**

路径从 pages/ 开始填写绝对路径并支持参数 示例：
The path starts from pages/ and fills in the absolute path and supports parameters. Example:

```
pages/component/view/view?action=redirect
```

**iOS 示例**
**iOS Example**

```Objcetive-C
// 启动直达页面
// start direct page
NSString *pagePath = @"pages/component/view/view?action=redirect";
[DCUniMPSDKEngine openApp:k_AppId arguments:nil redirectPath:pagePaht];
```

**Android 示例**
**Android example**

```JAVA
// 启动直达页面
// start direct page
DCUniMPSDK.getInstance().startApp(context,"__UNI__04E3A11", "pages/component/view/view?action=redirect");
```

**屏蔽返回**
** BLOCK RETURN**

直达二级页面如果您想屏蔽返回按钮及返回手势，可以在小程序页面的 `onLoad()` 方法中获取当前页面调用 `setStyle()` 方法实现，代码如下
Go directly to the secondary page If you want to block the back button and the back gesture, you can get the current page in the `onLoad()` method of the applet page and call the `setStyle()` method to implement it. The code is as follows

**Tips**

`onLoad(e){}` 方法的参数`e`即为直达页面时传入的参数比如`pages/component/view/view?action=redirect`，框架会自动将参数转换成 jsonObject 类型 {"action":"redirect"} 
The parameter `e` of `onLoad(e){}` method is the parameter passed in when going directly to the page, such as `pages/component/view/view?action=redirect`, and the framework will automatically convert the parameter into jsonObject type {"action ":"redirect"}

```
// 启动直达二级页面屏蔽返回手势及返回按钮
// Start the direct access to the secondary page, shield the return gesture and the return button
<script>
	export default {
		onLoad(e) {
			// #ifdef APP-PLUS
			// 判断是否为启动直达页面
			// Determine whether it is a direct page to start
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