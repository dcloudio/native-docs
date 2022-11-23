# unimp小程序V2版 (支持同时运行多个小程序)
# unimp applet V2 (supports running multiple applets at the same time)

[SDK下载](UniMPDocs/SDKDownload/android)
[SDK Download](UniMPDocs/SDKDownload/android)

## 类 DCUniMPSDK 
## class DCUniMPSDK

uni小程序SDK入口句柄,该类为工厂模式。通过`getInstance()`获取对象实例！
The uni applet SDK entry handle, which is a factory model. Get the object instance through `getInstance()`!

### DCUniMPSDK 对象的方法介绍
### DCUniMPSDK object method introduction

#### DCUniMPSDK.getInstance()

获取SDK实例
Get the SDK instance

**参数说明**
**Parameter Description**

无
none

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|class|DCUniMPSDK对象
|class|DCUniMPSDK object

#### DCUniMPSDK.getInstance().initialize(context, config, callback)

sdk初始化
sdk initialization

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|Context|Context|是|上下文
|Context|Context|Yes|Context
|config|DCSDKInitConfig|否|初始化配置信息类
|config|DCSDKInitConfig|No|Initialize configuration information class
|callback|IDCUniMPPreInitCallback|否|初始化完毕回调接口
|callback|IDCUniMPPreInitCallback|No|Callback interface after initialization

**返回值**
**return value**

无
none

**示例**
**example**
```java
MenuActionSheetItem item = new MenuActionSheetItem("关于", "gy");
List<MenuActionSheetItem> sheetItems = new ArrayList<>();
sheetItems.add(item);
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
	.setCapsule(true)
	.setMenuDefFontSize("16px")
	.setMenuDefFontColor("#ff00ff")
	.setMenuDefFontWeight("normal")
	.setMenuActionSheetItems(sheetItems)
	.build();
DCUniMPSDK.getInstance().initialize(this, config, new IDCUniMPPreInitCallback() {
    @Override
    public void onInitFinished(boolean isSuccess) {
        Log.e("unimp", "onInitFinished-----------"+isSuccess);
    }
});
```

#### DCUniMPSDK.getInstance().isInitialize()

SDK是否初始化成功
Whether the SDK is initialized successfully

**参数说明**
**Parameter Description**

无
none

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean| true表示初始化成功 false表示失败
|boolean| true indicates successful initialization, false indicates failure

#### DCUniMPSDK.getInstance().getAppBasePath(context)

获取uni小程序运行路径
Obtain the running path of the uni applet

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:---
|context|Context|是|上下文
|context|Context|Yes|context

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|String|uni小程序运行路径 路径格式： "/xxx/xxx/宿主包名/files/apps/"
|String|uni applet running path path format: "/xxx/xxx/host package name/files/apps/"

**Tips**

此接口用于宿主管理应用资源或自释放wgt包集成uni小程序。
This interface is used for the host to manage application resources or integrate the uni applet with the self-release wgt package.

**自释放wgt包集成uni小程序**
**Self-release wgt package integrates uni applet**

宿主通过zip解压wgt包资源。主动释放到uni小程序运行路径下。需要自创建文件`应用的APPID/www/`的目录
The host decompresses the wgt package resources through zip. Active release to the running path of the uni applet. The directory where the self-created file `APPID/www/` of the application is required

路径格式 : "uni小程序运行路径/应用的APPID/www/wgt包中的资源"
Path format: "uni applet running path/APPID of the application/www/resources in the wgt package"

**示例**
**example**

```
"/xxx/xxx/宿主包名/files/apps/__UNI__04E3A11/www/__UNI__04E3A11.wgt包中的资源"
```

#### DCUniMPSDK.getInstance().releaseWgtToRunPathFromePath(appid, wgtPath, callBack)

将wgt包中的资源文件释放到uni小程序运行时路径下。
Release the resource files in the wgt package to the runtime path of the uni applet.

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|appid|String|是|uni小程序的id
|appid|String| is the id of the uni applet
|wgtPath|String|是|uni小程序应用资源包路径 仅支持SD路径 不支持assets
|wgtPath|String|Yes|Uni applet application resource package path only supports SD path and does not support assets
|callback|ICallBack|否|拷贝状态回调
|callback|ICallBack|No|Copy status callback

**wgtPath参数说明**
**wgtPath parameter description**

