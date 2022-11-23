
## 应用配置
## Application configuration

打开build.gradle文件，修改versionCode和versionName字段，如下图：
Open the build.gradle file and modify the versionCode and versionName fields, as shown below:
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-1.png)
	
versionCode为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中version -> code值一致
versionCode is the version number (integer value) of the application, which is used to judge the upgrade of each application market. It is recommended to be consistent with the value of version -> code in manifest.json
	
versionName为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中version -> name值一致。
versionName is the version name (string) of the application, the version number displayed in the system application management program, it is recommended to be consistent with the value of version -> name in manifest.json.
	

## 生成安装包
## Generate installation package

**注意：如果需要生成aab安装包，需要在项目根目录下的gradle.properties文件中添加如下内容**
**Note: If you need to generate an aab installation package, you need to add the following content to the gradle.properties file in the project root directory**
```
android.bundle.enableUncompressedNativeLibs = false
```

点击Build->Generate Signed Bundle/APK...，如下图：
Click Build->Generate Signed Bundle/APK..., as shown below:
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-2.png)
	
- 生成apk
- generate apk

	选择 APK 选项，点击Next
	Select the APK option and click Next
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-3.png)

- 生成aab
- generate aab

	选择Android App Bundle选项，点击Next
	Select the Android App Bundle option and click Next
	
选择项目（Module），即当前需要打包的项目，注意：如果创建的项目是Library的话，不会显示在此列表里
Select the project (Module), that is, the current project that needs to be packaged. Note: If the created project is a Library, it will not be displayed in this list
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-4.png)
	
选择证书，如果没有证书的话，点击Create new... 新建，如果已有证书，可以点击Choose exiting... 选择已有证书
Select a certificate. If there is no certificate, click Create new... to create a new one. If you already have a certificate, you can click Choose exiting... to select an existing certificate
	
**注意：签名证书不要随意更换，否则会导致用户升级失败！**
**Note: Do not change the signature certificate at will, otherwise it will cause the user to fail to upgrade! **
	
注：若之前云打包使用的是DCloud默认证书，为保证正常升级，依然可以继续下载DCloud证书使用。[证书地址](http://ask.dcloud.net.cn/article/68)
Note: If the DCloud default certificate was used for cloud packaging before, in order to ensure normal upgrade, you can still continue to download the DCloud certificate for use. [Certificate Address](http://ask.dcloud.net.cn/article/68)
	
创建证书
create certificate
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-4.png)
	
输入密码（key store password对应上图第一个password，key password 对应上图第二个password），点击Next。
Enter the password (the key store password corresponds to the first password in the above figure, and the key password corresponds to the second password in the above figure), and click Next.
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-5.png)
	
生成apk，Build Variants建议选release（正式发行尽量杜绝选择debug），Signature Versions建议都选，点击Finish。
To generate apk, it is recommended to choose release for Build Variants (try to avoid choosing debug for official release), it is recommended to choose both for Signature Versions, and click Finish.
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-6.png)
	
打包完成
Packing complete
	
若apk打包成功，会在Android studio 右下角显示打包成功提示框，如下图。
If the apk is packaged successfully, a package success prompt box will be displayed in the lower right corner of Android studio, as shown in the figure below.
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-7.png)
	
点击locate即可跳转到安装包所在目录。
Click locate to jump to the directory where the installation package is located.
	
至此，打包完成，此时可以将打包之后的apk上传到应用市场了。
At this point, the packaging is complete, and the packaged apk can be uploaded to the application market at this time.
	
## 查看签名信息
## View signature information

+ Android studio中查看签名信息
+ View signature information in Android studio
	
	首先，需要在build.gradle中配置签名路径及密码
	First, you need to configure the signature path and password in build.gradle
	
	```
	android {
		signingConfigs {
			config {
				storeFile file('myapplication.jks') // 支持相对路径与绝对路径
				storePassword '123456'
				keyAlias = '别名，建议使用公司英文简称'
				keyPassword '123456'
			}
		}
		buildTypes {
			debug {
				signingConfig signingConfigs.config
			}
			release {
				signingConfig signingConfigs.config
			}
		}
	}
	```
	
	点击右侧Gradle选项卡，点击上面build.gradle对应的项目，点击Tasks->android->signingReport，如下图所示：
	Click the Gradle tab on the right, click the project corresponding to build.gradle above, and click Tasks->android->signingReport, as shown in the following figure:
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-8.png)
	
	然后签名信息会输出在Android studio底部Run选项卡中，如下图所示：
	Then the signature information will be output in the Run tab at the bottom of Android studio, as shown in the following figure:
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-9.png)
	
+ CMD中查看签名信息
+ View signature information in CMD

	在cmd中输入下面内容，回车查询。
	Enter the following content in cmd and press Enter to query.
	
	```
	keytool -v -list -keystore keystore.jks(签名文件路径)
	```
	
	输出内容如下图所示：
	The output content is shown in the figure below:
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-10.png)
	
	注：上述指纹证书只为测试使用，禁止以此注册第三方平台账号
	Note: The above fingerprint certificate is only for testing, and it is forbidden to register a third-party platform account with it
	