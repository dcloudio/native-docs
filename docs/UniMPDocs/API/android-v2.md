# unimp小程序V2版 (支持同时运行多个小程序)

[SDK下载](/UniMPDocs/SDKDownload/android)

## 类 DCUniMPSDK

uni小程序SDK入口句柄,该类为工厂模式。通过`getInstance()`获取对象实例！

### DCUniMPSDK 对象的方法介绍

#### DCUniMPSDK.getInstance()

获取SDK实例

**参数说明**

无

**返回值**

|类型|说明
|:----|:----
|class|DCUniMPSDK对象

#### DCUniMPSDK.getInstance().initialize(context, config, callback)

sdk初始化

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|Context|Context|是|上下文
|config|DCSDKInitConfig|否|初始化配置信息类
|callback|IDCUniMPPreInitCallback|否|初始化完毕回调接口

**返回值**

无

**示例**
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

**参数说明**

无

**返回值**

|类型|说明
|:----|:----
|boolean| true表示初始化成功 false表示失败

#### DCUniMPSDK.getInstance().getAppBasePath(context)

获取uni小程序运行路径

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:---
|context|Context|是|上下文

**返回值**

|类型|说明
|:----|:----
|String|uni小程序运行路径 路径格式： "/xxx/xxx/宿主包名/files/apps/"

**Tips**

此接口用于宿主管理应用资源或自释放wgt包集成uni小程序。

**自释放wgt包集成uni小程序**

宿主通过zip解压wgt包资源。主动释放到uni小程序运行路径下。需要自创建文件`应用的APPID/www/`的目录

路径格式 : "uni小程序运行路径/应用的APPID/www/wgt包中的资源"

**示例**

```
"/xxx/xxx/宿主包名/files/apps/__UNI__04E3A11/www/__UNI__04E3A11.wgt包中的资源"
```

#### DCUniMPSDK.getInstance().releaseWgtToRunPathFromePath(appid, wgtPath, callBack)

将wgt包中的资源文件释放到uni小程序运行时路径下。

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|appid|String|是|uni小程序的id
|wgtPath|String|是|uni小程序应用资源包路径 仅支持SD路径 不支持assets
|callback|ICallBack|否|拷贝状态回调

**wgtPath参数说明**

uni小程序应用资源包路径。例如 "xxx/xxx/xxx/__UNI__04E3A11.wgt".

#### Tips：
- 将不再强校验wgt文件名称。确保appid参数与实际wgt包相符即可。
- 注意使用releaseWgtToRunPathFromePath方法需要申请存储权限：android.permission.WRITE_EXTERNAL_STORAGE

**callback返回参数说明**

|参数|类型|说明
|:----|:----|:----
|code|int|code为1时成功； code为-1时不成功
|pArgs|Object|回调信息 需要判断是否为空

**返回值**

无

**示例**
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

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:-----
|context|Context|是|上下文
|appid|String|是|uni小程序应用id
|splashClass|IDCUniMPAppSplashView|否|自定义splashView接口类，**再次启动已启动的小程序该参数失效**
|redirectPath|String|否|uni小程序页面直达地址，**再次启动已启动的小程序该参数失效**
|arguments|JSONObject|否|uni小程序启动参数 应用启动后通过plus.runtime.arguments取值。

**redirectPath参数说明**

uni小程序页面直达地址。宿主可通过扫码、scheme、网络获取等形式获取相关数据。拼写`redirectPath`参数，调用startApp实现启动uni小程序直达逻辑。

`redirectPath`目前由小程序开发者提供。后续SDK将提供分享链接等接口数据。待完善！

**格式**

`redirectPath` = pagePath(uni小程序页面路径)+?+query(页面携带参数)

```
pages/component/scroll-view/scroll-view?a=1&b=2&c=3
```

**返回值**

|类型|说明
|:----|:----
|IUniMP| unimp小程序实例化接口对象

**示例**

