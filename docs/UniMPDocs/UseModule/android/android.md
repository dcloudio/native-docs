SDK 提供了丰富的原生能力，您可根据需求自行添加功能模块，各功能模块所需的依赖库及资源文件
The SDK provides a wealth of native capabilities. You can add functional modules, dependent libraries and resource files required by each functional module according to your needs.

当前文档目录下 列出了常见的模块配置步骤。   更多模块配置，请参看 [其他模块](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/others)
Common module configuration steps are listed under the current documentation directory. For more module configurations, please refer to [Other Modules](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/others)

### 集成方式
### Integration

#### 下面以 map 模块为例
#### Let's take the map module as an example
首先查看 [map集成文档](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/map?id=%e9%ab%98%e5%be%b7%e5%9c%b0%e5%9b%be) 文档中说明 vue需要添加AMap3DMap_XXX_AMapSearch_XXX.jar，AMap_Location_XXX.jar，map-amap-release.aar三个库文件 及其AndroidManifest.xml等配置！
First check the [map integration document](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/map?id=%e9%ab%98%e5%be%b7%e5%9c%b0%e5%9b%be) The document states that vue needs to add AMap3DMap_XXX_AMapSearch_XXX.jar, AMap_Location_XXX.jar, map-amap-release.aar three library files and its AndroidManifest.xml and other configurations!


将AMap3DMap_XXX_AMapSearch_XXX.jar，AMap_Location_XXX.jar，map-amap-release.aar两个库文件拷贝到项目中。主Module中的libs下。
Copy the two library files AMap3DMap_XXX_AMapSearch_XXX.jar, AMap_Location_XXX.jar and map-amap-release.aar into the project. Under libs in the main Module.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

地图依赖库文件拷贝完毕后。需要在build.gradle配置导入你引用的两个库文件。
After the map dependency library files are copied. You need to import the two library files you reference in the build.gradle configuration.
```
	implementation files('libs/map-amap-release.aar')
	implementation files('libs/AMap_Location_XXX.jar')
	implementation files('libs/AMap3DMap_XXX_AMapSearch_XXX.jar')
```
参考 [map集成文档](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/map?id=%e9%ab%98%e5%be%b7%e5%9c%b0%e5%9b%be)  中Map配置信息修改工程项目：
Refer to [map integration document](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/map?id=%e9%ab%98%e5%be%b7%e5%9c%b0%e5% 9b%be) Map configuration information modification project:

 - 修改AndroidManifest.xml 增加以下权限及配置
 - Modify AndroidManifest.xml to add the following permissions and configurations

```
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
<uses-permission android:name="android.permission.READ_LOGS"/>
<uses-permission android:name="android.permission.WRITE_SETTINGS"/>

<meta-data android:name="com.amap.api.v2.apikey" android:value="%申请高德地图apikey%"/>
```

 - 修改dcloud_properties.xml配置
 - Modify dcloud_properties.xml configuration

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息
Add the following information in dcloud_properties.xml

```
features节点
<feature name="Maps" value="io.dcloud.js.map.amap.JsMapPluginImpl"></feature>

```

以上配置完毕后。运行项目即可体验模块功能了。
After the above configuration is complete. Run the project to experience the module function.

### 功能模块与 API 对应关系
### Correspondence between functional modules and APIs

