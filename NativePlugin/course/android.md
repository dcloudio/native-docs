## 开发者须知
在您阅读此文档时，我们假定您已经具备了相应Android应用开发经验，使用Android Studio开发过Android原生。学习过 weex 知识并能够理解相关概念。您也应该对HTML,JavaScript,CSS等有一定的了解, 并且熟悉在JavaScript和JAVA环境下的JSON格式数据操作等。

## 开发环境 
- JAVA环境 jdk1.7+(最优1.8)
- Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
- 5+SDK下载：[最新android平台SDK下载](http://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/103)

## 导入uni插件AndroidStudio工程项目

- UniPlugin-Hello-AS工程请在[5+SDK](http://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/103)中查找
- 点击Android Studio菜单选项File--->New--->Import Project。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_1.png)
- 导入选择UniPlugin-Hello-AS工程，点击OK! 等待工程导入完毕。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_2.png)
- 如果出现Android SDK路径不对问题，请在Android Studio中鼠标右键UniPlugin-Hello-AS选择Open Module Settings, 在SDK Location 中设置相关环境路径

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_4.png)

**Tips**

工程gradle配置的gradle-4.6-all版本！使用的是新版本的依赖方式，如果您使用的是老版本的gradle。可根据以下链接进行修改依赖方式.[gradle新依赖方式与旧依赖方式的不同](https://blog.csdn.net/wangliblog/article/details/81366095)

## 插件开发

**Tips**

- 学习Weex扩展 Android 知识。目前集成了Weex 0.26.0版本！！！ 如果你之前开发的是老版本代码需要作升级代码操作。 [weex扩展API for android](http://weex.apache.org/cn/guide/extend-android.html)
- 特别注意uni-app插件目前仅支持Module扩展和Component扩展，暂时不支持Adapter扩展！！！

### 扩展 module
下面以TestModule为例，源码请查看 UniPlugin-Hello-AS工程中的`uniplugin_module`模块；

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

下面以`TestComponent`为例，源码请查看 UniPlugin-Hello-AS工程中的`uniplugin_component`模块；

#### 创建Android Studio的Module模块

请参考 扩展 Module

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
- Weex sdk 通过反射调用对应的方法，所以 Component 对应的属性方法必须是 public，并且不能被混淆。请在混淆文件中添加代码 -keep public class * extends com.taobao.weex.ui.component.WXComponent{*;}
- Component 扩展的方法可以使用 int, double, float, String, Map, List 类型的参数
 
- Component 自定义事件

对于每个组件默认提供了一些事件能力，如点击等。也可以自定义事件。在uni小程序代码中，通过 @事件名="方法名" 添加事件，如下添加`onTel`事件

**示例:**

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

#### 目前对weex支持的问题
+ Activity的获取方式。通过mWXSDKInstance.getContext()强转Activity。建议先instanceof Activity判断一下再强转
+ .vue暂时只能使用module形式。component还不支持在.vue下使用
+ .vue下暂时不支持调用JS同步方法，.nvue可以使用。component的使用可参考weex写法**
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_9.png)
+ component、module的生命周回调，暂时只支持onActivityDestroy 、onActivityResume 、onActivityPause、onActivityResult其他暂时不支持

#### 第三方依赖库
+ 均要使用compileOnly依赖方式，打包时需要配置或挪动文件到相关文件夹中。 打包插件介绍时会有相关的具体描述！
+ 请参考[android平台所有依赖库列表](http://ask.dcloud.net.cn/article/35419), 编写自己插件时需要查看是否与编译的程序依赖有冲突，防止审核失败或编译失败等问题。
+ 对有些插件需要引用到.so文件，需要特殊配置一下.请参考[Android studio添加第三方库和so](https://blog.csdn.net/anhenzhufeng/article/details/78913341)
+ 代码中用到的JSONObject、JSONArray 要使用com.alibaba.fastjson.JSONArray;com.alibaba.fastjson.JSONObject; 不要使用org.json.JSONObject;org.json.JSONArray 否则造成参数无法正常传递使用等问题。

#### 插件编写命名规范
+ 源代码的package中一定要作者标识防止与其他插件冲突导致插件审核失败，无法上传。
如示例中插件类的“package uni.dcloud.io.uniplugin_richalert;” “dcloud”就是作者标识！
+ Module扩展和Component扩展在引用中的name， 需要前缀加入你自己的标识，防止与其他插件名称冲突。 
如示例中的插件“DCloud-RichAlert”！“DCloud”就是标识！
			
## 本地调试测试插件并运用到uni-app中
* 本地注册插件
	+ 第一种方式
		- 在UniPlugin-Hello-AS工程下 “app” Module根目录assets/dcloud_uniplugins.json文件。 在moudles节点下 添加你要注册的Module 或 Component
    + 第二种方式
	    - 创建一个实体类并实现AppHookProxy接口，在onCreate函数中添加weex注册相关参数 或 填写插件需要在启动时初始化的逻辑。
		- 在UniPlugin-Hello-AS工程下 “app” Module根目录assets/dcloud_uniplugins.json文件，在hooksClass节点添加你创建实现AppHookProxy接口的实体类完整名称填入其中即可 (有些需要初始化操作的需求可以在此处添加逻辑，无特殊操作仅使用第一种方式注册即可无需集成AppHookProxy接口)
	 	- 具体写法如图：
		![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_10.png)
	以上两种方式选一即可
	+ dcloud_uniplugins.json说明:
	   - nativePlugins： 插件跟节点 可存放多个插件 
	   - hooksClass： 生命周期代理（实现AppHookProxy接口类）格式(完整包名加类名)
	   - name : 注册名称， 
	   - class : module 或 component 实体类完整名称  
	   - type : module 或 component类型。
	   
		```
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
			
### 本地测试运行带有插件的uni-app
	- 安装最新[HbuilderX](http://www.dcloud.io/hbuilderx.html) 大于等于1.4.0.xxxxxx
	- 创建uni-app工程或在已有的uni-app工程编写相关的.nvue 和.vue文件。使用uni-app插件中的module 或 component。
	- xxx.vue 示例代码（RichAlert为示例）
	    ```
	    <template>
	        <view>
		        <button @click="showRichAlert">
			        点击弹出RichAlert
		        </button>
	        </view>
        </template>
        <script>
            // require插件名称
	        const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');
	        export default {
		        methods: {
		            showRichAlert() {
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
						    }]
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
		            }
		        }
	        }
        </script>

	    ```
	- 选择 发行--->原生APP-本地打包--->生成本地打包App资源 等待资源生成！
        [attach]30046[/attach]
    - 在控制台会输出编译日志，编译成功会给出App资源路径
        [attach]30047[/attach]
	- 把APP资源文件放入到UniPlugin-Hello-AS工程下 “app” Module根目录assets/apps/测试工程appid/www对应目录下,再修改assets/data/dcloud_control.xml!修改其中appid=“测试工程appid”!,测试工程UniPlugin-Hello-AS 已有相关配置可参考。具体可查看[离线打包](https://ask.dcloud.net.cn/article/508)。
	- appid注意 一定要统一否则会导致应用无法正常运行！
       [attach]30042[/attach]
	- 配置"app"Module下的 build.gradle. 在dependencies节点添加插件project引用 （以uniplugin_richalert为例）
	
		```
		// 添加uni-app插件
    	implementation project(':uniplugin_richalert')	
		```
	- 运行测试。测试运行时一切要以真机运行为主。

## 六、打包uni-app插件
+ 选择Gradle--->插件module--->Tasks--->build--->assembleRelease编译module的aar文件
**注意：新版本Android studio将assembleRelease放入other中了**
[attach]30080[/attach]
+ 将编译依赖库文件或仓储代码放入libs目录下或配置到package.json中
+ 在[package.json](https://ask.dcloud.net.cn/article/35414)填写必要的信息
+ 完整的android 插件包包含：
	- android文件 里面存放XXX.aar 、libs文件夹。
		- .aar文件 插件包
		- libs文件夹 存放插件包依赖的第三方 .jar文件和.so文件 
	- package.json 插件信息
		- [点击查看具体说明](https://ask.dcloud.net.cn/article/35414) 
+ 生成提交插件市场的.ZIP包
	- 一级目录以插件id命名，对应package.json中的id字段！ 存放android文件夹和package.json文件。
	[attach]29283[/attach]
	- 二级目录 android 存放安卓插件 .aar 文件 .jar .so放入到libs下
        [attach]29284[/attach]
- **注意：.os文件需要注意 armeabi-v7a、x86 、arm64-v8a以上三种类型的.so必须要有，如果没有无法正常使用！！**
+ [本地uni-app原生插件提交云端打包](https://ask.dcloud.net.cn/article/35844)


## 七、如果想要共享给其他开发者，把这个插件提交插件市场

+ [提交插件到DCloud插件市场](https://ask.dcloud.net.cn/article/35426)

不提交插件市场，也可以在HBuilderX里提交云端打包。

## 关于第三方库引用问题：
+ 尽量去下载相关的aar或jar，然后配置到插件包相应文件夹下。aar放到android目录下。jar放到libs目录下。如果不下载也可以。可使用compileOnly修饰，然后将相应的依赖库名称配置到package.json中的dependencies节点下。

+ 第三方库依赖冲突。一种是主app已完整集成相关第三方库。可使用用compileOnly修饰即可。如果主app仅集成了部分第三方库。可参考https://blog.csdn.net/wapchief/article/details/80514880

+ .os文件需要注意 armeabi-v7a、x86 、arm64-v8a以上三种类型的.so必须要有，如果没有无法正常使用！！

+ 插件中包含FileProvider云打包冲突，可通过http://ask.dcloud.net.cn/article/36105此贴配置绕过。

+ 插件中有资源路径返回时，请使用绝对路径file://开头防止不必要的路径转换问题。

+ 关于androidx暂时不支持。请使用v4、v7实现插件。

## uni-app原生插件使用常见问题
[原生插件使用常见问题](https://ask.dcloud.net.cn/article/35427)


**iOS原生插件开发参考：[https://ask.dcloud.net.cn/article/35415](https://ask.dcloud.net.cn/article/35415)**
更多uni-app原生插件文档参考：[uni-app原生插件开发指南](https://ask.dcloud.net.cn/article/35428)