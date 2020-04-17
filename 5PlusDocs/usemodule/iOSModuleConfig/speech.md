## 百度语音配置
### 将百度语音模块依赖库及资源添加到工程

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibSpeech.a、libBaiduSpeechSDK.a、libbaiduSpeech.a|libc++.tbd、libz.tbd、libsqlite3.tbd、AudioToolbox.framework、AVFoundation.framework、CFNetwork.framework、CoreLocation.framework、CoreTelephony.framework、SystemConfiguration.framework、GLKit.framework|BDSClientEASRResources文件夹里的资源文件|

### 帐号配置
1.首先到[百度语音官方网站](https://ai.baidu.com/tech/speech/asr) 创建应用获取 appkey 等信息。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/speech/52565.png)


2.打开info.plist，找到baiduspeech项，填入自己帐号的信息，如果没有该项，按照下图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/speech/28765.png)

3、把BDSClientEASRResources文件夹里的资源文件引入到工程里

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/speech/29526.png)

## 讯飞语音配置
### 添加讯飞语音插件
注: Linker Flags、framework添加方法参考该[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibSpeech.a、libiflySpeech.a、iflyMSC.framework|AVFoundation.framework、AddressBook.framework、Contacts.framework|无|


**注意：iflyMSC.framework 库需要开发者在[讯飞语音官方网站](https://console.xfyun.cn/)自行生成，因为需要跟您的AppId绑定，SDK内的库无法在您的App中使用；**

### 帐号配置
首先到[讯飞语音官方网站](https://console.xfyun.cn/app/myapp)创建App，获取 appid 信息。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/speech/52570.png)

2.打开info.plist，找到iFly项，填入自己帐号的信息，如果没有该项，按照下图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/speech/51865.png)

**注意：离线打包语言识别功能只能选一个，要么科大讯飞，要么百度语音，剩下那个需要在工程里删除**
