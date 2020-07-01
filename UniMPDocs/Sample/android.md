## 启动小程序

从宿主应用页面跳转到小程序应用

### API 说明

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

### 启动小程序并传参

宿主启动小程序时支持传入参数到小程序环境，小程序中可以通过 `plus.runtime.arguments` 获取宿主传入的参数


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

### 启动打开指定页面

宿主启动小程序时可通过传入页面路径来打开指定页面

**页面路径格式要求** 

路径从 pages/ 开始填写绝对路径并支持参数 示例：

```
pages/component/view/view?action=redirect
```


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


## 关闭小程序

> 2.6.3开始支持此功能

### 小程序环境中关闭方法
> 注：需要在集成SDK的原生工程中使用，在 HBuilderX 内置基座运行无效果；

小程序中可调用`plus.runtime.quit()`方法关闭自己，返回宿主App

```
plus.runtime.quit()
```

### 宿主App中关闭方法

宿主可以直接调用 sdk 的方法，关闭当前运行的小程序

关闭当前运行的小程序

```JAVA
DCUniMPSDK.getInstance().closeCurrentApp()
```

监听小程序关闭触发事件

```JAVA
DCUniMPSDK.getInstance().setUniMPOnCloseCallBack(new DCUniMPSDK.IUniMPOnCloseCallBack() {
	@Override
	public void onClose(String appid) {
		Log.e("unimp", appid+"被关闭了");
	}
});
```


## 宿主与小程序通讯

> 2.6.10 版本开始支持此功能

### 宿主 App 向小程序发送事件

#### 宿主发送事件

**API**

```java
DCUniMPSDK.getInstance().sendUniMPEvent(event, data)
```

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|event|String|是|触发事件的event
|data|String或JSON|是|事件的携带参数

**返回值**

|类型|说明
|:----|:----
|boolean|true表示事件通知成功。false表示失败。可通过log查看。

**示例**

```JAVA
JSONObject data = new JSONObject();
data.put("sj", "点击了关于");
DCUniMPSDK.getInstance().sendUniMPEvent("gy", data);
```


#### 小程序监听事件

监听宿主App发送事件

**示例**

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

#### 小程序发送事件

**API**

向宿主App发送事件

```
uni.sendNativeEvent(event,callback)
```

**参数说明**

|属性|类型|说明
|:--|:--|:--
|event|String|事件名称
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

#### 宿主设置监听事件

**API**

DCUniMPSDK.getInstance().setOnUniMPEventCallBack(callBack)
设置监听小程序发送给宿主的事件


**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|callBack|IOnUniMPEventCallBack|是|小程序触发event事件接口

**返回值**

无

**示例**

```JAVA
DCUniMPSDK.getInstance().setOnUniMPEventCallBack(new DCUniMPSDK.IOnUniMPEventCallBack() {
	@Override
	public void onUniMPEventReceive(String event, Object data, DCUniMPJSCallback callback) {
		Log.d("cs", "onUniMPEventReceive    event="+event);
        //回传数据给小程序
		callback.invoke( "收到消息");
	}
});
```


## 胶囊按钮

### 概念
胶囊按钮即小程序页面导航栏右侧的按钮，包含`···`菜单按钮和`X`关闭按钮，如下图所示：
> 目前胶囊按钮的样式不支持修改，框架默认会根据导航栏的颜色自适应胶囊按钮的颜色，不过您可以隐藏默认的胶囊按钮，然后自定义实现

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt1.png" width=35%>

### 自定义菜单项
点击胶囊按钮左侧的`···`按钮会弹出`ActionSheet`菜单，菜单中的按钮支持自定义，其中上部分的按钮是在小程序中定义，下部分的按钮在宿主中定义，取消按钮为框架默认添加，如下图所示：

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt2.png" width=35%>

### 宿主中添加菜单按钮

宿主添加的菜单按钮在每个页面都会显示

DCSDKInitConfig设置[setMenuActionSheetItems](/UniMPDocs/API/android?id=类menuactionsheetitem)实现全局菜单按钮设置. 

```JAVA
MenuActionSheetItem item = new MenuActionSheetItem("关于", "gy");
List<MenuActionSheetItem> sheetItems = new ArrayList<>();
sheetItems.add(item);
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
	// 添加到全局配置
    .setMenuActionSheetItems(sheetItems)
    .build();
```

设置全局菜单按钮点击事件监听

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

DCSDKInitConfig设置[setCapsule](/UniMPDocs/API/android?id=setcapsule)实现隐藏

```JAVA
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
    .setCapsule(false).build();
```

需要注意，如果您隐藏了胶囊按钮，原生中添加的菜单按钮就会无效，小程序中添加的菜单按钮会显示到页面导航栏上并且显示的是`text`字段配置信息（和在HX内置基座运行效果一样）如下图所示

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt3.png" width=35%>

## 开启后台运行

> 2.8.0 版本开始支持此功能

通过 DCSDKInitConfig配置[setEnableBackground](/UniMPDocs/API/android?id=setEnableBackground)小程序是否支持后台运行，默认点击胶囊按钮的`x`或者在小程序中调用`plus.runtime.quit()`方法会直接关闭小程序，当开启后台运行时会只是将小程序隐藏到后台，下次打开时直接显示之前的状态；

**示例**

```JAVA
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
    .setEnableBackground(true).build();
```

**Tips**

开启后台运行。如果需要强制关闭小程序，可调用`DCUniMPSDK.getInstance().closeCurrentApp()`关闭当前小程序

