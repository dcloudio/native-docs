# unimp小程序V1版 (不支持同时运行多个小程序)
# unimp applet V1 version (does not support running multiple applets at the same time)

[SDK下载](UniMPDocs/SDKDownload/android)
[SDK Download](UniMPDocs/SDKDownload/android)

## 启动小程序
## Start the applet

从宿主应用页面跳转到小程序应用
Jump from the host application page to the applet application

### API 说明
### API Description

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

Android startApp详细说明可参考[uni小程序SDK API参考手册](UniMPDocs/API/android?id=dcunimpsdkgetinstancestartapp)
For details about Android startApp, please refer to [uni Mini Program SDK API Reference Manual](UniMPDocs/API/android?id=dcunimpsdkgetinstancestartapp)

### 启动小程序并传参
### Start the applet and pass parameters

宿主启动小程序时支持传入参数到小程序环境，小程序中可以通过 [plus.runtime.arguments](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.arguments) 获取宿主传入的参数
When the host starts the applet, it supports passing parameters to the applet environment. In the applet, [plus.runtime.arguments](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.arguments ) Get the parameters passed in by the host


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
//arguments 为字符串需要注意
//arguments need to pay attention to the string
```

### 启动打开指定页面
### Start to open the specified page

宿主启动小程序时可通过传入页面路径来打开指定页面
When the host starts the applet, the specified page can be opened by passing in the page path

**页面路径格式要求** 
**Page path format requirements**

路径从 pages/ 开始填写绝对路径并支持参数 示例：
The path starts from pages/ and fills in the absolute path and supports parameters. Example:

**注意：如果直达的页面为首页并且是 vue 页面参数无效** 应使用启动传参的方式
**Note: If the direct page is the home page and the vue page parameters are invalid** the way to start parameter passing should be used

```
pages/component/view/view?action=redirect
```


```JAVA
// 启动直达页面
// start direct page
DCUniMPSDK.getInstance().startApp(context,"__UNI__04E3A11", "pages/component/view/view?action=redirect");
```

#### 屏蔽返回
#### Shield return

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


## 关闭小程序
## Close the applet

> 2.6.3开始支持此功能
> 2.6.3 started to support this feature

### 小程序环境中关闭方法
### Closing method in applet environment
> 注：需要在集成SDK的原生工程中使用，在 HBuilderX 内置基座运行无效果；
> Note: It needs to be used in native projects that integrate SDK, and it has no effect when running on the built-in base of HBuilderX;

小程序中可调用`plus.runtime.quit()`方法关闭自己，返回宿主App
The `plus.runtime.quit()` method can be called in the applet to close itself and return to the host App

```
plus.runtime.quit()
```

### 宿主App中关闭方法
### Closing method in the host App

宿主可以直接调用 sdk 的方法，关闭当前运行的小程序
The host can directly call the sdk method to close the currently running applet

关闭当前运行的小程序
Close the currently running applet

```JAVA
DCUniMPSDK.getInstance().closeCurrentApp()
```

监听小程序关闭触发事件
Listen to the applet closing trigger event

```JAVA
DCUniMPSDK.getInstance().setUniMPOnCloseCallBack(new DCUniMPSDK.IUniMPOnCloseCallBack() {
	@Override
	public void onClose(String appid) {
		Log.e("unimp", appid+"被关闭了");
	}
});
```


## 宿主与小程序通讯
## Communication between the host and the applet

> 2.6.10 版本开始支持此功能
> This feature has been supported since version 2.6.10

宿主与小程序通讯适用于简单的数据交互。如果希望小程序调用宿主提供的API方法,实现复杂扩展能力请使用[Android原生扩展](UniMPDocs/Extension/android)实现!
Host-applet communication is suitable for simple data interaction. If you want the applet to call the API method provided by the host, please use [Android native extension](UniMPDocs/Extension/android) to achieve complex extension capabilities!

### 宿主 App 向小程序发送事件
### The host app sends events to the applet

#### 宿主发送事件
#### Host sends events

**API**

```java
DCUniMPSDK.getInstance().sendUniMPEvent(event, data)
```

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|event|String|是|触发事件的event
| event| String| Yes| the event that triggered the event
|data|String或JSON|是|事件的携带参数
| data| String or JSON|Yes| the carrying parameter of the event

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|true表示事件通知成功。false表示失败。可通过log查看。
| boolean| true indicates that the event notification is successful. false means failure. It can be viewed through the log.

**示例**
**example**

```JAVA
JSONObject data = new JSONObject();
data.put("sj", "点击了关于");
DCUniMPSDK.getInstance().sendUniMPEvent("gy", data);
```


#### 小程序监听事件
#### Small program listens to events

监听宿主App发送事件
Listen for events sent by the host App

**示例**
**example**

```JavaScript
uni.onNativeEventReceive((event,data)=>{
	console.log('接收到宿主App消息：' + event + data);
	this.nativeMsg = '接收到宿主App消息 event：' + event + " data: " + data;
})
```

**参数说明**
**Parameter Description**

|属性|类型|说明
|Properties|Type|Description
|:---|:---|:---
|event|String|事件名称
| event| String| event name
|data|String或JsonObject|宿主传递的数据
| data| String or JsonObject| the data passed by the host

### 小程序向宿主 App 发送事件
### The applet sends events to the host App

#### 小程序发送事件
#### Small program sends events

**API**

向宿主App发送事件
Send events to the host App

```
uni.sendNativeEvent(event, data, callback)
```

**参数说明**
**Parameter Description**

|属性|类型|说明
|Properties|Type|Description
|:--|:--|:--
|event|String|事件名称
| event| String| event name
|data|String / JsonObject|事件携带参数
| data| String / JsonObject|Event carries parameters
|callback|Function|宿主App回调方法。参数可以是 String 或 JsonObject。取决于宿主的实现
| callback| Function|Host App callback method. Parameters can be String or JsonObject. depends on host implementation

**示例**
**example**

```JavaScript
// 向宿主App发送事件
// Send events to the host App
uni.sendNativeEvent('unimp-event', {
	msg: 'unimp message!!!'
}, ret => {
	this.nativeMsg = '宿主App回传的数据：' + ret;
})
```

#### 宿主设置监听事件
#### Host setting listen event

**API**

DCUniMPSDK.getInstance().setOnUniMPEventCallBack(callBack)
设置监听小程序发送给宿主的事件
Set the event that the listening applet sends to the host


**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|callBack|IOnUniMPEventCallBack|是|小程序触发event事件接口
| callBack| IOnUniMPEventCallBack|Yes|The applet triggers the event event interface

**返回值**
**return value**

无
none

**示例**
**example**

```JAVA
DCUniMPSDK.getInstance().setOnUniMPEventCallBack(new DCUniMPSDK.IOnUniMPEventCallBack() {
	@Override
	public void onUniMPEventReceive(String event, Object data, DCUniMPJSCallback callback) {
		Log.d("cs", "onUniMPEventReceive    event="+event);
        //回传数据给小程序
        //Return data to the applet
		callback.invoke( "收到消息");
	}
});
```


## 胶囊按钮
## Capsule button

### 概念
### concept
胶囊按钮即小程序页面导航栏右侧的按钮，包含`···`菜单按钮和`X`关闭按钮，如下图所示：
The capsule button is the button on the right side of the navigation bar of the applet page, including the `···` menu button and the `X` close button, as shown in the following figure:
> 目前胶囊按钮的样式不支持修改，框架默认会根据导航栏的颜色自适应胶囊按钮的颜色，不过您可以隐藏默认的胶囊按钮，然后自定义实现
> Currently, the style of the capsule button does not support modification. The framework will adapt the color of the capsule button according to the color of the navigation bar by default, but you can hide the default capsule button and customize the implementation

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt1.png" width=35%>

### 自定义菜单项
### Custom menu items
点击胶囊按钮左侧的`···`按钮会弹出`ActionSheet`菜单，菜单中的按钮支持自定义，其中上部分的按钮是在小程序中定义，下部分的按钮在宿主中定义，取消按钮为框架默认添加，如下图所示：
Click the `···` button on the left side of the capsule button to pop up the `ActionSheet` menu. The buttons in the menu support customization. The buttons in the upper part are defined in the applet, the buttons in the lower part are defined in the host, and the cancel button It is added by default for the framework, as shown in the following figure:

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt2.png" width=35%>

### 宿主中添加菜单按钮
### Add a menu button to the host

宿主添加的菜单按钮在每个页面都会显示
The menu button added by the host will be displayed on every page

DCSDKInitConfig设置[setMenuActionSheetItems](/UniMPDocs/API/android?id=类menuactionsheetitem)实现全局菜单按钮设置. 
DCSDKInitConfig sets [setMenuActionSheetItems](/UniMPDocs/API/android?id=%E7%B1%BBmenuactionsheetitem) to implement global menu button settings.

```JAVA
MenuActionSheetItem item = new MenuActionSheetItem("关于", "gy");
List<MenuActionSheetItem> sheetItems = new ArrayList<>();
sheetItems.add(item);
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
	// 添加到全局配置
	// Add to global configuration
    .setMenuActionSheetItems(sheetItems)
    .build();
