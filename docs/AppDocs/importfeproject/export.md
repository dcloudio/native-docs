## 准备工作
## Preparation
首先请确保uni-app编译器的版本号和离线 SDK 的版本号一致。如果版本不一致，app启动时会[弹出版本不一致的提示框](https://ask.dcloud.net.cn/article/35627)
First, please make sure that the version number of the uni-app compiler is consistent with that of the offline SDK. If the versions are inconsistent, [a prompt box with inconsistent versions will pop up] when the app starts (https://ask.dcloud.net.cn/article/35627)

### 查看uni-app编译器版本号
### View the version number of the uni-app compiler

#### 通过 HBuilderX 可视化界面创建的项目
#### Projects created through the HBuilderX visual interface

![HBuilderX版本](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/gongbanbeny1.png)
![HBuilderX version](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/gongbanbeny1.png)

#### 通过vue-cli命令行创建的项目
#### Projects created through the vue-cli command line

通过命令行 cd 到项目的根目录，执行 `npm run info`
cd to the root directory of the project through the command line, execute `npm run info`

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-16.png)

### 查看 SDK 版本号
### View the SDK version number

SDK 下载页面有说明对应的版本号
The SDK download page has a description of the corresponding version number

![sdk版本](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/gongbanbeny2.png)
![sdk version](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/gongbanbeny2.png)

## 生成本地打包 APP 资源
## Generate local packaged APP resources
### 通过 HBuilderX 可视化界面创建的项目
### Projects created through the HBuilderX visual interface

选择项目 -> 发行 -> 原生App-本地打包 -> 生成本地打包App资源
Select Project -> Release -> Native App-Local Packaging -> Generate Local Packaged App Resources

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/dao7.png)

### 通过vue-cli命令行创建的项目
### Projects created through the vue-cli command line

通过命令行 cd 到项目根目录，执行 `npm run build:app-plus`，会在 项目目录/dist/build/app-plus 下生成app打包资源。
Use the command line to cd to the project root directory, execute `npm run build:app-plus`, and the app packaging resource will be generated under the project directory /dist/build/app-plus.

新建一个文件夹，以 manifest.json 中的 appid 字段为文件名，然后在文件夹中创建一个 www 目录，将 app-plus 文件夹下的资源拷贝到 www 目录中。
Create a new folder, use the appid field in manifest.json as the file name, then create a www directory in the folder, and copy the resources under the app-plus folder to the www directory.

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-17.png)

如果 manifest.json 中的 appid 字段为空，需要将项目拖进 HBuilderX 中重新获取一个 appid。**注意：appid不能随便填写，必须重新获取。**
If the appid field in manifest.json is empty, you need to drag the project into HBuilderX to get an appid again. **Note: The appid cannot be filled casually and must be obtained again. **

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-18.png)