```java
// 启动小程序
try {
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context,"__UNI__04E3A11")
} catch (Exception e) {
	e.printStackTrace();
}
```

```java
// 启动小程序打开指定页面
try {
	IUniMP unimp = DCUniMPSDK.getInstance().openUniMP(context,"__UNI__04E3A11",  MySplashView.class, "pages/component/scroll-view/scroll-view?a=1&b=2&c=3");
} catch (Exception e) {
	e.printStackTrace();
}
```

```java
// 启动小程序并传入参数 "Hello uni microprogram"
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

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|appid|String|是|小程序appid

**返回值**

|类型|说明
|:----|:----
|boolean| true表示存在 false表示不存在


<a id="getAppVersionInfo"></a>
#### DCUniMPSDK.getInstance().getAppVersionInfo(appid)

获取已运行过的小程序应用版本信息,没有运行过的小程序是无法正常获取到版本信息的。返回值需要判空处理!!!

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|appid|String|是|小程序appid

**返回值**

|类型|说明
|:----|:----
|JSONObject|uni小程序版本信息 无法获取到指定appid信息会返回null.需要判空!!!

返回值JSONObject格式说明

```json
{
"name": "1.0.0", //versionName
"code": "100" //versionCode
}
```

**示例:**

```java
JSONObject jsonObject = DCUniMPSDK.getInstance().getAppVersionInfo("__UNI__04E3A11");
if(jsonObject != null) {
	Logger.d("__UNI__04E3A11版本信息为"+jsonObject.toString());
}
```


#### DCUniMPSDK.getInstance().setDefMenuButtonClickCallBack(callBack)

设置menu点击事件回调接口

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|callBack|IMenuButtonClickCallBack|是|菜单被点击事件回调

**callback返回参数说明**

|参数|类型|说明
|:----|:----|:----
|appid|String|uni小程序应用id
|id|String|菜单按钮id

**返回值**

无

**示例**
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

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|callBack|IUniMPOnCloseCallBack|是|监听小程序被关闭事件

**callback返回参数说明**

|参数|类型|说明
|:----|:----|:----
|appid|String|uni小程序应用id

**返回值**

无

**示例:**

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

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|callBack|IDCUniMPOnCapsuleCloseButtontCallBack|是|小程序胶囊按钮点击"X"事件

**callback返回参数说明**

|参数|类型|说明
|:----|:----|:----
|appid|String|uni小程序应用id

**返回值**

无

**示例:**

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

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|callBack|IDCUniMPOnCapsuleMenuButtontCallBack|是|小程序胶囊按钮点击"..."事件

**返回值**

无

**示例:**

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

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|appid|String|是|小程序appid
|intent|android.content.Intent|是|安卓原生Intent 需要配置要启动的activity信息


**返回值**

|类型|说明
|:----|:----
|boolean| true表示初始化成功 false表示失败

**示例:**

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

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|callBack|IOnUniMPEventCallBack|是|小程序触发event事件接口

**返回值**

无

**示例**

```java
//小程序js层发送事件给宿主
uni.sendNativeEvent("aa",a, function(e){
	console.log("sendNativeEvent-----------回调"+JSON.stringify(e));
});