uni小程序应用资源包路径。例如 "xxx/xxx/xxx/__UNI__04E3A11.wgt".
uni applet application resource package path. For example "xxx/xxx/xxx/__UNI__04E3A11.wgt".

#### Tips：
- 将不再强校验wgt文件名称。确保appid参数与实际wgt包相符即可。
- Wgt file names will no longer be strongly validated. Just make sure that the appid parameter matches the actual wgt package.
- 注意使用releaseWgtToRunPathFromePath方法需要申请存储权限：android.permission.WRITE_EXTERNAL_STORAGE
- Note that using the releaseWgtToRunPathFromPath method requires application for storage permission: android.permission.WRITE_EXTERNAL_STORAGE

**callback返回参数说明**
**callback return parameter description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|code|int|code为1时成功； code为-1时不成功
| code | int | success when code is 1; unsuccessful when code is -1
|pArgs|Object|回调信息 需要判断是否为空
|pArgs|Object|Callback information Need to judge whether it is empty

**返回值**
**return value**

无
none

**示例**
**example**
```java
String wgtPath = context.getExternalCacheDir().getPath()+"/__UNI__04E3A11.wgt";
DCUniMPSDK.getInstance().releaseWgtToRunPathFromePath("__UNI__04E3A11", wgtPath, new ICallBack() {
	@Override
	public Object onCallBack(int code, Object pArgs) {
		if(code ==1) {//释放wgt完成
			try {
				DCUniMPSDK.getInstance().startApp(context, "__UNI__04E3A11");
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else{//释放wgt失败
			Toast.makeText(context, "资源释放失败", Toast.LENGTH_SHORT).show();
		}
		return null;
	}
});
```

#### DCUniMPSDK.getInstance().openUniMP(context, appid, splashClass, redirectPath, arguments)

启动uni小程序，确保已初始化完毕再调用！可通过DCUniMPSDK.getInstance().isInitialize()判断。
Start the uni applet, make sure it has been initialized before calling it! It can be judged by DCUniMPSDK.getInstance().isInitialize().

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:-----
|context|Context|是|上下文
|context|Context|Yes|context
|appid|String|是|uni小程序应用id
|appid|String|Yes|uni applet application id
|splashClass|IDCUniMPAppSplashView|否|自定义splashView接口类，**再次启动已启动的小程序该参数失效**
|splashClass|IDCUniMPAppSplashView|No|Customize the interface class of splashView, **Start the started applet again, this parameter is invalid**
|redirectPath|String|否|uni小程序页面直达地址，**再次启动已启动的小程序该参数失效**
|redirectPath|String|No|The direct address of the uni applet page, **restart the already started applet, this parameter is invalid**
|arguments|JSONObject|否|uni小程序启动参数 应用启动后通过plus.runtime.arguments取值。
|arguments|JSONObject|No|Uni applet startup parameters After the application is started, the value is obtained through plus.runtime.arguments.

**redirectPath参数说明**
**redirectPath parameter description**

uni小程序页面直达地址。宿主可通过扫码、scheme、网络获取等形式获取相关数据。拼写`redirectPath`参数，调用startApp实现启动uni小程序直达逻辑。
The direct address of the uni applet page. The host can obtain relevant data through code scanning, scheme, and network acquisition. Spell the `redirectPath` parameter, and call startApp to realize the direct logic of starting the uni applet.

`redirectPath`目前由小程序开发者提供。后续SDK将提供分享链接等接口数据。待完善！
`redirectPath` is currently provided by the applet developer. Subsequent SDKs will provide interface data such as sharing links. To be perfected!

**格式**
**Format**

`redirectPath` = pagePath(uni小程序页面路径)+?+query(页面携带参数)
`redirectPath` = pagePath(uni applet page path)+?+query(page carries parameters)

```
pages/component/scroll-view/scroll-view?a=1&b=2&c=3
```

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|IUniMP| unimp小程序实例化接口对象
|IUniMP| The unimp applet instantiates the interface object

**示例**
**example**

```java
// 启动小程序
// Start the applet
try {
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context,"__UNI__04E3A11")
} catch (Exception e) {
	e.printStackTrace();
}
```

```java
// 启动小程序打开指定页面
// Start the applet to open the specified page
try {
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context,"__UNI__04E3A11",  MySplashView.class, "pages/component/scroll-view/scroll-view?a=1&b=2&c=3");
} catch (Exception e) {
	e.printStackTrace();
}
```

