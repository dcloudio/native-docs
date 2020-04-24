
## 应用配置

打开build.gradle文件，修改versionCode和versionName字段，如下图：
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-1.png)
	
versionCode为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中version -> code值一致
	
versionName为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中version -> name值一致。
	

## 生成apk

点击Build->Generate Signed Bundle/APK...，如下图：
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-2.png)
	
选择 APK 选项，点击Next
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-3.png)
	
选择项目（Module），即当前需要打包的项目，注意：如果创建的项目是Library的话，不会显示在此列表里
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-4.png)
	
选择证书，如果没有证书的话，点击Create new... 新建，如果已有证书，可以点击Choose exiting... 选择已有证书
	
**注意：签名证书不要随意更换，否则会导致用户升级失败！**
	
注：若之前云打包使用的是DCloud默认证书，为保证正常升级，依然可以继续下载DCloud证书使用。[证书地址](http://ask.dcloud.net.cn/article/68)
	
创建证书
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-4.png)
	
输入密码（key store password对应上图第一个password，key password 对应上图第二个password），点击Next。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-5.png)
	
生成apk，Build Variants建议选release（正式发行尽量杜绝选择debug），Signature Versions建议都选，点击Finish。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-6.png)
	
打包完成
	
若apk打包成功，会在Android studio 右下角显示打包成功提示框，如下图。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-7.png)
	
点击locate即可跳转到安装包所在目录。
	
至此，打包完成，此时可以将打包之后的apk上传到应用市场了。
	
## 查看签名信息

+ Android studio中查看签名信息
	
	首先，需要在build.gradle中配置签名路径及密码
	
	~~~
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
	~~~
	
	点击右侧Gradle选项卡，点击上面build.gradle对应的项目，点击Tasks->android->signingReport，如下图所示：
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-8.png)
	
	然后签名信息会输出在Android studio底部Run选项卡中，如下图所示：
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-9.png)
	
+ CMD中查看签名信息

	在cmd中输入下面内容，回车查询。
	
	~~~
	keytool -v -list -keystore keystore.jks(签名文件路径)
	~~~
	
	输出内容如下图所示：
	
	![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-10.png)
	
	注：上述指纹证书只为测试使用，禁止以此注册第三方平台账号
	