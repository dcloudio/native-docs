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

### 拷贝资源

将资源拷贝到项目assets->apps下，目录结构如下图

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-8.png)

### 配置应用信息

修改dcloud_control.xml中的appid为5+ app的id，确保dcloud_control.xml中的appid与manifest.json中的id与文件夹名一致，如下图所示：
		
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-9.png)

### 运行

点击运行即可