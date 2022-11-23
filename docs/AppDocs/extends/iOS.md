> 本文为5+app插件开发指南。uni-app请另外参考文档：[https://ask.dcloud.net.cn/article/35428](https://ask.dcloud.net.cn/article/35428)
> This article is a 5+app plug-in development guide. Please refer to the documentation for uni-app: [https://ask.dcloud.net.cn/article/35428](https://ask.dcloud.net.cn/article/35428)

欢迎有原生开发能力的朋友入群一起交流学习（入群请提供注册邮箱）：
Friends with native development capabilities are welcome to join the group to communicate and learn together (please provide your registered email address to join the group):
DCloud原生开发者群：
DCloud native developer group:

1群：256775471（已满）
Group 1: 256775471 (full)
2群：814228233  (已满)
Group 2: 814228233 (full)
3群：455763866
Group 3: 455763866

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

![](https://ask.dcloud.net.cn/uploads/article/20141031/916e01c36b1d1c06fc3e806e3389bb60.png)

开发者在开发扩展插件时需要为扩展插件编写对应的JS API，JS API将在HTML页面中触发调用对应Native扩展方法的请求，并负责接收运行结果。 
Developers need to write the corresponding JS API for the extension plug-in when developing the extension plug-in. The JS API will trigger a request to call the corresponding Native extension method in the HTML page, and is responsible for receiving the running result.

开发者在编写扩展插件的JS时需要调用Javascript Plugin Bridge的API用来完成对Native层代码的调用和运行结果的返回。在实际应用中，开发者可以根据扩展方法的实际需求不同，将插件的扩展方法设置为同步执行或异步执行。
When writing the JS of the extension plug-in, the developer needs to call the API of the Javascript Plugin Bridge to complete the call to the Native layer code and return the operation result. In practical applications, developers can set the extension method of the plug-in to execute synchronously or asynchronously according to the actual needs of the extension method.
 
同步执行的扩展方法会阻塞当前JS代码的执行，直到Native层插件扩展方法执行完毕。异步扩展方法不会阻塞当前JS代码的执行，使用者需要设置回调方法接收Native层返回的执行结果，开发者需要在插件中调用 Native plugin brigde的方法将执行结果返回到请求页面。
The synchronously executed extension method will block the execution of the current JS code until the Native layer plug-in extension method is executed. The asynchronous extension method will not block the execution of the current JS code. The user needs to set a callback method to receive the execution result returned by the Native layer. The developer needs to call the Native plugin brigde method in the plug-in to return the execution result to the request page.

## 扩展插件工作流程：
## Extension plugin workflow:
### 插件异步扩展方法：
### Plugin asynchronous extension method:
异步方法的执行不会阻塞当前JS的运行，方法的执行结果会通过回调的方式返回给调用者。
The execution of the asynchronous method will not block the running of the current JS, and the execution result of the method will be returned to the caller through a callback.

![](https://ask.dcloud.net.cn/uploads/article/20141031/e1022c696351dd8fe520c2a3c997aab3.png)


### 插件同步扩展方法：
### Plugin synchronization extension method:

同步方法的执行会阻塞当前JS的运行，方法执行完成后可直接获取执行的结果。
The execution of the synchronous method will block the running of the current JS, and the execution result can be obtained directly after the execution of the method is completed.

![](https://ask.dcloud.net.cn/uploads/article/20141031/4e73a29376448744e58b0129cc1b76bc.png)

## 扩展插件JS API 编写
## Write the extension plug-in JS API
开发者在实现JS层API时首先要定义一个插件类别名，并需要在IOS工程的PandoraApi.bundle\feature.plist文件中声明插件类别名和Native层扩展插件类的对应关系
When implementing the JS layer API, the developer must first define a plugin category name, and declare the corresponding relationship between the plugin category name and the Native layer extension plugin class in the PandoraApi.bundle\feature.plist file of the IOS project

![](https://ask.dcloud.net.cn/uploads/article/20150909/0550b4b7f8d19038b04026627b8441ad.png)

#### JS扩展方法的实现
#### Implementation of JS extension method

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

#### 扩展插件JS API代码示例：
#### Extension plug-in JS API code example:
```
document.addEventListener( "plusready",  function()
{
// 声明的JS“扩展插件别名”
// Declared JS "extension alias"
    var _BARCODE = 'plugintest',
		B = window.plus.bridge;
    var plugintest = 
{
// 声明异步返回方法
// Declare an asynchronous return method
    	PluginTestFunction : function (Argus1, Argus2, Argus3, Argus4, successCallback, errorCallback ) 
		{
			var success = typeof successCallback !== 'function' ? null : function(args) 
			{
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null : function(code) 
			{
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);
// 通知Native层plugintest扩展插件运行”PluginTestFunction”方法
// Notify the Native layer plugintest extension to run the "PluginTestFunction" method
			return B.exec(_BARCODE, "PluginTestFunction", [callbackID, Argus1, Argus2, Argus3, Argus4]);
		},
		PluginTestFunctionArrayArgu : function (Argus, successCallback, errorCallback ) 
		{
			var success = typeof successCallback !== 'function' ? null : function(args) 
			{
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null : function(code) 
			{
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "PluginTestFunctionArrayArgu", [callbackID, Argus]);
		},		
		// 声明同步返回方法
		// Declare a synchronous return method
        PluginTestFunctionSync : function (Argus1, Argus2, Argus3, Argus4) 
        {            
	        // 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果                    	
	        // Notify the Native layer plugintest extension to run the "PluginTestFunctionSync" method and return the result synchronously
            return B.execSync(_BARCODE, "PluginTestFunctionSync", [Argus1, Argus2, Argus3, Argus4]);
        },
        PluginTestFunctionSyncArrayArgu : function (Argus) 
        {                                	
            return B.execSync(_BARCODE, "PluginTestFunctionSyncArrayArgu", [Argus]);
        }
    };
    window.plus.plugintest = plugintest;
}, true );
```

#### HTML使用示例
#### HTML usage example
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

## IOS平台第三方插件开发指导
## IOS platform third-party plug-in development guide
### 准备：
### Prepare:

首先需要下载H5+ 的IOS平台离线打包SDK（[下载地址](/AppDocs/download/ios.md)）
First, you need to download the H5+ IOS platform offline packaging SDK ([download address](/AppDocs/download/ios.md))
在MAC平台解压后打开HBuilder-plugin工程。
Open the HBuilder-plugin project after decompressing on the MAC platform.

 开发步骤
 development steps
### 一 创建插件类
### 1 Create a plugin class
        
开发者新创建的类需要继承“PGPlugin”类实现第三方插件扩展。
The class newly created by the developer needs to inherit the "PGPlugin" class to implement third-party plug-in extensions.

   1. 创建一个继承自“PGPlugin”类的Objective-c类
   1. Create an Objective-c class that inherits from the "PGPlugin" class
   2. 在源文件中引入头文件“PGPlugin.h”和“PGMethod.h” 
   2. Introduce the header files "PGPlugin.h" and "PGMethod.h" in the source file

### 二  编写插件的方法
### Two ways to write plugins

开发者可根据需求，在JS层通过调用不同的JS Plugin Bridge方法，将扩展方法定义为同步执行或异步执行。
Developers can define extension methods as synchronous or asynchronous by calling different JS Plugin Bridge methods at the JS layer according to requirements.

同步执行的方法会阻塞当前JS代码的执行，并同步获取Native层扩展方法返回的运行结果。
The method of synchronous execution will block the execution of the current JS code, and synchronously obtain the running result returned by the Native layer extension method.

异步执行方法不会阻塞当前JS代码的执行，需要开发者用回调的方式接收Native层的执行结果。
The asynchronous execution method will not block the execution of the current JS code, and requires the developer to receive the execution result of the Native layer in the form of a callback.

但需要注意，在调用plus.bridge.exec或plus.bridge.execSync方法时，传入的第一个参数是插件的别名，开发者需要声明别名和Native代码类名的对应关系。传入的第二个参数(调用插件的方法名)，需要和要调用的扩展插件的方法名一致，否则无法通过JS调用到Native层扩展类方法。
However, it should be noted that when calling the plus.bridge.exec or plus.bridge.execSync method, the first parameter passed in is the alias of the plug-in, and the developer needs to declare the corresponding relationship between the alias and the class name of the Native code. The second parameter passed in (the method name of calling the plug-in) needs to be consistent with the method name of the extension plug-in to be called, otherwise it cannot be called to the Native layer extension class method through JS.

##### 异步方法：
##### Asynchronous methods:
开发者在编写异步方法时可通过PGPlugin类的回调方法将Native扩展方法运行结果返回到调用页面。使用方法如下
When writing an asynchronous method, the developer can return the running result of the Native extension method to the calling page through the callback method of the PGPlugin class. The method of use is as follows
**Native层代码实现**
**Native layer code implementation**
```
- (void)PluginTestFunctionArrayArgu:(PGMethod*)commands
{
    if ( commands ) {
        
        // CallBackid 异步方法的回调id，H5+ 会根据回调ID通知JS层运行结果成功或者失败
        // CallBackid is the callback id of the asynchronous method, H5+ will notify the JS layer of the success or failure of the operation result according to the callback ID
        NSString* cbId = [commands.arguments objectAtIndex:0];
        
        // 用户的参数会在第二个参数传回，可以按照Array方式传入，
        // The user's parameters will be returned in the second parameter, which can be passed in as an Array.
        NSArray* pArray = [commands.arguments objectAtIndex:1];
        
        // 如果使用Array方式传递参数
        // If you use Array to pass parameters
        NSString* pResultString = [NSString stringWithFormat:@"%@ %@ %@ %@",[pArray objectAtIndex:0], [pArray objectAtIndex:1], [pArray objectAtIndex:2], [pArray objectAtIndex:3]];
        
        // 运行Native代码结果和预期相同，调用回调通知JS层运行成功并返回结果
        // The result of running the Native code is the same as expected, call the callback to notify the JS layer that the operation is successful and return the result
        PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusOK messageAsString:pResultString];
        
        // 如果Native代码运行结果和预期不同，需要通过回调通知JS层出现错误，并返回错误提示
        // If the running result of the Native code is different from the expected one, you need to notify the JS layer of an error through a callback and return an error message
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"惨了! 出错了！ 咋(wu)整(liao)"];
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"Too bad! Something went wrong!];
        
        // 通知JS层Native层运行结果，JS Pluginbridge会根据cbid找到对应的回调方法并触发
        // Notify the JS layer of the running result of the Native layer, and the JS Pluginbridge will find the corresponding callback method according to the cbid and trigger it
        [self toCallback:cbId withReslut:[result toJSONString]];
    }
}
```
**JS 层代码实现**
**JS layer code implementation**
```
    	PluginTestFunction : function (Argus1, Argus2, Argus3, Argus4, successCallback, errorCallback ) 
		{
			var success = typeof successCallback !== 'function' ? null : function(args) 
			{
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null : function(code) 
			{
				errorCallback(code);
			};
// 将两个callback方法进行封装，并生成一个CallbackID传递给Native层
// Encapsulate the two callback methods and generate a CallbackID to pass to the Native layer
			callbackID = B.callbackId(success, fail);
// 通知Native层plugintest扩展插件运行”PluginTestFunction”方法
// Notify the Native layer plugintest extension to run the "PluginTestFunction" method
			return B.exec(_BARCODE, "PluginTestFunction", [callbackID, Argus1, Argus2, Argus3, Argus4]);
		},

```
##### 同步方法：
##### Synchronization method:
同步扩展方法可通过返回值的方式，将Native层扩展插件的运行结果返回给调用该方法的HTML页面。同步方法返回值类型为NSData，传入参数为PGMethod类型。在返回结果较复杂时建议用户使用JSON格式的字符串。
The synchronous extension method can return the running result of the Native layer extension plug-in to the HTML page calling the method by returning a value. The return value type of the synchronous method is NSData, and the incoming parameter is of the PGMethod type. It is recommended that users use JSON-formatted strings when the returned results are complex.
```
- (NSData*)PluginTestFunctionSync:(PGMethod*)command
{
    // 根据传入获取参数
    // Obtain parameters according to the incoming
    NSString* pArgument1 = [command.arguments objectAtIndex:0];
    NSString* pArgument2 = [command.arguments objectAtIndex:1];
    NSString* pArgument3 = [command.arguments objectAtIndex:2];
    NSString* pArgument4 = [command.arguments objectAtIndex:3];
    
    // 拼接成字符串
    // concatenate into a string
    NSString* pResultString = [NSString stringWithFormat:@"%@ %@ %@ %@", pArgument1, pArgument2, pArgument3, pArgument4];

    // 按照字符串方式返回结果
    // Return the result as a string
    return [self resultWithString: pResultString];
}
```

### 三 关联JS插件名和原生类
### Three associate JS plug-in name and native class
开发者在编写扩展插件时需要在JS层定义一个扩展插件的别名，并需要在改方法被调用之前，在H5+基座中注册项两者之间的对应关系。否则5+SDK无法准确的找到Native层的扩展插件。
When writing an extension, the developer needs to define an alias of the extension in the JS layer, and needs to register the corresponding relationship between the two items in the H5+ base before the modification method is called. Otherwise, the 5+SDK cannot accurately find the extension plug-ins of the Native layer.

5+ SDK 提供了两种注册对应关系的方式。
The 5+ SDK provides two ways to register correspondence.

**在plist文件中声明对应关系**
**Declare the corresponding relationship in the plist file**

在编写JS时同时需要修改PandoraAPI.bundle中feature.plist文件，在其中添加JS插件别名和Native插件类的对应关系，SDK基座会根据对应关系查找并生成相应的Native对象并执行对应的方法。
When writing JS, you need to modify the feature.plist file in PandoraAPI.bundle, and add the corresponding relationship between the JS plug-in alias and the Native plug-in class. The SDK base will search and generate the corresponding Native object according to the corresponding relationship and execute the corresponding method.

![](https://ask.dcloud.net.cn/uploads/article/20150512/3128575ba1fd66871c51224e3880b43a.png)

**调用PDRCore的接口声明对应关系**
**Calling the interface declaration correspondence of PDRCore**

开发者还可以通过调用PDRCore提供的设置接口来声明对应关系，该接口不但可以设置JS别名和Native扩展类名之间的关系，还可以注册扩展插件的JS层代码。该声明方法通常在PDRCore初始化后调用。开发者也可以自行决定声明的时机，但是必须在调用该扩展方法的html页面加载之前执行声明。
Developers can also declare the corresponding relationship by calling the setting interface provided by PDRCore. This interface can not only set the relationship between the JS alias and the Native extension class name, but also register the JS layer code of the extension plug-in. This declaration method is usually called after PDRCore is initialized. The developer can also decide the timing of the declaration, but the declaration must be executed before the html page calling the extension method is loaded.

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    PDRCore* core = [PDRCore Instance];
    // Override point for customization after application launch.

    
    //添加一个自定义插件
    //Add a custom plugin
    NSError *error = nil;
    NSString *JSPath = [[NSBundle mainBundle] pathForResource:@"Pandora/apps/H5Plugin/www/js/test-inner" ofType:@"js"];
    NSString *logPluginJS = [NSString stringWithContentsOfFile:JSPath
                                                      encoding:NSUTF8StringEncoding
                                                         error:&error];
    
    [core regPluginWithName:@"plugintest" impClassName:@"PGPluginTest" type:PDRExendPluginTypeFrame javaScript:logPluginJS];
    
    return YES;
}                                                                 
```

### 四 代码实例
### Four code examples
#### PluginTest.h
```
//
//  PluginTest.h
//  HBuilder-Hello
//
//  Created by Mac Pro on 14-9-3.
//  Copyright (c) 2014年 DCloud. All rights reserved.
//

#include "PGPlugin.h"
#include "PGMethod.h"
#import <Foundation/Foundation.h>



@interface PGPluginTest : PGPlugin


- (void)PluginTestFunction:(PGMethod*)command;
- (void)PluginTestFunctionArrayArgu:(PGMethod*)command;

- (NSData*)PluginTestFunctionSync:(PGMethod*)command;
- (NSData*)PluginTestFunctionSyncArrayArgu:(PGMethod*)command;
@end
```
#### PluginTest.m
```
//
//  PluginTest.m
//  HBuilder-Hello
//
//  Created by Mac Pro on 14-9-3.
//  Copyright (c) 2014年 DCloud. All rights reserved.
//

#import "PluginTest.h"
@implementation PGPluginTest

- (void)PluginTestFunction:(PGMethod*)commands
{
	if ( commands ) {
    
        // CallBackid 异步方法的回调id，H5+ 会根据回调ID通知JS层运行结果成功或者失败
        // CallBackid is the callback id of the asynchronous method, H5+ will notify the JS layer of the success or failure of the operation result according to the callback ID
        NSString* cbId = [commands.arguments objectAtIndex:0];
        
        // 用户的参数会在第二个参数传回
        // The user's parameters will be returned in the second parameter
        NSString* pArgument1 = [commands.arguments objectAtIndex:1];
        NSString* pArgument2 = [commands.arguments objectAtIndex:2];
        NSString* pArgument3 = [commands.arguments objectAtIndex:3];
        NSString* pArgument4 = [commands.arguments objectAtIndex:4];
        
        // 如果使用Array方式传递参数
        // If you use Array to pass parameters
        NSArray* pResultString = [NSArray arrayWithObjects:pArgument1, pArgument2, pArgument3, pArgument4, nil];
        
        // 运行Native代码结果和预期相同，调用回调通知JS层运行成功并返回结果
        // The result of running the Native code is the same as expected, call the callback to notify the JS layer that the operation is successful and return the result
        PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusOK messageAsArray: pResultString];

        // 如果Native代码运行结果和预期不同，需要通过回调通知JS层出现错误，并返回错误提示
        // If the running result of the Native code is different from the expected one, you need to notify the JS layer of an error through a callback and return an error message
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"惨了! 出错了！ 咋(wu)整(liao)"];
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"Too bad! Something went wrong!"];

        // 通知JS层Native层运行正确结果
        // Notify the JS layer that the Native layer runs the correct result
        [self toCallback:cbId withReslut:[result toJSONString]];
    }
}

- (void)PluginTestFunctionArrayArgu:(PGMethod*)commands
{
    if ( commands ) {
        
        // CallBackid 异步方法的回调id，H5+ 会根据回调ID通知JS层运行结果成功或者失败
        // CallBackid is the callback id of the asynchronous method, H5+ will notify the JS layer of the success or failure of the operation result according to the callback ID
        NSString* cbId = [commands.arguments objectAtIndex:0];
        
        // 用户的参数会在第二个参数传回，可以按照Array方式传入，
        // The user's parameters will be returned in the second parameter, which can be passed in as an Array.
        NSArray* pArray = [commands.arguments objectAtIndex:1];
        
        // 如果使用Array方式传递参数
        // If you use Array to pass parameters
        NSString* pResultString = [NSString stringWithFormat:@"%@ %@ %@ %@",[pArray objectAtIndex:0], [pArray objectAtIndex:1], [pArray objectAtIndex:2], [pArray objectAtIndex:3]];
        
        // 运行Native代码结果和预期相同，调用回调通知JS层运行成功并返回结果
        // The result of running the Native code is the same as expected, call the callback to notify the JS layer that the operation is successful and return the result
        PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusOK messageAsString:pResultString];
        
        // 如果Native代码运行结果和预期不同，需要通过回调通知JS层出现错误，并返回错误提示
        // If the running result of the Native code is different from the expected one, you need to notify the JS layer of an error through a callback and return an error message
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"惨了! 出错了！ 咋(wu)整(liao)"];
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"Too bad! Something went wrong!];
        
        // 通知JS层Native层运行结果
        // Notify the JS layer of the running result of the Native layer
        [self toCallback:cbId withReslut:[result toJSONString]];
    }
}


- (NSData*)PluginTestFunctionSync:(PGMethod*)command
{
    // 根据传入获取参数
    // Obtain parameters according to the incoming
    NSString* pArgument1 = [command.arguments objectAtIndex:0];
    NSString* pArgument2 = [command.arguments objectAtIndex:1];
    NSString* pArgument3 = [command.arguments objectAtIndex:2];
    NSString* pArgument4 = [command.arguments objectAtIndex:3];
    
    // 拼接成字符串
    // concatenate into a string
    NSString* pResultString = [NSString stringWithFormat:@"%@ %@ %@ %@", pArgument1, pArgument2, pArgument3, pArgument4];

    // 按照字符串方式返回结果
    // Return the result as a string
    return [self resultWithString: pResultString];
}


- (NSData*)PluginTestFunctionSyncArrayArgu:(PGMethod*)command
{
    // 根据传入参数获取一个Array，可以从中获取参数
    // Obtain an Array according to the incoming parameters, from which parameters can be obtained
    NSArray* pArray = [command.arguments objectAtIndex:0];
    
    // 创建一个作为返回值的NSDictionary
    // Create an NSDictionary as the return value
    NSDictionary* pResultDic = [NSDictionary dictionaryWithObjects:pArray forKeys:[NSArray arrayWithObjects:@"RetArgu1",@"RetArgu2",@"RetArgu3", @"RetArgu4", nil]];

    // 返回类型为JSON，JS层在取值是需要按照JSON进行获取
    // The return type is JSON, and the JS layer needs to obtain the value according to JSON
    return [self resultWithJSON: pResultDic];
}

@end
```
### iOS平台插件开发API：
### iOS platform plug-in development API:
#### PDRPlugin
扩展插件的基类，开发者编写的插件需要继承自此类。
The base class for extending plugins, and plugins written by developers need to inherit from this class.
##### 常用方法：
##### Common methods:
```
(void)toCallback:(NSString *)callbackId withReslut:(NSString *)message
```
调用JS层回调函数。
Call the JS layer callback function.

##### 扩展API原型
##### Extend API Prototype
##### 同步方法：
##### Synchronization method:
开发者需要实现同步方法需要实现此方法，如有JS层需要返回值，需要从方法的返回值返回。
Developers need to implement this method if they need to implement a synchronous method. If there is a JS layer that needs to return a value, it needs to return from the return value of the method.
```
(NSData*)syncMethodName:(PGMethod *)command
```
##### 异步方法：
##### Asynchronous methods:
开发者需要实现的异步方法需要实现此方法，如有JS层需要通知运行结果和返回值可以调用 “toCallback”方法通知JS层运行结果。
The asynchronous method that developers need to implement needs to implement this method. If the JS layer needs to notify the operation result and return value, the "toCallback" method can be called to notify the JS layer of the operation result.
```
(void)asyncMethodName:(PGMethod *)command
```
##### 同步方法返回值处理方法：
##### Synchronous method return value processing method:
``` 
(NSData* ) resultWithInt:(int)value
(NSData* ) resultWithJSON:(int)value
```

#### PDRMethod
    扩展插件方法传入的参数，扩展插件定义的方法需要使用此类传入参数
    The parameters passed in by the extension plug-in method, the method defined by the extension plug-in needs to use such incoming parameters
**属性：**
**Attributes:**
    NSArray* **arguments**  字符串数组，根据JS层参数的传入顺序获取传递的参数。
    NSArray* **arguments** String array, get the passed parameters according to the order in which the JS layer parameters are passed in.

#### PDRPluginResult
扩展插件的异步调用方法返回值处理类，开发者可使用此类快速将要返回的结果格式化。
The asynchronous call method return value processing class of the extension plug-in, developers can use this class to quickly format the returned results.

**返回值类型：**
**Return value type:**
      
**boolea类型：**     resultWithStatus:OK messageAsInt:1 );
**boolea type:** resultWithStatus:OK messageAsInt:1 );
      
**Number类型：**	resultWithStatus:OK messageAsInt:99 );
**Number type:** resultWithStatus:OK messageAsInt:99 );
      
**String类型：**       resultWithStatus:OK messageAsString:@"hello" );
**String type:** resultWithStatus:OK messageAsString:@"hello" );
      
**数组类型：**          resultWithStatus:OK messageAsArray:[@"123",@"456",nill] );
**Array type:** resultWithStatus:OK messageAsArray:[@"123",@"456",nill] );
      
**JSON类型：**    	resultWithStatus:OK messageAsDictionary:{@"name":@"value"} );
**JSON type:** resultWithStatus:OK messageAsDictionary:{@"name":@"value"} );
	  
**示例：**
**Example:**
```
PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusOK messageAsString:@"123123"];
[self toCallback:cbId withReslut:[result toJSONString]];
```
#### PDRCore
 HTML5+基座的管理类，可以用来设置下载目录，文档目录，和添加扩展插件的关联
 The management class of the HTML5+ base can be used to set the download directory, document directory, and add extension plug-in associations

**常用方法：**
**Common method:**
```
- (int)regPluginWithName:(NSString*)pluginName  impClassName:(NSString*)impClassName
                    type:(PDRExendPluginType)pluginType  javaScript:(NSString*)javaScript;
```

**参数说明：**
**Parameter Description:**
       **pluginName：**		插件名称JS文件中定义的名字
       **pluginName:** The name defined in the plugin name JS file
        **impClassName：** 	插件对应的实现类名
        **impClassName:** The implementation class name corresponding to the plugin
        **pluginType：** 	插件类型 
        **pluginType:** plugin type
        **javaScript js：**		实现 为javascript文本
        **javaScript js:** implemented as javascript text

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