//JAVA监听小程序发来的事件 通过callback返回参数
DCUniMPSDK.getInstance().setOnUniMPEventCallBack(new IOnUniMPEventCallBack() {
	@Override
	public void onUniMPEventReceive(String appid, String event, Object data, DCUniMPJSCallback callback) {
        callback.invoke( "测试数据");
	}
});
```


## 接口 IUniMP

uni小程序实例化接口对象。通过openUniMP获取。

### IUniMP 接口的方法介绍

#### IUniMP.getAppid()

获取小程序的appid 唯一标识

**参数说明**

无

**返回值**

|类型|说明
|:----|:----
|String|小程序的appid

<a id="getCurrentPageUrl"></a>
#### IUniMP.getCurrentPageUrl()

获取运行时uni小程序的当前页面url 可用于页面直达等操作的地址。

**参数说明**

无

**返回值**

|类型|说明
|:----|:----
|String|页面url


<a id="sendUniMPEvent"></a>
#### IUniMP.sendUniMPEvent(event, data)

宿主主动触发事件到正在运行的小程序。注意：需要已有小程序在运行才可成功

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|event|String|是|触发事件的event
|data|String或JSON|是|事件的携带参数

**返回值**

|类型|说明
|:----|:----
|boolean|true表示事件通知成功。false表示失败。可以log查看原因。

**示例:**

```java
//JAVA原生层
JSONObject data = new JSONObject();
data.put("sj", "点击了关于");
IUniMP.sendUniMPEvent("gy", data);

