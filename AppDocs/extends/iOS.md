> 本文为5+app插件开发指南。uni-app请另外参考文档：[https://ask.dcloud.net.cn/article/35428](https://ask.dcloud.net.cn/article/35428)

欢迎有原生开发能力的朋友入群一起交流学习（入群请提供注册邮箱）：
DCloud原生开发者群：

1群：256775471（已满）
2群：814228233  (已满)
3群：455763866

## 技术架构
HTML5+ 基座扩展采用三层结构，JS层、PluginBridge层和Native层。 三层功能分别是： 

**JS层**： 在Webview页面调用，触发Native层代码，获取执行结果。 

**PluginBridge层**： 将JS层请求进行处理，触发Native层扩展插件代码。 

**Native层**： 插件扩展的平台原生代码，负责执行业务逻辑并执行结果返回到请求页面。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20141031/916e01c36b1d1c06fc3e806e3389bb60.png)

开发者在开发扩展插件时需要为扩展插件编写对应的JS API，JS API将在HTML页面中触发调用对应Native扩展方法的请求，并负责接收运行结果。 

开发者在编写扩展插件的JS时需要调用Javascript Plugin Bridge的API用来完成对Native层代码的调用和运行结果的返回。在实际应用中，开发者可以根据扩展方法的实际需求不同，将插件的扩展方法设置为同步执行或异步执行。
 
同步执行的扩展方法会阻塞当前JS代码的执行，直到Native层插件扩展方法执行完毕。异步扩展方法不会阻塞当前JS代码的执行，使用者需要设置回调方法接收Native层返回的执行结果，开发者需要在插件中调用 Native plugin brigde的方法将执行结果返回到请求页面。

## 扩展插件工作流程：
### 插件异步扩展方法：
异步方法的执行不会阻塞当前JS的运行，方法的执行结果会通过回调的方式返回给调用者。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20141031/e1022c696351dd8fe520c2a3c997aab3.png)


### 插件同步扩展方法：

同步方法的执行会阻塞当前JS的运行，方法执行完成后可直接获取执行的结果。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20141031/4e73a29376448744e58b0129cc1b76bc.png)

## 扩展插件JS API 编写
开发者在实现JS层API时首先要定义一个插件类别名，并需要在IOS工程的PandoraApi.bundle\feature.plist文件中声明插件类别名和Native层扩展插件类的对应关系

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150909/0550b4b7f8d19038b04026627b8441ad.png)

#### JS扩展方法的实现

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

#### 扩展插件JS API代码示例：
```
document.addEventListener( "plusready",  function()
{
// 声明的JS“扩展插件别名”
    var _BARCODE = 'plugintest',
		B = window.plus.bridge;
    var plugintest = 
{
// 声明异步返回方法
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
        PluginTestFunctionSync : function (Argus1, Argus2, Argus3, Argus4) 
        {            
	        // 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果                    	
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
### 准备：

首先需要下载H5+ 的IOS平台离线打包SDK（[下载地址](/AppDocs/download/ios.md)）
在MAC平台解压后打开HBuilder-plugin工程。

 开发步骤
### 一 创建插件类
        
开发者新创建的类需要继承“PGPlugin”类实现第三方插件扩展。

   1. 创建一个继承自“PGPlugin”类的Objective-c类
   2. 在源文件中引入头文件“PGPlugin.h”和“PGMethod.h” 

### 二  编写插件的方法

开发者可根据需求，在JS层通过调用不同的JS Plugin Bridge方法，将扩展方法定义为同步执行或异步执行。

同步执行的方法会阻塞当前JS代码的执行，并同步获取Native层扩展方法返回的运行结果。

异步执行方法不会阻塞当前JS代码的执行，需要开发者用回调的方式接收Native层的执行结果。

但需要注意，在调用plus.bridge.exec或plus.bridge.execSync方法时，传入的第一个参数是插件的别名，开发者需要声明别名和Native代码类名的对应关系。传入的第二个参数(调用插件的方法名)，需要和要调用的扩展插件的方法名一致，否则无法通过JS调用到Native层扩展类方法。

##### 异步方法：
开发者在编写异步方法时可通过PGPlugin类的回调方法将Native扩展方法运行结果返回到调用页面。使用方法如下
**Native层代码实现**
```
- (void)PluginTestFunctionArrayArgu:(PGMethod*)commands
{
    if ( commands ) {
        
        // CallBackid 异步方法的回调id，H5+ 会根据回调ID通知JS层运行结果成功或者失败
        NSString* cbId = [commands.arguments objectAtIndex:0];
        
        // 用户的参数会在第二个参数传回，可以按照Array方式传入，
        NSArray* pArray = [commands.arguments objectAtIndex:1];
        
        // 如果使用Array方式传递参数
        NSString* pResultString = [NSString stringWithFormat:@"%@ %@ %@ %@",[pArray objectAtIndex:0], [pArray objectAtIndex:1], [pArray objectAtIndex:2], [pArray objectAtIndex:3]];
        
        // 运行Native代码结果和预期相同，调用回调通知JS层运行成功并返回结果
        PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusOK messageAsString:pResultString];
        
        // 如果Native代码运行结果和预期不同，需要通过回调通知JS层出现错误，并返回错误提示
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"惨了! 出错了！ 咋(wu)整(liao)"];
        
        // 通知JS层Native层运行结果，JS Pluginbridge会根据cbid找到对应的回调方法并触发
        [self toCallback:cbId withReslut:[result toJSONString]];
    }
}
```
**JS 层代码实现**
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
			callbackID = B.callbackId(success, fail);
// 通知Native层plugintest扩展插件运行”PluginTestFunction”方法
			return B.exec(_BARCODE, "PluginTestFunction", [callbackID, Argus1, Argus2, Argus3, Argus4]);
		},

```
##### 同步方法：
同步扩展方法可通过返回值的方式，将Native层扩展插件的运行结果返回给调用该方法的HTML页面。同步方法返回值类型为NSData，传入参数为PGMethod类型。在返回结果较复杂时建议用户使用JSON格式的字符串。
```
- (NSData*)PluginTestFunctionSync:(PGMethod*)command
{
    // 根据传入获取参数
    NSString* pArgument1 = [command.arguments objectAtIndex:0];
    NSString* pArgument2 = [command.arguments objectAtIndex:1];
    NSString* pArgument3 = [command.arguments objectAtIndex:2];
    NSString* pArgument4 = [command.arguments objectAtIndex:3];
    
    // 拼接成字符串
    NSString* pResultString = [NSString stringWithFormat:@"%@ %@ %@ %@", pArgument1, pArgument2, pArgument3, pArgument4];

    // 按照字符串方式返回结果
    return [self resultWithString: pResultString];
}
```

