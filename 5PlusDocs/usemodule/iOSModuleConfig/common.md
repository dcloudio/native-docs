## Feature模块配置
离线打包可以根据需要进行插件的增删，这个过程需要对工程做出修改。

目前插件需要修改的项目包含 LinkerFlags、 Library、Framework、资源文件、宏定义、info.plist文件几项。

并不是所有的插件都要修改以上几项，大部分插件只需要修改其中几项即可。

如果app中出现“缺失模块提醒框”，需要按照下面步骤添加相应的模块即可。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/50289.png)

### 每个插件需要修改哪些项目，每个项目需要配置的值是什么，可以查看SDK中的Feature-iOS.xls文件。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/50292.png)

## 具体修改方法：
###如何修改LinkerFlags配置
   按照下图找到Other Linker Flags 点击该项，在弹出的窗口中点击+可以添加flag 点击-可以删除flag
   ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1154.png)
   ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1218.png)

### 如何修改Library配置
   library为插件对应的库文件和依赖库， 目前离线打包工程包括所有的库，不需要修改

### 如何修改framework配置
 framework为插件依赖的系统库，按照下图找到framework的配置位置，点击+可以添加，选中framework点击-可以删除
 ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1156s.png)

### 如何添加删除文件
 资源为插件需要使用的资源如图片、国际化文件等， 点击File->addFile 在弹出的对话框中选择响应文件即可，
删除时在工程中选中该项目，点击delete键
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1155.png)

### 如何修改宏定义
   按照下图找到Macors，在弹出的窗口中点击+可以添加添加-可以删除
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1156.png)

