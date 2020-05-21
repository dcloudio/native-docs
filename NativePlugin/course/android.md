## 开发者须知
在您阅读此文档时，我们假定您已经具备了相应Android应用开发经验，使用Android Studio开发过Android原生。学习过 weex 知识并能够理解相关概念，也应该对HTML,JavaScript,CSS等有一定的了解, 并且熟悉在JavaScript和JAVA环境下的JSON格式数据操作等。

## 开发环境 
- JAVA环境 jdk1.7+(最优1.8)
- Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
- App离线SDK下载：[最新android平台SDK下载](/AppDocs/download/android.md)

## 项目创建

**Tips:**如果已经创建了项目可以跳过创建步骤

打开Android studio新建一个空白项目

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_9.png" width=700>
	
选择 Empty Activity 点击 Next。

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_10.png" width=700>

Minimum API Level 建议选19及以上

package name作为应用标志，涉及申请第三方平台账号，一般情况下不建议修改，包名一般设置反向域名，如：io.dcloud.HBuilder
	
点击 Finish 完成创建。

**注意：暂时不支持Kotlin**

## 导入uni插件原生项目

- UniPlugin-Hello-AS工程请在[App离线SDK](/AppDocs/download/android.md)中查找
- 点击Android Studio菜单选项File--->New--->Import Project。

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_1.png" width=700>

- 导入选择UniPlugin-Hello-AS工程，点击OK! 等待工程导入完毕。

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_2.png" width=700>

- 如果出现Android SDK路径不对问题，请在Android Studio中鼠标右键UniPlugin-Hello-AS选择Open Module Settings, 在SDK Location 中设置相关环境路径

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3.png" width=700>

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_4.png" width=700>

**Tips**

