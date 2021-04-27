### 申请
1. 登录[开发者中心](https://dev.dcloud.net.cn)
2. 在左侧菜单中选择我创建的应用，点击需要申请的应用，如下图：
 ![avatar](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/APPKEY/appkey_applist-1.png)
4. 在应用管理界面选择离线打包Key管理，根据需要选择对应平台，输入包名和SHA1，确认无误点击保存，即可获取到对应平台的App ，如下图：
 
    **SHA1的获取请参考该[文章](https://ask.dcloud.net.cn/article/35777)**
    
    **AppKey不区分debug和release模式，Andorid如需要调试需要使用申请AppKey时的证书**
    
    ![avatar](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/APPKEY/applist-config.png)

### 配置

请点击下面链接参考对应平台的配置Appkey章节

#### Android
打开Android项目 配置主APP的Androidmanifest.xml文件， 导航到Application节点，创建meta-data节点，name为dcloud_appkey，value为申请的AppKey如下：

```
	<application
        ...>
        <meta-data
            android:name="dcloud_appkey"
            android:value="替换为自己申请的Appkey" />
```

[iOS](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios)
   
