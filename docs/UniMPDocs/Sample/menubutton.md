## 概念
## concept
胶囊按钮即小程序页面导航栏右侧的按钮，包含`···`菜单按钮和`X`关闭按钮，如下图所示：
The capsule button is the button on the right side of the navigation bar of the applet page, including the `···` menu button and the `X` close button, as shown in the following figure:
> 目前胶囊按钮的样式不支持修改，框架默认会根据导航栏的颜色自适应胶囊按钮的颜色，不过您可以隐藏默认的胶囊按钮，然后自定义实现
> Currently, the style of the capsule button does not support modification. The framework will adapt the color of the capsule button according to the color of the navigation bar by default, but you can hide the default capsule button and customize the implementation

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt1.png" width=35%>

## 自定义菜单项
## Custom menu items
点击胶囊按钮左侧的`···`按钮会弹出`ActionSheet`菜单，菜单中的按钮支持自定义，其中上部分的按钮是在小程序中定义，下部分的按钮在宿主中定义，取消按钮为框架默认添加，如下图所示：
Click the `···` button on the left side of the capsule button to pop up the `ActionSheet` menu. The buttons in the menu support customization. The buttons in the upper part are defined in the applet, the buttons in the lower part are defined in the host, and the cancel button It is added by default for the framework, as shown in the following figure:

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt2.png" width=35%>

### 宿主中添加菜单按钮
### Add a menu button to the host

宿主添加的菜单按钮在每个页面都会显示
The menu button added by the host will be displayed on every page

#### iOS 添加方法
#### iOS add method

```objective-c
// 创建按钮
// create button
DCUniMPMenuActionSheetItem *item1 = [[DCUniMPMenuActionSheetItem alloc] initWithTitle:@"Item 1" identifier:@"item1"];
DCUniMPMenuActionSheetItem *item2 = [[DCUniMPMenuActionSheetItem alloc] initWithTitle:@"Item 2" identifier:@"item2"];
// 添加到全局配置
// Add to global configuration
[DCUniMPSDKEngine setDefaultMenuItems:@[item1,item2]];
```

点击按钮会回调 `DCUniMPSDKEngineDelegate`协议的 `defaultMenuItemClicked:`方法
Clicking the button will call back the `defaultMenuItemClicked:` method of the `DCUniMPSDKEngineDelegate` protocol

```objective-c
/// 监听菜单按钮点击
/// Listen for menu button clicks
- (void)defaultMenuItemClicked:(NSString *)identifier {
    NSLog(@"标识为 %@ 的 item 被点击了", identifier);
    
    // 向小程序发送消息
    // Send a message to the applet
    if ([identifier isEqualToString:@"SendUniMPEvent"]) {
        [DCUniMPSDKEngine sendUniMPEvent:@"NativeEvent" data:@{@"msg":@"native message"}];
    }
}
```

#### Android 添加方法
#### Android add method

DCSDKInitConfig设置[setMenuActionSheetItems](/UniMPDocs/API/android?id=类menuactionsheetitem)实现全局菜单按钮设置. 
DCSDKInitConfig sets [setMenuActionSheetItems](/UniMPDocs/API/android?id=%E7%B1%BBmenuactionsheetitem) to implement global menu button settings.

```JAVA
MenuActionSheetItem item = new MenuActionSheetItem("关于", "gy");
List<MenuActionSheetItem> sheetItems = new ArrayList<>();
sheetItems.add(item);
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
	// 添加到全局配置
	// Add to global configuration
    .setMenuActionSheetItems(sheetItems)
    .build();
```

设置全局菜单按钮点击事件监听
Set global menu button click event listener

```JAVA
DCUniMPSDK.getInstance().setDefMenuButtonClickCallBack(new DCUniMPSDK.IMenuButtonClickCallBack() {
    @Override
    public void onClick(String appid, String id) {
        switch (id) {
            case "gy":{
                Log.e("unimp", "点击了关于" + appid);
                break;
            }
        }
    }
});
```

### 小程序中添加菜单按钮
### Add a menu button to the applet

在小程序中可以单独为某个页面添加菜单按钮，打开`pages.json`，在页面的 `style->app-plus->titleNView->buttons`节点下添加配置，`pages.json` 的更多配置说明请参考此 [文档](https://uniapp.dcloud.io/collocation/pages?id=app-plus)
In the applet, you can add a menu button for a page separately, open `pages.json`, add configuration under the `style->app-plus->titleNView->buttons` node of the page, and change `pages.json` For multi-configuration instructions, please refer to this [document](https://uniapp.dcloud.io/collocation/pages?id=app-plus)

```
{
	"pages": [ 
		{
			"path": "pages/tabBar/component/component",
			"style": {
				"navigationBarTitleText": "内置组件",
				"app-plus": {
					"bounce": "vertical",
					"titleNView": {
						"buttons": [{
							"text": "\ue534",  
							"title":"关于", 	  //注意：title 为 uni小程序中显示的按钮标题，如果没有设置则显示 text 字段
							"fontSrc": "/static/uni.ttf",
							"fontSize": "22px",
							"color": "#FFFFFF"
						}]
					}
				}
			}
		},
		...
	],
	...
}
```

按钮点击后会在小程序中触发`onNavigationBarButtonTap(e)`方法
After the button is clicked, the `onNavigationBarButtonTap(e)` method will be triggered in the applet

```javascript
// 监听按钮点击事件
// Listen for button click events
onNavigationBarButtonTap(e) {
	console.log(e)
}
```

## 隐藏胶囊按钮
## hide capsule button
uni小程序默认会显示胶囊按钮，您可以将其隐藏（目前只支持全局隐藏，不支持单个页面隐藏）
The uni applet will display the capsule button by default, and you can hide it (currently only supports global hiding, not individual page hiding)

### iOS 隐藏胶囊按钮
### iOS hide capsule button

```objective-c
[DCUniMPSDKEngine setMenuButtonHidden:YES];
```

### Android 隐藏胶囊按钮
### Android hide capsule button

DCSDKInitConfig设置[setCapsule](/UniMPDocs/API/android?id=setcapsule)实现隐藏
DCSDKInitConfig set [setCapsule](/UniMPDocs/API/android?id=setcapsule) to hide

```JAVA
DCSDKInitConfig config = new DCSDKInitConfig.Builder()
    .setCapsule(false).build();
```

需要注意，如果您隐藏了胶囊按钮，原生中添加的菜单按钮就会无效，小程序中添加的菜单按钮会显示到页面导航栏上并且显示的是`text`字段配置信息（和在HX内置基座运行效果一样）如下图所示
It should be noted that if you hide the capsule button, the menu button added in the native program will be invalid, and the menu button added in the applet will be displayed on the page navigation bar and display the `text` field configuration information (and the HX built-in base seat operation effect is the same) as shown in the figure below

<img src="https://img.cdn.aliyun.dcloud.net.cn/nativedocs/mt3.png" width=35%>

