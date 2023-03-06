SDK 提供了丰富的原生能力，您可根据需求自行添加功能模块，各功能模块所需的依赖库及资源文件

当前文档目录下 列出了常见的模块配置步骤。   更多模块配置，请参看 [其他模块](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/others)

### 集成方式

具体的模块配置章节，查看当前模块所属文档。比如  [地图模块]（https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/map.html#%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE）

### 功能模块与 API 对应关系

| 功能模块       | 5+APP项目                | uni-app项目 
| :-------                | :-------                | :-------                
| Audio(音频)    | [plus.audio](https://www.html5plus.org/doc/zh_cn/audio.html)    | https://uniapp.dcloud.io/api/media/record-manager https://uniapp.dcloud.io/api/media/audio-context 
| Audio(MP3格式音频支持库)    | [plus.audio](https://www.html5plus.org/doc/zh_cn/audio.html)    |  
| Barcode(二维码)         | [plus.barcode](https://www.html5plus.org/doc/zh_cn/barcode.html) | https://uniapp.dcloud.io/api/system/barcode 
| Bluetooth(低功耗蓝牙)          | [plus.bluetooth](https://www.html5plus.org/doc/zh_cn/bluetooth.html) | https://uniapp.dcloud.io/api/system/bluetooth 
| Camera(摄像头)           | [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)     |  
| Contacts(通讯录)          | [plus.contacts](https://www.html5plus.org/doc/zh_cn/contacts.html) |  
| Device(设备信息)           | [plus.device](https://www.html5plus.org/doc/zh_cn/device.html)   | https://uniapp.dcloud.io/api/system/info 
| Downloader(文件下载)      | [plus.downloader](https://www.html5plus.org/doc/zh_cn/downloader.html) | https://uniapp.dcloud.io/api/request/network-file?id=downloadfile 
| Fingerprint(指纹识别)     | [plus.fingerprint](https://www.html5plus.org/doc/zh_cn/fingerprint.html) | https://uniapp.dcloud.io/api/other/authentication 
| Geolocation(基础定位库)   | [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | https://uniapp.dcloud.io/api/location/location 
| Geolocation(高德定位)    	| [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | https://uniapp.dcloud.io/api/location/location 
| Geolocation(系统定位)    | [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | https://uniapp.dcloud.io/api/location/location 
| iBeacon            | [plus.ibeacon](https://www.html5plus.org/doc/zh_cn/ibeacon.html)     | https://uniapp.dcloud.io/api/system/ibeacon 
| IO(文件系统)           | [plus.io](https://www.html5plus.org/doc/zh_cn/io.html)               | https://uniapp.dcloud.io/api/file/file 
| LivePusher(直播推流)      | [plus.video.LivePusher](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher) | https://uniapp.dcloud.io/api/media/live-player-context 
| Maps(高德地图)           | [plus.map](https://www.html5plus.org/doc/zh_cn/maps.html)            | https://uniapp.dcloud.io/api/location/map 
| Messaging(短彩邮件消息)          | [plus.messaging](https://www.html5plus.org/doc/zh_cn/messaging.html) |
| Navigator(运行环境信息)        | [plus.navigator](https://www.html5plus.org/doc/zh_cn/navigator.html) | https://uniapp.dcloud.io/api/system/info 
| Oauth(登录基础库)             | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth(小米登录)        | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth(QQ登录)                 | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth(新浪微博登录)         | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth(微信登录)          | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)         | https://uniapp.dcloud.io/api/plugins/login 
| Payment(支付基础库)       | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html)     | https://uniapp.dcloud.io/api/plugins/payment 
| Payment(支付宝支付)        | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html)     | https://uniapp.dcloud.io/api/plugins/payment 
| Payment(微信支付)          | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html)     | https://uniapp.dcloud.io/api/plugins/payment 
| Share(分享基础库)                    | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)          | https://uniapp.dcloud.io/api/plugins/share 
| Share(QQ分享)                       | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)         | https://uniapp.dcloud.io/api/plugins/share 
| Share(新浪微博分享)                 | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)         | https://uniapp.dcloud.io/api/plugins/share 
| Share(微信分享)               | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)          | https://uniapp.dcloud.io/api/plugins/share 
| Speech(语音识别基础库)               | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html)        | https://uniapp.dcloud.io/api/plugins/voice 
| Speech(百度语音识别)             | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html)        | https://uniapp.dcloud.io/api/plugins/voice 
| SQLite(数据库)                   | [plus.sqlite](https://www.html5plus.org/doc/zh_cn/sqlite.html)       |
| Statistic(友盟统计)         | [plus.statistic](https://www.html5plus.org/doc/zh_cn/statistic.html)  |
| Uploader(文件上传)                | [plus.uploader](https://www.html5plus.org/doc/zh_cn/uploader.html)    | https://uniapp.dcloud.io/api/request/network-file?id=uploadfile 
| VideoPlayer(视频播放)                 | [plus.video.VideoPlayer](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayer) | https://uniapp.dcloud.io/api/media/video 
| XHR(网络请求)                        | [plus.net](https://www.html5plus.org/doc/zh_cn/xhr.html)              | https://uniapp.dcloud.io/api/request/request?id=request 
| nvue原生组件: map(高德地图)       | 不支持 | https://uniapp.dcloud.io/component/map 
| nvue原生组件: barcode(二维码)    | 不支持 | https://uniapp.dcloud.io/component/barcode 
| nvue原生组件: live-pusher(直播推流)  | 不支持 | https://uniapp.dcloud.io/component/live-pusher 
| nvue原生组件: video视频      | 不支持 | https://uniapp.dcloud.io/component/video 
| nvue原生组件: canvas            | 不支持 | https://github.com/dcloudio/NvueCanvasDemo 
