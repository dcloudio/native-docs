### 申请
### Application
1. 登录[开发者中心](https://dev.dcloud.net.cn)
1. Log in to [Developer Center](https://dev.dcloud.net.cn)
2. 在左侧菜单中选择我创建的应用，点击需要申请的应用，如下图：
2. Select the application I created in the left menu, and click the application that needs to be applied for, as shown in the figure below:
 ![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/APPKEY/appkey_applist-1.png)
4. 在应用管理界面选择离线打包Key管理，根据需要选择对应平台，输入包名和SHA1，确认无误点击保存，即可获取到对应平台的App ，如下图：
4. Select Offline Packaging Key Management on the application management interface, select the corresponding platform as needed, enter the package name and SHA1, confirm that it is correct and click Save, and the App of the corresponding platform can be obtained, as shown in the figure below:
 
    **SHA1的获取请参考该[文章](https://ask.dcloud.net.cn/article/35777)**
    **For obtaining SHA1, please refer to this [article](https://ask.dcloud.net.cn/article/35777)**
    
    **AppKey不区分debug和release模式，Andorid如需要调试需要使用申请AppKey时的证书**
    **AppKey does not distinguish between debug and release modes. If Andorid needs to debug, it needs to use the certificate when applying for AppKey**
    
    ![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/APPKEY/applist-config.png)
	
	**点击保存得到`Appkey`**
	**Click save to get `Appkey`**
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/APPKEY/applist-config-key.png)

### 配置
### configuration

#### Android

获取到android平台的AppKey后！打开Android项目 配置主APP的Androidmanifest.xml文件， 导航到Application节点，创建meta-data节点，name为dcloud_appkey，value为申请的AppKey如下：
After obtaining the AppKey of the android platform! Open the Android project and configure the Androidmanifest.xml file of the main APP. Navigate to the Application node and create a meta-data node. The name is dcloud_appkey, and the value is the applied AppKey as follows:

```
	<application
        ...>
        <meta-data
            android:name="dcloud_appkey"
            android:value="替换为自己申请的Appkey" />
```

#### IOS

请点击下面链接参考IOS平台的配置Appkey章节
Please click the link below to refer to the chapter on configuring Appkey on the IOS platform

[iOS](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios)


### 常见问题
### common problem

#### 1. android平台 怎么配置签名文件打包编译？
#### 1. How to configure signature file packaging and compiling on android platform?

主APP的build.gradle文件的android节点下配置如下:
The configuration under the android node of the build.gradle file of the main APP is as follows:
```
signingConfigs {
        config {
            keyAlias '签名别名'
            keyPassword '签名密码'
            storeFile file('xxx/xxx/xxx.keystore或xxx/xxx/xxx.jks') // 路劲为相对路径或绝对路径
            storePassword '密码'
            v1SigningEnabled true //兼容v1
            v2SigningEnabled true //兼容v2
        }
}

buildTypes {
        debug {
            signingConfig signingConfigs.config
            ...
        }
        release {
            signingConfig signingConfigs.config
            ...
        }
}
```

#### 2. 项目配置都正确怎么还是提示"未配置AppKey或配置错误"？
#### 2. The project configuration is correct, why is it still prompted "AppKey not configured or configuration error"?

这种情况不用怀疑。还是安装包的信息与你在申请Appkey填写信息不符导致的。 appid+应用包名+签名sha1三者必须与申请填写的信息一致才可以的。
There is no doubt about this situation. Or the information in the installation package does not match the information you filled in when applying for the Appkey. Appid + application package name + signature sha1 must be consistent with the information filled in the application.

**android平台 可以按一下步骤检查一下离线项目配置:**
**Android platform You can follow the steps to check the offline project configuration:**

1. 查看签名文件是否配置到了主APP的build.gradle，配置方式参考上面常见问题1。**注意：需要将signingConfigs添加到buildTypes才会生效**
1. Check whether the signature file is configured in the build.gradle of the main APP. For the configuration method, refer to FAQ 1 above. **Note: You need to add signingConfigs to buildTypes to take effect**

2. 查看离线项目中dcloud_control.xml文件中的appid是否与申请AppKey时的appid一致。
2. Check whether the appid in the dcloud_control.xml file in the offline project is the same as the appid when applying for the AppKey.

	<br/><img src='https://native-res.dcloud.net.cn/images/uniapp/nativedocs/Android/appid%E4%B8%80%E8%87%B4.png' style="max-width:70%"/>

3. 检测离线项目的包名是否申请AppKey时的包名是否一致。
3. Check whether the package name of the offline project is the same as the package name when applying for the AppKey.

	<br/><img src='https://native-res.dcloud.net.cn/images/uniapp/nativedocs/Android/%E5%8C%85%E5%90%8D%E4%B8%80%E8%87%B4.png' style="max-width:70%"/>

4. 对比安装包apk文件的SHA1是否与应用后台配置的SHA1一致。
4. Check whether the SHA1 of the installation package apk file is consistent with the SHA1 configured in the background of the application.
	+ Android studio调试时提示appkey配置错误，参考[文档](/AppDocs/package/android?id=查看签名信息)获取签名信息与后台配置SHA1对比是否一致。
	+ Android studio prompts appkey configuration error when debugging, refer to [documentation](/AppDocs/package/android?id=%E6%9F%A5%E7%9C%8B%E7%AD%BE%E5%90%8D%E4 %BF%A1%E6%81%AF) to check whether the obtained signature information is consistent with the background configuration SHA1.
	+ 生成正式包时提示appkey配置错误，获取安装包apk文件获取（签名参考下面问题4）与后台配置SHA1对比是否一致。
	+ When the official package is generated, it prompts that the appkey configuration is wrong. Get the apk file of the installation package (refer to question 4 below for the signature) and compare it with the background configuration SHA1.

5. 检查dcloud_appkey配置位置是否正确，dcloud_appkey一定要放到Androidmanifest.xml文件的application节点里。
5. Check whether the dcloud_appkey configuration location is correct. The dcloud_appkey must be placed in the application node of the Androidmanifest.xml file.

```xml
	<application>
        <meta-data
            android:name="dcloud_appkey"
            android:value="替换为自己申请的Appkey" />
	</application>
```

#### 3. android平台 怎么创建签名文件？怎么获取签名文件的SHA1？
#### 3. How to create a signature file on the android platform? How to get the SHA1 of the signed file?

请查看文档[Android平台签名证书(.keystore)生成指南](https://ask.dcloud.net.cn/article/35777)
Please check the document [Android Platform Signature Certificate (.keystore) Generation Guide](https://ask.dcloud.net.cn/article/35777)

#### 4. android平台打包完的apk文件我怎么查看签名信息对比sha1呢？
#### 4. How can I check the signature information and compare the sha1 of the apk file packaged by the android platform?

+ 首先使用解压工具解开apk。
+ First use the decompression tool to extract the apk.

+ 进入meta-inf文件夹，进入命令行模式 输入如下命令 [参考文章](https://www.jianshu.com/p/d141cbcf2476)
+ Enter the meta-inf folder, enter the command line mode and enter the following command [reference article](https://www.jianshu.com/p/d141cbcf2476)
```
keytool -printcert -file CERT.RSA
```

   
