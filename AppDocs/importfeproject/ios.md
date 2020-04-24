## 导入资源
将本地打包App资源拷贝到项目目录下的 `Pandora -> apps` 路径下

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ImportResources/dao1.png)

**注意：蓝色的Pandora目录为folder references引入方式，App 首次启动后会将资源拷贝到应用沙盒路径中，然后从沙盒中读取资源，所以如果重新导入了资源直接运行读取的还是老的资源文件，需要在模拟器或设备删除应用后再重新运行即可更新资源**

## 配置应用信息

打开 Xcode 工程目录下的control.xml文件，修改appid值：
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190424/f16ec2cf192ebd5a8fa653b444771841.png)

- appid：值为`HBuilderX`应用的`appid`，必须与5+应用`manifest.json`中的`id`字段值（`uni-app`项目为`manifest.json`中的`appid`字段值）完全一致；

## 编译运行
上面步骤都完成之后，便可以编译运行工程，如果跑起来的APP是自己想要的应用，说明配置都是正确的