### 三 关联JS插件名和原生类
开发者在编写扩展插件时需要在JS层定义一个扩展插件的别名，并需要在改方法被调用之前，在H5+基座中注册项两者之间的对应关系。否则5+SDK无法准确的找到Native层的扩展插件。

5+ SDK 提供了两种注册对应关系的方式。

**在plist文件中声明对应关系**

在编写JS时同时需要修改PandoraAPI.bundle中feature.plist文件，在其中添加JS插件别名和Native插件类的对应关系，SDK基座会根据对应关系查找并生成相应的Native对象并执行对应的方法。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150512/3128575ba1fd66871c51224e3880b43a.png)

**调用PDRCore的接口声明对应关系**

开发者还可以通过调用PDRCore提供的设置接口来声明对应关系，该接口不但可以设置JS别名和Native扩展类名之间的关系，还可以注册扩展插件的JS层代码。该声明方法通常在PDRCore初始化后调用。开发者也可以自行决定声明的时机，但是必须在调用该扩展方法的html页面加载之前执行声明。

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    PDRCore* core = [PDRCore Instance];
    // Override point for customization after application launch.

    
    //添加一个自定义插件
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
        NSString* cbId = [commands.arguments objectAtIndex:0];
        
        // 用户的参数会在第二个参数传回
        NSString* pArgument1 = [commands.arguments objectAtIndex:1];
        NSString* pArgument2 = [commands.arguments objectAtIndex:2];
        NSString* pArgument3 = [commands.arguments objectAtIndex:3];
        NSString* pArgument4 = [commands.arguments objectAtIndex:4];
        
        // 如果使用Array方式传递参数
        NSArray* pResultString = [NSArray arrayWithObjects:pArgument1, pArgument2, pArgument3, pArgument4, nil];
        
        // 运行Native代码结果和预期相同，调用回调通知JS层运行成功并返回结果
        PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusOK messageAsArray: pResultString];

        // 如果Native代码运行结果和预期不同，需要通过回调通知JS层出现错误，并返回错误提示
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"惨了! 出错了！ 咋(wu)整(liao)"];

        // 通知JS层Native层运行正确结果
        [self toCallback:cbId withReslut:[result toJSONString]];
    }
}

- (void)PluginTestFunctionArrayArgu:(PGMethod*)commands
{
    if ( commands ) {
        
        // CallBackid 异步方法的回调id，H5+ 会根据回调ID通知JS层运行结果成功或者失败
        NSString* cbId = [commands.arguments objectAtIndex:0];
        
        // 用户的参数会在第二个参数传回，可以按照Array方式传入，
        NSArray* pArray = [commands.arguments objectAtIndex:1];
        
        // 如果使用Array方式传递参数
        NSString* pResultString = [NSString stringWithFormat:@"%@ %@ %@ %@",[pArray objectAtIndex:0], [pArray objectAtIndex:1], [pArray objectAtIndex:2], [pArray objectAtIndex:3]];
        
        // 运行Native代码结果和预期相同，调用回调通知JS层运行成功并返回结果
        PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusOK messageAsString:pResultString];
        
        // 如果Native代码运行结果和预期不同，需要通过回调通知JS层出现错误，并返回错误提示
        //PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusError messageAsString:@"惨了! 出错了！ 咋(wu)整(liao)"];
        
        // 通知JS层Native层运行结果
        [self toCallback:cbId withReslut:[result toJSONString]];
    }
}


