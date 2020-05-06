## 百度语音
### 将百度语音模块依赖库及资源添加到工程

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibSpeech.a、libBaiduSpeechSDK.a、libbaiduSpeech.a|libc++.tbd、libz.tbd、libsqlite3.tbd、AudioToolbox.framework、AVFoundation.framework、CFNetwork.framework、CoreLocation.framework、CoreTelephony.framework、SystemConfiguration.framework、GLKit.framework|BDSClientEASRResources文件夹里的资源文件|

### 帐号配置
1.首先到[百度语音官方网站](https://ai.baidu.com/tech/speech/asr) 创建应用获取 appkey 等信息。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/speech/52565.png)


2.打开info.plist，并创建 baiduspeech 节点，填入自己帐号的信息，按照下图中的格式创建

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/speech/28765.png)

3、把BDSClientEASRResources文件夹里的资源文件引入到工程里

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/speech/29526.png)


## 讯飞语音
### 将讯飞语音模块依赖库及资源添加到工程

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibSpeech.a、libiflySpeech.a、iflyMSC.framework|AVFoundation.framework、AddressBook.framework、Contacts.framework| 无|

**注意：iflyMSC.framework 库需要开发者在[讯飞语音官方网站](https://console.xfyun.cn/)自行生成，因为需要跟您的AppId绑定，SDK内的库无法在您的App中使用；**

### 帐号配置
1.首先到[讯飞语音官方网站](https://console.xfyun.cn/app/myapp)创建App，获取 appid 信息。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200416/a36252c51d38d37446f96794025ddcbd.png)

2.在 info.plist 中创建 iFly 节点，填入自己帐号的信息，按照下图中的格式创建

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200409/98a2e2ae9cb110890e51c8bf769f87a7.png)

**注意：语言识别功能百度模块或讯飞模块只能选一个**
