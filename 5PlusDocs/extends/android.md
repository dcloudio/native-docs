## 技术架构 
HTML5+ 基座扩展采用三层结构，JS层、PluginBridge层和Native层。 三层功能分别是： 

**JS层**： 在Webview页面调用，触发Native层代码，获取执行结果。 

**PluginBridge层**： 将JS层请求进行处理，触发Native层扩展插件代码。 

**Native层**： 插件扩展的平台原生代码，负责执行业务逻辑并执行结果返回到请求页面。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20141017/6e2bd27ff777bed57750a5b3b6143a0f.png)

开发者在开发扩展插件时需要为扩展插件编写对应的JS API，JS API将在HTML页面中触发调用对应Native扩展方法的请求，并负责接收运行结果。 

开发者在编写扩展插件的JS时需要调用Javascript Plugin Bridge的API用来完成对Native层代码的调用和运行结果的返回。在实际应用中，开发者可以根据扩展方法的实际需求不同，将插件的扩展方法设置为同步执行或异步执行。
 
同步执行的扩展方法会阻塞当前JS代码的执行，直到Native层插件扩展方法执行完毕。异步扩展方法不会阻塞当前JS代码的执行，使用者需要设置回调方法接收Native层返回的执行结果，开发者需要在插件中调用 Native plugin brigde的方法将执行结果返回到请求页面。

工程示例请参考SDK内包含的HBuilder-Integrate工程，工程里已经整合了插件开发和集成方式的示例。

## 扩展插件工作流程

异步方法的执行不会阻塞当前JS的运行，方法的执行结果会通过回调的方式返回。

**插件异步扩展方法：**

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20141017/e7b481bc1dc1caf69cda678f92587cd9.png)

同步方法的执行会阻塞当前JS的运行，方法执行完成后可直接获取执行的结果。

**插件同步扩展方法：**

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20141017/095b9c2bdb95d1d9ef68ddeeb610b883.png)

## 扩展插件JS API 编写

开发者在实现JS层API时首先要定义一个插件类的别名，并需要在Android工程的assets\data\properties.xml文件中声明插件类别名和Native层扩展插件类的对应关系

```
<properties>
	<features>
		<feature name="plugintest" value="com.example.H5PlusPlugin.PGPlugintest"></feature>
</properties>
```

示例中为方便查看删除了其他插件的代码，开发者在可根据5+应用使用插件的情况进行增删修改。

Feature节点下声明的插件将会在调用时创建相应的对象。

**JS扩展方法的实现**

**同步返回JS扩展方法实现**

在实现同步扩展方法时，开发者需要调用JS Plugin Bridge的window.plus.bridge.execSync()
方法，该方法可同步获取Native插件返回的运行结果。

```
void plus.bridge.execSync( String service, String action, Array<String> args );
```

**service:**  插件类别名

**action:**  调用Native层插件方法名称。

**args：**  参数列表。

**异步返回JS扩展方法实现**

在实现异步扩展方法时，开发者需要调用JS Plugin Bridge的plus.bridge.exec()方法，该方法会通知Native层插件执行指定方法，运行结果会通过回调的方式通知JS层

```
void plus.bridge.exec( String service, String action, Array<String> args );
```
**service:**  插件类别名

**action:**  调用Native层插件方法名称。

**args：**  参数列表。

**扩展插件JS API代码示例：**

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

uni-app 中无需主动监听 plusready，可以直接调用 plus 相关的 API。

