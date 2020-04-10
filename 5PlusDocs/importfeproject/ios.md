## 准备工作
首先请确保 HBuilderX 的版本和离线 SDK 的版本号一致，如下2张图里的版本：如果版本不一致，app启动时会弹出版本不一致的提示框

查看 HBuilderX 版本号

![HBuilderX版本](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/gongbanbeny1.png)

SDK 下载页面有说明对应的 HBuilderX 版本

![sdk版本](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/gongbanbeny2.png)

## 生成本地打包 APP 资源

选择项目 -> 发行 -> 原生App-本地打包 -> 生成本地打包App资源

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/dao7.png)


## 将离线资源导入到原生工程

### ios平台
将离线资源拷贝到项目目录下的 `Pandora -> apps` 路径下

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/dao1.png)


##### 更新应用资源注意事项

App 首次启动后会将资源拷贝到应用沙盒路径中，然后从沙盒中读取资源，所以如果重新导入了离线资源直接运行读取的还是老的资源文件，需要在模拟器或设备删除应用后再重新运行即可更新资源；

#### 配置应用信息

打开 Xcode 工程目录下的control.xml文件，修改appid值：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/dao9.png)

- appid：值为`HBuilderX`应用的`appid`，必须与5+应用`manifest.json`中的`id`字段值（`uni-app`项目为`manifest.json`中的`appid`字段值）完全一致；

#### 编译运行
上面步骤都完成之后，便可以编译运行工程，如果跑起来的APP是自己想要的应用，说明配置都是正确的

### android平台

#### 将离线资源导入到原生工程
将资源拷贝到项目assets->apps下，目录结构如下图

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-8.png)

#### 配置应用信息

修改dcloud_control.xml中的appid为5+ app的id，确保dcloud_control.xml中的appid与manifest.json中的id与文件夹名一致，如下图所示：
		
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-9.png)

#### 运行

点击运行即可