- (NSData*)PluginTestFunctionSync:(PGMethod*)command
{
    // 根据传入获取参数
    NSString* pArgument1 = [command.arguments objectAtIndex:0];
    NSString* pArgument2 = [command.arguments objectAtIndex:1];
    NSString* pArgument3 = [command.arguments objectAtIndex:2];
    NSString* pArgument4 = [command.arguments objectAtIndex:3];
    
    // 拼接成字符串
    NSString* pResultString = [NSString stringWithFormat:@"%@ %@ %@ %@", pArgument1, pArgument2, pArgument3, pArgument4];

    // 按照字符串方式返回结果
    return [self resultWithString: pResultString];
}


- (NSData*)PluginTestFunctionSyncArrayArgu:(PGMethod*)command
{
    // 根据传入参数获取一个Array，可以从中获取参数
    NSArray* pArray = [command.arguments objectAtIndex:0];
    
    // 创建一个作为返回值的NSDictionary
    NSDictionary* pResultDic = [NSDictionary dictionaryWithObjects:pArray forKeys:[NSArray arrayWithObjects:@"RetArgu1",@"RetArgu2",@"RetArgu3", @"RetArgu4", nil]];

    // 返回类型为JSON，JS层在取值是需要按照JSON进行获取
    return [self resultWithJSON: pResultDic];
}

@end
```
### iOS平台插件开发API：
#### PDRPlugin
扩展插件的基类，开发者编写的插件需要继承自此类。
##### 常用方法：
```
(void)toCallback:(NSString *)callbackId withReslut:(NSString *)message
```
调用JS层回调函数。

##### 扩展API原型
##### 同步方法：
开发者需要实现同步方法需要实现此方法，如有JS层需要返回值，需要从方法的返回值返回。
```
(NSData*)syncMethodName:(PGMethod *)command
```
##### 异步方法：
开发者需要实现的异步方法需要实现此方法，如有JS层需要通知运行结果和返回值可以调用 “toCallback”方法通知JS层运行结果。
```
(void)asyncMethodName:(PGMethod *)command
```
##### 同步方法返回值处理方法：
``` 
(NSData* ) resultWithInt:(int)value
(NSData* ) resultWithJSON:(int)value
```

#### PDRMethod
    扩展插件方法传入的参数，扩展插件定义的方法需要使用此类传入参数
**属性：**
    NSArray* **arguments**  字符串数组，根据JS层参数的传入顺序获取传递的参数。

#### PDRPluginResult
扩展插件的异步调用方法返回值处理类，开发者可使用此类快速将要返回的结果格式化。

**返回值类型：**
      
**boolea类型：**     resultWithStatus:OK messageAsInt:1 );
      
**Number类型：**	resultWithStatus:OK messageAsInt:99 );
      
**String类型：**       resultWithStatus:OK messageAsString:@"hello" );
      
**数组类型：**          resultWithStatus:OK messageAsArray:[@"123",@"456",nill] );
      
**JSON类型：**    	resultWithStatus:OK messageAsDictionary:{@"name":@"value"} );
	  
**示例：**
```
PDRPluginResult *result = [PDRPluginResult resultWithStatus:PDRCommandStatusOK messageAsString:@"123123"];
[self toCallback:cbId withReslut:[result toJSONString]];
```
#### PDRCore
 HTML5+基座的管理类，可以用来设置下载目录，文档目录，和添加扩展插件的关联

**常用方法：**
```
- (int)regPluginWithName:(NSString*)pluginName  impClassName:(NSString*)impClassName
                    type:(PDRExendPluginType)pluginType  javaScript:(NSString*)javaScript;
```

**参数说明：**
       **pluginName：**		插件名称JS文件中定义的名字
        **impClassName：** 	插件对应的实现类名
        **pluginType：** 	插件类型 
        **javaScript js：**		实现 为javascript文本

## 术语字典
**JS Plugin Bridge：** H5+ Plugin Bridge层JS部分API，用户通过调用相应的API触发Native层扩展插件相应方法的调用。

**Native Plugin Bridge:** H5+ Plugin Bridge层Native部分API，开发者通过实现接口类方法，实现由JS层触发Native层扩展插件逻辑。开发者调用API实现Native扩展方法运行结果得返回。

**Native层插件：**开发者使用原生语言实现的5+扩展插件，可被JS层通知调用。

**插件类别名：**JS层字符串，用来声明JS方法和Native层插件的对应关系