```java
// 启动小程序并传入参数 "Hello uni microprogram"
// Start the applet and pass in the parameter "Hello uni microprogram"
try {
	JSONObject arguments = new JSONObject();
	arguments.put("MSG","Hello uni microprogram");
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context, "__UNI__04E3A11", arguments);
} catch (Exception e) {
	e.printStackTrace();
}
```



#### DCUniMPSDK.getInstance().isExistsApp(appid)

检查当前appid小程序是否已释放wgt资源 可用来检查当前appid资源是否存在
Check whether the current appid applet has released the wgt resource Can be used to check whether the current appid resource exists

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|appid|String|是|小程序appid
|appid|String|Yes|appid of applet

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean| true表示存在 false表示不存在
|boolean| true means exists false means does not exist


<a id="getAppVersionInfo"></a>
#### DCUniMPSDK.getInstance().getAppVersionInfo(appid)

获取已运行过的小程序应用版本信息,没有运行过的小程序是无法正常获取到版本信息的。返回值需要判空处理!!!
Obtain the application version information of the applet that has been run, and the version information cannot be obtained normally for the applet that has not been run. The return value needs to be judged as empty!!!

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|appid|String|是|小程序appid
|appid|String|Yes|appid of applet

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|JSONObject|uni小程序版本信息 无法获取到指定appid信息会返回null.需要判空!!!
|JSONObject|uni applet version information If the specified appid information cannot be obtained, null will be returned. It needs to be judged as empty!!!

返回值JSONObject格式说明
Return value JSONObject format description

```json
{
"name": "1.0.0", //versionName
"code": "100" //versionCode
}
```

**示例:**
**Example:**

```java
JSONObject jsonObject = DCUniMPSDK.getInstance().getAppVersionInfo("__UNI__04E3A11");
if(jsonObject != null) {
	Logger.d("__UNI__04E3A11版本信息为"+jsonObject.toString());
}
```


#### DCUniMPSDK.getInstance().setDefMenuButtonClickCallBack(callBack)

设置menu点击事件回调接口
Set menu click event callback interface

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|callBack|IMenuButtonClickCallBack|是|菜单被点击事件回调
|callBack|IMenuButtonClickCallBack|Yes|Callback when the menu is clicked

**callback返回参数说明**
**callback return parameter description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|appid|String|uni小程序应用id
|appid|String|uni applet application id
|id|String|菜单按钮id
|id|String|menu button id

**返回值**
**return value**

无
none