| 功能模块       | 5+APP项目                | uni-app项目 
| Functional modules | 5+APP project | uni-app project
| :-------                | :-------                | :-------                
| Audio(音频)    | [plus.audio](https://www.html5plus.org/doc/zh_cn/audio.html)    | https://uniapp.dcloud.io/api/media/record-manager https://uniapp.dcloud.io/api/media/audio-context 
| Audio (audio) | [plus.audio](https://www.html5plus.org/doc/zh_cn/audio.html) | https://uniapp.dcloud.io/api/media/record-manager https: //uniapp.dcloud.io/api/media/audio-context
| Audio(MP3格式音频支持库)    | [plus.audio](https://www.html5plus.org/doc/zh_cn/audio.html)    |  
| Audio (MP3 format audio support library) | [plus.audio](https://www.html5plus.org/doc/zh_cn/audio.html) |
| Barcode(二维码)         | [plus.barcode](https://www.html5plus.org/doc/zh_cn/barcode.html) | https://uniapp.dcloud.io/api/system/barcode 
| Barcode (QR code) | [plus.barcode](https://www.html5plus.org/doc/zh_cn/barcode.html) | https://uniapp.dcloud.io/api/system/barcode
| Bluetooth(低功耗蓝牙)          | [plus.bluetooth](https://www.html5plus.org/doc/zh_cn/bluetooth.html) | https://uniapp.dcloud.io/api/system/bluetooth 
| Bluetooth (Bluetooth Low Energy) | [plus.bluetooth](https://www.html5plus.org/doc/zh_cn/bluetooth.html) | https://uniapp.dcloud.io/api/system/bluetooth
| Camera(摄像头)           | [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)     |  
| Camera (camera) | [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html) |
| Contacts(通讯录)          | [plus.contacts](https://www.html5plus.org/doc/zh_cn/contacts.html) |  
| Contacts (address book) | [plus.contacts](https://www.html5plus.org/doc/zh_cn/contacts.html) |
| Device(设备信息)           | [plus.device](https://www.html5plus.org/doc/zh_cn/device.html)   | https://uniapp.dcloud.io/api/system/info 
| Device (device information) | [plus.device](https://www.html5plus.org/doc/zh_cn/device.html) | https://uniapp.dcloud.io/api/system/info
| Downloader(文件下载)      | [plus.downloader](https://www.html5plus.org/doc/zh_cn/downloader.html) | https://uniapp.dcloud.io/api/request/network-file?id=downloadfile 
| Downloader (file download) | [plus.downloader](https://www.html5plus.org/doc/zh_cn/downloader.html) | https://uniapp.dcloud.io/api/request/network-file? id=downloadfile
| Fingerprint(指纹识别)     | [plus.fingerprint](https://www.html5plus.org/doc/zh_cn/fingerprint.html) | https://uniapp.dcloud.io/api/other/authentication 
| Fingerprint (fingerprint identification) | [plus.fingerprint](https://www.html5plus.org/doc/zh_cn/fingerprint.html) | https://uniapp.dcloud.io/api/other/authentication
| Geolocation(基础定位库)   | [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | https://uniapp.dcloud.io/api/location/location 
| Geolocation (basic positioning library) | [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | https://uniapp.dcloud.io/api/location/location
| Geolocation(高德定位)    	| [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | https://uniapp.dcloud.io/api/location/location 
| Geolocation (Geolocation) | [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | https://uniapp.dcloud.io/api/location/location
| Geolocation(系统定位)    | [plus.geolocation](https://www.html5plus.org/doc/zh_cn/geolocation.html) | https://uniapp.dcloud.io/api/location/location 
| iBeacon            | [plus.ibeacon](https://www.html5plus.org/doc/zh_cn/ibeacon.html)     | https://uniapp.dcloud.io/api/system/ibeacon 
| IO(文件系统)           | [plus.io](https://www.html5plus.org/doc/zh_cn/io.html)               | https://uniapp.dcloud.io/api/file/file 
| IO (file system) | [plus.io](https://www.html5plus.org/doc/zh_cn/io.html) | https://uniapp.dcloud.io/api/file/file
| LivePusher(直播推流)      | [plus.video.LivePusher](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher) | https://uniapp.dcloud.io/api/media/live-player-context 
| LivePusher (live streaming) | [plus.video.LivePusher](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher) | https://uniapp.dcloud.io /api/media/live-player-context
| Maps(高德地图)           | [plus.map](https://www.html5plus.org/doc/zh_cn/maps.html)            | https://uniapp.dcloud.io/api/location/map 
| Maps (High German Map) | [plus.map](https://www.html5plus.org/doc/zh_cn/maps.html) | https://uniapp.dcloud.io/api/location/map
| Messaging(短彩邮件消息)          | [plus.messaging](https://www.html5plus.org/doc/zh_cn/messaging.html) |
| Messaging (short color email message) | [plus.messaging](https://www.html5plus.org/doc/zh_cn/messaging.html) |
| Navigator(运行环境信息)        | [plus.navigator](https://www.html5plus.org/doc/zh_cn/navigator.html) | https://uniapp.dcloud.io/api/system/info 
| Navigator (running environment information) | [plus.navigator](https://www.html5plus.org/doc/zh_cn/navigator.html) | https://uniapp.dcloud.io/api/system/info
| Oauth(登录基础库)             | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth (login base library) | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | https://uniapp.dcloud.io/api/plugins/login
| Oauth(小米登录)        | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth (Xiaomi login) | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | https://uniapp.dcloud.io/api/plugins/login
| Oauth(QQ登录)                 | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth(QQ login)                 | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth(新浪微博登录)         | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)        | https://uniapp.dcloud.io/api/plugins/login 
| Oauth (Sina Weibo login) | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | https://uniapp.dcloud.io/api/plugins/login
| Oauth(微信登录)          | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)         | https://uniapp.dcloud.io/api/plugins/login 
| Oauth (WeChat login) | [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html) | https://uniapp.dcloud.io/api/plugins/login
| Payment(支付基础库)       | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html)     | https://uniapp.dcloud.io/api/plugins/payment 
| Payment (payment base library) | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html) | https://uniapp.dcloud.io/api/plugins/payment
| Payment(支付宝支付)        | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html)     | https://uniapp.dcloud.io/api/plugins/payment 
| Payment (Alipay) | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html) | https://uniapp.dcloud.io/api/plugins/payment
| Payment(微信支付)          | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html)     | https://uniapp.dcloud.io/api/plugins/payment 
| Payment (WeChat payment) | [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html) | https://uniapp.dcloud.io/api/plugins/payment
| Share(分享基础库)                    | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)          | https://uniapp.dcloud.io/api/plugins/share 
| Share (share base library) | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html) | https://uniapp.dcloud.io/api/plugins/share
| Share(QQ分享)                       | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)         | https://uniapp.dcloud.io/api/plugins/share 
| Share(QQ Share)                       | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)         | https://uniapp.dcloud.io/api/plugins/share 
| Share(新浪微博分享)                 | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)         | https://uniapp.dcloud.io/api/plugins/share 
| Share (Sina Weibo Share) | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html) | https://uniapp.dcloud.io/api/plugins/share
| Share(微信分享)               | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html)          | https://uniapp.dcloud.io/api/plugins/share 
| Share (WeChat sharing) | [plus.share](https://www.html5plus.org/doc/zh_cn/share.html) | https://uniapp.dcloud.io/api/plugins/share
| Speech(语音识别基础库)               | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html)        | https://uniapp.dcloud.io/api/plugins/voice 
| Speech (Speech Recognition Basic Library) | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html) | https://uniapp.dcloud.io/api/plugins/voice
| Speech(百度语音识别)             | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html)        | https://uniapp.dcloud.io/api/plugins/voice 
| Speech (Baidu speech recognition) | [plus.speech](https://www.html5plus.org/doc/zh_cn/speech.html) | https://uniapp.dcloud.io/api/plugins/voice
| SQLite(数据库)                   | [plus.sqlite](https://www.html5plus.org/doc/zh_cn/sqlite.html)       |
| SQLite (database) | [plus.sqlite](https://www.html5plus.org/doc/zh_cn/sqlite.html) |
| Statistic(友盟统计)         | [plus.statistic](https://www.html5plus.org/doc/zh_cn/statistic.html)  |
| Statistic (Youmeng Statistics) | [plus.statistic](https://www.html5plus.org/doc/zh_cn/statistic.html) |
| Uploader(文件上传)                | [plus.uploader](https://www.html5plus.org/doc/zh_cn/uploader.html)    | https://uniapp.dcloud.io/api/request/network-file?id=uploadfile 
| Uploader (file upload) | [plus.uploader](https://www.html5plus.org/doc/zh_cn/uploader.html) | https://uniapp.dcloud.io/api/request/network-file? id=uploadfile
| VideoPlayer(视频播放)                 | [plus.video.VideoPlayer](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayer) | https://uniapp.dcloud.io/api/media/video 
| VideoPlayer (video player) | [plus.video.VideoPlayer](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayer) | https://uniapp.dcloud.io/ api/media/video
| XHR(网络请求)                        | [plus.net](https://www.html5plus.org/doc/zh_cn/xhr.html)              | https://uniapp.dcloud.io/api/request/request?id=request 
| XHR (Network Request) | [plus.net](https://www.html5plus.org/doc/zh_cn/xhr.html) | https://uniapp.dcloud.io/api/request/request?id= request
| nvue原生组件: map(高德地图)       | 不支持 | https://uniapp.dcloud.io/component/map 
| nvue native component: map (Gaumap) | Not supported | https://uniapp.dcloud.io/component/map
| nvue原生组件: barcode(二维码)    | 不支持 | https://uniapp.dcloud.io/component/barcode 
| nvue native component: barcode (QR code) | Not supported | https://uniapp.dcloud.io/component/barcode
| nvue原生组件: live-pusher(直播推流)  | 不支持 | https://uniapp.dcloud.io/component/live-pusher 
| nvue native component: live-pusher (live streaming) | Not supported | https://uniapp.dcloud.io/component/live-pusher
| nvue原生组件: video视频      | 不支持 | https://uniapp.dcloud.io/component/video 
| nvue native component: video | Not supported | https://uniapp.dcloud.io/component/video
| nvue原生组件: canvas            | 不支持 | https://github.com/dcloudio/NvueCanvasDemo 
| nvue native component: canvas | Not supported | https://github.com/dcloudio/NvueCanvasDemo
