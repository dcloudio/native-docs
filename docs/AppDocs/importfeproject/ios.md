## 导入资源
## Import resources
将本地打包App资源拷贝到项目目录下的 `Pandora -> apps` 路径下
Copy the local packaged App resources to the `Pandora -> apps` path in the project directory

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/dao1.png)

## 配置应用信息
## Configure application information

打开 Xcode 工程目录下的control.xml文件，修改appid值：
![](https://ask.dcloud.net.cn/uploads/article/20190424/f16ec2cf192ebd5a8fa653b444771841.png)

- appid：值为`HBuilderX`应用的`appid`，必须与5+应用`manifest.json`中的`id`字段值（`uni-app`项目为`manifest.json`中的`appid`字段值）完全一致；
- appid: The value is the `appid` of the `HBuilderX` application, which must be the same as the `id` field value in the `manifest.json` of 5+ applications (the `uni-app` item is the `appid` field in the `manifest.json` value) exactly the same;

## 内置资源更新
## Built-in resource update

如果您更新了内置资源，重新运行App加载的还是旧的资源时请检查下面的配置：
If you have updated the built-in resources, please check the following configuration when re-running the app to load the old resources:

1. 工程 Bundle Identifier 已经改成您自己的；
1. The project Bundle Identifier has been changed to your own;
2. 内置的资源版本名称和版本号需要高于上一个版本；
2. The built-in resource version name and version number need to be higher than the previous version;
3. control.xml 中 debug 改成 false
3. Change debug to false in control.xml

## 编译运行
## Compile and run
上面步骤都完成之后，便可以编译运行工程，如果跑起来的APP是自己想要的应用，说明配置都是正确的
After the above steps are completed, you can compile and run the project. If the running APP is the application you want, it means that the configuration is correct.