**示例**
**example**
```java
DCUniMPSDK.getInstance().setDefMenuButtonClickCallBack(new IMenuButtonClickCallBack() {
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

#### DCUniMPSDK.getInstance().setUniMPOnCloseCallBack(callBack)

设置小程序被关闭事件监听
Set the applet to be closed event listener

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|callBack|IUniMPOnCloseCallBack|是|监听小程序被关闭事件
|callBack|IUniMPOnCloseCallBack|Yes|Listen to the event that the applet is closed

**callback返回参数说明**
**callback return parameter description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|appid|String|uni小程序应用id
|appid|String|uni applet application id

**返回值**
**return value**

无
none

**示例:**
**Example:**

```java
DCUniMPSDK.getInstance().setUniMPOnCloseCallBack(new IUniMPOnCloseCallBack() {
	@Override
	public void onClose(String appid) {
		Log.e("unimp", appid+"被关闭了");
	}
});
```

#### DCUniMPSDK.getInstance().setCapsuleCloseButtonClickCallBack(callBack)

设置小程序胶囊按钮点击"X"关闭事件监听，设置后原关闭逻辑将不再执行！交由宿主实现相关逻辑。v3.2.6
Set the applet capsule button and click "X" to close the event monitoring. After setting, the original closing logic will no longer be executed! Hand over to the host to implement the relevant logic. v3.2.6

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|callBack|IDCUniMPOnCapsuleCloseButtontCallBack|是|小程序胶囊按钮点击"X"事件
|callBack|IDCUniMPOnCapsuleCloseButtontCallBack|yes|Mini program capsule button click "X" event

**callback返回参数说明**
**callback return parameter description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|appid|String|uni小程序应用id
|appid|String|uni applet application id

**返回值**
**return value**

无
none

**示例:**
**Example:**

```java
DCUniMPSDK.getInstance().setCapsuleCloseButtonClickCallBack(new IDCUniMPOnCapsuleCloseButtontCallBack() {
	@Override
	public void closeButtonClicked(String appid) {
		Log.e("unimp", appid+"胶囊点击了关闭按钮");
	}
});
```

#### DCUniMPSDK.getInstance().setCapsuleMenuButtonClickCallBack(callBack)

设置小程序胶囊按钮点击"..."菜单事件监听，设置后原菜单弹窗逻辑将不再执行！交由宿主实现相关逻辑。v3.2.6
Set the applet capsule button to click the "..." menu event listener. After setting, the original menu pop-up logic will no longer be executed! Hand over to the host to implement the relevant logic. v3.2.6

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|callBack|IDCUniMPOnCapsuleMenuButtontCallBack|是|小程序胶囊按钮点击"..."事件
|callBack|IDCUniMPOnCapsuleMenuButtontCallBack|Yes|A small program capsule button click "..." event

**返回值**
**return value**

无
none

**示例:**
**Example:**

```java
DCUniMPSDK.getInstance().setCapsuleMenuButtonClickCallBack(new IDCUniMPOnCapsuleMenuButtontCallBack() {
	@Override
	public void menuButtonClicked(String appid) {
		Log.e("unimp", appid+"胶囊点击了菜单按钮");
		Intent intent = new Intent(context, MenuActivity.class);
        DCUniMPSDK.getInstance().startActivityForUniMPTask(appid, intent);
	}
});
```

#### DCUniMPSDK.getInstance().startActivityForUniMPTask(appid, intent)

启动一个Activity，当前Activity运行在小程序任务堆栈中。进程还是属于宿主进程。可正常使用宿主内存数据！关闭当前activity还会回到小程序。v3.2.6
Start an Activity, the current Activity is running in the applet task stack. The process still belongs to the host process. Host memory data can be used normally! Closing the current activity will return to the applet. v3.2.6

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|appid|String|是|小程序appid
|appid|String|Yes|appid of applet
|intent|android.content.Intent|是|安卓原生Intent 需要配置要启动的activity信息
|intent|android.content.Intent|Yes|Android native Intent needs to configure the activity information to be started


**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean| true表示初始化成功 false表示失败
|boolean| true indicates successful initialization, false indicates failure

**示例:**
**Example:**

```java
DCUniMPSDK.getInstance().setCapsuleMenuButtonClickCallBack(new IDCUniMPOnCapsuleMenuButtontCallBack() {
	@Override
	public void menuButtonClicked(String appid) {
		Log.e("unimp", appid+"胶囊点击了菜单按钮");
		Intent intent = new Intent(context, MenuActivity.class);
        DCUniMPSDK.getInstance().startActivityForUniMPTask(appid, intent);
	}
});
```

#### DCUniMPSDK.getInstance().setOnUniMPEventCallBack(callBack)

设置监听小程序发送给宿主的事件
Set the event that the listening applet sends to the host

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|callBack|IOnUniMPEventCallBack|是|小程序触发event事件接口
|callBack|IOnUniMPEventCallBack|Yes|The event interface triggered by the applet

**返回值**
**return value**

无
none

**示例**
**example**

```java
//小程序js层发送事件给宿主
//The applet js layer sends events to the host
uni.sendNativeEvent("aa",a, function(e){
	console.log("sendNativeEvent-----------回调"+JSON.stringify(e));
});

//JAVA监听小程序发来的事件 通过callback返回参数
//JAVA listens to events sent by the applet and returns parameters through callback
DCUniMPSDK.getInstance().setOnUniMPEventCallBack(new IOnUniMPEventCallBack() {
	@Override
	public void onUniMPEventReceive(String appid, String event, Object data, DCUniMPJSCallback callback) {
        callback.invoke( "测试数据");
	}
});
```


## 接口 IUniMP
## Interface IUniMP

uni小程序实例化接口对象。通过openUniMP获取。
The uni applet instantiates the interface object. Obtained through openUniMP.

### IUniMP 接口的方法介绍
### Method introduction of IUniMP interface

#### IUniMP.getAppid()

获取小程序的appid 唯一标识
Obtain the unique identifier of the appid of the applet

**参数说明**
**Parameter Description**

无
none

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|String|小程序的appid
|String|appid of the applet

<a id="getCurrentPageUrl"></a>
#### IUniMP.getCurrentPageUrl()

获取运行时uni小程序的当前页面url 可用于页面直达等操作的地址。
Obtain the current page url of the uni applet at runtime, which can be used for operations such as page direct.

**参数说明**
**Parameter Description**

无
none

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|String|页面url
|String|page url


<a id="sendUniMPEvent"></a>
#### IUniMP.sendUniMPEvent(event, data)

宿主主动触发事件到正在运行的小程序。注意：需要已有小程序在运行才可成功
The host actively triggers events to the running applet. Note: The applet needs to be running to be successful

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|event|String|是|触发事件的event
|event|String|Yes|the event that triggered the event
|data|String或JSON|是|事件的携带参数
|data|String or JSON|Yes|the carrying parameter of the event

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|true表示事件通知成功。false表示失败。可以log查看原因。
|boolean|true indicates that the event notification is successful. false means failure. You can log to view the reason.

**示例:**
**Example:**

```java
//JAVA原生层
//JAVA native layer
JSONObject data = new JSONObject();
data.put("sj", "点击了关于");
IUniMP.sendUniMPEvent("gy", data);

