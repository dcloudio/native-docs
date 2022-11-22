# unimp小程序V2版 (支持同时运行多个小程序)

[SDK下载](UniMPDocs/SDKDownload/android)

## 启动小程序

从宿主应用页面跳转到小程序应用

### API 说明

```JAVA
// 启动小程序
IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context, appid, uniMPOpenConfiguration)
```

|参数|类型|必填|说明|
|:----|:----|:----|:-----|
|context|Context|是|上下文|
|appid|String|是|小程序的 appid|
|uniMPOpenConfiguration|UniMPOpenConfiguration|是|小程序打开的参数集合类，包含 redirectPath（指定启动应用后直接打开的页面路径）extraData（其他自定义参数）splashClass(自定义splashView接口类)|


**返回值**

|类型|说明
|:----|:----
|IUniMP| unimp小程序实例化接口对象

**Tips**

获取到IUniMP接口对象，可控制小程序关闭返送event事件。具体参考API文档


### 启动小程序并传参 --- 3.3.7+版本

3.3.7版本之后，宿主启动小程序时 支持通过 onLoad方法获取传参


```JAVA
// 启动小程序并传入参数 "Hello uni microprogram"
 try {
          UniMPOpenConfiguration uniMPOpenConfiguration = new UniMPOpenConfiguration();
          uniMPOpenConfiguration.extraData.put("MSG","Hello DCUniMPConfiguration");
          mallMP = new SoftReference<>(DCUniMPSDK.getInstance().openUniMP(MainActivity.this, "__UNI__A922B72_minimall", uniMPOpenConfiguration));
 } catch (Exception e) {
          e.printStackTrace();
 }
```

**小程序中获取参数**

```JavaScript
onLaunch: function(options) {
    console.log('MiniMall App Launch --- ' + JSON.stringify(options));
},
```


### 启动小程序并传参 --- 3.3.7之前旧版本

宿主启动小程序时支持传入参数到小程序环境，小程序中可以通过  [plus.runtime.arguments](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.arguments) 获取宿主传入的参数


```JAVA
// 启动小程序并传入参数 "Hello uni microprogram"
try {
	JSONObject arguments = new JSONObject();
	arguments.put("MSG","Hello uni microprogram");
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context, "__UNI__04E3A11", arguments);
} catch (Exception e) {
	e.printStackTrace();
}
```

**小程序中获取参数**

```JavaScript
var arguments = plus.runtime.arguments;
//arguments 为字符串需要注意
```



### 启动打开指定页面

宿主启动小程序时可通过传入页面路径来打开指定页面

**页面路径格式要求** 

路径从 pages/ 开始填写绝对路径并支持参数 示例：

**注意：如果直达的页面为首页并且是 vue 页面参数无效** 应使用启动传参的方式

```
pages/component/view/view?action=redirect
```


```JAVA
// 启动直达页面
DCUniMPSDK.getInstance().openUniMP(context,"__UNI__04E3A11", "pages/component/view/view?action=redirect");
```

