### 设置系统状态栏样式背景

关于该设置的具体介绍和可取值参考该[文档](http://ask.dcloud.net.cn/article/33)

**以下两步缺一不可切记**

1.打开info.plist文件找到Statusbarstyle项目（没有该项按下图格式创建），在右侧的列表中选择对应值
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150204/c8ddcbd925ccd6851d1be156c976e159.png)

2.找到View controller-based status bar appearance项目(没有该项按下图格式创建)，选择NO

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150305/9fbb0eccb518802ff0a4786fc377010e.png)

### 设置系统状态栏背景颜色

关于该设置的具体介绍和可取值参考该[文档](http://ask.dcloud.net.cn/article/33)

打开info.plist文件找到StatusBarBackground项目(没有该项按下图格式创建)，在右侧填入对应值

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150204/46febdd3bf3fbdd13b081f230880e789.png)

### 设置应用沉浸式状态栏
关于该设置的具体介绍和可取值参考文档[iOS平台设置沉浸式状态栏显示效果](http://ask.dcloud.net.cn/article/118)

打开info.plist文件找到UIReserveStatusbarOffset项目(没有该项按下图格式创建)，在右侧选择对应值

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150204/3cf3382fac62b8a29e2e2ea47ca4ed5e.png)

### 设置应用是否启动时全屏

打开info.plist文件找到Status bar is initially hidden项目(没有该项按下图格式创建)，YES为全屏，NO非全屏在右侧选择对应值

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150226/853902f78d06ed734ca257386ca28f6d.png)

### 通过UrlSchemes与第三方应用相互调用

关于该设置的具体介绍可参考该[文档](http://ask.dcloud.net.cn/article/64)

打开info.plist文件找到URL types项目，按照下图格式添加scheme项目，红圈中输入urlidentifier，绿圈中输入scheme，
如果需要设置多个scheme，重复上边步骤

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150204/8cd3d42caa8a7c070fce2edc2a00121d.png)

### 后台音乐播放

在info.plist中找到Required background modes项目没有则按照下图格式建立，添加一项在弹出的列表中选择App plays audio or streams audio/video using AirPlay

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150204/3ad6447b3904d78404ca8b15f18afdba.png)