```

设置全局菜单按钮点击事件监听
Set global menu button click event listener

```JAVA
DCUniMPSDK.getInstance().setDefMenuButtonClickCallBack(new DCUniMPSDK.IMenuButtonClickCallBack() {
    @Override
    public void onClick(String appid, String id) {
        switch (id) {
            case "gy":{
                Log.e("unimp", "点击了关于" + appid);
                break;
            }
        }
    }
});
```

### 小程序中添加菜单按钮
### Add a menu button to the applet

在小程序中可以单独为某个页面添加菜单按钮，打开`pages.json`，在页面的 `style->app-plus->titleNView->buttons`节点下添加配置，`pages.json` 的更多配置说明请参考此 [文档](https://uniapp.dcloud.io/collocation/pages?id=app-plus)
In the applet, you can add a menu button for a page separately, open `pages.json`, add configuration under the `style->app-plus->titleNView->buttons` node of the page, and change `pages.json` For multi-configuration instructions, please refer to this [document](https://uniapp.dcloud.io/collocation/pages?id=app-plus)

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
After the button is clicked, the `onNavigationBarButtonTap(e)` method will be triggered in the applet

```javascript
// 监听按钮点击事件
// Listen for button click events
onNavigationBarButtonTap(e) {
	console.log(e)
}
```

### 隐藏胶囊按钮
### Hide capsule button
uni小程序默认会显示胶囊按钮，您可以将其隐藏（目前只支持全局隐藏，不支持单个页面隐藏）
The uni applet will display the capsule button by default, and you can hide it (currently only supports global hiding, not individual page hiding)

DCSDKInitConfig设置[setCapsule](/UniMPDocs/API/android?id=setcapsule)实现隐藏
DCSDKInitConfig set [setCapsule](/UniMPDocs/API/android?id=setcapsule) to hide

```JAVA
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
    .setCapsule(false).build();
