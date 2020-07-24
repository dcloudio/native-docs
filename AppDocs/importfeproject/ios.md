## 导入资源
将本地打包App资源拷贝到项目目录下的 `Pandora -> apps` 路径下

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/dao1.png)

## 配置应用信息

打开 Xcode 工程目录下的control.xml文件，修改appid值：
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190424/f16ec2cf192ebd5a8fa653b444771841.png)

- appid：值为`HBuilderX`应用的`appid`，必须与5+应用`manifest.json`中的`id`字段值（`uni-app`项目为`manifest.json`中的`appid`字段值）完全一致；

## 内置资源更新

如果您更新了内置资源，重新运行App加载的还是旧的资源时请检查下面的配置：

1. 工程 Bundle Identifier 已经改成您自己的；
2. 内置的资源版本名称和版本号需要高于上一个版本；
3. control.xml 中 debug 改成 false

## 编译运行
上面步骤都完成之后，便可以编译运行工程，如果跑起来的APP是自己想要的应用，说明配置都是正确的