<!-- 
#### 屏蔽返回

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
``` -->


## 关闭小程序

### 小程序环境中关闭方法

> 注：需要在集成SDK的原生工程中使用，在 HBuilderX 内置基座运行无效果；

小程序中可调用`plus.runtime.quit()`方法关闭自己，返回宿主App

```
plus.runtime.quit()
```

### 宿主App中关闭方法

宿主可以直接调用 sdk 的方法，关闭当前运行的小程序

> 注：需要先获取IUniMP接口对象！可通过openUniMP获取IUniMP接口对象

关闭当前运行的小程序

```JAVA
IUniMP.closeUniMP()
```

监听小程序关闭触发事件

```JAVA
DCUniMPSDK.getInstance().setUniMPOnCloseCallBack(new IUniMPOnCloseCallBack() {
	@Override
	public void onClose(String appid) {
		Log.e("unimp", appid+"被关闭了");
	}
});
```


## 宿主与小程序通讯

### 宿主 App 向小程序发送事件

> 注：需要先获取IUniMP接口对象！可通过openUniMP获取IUniMP接口对象

宿主与小程序通讯适用于简单的数据交互。如果希望小程序调用宿主提供的API方法,实现复杂扩展能力请使用[Android原生扩展](UniMPDocs/Extension/android)实现!

#### 宿主发送事件

**API**

```java
IUniMP.sendUniMPEvent(event, data)
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
IUniMP.sendUniMPEvent("gy", data);
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
uni.sendNativeEvent(event, data, callback)
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
DCUniMPSDK.getInstance().setOnUniMPEventCallBack(new IOnUniMPEventCallBack() {
	@Override
	public void onUniMPEventReceive(String appid, String event, Object data, DCUniMPJSCallback callback) {
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

### 自定义默认胶囊按钮的全局样式

宿主可以设置默认胶囊按钮的全局样式

SDK初始化构建DCSDKInitConfig时可设置setCapsuleButtonStyle实现自定义默认胶囊按钮的全局样式。示例如下：

```
//首先构建 DCUniMPCapsuleButtonStyle胶囊按钮样式
DCUniMPCapsuleButtonStyle style = new DCUniMPCapsuleButtonStyle();

//设置胶囊按钮背景颜色
style.setBackgroundColor("#990099");
//设置胶囊按钮“···｜x” 的字体颜色
style.setTextColor("#090909");
//设置胶囊按钮边框颜色
style.setBorderColor("#777777");
//设置胶囊按钮按下状态背景颜色
style.setHighlightColor("#888888");
//**以上目前可设置的样式**


DCSDKInitConfig config = new DCSDKInitConfig.Builder().setCapsuleButtonStyle(style).build();
```

### 重写“X”关闭胶囊按钮点击事件

宿主可通过DCUniMPSDK.getInstance().setCapsuleCloseButtonClickCallBack拦截原"X"胶囊按钮点击事件。

示例如下：

```java
//unimp对象缓存
HashMap<String, IUniMP> unimpCaches = new HashMap<>();
...
...

DCUniMPSDK.getInstance().setCapsuleCloseButtonClickCallBack(new IDCUniMPOnCapsuleCloseButtontCallBack() {
    @Override
    public void closeButtonClicked(String appid) {
        Log.e("unimp", "closeButtonClicked-------------"+appid);
		//检测缓存中是否存在appid小程序实例
		if(unimpCaches.containsKey(appid)) {
            IUniMP uniMP = unimpCaches.get(appid);
            if(uniMP.isRuning()) {//检测获取到的小程序实例是否运行中
                //uniMP.hideUniMP();
                uniMP.closeUniMP();
            }
        }
    }
});
```

### 重写“...”菜单胶囊按钮点击事件

宿主可通过DCUniMPSDK.getInstance().setCapsuleMenuButtonClickCallBack拦截原"..."胶囊按钮点击事件。

宿主可以自行事件点击菜单后的弹出内容。目前仅支持activity。不支持Dialog无法正显示。


**`注意事项`**

**触发菜单点击事件后只能弹出activity 并且需要使用DCUniMPSDK.getInstance().startActivityForUniMPTask启动才行。否则关闭activity会返回宿主达不到效果。**

**activity配置要求。宿主注册当前activity时不可以配置launchMode，仅默认否则会无法正常实现跳转逻辑！！！ 切记**

**想弹窗显示。如Dialog效果。可以设置activity主题theme。实现Dialog弹窗效果。可以参考SDK中demo**

示例如下：

```java
DCUniMPSDK.getInstance().setCapsuleMenuButtonClickCallBack(new IDCUniMPOnCapsuleMenuButtontCallBack() {
    @Override
    public void menuButtonClicked(String appid) {
        Intent intent = new Intent(context, MenuActivity.class);//跳转宿主构建的activity
        DCUniMPSDK.getInstance().startActivityForUniMPTask(appid, intent);//通过startActivityForUniMPTask启动宿主activity。运行在小程序activity堆栈中
    }
});
```


## 宿主弹窗显示在小程序前

目前不支持宿主弹窗(Dialog)显示在小程序上方。仅支持显示activity。可以设置activity主题theme。实现Dialog弹窗效果。需要调用startActivityForUniMPTask。

示例如下：

```
Intent intent = new Intent(context, MenuActivity.class);//跳转宿主构建的activity
DCUniMPSDK.getInstance().startActivityForUniMPTask(appid, intent);//通过startActivityForUniMPTask启动宿主activity。运行在小程序activity堆栈中
```

## 开启后台运行

通过 DCSDKInitConfig配置[setEnableBackground](/UniMPDocs/API/android?id=setEnableBackground)小程序是否支持后台运行，默认点击胶囊按钮的`x`或者在小程序中调用`plus.runtime.quit()`方法会直接关闭小程序，当开启后台运行时会只是将小程序隐藏到后台，下次打开时直接显示之前的状态；

**示例**

```JAVA
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
    .setEnableBackground(true).build();
```

**注意事项**

开启小程序后台运行功能后，也将开启多任务窗口。效果如下图！如果你的需求不需要小程序有独立任务窗口。那请关闭小程序后台运行功能 或设置setUniMPFromRecents（v3.2.6）关闭任务窗口显示。

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/unimp_enableback.png" width=35%>

**2.8.4+版本支持设置setEnableBackground为false 去除多任务窗口**

### 打开小程序

第一次打开小程序 还是将小程序后台激活到前台。都是调用`DCUniMPSDK.getInstance().openUniMP`打开小程序

**示例**

```
DCUniMPSDK.getInstance().openUniMP(context,"__UNI__04E3A11");
```


### 关闭小程序

> 注：需要先获取IUniMP接口对象 通过openUniMP获取

开启后台运行。如果需要强制关闭小程序，可调用`IUniMP.closeUniMP()`关闭当前小程序

**示例**

```
IUniMP.closeUniMP()
```


## 修改启动动画 

3.4.7版本开始支持

unimp 默认自带一个从下而上的转场动画，且支持集成者自定义转场动画


**A 基本概念解释**

宿主activity 和 小程序实例activity:

app中用来启动商城小程序的 activity，被称为宿主 activity
承载小程序实例的activity 被称为 小程序实例activity

宿主 activity 由开发者实现，小程序实例activity 开发者无感知。


**B 进入动画和退出动画**

从宿主开启小程序，宿主activity将会播放 dcloud_unimp_host_close_exit动画，小程序实例会播放dcloud_unimp_open_enter
从小程序返回宿主，小程序实例会播放dcloud_unimp_close_exit，宿主activity会播放 dcloud_unimp_host_open_enter


**C 操作步骤**

1 在开发者的app module下 res/anim下新建下面四个动画资源

dcloud_unimp_close_exit
dcloud_unimp_open_enter
dcloud_unimp_host_close_exit
dcloud_unimp_host_open_enter


2 宿主activity 需要定义如下样式
```
<activity android:name=".MainActivity" android:theme="@style/DCloudMPHostActivityTheme">
</activity>
```

其中关键点是 需要将 windowAnimationStyle 设置为 uniMPHostWindowAnimation

```
<style name="DCloudMPHostActivityTheme" parent="@style/Theme.AppCompat">
	<item name="android:windowAnimationStyle">@style/uniMPHostWindowAnimation</item>
</style>
```
