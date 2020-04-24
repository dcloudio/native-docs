Apple最新发布的iPhone 6s (plus) 设备支持3D touch功能，用户可通过重按屏幕上的图标，打开设置的菜单。H5+ SDK已经支持添加应用的快捷菜单，显示效果如下：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20151029/108bbd09e1614af36bdb14976f09b586.png)

### 离线工程配置的方法
打开离线打包工程的info.plist文件，在文件中添加UIApplicationShortcutItems节点，并在节点下添加item。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20151029/b266f27aa4a93d13d1c02bc8e4daa252.jpg)

**各字段值规范如下表**

各值的关系请参考上图

| 节点名        | 节点类型 | 可选性 |    节点说明     | 备注     |
|: -------------:|:-------------:|:---------:| ------------- |:-------------:|
| UIApplicationShortcutItems | Array | 必选 | 图标快捷菜单节点声明 | |
| UIApplicationShortcutItemType | String      | 必选 | 菜单类型 | |
| UIApplicationShortcutItemTitle    | String |    必选 |    菜单项的标题    | |
| UIApplicationShortcutItemSubtitle    | String |    可选    |菜单项的副标题    | |
| UIApplicationShortcutItemIconFile    | String |    可选     |指定菜单项显示安装包内自带的图标，相对安装包的根目录位置 |    与UIApplicationShortcutItemIconType节点同时配置时优先级高于UIApplicationShortcutItemIconType|
| UIApplicationShortcutItemIconType    | String |    可选 |    指定菜单项显示系统自带图标    | 取值可参考[苹果官方文档](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class/index.html#//apple_ref/c/tdef/UIApplicationShortcutIconType)|
| UIApplicationShortcutItemUserInfo    | String |    可选     |用户自定义的菜单项附加信息    | 附带信息可在应用内通过plus.runtime.arguments获取 |


### App中处理快捷菜单项
请参考文档[iOS平台支持3D Touch快捷菜单项](http://ask.dcloud.net.cn/article/424)
