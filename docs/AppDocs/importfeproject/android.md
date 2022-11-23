## 导入资源
## Import resources

将app资源拷贝到项目assets->apps下，目录结构如下图
Copy the app resources to the project assets->apps, the directory structure is as shown below

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-8.png)

## 配置应用信息
## Configure application information

修改dcloud_control.xml中的appid为uni-app的id，确保dcloud_control.xml中的appid与manifest.json中的id与文件夹名一致，如下图所示：
Modify the appid in dcloud_control.xml to the id of uni-app, and ensure that the appid in dcloud_control.xml is consistent with the id in manifest.json and the folder name, as shown in the following figure:
		
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/5-9.png)

## 内置资源更新
## Built-in resource update

如果您更新了内置资源，重新运行App加载的还是旧的资源时请检查下面的配置：
If you have updated the built-in resources, please check the following configuration when re-running the app to load the old resources:

1. 内置的资源版本名称和版本号需要高于上一个版本；
1. The built-in resource version name and version number need to be higher than the previous version;

## 编译运行
## Compile and run

项目配置完成，直接点击android studio运行按钮即可。
After the project configuration is complete, just click the android studio run button.