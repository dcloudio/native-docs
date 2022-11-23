### 设置系统状态栏样式背景
### Set the system status bar style background

关于该设置的具体介绍和可取值参考该[文档](http://ask.dcloud.net.cn/article/33)
For the specific introduction and possible values of this setting, refer to this [document](http://ask.dcloud.net.cn/article/33)

**以下两步缺一不可切记**
**The following two steps are indispensable**

1.打开info.plist文件找到Statusbarstyle项目（没有该项按下图格式创建），在右侧的列表中选择对应值
![](https://ask.dcloud.net.cn/uploads/article/20150204/c8ddcbd925ccd6851d1be156c976e159.png)

2.找到View controller-based status bar appearance项目(没有该项按下图格式创建)，选择NO
2. Find the View controller-based status bar appearance item (if there is no such item, create it in the format shown in the figure below), and select NO

![](https://ask.dcloud.net.cn/uploads/article/20150305/9fbb0eccb518802ff0a4786fc377010e.png)

### 设置系统状态栏背景颜色
### Set the background color of the system status bar

关于该设置的具体介绍和可取值参考该[文档](http://ask.dcloud.net.cn/article/33)
For the specific introduction and possible values of this setting, refer to this [document](http://ask.dcloud.net.cn/article/33)

打开info.plist文件找到StatusBarBackground项目(没有该项按下图格式创建)，在右侧填入对应值
Open the info.plist file and find the StatusBarBackground item (if there is no such item, create it in the format shown in the figure below), and fill in the corresponding value on the right

![](https://ask.dcloud.net.cn/uploads/article/20150204/46febdd3bf3fbdd13b081f230880e789.png)

### 设置应用沉浸式状态栏
### Set the application immersive status bar
关于该设置的具体介绍和可取值参考文档[iOS平台设置沉浸式状态栏显示效果](http://ask.dcloud.net.cn/article/118)
For the specific introduction and possible values of this setting, refer to the document [iOS platform setting immersive status bar display effect](http://ask.dcloud.net.cn/article/118)

打开info.plist文件找到UIReserveStatusbarOffset项目(没有该项按下图格式创建)，在右侧选择对应值
Open the info.plist file and find the UIReserveStatusbarOffset item (if there is no such item, create it in the format shown in the figure below), and select the corresponding value on the right

![](https://ask.dcloud.net.cn/uploads/article/20150204/3cf3382fac62b8a29e2e2ea47ca4ed5e.png)

### 设置应用是否启动时全屏
### Set whether the application is full screen when it starts

打开info.plist文件找到Status bar is initially hidden项目(没有该项按下图格式创建)，YES为全屏，NO非全屏在右侧选择对应值
Open the info.plist file and find the Status bar is initially hidden item (if there is no such item, create it in the format shown in the figure below), YES means full screen, NO non-full screen select the corresponding value on the right

![](https://ask.dcloud.net.cn/uploads/article/20150226/853902f78d06ed734ca257386ca28f6d.png)

### 通过UrlSchemes与第三方应用相互调用
### Call each other with third-party applications through UrlSchemes

关于该设置的具体介绍可参考该[文档](http://ask.dcloud.net.cn/article/64)
For a detailed introduction to this setting, please refer to this [document](http://ask.dcloud.net.cn/article/64)

打开info.plist文件找到URL types项目，按照下图格式添加scheme项目，红圈中输入urlidentifier，绿圈中输入scheme，
Open the info.plist file to find the URL types item, add the scheme item according to the format shown in the figure below, enter urlidentifier in the red circle, and enter scheme in the green circle.
如果需要设置多个scheme，重复上边步骤
If you need to set multiple schemes, repeat the above steps

![](https://ask.dcloud.net.cn/uploads/article/20150204/8cd3d42caa8a7c070fce2edc2a00121d.png)

### 后台音乐播放
### background music playing

在info.plist中找到Required background modes项目没有则按照下图格式建立，添加一项在弹出的列表中选择App plays audio or streams audio/video using AirPlay
Find the Required background modes item in info.plist. If there is no item, create it according to the format shown in the figure below. Add an item and select App plays audio or streams audio/video using AirPlay in the pop-up list.

![](https://ask.dcloud.net.cn/uploads/article/20150204/3ad6447b3904d78404ca8b15f18afdba.png)