//uni小程序JS代码 监听宿主触发给小程序的事件
//uni applet JS code listens to events triggered by the host to the applet
uni.onNativeEventReceive(function(event, data){
    console.log("onNativeEventReceive----="+event);
});
```


#### IUniMP.isRuning()

判定当前小程序是否运行中
Determine whether the current applet is running

**参数说明**
**Parameter Description**

无
none

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|true表示运行中 false表示已停止运行
|boolean|true means it is running, false means it has stopped running

#### IUniMP.showUniMP() 

当前小程序显示到前台。仅开启后台模式生效！v3.2.6+
The current applet is displayed to the foreground. Only enable the background mode to take effect! v3.2.6+

**参数说明**
**Parameter Description**

无
none

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|true成功 false失败
|boolean|true success false failure

#### IUniMP.hideUniMP()

当前小程序退到后台。仅开启后台模式生效! v3.2.6+
The current applet retreats to the background. Only enable the background mode to take effect! v3.2.6+

**参数说明**
**Parameter Description**

无
none

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|true成功 false失败
|boolean|true success false failure

#### IUniMP.closeUniMP()

关闭当前小程序 v3.2.6+
Close the current applet v3.2.6+

**参数说明**
**Parameter Description**

无
none

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|true成功 false失败
|boolean|true success false failure


## 类 DCSDKInitConfig
## class DCSDKInitConfig

uni小程序SDK初始化信息类。需通过DCSDKInitConfig.Builder构建DCSDKInitConfig对象。
The uni applet SDK initializes the information class. The DCSDKInitConfig object needs to be constructed through DCSDKInitConfig.Builder.

### 类 DCSDKInitConfig.Builder
### class DCSDKInitConfig.Builder

DCSDKInitConfig的构建者。通过DCSDKInitConfig.Builder().build()创建DCSDKInitConfig实例。
Builder of DCSDKInitConfig. Create a DCSDKInitConfig instance through DCSDKInitConfig.Builder().build().

**示例**
**example**

```java
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
                .setCapsule(true)
                .setMenuDefFontSize("16px")
                .setMenuDefFontColor("#ff00ff")
                .setMenuDefFontWeight("normal")
                .setMenuActionSheetItems(sheetItems)
				.setNJS(false)
                .build();
```

### DCSDKInitConfig.Builder 对象的方法介绍
### DCSDKInitConfig.Builder object method introduction

#### DCSDKInitConfig.Builder.setCapsule(isCapsule)

设置是否使用胶囊按钮
Set whether to use the capsule button

**注意**
**Notice**

uniapp页面没有配置navigationBar或titleNView则不会显示胶囊按钮 两者是绑定关系
If the uniapp page is not configured with navigationBar or titleNView, the capsule button will not be displayed. The two are binding relationships.

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|isCapsule|boolean|true|true使用胶囊按钮 false不使用
|isCapsule|boolean|true|true use capsule button false not use

#### DCSDKInitConfig.Builder.setCapsuleButtonStyle(style)

设置胶囊按钮Style
Set the capsule button Style

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|style|DCUniMPCapsuleButtonStyle|null|胶囊按钮风格样式
|style|DCUniMPCapsuleButtonStyle|null|capsule button style

**示例**
**example**

```java
DCUniMPCapsuleButtonStyle style = new DCUniMPCapsuleButtonStyle();
style.setBackgroundColor("#990099");
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
                .setCapsule(true)
				.setCapsuleButtonStyle(style)
                .build();
