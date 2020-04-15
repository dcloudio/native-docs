## 一、文档概述
本文档主要介绍如何在uni-app中基于WeexSDK 开发iOS原生插件。

### 1.1、阅读对象

在您阅读此文档时，首先要知道uni-app支持weex插件，同时我们假定您已经具备了相应iOS应用开发经验，学习过 weex 知识并能够理解相关概念。此外,您也应该对HTML,JavaScript,CSS等有一定的了解,并且熟悉在JavaScript和Objective-C环境下的JSON格式数据操作等。

### 1.2、开发前准备

- OS X 10.14.0+
- Xcode 11.0+
- 学习weex 0.26.0版本框架API，[weex扩展API for iOS](https://weex.apache.org/zh/docs/api/ios-apis.html)
- 下载开发插件需要的SDK包 [最新版本的SDK包](http://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/103)，找到里面的HBuilder-uniPluginDemo文件夹，里面包含HBuilder-uniPlugin插件开发工程，后面会用到。
- 下载开发插件时会用到的js代码的开发工具HBuilderX（[下载地址](http://www.dcloud.io/hbuilderx.html)），下载哪个版本的HBuilderX需要注意下，保持和上条中提到的SDK包（在下载SDK包的下载界面中有版本相关的文字描述如下图），它提到的版本号一致。
- 确定SDK包里的Xcode工程HBuilder-uniPlugin内是否引用了SDK包里的liblibWeex.a库和weex-main-jsfm.js文件

## 二、 插件开发（以RichAlert插件为例）

### 2.1 创建插件工程
首先用Xcode创建静态.a库工程libWeexDCRichAlert 或（静态Framework工程），如何创建静态库工程请自行百度，下面提供了2个连接供参考。

[iOS如何制作.a库](https://www.jianshu.com/p/6a8277ccc1c4)<br>
[iOS如何制作静态Framework库](https://www.jianshu.com/p/f2bb038db637)

### 2.2 导入插件工程
在下载的工程包里找到HBuilder-uniPluginDemo文件夹，然后打开HBuilder-uniPlugin工程，把刚创建的静态库工程引入到HBuilder-uniPlugin工程，引入后的样子如下图所示，至于如何把静态库工程引入到HBuilder-uniPlugin工程里去，请自行百度，很简单的。

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/0bcff82004b2b62a0953b1c1018dcbfc.png" width="70%">

然后，修改libWeexDCRichAlert工程的iOS Deployment Target为8.0，如下图所示：

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191227/311b044cdeaf8f475f6a2e55778d52d7.png" width="70%">

然后，在静态库工程libWeexDCRichAlert的 Header Search Paths 中添加引用如下图所示：

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/57442e4f15cc9713c0b59ee5476f887d.png" width="70%">

然后，在HBuilder-uniPlugin工程的Link Binary With Libraries中添加libWeexDCRichAlert.a库；然后，在Target Dependencies 中,添加插件工程的libWeexDCRichAlert的targets，如下图所示：

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/141fe6617a42daed2bb88281b80e0290.png" width="70%">

### 2.3 配置插件信息
**配置需要注册的插件**，打开HBuilder-uniPlugin工程里的info.plist 文件 加入节点，需要严格按要求配置，如下图所示：

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/477d9e788cd882d1db4232f466aaadd8.png" width="70%">

其中，hooksClass的值是类名，是给有些插件需要在app启动时做初始化或者获取系统事件用的,如果没有可以不填为空；
		plugins下的每一项是weex扩展模块或组件能力相关的配置信息，里面包含name（填weex模块或组件类名对应的js层用到的字符串,js层中将通过该字符串来使用原生层的模块或组件），class（填weex模块或组件类名），type（填**module**或**component,一定不能配置错**），注意不支持weex的handler扩展。

### 2.4  代码实现
**开始具体代码开发，分三步**：其中第二步看情况（有需要在app启动时初始化或者获取系统事件用的，可以有第2步，如果没有则跳过这步）

  第一步，在静态库libWeexDCRichAlert工程里，新建模块类DCRichAlertModule，注意命名加前缀防止冲突（如何具体开发模块或组件请参考，[weex官方扩展iOS能力](https://weex.apache.org/zh/guide/extend/extend-ios.html#自定义-module)）

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/482ed2ae106406829d9a6a20477e0758.png" width="70%">

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/a630cd285f68722026f1dea992ab903b.png" width="70%">

  第二步，在静态库libWeexDCRichAlert工程里，新建DCRichAlertProxy类（注意命名加前缀防止冲突），继承 NSObject
遵守UniPluginProtocol协议 ，用来在app启动时初始化或者获取系统事件用的，这个类里尽量不要有其他的过多代码逻辑。如下图：

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/106bfc606ed393e2b6b2e0fa398bd066.png" width="70%">

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/3ba8992e2742a09ddacfd5dd4a1a3320.png" width="70%">

  第三步，用之前下载好的HBuilderX开发工具 新建uni-app项目，选择默认模版，然后在index.vue文件里面编写下面示例的js代码，也可以再创建一个.nvue文件编写下面示例的js代码。 **注意：后缀为.vue的文件只支持使用module（module也只支持异步方法不支持同步方法），不支持使用component，但是后缀为.nvue的文件两者都可以使用并且module同步异步都支持**。
  

### 示例
```
 引用方式
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');
 调用
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
							color: '#3F51B5'
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

然后运行导出，可以得到编译后的代码，

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181226/f91f7ef9f1a731d28eb28103ece40e7f.png" width="70%">

然后把这些代码考到HBuilder-uniPlugin工程的Pandora目录下的www目录下

如下图，其中红矩形框起来的，control.xml里的appid和目录的名称都是appid，是从HBuilderX开发工具中导出来的 资源包里的manifest.json的id，三者值需要一致

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20191120/bdaccddc7c255b926dec278ef5565678.png" width="70%">

## 三、本地调试插件的代码
  
然后就可以运行HBuilder-uniPlugin工程调试代码了，效果如下图所示：

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181226/45bbe1ef4ca7024bd59b5de39b75dde3.png" width="70%">

如果调试过程中遇到问题，可能是原生的问题也可能是js代码的问题，如果是原生的问题，直接修改原生代码就可以了，但是如果是js代码的问题，需要修改.nvue或.vue的代码这个时候就需要重新导出编译后的代码（编译导出代码有可能会报错，注意控制台的日志信息，千万不要把有问题的资源拿去调试），拷贝到HBuilder-uniPlugin工程的Pandora目录下的www目录下，**然后务必删除之前的app，再重新运行工程**。

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181226/0ff54444bc7dfe1ff5fdf8937c57b2b6.png" width="70%">

如果运行测试没任何问题，就可以进行下面的生成插件包的步骤了。
## 四、生成插件包

此步骤应该在您插件所有接口封装完毕，并在调试工程中测试完成后，再进行以下操作，说明中均以示例插件libWeexDCRichAlert为例进行的操作。在实际操作时,需将所有出现的libWeexDCRichAlert替换成您自己的插件名字,**而且在插件开发过程中给文件命名或类命名时提倡增加前缀，以避免和其它模块冲突**
如示例中插件类Module的类名是“DCRichAlertModule” ，其中“DC”就是前缀（作者标识）！
Module扩展和Component扩展在引用中的name 需要前缀加入你自己的标识，防止插件冲突。 
如示例中配置的name为“DCloud-RichAlert”，其中“DCloud”就是标识！

### 4.1 编译生成插件静态库.a文件
.a库必须是真机环境的，并且需要支持armv7和arm64架构，且Build Active Architecture Only设置为NO，您可以在终端用以下命令查看.a库支持的架构：
lipo -info libWeexDCRichAlert.a

### 4.2 编写package.json文件，按下列链接配置
[点击查看详细配置说明](https://ask.dcloud.net.cn/article/35414)
iOS平台 package.json 详细说明请查看这篇文档前面部分，会帮助您更好的理解如何配置 [https://ask.dcloud.net.cn/article/35764](https://ask.dcloud.net.cn/article/35764)

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190115/ac99d1d7e479520c382617f10df47738.png" width="70%">


iOS 插件包 至少需要包含：package.json文件  和 ios文件夹（名称必须是小写的ios）里面包含 .a （***.a库必须是lib开头命名***，比如libWeexDCRichAlert.a）或framework。

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181228/1d51166e5c3ea1d4a6fc10ef4ef85a0e.png" width="70%">

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20181228/c1c6f7a00519142961e2edb9cf87bef4.png" width="70%">

### 4.3 生成.zip包
 将DCloud-RichAlert文件夹打成zip包，zip包的名称为（DCloud-RichAlert.zip）然后准备提交插件市场，其中***DCloud-RichAlert文件夹名称和package.json 里id的值一致，zip包的名称是id值***。

## 五、如果想要共享给其他开发者，把这个插件提交插件市场

+ [提交插件到DCloud插件市场](https://ask.dcloud.net.cn/article/35426)

不提交插件市场，也可以把生成的插件放到HBuilderX里，然后提交[云端打包](https://ask.dcloud.net.cn/article/35844)使用，提交到云端打包之前确保插件在本地是调试通的，否则云端打包出问题，增加排查问题的难度。

<a id="isPlatformVersionAtLeast"/>
## 六、编写原生代码时注意事项
目前 **HBuilderX 正式版**云端打包机使用的**Xcode**版本为 **10.X**，**Xcode11.0** 及以上版本对`@available(, *)`的实现做了调整打包后的`.a`库不兼容低版本的**Xcode**， 所以如果使用**Xcode 11.0**及以上版本开发插件**并且**插件中代码用到了`@available(, *)`关键字请按下图修改，否则可能导致打包失败。报错 `Undefined symbols "___isPlatformVersionAtLeast"`
(使用 HBuilderX alpha 版本没有此问题，正式版云端打包机近期会更新到最新的**Xcode**版本)

<img src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190926/d9a215f40775408d5f08ee50ec758e41.jpg" width="70%">


## Tips

### 广告插件说明

由于官方 UniAD 广告组件集成了“广点通”和“穿山甲”SDK，目前不支持自行开发包含这两个SDK的原生插件，云打包会导致冲突；

### 获取 UIViewController

> 因为 uni 框架机制，module 的 weexInstance 没有绑定 viewController，故 `weexInstance.viewController` 值为 nil，如果想通过 UIViewController 来跳转页面可使用下面的方法获取 UIViewController**

```javascript
// 获取当前显示的 UIViewController
+ (UIViewController *)dc_findCurrentShowingViewController {
    //获得当前活动窗口的根视图
    UIViewController *vc = [UIApplication sharedApplication].keyWindow.rootViewController;
    UIViewController *currentShowingVC = [self findCurrentShowingViewControllerFrom:vc];
    return currentShowingVC;
}
+ (UIViewController *)findCurrentShowingViewControllerFrom:(UIViewController *)vc
{
    // 递归方法 Recursive method
    UIViewController *currentShowingVC;
    if ([vc presentedViewController]) {
        // 当前视图是被presented出来的
        UIViewController *nextRootVC = [vc presentedViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else if ([vc isKindOfClass:[UITabBarController class]]) {
        // 根视图为UITabBarController
        UIViewController *nextRootVC = [(UITabBarController *)vc selectedViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else if ([vc isKindOfClass:[UINavigationController class]]){
        // 根视图为UINavigationController
        UIViewController *nextRootVC = [(UINavigationController *)vc visibleViewController];
        currentShowingVC = [self findCurrentShowingViewControllerFrom:nextRootVC];
        
    } else {
        // 根视图为非导航类
        currentShowingVC = vc;
    }
    
    return currentShowingVC;
}
```


### 获取页面可访问图片资源存储路径 （vue页面需要注意，nvue页面不存这个问题）

> 有些插件可能需要返回本地的图片路径给页面来显示，如果页面是`vue`的话是使用 WKWebview 渲染，访问本地图片资源可能会存在跨域问题访问不到图片资源，所以需要将图片存放到指定路径下，按照下面的方法获取图片存储路径即可

**原生端实现**

```
// 引用头文件
#import "PDRCoreApp.h"
#import "PDRCoreAppManager.h"
#import "PDRCoreAppInfo.h"

// 获取路径信息
PDRCoreAppInfo *appinfo = [PDRCore Instance].appManager.getMainAppInfo;
// 将图片存储到 appinfo.documentPath 路径下即可，可以创建子目录；
// 示例，原生图片存储路径为
NSString *imgPath = [appinfo.documentPath stringByAppendingPathComponent:@"test.png"];
```

**js 端获取图片路径有两种方式**

```				
// 1.使用相对路径
var relativePath = "_doc/test.png"
				
// 2.使用平台的绝对路径
var docPath = plus.io.convertLocalFileSystemURL("_doc/");
var absolutePath = docPath + 'test.png'
```