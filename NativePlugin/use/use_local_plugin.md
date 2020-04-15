从HBuilderX1.9.0开始uni-app原生插件可以直接在插件市场绑定应用后，直接云端打包生效，避免下载uni-app原生插件到本地后再提交云端打包。
同时也继续支持将插件下载到本地后再提交云端打包，通常在以下情况使用这种方式：

- uni-app原生插件开发者，开发后配置提交云端打包验证插件的包格式是否正确
- uni-app原生插件使用者，需要对插件自定义修改（如插件的资源等）

## 获取本地uni-app原生插件
### 插件市场下载免费uni-app原生插件
可以登录[uni原生插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)，在免费的插件详情页中点击“下载for离线打包”下载原生插件（zip格式），解压到HBuilderX的uni-app项目下的“nativeplugins”目录（如不存在则创建），以下是“DCloud-RichAlert”插件举例，它的下载地址是：[https://ext.dcloud.net.cn/plugin?id=36](https://ext.dcloud.net.cn/plugin?id=36)
下载解压后目录结构如下：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190416/499c1b53bb61fa1792d5e47cf088c926.png)

### 开发者自己开发uni-app原生插件

原生插件开发完成后按指定格式压缩为zip包，参考[uni-app原生插件格式说明文档](https://ask.dcloud.net.cn/article/35414)。
按上图的格式配置到uni-app项目下的“nativeplugins”目录。

## uni-app原生插件本地配置
将原生插件配置到uni-app项目的“nativeplugins”下，还需要在manifest.json文件的“App原生插件配置”项下点击“选择本地插件”，在列表中选择需要打包生效的插件：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190416/bfe0dde508c6652dd79a5820c2ea71ac.png)

**保存后，重新提交云端打包生效**

## 关于云端打包资源大小超限的说明

云端打包资源大小限制40M，如果超限每次打包需支付一定费用。40M—100M,每次打包10元，每增加100M费用增加10元。请登录开发者中心（[https://dev.dcloud.net.cn](https://dev.dcloud.net.cn)），选择“打包服务”- “App大小超限充值”进行自助充值后，再提交打包。

如果是为了开发uni-app原生插件提交插件市场前的测试打包，大小超限也需付费才能云端打包，插件上线通过审核以后可以申请退还相关打包费用。提供开发者账号及插件链接地址发邮件到 bd@dcloud.io 申请，谢谢！

## 使用 Windows 系统提交 iOS 本地插件打包报错的解决方法

> 如果使用 mac 提交本地插件打包正常，而使用 Windows 系统提交 iOS 本地插件打包时报错，是因为插件包使用的某个 .framework 库中存现软链接，在 Windows 系统上解压后导致软链接失效，打包时导致这个库缺失，所以会报错
报错如下图：
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190918/c1d5e07691a68b735a1725ab26760a35.png)

**解决办法：**

1. 依次查看插件iOS目录下面的 .framework 库文件，下面以 `UTDID.framework` 为例，打开后发现 UTDID、Resources、Headers 大小都为 1kb，说明这几个文件既是软链（在Windows上加压后被转换为文本文件，无法链接到真实文件）
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190918/34a38c1ce14b8a60d4616620dae3d825.png)

2. 用记事本打开这几个文件，里面写的就是链接的真实文件目录，（链接的是`/Versions/A/`目录中的文件）
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190918/f3a25f6ad23b4e8828a2e73a932a602e.png)

3. 把真实文件拷贝到这个库的根目录，将其他文件全部删除即可，最终的库文件
![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190918/0df26b80a6af2b0c48c578e28322f871.png)

4. 然后重新提交打包即可；