```

#### setEnableBackground(isEnableBackground)

设置小程序退出时是否进入后台
Set whether to enter the background when the applet exits

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|isEnableBackground|boolean|false|true表示小程序退出时进入后台 false表示直接退出
|isEnableBackground|boolean|false|true indicates that the applet enters the background when it exits, false indicates that it exits directly

**注意事项**
**Precautions**

开启小程序后台运行功能后，也将开启多任务窗口。效果如下图！如果你的需求不需要小程序有独立任务窗口。那请关闭小程序后台运行功能。
After enabling the background running function of the applet, the multitasking window will also be opened. The effect is as shown below! If your needs do not require applets to have independent task windows. Then please turn off the background running function of the applet.
后台模式与多任务窗口两者功能目前是相辅相成。不可分割。
The functions of the background mode and the multitasking window are currently complementary. indivisible.

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/unimp_enableback.png" width=35%>

**2.8.4+版本支持设置setEnableBackground为false 去除多任务窗口**
**Version 2.8.4+ supports setting setEnableBackground to false to remove the multitasking window**

#### setUniMPFromRecents(isFromRecents)

设置小程序任务窗口是否显示，仅在后台模式下生效 v3.2.6+
Set whether to display the task window of the applet, only effective in background mode v3.2.6+

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|isFromRecents|boolean|true|true显示任务窗口 false不显示 仅在后台模式下生效
|isFromRecents|boolean|true|true show task window false not show it only takes effect in background mode

**注意事项**
**Precautions**

该api仅在后台模式下生效！
This api only works in background mode!

#### DCSDKInitConfig.Builder.setMenuDefFontSize(menuDefFontSize)

设置菜单默认按钮字体大小
Set menu default button font size

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|menuDefFontSize|String|"22px"|按钮上文字大小 数字加"px"格式字符串
|menuDefFontSize|String|"22px"|The size of the text on the button Number plus "px" format string

#### DCSDKInitConfig.Builder.setMenuDefFontWeight(menuDefFontWeight)

设置菜单默认按钮上文字的粗细
Set the thickness of the text on the default button of the menu

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|menuDefFontWeight|String|"normal"|按钮上文字的粗细 可取值："normal"标准字体；"bold"加粗字体。
|menuDefFontWeight|String|"normal"|The thickness of the text on the button Possible values: "normal" standard font; "bold" bold font.

#### DCSDKInitConfig.Builder.setMenuActionSheetItems(list)

设置默认菜单按钮items
Set default menu button items

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|list|List\<MenuActionSheetItem\>|无|默认菜单按钮列表。设置setCapsule为true生效。
|list|List\<MenuActionSheetItem\>|None|Default list of menu buttons. Set setCapsule to true to take effect.

## 类 MenuActionSheetItem
## class MenuActionSheetItem

构造函数 MenuActionSheetItem(title, id)
Constructor MenuActionSheetItem(title, id)

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|title|String|无|默认菜单按钮文字文案
|title|String|None|Default menu button text copy
|id|String|无|默认菜单按钮id
|id|String|None|Default menu button id

**示例**
**example**
```java
MenuActionSheetItem item = new MenuActionSheetItem("关于", "gy");
```


#### DCSDKInitConfig.Builder.setNJS(boolean enable)

设置是否支持NJS功能，默认关闭
Set whether to support NJS function, the default is off

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|enable|boolean|false|设置是否支持NJS功能，默认关闭
|enable|boolean|false|Set whether to support NJS function, the default is off


## 接口 IDCUniMPAppSplashView
## Interface IDCUniMPAppSplashView

自定义splashView接口类
Customize splashView interface class

### IDCUniMPAppSplashView 接口方法介绍
### IDCUniMPAppSplashView interface method introduction

<a id="getSplashView"></a>
#### getSplashView(context, appid)

splash创建时会调用此函数
This function is called when splash is created

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|context|Context|上下文
|context|Context|Context
|String|appid|小程序appid  （2.6.6+新增）
|String|appid|Mini program appid (new in 2.6.6+)
|String|appName|小程序名称 注意需要判空 (3.3.5+新增)
|String|appName|Mini program name Note that it needs to be judged empty (3.3.5+ new)
|String|icon|小程序图标 网络地址或本地图片地址 注意需要判空 (3.3.5+新增)
|String|icon|Mini program icon network address or local picture address Note that it needs to be judged empty (3.3.5+new)

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|View|自定义splashView
|View|Custom splashView

#### onCloseSplash(rootView)

splash关闭时会调用此函数
This function will be called when splash is closed

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|rootView|ViewGroup|splashView的父容器
| rootView| ViewGroup| parent container of splashView

**返回值**
**return value**

无
none

**示例**
**example**
```java
public class MySplashView implements IDCUniMPAppSplashView {
    FrameLayout splashView;
    @Override
    public View getSplashView(Context context, String appid) {
        splashView = new FrameLayout(context);
        splashView.setBackgroundColor(Color.BLUE);
        return splashView;
    }

