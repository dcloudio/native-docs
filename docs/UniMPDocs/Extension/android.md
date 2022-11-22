## 概述

扩展原生能力指的是将您原生开发的功能通过一定规范暴露给 uni小程序环境，然后即可在 uni小程序应用中调用您的原生功能。

## 扩展方式

uni 扩展原生能力有两种方式：一种是不需要参与页面布局，只需要通过 API 调用原生功能，比如：获取当前定位信息、数据请求等功能，这种情况可通过扩展`module`的方式来实现；另一种是需要参与页面布局，比如：map、image，这种情况需要通过扩展`component`即组件的方法来实现；

## 开发环境

- JAVA环境 jdk1.7+(最优1.8)
- Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
- 下载uni小程序 2.9.8+SDK [详情](UniMPDocs/SDKDownload/android.md)；
- [HBuilderX-2.9.8+](https://www.dcloud.io/hbuilderx.html)

## 注意事项

### 小程序进程

由于小程序运行独立进程与宿主进程不会内存共享。所以原生扩展的代码不能直接使用宿主的代码内存逻辑。三方SDK也是相同道理。正常情况三方SDK都会支持多进程同时实例化并实现逻辑。但部分SDK由于逻辑特殊性无法在多进程下实例化。导致无法正常调用需要注意！！！

#### 小程序为什么要运行到独立进程中？

+ 小程序运行在一个独立的小程序进程中。独立进程中的内存与其他进程内存是不共享的。相对比较独立。如果小程序进程出现了异常情况发生崩溃，理论上是不会影响宿主的。
+ 同时运行多个小程序在一个进程中！内存会比较吃紧。而多进程模式下会得到更多的内存分配！得到更优的运行环境。

#### 原生扩展逻辑需要与宿主交互

+ 可通过原生实现AIDL或者广播等等进行与宿主交互得到。玩法由开发者自行实现。
+ 可通过小程序与宿主通道进行交互数据。但缺点是仅支持小程序js层与宿主原生层交互。限制比较多。

#### 集成的三方SDK不支持在小程序进程下运行

+ 宿主集成三方原生SDK。通过小程序与宿主通信接口实现简单的数据通信并调用宿主实现的相关功能。
+ 原生扩展将关于SDK的调用代码封装到activity中。当前activity需运行在宿主进程。通过Intent启动携带参数通信实现功能调用执行。

#### 宿主启动的activity关闭后会回到宿主页面。不回到小程序页面

+ 宿主启动activity时请使用DCUniMPSDK.getInstance().startActivityForUniMPTask [详情](UniMPDocs/API/android-v2?id=dcunimpsdkgetinstancestartactivityforunimptask)

#### 宿主启动的Dialog无正常显示到小程序页面之上

+ 宿主启动Dialog样式的activity, 可参考SDK中DEMO里的DialogActivity及主题设置等！

### 原生扩展注意点

+ Module 扩展 非 UI 的特定功能.

+ Component 扩展 实现特别功能的 Native 控件.

+ 关于扩展的`Module`或`Component`代码中日志log。小程序运行在io.dcloud.unimp子进程。看日志log需要在这个进程看日志log。

+ 扩展的`Module`或`Component`参数中有用到`JSONObject`或`JSONArray`,不要使用`org.json.JSONObject`。请使用`com.alibaba.fastjson.JSONObject`. 依赖库`com.alibaba:fastjson:1.1.46.android`

+ 原生扩展代码运行在小程序进程中。所以禁止调用`DCUniMPSDK`的API。`DCUniMPSDK`的API只可以在宿主进程调用。否则会触发Not initialized异常。


### 权限申请 重要！

关于扩展模块需要某些权限申请时。请使用[DCUniMPPermissionUtil.requestPermissions](/UniMPDocs/API/android?id=requestpermissions)申请权限。方便日后权限统一申请处理！！！

**注意 仅支持activity权限申请。Fragment申请权限请使用Fragment的requestPermissions方法**

## 扩展 module

下面以`TestModule`为例，源码请查看 uni小程序SDK 包中的示例 DEMO 工程；

#### 1.创建Android Studio的Module模块

 - 在现有Android项目中创建library的Module。例如`TestModule`
 - 配置刚创建的Module的build.gradle信息。
	
	**示例:**
	
	```
	//导入aar需要的配置
	repositories {
		flatDir {
			dirs 'libs'
		}
	}
	dependencies {
		//必须添加的依赖
		compileOnly 'com.android.support:recyclerview-v7:27.1.0'
		compileOnly 'com.android.support:support-v4:27.1.0'
		compileOnly 'com.android.support:appcompat-v7:27.1.0'
		compileOnly 'com.alibaba:fastjson:1.1.46.android'

		compileOnly fileTree(include: ['uniapp-release.aar'], dir: '../app/libs')
	}
	```
	
	**Tips:**
	
	uniapp-release.aar是扩展module主要依赖库，必须导入此依赖库！
	HX3.1.6+开始 集成SDK需要将compileSdkVersion调高至29+
	
#### 2.创建TestModule类

 - Module 扩展必须继承 UniModule 类
 
	**示例:**
	
	```JAVA
	public class TestModule extends UniModule
	```
	
 - 扩展方法必须加上@UniJSMethod (uiThread = false or true) 注解。UniApp 会根据注解来判断当前方法是否要运行在 UI 线程，和当前方法是否是扩展方法。
 - UniApp是根据反射来进行调用 Module 扩展方法，所以Module中的扩展方法必须是 public 类型。
	
	**示例:**
	
	```JAVA
	//run ui thread
    @UniJSMethod(uiThread = true)
    public void testAsyncFunc(JSONObject options, UniJSCallback callback) {
        Log.e(TAG, "testAsyncFunc--"+options);
        if(callback != null) {
            JSONObject data = new JSONObject();
            data.put("code", "success");
            callback.invoke(data);
        }
    }
	
	//run JS thread
    @UniJSMethod (uiThread = false)
    public JSONObject testSyncFunc(){
        JSONObject data = new JSONObject();
        data.put("code", "success");
        return data;
    }
	```
	
 - 同样因为是通过反射调用，Module 不能被混淆。请在混淆文件中添加代码：
 ```
 -keep public class * extends io.dcloud.feature.uniapp.common.UniModule{*;}
 ```
 - Module 扩展的方法可以使用 int, double, float, String, Map, List, com.alibaba.fastjson.JSONObject 类型的参数类型的参数

#### 3.注册TestModule

由于uni小程序运行在独立子进程中。内存与宿主不共享。所以`宿主进程`注册了`TestModule`，在uni小程序是无法使用的。
Android创建子进程时会主动再次初始化Application！所以uni小程序注册`TestModule`必须在Application中的onCreate初始化或注册。

**Tips**
 - 注册`TestModule`之前记得配置宿主的`build.gradle`导入Module模块.
 - 以下示例代码写在宿主的Application中。

**示例:**

```JAVA
public class App extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        try {
            UniSDKEngine.registerModule("TestModule", TestModule.class);
        } catch (UniException e) {
            e.printStackTrace();
        }
	}
}
```

到此，我们已经完成了一个简单的 module 扩展

#### 4. 在 uni小程序 中调用 module 方法

module 支持在 vue 和 nvue 中使用

**示例:**

```Javascript
<template>
	<div>
		<button type="primary" @click="testAsyncFunc">testAsyncFunc</button>
		<button type="primary" @click="testSyncFunc">testSyncFunc</button>
	</div>
</template>

<script>
	// 获取 module 
	var testModule = uni.requireNativePlugin("TestModule")
	export default {
		methods: {
			testAsyncFunc() {
				// 调用异步方法
				testModule.testAsyncFunc({
						'name': 'unimp',
						'age': 1
					},
					(ret) => {
						console.log(ret)
					})
			},
			testSyncFunc() {
				// 调用同步方法
				var ret = testModule.testSyncFunc({
					'name': 'unimp',
					'age': 1
				})
				console.log(ret)
			}
		}
	}
</script>

```

**Tips** 

uni.requireNativePlugin仅用于获取UniModule的对象。UniComponent不支持该方法！


## 扩展组件 component 

下面以`TestComponent`为例，源码请查看 uni小程序SDK 包中的示例 DEMO 工程；

#### 1.创建Android Studio的Module模块

请参考 [扩展 Module](/UniMPDocs/Extension/android?id=_1创建android-studio的module模块)

#### 2.创建TestComponent类

 - Component 扩展类必须继承 UniComponent

	**示例:**
	
	```JAVA
	public class TestText extends UniComponent<TextView>
	```
 - UniComponent的initComponentHostView回调函数。构建Component的view时会触发此回调函数。
	
	**示例:**
	
	```JAVA
	@Override
    protected TextView initComponentHostView(@NonNull Context context) {
        TextView textView = new TextView(context);
        textView.setTextSize(20);
        textView.setTextColor(Color.BLACK);
        return textView;
    }
	```
	
 - Component 对应的设置属性的方法必须添加注解 @UniComponentProp(name=value(value is attr or style of dsl))
	
	**示例:**
	
	```JAVA
	@UniComponentProp(name = "tel")
    public void setTel(String telNumber) {
        getHostView().setText("tel: " + telNumber);
    }
	```
	
 - UniApp 通过反射调用对应的方法，所以 Component 对应的属性方法必须是 public，并且不能被混淆。请在混淆文件中添加代码 
 ```
 -keep public class * extends io.dcloud.feature.uniapp.common.UniComponent{*;}
 ```
 
 - Component 扩展的方法可以使用 int, double, float, String, Map, List, com.alibaba.fastjson.JSONObject 类型的参数
 - Component定义组件方法.

 **示例:**
 + 在组件中如下声明一个组件方法
 ```JAVA
 @UniJSMethod
 public void clearTel() {
    getHostView().setText("");
 }
 ```
 + 注册组之后，你可以在UniApp 文件中调用
 
 ```JS
 <template>
 	<div>
 		<myText ref="telText" tel="12305" style="width:200;height:100" @onTel="onTel" @click="myTextClick"></myText>
 	</div>
 </template>
 <script>  
     export default {  
         methods: {  
 			myTextClick(e) {
 				this.$refs.telText.clearTel();
 			}
         }  
     } 
 </script>  
 ```
 
 
#### 3.注册TestComponent组件

由于uni小程序运行在独立子进程中。内存与宿主不共享。所以`宿主进程`注册了`TestComponent`，在uni小程序是无法使用的。
Android创建子进程时会主动再次初始化Application！所以uni小程序注册`TestComponent`必须在Application中的onCreate初始化或注册。

**Tips**

 - 注册`TestModule`之前记得配置宿主的`build.gradle`导入的Module模块.
 - 以下示例代码写在宿主的Application中。

**示例:**

```JAVA
public class App extends Application {

    @Override
    public void onCreate() {
        try {
            UniSDKEngine.registerComponent("myText", TestText.class);
        } catch (UniException e) {
            e.printStackTrace();
        }
        super.onCreate();
    }
}
```

到此，我们已经完成了一个简单的 component 扩展

#### 4. 在uni小程序代码中使用组件

注意：扩展的 component 只能在 `nvue` 文件中使用

**示例:**

```Javascript
<template>
	<div>
		<myText tel="12305" style="width:200;height:100" @onTel="onTel"></myText>
	</div>
</template>

<script>  
    export default {  
        data() {  
            return {  
            }  
        },  
        onLoad() {  
        },  
        methods: {  
			onTel: (e)=> {
				console.log("onTel="+e.detail.tel);
			}
        }  
    }  
</script>
```

## component 自定义发送事件

向JS环境发送一些事件，比如click事件
```
void fireEvent(elementRef,type)
void fireEvent(elementRef,type, data)
void fireEvent(elementRef,type,data,domChanges)
```

- `elementRef`(String)：产生事件的组件id
- `type`(String): 事件名称，默认事件名称格式为"onXXX",比如`OnPullDown`
- `data`(Map<String, Object>): 需要发送的一些额外数据，比如`click`时，view大小，点击坐标等等。
- `domChanges`(Map<String, Object>): 目标组件的属性和样式发生的修改内容

**示例:**

通过 @事件名="方法名" 添加事件，如下添加`onTel`事件

```JAVA
//原生触发fireEvent 自定义事件onTel
Map<String, Object> params = new HashMap<>();
Map<String, Object> number = new HashMap<>();
number.put("tel", telNumber);
//目前uni限制 参数需要放入到"detail"中 否则会被清理
params.put("detail", number);
fireEvent("onTel", params);
```

```JS
//标签注册接收onTel事件
<myText tel="12305" style="width:200;height:100" @onTel="onTel"></myText>
//事件回调
methods: {  
	onTel: (e)=> {
		console.log("onTel="+e.detail.tel);
	}
}  
```

**注意**
	
执行自定义事件fireEvent时params的数据资源都要放入到"detail"中。如果没有将你得返回的数据放入"detail"中将可能丢失。请注意！！！

## JSCallback结果回调

JS调用时，有的场景需要返回一些数据，比如以下例子，返回x、y坐标
```
void invoke(Object data);
void invokeAndKeepAlive(Object data);
```
- `invoke`调用javascript回调方法，此方法将在调用后被销毁。
- `invokeAndKeepAlive` 调用javascript回调方法并保持回调活动以备以后使用。

**示例：**

```JAVA
@UniJSMethod(uiThread = true)
public void testAsyncFunc(JSONObject options, UniJSCallback callback) {
    Log.e(TAG, "testAsyncFunc--"+options);
    if(callback != null) {
        JSONObject data = new JSONObject();
        data.put("code", "success");
        callback.invoke(data);
    }
}
```

**注意**
	
执行自定义事件fireEvent时params的数据资源都要放入到"detail"中。如果没有将你得返回的数据放入"detail"中将可能丢失。请注意！！！

## globalEvent 事件

用于页面监听持久性事件，例如定位信息，陀螺仪等的变化。

**示例：**

页面监听event事件

```JS
var globalEvent = uni.requireNativePlugin('globalEvent');
globalEvent.addEventListener('myEvent', function(e) {
  console.log('myEvent'+JSON.stringify(e));
});
```

插件 原生代码发出`myEvent`事件

```JAVA
Map<String,Object> params=new HashMap<>();
params.put("key","value");
mUniSDKInstance.fireGlobalEventCallback("myEvent", params);
```

**注意**
globalEvent事件只能通过页面的UniSDKInstance实例给当前页面发送globalEvent事件。其他页面无法接受。


### uniapp中常见路径说明

+ [PRIVATE_WWW](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.PRIVATE_WWW) 对应相对路径URL为"_www"开头的地址
+ [PRIVATE_DOC](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.PRIVATE_DOC) 对应相对路径URL为"_doc"开头的地址
+ [PUBLIC_DOCUMENTS](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.PUBLIC_DOCUMENTS) 对应相对路径URL为"_documents"开头的地址
+ [PUBLIC_DOWNLOADS](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.PUBLIC_DOWNLOADS) 对应相对路径URL为"_downloads"开头的地址

#### 问题：
+ Q1: 原生插件拿到`_doc/a.png`、`static/test.js`等路径参数如何转换原生开发的地址？

	可通过UniSDKInstance.rewriteUri转换app中的路径参数。

	**示例：**

	```JAVA
	Uri uri = mUniSDKInstance.rewriteUri(Uri.parse("_doc/a.png"), URIAdapter.FILE);
	Log.e(TAG, uri.toString())
	```

+ Q2: 我想操作DOC目录下的文件如何获取路径地址？

	可通过UniSDKInstance.rewriteUri转换app中的路径参数。

	**示例：**

	```JAVA
	Uri uri = mUniSDKInstance.rewriteUri(Uri.parse("_doc/"), URIAdapter.FILE);
	Log.e(TAG, uri.toString())
	```

## Android 扩展开发小提示

#### 查看Android原生日志

小程序运行在独立子进程。所以想要看小程序的日志需要将进程切换到`io.dcloud.unimp`进程查看log！

#### 查看小程序 console日志

修改项目中assets/data/dcloud_control.xml 内部信息。将syncDebug改为true，开启调试模式。 注意正式版需要改为false!!!
修改后查看`io.dcloud.unimp`进程查看log。TAG为`console`

#### 在UniModule、UniComponent中跳转原生页面

获取UniSDKInstance对象。该对象中可以获取到上下文。

**示例**

```
@UniJSMethod (uiThread = true)
public void gotoNativePage(){
    if(mUniSDKInstance != null) {
        Intent intent = new Intent(mUniSDKInstance.getContext(), NativePageActivity.class);
        mUniSDKInstance.getContext().startActivity(intent);
    }
}
```

**注意**

如果小程序非后台运行模式 setEnableBackground = false ，不支持Activity设置launchMode="singleTask"，可能会引起小程序无法正常启动！！！

#### 插件跳转Activity页面后。Activity页面关闭后有数据需要返回。怎么能实现？

可以按以下步骤操作实现：

在插件的UniModule/UniComponent实现onActivityResult方法。通过标识code和参数KEY去区分当前的Result是你需要的返回值
   
   **示例**
   
   ```JAVA
   public static int REQUEST_CODE = 1000; //数据返回标识code 
   @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if(requestCode == REQUEST_CODE && data.hasExtra("respond")) {
            Log.e("TestModule", "原生页面返回----"+data.getStringExtra("respond"));
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }
   ```

通过startActivityForResult加上返回标识code跳转其他Activity页面。
   
   **示例**
   
   ```JAVA
   @UniJSMethod (uiThread = true)
    public void gotoNativePage(){
        if(mUniSDKInstance != null && mUniSDKInstance.getContext() instanceof Activity) {
            Intent intent = new Intent(mUniSDKInstance.getContext(), NativePageActivity.class);
            ((Activity)mUniSDKInstance.getContext()).startActivityForResult(intent, REQUEST_CODE);
        }
    }
   ```
   
Activity页面在关闭前调用setResult设置标识code将要返回的参数放进Intent中。
   
   **示例**
   
   ```JAVA
   Intent intent = new Intent();
   intent.putExtra("respond", "我是原生页面");
   setResult(TestModule.REQUEST_CODE, intent);
   finish();
   ```


## 集成插件市场的uni原生插件

[uni-app插件市场](https://ext.dcloud.net.cn/)有大量丰富的插件。

1.插件市场下载uni-app插件（此处以[RichAlert](https://ext.dcloud.net.cn/plugin?id=36)为例）

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_4.png)

2.解压插件包得到`package.json`和`android`文件夹

3.将插件中`android`目录下的aar/jar文件放入libs下，其余文件参考项目目录放入指定文件夹中。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_5.png)

4.在assets目录下创建`dcloud_uniplugins.json`文件
+ **说明 [dcloud_uniplugins.json](/NativePlugin/course/android?id=dcloud_unipluginsjson%E8%AF%B4%E6%98%8E)**
+ **说明 [package.json](/NativePlugin/course/package?id=packagejson)**
+ 阅读`package.json`读取android配置信息。编写`dcloud_uniplugins.json`内容

**示例：**

~~~
{  
  "nativePlugins": [  
    {
      "plugins": [  
        {  
          "type": "module",  
          "name": "DCloud-RichAlert",  
          "class": "uni.dcloud.io.uniplugin_richalert.RichAlertModule"  
        }  
      ]  
    }  
  ]  
}
~~~

5.阅读`package.json`读取dependencies、minSdkVersion、permissions配置信息。配置gradle文件和AndroidManifest.xml。

6.阅读`package.json`读取parameters节点信息配置AndroidManifest.xml。填写插件需要的meta-data信息。

到此原生插件已集成到宿主APP中

**Tips：**
+ uni小程序sdk无法使用插件市场中付费的原生插件.