工程gradle配置的gradle-4.6-all版本！使用的是新版本的依赖方式，如果您使用的是老版本的gradle。可根据以下链接进行修改依赖方式.[gradle新依赖方式与旧依赖方式的不同](https://blog.csdn.net/wangliblog/article/details/81366095)

## 插件开发

**Tips**

- 学习Weex扩展 Android 知识。目前集成了Weex 0.26.0版本！！！ 如果你之前开发的是老版本代码需要作升级代码操作。 [weex扩展API for android](http://weex.apache.org/cn/guide/extend-android.html)
- 特别注意uni-app插件目前仅支持Module扩展和Component扩展，暂时不支持Adapter扩展！！！

### 扩展 module

下面以TestModule为例，源码请查看 UniPlugin-Hello-AS(2.6.16+)工程中的`uniplugin_module`模块；

#### 创建Android Studio的Module模块

- 在现有Android项目中创建library的Module。例如`uniplugin_module`
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
	
#### 创建TestModule类

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
	
- 同样因为是通过反射调用，Module 不能被混淆。请在混淆文件中添加代码：

```
-keep public class * extends com.taobao.weex.common.WXModule{*;}
```
- Module 扩展的方法可以使用 int, double, float, String, Map, List 类型的参数

### 扩展组件 component 

下面以`TestComponent`为例，源码请查看 UniPlugin-Hello-AS(2.6.16+)工程中的`uniplugin_component`模块；

#### 创建Android Studio的Module模块

请参考 [扩展 Module](/NativePlugin/course/android?id=创建android-studio的module模块)

#### 创建TestComponent类

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
- Weex sdk 通过反射调用对应的方法，所以 Component 对应的属性方法必须是 public，并且不能被混淆。请在混淆文件中添加代码 
```
-keep public class * extends com.taobao.weex.ui.component.WXComponent{*;}
```
- Component 扩展的方法可以使用 int, double, float, String, Map, List 类型的参数
- Component定义组件方法.

 **示例:**
 + 在组件中如下声明一个组件方法
 ```JAVA
 @JSMethod
 public void clearTel() {
    getHostView().setText("");
 }
 ```
 + 注册组之后，你可以在weex 文件中调用
 
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

向JS环境发送一些事件，比如click事件

```
void fireEvent(elementRef,type)
void fireEvent(elementRef,type, data)
void fireEvent(elementRef,type,data,domChanges)
```

- `elementRef`(String)：产生事件的组件id
- `type`(String): 事件名称，weex默认事件名称格式为"onXXX",比如`OnPullDown`
- `data`(Map<String, Object>): 需要发送的一些额外数据，比如`click`时，view大小，点击坐标等等。
- `domChanges`(Map<String, Object>): 目标组件的属性和样式发生的修改内容

**示例:**

以myText标签为例， 通过 @事件名="方法名" 添加事件，如下添加`onTel`事件，源码请查看 UniPlugin-Hello-AS工程中的`uniplugin_component`模块

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
### JSCallback结果回调

JS调用时，有的场景需要返回一些数据，比如以下例子，返回x、y坐标
```
void invoke(Object data);
void invokeAndKeepAlive(Object data);
```
- `invoke`调用javascript回调方法，此方法将在调用后被销毁。
- `invokeAndKeepAlive` 调用javascript回调方法并保持回调活动以备以后使用。

**示例：**

```JAVA
@JSMethod(uiThread = true)
public void testAsyncFunc(JSONObject options, JSCallback callback) {
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

### globalEvent 事件

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
mWXSDKInstance.fireGlobalEventCallback("myEvent", params);
```

**注意**
globalEvent事件只能通过页面的WXSDKInstance实例给当前页面发送globalEvent事件。其他页面无法接受。


### 插件示例--RichAlert

封装了一个 RichAlertWXModule, 富文本alert弹窗Module

#### 代码可参考UniPlugin-Hello-AS工程中的uniplugin_richalert模块。（UniPlugin-Hello-AS工程请在App离线SDK中查找）

```JAVA
public class RichAlertWXModule extends WXSDKEngine.DestroyableModule {
	...
	@JSMethod(uiThread = true)
    public void show(JSONObject options, JSCallback jsCallback) {
        if (mWXSDKInstance.getContext() instanceof Activity) {
			...
			RichAlert richAlert = new RichAlert(mWXSDKInstance.getContext());
			...
			richAlert.show();
			...
		}
	}
	...
	...
	@JSMethod(uiThread = true)
    public void dismiss() {
        destroy();
    }

    @Override
    public void destroy() {
        if (alert != null && alert.isShowing()) {
            WXLogUtils.w("Dismiss the active dialog");
            alert.dismiss();
        }
    }
	
}
```

#### HBuilderX 项目中使用RichAlert示例

```JS
// require插件名称  
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');              
// 使用插件  
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

### 本地注册插件

以上两种方式选一即可

+ 第一种方式
 - 在UniPlugin-Hello-AS工程下 “app” Module根目录assets/dcloud_uniplugins.json文件。 在moudles节点下 添加你要注册的Module 或 Component

+ 第二种方式
 - 创建一个实体类并实现AppHookProxy接口，在onCreate函数中添加weex注册相关参数 或 填写插件需要在启动时初始化的逻辑。
 - 在UniPlugin-Hello-AS工程下 “app” Module根目录assets/dcloud_uniplugins.json文件，在hooksClass节点添加你创建实现AppHookProxy接口的实体类完整名称填入其中即可 (有些需要初始化操作的需求可以在此处添加逻辑，无特殊操作仅使用第一种方式注册即可无需集成AppHookProxy接口)
 
 ```JAVA
  public class RichAlert_AppProxy implements AppHookProxy {
  	@Override
  	public void onCreate(Application application) {
  		//可写初始化触发逻辑
  	}
  }
  ```

#### dcloud_uniplugins.json说明

- `nativePlugins`： 插件跟节点 可存放多个插件 
- `hooksClass`： 生命周期代理（实现AppHookProxy接口类）格式(完整包名加类名)
- `name` : 注册名称， 
- `class` : module 或 component 实体类完整名称  
- `type` : module 或 component类型。
	   
```JSON
{
	"nativePlugins": [
		{
		    "hooksClass": "uni.dcloud.io.uniplugin_richalert.apphooks",
		    "plugins": [
		    {
		        "type": "module",
		        "name": "DCloud-RichAlert",
		        "class": "uni.dcloud.io.uniplugin_richalert.RichAlertWXModule"
		    }
		    ]
		}
	]
}
```
			
### 集成uni-app项目测试插件

- 安装最新[HbuilderX](http://www.dcloud.io/hbuilderx.html) 大于等于1.4.0+

- 创建uni-app工程或在已有的uni-app工程编写相关的.nvue 和.vue文件。使用uni-app插件中的module 或 component。

- xxx.vue 示例代码（源码请参考UniPlugin-Hello-AS项目中`uniapp示例工程源码`文件夹的`unipluginDemo`工程）

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_5.png" width=700>

- 选择 发行--->原生APP-本地打包--->生成本地打包App资源 等待资源生成！

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_14.png" width=700>

- 在控制台会输出编译日志，编译成功会给出App资源路径

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_15.png" width=700>

- 把APP资源文件放入到UniPlugin-Hello-AS工程下 `app` Module根目录assets/apps/测试工程appid/www对应目录下,再修改assets/data/dcloud_control.xml!修改其中appid=“测试工程appid”!,测试工程UniPlugin-Hello-AS 已有相关配置可参考。具体可查看[App离线打包](/AppDocs/usesdk/android.md)。

- appid注意 一定要统一否则会导致应用无法正常运行！

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_16.png" width=700>

- 配置"app"Module下的 build.gradle. 在dependencies节点添加插件project引用 （以uniplugin_richalert为例）
	
```
// 添加uni-app插件
implementation project(':uniplugin_richalert')	
```
- 运行测试。测试运行时一切要以真机运行为主。

## 生成uni-app插件

+ 完整的android 插件包.ZIP包含：
	- android文件 里面存放XXX.aar 、libs文件夹。
		- .aar文件 插件包
		- libs文件夹 存放插件包依赖的第三方 .jar文件和.so文件 
	- package.json 插件信息
		- [点击查看具体说明](/NativePlugin/course/package.md) 

#### 准备相关文件

+ 创建已插件id命名的文件夹
+ 创建android文件夹。并将该文件夹放入到新建的插件id命名的文件夹中

**示例:**

```
|-- DCloud-RichAlert --->插件id命名的文件夹
   |-- android       --->安卓插件目录
```

+ 生成插件的aar并放入到android目录下
	+ 选择Gradle--->插件module--->Tasks--->build--->assembleRelease编译module的aar文件

	**注意：新版本Android studio将assembleRelease放入other中了**

	<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_17-2.png" width=650>

+ 创建[package.json](/NativePlugin/course/package.md)文件并填写必要的信息。放入到android目录下
+ 创建libs文件夹。并放入到android目录下
	+ 将插件依赖的jar文件放入到libs文件夹中
	+ 将插件依赖的.so文件放入到libs文件夹中
+ 将插件依赖的aar文件放入到插件android目录下

#### 生成uni插件压缩包

压缩插件id命名的文件夹为zip即可。具体目录机构如下：

- 一级目录以插件id命名，对应package.json中的id字段！ 存放android文件夹和package.json文件。

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_18.png" width=700>

- 二级目录 android 存放安卓插件 .aar 文件 .jar .so放入到libs下

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_19.png" width=700>

**注意：.os文件需要注意 armeabi-v7a、x86 、arm64-v8a以上三种类型的.so必须要有，如果没有无法正常使用！！**


## 提交插件市场

** 登录注册**[DCloud插件市场](http://ext.dcloud.net.cn/) 按提示步骤提交插件（需要编写对应插件的说明文档，md（markdown） 格式）

## [本地插件提交云端打包](/NativePlugin/use/use_local_plugin.md)

## 插件注意事项

#### 目前对weex支持的问题
+ Activity的获取方式。通过mWXSDKInstance.getContext()强转Activity。建议先instanceof Activity判断一下再强转
+ .vue暂时只能使用module形式。component还不支持在.vue下使用
+ component、module的生命周回调，暂时只支持onActivityDestroy 、onActivityPause、onActivityResult其他暂时不支持

**Tips** onActivityResume事件存在缺陷。应用第一次启动无法正常收到onActivityResume事件，后台切换到前台是可以收到的。

**示例:**

```
@Override
public void onActivityPause() {
    WXLogUtils.e(TAG, "onActivityPause");
}

@Override
public void onActivityResume() {
	WXLogUtils.e(TAG, "onActivityResume");
}
```

#### 第三方依赖库
+ 均要使用compileOnly依赖方式，打包时需要配置或挪动文件到相关文件夹中。 打包插件介绍时会有相关的具体描述！
+ 请参考[android平台所有依赖库列表](http://ask.dcloud.net.cn/article/35419), 编写自己插件时需要查看是否与编译的程序依赖有冲突，防止审核失败或编译失败等问题。
+ 对有些插件需要引用到.so文件，需要特殊配置一下.请参考[Android studio添加第三方库和so](https://blog.csdn.net/anhenzhufeng/article/details/78913341)
+ 代码中用到的JSONObject、JSONArray 要使用com.alibaba.fastjson.JSONArray;com.alibaba.fastjson.JSONObject; 不要使用org.json.JSONObject;org.json.JSONArray 否则造成参数无法正常传递使用等问题。
+ 尽量去下载相关的aar或jar，然后配置到插件包相应文件夹下。aar放到android目录下。jar放到libs目录下。如果不下载也可以。可使用compileOnly修饰，然后将相应的依赖库名称配置到package.json中的dependencies节点下。
+ 第三方库依赖冲突。一种是主app已完整集成相关第三方库。可使用用compileOnly修饰即可。如果主app仅集成了部分第三方库。可参考https://blog.csdn.net/wapchief/article/details/80514880
+ .os文件需要注意 armeabi-v7a、x86 、arm64-v8a以上三种类型的.so必须要有，如果没有无法正常使用！！
+ 插件中包含FileProvider云打包冲突，可通过http://ask.dcloud.net.cn/article/36105此贴配置绕过。
+ 插件中有资源路径返回时，请使用绝对路径file://开头防止不必要的路径转换问题。
+ androidx暂时不支持。请使用v4、v7实现插件。

#### 插件编写命名规范
+ 源代码的package中一定要作者标识防止与其他插件冲突导致插件审核失败，无法上传。
如示例中插件类的“package uni.dcloud.io.uniplugin_richalert;” “dcloud”就是作者标识！
+ Module扩展和Component扩展在引用中的name， 需要前缀加入你自己的标识，防止与其他插件名称冲突。 
如示例中的插件“DCloud-RichAlert”！“DCloud”就是标识！

#### 广告插件说明
+ 由于官方 UniAD 广告组件集成了“广点通”和“穿山甲”SDK，目前不支持自行开发包含这两个SDK的原生插件，云打包会导致冲突；

## 常见问题

Q:云打包后提示"XXX"插件不存在？
A:先确认打包时是否勾选了"XXX"插件。如果勾选了依然报错提示"XXX"插件不存在请联系客服沟通。

Q:插件中怎么跳转原生Activity页面
A:获取WXSDKInstance对象。该对象中可以获取到上下文.通过startActivity跳转

**示例**

```
@JSMethod (uiThread = true)
public void gotoNativePage(){
    if(mWXSDKInstance != null) {
        Intent intent = new Intent(mWXSDKInstance.getContext(), NativePageActivity.class);
        mWXSDKInstance.getContext().startActivity(intent);
    }
}
```

Q:插件跳转Activity页面后。Activity页面关闭后有数据需要返回。怎么能实现？
A:可以按以下步骤操作实现：
   * 在插件的WXModule/WXComponent实现onActivityResult方法。通过标识code和参数KEY去区分当前的Result是你需要的返回值
   
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
   * 通过startActivityForResult加上返回标识code跳转其他Activity页面。
   
   **示例**
   
   ```JAVA
   @JSMethod (uiThread = true)
    public void gotoNativePage(){
        if(mWXSDKInstance != null && mWXSDKInstance.getContext() instanceof Activity) {
            Intent intent = new Intent(mWXSDKInstance.getContext(), NativePageActivity.class);
            ((Activity)mWXSDKInstance.getContext()).startActivityForResult(intent, REQUEST_CODE);
        }
    }
   ```
   * Activity页面在关闭前调用setResult设置标识code将要返回的参数放进Intent中。
   
   **示例**
   
   ```JAVA
   Intent intent = new Intent();
   intent.putExtra("respond", "我是原生页面");
   setResult(TestModule.REQUEST_CODE, intent);
   finish();
   ```
Q:插件开发支持Androidx吗?
A:目前插件开发还不支持Androidx.请使用请使用v4、v7实现相关开发。




