### 申请
1. 登录[开发者中心](https://dev.dcloud.net.cn)
2. 在左侧菜单中选择我创建的应用，点击需要申请的应用，如下图：
 ![avatar](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/APPKEY/appkey_applist-1.png)
4. 在应用管理界面选择离线打包Key管理，根据需要选择对应平台，输入包名和SHA1，确认无误点击保存，即可获取到对应平台的App ，如下图：
 
    **SHA1的获取请参考该[文章](https://ask.dcloud.net.cn/article/35777)**
    
    **AppKey不区分debug和release模式，Andorid如需要调试需要使用申请AppKey时的证书**
    
    ![avatar](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/APPKEY/applist-config.png)
	
	**点击保存得到`Appkey`**
	
	![avatar](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/nativedocs/APPKEY/applist-config-key.png)

### 配置

#### Android

获取到android平台的AppKey后！打开Android项目 配置主APP的Androidmanifest.xml文件， 导航到Application节点，创建meta-data节点，name为dcloud_appkey，value为申请的AppKey如下：

```
	<application
        ...>
        <meta-data
            android:name="dcloud_appkey"
            android:value="替换为自己申请的Appkey" />
```

#### IOS

请点击下面链接参考IOS平台的配置Appkey章节

[iOS](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios)


### 常见问题

#### 项目配置都正确怎么还是提示"未配置AppKey或配置错误"？

这种情况不用怀疑。还是安装包的信息与你在申请Appkey填写信息不符导致的。 appid+应用包名+签名sha1三者必须与申请填写的信息一致才可以的。

**android平台 可以按一下步骤检查一下离线项目配置:**

1、查看签名文件是否配置到了主APP的build.gradle。

2、查看离线项目中dcloud_control.xml文件中的appid是否与申请AppKey时的appid一致。

3、检测离线项目的包名是否申请AppKey时的包名是否一致。

4、编译完通过apk解压获取一下签名信息与申请AppKey时填写的SHA1一致。

#### android平台 怎么创建签名文件？怎么获取签名文件的SHA1？

请查看文档[Android平台签名证书(.keystore)生成指南](https://ask.dcloud.net.cn/article/35777)

#### android平台 怎么配置签名文件打包编译？

主APP的build.gradle文件的android节点下配置如下:
```
signingConfigs {
        config {
            keyAlias '签名别名'
            keyPassword '密码'
            storeFile file('xxx.keystore或xxx.jks')
            storePassword '密码'
            v1SigningEnabled true //兼容v1
            v2SigningEnabled true //兼容v2
        }
}
```

#### android平台打包完的apk文件我怎么查看签名信息对比sha1呢？

+ 首先使用解压工具解开apk。

+ 进入meta-inf文件夹，进入命令行模式 输入如下命令 [参考文章](https://www.jianshu.com/p/d141cbcf2476)
```
keytool -printcert -file CERT.RSA
```

   
