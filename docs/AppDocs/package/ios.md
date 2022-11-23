## 预备资料
## Preliminary information
    准备好Xcode打包需要的bundleid和生产环境的证书。
    Prepare the bundleid and the certificate of the production environment required for Xcode packaging.

## 应用配置
## Application configuration
###  配置应用标识(Bundle Identifier)
### Configure Bundle Identifier

    选择左侧应用工程根目录，选中TARGETS下的HBuilder打开工程属性界面，在General下修改Identity的值：
    Select the root directory of the application project on the left, select HBuilder under TARGETS to open the project properties interface, and modify the value of Identity under General:
    
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/PackagingIssue/gongboundleID.png)    

    其中,Bundle Identifier为苹果的AppID，必须与应用发布是配置的Profile关联的AppID一致；
    Among them, the Bundle Identifier is Apple's AppID, which must be consistent with the AppID associated with the profile configured in the application release;

    Version为应用版本号，在App Store中显示的版本号，推荐与manifest.json中version下的name值一致；
    Version is the application version number, which is displayed in the App Store. It is recommended to be consistent with the name value under version in manifest.json;

    Build为编译版本号，App Store判断升级使用，推荐与manifest.json中version下的code值一致。
    Build is the compiled version number, which is used by the App Store to determine whether to upgrade, and it is recommended to be consistent with the code value under version in manifest.json.

###  配置应用版本号
### Configure the application version number
    在打开的原生工程中，点击工程的targets和点开工程里的manifest文件，然后将manifest文件里的“version”字段里的“code”的内容 和原生工程里的Build 的写成一样。
    In the opened native project, click the targets of the project and click to open the manifest file in the project, and then write the content of "code" in the "version" field in the manifest file to be the same as that of Build in the native project.
    
    注意，manifest文件里的“version”字段里的“code” 对应的是HBuilderX打开的工程里的“基础配置”里的应用版本号。如下图红色框所示：
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/PackagingIssue/gongbanbh1.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/PackagingIssue/gongbanbh2.png)



### 配置证书
### Configure certificate
	按下图红框内的提示配置生产证书
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/PackagingIssue/dbfx1.png)

## 生成ipa
## generate ipa
	按下图所示 点击Archive，等打包结束后，会弹出一个界面，然后按界面提示生成ipa包
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/PackagingIssue/dbfx2.png)

## 上传ipa
## Upload ipa
    使用Transporter工具上传ipa包。
    Use the Transporter tool to upload the ipa package.
