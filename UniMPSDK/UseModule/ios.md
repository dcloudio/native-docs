uni小程序SDK 提供了丰富的原生能力，如果您在小程序中调用了相关模块的 API 但是原生工程没有添加相关依赖的时候会出现如下提示

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200320/3c5d9ebaddef0ffb3f20c7d49f2daeea.png)

按照下面的教程将依赖库添加到原生工程中即可
您可根据需求自行添加功能模块，各功能模块所需的依赖库及资源文件，在`UniMPSDK/Features`目录中

目录结构

```
|-- UniMPSDK/Features
	|-- Feature-iOS.xls // 功能模块配置表
	|-- inc				// 框架使用的第三库 .h 头文件
	|-- Libs				// 各功能模块的依赖库存放位置
	|-- Resources			// 资源文件
```
请参考 Feature-iOS.xls 配置表，添加模块所需依赖库及资源文件即可；


## 集成方式


#### 下面以 Gallery 模块为例

首先查看配置文件，需要添加 `liblibCamera.a`、`AssetsLibrary.framework` 依赖库，及 `TZImagePickerController.bundle` 资源文件

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200208/28f00fe28c66f0f662fa9a0a00194bde.png)

##### 添加依赖库

将 UniMPSDK/Features/Lib 中的 `liblibCamera.a`库及`AssetsLibrary.framework` 系统库，添加到工程的 `TARGETS->Build Phases-> Link Binary With Libaries` 中；
[attach]48083[/attach]

##### 添加依赖资源文件
然后将 UniMPSDK/Features/Resources 中的`TZImagePickerController.bundle` 资源文件添加到工程中
[attach]48084[/attach]

然后即可调用 Gallery 相关功能；


