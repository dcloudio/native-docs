## 技术架构 
## Technology Architecture 
HTML5+ 基座扩展采用三层结构，JS层、PluginBridge层和Native层。 三层功能分别是： 
The HTML5+ base extension adopts a three-layer structure, JS layer, PluginBridge layer and Native layer. The functions of the three layers are:

**JS层**： 在Webview页面调用，触发Native层代码，获取执行结果。 
**JS layer**: Called on the Webview page to trigger the Native layer code and obtain the execution result.

**PluginBridge层**： 将JS层请求进行处理，触发Native层扩展插件代码。 
**PluginBridge layer**: Process JS layer requests and trigger Native layer extension plug-in codes.

**Native层**： 插件扩展的平台原生代码，负责执行业务逻辑并执行结果返回到请求页面。
**Native layer**: The native code of the platform extended by the plug-in, which is responsible for executing business logic and returning the execution result to the request page.

![](https://ask.dcloud.net.cn/uploads/article/20141017/6e2bd27ff777bed57750a5b3b6143a0f.png)

开发者在开发扩展插件时需要为扩展插件编写对应的JS API，JS API将在HTML页面中触发调用对应Native扩展方法的请求，并负责接收运行结果。 
Developers need to write the corresponding JS API for the extension plug-in when developing the extension plug-in. The JS API will trigger a request to call the corresponding Native extension method in the HTML page, and is responsible for receiving the running result.

开发者在编写扩展插件的JS时需要调用Javascript Plugin Bridge的API用来完成对Native层代码的调用和运行结果的返回。在实际应用中，开发者可以根据扩展方法的实际需求不同，将插件的扩展方法设置为同步执行或异步执行。
When writing the JS of the extension plug-in, the developer needs to call the API of the Javascript Plugin Bridge to complete the call to the Native layer code and return the operation result. In practical applications, developers can set the extension method of the plug-in to execute synchronously or asynchronously according to the actual needs of the extension method.
 
同步执行的扩展方法会阻塞当前JS代码的执行，直到Native层插件扩展方法执行完毕。异步扩展方法不会阻塞当前JS代码的执行，使用者需要设置回调方法接收Native层返回的执行结果，开发者需要在插件中调用 Native plugin brigde的方法将执行结果返回到请求页面。
The synchronously executed extension method will block the execution of the current JS code until the Native layer plug-in extension method is executed. The asynchronous extension method will not block the execution of the current JS code. The user needs to set a callback method to receive the execution result returned by the Native layer. The developer needs to call the Native plugin brigde method in the plug-in to return the execution result to the request page.

工程示例请参考SDK内包含的HBuilder-Integrate工程，工程里已经整合了插件开发和集成方式的示例。
For project examples, please refer to the HBuilder-Integrate project included in the SDK, which has integrated examples of plug-in development and integration methods.

## 扩展插件工作流程
## Extension plugin workflow

异步方法的执行不会阻塞当前JS的运行，方法的执行结果会通过回调的方式返回。
The execution of the asynchronous method will not block the running of the current JS, and the execution result of the method will be returned through the callback.

**插件异步扩展方法：**
**Plug-in asynchronous extension method:**

![](https://ask.dcloud.net.cn/uploads/article/20141017/e7b481bc1dc1caf69cda678f92587cd9.png)

同步方法的执行会阻塞当前JS的运行，方法执行完成后可直接获取执行的结果。
The execution of the synchronous method will block the running of the current JS, and the execution result can be obtained directly after the execution of the method is completed.

**插件同步扩展方法：**
**Plug-in synchronization extension method:**

![](https://ask.dcloud.net.cn/uploads/article/20141017/095b9c2bdb95d1d9ef68ddeeb610b883.png)

## 扩展插件JS API 编写
## Write the extension plug-in JS API

开发者在实现JS层API时首先要定义一个插件类的别名，并需要在Android工程的assets\data\properties.xml文件中声明插件类别名和Native层扩展插件类的对应关系
When implementing the JS layer API, the developer must first define an alias for the plug-in class, and declare the corresponding relationship between the plug-in class name and the Native layer extension plug-in class in the assets\data\properties.xml file of the Android project

```
<properties>
	<features>
		<feature name="plugintest" value="com.example.H5PlusPlugin.PGPlugintest"></feature>
</properties>
```

示例中为方便查看删除了其他插件的代码，开发者在可根据5+应用使用插件的情况进行增删修改。
In the example, the code of other plug-ins has been deleted for the convenience of viewing. Developers can add, delete, and modify plug-ins according to the situation of 5+ applications using plug-ins.

Feature节点下声明的插件将会在调用时创建相应的对象。
Plugins declared under the Feature node will create corresponding objects when called.

**JS扩展方法的实现**
** Implementation of JS extension method **

**同步返回JS扩展方法实现**
**Synchronous return JS extension method implementation**

在实现同步扩展方法时，开发者需要调用JS Plugin Bridge的window.plus.bridge.execSync()
When implementing the synchronization extension method, the developer needs to call window.plus.bridge.execSync() of the JS Plugin Bridge
方法，该方法可同步获取Native插件返回的运行结果。
method, which can synchronously obtain the running results returned by the Native plug-in.

```
void plus.bridge.execSync( String service, String action, Array<String> args );
```

**service:**  插件类别名
**service:** plugin class name

**action:**  调用Native层插件方法名称。
**action:** Call the Native layer plug-in method name.

**args：**  参数列表。
**args:** The list of arguments.

**异步返回JS扩展方法实现**
**Asynchronous return JS extension method implementation**

在实现异步扩展方法时，开发者需要调用JS Plugin Bridge的plus.bridge.exec()方法，该方法会通知Native层插件执行指定方法，运行结果会通过回调的方式通知JS层
When implementing the asynchronous extension method, the developer needs to call the plus.bridge.exec() method of the JS Plugin Bridge, which will notify the Native layer plug-in to execute the specified method, and the running result will notify the JS layer through a callback

```
void plus.bridge.exec( String service, String action, Array<String> args );
```
**service:**  插件类别名
**service:** plugin class name

**action:**  调用Native层插件方法名称。
**action:** Call the Native layer plug-in method name.

**args：**  参数列表。
**args:** The list of arguments.

**扩展插件JS API代码示例：**
**Extended plug-in JS API code example:**

```
! function(root, factory) {
	if (typeof exports == 'object' && typeof module != 'undefined') {
		module.exports = factory()
	} else if (typeof define == 'function' && define.amd) {
		define(factory)
	} else {
		/**
		 * 插件对象直接扩展到 window 对象上
		 * 这个对象的名字，需要自己填写一下。例如：plugintest
		 */
		var moduleName = 'plugintest';
		root[moduleName] = factory()
	}
}(this, function() {
	var _BARCODE = 'plugintest';
	var plugintest = {
		PluginTestFunction: function(Argus1, Argus2, Argus3, Argus4, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = plus.bridge.callbackId(success, fail);

			return plus.bridge.exec(_BARCODE, "PluginTestFunction", [callbackID, Argus1, Argus2, Argus3, Argus4]);
		},
		PluginTestFunctionArrayArgu: function(Argus, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = plus.bridge.callbackId(success, fail);
			return plus.bridge.exec(_BARCODE, "PluginTestFunctionArrayArgu", [callbackID, Argus]);
		},
		PluginTestFunctionSync: function(Argus1, Argus2, Argus3, Argus4) {
			return plus.bridge.execSync(_BARCODE, "PluginTestFunctionSync", [Argus1, Argus2, Argus3, Argus4]);
		},
		PluginTestFunctionSyncArrayArgu: function(Argus) {
			return plus.bridge.execSync(_BARCODE, "PluginTestFunctionSyncArrayArgu", [Argus]);
		}
	};
	return plugintest;
});
```

#### Html使用示例
#### Html usage example

```
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
		<meta name="HandheldFriendly" content="true"/>
		<meta name="MobileOptimized" content="320"/>
		<title>H5Plugin</title>
		<script type="text/javascript" src="./js/common.js"></script>
		<script type="text/javascript" src="./js/test.js"></script>
		<script type="text/javascript">

  		function pluginShow() {
            plus.plugintest.PluginTestFunction("Html5","Plus","AsyncFunction","MultiArgument!", function( result ) {alert( result[0]  + "_" + result[1]  + "_" + result[2]  + "_" + result[3] );},function(result){alert(result)});
        }
        
        function pluginShowArrayArgu() {
            plus.plugintest.PluginTestFunctionArrayArgu( ["Html5","Plus","AsyncFunction","ArrayArgument!"], function( result ) {alert( result );},function(result){alert(result)});
        }
        
        function pluginGetString()
        {
            alert(plus.plugintest.PluginTestFunctionSync("Html5","Plus","SyncFunction","MultiArgument!"));
        }
        
        function pluginGetStringArrayArgu()
        {
            var Argus = plus.plugintest.PluginTestFunctionSyncArrayArgu(["Html5","Plus","SyncFunction","ArrayArgument!"]);
            alert( Argus.RetArgu1 + "_" +  Argus.RetArgu2 + "_" + Argus.RetArgu3  + "_" + Argus.RetArgu4 );
        }
    
		</script>
		<link rel="stylesheet" href="./css/common.css" type="text/css" charset="utf-8"/>
	</head>
	<body>
		<header>
			<div class="nvbt" onclick="back();"><div class="iback"></div></div>
			<div class="nvtt">PluginTest</div>
		</header>
		<div id="dcontent" class="dcontent">
			<br/>
			 <div class="button" onclick="pluginShow()">PluginTestFunction()</div>
            <div class="button" onclick="pluginShowArrayArgu()">PluginTestFunctionArrayArgu()</div>
            <div class="button" onclick="pluginGetString()">PluginTestFunctionSync()</div>
            <div class="button" onclick="pluginGetStringArrayArgu()">PluginTestFunctionSyncArrayArgu()</div>	
			<br/>
		</div>
	</body>
</html>
```

uni-app 使用示例
uni-app usage example

uni-app 中无需主动监听 plusready，可以直接调用 plus 相关的 API。
There is no need to actively monitor plusready in uni-app, and you can directly call plus-related APIs.

```
<template>
	<view>
		<button @click="pluginShow">pluginShow</button>
	</view>
</template>
<script>
// 扩展的 js 文件的位置：common/plugins.js
// The location of the extended js file: common/plugins.js
	var plugins = require('../../common/plugins.js')
	export default {
		data() {
			return {
				plugins: plugins
			};
		},
		methods: {
			pluginShow() {
				this.plugins.PluginTestFunction("Html5", "Plus", "AsyncFunction", "MultiArgument!", function(result) {
					console.log(result[0] + "_" + result[1] + "_" + result[2] + "_" + result[3]);
				}, function(result) {
					console.log(result)
				});
			}
		}
	}
</script>
<style>

</style>
```

## Android第三方插件开发指导
## Android third-party plug-in development guide

### 准备
### Prepare

首先要下载HTML5+基座的Android版SDK[点击下载](/AppDocs/download/android.md)解压后将HBuilder-Integrate工程导入到ADT中。
First, download the Android version SDK of the HTML5+ base [click to download](/AppDocs/download/android.md), decompress it, and then import the HBuilder-Integrate project into ADT.

### uni-app插件开发
### uni-app plugin development

[android平台：uni-app插件开发](http://ask.dcloud.net.cn/article/35379)
[android platform: uni-app plug-in development](http://ask.dcloud.net.cn/article/35379)

<!--
### 老接口实现方式
### Old interface implementation

#### 开发步骤 
#### Development Steps

**创建插件类**
**Create plugin class**

开发者创建的扩展插件类应当继承自“IFeature”类实现第三方插件扩展。 
The extension plug-in classes created by developers should inherit from the "IFeature" class to implement third-party plug-in extensions.

创建插件类需要引入的包 
Packages that need to be imported to create a plug-in class

``` 
import io.dcloud.common.DHInterface.AbsMgr;
import io.dcloud.common.DHInterface.IFeature;
import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.util.JSUtil;
```

**实现接口类的“excute”方法**
**Implement the "excute" method of the interface class**

excute方法负责接收由html页面发起的扩展插件调用请求，并负责根据传入参数运行执行对应的业务。
The execute method is responsible for receiving the extension call request initiated by the html page, and is responsible for running and executing the corresponding business according to the incoming parameters.

“execute”方法的“action”参数传入的是JS类的方法名，类型为String。开发者需要在方法中通过字符串匹配来处理请求的逻辑。“pArgs”参数为字符串列表对象，如JS层调用的方法有传入参数，会通过该参数传递到Native的方法中，方法的传入顺序和JS层传入顺序一致。
The "action" parameter of the "execute" method is passed in the method name of the JS class, and the type is String. Developers need to process the logic of the request through string matching in the method. The "pArgs" parameter is a string list object. If the method called by the JS layer has an incoming parameter, it will be passed to the Native method through this parameter. The incoming order of the method is consistent with the incoming order of the JS layer.
开发者在实现同步和异步接口运行结果返回时调用的API是不同的
The APIs that developers call when implementing synchronous and asynchronous interfaces to return running results are different
**同步执行方法：**
**Synchronous execution method:**

同步执行方法在返回结果时可以直接将结果以return的形式返回给js层，返回的结果需要调用
When the synchronous execution method returns the result, it can directly return the result to the js layer in the form of return, and the returned result needs to be called

```
JSUtil.wrapJsVar("Html5 Plus Plugin Hello1!",true);
```

处理要返回的字符串，也可调用其他方法处理其他返回值类型（参考io.dclod.util.JSUtil的返回方法）。
Process the string to be returned, and call other methods to process other return value types (refer to the return method of io.dclod.util.JSUtil).

**异步执行方法：**
**Asynchronous execution method:**

 异步方法开发者需要调用 
 Asynchronous method developers need to call
 
``` 
JSUtil.execCallback(pWebview, cbId, (which==AlertDialog.BUTTON_POSITIVE)?"ok":"cancel", JSUtil.OK, false, false); 
```

#### 代码实例
#### Code Examples

```
package com.example.H5PlusPlugin;

import io.dcloud.common.DHInterface.AbsMgr;
import io.dcloud.common.DHInterface.IFeature;
import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.util.JSUtil;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.os.Build;


public class PGPlugintest implements IFeature
{
	@Override
	public void init(AbsMgr arg0, String arg1) {
		// TODO Auto-generated method stub

	}


	@SuppressWarnings("deprecation")
	@TargetApi(Build.VERSION_CODES.CUPCAKE)
	@SuppressLint("NewApi")
	@Override
	public String execute(final IWebview pWebview, final String action, final String[] pArgs) {
		// TODO Auto-generated method stub
		//Context context = pWebview.getContext();

		if ("PluginTestFunction".equals(action))
		{
			String CallBackID = pArgs[0];
			JSONArray newArray = new JSONArray();
			newArray.put(pArgs[1]);
			newArray.put(pArgs[2]);
			newArray.put(pArgs[3]);
			newArray.put(pArgs[4]);

			JSUtil.execCallback(pWebview, CallBackID, newArray, JSUtil.OK, false);
		}
		else if("PluginTestFunctionArrayArgu".equals(action))
		{
			String ReturnString = null;
			String CallBackID =  pArgs[0];
			JSONArray newArray = null;
			try {
				
				newArray = new JSONArray(pArgs[1]);			
				String inValue1 = newArray.getString(0);
				String inValue2 = newArray.getString(1);
				String inValue3 = newArray.getString(2);
				String inValue4 = newArray.getString(3);
				ReturnString = inValue1 + "-" + inValue2 + "-" + inValue3 + "-" + inValue4;
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
						
			JSUtil.execCallback(pWebview, CallBackID, ReturnString, JSUtil.OK, false);
			
		}else if("PluginTestFunctionSync".equals(action))
		{
			String inValue1 = pArgs[0];
			String inValue2 = pArgs[1];
			String inValue3 = pArgs[2];
			String inValue4 = pArgs[3];
			
			String ReturnValue = inValue1 + "-" + inValue2 + "-" + inValue3 + "-" + inValue4;
			return JSUtil.wrapJsVar(ReturnValue,true);
			
		}else if("PluginTestFunctionSyncArrayArgu".equals(action))
		{
			JSONArray newArray = null;
			JSONObject retJSONObj = null;
			try {
				newArray = new JSONArray(pArgs[0]);
				String inValue1 = newArray.getString(0);
				String inValue2 = newArray.getString(1);
				String inValue3 = newArray.getString(2);
				String inValue4 = newArray.getString(3);
				
				retJSONObj = new JSONObject();
				retJSONObj.putOpt("RetArgu1", inValue1);
				retJSONObj.putOpt("RetArgu2", inValue2);
				retJSONObj.putOpt("RetArgu3", inValue3);
				retJSONObj.putOpt("RetArgu4", inValue4);
				
			} catch (JSONException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}		
			
			return JSUtil.wrapJsVar(retJSONObj);

		}
		return null;
	}

	@Override
	public void dispose(String arg0) {
		// TODO Auto-generated method stub

	}
}
```

-->
### <!--新-->接口实现方式
### <!--New-->Interface implementation

**创建插件类**
**Create plugin class**

创建一个继承自StandardFeature的类，实现第三方插件扩展。
Create a class that inherits from StandardFeature to implement third-party plug-in extensions.

创建插件类需要引入的包 
Packages that need to be imported to create a plug-in class

import io.dcloud.DHInterface.IWebview;

import io.dcloud.DHInterface.StandardFeature;

import io.dcloud.util.JSUtil;

**实现扩展方法**
**Implement the extension method**

Native层扩展插件的方法名需要和JS Plugin Bridge里windows.plus.bridge.exec()或windows.plus.bridge.execSync()方法的第二个传入参数相同，否则无法调用到指定的方法。
The method name of the Native layer extension plug-in needs to be the same as the second input parameter of the windows.plus.bridge.exec() or windows.plus.bridge.execSync() method in the JS Plugin Bridge, otherwise the specified method cannot be called.

```	
public void PluginTestFunction(IWebview pWebview, JSONArray array)
```

扩展方法有两个传入参数
The extension method has two incoming parameters

IWebview pWebview 发起请求的webview，
IWebview pWebview The webview that initiates the request,

JSONArray array JS请求传入的参数
JSONArray array JS request incoming parameters

开发者在实现同步和异步接口运行结果返回时调用的API是不同的
The APIs that developers call when implementing synchronous and asynchronous interfaces to return running results are different

**同步执行方法：**
**Synchronous execution method:**

同步执行方法在返回结果时可以直接将结果以return的形式返回给js层，返回的结果需要调用
When the synchronous execution method returns the result, it can directly return the result to the js layer in the form of return, and the returned result needs to be called

```
JSUtil.wrapJsVar("Html5 Plus Plugin Hello1!",true);
```

处理要返回的字符串，也可调用其他方法处理其他返回值类型（参考io.dclod.util.JSUtil的返回方法）。
Process the string to be returned, and call other methods to process other return value types (refer to the return method of io.dclod.util.JSUtil).

**异步执行方法：**
**Asynchronous execution method:**

 异步方法开发者需要调用 
 Asynchronous method developers need to call
 
``` 
JSUtil.execCallback(pWebview, cbId, (which==AlertDialog.BUTTON_POSITIVE)?"ok":"cancel", JSUtil.OK, false, false); 
```

#### 代码示例
#### Code Example

```

package com.example.H5PlusPlugin;
import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.StandardFeature;
import io.dcloud.common.util.JSUtil;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class PGPlugintest extends StandardFeature
{   
    public void PluginTestFunction(IWebview pWebview, JSONArray array)
    {
        String CallBackID = array.optString(0);
        JSONArray newArray = new JSONArray();
        newArray.put(array.optString(1));
        newArray.put(array.optString(2));
        newArray.put(array.optString(3));
        newArray.put(array.optString(4));
        JSUtil.execCallback(pWebview, CallBackID, newArray, JSUtil.OK, false);

    }

    public void PluginTestFunctionArrayArgu(IWebview pWebview, JSONArray array)
    {
        String ReturnString = null;
        String CallBackID =  array.optString(0);
        JSONArray newArray = null;
        try {

            newArray = new JSONArray( array.optString(1));          
            String inValue1 = newArray.getString(0);
            String inValue2 = newArray.getString(1);
            String inValue3 = newArray.getString(2);
            String inValue4 = newArray.getString(3);
            ReturnString = inValue1 + "-" + inValue2 + "-" + inValue3 + "-" + inValue4;
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        JSUtil.execCallback(pWebview, CallBackID, ReturnString, JSUtil.OK, false);
    }

    public String PluginTestFunctionSyncArrayArgu(IWebview pWebview, JSONArray array)
    {
        JSONArray newArray = null;
        JSONObject retJSONObj = null;
        try {

            newArray = array.optJSONArray(0);
            String inValue1 = newArray.getString(0);
            String inValue2 = newArray.getString(1);
            String inValue3 = newArray.getString(2);
            String inValue4 = newArray.getString(3);

            retJSONObj = new JSONObject();
            retJSONObj.putOpt("RetArgu1", inValue1);
            retJSONObj.putOpt("RetArgu2", inValue2);
            retJSONObj.putOpt("RetArgu3", inValue3);
            retJSONObj.putOpt("RetArgu4", inValue4);

        } catch (JSONException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }       

        return JSUtil.wrapJsVar(retJSONObj);
    }

    public String PluginTestFunctionSync(IWebview pWebview, JSONArray array)
    {
        String inValue1 = array.optString(0);
        String inValue2 = array.optString(1);
        String inValue3 = array.optString(2);
        String inValue4 = array.optString(3);

        String ReturnValue = inValue1 + "-" + inValue2 + "-" + inValue3 + "-" + inValue4;
        return JSUtil.wrapJsVar(ReturnValue,true);
    }

}

```

## 三 关联JS插件名和原生类
## Three associate JS plug-in name and native class

在编写扩展插件时需要修改“/assets/data”中properties.xml文件，在其中添加JS对象名称和Android包的类名对应关系，SDK会根据对应的类名查找并生成相应的对象并执行对应的逻辑。
When writing an extension plug-in, you need to modify the properties.xml file in "/assets/data", add the corresponding relationship between the JS object name and the class name of the Android package, and the SDK will search and generate the corresponding object according to the corresponding class name and execute the corresponding logic.

![](https://ask.dcloud.net.cn/uploads/article/20141017/5489a76e7be78c295b8c786c77835162.png)

在应用的manifest.json文件中还需要添加扩展插件的应用使用权限
In the manifest.json file of the application, you also need to add the application permission of the extension plug-in

![](https://ask.dcloud.net.cn/uploads/article/20141017/5aa58c39dd81aba2838bdb60b2509ddb.png)

## Android平台插件开发API
## Android platform plug-in development API

<!--
### io.dcloud.DHInterface.IFeature

扩展插件接口类，Android平台的扩展插件应当继承自此接口类并实现接口方法。
The extension plug-in interface class, the extension plug-in of the Android platform should inherit from this interface class and implement the interface method.

#### 常用方法说明:
#### Description of common methods:

```
String execute(IWebview pWebView, String action, String[] pArgs);
```

执行扩展插件的方法，调用native代码实现具体的操作。
Execute the method of extending the plug-in, and call the native code to realize the specific operation.

**pWebView：**	扩展插件方法运行的窗口
**pWebView:** The window where the extension plug-in method runs

**action：**	调用插件方法的名称
**action:** The name of the calling plugin method

**args：**		调用插件方法使用的参数列表
**args:** The parameter list used to call the plug-in method
-->

* io.dcloud.util.JSUtil

	常用方法说明：
	Description of common methods:

	```
	String wrapJsVar(String value, boolean isString);
	```

	转换JS层的返回值，也用于异步接口中回调函数的参数。
	Converts the return value of the JS layer, and is also used as the parameter of the callback function in the asynchronous interface.

	**参数说明：**
	**Parameter Description:**
		
	**value：**	要返回到JS层的值
	**value:** The value to be returned to the JS layer
		
	**isString：**返回值类型是否为原始字符串
	**isString:** Whether the return value type is a raw string

	**返回方法：**
	** Return method: **

	**boolea类型：**  	wrapJSVar( "true", false );
	**boolea type:** wrapJSVar( "true", false );

	**Number类型：**	wrapJsVar( "99", false );
	**Number type:** wrapJsVar( "99", false );

	**String类型：**    	wrapJsVar( "hello", true );
	**String type:** wrapJsVar( "hello", true );

	**数组类型：**      wrapJsVar( "[1,2,3,4,5]", false );
	**Array type:** wrapJsVar( "[1,2,3,4,5]", false );

	**JSON类型：**    	wrapJsVar( "{'name':'value'}", false );
	**JSON type:** wrapJsVar( "{'name':'value'}", false );

	```
	String execCallback(IWebview pWebView, String pCallbackId, String pMessage, int pStatus, boolean isJson, boolean pKeepCallback);
	```

	触发扩展插件中的回调方法。
	Trigger the callback method in the extension.

	**参数说明：**
	**Parameter Description:**

	**pWebView：**扩展插件方法运行的窗口
	**pWebView:** The window where the extension plug-in method runs

	**pCallbackId：**回调函数的唯一标识
	**pCallbackId: **The unique identifier of the callback function

	**pMessage：**回调函数的参数
	**pMessage: **The parameters of the callback function

	**pStatus：**操作是否成功，成功则使用JSUtil.OK，否则使用错误代码
	**pStatus: **Whether the operation is successful, use JSUtil.OK if successful, otherwise use error code

	**isJson：**回调函数参数是否为JSON数据
	**isJson:** Whether the callback function parameter is JSON data

	**pKeepCallback：**是否可多次触发回调函数
	**pKeepCallback:**Whether the callback function can be triggered multiple times

## 术语字典
## Dictionary of terms

**JS Plugin Bridge：** H5+ Plugin Bridge层JS部分API，用户通过调用相应的API触发Native层扩展插件相应方法的调用。
**JS Plugin Bridge:** H5+ Plugin Bridge layer JS partial API, the user triggers the call of the corresponding method of the Native layer extension plug-in by calling the corresponding API.

**Native Plugin Bridge:** H5+ Plugin Bridge层Native部分API，开发者通过实现接口类方法，实现由JS层触发Native层扩展插件逻辑。开发者调用API实现Native扩展方法运行结果得返回。
**Native Plugin Bridge:** H5+ Plugin Bridge layer Native part of the API, the developer realizes the Native layer extension plug-in logic triggered by the JS layer by implementing the interface class method. The developer calls the API to implement the operation result of the Native extension method to be returned.

**Native层插件：**开发者使用原生语言实现的5+扩展插件，可被JS层通知调用。
**Native layer plug-ins: **5+ extension plug-ins implemented by developers using native languages, which can be called by JS layer notifications.

**插件类别名：**JS层字符串，用来声明JS方法和Native层插件的对应关系
**Plug-in category name: **JS layer string, used to declare the corresponding relationship between JS methods and Native layer plug-ins
