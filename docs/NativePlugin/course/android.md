## 开发者须知
## Notes for Developers
在您阅读此文档时，我们假定您已经具备了相应Android应用开发经验，使用Android Studio开发过Android原生。也应该对HTML,JavaScript,CSS等有一定的了解, 并且熟悉在JavaScript和JAVA环境下的JSON格式数据操作等。
When you read this document, we assume that you already have corresponding Android application development experience, and have developed native Android using Android Studio. You should also have a certain understanding of HTML, JavaScript, CSS, etc., and be familiar with JSON format data operations in JavaScript and JAVA environments.

**为了插件开发者更方便快捷的开发uni原生插件！2.9.8版本起修改了uni插件开发API及规范。当然还会继续兼容老的插件运行及开发。推荐插件开发者按新版规范实现开发插件。方便日后更高效的更新迭代uni原生插件！**
**For plug-in developers to develop uni native plug-ins more conveniently and quickly! From version 2.9.8, the uni plug-in development API and specifications have been modified. Of course, it will continue to be compatible with old plug-in operation and development. Plug-in developers are recommended to implement and develop plug-ins according to the new specification. It is convenient to update and iterate uni native plug-ins more efficiently in the future! **

## 开发环境 
## Development environment
- JAVA环境 jdk1.8
- JAVA environment jdk1.8
- Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
- Android Studio download address: [Android Studio official website](https://developer.android.google.cn/studio/index.html) OR [Android Studio Chinese community] (http://www.android-studio.org/ )
- App离线SDK下载：请下载2.9.8+版本的[android平台SDK](/AppDocs/download/android.md)
- App offline SDK download: Please download the 2.9.8+ version [android platform SDK](/AppDocs/download/android.md)
- HBuilderX 下载地址：[官方下载地址](https://www.dcloud.io/hbuilderx.html)
- HBuilderX download address: [official download address](https://www.dcloud.io/hbuilderx.html)

#### 版本升级注意
#### Version upgrade note
- 插件目前暂时不支持Kotlin
- The plugin does not currently support Kotlin
- **gradle版本注意事项**
- **gradle version notes**
	+ HX3.0.0+版本云打包及相应版本SDK都将gradle版本4.6-all升级到6.5-all，tools.build:gradle版本3.2.1升级到4.1.1。
	+ For HX3.0.0+ version cloud packaging and the corresponding version of SDK, the gradle version 4.6-all is upgraded to 6.5-all, and tools.build:gradle version 3.2.1 is upgraded to 4.1.1.
		- 修复部分SDK集成后编译打包失败问题
		- Fixed the problem of compilation and packaging failure after part of the SDK integration
		- 适配android11的编译新特性。
		- Adapt to the new compilation features of android11.
		- 修复tools.build:gradle:3.2.1版本编译检测是否需要AndroidX依赖库不准确问题。**如果您的插件在HX3.0.0+版本编译报错需要AndroidX依赖库。那证明您之前集成的SDK是需要AndroidX的。请配置useAndroidX。**具体可查看[package.json](NativePlugin/course/package)
		- Fix the inaccurate problem of tools.build:gradle:3.2.1 version compilation detection whether AndroidX dependency library is required. **If your plug-in is compiled in HX3.0.0+ version and reports an error, it needs the AndroidX dependency library. That proves that the SDK you integrated before requires AndroidX. Please configure useAndroidX. **For details, see [package.json](NativePlugin/course/package)
		- 如果您下载的SDK是3.0.0+版本请将本地gradle版本升级到6.5-all，tools.build:gradle版本升级到4.1.1。防止编译报错等问题。如果遇到编译内存不足可能是关闭了R8混淆导致 需要开启。
		- If the SDK you downloaded is version 3.0.0+, please upgrade the local gradle version to 6.5-all, tools.build:gradle version to 4.1.1. Prevent compilation errors and other issues. If you encounter insufficient compilation memory, it may be that the R8 confusion is turned off and needs to be turned on.
		- **tools.build:gradle:4.1.1版本编译器可能无法适配老的插件原生编译。会导致之前的插件可能无法正常编译通过或编译完成apk无法正常使用！需要插件开发者尽快适配4.1.1的编译环境。**
		- **tools.build:gradle:4.1.1 version compiler may not be able to adapt to native compilation of old plugins. It will cause the previous plug-in to fail to compile normally or the compiled apk cannot be used normally! Plug-in developers are required to adapt to the 4.1.1 compilation environment as soon as possible. **
- **Activity变更为FragmentActivity注意事项**
- **Notes for changing Activity to FragmentActivity**
	+ HX3.0.7版本云打包及相应版本SDK开始将`Activity`变更为`FragmentActivity`.解决部分插件开发者需要加载Fragment的需求。但也带来了一些代码与之前不同的修改。需要注意以下问题：
	+ HX3.0.7 version cloud packaging and the corresponding version of SDK began to change `Activity` to `FragmentActivity`. Solve the needs of some plug-in developers to load Fragments. But it also brings some code changes that are different from before. Need to pay attention to the following issues:
		- requestPermissions需要限制requestCode的值域，之前`Activity`没有限制requestCode的值域。`FragmentActivity`的权限申请限制requestCode的值域不能为负值,也不能大于16位bit值65536。否则报异常或崩溃`Can only use lower 16 bits for requestCode`，强烈推荐使用0~60500之间取值。
		- requestPermissions needs to limit the value range of requestCode, before `Activity` did not limit the value range of requestCode. The permission application of `FragmentActivity` restricts the value range of requestCode to not be negative, nor greater than 16-bit bit value 65536. Otherwise, an exception or crash `Can only use lower 16 bits for requestCode` will be reported. It is strongly recommended to use a value between 0 and 60500.
- **HX3.1.6+开始 集成SDK需要将compileSdkVersion调高至29+**
- **HX3.1.6+ start to integrate SDK need to increase compileSdkVersion to 29+**
- **HX3.1.10版本起需要申请 Appkey(dcloud_appkey)，否则无法正常运行uniapp并调试插件,申请[参考](/AppDocs/usesdk/appkey.md)**
- **HX3.1.10 version needs to apply for Appkey(dcloud_appkey), otherwise uniapp cannot run normally and debug plugins, apply for [reference](/AppDocs/usesdk/appkey.md)**
- **HX3.2.5+版本开始改为Androidx依赖库。需注意！！项目需要默认配置useAndroidX=true**
- **HX3.2.5+ version began to change to Androidx dependency library. Attention! ! The project requires the default configuration useAndroidX=true**
- **HX3.2.13+版本开始 默认targetSdkVersion将由26改为28 插件开发者同学们需要注意！！如果你的插件不支持targetSdkVersion=28需要告知插件使用者！！21-11-19 更新**
- **HX3.2.13+ version, the default targetSdkVersion will be changed from 26 to 28. Plug-in developers should pay attention! ! If your plugin does not support targetSdkVersion=28, you need to inform the plugin user! ! Updated 21-11-19**

## 导入uni插件原生项目
## Import uni plugin native project

- UniPlugin-Hello-AS工程请在[App离线SDK](/AppDocs/download/android.md)中查找
- Please find the UniPlugin-Hello-AS project in [App Offline SDK](/AppDocs/download/android.md)
- 点击Android Studio菜单选项File--->New--->Import Project。
- Click on the Android Studio menu option File--->New--->Import Project.

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_1.png" width=700>

- 导入选择UniPlugin-Hello-AS工程，点击OK! 等待工程导入完毕。
- Import Select the UniPlugin-Hello-AS project, click OK! Wait for the project to be imported.

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_2.png" width=700>

- 如果出现Android SDK路径不对问题，请在Android Studio中鼠标右键UniPlugin-Hello-AS选择Open Module Settings, 在SDK Location 中设置相关环境路径
- If the Android SDK path is incorrect, please right-click UniPlugin-Hello-AS in Android Studio, select Open Module Settings, and set the relevant environment path in SDK Location

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3.png" width=700>

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_4.png" width=700>


## 插件开发
## Plugin development

可以根据自己的业务进行定制自己的功能。 主要分为两类扩展：
You can customize your own functions according to your own business. There are two main types of extensions:

+ Module 扩展 非 UI 的特定功能.
+ Module to extend non-UI specific functionality.

+ Component 扩展 实现特别功能的 Native 控件.
+ Component extension Native controls for special functions.

**Tips**

- 特别注意uni-app插件目前仅支持Module扩展和Component扩展，暂时不支持Adapter扩展！！！
- Pay special attention to the uni-app plug-in currently only supports Module extension and Component extension, and does not support Adapter extension for the time being! ! !

### 扩展 Module
### Extend Module
 
- Module 扩展 非 UI 的特定功能
- Module extends non-UI specific functionality
- Module 不支持代码通过 new Module的方式创建对象。无法正常使用！
- Module does not support code to create objects through new Module. Cannot be used normally!

下面以TestModule为例，源码请查看 UniPlugin-Hello-AS(2.9.8+)工程中的`uniplugin_module`模块；
Let's take TestModule as an example, please refer to the `uniplugin_module` module in the UniPlugin-Hello-AS(2.9.8+) project for the source code;

#### 创建Android Studio的Module模块
#### Create the Module module of Android Studio

- 在现有Android项目中创建library的Module。例如`uniplugin_module`
- Create a library module in an existing Android project. For example `uniplugin_module`
- 配置刚创建的Module的build.gradle信息。
- Configure the build.gradle information of the newly created Module.

**示例:**
**Example:**

```
//导入aar需要的配置
//Import the configuration required by aar
repositories {
	flatDir {
		dirs 'libs'
	}
}
dependencies {
	//必须添加的依赖
	// dependencies that must be added
	compileOnly 'androidx.recyclerview:recyclerview:1.0.0'
	compileOnly 'androidx.legacy:legacy-support-v4:1.0.0'
	compileOnly 'androidx.appcompat:appcompat:1.0.0'
	compileOnly 'com.alibaba:fastjson:1.1.46.android'

	compileOnly fileTree(include: ['uniapp-v8-release.aar'], dir: '../app/libs')
}
```

**Tips:**
	
uniapp-v8-release.aar是扩展module主要依赖库，必须导入此依赖库！
uniapp-v8-release.aar is the main dependency library of the extension module, which must be imported!
	
#### 创建TestModule类
#### Create TestModule class

- Module 扩展必须继承 UniModule 类
- Module extension must inherit UniModule class
 
**示例:**
**Example:**

```JAVA
public class TestModule extends UniModule
```

- 扩展方法必须加上@UniJSMethod (uiThread = false or true) 注解。UniApp 会根据注解来判断当前方法是否要运行在 UI 线程，和当前方法是否是扩展方法。
- The extension method must be annotated with @UniJSMethod (uiThread = false or true). UniApp will judge whether the current method should run on the UI thread according to the annotation, and whether the current method is an extension method.
- UniApp是根据反射来进行调用 Module 扩展方法，所以Module中的扩展方法必须是 public 类型。
- UniApp calls the Module extension method based on reflection, so the extension method in the Module must be of public type.
	
**示例:**
**Example:**
	
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
- Also because it is called through reflection, Module cannot be confused. Please add the code in the obfuscation file:

```
-keep public class * extends io.dcloud.feature.uniapp.common.UniModule{*;}
```

- Module 扩展的方法可以使用 int, double, float, String, Map, List ,com.alibaba.fastjson.JSONObject 类型的参数
- The methods extended by Module can use parameters of type int, double, float, String, Map, List , com.alibaba.fastjson.JSONObject

### 扩展组件 Component
### Extension Component Component

- Component 扩展 实现特别功能的 Native 控件
- Component extension to realize Native controls with special functions
- Component 不支持代码中 new Component 创建对象。无法正常使用！
- Component does not support new Component in the code to create objects. Cannot be used normally!

下面以`TestComponent`为例，源码请查看 UniPlugin-Hello-AS(2.9.8+)工程中的`uniplugin_component`模块；
Let's take `TestComponent` as an example, please refer to the `uniplugin_component` module in the UniPlugin-Hello-AS (2.9.8+) project for the source code;

#### 创建Android Studio的Module模块
#### Create the Module module of Android Studio

请参考 [扩展 Module](/NativePlugin/course/android?id=创建android-studio的module模块)
Please refer to [Extension Module](/NativePlugin/course/android?id=%E5%88%9B%E5%BB%BAandroid-studio%E7%9A%84module%E6%A8%A1%E5%9D%97)

#### 创建TestComponent类
#### Create TestComponent class

- Component 扩展类必须继承 UniComponent, 父容器Component(例如ViewGroup组件)则需要继承UniVContainer
- Component extension classes must inherit UniComponent, and parent container Components (such as ViewGroup components) need to inherit UniVContainer

**示例:**
**Example:**
	
```JAVA
public class TestText extends UniComponent<TextView>
```
- UniComponent的initComponentHostView回调函数。构建Component的view时会触发此回调函数。
- UniComponent's initComponentHostView callback function. This callback function will be triggered when the Component's view is constructed.
	
**示例:**
**Example:**
	
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
- The method of setting properties corresponding to Component must be annotated @UniComponentProp(name=value(value is attr or style of dsl))
	
**示例:**
**Example:**
	
```JAVA
@UniComponentProp(name = "tel")
public void setTel(String telNumber) {
    getHostView().setText("tel: " + telNumber);
}
```
- UniApp sdk 通过反射调用对应的方法，所以 Component 对应的属性方法必须是 public，并且不能被混淆。请在混淆文件中添加代码 
- UniApp sdk invokes the corresponding method through reflection, so the property method corresponding to Component must be public and cannot be confused. Please add the code in the obfuscation file
```
-keep public class * extends io.dcloud.feature.uniapp.ui.component.UniComponent{*;}
```
- Component 扩展的方法可以使用 int, double, float, String, Map, List , com.alibaba.fastjson.JSONObject类型的参数, 
- Component extension methods can use parameters of type int, double, float, String, Map, List , com.alibaba.fastjson.JSONObject,
- Component 定义组件方法.
- Component defines component methods.

 **示例:**
 **Example:**
 + 在组件中如下声明一个组件方法
 + Declare a component method in the component as follows
 ```JAVA
 @UniJSMethod
 public void clearTel() {
    getHostView().setText("");
 }
 ```
 + 注册组之后，你可以在nvue 文件中调用
 + After registering the group, you can call it in the nvue file
 
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
 
### component 自定义发送事件
### component custom send event

向JS环境发送一些事件，比如click事件
Send some events to the JS environment, such as click events

```
void fireEvent(elementRef,type)
void fireEvent(elementRef,type, data)
void fireEvent(elementRef,type,data,domChanges)
```

- `elementRef`(String)：产生事件的组件id
- `elementRef`(String): The id of the component that generated the event
- `type`(String): 事件名称，UniApp默认事件名称格式为"onXXX",比如`OnPullDown`
- `type`(String): event name, UniApp default event name format is "onXXX", such as `OnPullDown`
- `data`(Map<String, Object>): 需要发送的一些额外数据，比如`click`时，view大小，点击坐标等等。
- `data`(Map<String, Object>): Some additional data that needs to be sent, such as `click`, view size, click coordinates, etc.
- `domChanges`(Map<String, Object>): 目标组件的属性和样式发生的修改内容
- `domChanges`(Map<String, Object>): The modified content of the properties and styles of the target component

**示例:**
**Example:**

以myText标签为例， 通过 @事件名="方法名" 添加事件，如下添加`onTel`事件，源码请查看 UniPlugin-Hello-AS工程中的`uniplugin_component`模块
Take the myText tag as an example, add an event through @event name="method name", add the `onTel` event as follows, please refer to the `uniplugin_component` module in the UniPlugin-Hello-AS project for the source code

```JAVA
//原生触发fireEvent 自定义事件onTel
//native trigger fireEvent custom event onTel
Map<String, Object> params = new HashMap<>();
Map<String, Object> number = new HashMap<>();
number.put("tel", telNumber);
//目前uni限制 参数需要放入到"detail"中 否则会被清理
//Currently uni limit parameter needs to be put into "detail", otherwise it will be cleared
params.put("detail", number);
fireEvent("onTel", params);
```

```JS
//标签注册接收onTel事件
//Tag registration to receive onTel event
<myText tel="12305" style="width:200;height:100" @onTel="onTel"></myText>
//事件回调
//event callback
methods: {  
	onTel: (e)=> {
		console.log("onTel="+e.detail.tel);
	}
}  
```
### UniJSCallback结果回调
### UniJSCallback result callback

JS调用时，有的场景需要返回一些数据，比如以下例子，返回x、y坐标
When JS calls, some scenarios need to return some data, such as the following example, return x, y coordinates
```
void invoke(Object data);
void invokeAndKeepAlive(Object data);
```
- `invoke`调用javascript回调方法，此方法将在调用后被销毁。
- `invoke` calls the javascript callback method, this method will be destroyed after calling.
- `invokeAndKeepAlive` 调用javascript回调方法并保持回调活动以备以后使用。
- `invokeAndKeepAlive` invokes the javascript callback method and keeps the callback alive for later use.

**示例：**
**Example:**

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
**Notice**
	
执行自定义事件fireEvent时params的数据资源都要放入到"detail"中。如果没有将你得返回的数据放入"detail"中将可能丢失。请注意！！！
When executing the custom event fireEvent, the data resources of params must be put into "detail". If you don't put the data you have to return in "detail", it may be lost. caution! ! !

### globalEvent 事件
### globalEvent event

用于页面监听持久性事件，例如定位信息，陀螺仪等的变化。
Used for pages to monitor persistent events, such as changes in location information and gyroscopes.

**示例：**
**Example:**

页面监听event事件
The page listens to the event event

```JS
var globalEvent = uni.requireNativePlugin('globalEvent');
globalEvent.addEventListener('myEvent', function(e) {
  console.log('myEvent'+JSON.stringify(e));
});
```

插件 原生代码发出`myEvent`事件
Plugin Native code emits `myEvent` event

```JAVA
Map<String,Object> params=new HashMap<>();
params.put("key","value");
mUniSDKInstance.fireGlobalEventCallback("myEvent", params);
```

**注意**
**Notice**
globalEvent事件只能通过页面的UniSDKInstance实例给当前页面发送globalEvent事件。其他页面无法接受。
The globalEvent event can only be sent to the current page through the UniSDKInstance instance of the page. Other pages cannot be accepted.

### Module、Component扩展申请权限
### Module, Component extended application permissions

使用PermissionControler实现权限申请
Use PermissionControler to implement permission application

```JAVA
PermissionControler.requestPermissions(Activity, permissions, REQUEST_CODE);
```

UniModule、UniComponent都有onRequestPermissionsResult周期函数 实现并处理数据即可监听权限申请结果
Both UniModule and UniComponent have onRequestPermissionsResult periodic function to implement and process data to monitor permission application results

```JAVA
@Override
public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
	super.onRequestPermissionsResult(requestCode, permissions, grantResults);
}
```

**简单示例：**
**Simple example:**
```JAVA
import io.dcloud.common.core.permission.PermissionControler;
import android.Manifest;
...
...

public class TestModule extends UniModule {
    final int REQUEST_CODE = 11111;
    private static String[] permissions = new String[]{
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_COARSE_LOCATION
    };

    @UniJSMethod(uiThread = true)
    public void requestPermissions() {
        if(mUniSDKInstance.getContext() != null) {
            Activity activity = (Activity) mUniSDKInstance.getContext();
            PermissionControler.requestPermissions(activity, permissions, REQUEST_CODE);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if(requestCode == REQUEST_CODE) {
            for(int i= 0; i< permissions.length; i++) {
                String preName = permissions[i];
                int granted = grantResults[i];
                if(Manifest.permission.ACCESS_FINE_LOCATION.equals(preName) && granted == PackageManager.PERMISSION_GRANTED) {
                    //获取权限结果
                    //Get permission result
                }
            }
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
}
```

### 插件示例--RichAlert
### Plugin example --RichAlert

封装了一个 RichAlertModule, 富文本alert弹窗Module
Encapsulates a RichAlertModule, rich text alert popup module

#### 代码可参考UniPlugin-Hello-AS工程中的uniplugin_richalert模块。（UniPlugin-Hello-AS工程请在App离线SDK中查找）
#### The code can refer to the uniplugin_richalert module in the UniPlugin-Hello-AS project. (Please find the UniPlugin-Hello-AS project in App Offline SDK)

```JAVA
public class RichAlertModule extends UniDestroyableModule {
	...
	@UniJSMethod(uiThread = true)
    public void show(JSONObject options, UniJSCallback jsCallback) {
        if (mUniSDKInstance.getContext() instanceof Activity) {
			...
			RichAlert richAlert = new RichAlert(mUniSDKInstance.getContext());
			...
			richAlert.show();
			...
		}
	}
	...
	...
	@UniJSMethod(uiThread = true)
    public void dismiss() {
        destroy();
    }

    @Override
    public void destroy() {
        if (alert != null && alert.isShowing()) {
            UniLogUtils.w("Dismiss the active dialog");
            alert.dismiss();
        }
    }
	
}
```

#### HBuilderX 项目中使用RichAlert示例
#### Use RichAlert example in HBuilderX project

```JS
// require插件名称  
// require plugin name
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');              
// 使用插件  
// use the plugin
dcRichAlert.show({  
    position: 'bottom',  
    title: "提示信息",  
    titleColor: '#FF0000',  
    content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",  
    contentAlign: 'left',  
    checkBox: {  
        title: '不再提示',  
        isSelected: true  
    },  
    buttons: [{  
        title: '取消'  
    },  
    {  
        title: '否'  
    },  
    {  
        title: '确认',  
        titleColor: '#3F51B5'  
    }  
    ]  
}, result => {  
    switch (result.type) {  
        case 'button':  
            console.log("callback---button--" + result.index);  
            break;  
        case 'checkBox':  
            console.log("callback---checkBox--" + result.isSelected);  
            break;  
        case 'a':  
            console.log("callback---a--" + JSON.stringify(result));  
            break;  
        case 'backCancel':  
            console.log("callback---backCancel--");  
            break;  
   }  
});
```
	
## 插件调试
## Plugin debugging

### 本地注册插件
### Local registry plugin

以上两种方式选一即可
Choose one of the above two methods

+ 第一种方式
+ the first way
 - 在UniPlugin-Hello-AS工程下 “app” Module根目录assets/dcloud_uniplugins.json文件。 在moudles节点下 添加你要注册的Module 或 Component
 - The assets/dcloud_uniplugins.json file in the root directory of the "app" Module under the UniPlugin-Hello-AS project. Add the Module or Component you want to register under the moudles node

+ 第二种方式
+ the second way
 - 创建一个实体类并实现UniAppHookProxy接口，在onCreate函数中添加组件注册相关参数 或 填写插件需要在启动时初始化的逻辑。
 - Create an entity class and implement the UniAppHookProxy interface, add component registration related parameters in the onCreate function or fill in the logic that the plug-in needs to be initialized at startup.
 - 在UniPlugin-Hello-AS工程下 “app” Module根目录assets/dcloud_uniplugins.json文件，在hooksClass节点添加你创建实现UniAppHookProxy接口的实体类完整名称填入其中即可 (有些需要初始化操作的需求可以在此处添加逻辑，无特殊操作仅使用第一种方式注册即可无需集成UniAppHookProxy接口)
 - In the "app" Module root directory assets/dcloud_uniplugins.json file under the UniPlugin-Hello-AS project, add the full name of the entity class you created to implement the UniAppHookProxy interface in the hooksClass node and fill it in (some requirements that require initialization operations can be found in Add logic here, no special operations, just use the first method to register, no need to integrate the UniAppHookProxy interface)
 
 ```JAVA
  public class RichAlert_AppProxy implements UniAppHookProxy {
  	@Override
  	public void onCreate(Application application) {
  		//当前uni应用进程回调 仅触发一次 多进程不会触发
  		//Current uni application process callback only triggers once, multi-process will not trigger
		//可通过UniSDKEngine注册UniModule或者UniComponent
		//Can register UniModule or UniComponent through UniSDKEngine
  	}
	
	@Override
	public void onSubProcessCreate(Application application) {
		//其他子进程初始化回调 可用于初始化需要子进程初始化需要的逻辑
		//Other subprocess initialization callbacks can be used to initialize logic that requires subprocess initialization
	}
  }
  ```

#### dcloud_uniplugins.json说明
#### dcloud_uniplugins.json Description

- `nativePlugins`： 插件跟节点 可存放多个插件 
- `nativePlugins`: Plugins and nodes can store multiple plugins
- `hooksClass`： 生命周期代理（实现AppHookProxy接口类）格式(完整包名加类名)
- `hooksClass`: lifecycle proxy (implementing the AppHookProxy interface class) format (full package name plus class name)
- `plugins`: 插件数组
- `plugins`: array of plugins
- `name` : 注册名称
- `name` : name of the registry
- `class` : module 或 component 实体类完整名称  
- `class` : module or component entity class full name
- `type` : module 或 component类型。
- `type` : module or component type.
	   
```JSON
{
	"nativePlugins": [
		{
		    "hooksClass": "uni.dcloud.io.uniplugin_richalert.apphooks",
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
```

### uni-app项目中获取插件
### Get the plugin in the uni-app project

通过使用uni.requireNativePlugin获取插件对象。
Get the plugin object by using uni.requireNativePlugin.

```
const pluginImpl = uni.requireNativePlugin('插件 name')
```
			
### 集成uni-app项目测试插件
### Integrate uni-app project test plugin

- 安装最新[HbuilderX](http://www.dcloud.io/hbuilderx.html) 大于等于1.4.0+
- Install the latest [HbuilderX](http://www.dcloud.io/hbuilderx.html) greater than or equal to 1.4.0+

- 创建uni-app工程或在已有的uni-app工程编写相关的.nvue 和.vue文件。使用uni-app插件中的module 或 component。
- Create a uni-app project or write related .nvue and .vue files in an existing uni-app project. Use the module or component in the uni-app plugin.

- xxx.vue 示例代码（源码请参考UniPlugin-Hello-AS项目中`uniapp示例工程源码`文件夹的`unipluginDemo`工程，**导入示例工程时需要重新获取appid**）
- xxx.vue sample code (for the source code, please refer to the `unipluginDemo` project in the `uniapp sample project source code` folder in the UniPlugin-Hello-AS project, **you need to re-obtain the appid when importing the sample project**)

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_5.png" width=700>

- 选择 发行--->原生APP-本地打包--->生成本地打包App资源 等待资源生成！
- Select Publish--->Native APP-Local Packaging--->Generate Local Packaged App Resources and wait for the resources to be generated!

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_14.png" width=700>

- 在控制台会输出编译日志，编译成功会给出App资源路径
- The compilation log will be output on the console, and the App resource path will be given if the compilation is successful

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_15.png" width=700>

- 把APP资源文件放入到UniPlugin-Hello-AS工程下 `app` Module根目录assets/apps/测试工程appid/www对应目录下,再修改assets/data/dcloud_control.xml!修改其中appid=“测试工程appid”!,测试工程UniPlugin-Hello-AS 已有相关配置可参考。具体可查看[App离线打包](/AppDocs/usesdk/android.md)。
- Put the APP resource file into the UniPlugin-Hello-AS project `app` Module root directory assets/apps/test project appid/www corresponding directory, and then modify assets/data/dcloud_control.xml! Modify appid="test Project appid”!, the test project UniPlugin-Hello-AS has related configurations for reference. For details, see [App Offline Packaging](/AppDocs/usesdk/android.md).

- appid注意 一定要统一否则会导致应用无法正常运行！
- Appid attention must be unified, otherwise the application will not work properly!

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_16.png" width=700>

- 配置"app"Module下的 build.gradle. 在dependencies节点添加插件project引用 （以uniplugin_richalert为例）
- Configure build.gradle under the "app"Module. Add a plugin project reference to the dependencies node (take uniplugin_richalert as an example)
	
```
// 添加uni-app插件
// add uni-app plugin
implementation project(':uniplugin_richalert')	
```
- 运行测试。测试运行时一切要以真机运行为主。
- Run tests. When the test is running, everything should be based on the real machine.

## 生成uni-app插件
## Generate uni-app plugin

+ 完整的android 插件包.ZIP包含：
+ Complete android plugin package .ZIP contains:
	- android文件
	- android file
		- .aar文件 :  包括插件aar、插件所依赖的aar。
		- .aar file: including the plug-in aar and the aar that the plug-in depends on.
		- libs文件夹 :  存放插件包依赖的第三方 .jar文件和.so文件 
		- libs folder: store the third-party .jar files and .so files that the plug-in package depends on
	- package.json 插件信息
	- package.json plugin information
		- [点击查看具体说明](/NativePlugin/course/package.md) 
		- [Click to view detailed instructions](/NativePlugin/course/package.md)

#### 准备相关文件
#### Prepare related files

+ 创建以插件id命名的文件夹
+ 创建android文件夹。并将该文件夹放入到新建的插件id命名的文件夹中
+ Create android folder. And put the folder into the folder named by the newly created plugin id

**示例:**
**Example:**

```
|-- DCloud-RichAlert --->插件id命名的文件夹
   |-- android       --->安卓插件目录
	  |--libs
		 - xxx.jar    --->依赖的jar
		 - libxxx.so  --->依赖的so文件
	  - vendor.aar   --->依赖的aar
	  - unipluginRichAlert.aar --->插件module的aar
```
<img src="https://native-res.dcloud.net.cn/images/nativeplugin/android/nativeplugin_menu_introduce.png" width="650">

+ 生成插件的aar并放入到android目录下
+ Generate the aar of the plugin and put it into the android directory
	+ 选择Gradle--->插件module--->Tasks--->build或other--->assembleRelease编译module的aar文件
	+ Select Gradle--->plug-in module--->Tasks--->build or other--->assembleRelease to compile the aar file of the module

	**注意：新版本Android studio将assembleRelease放入other中了**
	**Note: The new version of Android studio puts assembleRelease in other**

	<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_17-2.png" width=650>

+ 创建[package.json](/NativePlugin/course/package.md)文件并填写必要的信息。放入到android目录下
+ Create a [package.json](/NativePlugin/course/package.md) file and fill in the necessary information. Put it in the android directory
+ 创建libs文件夹。并放入到android目录下
+ Create libs folder. And put it into the android directory
	+ 将插件依赖的jar文件放入到libs文件夹中
	+ Put the jar files that the plugin depends on into the libs folder
	+ 将插件依赖的.so文件放入到libs文件夹中
	+ Put the .so files that the plugin depends on into the libs folder
+ 将插件依赖的aar文件放入到插件android目录下
+ Put the aar file that the plug-in depends on into the plug-in android directory

**注意**
**Notice**

**目前发现部分同学将开发插件的uniapp-v8-release.aar、uniapp-release.aar放到了插件包libs中。导致冲突。切记不要放进libs里去！！！
**At present, it is found that some students have put the uniapp-v8-release.aar and uniapp-release.aar of the plug-in development into the plug-in package libs. lead to conflict. Remember not to put it in libs! ! !
插件所依赖的aar要放到android目录下。**
The aar that the plug-in depends on should be placed in the android directory. **

## 插件编写命名规范
## Plug-in writing naming convention
+ 源代码的package中一定要作者标识防止与其他插件冲突导致插件审核失败，无法上传。
+ The author's logo must be included in the package of the source code to prevent conflicts with other plug-ins, which will cause the plug-in audit to fail and cannot be uploaded.

	**如示例中插件类的“package uni.dcloud.io.uniplugin_richalert;” “dcloud”就是作者标识！**
	** For example, "package uni.dcloud.io.uniplugin_richalert;" of the plug-in class in the example "dcloud" is the author's logo! **

+ Module的注册命名首先必须要使用[id](/NativePlugin/course/package?id=id)为前缀。与[id](/NativePlugin/course/package?id=id)完全相同也可以！如果你的插件中可能存在多个Module就需要注意[id](/NativePlugin/course/package?id=id)为前缀的重要性。
+ The registration name of the Module must first use [id](/NativePlugin/course/package?id=id) as the prefix. Exactly the same as [id](/NativePlugin/course/package?id=id) works too! If there may be multiple modules in your plugin, you need to pay attention to the importance of prefixing [id](/NativePlugin/course/package?id=id).
+ Component的注册命名还没有严格要求。但开发者尽量使用[id](/NativePlugin/course/package?id=id)前缀。减少与其他插件的命名冲突导致插件无法正常运行。
+ Component registration naming is not strictly required. But developers try to use [id](/NativePlugin/course/package?id=id) prefix. Reduce naming conflicts with other plugins causing plugins not to function properly.

**Tips：**

`id`？请阅读[package.json](/NativePlugin/course/package.md)
`id`? Please read [package.json](/NativePlugin/course/package.md)

**示例：**
**Example:**
```
{
    "name": "插件名称",
    "id": "DCloud-RichAlert", // 插件标识
    "version": "插件版本号",
    "description": "插件描述信息",
    "_dp_type":"nativeplugin",
    "_dp_nativeplugin":{
        "android": {
            "plugins": [
                {
                    "type": "module",
                    "name": "DCloud-RichAlert_TestModule", //id为前缀
                    "class": "uni.dcloud.io.uniplugin_richalert.TestModule"
                },
                {
                    "type": "component",
                    "name": "DCloud-RichAlert_TestComponent",
                    "class": "uni.dcloud.io.uniplugin_richalert.TestComponent"
                }
            ]
        }
    }
	...
	...
```


#### 生成uni插件压缩包
#### Generate uni plugin compressed package

压缩插件id命名的文件夹为zip即可。具体目录机构如下：
The folder named by the compression plugin id can be zip. The specific directory organization is as follows:

- 一级目录以插件id命名，对应package.json中的id字段！ 存放android文件夹和package.json文件。
- The first-level directory is named after the plugin id, corresponding to the id field in package.json! Store the android folder and package.json file.

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_18.png" width=700>

- 二级目录 android 存放安卓插件 .aar 文件 .jar .so放入到libs下
- The secondary directory android stores the Android plug-in .aar file .jar .so and puts it under libs

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_19.png" width=700>

**注意：.os文件需要注意 armeabi-v7a、x86 、arm64-v8a以上三种类型的.so必须要有，如果没有无法正常使用！！**
**Note: .os files need to pay attention to armeabi-v7a, x86, arm64-v8a and above three types of .so must have, if not can not be used normally! ! **


## 提交插件市场
## Submit plugins to the marketplace

** 登录注册**[DCloud插件市场](http://ext.dcloud.net.cn/) 按提示步骤提交插件（需要编写对应插件的说明文档，md（markdown） 格式）
**Login and registration**[DCloud plug-in market](http://ext.dcloud.net.cn/) Submit the plug-in according to the prompt steps (you need to write the corresponding plug-in documentation, md (markdown) format)

## [本地插件提交云端打包](/NativePlugin/use/use_local_plugin.md)
## [Local plugin submitted for cloud packaging](/NativePlugin/use/use_local_plugin.md)

## 插件注意事项
## Plugin Considerations

#### 目前对UniApp支持的问题
#### Current issues with UniApp support
+ Activity的获取方式。通过mUniSDKInstance.getContext()强转Activity。建议先instanceof Activity判断一下再强转
+ How to get the Activity. Forcibly switch to Activity through mUniSDKInstance.getContext(). It is recommended to judge the instanceof Activity first and then force it
+ .vue暂时只能使用module形式。component还不支持在.vue下使用
+ .vue can only use the module form for the time being. Component does not yet support use under .vue
+ component、module的生命周回调，暂时只支持onActivityDestroy 、onActivityPause、onActivityResult其他暂时不支持
+ The life cycle callback of component and module only supports onActivityDestroy, onActivityPause, onActivityResult and others are temporarily not supported

**Tips** onActivityResume事件存在缺陷。应用第一次启动无法正常收到onActivityResume事件，后台切换到前台是可以收到的。
**Tips** The onActivityResume event is flawed. The onActivityResume event cannot be received normally when the app starts for the first time, but it can be received when the background is switched to the foreground.

**示例:**
**Example:**

```
@Override
public void onActivityPause() {
    UniLogUtils.e(TAG, "onActivityPause");
}

@Override
public void onActivityResume() {
	UniLogUtils.e(TAG, "onActivityResume");
}
```

#### 第三方依赖库
#### Third-party dependent library
+ 请参考[android平台所有依赖库列表](http://ask.dcloud.net.cn/article/35419), 编写自己插件时需要查看是否与编译的程序依赖有冲突，防止审核失败或编译失败等问题。
+ Please refer to [List of all dependent libraries on the android platform](http://ask.dcloud.net.cn/article/35419), when writing your own plug-in, you need to check whether there is a conflict with the compiled program dependencies to prevent audit failure or compilation failure And other issues.
+ 对有些插件需要引用到.so文件，需要特殊配置一下.请参考[Android studio添加第三方库和so](https://blog.csdn.net/anhenzhufeng/article/details/78913341)
+ Some plug-ins need to be referenced to .so files, which require special configuration. Please refer to [Android studio add third-party libraries and so](https://blog.csdn.net/anhenzhufeng/article/details/78913341)
+ 代码中用到的JSONObject、JSONArray 要使用com.alibaba.fastjson.JSONArray;com.alibaba.fastjson.JSONObject; 不要使用org.json.JSONObject;org.json.JSONArray 否则造成参数无法正常传递使用等问题。
+ JSONObject and JSONArray used in the code should use com.alibaba.fastjson.JSONArray; com.alibaba.fastjson.JSONObject; do not use org.json.JSONObject; org.json.JSONArray, otherwise it will cause problems such as parameters cannot be passed normally.
+ aar放到android目录下。jar放到libs目录下。也可使用compileOnly修饰，然后将相应的依赖库名称配置到package.json中的dependencies节点下。具体参考[package.json文档](NativePlugin/course/package?id=packagejson)
+ put aar in the android directory. jar into the libs directory. It can also be modified with compileOnly, and then configure the corresponding dependent library name under the dependencies node in package.json. For details, refer to [package.json document](NativePlugin/course/package?id=packagejson)
+ 第三方库依赖冲突。一种是主app已完整集成相关第三方库。可使用compileOnly修饰即可。如果主app仅集成了部分第三方库。可参考https://blog.csdn.net/wapchief/article/details/80514880
+ Third-party library dependency conflicts. One is that the main app has fully integrated related third-party libraries. It can be modified with compileOnly. If the main app only integrates some third-party libraries. Please refer to https://blog.csdn.net/wapchief/article/details/80514880
+ .os文件需要注意 armeabi-v7a必须存在，没有可能无法正常使用！其他cpu类型os库x86 、arm64-v8a、x86-64如有最好添加。
+ The .os file needs to be noted that armeabi-v7a must exist, otherwise it may not work properly! If there are other cpu type os libraries x86, arm64-v8a, x86-64, it is best to add them.
+ 插件中包含FileProvider云打包冲突，可通过http://ask.dcloud.net.cn/article/36105此贴配置绕过。
+ The plug-in contains FileProvider cloud packaging conflicts, which can be bypassed by configuring this post http://ask.dcloud.net.cn/article/36105.
+ 插件中有资源路径返回时，请使用绝对路径file://开头防止不必要的路径转换问题。
+ When there is a resource path returned in the plugin, please use the absolute path at the beginning of file:// to prevent unnecessary path conversion problems.


#### 广告插件说明
#### Advertisement plugin description
+ 由于官方 UniAD 广告组件集成了“广点通”和“穿山甲”SDK，目前不支持自行开发包含这两个SDK的原生插件，云打包会导致冲突；
+ Since the official UniAD advertising component integrates the "Guangdiantong" and "Pangolin" SDKs, it currently does not support self-developed native plug-ins containing these two SDKs, and cloud packaging will cause conflicts;

#### 插件混淆配置
#### Plugin confusion configuration

请将以下混淆配置信息添加到相应的原生插件proguard配置文件中即可。
Please add the following obfuscation configuration information to the corresponding native plug-in proguard configuration file.

```
-keep public class * extends io.dcloud.weex.AppHookProxy{*;}
-keep public class * extends io.dcloud.feature.uniapp.UniAppHookProxy{*;}
-keep public class * extends io.dcloud.feature.uniapp.common.UniModule{*;}
-keep public class * extends io.dcloud.feature.uniapp.ui.component.UniComponent{*;}
```

## 常见问题
## common problem

Q:云打包 运行插件提示"XXX"插件不存在？
Q: When running the plug-in in cloud packaging, it prompts that the "XXX" plug-in does not exist?

A:按以下步骤检测自己项目:
A: Follow the steps below to detect your own project:

1、请使用自定义基座测试自己插件。默认基座并不包含你的插件。
1、 Please use a custom base to test your own plug-in. The default dock does not contain your plugins.

2、确认打包时是否勾选了"XXX"插件。
2、 Confirm whether the "XXX" plug-in is checked when packaging.

3、查看插件配置`package.json`这也是多数同学容易犯错的地方。主要检查`class`配置的信息与插件中的aar是否匹配。
3、 Check the plug-in configuration `package.json` This is also where most students are prone to make mistakes. Mainly check whether the information configured by `class` matches the aar in the plug-in.

4、插件中依赖库没有添加到配置或者aar中。多数为离线工程没问题，云打包有问题！认真检查依赖库是否都包含在插件中。
4、 The dependent library in the plug-in is not added to the configuration or aar. There is no problem for most offline projects, but there is a problem with cloud packaging! Carefully check that all dependent libraries are included in the plugin.

5、以上都不能解决你的问题，请@客服
5、 None of the above can solve your problem, please @Customer Service

Q:插件中怎么跳转原生Activity页面
Q: How to jump to the native Activity page in the plug-in
A:获取UniSDKInstance对象。该对象中可以获取到上下文.通过startActivity跳转
A: Obtain the UniSDKInstance object. The context can be obtained in this object. Jump through startActivity

**示例**
**example**

```
@UniJSMethod (uiThread = true)
public void gotoNativePage(){
    if(mUniSDKInstance != null) {
        Intent intent = new Intent(mUniSDKInstance.getContext(), NativePageActivity.class);
        mUniSDKInstance.getContext().startActivity(intent);
    }
}
```

Q:插件跳转Activity页面后。Activity页面关闭后有数据需要返回。怎么能实现？
Q: After the plug-in jumps to the Activity page. There is data that needs to be returned after the Activity page is closed. How can it be achieved?
A:可以按以下步骤操作实现：
A: It can be realized by following the steps below:
   * 在插件的UniModule/UniComponent实现onActivityResult方法。通过标识code和参数KEY去区分当前的Result是你需要的返回值
   * Implement the onActivityResult method in the UniModule/UniComponent of the plug-in. By identifying the code and the parameter KEY to distinguish the current Result is the return value you need
   
   **示例**
   **example**
   
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
   * 通过startActivityForResult加上返回标识code跳转其他Activity页面。
   * Jump to other Activity pages through startActivityForResult plus return identification code.
   
   **示例**
   **example**
   
   ```JAVA
   @UniJSMethod (uiThread = true)
    public void gotoNativePage(){
        if(mUniSDKInstance != null && mUniSDKInstance.getContext() instanceof Activity) {
            Intent intent = new Intent(mUniSDKInstance.getContext(), NativePageActivity.class);
            ((Activity)mUniSDKInstance.getContext()).startActivityForResult(intent, REQUEST_CODE);
        }
    }
   ```
   * Activity页面在关闭前调用setResult设置标识code将要返回的参数放进Intent中。
   * Before the Activity page is closed, call setResult to set the identification code and put the parameters to be returned into the Intent.
   
   **示例**
   **example**
   
   ```JAVA
   Intent intent = new Intent();
   intent.putExtra("respond", "我是原生页面");
   setResult(TestModule.REQUEST_CODE, intent);
   finish();
   ```

Q:插件开发支持Androidx吗?
Q: Does plug-in development support Androidx?
A:设置useAndroidX = true 目前已知讯飞语音无法支持androidx配置不能兼容需要注意并提醒插件使用者。
A: Set useAndroidX = true At present, it is known that Xunfei Voice cannot support androidx configuration and is not compatible. Need to pay attention and remind plug-in users.

Q:component、module的生命周回调 不支持OnActivityCreate()，某些注册服务需要该事件注册怎么办。
Q: The life cycle callback of component and module does not support OnActivityCreate(), what should I do if some registered services need to register this event.
A:component可以在的构造函数中调用相关注册初始化服务等操作， module的构造无法获取到上下文。可能需要换一个思路。通过js调用相关初始化的函数。
A: A component can call related operations such as registration and initialization services in its constructor, and the construction of a module cannot obtain the context. It may be necessary to change the way of thinking. Call related initialization functions through js.

Q:打包发现集成的三方库与主APP集成的三方库有冲突。导致无法打包成功？
Q: The package found that the integrated three-party library conflicts with the three-party library integrated by the main APP. Can't be packaged successfully?

A:

 + 请尽量使用主APP集成的三方库去实现你的插件依赖集成。请告知使用该插件需要‘XXX’模块才可正常运行。版本号可[查看](https://ask.dcloud.net.cn/article/35419)
 + Please try to use the three-party library integrated with the main APP to realize your plug-in dependency integration. Please inform that using this plugin requires the 'XXX' module to function properly. The version number can be [view](https://ask.dcloud.net.cn/article/35419)
 + 如果集成的三方库无法使用主APP集成的三方库。请告知插件使用者不要集成‘XXX’模块。防止打包失败。
 + If the integrated third-party library cannot use the third-party library integrated with the main APP. Please inform plugin users not to integrate 'XXX' modules. Prevent packaging failures.
 
Q：HX3.0.0+版本云打包编译之前插件无法编译通过。HX2.9.8版本云打包是可以的。
Q: The plug-in cannot be compiled before HX3.0.0+ version cloud packaging and compilation. HX2.9.8 version cloud packaging is possible.
 
A:

 + 请检查一下之前编译插件的配置`build.gradle`文件。检测是否使用`api files(xxx.aar)`引入某些依赖库aar文件。如果有这样的配置请改为使用compileOnly 修饰。否则无法在3.0.0+编译通过。主要原因就是资源冲突。 `api files(xxx.aar)`这种玩法是错误的。
 + Please check the configuration `build.gradle` file for compiling the plugin before. Detect whether to use `api files(xxx.aar)` to introduce some dependent library aar files. If there is such a configuration, please use compileOnly modification instead. Otherwise, it cannot be compiled in 3.0.0+. The main reason is resource conflict. `api files(xxx.aar)` is wrong.
 + 检查一下自己插件aar中的`classes.jar`文件。使用压缩工具查看一下`classes.jar`里的文件是否存在资源文件。如`AndroidManifest.xml`、`res`等资源文件需要删除。否则无法在3.0.0+编译通过。
 + Check the `classes.jar` file in your plugin aar. Use a compression tool to check whether there are resource files in the files in `classes.jar`. Resource files such as `AndroidManifest.xml`, `res` need to be deleted. Otherwise, it cannot be compiled in 3.0.0+.

Q：插件SDK部分需要在Application初始化。目前在AppHookProxy中onCreate初始化无效
Q: The plug-in SDK part needs to be initialized in Application. Currently onCreate initialization is invalid in AppHookProxy

A: 请使用UniAppHookProxy接口(此处注意!不是AppHookProxy是UniAppHookProxy) 有onSubProcessCreate子进程初始化回调。将SDK需要在Application初始化的代码onCreate和onSubProcessCreate都放一份就可以了。
A: Please use the UniAppHookProxy interface (note here! Not AppHookProxy but UniAppHookProxy) with onSubProcessCreate subprocess initialization callback. Just put a copy of the code onCreate and onSubProcessCreate that the SDK needs to initialize in the Application.

Q：插件可以重写Application吗？
Q: Can plug-ins rewrite Application?

A：不支持。重写Application存在很多安全隐患。
A: Not supported. There are many security risks in rewriting Application.

Q：插件生产文件路径需要注意哪些？
Q: What should be paid attention to in the plug-in production file path?

A:
 
+ 插件生成的路径尽量添加`file://`防止路径被转换导致无法正确获取文件
+ Try to add `file://` to the path generated by the plug-in to prevent the path from being converted and the file cannot be obtained correctly
+ 尽量将文件放到`/storage/emulated/0/Android/data/$应用的包名$/apps/$uniapp的appid$/doc/`目录下
+ Try to put the file in `/storage/emulated/0/Android/data/$application package name$/apps/$uniapp's appid$/doc/`directory

Q: 如何查看如何查看uniapp console日志
Q: How to view How to view the uniapp console log

A:修改项目中assets/data/dcloud_control.xml 内部信息。将syncDebug改为true，开启调试模式。 注意正式版需要改为false!!!  查看log.TAG为console
A: Modify the internal information of assets/data/dcloud_control.xml in the project. Change syncDebug to true to enable debug mode. Note that the official version needs to be changed to false!!! View log.TAG as console