从HBuilderX1.9.0开始uni-app原生插件可以直接在插件市场绑定应用后，直接云端打包生效，避免下载uni-app原生插件到本地后再提交云端打包。
Starting from HBuilderX1.9.0, the uni-app native plug-in can be directly packaged in the cloud to take effect after binding the application in the plug-in market, avoiding downloading the uni-app native plug-in to the local and then submitting it for cloud packaging.
同时也继续支持将插件下载到本地后再提交云端打包，通常在以下情况使用这种方式：
At the same time, it also continues to support downloading the plug-in locally and then submitting it to the cloud for packaging. This method is usually used in the following situations:

- uni-app原生插件开发者，开发后配置提交云端打包验证插件的包格式是否正确
- uni-app native plug-in developers, after development, configure and submit cloud packaging to verify whether the plug-in package format is correct
- uni-app原生插件使用者，需要对插件自定义修改（如插件的资源等）
- uni-app native plug-in users need to customize and modify the plug-in (such as plug-in resources, etc.)

## 获取本地uni-app原生插件
## Get the local uni-app native plugin
### 插件市场下载免费uni-app原生插件
### Download the free uni-app native plug-in from the plug-in market
可以登录[uni原生插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)，在免费的插件详情页中点击“下载for离线打包”下载原生插件（zip格式），解压到HBuilderX的uni-app项目下的“nativeplugins”目录（如不存在则创建），以下是“DCloud-RichAlert”插件举例，它的下载地址是：[https://ext.dcloud.net.cn/plugin?id=36](https://ext.dcloud.net.cn/plugin?id=36)
You can log in to [uni native plug-in market](https://ext.dcloud.net.cn/?cat1=5&cat2=51), click "download for offline packaging" on the free plug-in details page to download the native plug-in (zip format) , unzip to the "nativeplugins" directory under the uni-app project of HBuilderX (create it if it does not exist), the following is an example of the "DCloud-RichAlert" plugin, and its download address is: [https://ext.dcloud.net. cn/plugin?id=36](https://ext.dcloud.net.cn/plugin?id=36)
下载解压后目录结构如下：
After downloading and decompressing, the directory structure is as follows:

![](https://ask.dcloud.net.cn/uploads/article/20190416/499c1b53bb61fa1792d5e47cf088c926.png)

### 开发者自己开发uni-app原生插件
### Developers develop uni-app native plug-ins by themselves

原生插件开发完成，按上图的格式配置到uni-app项目下的“nativeplugins”目录。
After the development of the native plug-in is completed, configure it in the "nativeplugins" directory under the uni-app project according to the format above.

## uni-app原生插件本地配置
## uni-app native plugin local configuration
将原生插件配置到uni-app项目的“nativeplugins”下，还需要在manifest.json文件的“App原生插件配置”项下点击“选择本地插件”，在列表中选择需要打包生效的插件：
To configure native plugins under "nativeplugins" of the uni-app project, you also need to click "Select Local Plugins" under "App Native Plugin Configuration" in the manifest.json file, and select the plugins that need to be packaged and take effect in the list:

![](https://ask.dcloud.net.cn/uploads/article/20190416/bfe0dde508c6652dd79a5820c2ea71ac.png)

**注意：保存后，需要提交云端打包，（制作自定义基座也属于云端打包）后插件才会生效**
**Note: After saving, you need to submit the cloud package, (making a custom base is also a cloud package) before the plugin will take effect**

## 关于云端打包资源大小超限的说明
## Explanation about the size limit of cloud packaged resources

云端打包资源大小限制40M，如果超限每次打包需支付一定费用。40M—100M,每次打包10元，每增加100M费用增加10元。请登录开发者中心（[https://dev.dcloud.net.cn](https://dev.dcloud.net.cn)），选择“打包服务”- “App大小超限充值”进行自助充值后，再提交打包。
The size limit of cloud packaged resources is 40M. If the limit is exceeded, a certain fee will be charged for each package. 40M—100M, 10 yuan for each package, and 10 yuan for each additional 100M. Please log in to the Developer Center ([https://dev.dcloud.net.cn](https://dev.dcloud.net.cn)), select "Packaging Service" - "App Size Exceeding Recharge" for self-recharge After that, submit the package again.

如果是为了开发uni-app原生插件提交插件市场前的测试打包，大小超限也需付费才能云端打包，插件上线通过审核以后可以申请退还相关打包费用。提供开发者账号及插件链接地址发邮件到 bd@dcloud.io 申请，谢谢！
If it is to develop a uni-app native plug-in for test packaging before submitting to the plug-in market, you need to pay for cloud packaging if the size exceeds the limit. After the plug-in goes online and passes the review, you can apply for a refund of the relevant packaging fee. Provide the developer account and plug-in link address and send an email to bd@dcloud.io to apply, thank you!

## 使用 Windows 系统提交 iOS 本地插件打包报错的解决方法
## Use the Windows system to submit the solution to the packaging error of the iOS local plug-in

> 如果使用 mac 提交本地插件打包正常，而使用 Windows 系统提交 iOS 本地插件打包时报错，是因为插件包使用的某个 .framework 库中存现软链接，在 Windows 系统上解压后导致软链接失效，打包时导致这个库缺失，所以会报错
> If the local plug-in package submitted by mac is normal, but an error is reported when the iOS local plug-in package is submitted by Windows system, it is because there is a soft link in a .framework library used by the plug-in package. This library is missing when packaging, so an error will be reported
报错如下图： 
The error is as shown in the figure below:

![](https://ask.dcloud.net.cn/uploads/article/20190918/c1d5e07691a68b735a1725ab26760a35.png)

**解决办法：**
**Solution:**

1. 依次查看插件iOS目录下面的 .framework 库文件，下面以 `UTDID.framework` 为例，打开后发现 UTDID、Resources、Headers 大小都为 1kb，说明这几个文件既是软链（在Windows上加压后被转换为文本文件，无法链接到真实文件）
1. Check the .framework library files under the plug-in iOS directory in turn. Take `UTDID.framework` as an example. After opening, you will find that the size of UTDID, Resources, and Headers are all 1kb, indicating that these files are soft links (add converted to a text file after compression and cannot be linked to the real file)

![](https://ask.dcloud.net.cn/uploads/article/20190918/34a38c1ce14b8a60d4616620dae3d825.png)

2. 用记事本打开这几个文件，里面写的就是链接的真实文件目录，（链接的是`/Versions/A/`目录中的文件）
2. Use notepad to open these files, which are the real file directories of the link, (the link is the file in the `/Versions/A/` directory)

![](https://ask.dcloud.net.cn/uploads/article/20190918/f3a25f6ad23b4e8828a2e73a932a602e.png)

3. 把真实文件拷贝到这个库的根目录，将其他文件全部删除即可，最终的库文件
3. Copy the real file to the root directory of this library, delete all other files, and the final library file

![](https://ask.dcloud.net.cn/uploads/article/20190918/0df26b80a6af2b0c48c578e28322f871.png)

4. 然后重新提交打包即可；
4. Then resubmit the package;

