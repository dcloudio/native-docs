## 准备工作
首先请确保uni-app编译器的版本号和离线 SDK 的版本号一致。如果版本不一致，app启动时会[弹出版本不一致的提示框](https://ask.dcloud.net.cn/article/35627)

### 查看uni-app编译器版本号

#### 通过 HBuilderX 可视化界面创建的项目

![HBuilderX版本](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/gongbanbeny1.png)

#### 通过vue-cli命令行创建的项目

通过命令行 cd 到项目的根目录，执行 `npm run info`

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-16.png)

### 查看 SDK 版本号

SDK 下载页面有说明对应的版本号

![sdk版本](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/gongbanbeny2.png)

## 生成本地打包 APP 资源
### 通过 HBuilderX 可视化界面创建的项目

选择项目 -> 发行 -> 原生App-本地打包 -> 生成本地打包App资源

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/dao7.png)

### 通过vue-cli命令行创建的项目

通过命令行 cd 到项目根目录，执行 `npm run build:app-plus`，会在 项目目录/dist/build/app-plus 下生成app打包资源。

新建一个文件夹，以 manifest.json 中的 appid 字段为文件名，然后在文件夹中创建一个 www 目录，将 app-plus 文件夹下的资源拷贝到 www 目录中。

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-17.png)

如果 manifest.json 中的 appid 字段为空，需要将项目拖进 HBuilderX 中重新获取一个 appid。**注意：appid不能随便填写，必须重新获取。**

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-18.png)