//uni小程序JS代码 监听宿主触发给小程序的事件
uni.onNativeEventReceive(function(event, data){
    console.log("onNativeEventReceive----="+event);
});
```


#### IUniMP.isRuning()

判定当前小程序是否运行中

**参数说明**

无

**返回值**

|类型|说明
|:----|:----
|boolean|true表示运行中 false表示已停止运行

#### IUniMP.showUniMP()

当前小程序显示到前台。仅开启后台模式生效！v3.2.6+

**参数说明**

无

**返回值**

|类型|说明
|:----|:----
|boolean|true成功 false失败

#### IUniMP.hideUniMP()

当前小程序退到后台。仅开启后台模式生效! v3.2.6+

**参数说明**

无

**返回值**

|类型|说明
|:----|:----
|boolean|true成功 false失败

#### IUniMP.closeUniMP()

关闭当前小程序 v3.2.6+

**参数说明**

无

**返回值**

|类型|说明
|:----|:----
|boolean|true成功 false失败


## 类 DCSDKInitConfig

uni小程序SDK初始化信息类。需通过DCSDKInitConfig.Builder构建DCSDKInitConfig对象。

### 类 DCSDKInitConfig.Builder

DCSDKInitConfig的构建者。通过DCSDKInitConfig.Builder().build()创建DCSDKInitConfig实例。

**示例**

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

#### DCSDKInitConfig.Builder.setCapsule(isCapsule)

设置是否使用胶囊按钮

**注意**

uniapp页面没有配置navigationBar或titleNView则不会显示胶囊按钮 两者是绑定关系

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|isCapsule|boolean|true|true使用胶囊按钮 false不使用

#### DCSDKInitConfig.Builder.setCapsuleButtonStyle(style)

设置胶囊按钮Style

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|style|DCUniMPCapsuleButtonStyle|null|胶囊按钮风格样式

**示例**

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

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|isEnableBackground|boolean|false|true表示小程序退出时进入后台 false表示直接退出

**注意事项**

开启小程序后台运行功能后，也将开启多任务窗口。效果如下图！如果你的需求不需要小程序有独立任务窗口。那请关闭小程序后台运行功能。
后台模式与多任务窗口两者功能目前是相辅相成。不可分割。

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/unimp_enableback.png" width=35%>

**2.8.4+版本支持设置setEnableBackground为false 去除多任务窗口**

#### ~~setUniMPFromRecents(isFromRecents)~~  已废弃

设置小程序任务窗口是否显示，仅在后台模式下生效 v3.2.6+  已废弃，后续将会移除

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|isFromRecents|boolean|true|true显示任务窗口 false不显示 仅在后台模式下生效

**注意事项**

已废弃，类似场景使用 setEnableBackground 解决


#### DCSDKInitConfig.Builder.setMenuDefFontSize(menuDefFontSize)

设置菜单默认按钮字体大小

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|menuDefFontSize|String|"22px"|按钮上文字大小 数字加"px"格式字符串

#### DCSDKInitConfig.Builder.setMenuDefFontWeight(menuDefFontWeight)

设置菜单默认按钮上文字的粗细

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|menuDefFontWeight|String|"normal"|按钮上文字的粗细 可取值："normal"标准字体；"bold"加粗字体。

#### DCSDKInitConfig.Builder.setMenuActionSheetItems(list)

设置默认菜单按钮items

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|list|List\<MenuActionSheetItem\>|无|默认菜单按钮列表。设置setCapsule为true生效。

## 类 MenuActionSheetItem

构造函数 MenuActionSheetItem(title, id)

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|title|String|无|默认菜单按钮文字文案
|id|String|无|默认菜单按钮id

**示例**
```java
MenuActionSheetItem item = new MenuActionSheetItem("关于", "gy");
```


#### DCSDKInitConfig.Builder.setNJS(boolean enable)

设置是否支持NJS功能，默认关闭

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|enable|boolean|false|设置是否支持NJS功能，默认关闭


## 接口 IDCUniMPAppSplashView

自定义splashView接口类

### IDCUniMPAppSplashView 接口方法介绍

<a id="getSplashView"></a>
#### getSplashView(context, appid)

splash创建时会调用此函数

**参数说明**

|参数|类型|说明
|:----|:----|:----
|context|Context|上下文
|String|appid|小程序appid  （2.6.6+新增）
|String|appName|小程序名称 注意需要判空 (3.3.5+新增)
|String|icon|小程序图标 网络地址或本地图片地址 注意需要判空 (3.3.5+新增)

**返回值**

|类型|说明
|:----|:----
|View|自定义splashView

#### onCloseSplash(rootView)

splash关闭时会调用此函数

**参数说明**

|参数|类型|说明
|:----|:----|:----
|rootView|ViewGroup|splashView的父容器

**返回值**

无

**示例**
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

小程序js回调接口

### DCUniMPJSCallback 的接口函数介绍

#### DCUniMPJSCallback.invoke(data)

触发js回调(仅一次回调)

**参数说明**

|参数|类型|说明
|:----|:----|:----
|data|String或JSON|回调信息

**返回值**

无

#### DCUniMPJSCallback.invokeAndKeepAlive(data)

触发js回调(可多次回调)

**参数说明**

|参数|类型|说明
|:----|:----|:----
|data|String或JSON|回调信息

**返回值**

无


## 类 DCUniMPCapsuleButtonStyle

胶囊按钮Style

### DCUniMPCapsuleButtonStyle 对象的方法介绍

#### DCUniMPCapsuleButtonStyle.setBackgroundColor(backgroundColor)

设置胶囊按钮背景颜色

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|backgroundColor|string|#FFFFFF|胶囊按钮背景颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，

#### DCUniMPCapsuleButtonStyle.setTextColor(textColor)

设置胶囊按钮文案颜色

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|textColor|string|#000000|胶囊按钮文案颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，

#### DCUniMPCapsuleButtonStyle.setHighlightColor(highlightColor)

设置胶囊按钮按下状态背景颜色

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|highlightColor|string|#CBCCCD|胶囊按钮文案颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，

#### DCUniMPCapsuleButtonStyle.setBorderColor(borderColor)

设置胶囊按钮边框颜色

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|borderColor|string|#FFE5E5E5|胶囊按钮文案颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，


#### DCSDKInitConfig.Builder.setMenuDefFontColor(menuDefFontColor)

设置菜单默认按钮文字有颜色

**参数说明**

|参数|类型|默认值|说明
|:----|:----|:----|:----
|menuDefFontColor|String|"#000000"|字体颜色 可取值："#RRGGBB" 和 "rgba(R,G,B,A)" 格式字符串，

### DCUniMPPermissionUtil

小程序权限申请工具

#### requestPermissions(activity, permissions, requestCode)

权限申请

**参数说明**

|参数|类型|说明
|:----|:----|:----
|activity|Activity|加载小程序的Activity对象
|permissions|String[]|要申请的权限字符串数组
|requestCode|int|请求码

**返回值**

无