## 功能模块与 API 对应关系
| 功能模块   | 5+ API             | uni-app API              |
| :-------     | :-------                | :-------                |
| Accelerometer(加速度传感器)      | [plus.accelerometer](https://www.html5plus.org/doc/zh_cn/accelerometer.html) | [https://uniapp.dcloud.io/api/system/compass](https://uniapp.dcloud.io/api/system/compass) |
| Audio(音频)                          | [plus.audio](https://www.html5plus.org/doc/zh_cn/audio.html) | [https://uniapp.dcloud.io/api/media/record-manager](https://uniapp.dcloud.io/api/media/record-manager) [https://uniapp.dcloud.io/api/media/audio-context](https://uniapp.dcloud.io/api/media/audio-context) |
| Barcode(二维码)                  | [plus.barcode](https://www.html5plus.org/doc/zh_cn/barcode.html) | [https://uniapp.dcloud.io/api/system/barcode](https://uniapp.dcloud.io/api/system/barcode) |
| Bluetooth(低功耗蓝牙)               | [plus.bluetooth](https://www.html5plus.org/doc/zh_cn/bluetooth.html) | [https://uniapp.dcloud.io/api/system/bluetooth](https://uniapp.dcloud.io/api/system/bluetooth) |
| Camera(摄像头)                      | [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html) | [https://uniapp.dcloud.io/api/media/image](https://uniapp.dcloud.io/api/media/image) |
| Contacts(通讯录)                 | [plus.contacts](https://www.html5plus.org/doc/zh_cn/contacts.html) | [https://uniapp.dcloud.io/api/system/contact](https://uniapp.dcloud.io/api/system/contact) |
| Fingerprint(指纹识别)           | [plus.fingerprint](https://www.html5plus.org/doc/zh_cn/fingerprint.html) | [https://uniapp.dcloud.io/api/other/authentication](https://uniapp.dcloud.io/api/other/authentication) |
| Geolocation(系统定位)               | [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | [https://uniapp.dcloud.io/api/location/location](https://uniapp.dcloud.io/api/location/location) |
|Geolocation(百度定位)         	           | [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | [https://uniapp.dcloud.io/api/location/location](https://uniapp.dcloud.io/api/location/location) |
| iBeacon                              | [plus.ibeacon](https://www.html5plus.org/doc/zh_cn/ibeacon.html) | [https://uniapp.dcloud.io/api/system/ibeacon](https://uniapp.dcloud.io/api/system/ibeacon) |
| IO(文件系统)                              | [plus.io](https://www.html5plus.org/doc/zh_cn/io.html) | [https://uniapp.dcloud.io/api/file/file](https://uniapp.dcloud.io/api/file/file) |
| Maps(地图基础库)                       | [plus.map](https://www.html5plus.org/doc/zh_cn/maps.html) | [https://uniapp.dcloud.io/api/location/map](https://uniapp.dcloud.io/api/location/map) |
|Maps(高德德图)                     | [plus.map](https://www.html5plus.org/doc/zh_cn/maps.html) | [https://uniapp.dcloud.io/api/location/map](https://uniapp.dcloud.io/api/location/map) |
| Maps(百度地图)                         | [plus.map](https://www.html5plus.org/doc/zh_cn/maps.html) | [https://uniapp.dcloud.io/api/location/map](https://uniapp.dcloud.io/api/location/map) |
| Messaging(短彩邮件消息)                 | [plus.messaging](https://www.html5plus.org/doc/zh_cn/messaging.html) |
| Oauth(登录基础库)                 | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | [https://uniapp.dcloud.io/api/plugins/login](https://uniapp.dcloud.io/api/plugins/login) |
| Oauth(小米登录)              | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | [https://uniapp.dcloud.io/api/plugins/login](https://uniapp.dcloud.io/api/plugins/login) |
| Oauth(QQ登录)             | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | [https://uniapp.dcloud.io/api/plugins/login](https://uniapp.dcloud.io/api/plugins/login) |
| Oauth(新浪微博登录)               | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | [https://uniapp.dcloud.io/api/plugins/login]( https://uniapp.dcloud.io/api/plugins/login) |
| Oauth(微信登录)                     | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | [https://uniapp.dcloud.io/api/plugins/login](https://uniapp.dcloud.io/api/plugins/login) |
| Orientation(设备方向)           | [plus.orientation](https://www.html5plus.org/doc/zh_cn/orientation.html) |
| Payment(支付基础库)              | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html) | [https://uniapp.dcloud.io/api/plugins/payment](https://uniapp.dcloud.io/api/plugins/payment) |
| Payment(支付宝支付)                 | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html) | [https://uniapp.dcloud.io/api/plugins/payment](https://uniapp.dcloud.io/api/plugins/payment) |
| Payment(苹果应用内支付)                 | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html) | [https://uniapp.dcloud.io/api/plugins/payment](https://uniapp.dcloud.io/api/plugins/payment) |
| Payment(微信支付)                | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html) | [https://uniapp.dcloud.io/api/plugins/payment](https://uniapp.dcloud.io/api/plugins/payment) |
| Push(推送基础库)                   | [plus.push](https://www.html5plus.org/doc/zh_cn/push.html) | [https://uniapp.dcloud.io/api/plugins/push](https://uniapp.dcloud.io/api/plugins/push) |
| Push(个推推送)                   | [plus.push](https://www.html5plus.org/doc/zh_cn/push.html) | [https://uniapp.dcloud.io/api/plugins/push](https://uniapp.dcloud.io/api/plugins/push) |
| Push(UniPush推送)                   | [plus.push](https://www.html5plus.org/doc/zh_cn/push.html) | [https://uniapp.dcloud.io/api/plugins/push](https://uniapp.dcloud.io/api/plugins/push) |
| Proximity(距离传感器)             | [plus.proximity](https://www.html5plus.org/doc/zh_cn/proximity.html) |
| Share(分享基础库)                      | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html) | [https://uniapp.dcloud.io/api/plugins/share](https://uniapp.dcloud.io/api/plugins/share) |
| Share(QQ分享)                            | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html) | [https://uniapp.dcloud.io/api/plugins/share](https://uniapp.dcloud.io/api/plugins/share) |
| Share(新浪微博分享)                      | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html) | [https://uniapp.dcloud.io/api/plugins/share](https://uniapp.dcloud.io/api/plugins/share) |
| Share(微信分享)                        | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html) | [https://uniapp.dcloud.io/api/plugins/share](https://uniapp.dcloud.io/api/plugins/share) |
| Speech(语音识别基础库)      	            | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html) | [https://uniapp.dcloud.io/api/plugins/voice](https://uniapp.dcloud.io/api/plugins/voice) |
| Speech(百度语音识别)                   | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html) | [https://uniapp.dcloud.io/api/plugins/voice](https://uniapp.dcloud.io/api/plugins/voice) |
| Speech(讯飞语音识别)                  | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html) | [https://uniapp.dcloud.io/api/plugins/voice](https://uniapp.dcloud.io/api/plugins/voice) |
| Statistic(友盟统计)                   | [plus.statistic](https://www.html5plus.org/doc/zh_cn/statistic.html) |
| VideoPlayer(视频播放)                     | [plus.video.VideoPlayer](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayer) | [https://uniapp.dcloud.io/api/media/video](https://uniapp.dcloud.io/api/media/video) |
| XHR(网络请求)                               | [plus.net](https://www.html5plus.org/doc/zh_cn/xhr.html) | [https://uniapp.dcloud.io/api/request/request?id=request](https://uniapp.dcloud.io/api/request/request?id=request) |
| Zip(文件压缩和解压)	                       | [plus.zip](https://www.html5plus.org/doc/zh_cn/zip.html) |
| nvue原生组件: barcode(二维码)            | 不支持 | [https://uniapp.dcloud.io/component/barcode](https://uniapp.dcloud.io/component/barcode) |
| nvue原生组件: map(地图基础库)                | 不支持 | [https://uniapp.dcloud.io/component/map](https://uniapp.dcloud.io/component/map) |
| nvue原生组件: map(高德地图)                | 不支持 | [https://uniapp.dcloud.io/component/map](https://uniapp.dcloud.io/component/map) |
| nvue原生组件: video(视频)              | 不支持 | [https://uniapp.dcloud.io/component/video](https://uniapp.dcloud.io/component/video) |
| nvue原生组件: canvas                    | 不支持 | [https://github.com/dcloudio/NvueCanvasDemo](https://github.com/dcloudio/NvueCanvasDemo) |
| nvue原生模块: FaceID                  | 不支持 | [https://uniapp.dcloud.io/api/other/authentication](https://uniapp.dcloud.io/api/other/authentication) |

