## 概述
扩展原生能力指的是将您原生开发的功能通过一定规范暴露给 uni小程序环境，然后即可在 uni小程序应用中调用您的原生功能。

### 扩展方式

uni 原生端是基于 WeexSDK 来实现扩展原生能力，扩展原生能力有两种方式：一种是不需要参与页面布局，只需要通过 API 调用原生功能，比如：获取当前定位信息、数据请求等功能，这种情况可通过扩展`module`的方式来实现；另一种是需要参与页面布局，比如：map、image，这种情况需要通过扩展`component`即组件的方法来实现；

## 开发环境

- JAVA环境 jdk1.7+(最优1.8)
- Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
- 下载uni小程序 SDK [详情](https://ask.dcloud.net.cn/article/36939)；
- [HBuilderX-2.6.2+](https://www.dcloud.io/hbuilderx.html)

### 注意事项

如果你扩展的`Module`或`Component`要与宿主进行数据交互需要注意。宿主与小程序不在同一进程，内存不共享。所以需要开发者自己实现跨进程通信。后续会完善此交互问题。

关于扩展的`Module`或`Component`代码中日志log。小程序运行在io.dcloud.unimp子进程。看日志log需要在这个进程看日志log。

## 扩展 module

下面以`TestModule`为例，源码请查看 uni小程序SDK 包中的示例 DEMO 工程；

### 1.创建Android Studio的Module模块

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
	
### 2.创建TestModule类

 - Module 扩展必须继承 WXModule 类
 
	**示例:**
	
	```JAVA
	public class TestModule extends WXModule
	```
	
 - 扩展方法必须加上@JSMethod (uiThread = false or true) 注解。Weex 会根据注解来判断当前方法是否要运行在 UI 线程，和当前方法是否是扩展方法。
 - Weex是根据反射来进行调用 Module 扩展方法，所以Module中的扩展方法必须是 public 类型。
	
	**示例:**
	
	```JAVA
	//run ui thread
    @JSMethod(uiThread = true)
    public void testAsyncFunc(JSONObject options, JSCallback callback) {
        Log.e(TAG, "testAsyncFunc--"+options);
        if(callback != null) {
            JSONObject data = new JSONObject();
            data.put("code", "success");
            callback.invoke(data);
        }
    }
	
	//run JS thread
    @JSMethod (uiThread = false)
    public JSONObject testSyncFunc(){
        JSONObject data = new JSONObject();
        data.put("code", "success");
        return data;
    }
	```
	
 - 同样因为是通过反射调用，Module 不能被混淆。请在混淆文件中添加代码：-keep public class * extends com.taobao.weex.common.WXModule{*;}
 - Module 扩展的方法可以使用 int, double, float, String, Map, List 类型的参数

### 3.注册TestModule

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
            WXSDKEngine.registerModule("TestModule", TestModule.class);
        } catch (WXException e) {
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



## 扩展组件 component 

下面以`TestComponent`为例，源码请查看 uni小程序SDK 包中的示例 DEMO 工程；

### 1.创建Android Studio的Module模块

请参考 扩展 Module

### 2.创建TestComponent类

 - Component 扩展类必须继承 WXComponent

	**示例:**
	
	```JAVA
	public class TestText extends WXComponent<TextView>
	```
 - WXComponent的initComponentHostView回调函数。构建Component的view时会触发此回调函数。
	
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
	
 - Component 对应的设置属性的方法必须添加注解 @WXComponentProp(name=value(value is attr or style of dsl))
	
	**示例:**
	
	```JAVA
	@WXComponentProp(name = "tel")
    public void setTel(String telNumber) {
        getHostView().setText("tel: " + telNumber);
    }
	```
	
 - Weex sdk 通过反射调用对应的方法，所以 Component 对应的属性方法必须是 public，并且不能被混淆。请在混淆文件中添加代码 -keep public class * extends com.taobao.weex.ui.component.WXComponent{*;}
 - Component 扩展的方法可以使用 int, double, float, String, Map, List 类型的参数
 - Component 自定义事件
	对于每个组件默认提供了一些事件能力，如点击等。也可以自定义事件。在uni小程序代码中，通过 @事件名="方法名" 添加事件，如下添加`onTel`事件
	
	```JAVA
	//原生触发fireEvent 自定义事件onTel
	Map<String, Object> params = new HashMap<>();
    Map<String, Object> number = new HashMap<>();
    number.put("tel", telNumber);
    //目前uni限制 参数需要放入到"detail"中 否则会被清理
    params.put("detail", number);
    fireEvent("onTel", params);
	
	```
	```Javascript
	//标签注册接收onTel事件
	<myText tel="12305" style="width:200;height:100" @onTel="onTel"></myText>
	//事件回调
	methods: {  
		onTel: (e)=> {
			console.log("onTel="+e.detail.tel);
		}
	}  
	```
	
### 3.注册TestComponent组件

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
            WXSDKEngine.registerComponent("myText", TestText.class);
        } catch (WXException e) {
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
