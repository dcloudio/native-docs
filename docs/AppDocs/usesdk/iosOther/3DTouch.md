Apple最新发布的iPhone 6s (plus) 设备支持3D touch功能，用户可通过重按屏幕上的图标，打开设置的菜单。H5+ SDK已经支持添加应用的快捷菜单，显示效果如下：
Apple's latest iPhone 6s (plus) device supports 3D touch function, and users can open the setting menu by pressing the icon on the screen again. The H5+ SDK already supports the shortcut menu of adding applications, and the display effect is as follows:

![](https://ask.dcloud.net.cn/uploads/article/20151029/108bbd09e1614af36bdb14976f09b586.png)

### 离线工程配置的方法
### Offline project configuration method
打开离线打包工程的info.plist文件，在文件中添加UIApplicationShortcutItems节点，并在节点下添加item。
Open the info.plist file of the offline packaging project, add the UIApplicationShortcutItems node in the file, and add item under the node.

![](https://ask.dcloud.net.cn/uploads/article/20151029/b266f27aa4a93d13d1c02bc8e4daa252.jpg)

**各字段值规范如下表**
**The specification of each field value is as follows**

各值的关系请参考上图
Please refer to the figure above for the relationship between each value

| 节点名        | 节点类型 | 可选性 |    节点说明     | 备注     |
| Node Name | Node Type | Optional | Node Description | Remarks |
|: -------------:|:-------------:|:---------:| ------------- |:-------------:|
| UIApplicationShortcutItems | Array | 必选 | 图标快捷菜单节点声明 | |
| UIApplicationShortcutItems | Array | Mandatory | Icon shortcut menu node declaration | |
| UIApplicationShortcutItemType | String      | 必选 | 菜单类型 | |
| UIApplicationShortcutItemType | String | Required | Menu type | |
| UIApplicationShortcutItemTitle    | String |    必选 |    菜单项的标题    | |
| UIApplicationShortcutItemTitle | String | Required | The title of the menu item | |
| UIApplicationShortcutItemSubtitle    | String |    可选    |菜单项的副标题    | |
| UIApplicationShortcutItemSubtitle | String | Optional | The subtitle of the menu item | |
| UIApplicationShortcutItemIconFile    | String |    可选     |指定菜单项显示安装包内自带的图标，相对安装包的根目录位置 |    与UIApplicationShortcutItemIconType节点同时配置时优先级高于UIApplicationShortcutItemIconType|
| UIApplicationShortcutItemIconFile | String | optional |The specified menu item displays the icon in the installation package, relative to the root directory of the installation package | When configured with UIApplicationShortcutItemIconType node at the same time, the priority is higher than UIApplicationShortcutItemIconType|
| UIApplicationShortcutItemIconType    | String |    可选 |    指定菜单项显示系统自带图标    | 取值可参考[苹果官方文档](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class/index.html#//apple_ref/c/tdef/UIApplicationShortcutIconType)|
| UIApplicationShortcutItemIconType | String | Optional | Specifies the menu item to display the system's own icon | For the value, please refer to [Apple's official documentation](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class /index.html#//apple_ref/c/tdef/UIApplicationShortcutIconType)|
| UIApplicationShortcutItemUserInfo    | String |    可选     |用户自定义的菜单项附加信息    | 附带信息可在应用内通过plus.runtime.arguments获取 |
| UIApplicationShortcutItemUserInfo | String | Optional |Additional information of user-defined menu items | Additional information can be obtained in the application via plus.runtime.arguments |


### App中处理快捷菜单项
### Handle shortcut menu items in App
请参考文档[iOS平台支持3D Touch快捷菜单项](http://ask.dcloud.net.cn/article/424)
Please refer to the document [iOS platform supports 3D Touch shortcut menu items](http://ask.dcloud.net.cn/article/424)