```
<template>
	<view>
		<button @click="pluginShow">pluginShow</button>
	</view>
</template>
<script>
// 扩展的 js 文件的位置：common/plugins.js
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

### 准备

首先要下载HTML5+基座的Android版SDK[点击下载](/5PlusDocs/download/android.md)解压后将HBuilder-Integrate工程导入到ADT中。

### uni-app插件开发

[android平台：uni-app插件开发](http://ask.dcloud.net.cn/article/35379)

<!--
### 老接口实现方式

#### 开发步骤 

**创建插件类**

开发者创建的扩展插件类应当继承自“IFeature”类实现第三方插件扩展。 

创建插件类需要引入的包 

``` 
import io.dcloud.common.DHInterface.AbsMgr;
import io.dcloud.common.DHInterface.IFeature;
import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.util.JSUtil;
```

**实现接口类的“excute”方法**

excute方法负责接收由html页面发起的扩展插件调用请求，并负责根据传入参数运行执行对应的业务。

“execute”方法的“action”参数传入的是JS类的方法名，类型为String。开发者需要在方法中通过字符串匹配来处理请求的逻辑。“pArgs”参数为字符串列表对象，如JS层调用的方法有传入参数，会通过该参数传递到Native的方法中，方法的传入顺序和JS层传入顺序一致。
开发者在实现同步和异步接口运行结果返回时调用的API是不同的
**同步执行方法：**

同步执行方法在返回结果时可以直接将结果以return的形式返回给js层，返回的结果需要调用

```
JSUtil.wrapJsVar("Html5 Plus Plugin Hello1!",true);
```

处理要返回的字符串，也可调用其他方法处理其他返回值类型（参考io.dclod.util.JSUtil的返回方法）。

**异步执行方法：**

 异步方法开发者需要调用 
 
``` 
JSUtil.execCallback(pWebview, cbId, (which==AlertDialog.BUTTON_POSITIVE)?"ok":"cancel", JSUtil.OK, false, false); 
```

#### 代码实例

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

**创建插件类**

创建一个继承自StandardFeature的类，实现第三方插件扩展。

创建插件类需要引入的包 

import io.dcloud.DHInterface.IWebview;

import io.dcloud.DHInterface.StandardFeature;

import io.dcloud.util.JSUtil;

**实现扩展方法**

Native层扩展插件的方法名需要和JS Plugin Bridge里windows.plus.bridge.exec()或windows.plus.bridge.execSync()方法的第二个传入参数相同，否则无法调用到指定的方法。

```	
public void PluginTestFunction(IWebview pWebview, JSONArray array)
```

扩展方法有两个传入参数

IWebview pWebview 发起请求的webview，

JSONArray array JS请求传入的参数

开发者在实现同步和异步接口运行结果返回时调用的API是不同的

**同步执行方法：**

同步执行方法在返回结果时可以直接将结果以return的形式返回给js层，返回的结果需要调用

```
JSUtil.wrapJsVar("Html5 Plus Plugin Hello1!",true);
```

处理要返回的字符串，也可调用其他方法处理其他返回值类型（参考io.dclod.util.JSUtil的返回方法）。

**异步执行方法：**

 异步方法开发者需要调用 
 
``` 
JSUtil.execCallback(pWebview, cbId, (which==AlertDialog.BUTTON_POSITIVE)?"ok":"cancel", JSUtil.OK, false, false); 
```

#### 代码示例

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

在编写扩展插件时需要修改“/assets/data”中properties.xml文件，在其中添加JS对象名称和Android包的类名对应关系，SDK会根据对应的类名查找并生成相应的对象并执行对应的逻辑。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20141017/5489a76e7be78c295b8c786c77835162.png)

在应用的manifest.json文件中还需要添加扩展插件的应用使用权限

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20141017/5aa58c39dd81aba2838bdb60b2509ddb.png)

## Android平台插件开发API

<!--
### io.dcloud.DHInterface.IFeature

扩展插件接口类，Android平台的扩展插件应当继承自此接口类并实现接口方法。

#### 常用方法说明:

```
String execute(IWebview pWebView, String action, String[] pArgs);
```

执行扩展插件的方法，调用native代码实现具体的操作。

**pWebView：**	扩展插件方法运行的窗口

**action：**	调用插件方法的名称

**args：**		调用插件方法使用的参数列表
-->

* io.dcloud.util.JSUtil

	常用方法说明：

	```
	String wrapJsVar(String value, boolean isString);
	```

	转换JS层的返回值，也用于异步接口中回调函数的参数。

	**参数说明：**
		
	**value：**	要返回到JS层的值
		
	**isString：**返回值类型是否为原始字符串

	**返回方法：**

	**boolea类型：**  	wrapJSVar( "true", false );

	**Number类型：**	wrapJsVar( "99", false );

	**String类型：**    	wrapJsVar( "hello", true );

	**数组类型：**      wrapJsVar( "[1,2,3,4,5]", false );

	**JSON类型：**    	wrapJsVar( "{'name':'value'}", false );

	```
	String execCallback(IWebview pWebView, String pCallbackId, String pMessage, int pStatus, boolean isJson, boolean pKeepCallback);
	```

	触发扩展插件中的回调方法。

	**参数说明：**

	**pWebView：**扩展插件方法运行的窗口

	**pCallbackId：**回调函数的唯一标识

	**pMessage：**回调函数的参数

	**pStatus：**操作是否成功，成功则使用JSUtil.OK，否则使用错误代码

	**isJson：**回调函数参数是否为JSON数据

	**pKeepCallback：**是否可多次触发回调函数

## 术语字典

**JS Plugin Bridge：** H5+ Plugin Bridge层JS部分API，用户通过调用相应的API触发Native层扩展插件相应方法的调用。

**Native Plugin Bridge:** H5+ Plugin Bridge层Native部分API，开发者通过实现接口类方法，实现由JS层触发Native层扩展插件逻辑。开发者调用API实现Native扩展方法运行结果得返回。

**Native层插件：**开发者使用原生语言实现的5+扩展插件，可被JS层通知调用。

**插件类别名：**JS层字符串，用来声明JS方法和Native层插件的对应关系