```

需要注意，如果您隐藏了胶囊按钮，原生中添加的菜单按钮就会无效，小程序中添加的菜单按钮会显示到页面导航栏上并且显示的是`text`字段配置信息（和在HX内置基座运行效果一样）如下图所示
It should be noted that if you hide the capsule button, the menu button added in the native program will be invalid, and the menu button added in the applet will be displayed on the page navigation bar and display the `text` field configuration information (and the HX built-in base seat operation effect is the same) as shown in the figure below

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt3.png" width=35%>

## 开启后台运行
## Enable background running

> 2.8.0 版本开始支持此功能
> Version 2.8.0 supports this feature

通过 DCSDKInitConfig配置[setEnableBackground](/UniMPDocs/API/android?id=setEnableBackground)小程序是否支持后台运行，默认点击胶囊按钮的`x`或者在小程序中调用`plus.runtime.quit()`方法会直接关闭小程序，当开启后台运行时会只是将小程序隐藏到后台，下次打开时直接显示之前的状态；
Configure [setEnableBackground](/UniMPDocs/API/android?id=setEnableBackground) through DCSDKInitConfig whether the applet supports running in the background. By default, click the `x` of the capsule button or call the `plus.runtime.quit()` method in the applet. Close the applet directly. When the background running is enabled, the applet will only be hidden in the background, and the previous state will be displayed directly when it is opened next time;

**示例**
**example**

```JAVA
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
    .setEnableBackground(true).build();
```

**注意事项**
**Precautions**

开启小程序后台运行功能后，也将开启多任务窗口。效果如下图！如果你的需求不需要小程序有独立任务窗口。那请关闭小程序后台运行功能。
After enabling the background running function of the applet, the multitasking window will also be opened. The effect is as shown below! If your needs do not require applets to have independent task windows. Then please turn off the background running function of the applet.
后台模式与多任务窗口两者功能目前是相辅相成。不可分割。
The functions of the background mode and the multitasking window are currently complementary. indivisible.

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/unimp_enableback.png" width=35%>

**2.8.4+版本支持设置setEnableBackground为false 去除多任务窗口**
**Version 2.8.4+ supports setting setEnableBackground to false to remove the multitasking window**

### 打开小程序
### Open the applet

第一次打开小程序 还是将小程序后台激活到前台。都是调用`DCUniMPSDK.getInstance().startApp`打开小程序
Open the applet for the first time, or activate the applet from the background to the foreground. Both call `DCUniMPSDK.getInstance().startApp` to open the applet

**示例**
**example**

```
DCUniMPSDK.getInstance().startApp(context,"__UNI__04E3A11");
```

**Tips**

注意：已启动的小程序并进入后台运行，再次启动直达参数将会失效。请注意！！！
Note: The applet that has been started runs in the background, and the direct parameters will be invalid if it is started again. caution! ! !

### 关闭小程序
### Close the applet

开启后台运行。如果需要强制关闭小程序，可调用`DCUniMPSDK.getInstance().closeCurrentApp()`关闭当前小程序
Enable background running. If you need to forcibly close the applet, you can call `DCUniMPSDK.getInstance().closeCurrentApp()` to close the current applet

**示例**
**example**

```
DCUniMPSDK.getInstance().closeCurrentApp()
```