    @Override
    public void onCloseSplash(ViewGroup rootView) {
        if(rootView != null)
            rootView.removeView(splashView);
    }
}
```

## 接口 DCUniMPJSCallback
## Interface DCUniMPJSCallback

小程序js回调接口
Mini program js callback interface

### DCUniMPJSCallback 的接口函数介绍
### Interface function introduction of DCUniMPJSCallback

#### DCUniMPJSCallback.invoke(data)

触发js回调(仅一次回调)
Trigger js callback (only one callback)

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|data|String或JSON|回调信息
|data|String or JSON|callback information

**返回值**
**return value**

无
none

#### DCUniMPJSCallback.invokeAndKeepAlive(data)

触发js回调(可多次回调)
Trigger js callback (can be called back multiple times)

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|data|String或JSON|回调信息
|data|String or JSON|callback information

**返回值**
**return value**

无
none


## 类 DCUniMPCapsuleButtonStyle
## class DCUniMPCapsuleButtonStyle

胶囊按钮Style
Capsule Button Style

### DCUniMPCapsuleButtonStyle 对象的方法介绍
### DCUniMPCapsuleButtonStyle object method introduction

#### DCUniMPCapsuleButtonStyle.setBackgroundColor(backgroundColor)

设置胶囊按钮背景颜色
Set the capsule button background color

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|backgroundColor|string|#FFFFFF|胶囊按钮背景颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，
|backgroundColor|string|#FFFFFF|Capsule button background color Possible values: "#RRGGBB" and "rgba(R,G,B,A)" format strings,

#### DCUniMPCapsuleButtonStyle.setTextColor(textColor)

设置胶囊按钮文案颜色
Set the capsule button text color

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|textColor|string|#000000|胶囊按钮文案颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，
|textColor|string|#000000|Capsule button text color Possible values: "#RRGGBB" and "rgba(R,G,B,A)" format strings,

#### DCUniMPCapsuleButtonStyle.setHighlightColor(highlightColor)

设置胶囊按钮按下状态背景颜色
Set the capsule button pressed state background color

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|highlightColor|string|#CBCCCD|胶囊按钮文案颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，
|highlightColor|string|#CBCCCD|Capsule button text color Possible values: "#RRGGBB" and "rgba(R,G,B,A)" format strings,

#### DCUniMPCapsuleButtonStyle.setBorderColor(borderColor)

设置胶囊按钮边框颜色
Set the capsule button border color

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|borderColor|string|#FFE5E5E5|胶囊按钮文案颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，
|borderColor|string|#FFE5E5E5|Capsule button text color Possible values: "#RRGGBB" and "rgba(R,G,B,A)" format strings,


#### DCSDKInitConfig.Builder.setMenuDefFontColor(menuDefFontColor)

设置菜单默认按钮文字有颜色
Set menu default button text to have color

**参数说明**
**Parameter Description**

|参数|类型|默认值|说明
|Parameter|Type|Default|Description
|:----|:----|:----|:----
|menuDefFontColor|String|"#000000"|字体颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，
|menuDefFontColor|String|"#000000"|Font color Possible values: "#RRGGBB" and "rgba(R,G,B,A)" format strings,

### DCUniMPPermissionUtil 

小程序权限申请工具
Mini Program Permission Application Tool

#### requestPermissions(activity, permissions, requestCode)

权限申请
Access Request

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|activity|Activity|加载小程序的Activity对象
|activity|Activity|Activity object that loads the applet
|permissions|String[]|要申请的权限字符串数组
|permissions|String[]|Array of permission strings to apply for
|requestCode|int|请求码
|requestCode|int|request code

**返回值**
**return value**

无
none