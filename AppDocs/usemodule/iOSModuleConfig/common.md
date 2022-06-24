### 模块/三方SDK配置介绍
1、配置离线打包工程时，可以根据需要进行 模块/三方SDK 的增删，这个过程需要对工程做出修改。

2、目前插件需要修改的项目包含Library、Framework、资源文件、info.plist、宏定义、LinkerFlags文件几项。

3、并不是所有的模块/三方SDK都要修改以上几项，大部分模块/三方SDK只需要修改其中几项即可。

4、如果app中出现“缺失功能提醒框”，需要按照下面步骤配置相应的模块/三方SDK即可。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/50289.png)

<!--
### 每个模块/三方SDK需要修改哪些项目，每个项目需要配置的值是什么，可以查看SDK中的Feature-iOS.xls文件。
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/50292.png)
### 功能模块与 API 对应关系
-->


### 具体修改方法：

#### 如何配置Library
    library为模块/三方SDK对应的库文件和依赖库，按照下图找到配置位置，点击“+”可以添加，选中.a库点击“-”可以删除
  ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1156s.png)
	
#### 如何配置framework
    framework为模块/三方SDK依赖的库，按照下图找到配置位置，点击”+“可以添加，选中framework点击“-”可以删除
 ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1156s.png)

#### 如何添加删除文件
    当需要使用的资源如图片、国际化文件等， 点击File->addFile 在弹出的对话框中选择响应文件即可，删除时在工程中选中该项目，点击delete键
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1155.png)

#### 如何修改宏定义
    按照下图找到Macors，在弹出的窗口中点击“+”可以添加添加“-”可以删除
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1156.png)

#### 如何修改LinkerFlags配置
    按照下图找到Other Linker Flags 点击该项，在弹出的窗口中点击"+"可以添加flag 点击"-"可以删除flag
   ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1154.png)
   ![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/common/1218.png)

<h3 id="moduletable"></h3>

#### 如何配置模块/三方SDK

1、查看功能模块对照表中的配置要求，如下表：

<table>
	<tr>
	    <th>功能模块名称</th>
	    <th>5+ API</th>
	    <th>Uni API</th>
	    <th>系统库</th>
	    <th>SDK中的库</th>  
	    <th>资源文件</th>
	    <th>Info.plist（添加权限描述或字段）</th>
	</tr >
	<tr >
	    <td>基础模块</td>
	    <td>无</td>
	    <td>无</td>
	    <td> CoreText.framework<br/>
		JavaScriptCore.framework<br/>
		WebKit.framework<br/>
		CoreTelephony.framework<br/>
		MobileCoreServices.framework<br/>
		SystemConfiguration.framework<br/>
		MediaPlayer.framework<br/>
		AudioToolbox.framework<br/>
		QuartzCore.framework<br/>
		CFNetwork.framework<br/>
		Foundation.framework<br/>
		CoreFoundation.framework<br/>
		CoreGraphics.framework<br/>
		UIKit.framework<br/>
		libc++.tbd<br/>
			 AVFoundation.framework<br/>
			 AssetsLibrary.framework<br/>
			 AddressBook.framework<br/>
			 CoreLocation.framework<br/>
		UserNotifications.framework
 		</td>
	    <td> libcoreSupport.a<br/>
		liblibPDRCore.a<br/>
		liblibUI.a<br/>
		liblibNavigator.a<br/>
		liblibNativeUI.a<br/>
		liblibNativeObj.a<br/>
		liblibAdSupport.a(IDFA)<br/>
		KSCrash.framework
		</td>
	    <td>PandoraApi.bundle 
		</td>
	    <td> 
		无
		</td>
	</tr>
	<tr >
	    <td>Accelerometer(加速度传感器)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/accelerometer.html"> plus.accelerometer </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/system/accelerometer"> Accelerometer </a></td>
	    <td> Accelerate.framework </td>
	    <td> liblibAccelerometer.a </td>
	    <td> </td>
	    <td> </td>
	</tr>
	<tr>
	    <td>Audio(音频)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/audio.html"> plus.audio </a></td>
	    <td>
		<a href="https://uniapp.dcloud.io/api/media/record-manager"> record-manager </a><br/>
		<a href="https://uniapp.dcloud.io/api/media/audio-context"> audio-context </a>
		</td>
	    <td> AVFoundation.framework </td>
	    <td> 
		liblibMedia.a<br/>
		libopencore-amrnb.a<br/>
		libmp3lame.a
		</td>
	    <td> </td>
	    <td>
		NSMicrophoneUsageDescription
		</td>
	</tr>
	<tr>
	    <td>Camera(摄像头)/Gallery(图片选择)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/camera.html"> plus.camera </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/media/image"> image </a></td>
	    <td> 
		AssetsLibrary.framework <br/>
		Photos.framework <br/>
		CoreMedia.framework<br/>
		MetalKit.framework<br/>
		GLKit.framework 
		</td>
	    <td> liblibCamera.a </td>
	    <td>
		DCTZImagePickerController.bundle<br/>
		DCMediaEditingController.bundle
		</td>
	    <td>
		NSCameraUsageDescription<br/>
		NSPhotoLibraryUsageDescription<br/>
		NSPhotoLibraryAddUsageDescription
		</td>
	</tr>
	<tr>
	    <td>Contacts(通讯录)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/contacts.html"> plus.contacts </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/system/contact"> contact </a></td>
	    <td> 
	    AddressBookUI.framework<br/>
	    AddressBook.framework<br/>
	    AVFoundation.framework<br/>
	    CoreVideo.framework<br/>
	    CoreMedia.framework 
	    </td>
	    <td> liblibContacts.a </td>
	    <td>
	    </td>
	    <td>
	    NSContactsUsageDescription
	    </td>
	</tr>
	<tr>
	    <td>File(文件系统)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/io.html"> plus.io </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/file/file"> file </a></td>
	    <td>
	    </td>
	    <td> 
		liblibIO.a<br/>
		</td>
	    <td> 
	    </td>
	    <td>
		</td>
	</tr>
	<tr>
		<td rowspan="3">Geolocation(定位)</td>
		<td rowspan="3"><a href="https://www.html5plus.org/doc/zh_cn/geolocation.html"> plus.geolocation </a></td>
		<td rowspan="3"><a href="https://uniapp.dcloud.io/api/location/location"> location </a></td>
		<td>
		高德定位：<br/>
		libc++.tbd<br/>
		libz.tbd<br/>
		ExternalAccessory.framework<br/>
		GLKit.framework<br/>
		security.framework<br/>
		CoreTelephony.framework<br/>
		SystemConfiguration.framework
		</td>
		<td>
		libAMapLocationPlugin.a<br/>
		liblibGeolocation.a<br/>
		AMapFoundationKit.framework<br/>
		AMapLocationKit.framework 
		</td>
		<td> 
		</td>
		<td>
		NSLocationUsageDescription<br/>
		NSLocationWhenInUseUsageDescription<br/>
		NSLocationAlwaysUsageDescription<br/>      
		NSLocationAlwaysAndWhenInUseUsageDescription<br/>
		</td>
	</tr>
	<tr>
		<td>
		系统定位：<br/>
		CoreLocation.framework
		</td>
		<td>
		liblibGeolocation.a
		</td>
		<td>  
		</td>
		<td>
		NSLocationUsageDescription<br/>
		NSLocationWhenInUseUsageDescription<br/>
		NSLocationAlwaysUsageDescription<br/>      
		NSLocationAlwaysAndWhenInUseUsageDescription
		</td>
	</tr>
	<tr>
	    <td>
	    百度定位：<br/>
	    SystemConfiguration.framework<br/>
	    Security.framework<br/>
	    CoreLocation.framework<br/>
	    libc++.tbd<br/>
	    libsqlite3.0.tbd
	    </td>
	    <td>
	    liblibGeolocation.a<br/>
                libBaiduLocationPlugin.a<br/>
                libBaiduKeyVerify.a<br/>
                libssl.a<br/>
                libcrypto.a<br/>
		BaiduMapAPI_Utils.framework<br/>
		BaiduMapAPI_Base.framework<br/>
		BaiduMapAPI_Search.framework<br/>
		BMKLocationKit.framework
	    </td>
	    <td>  
	    </td>
	    <td>
	    NSLocationUsageDescription<br/>
	    NSLocationWhenInUseUsageDescription<br/>
	    NSLocationAlwaysUsageDescription<br/>      
	    NSLocationAlwaysAndWhenInUseUsageDescription
	    </td>
	</tr>
	<tr>
	    <td>native.js</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/ios.html"> plus.ios </a></td>
	    <td></td>
	    <td>
	    </td>
	    <td> 
		liblibPGInvocation.a
		<br/>
		</td>
	    <td> 
	    </td>
	    <td>
		</td>
	</tr>
	<tr>
	    <td>Messaging(短彩邮件消息)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/messaging.html"> plus.messaging </a></td>
	    <td></td>
	    <td> 
	    MessageUI.framework
	    </td>
	    <td> liblibMessage.a </td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <td>Orientation(设备方向)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/orientation.html"> plus.orientation </a></td>
	    <td></td>
	    <td> 
	    CoreLocation.framework
	    </td>
	    <td> liblibOrientation.a </td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <td>Proximity(距离传感器)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/proximity.html"> plus.proximity </a></td>
	    <td></td>
	    <td> 
	    </td>
	    <td> liblibPGProximity.a </td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <td>XMLHttpRequest(网络请求)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/xhr.html"> plus.net </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/request/request?id=request"> request </a></td>
	    <td> 
	    </td>
	    <td> liblibXHR.a </td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <td>zip</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/zip.html"> plus.zip </a></td>
	    <td></td>
	    <td>
	    </td>
	    <td> 
		liblibZip.a
		<br/>
		</td>
	    <td> 
	    </td>
	    <td>
		</td>
	</tr>
	<tr>
	    <td rowspan="2">Barcode</td>
	    <td rowspan="2"><a href="https://www.html5plus.org/doc/zh_cn/barcode.html"> plus.barcode </a></td>
	    <td rowspan="2"><a href="https://uniapp.dcloud.io/api/system/barcode"> barcode </a></td>
	    <td> 
		5+ App项目：<br/>
		AVFoundation.framework<br/>
		ImageIO.framework<br/>
		CoreVideo.framework<br/>
		CoreMedia.framework<br/>
		libiconv.2.tbd<br/>
	    </td>
	    <td> 
		liblibBarcode.a <br/>
		libDCUniZXing.a<br/>
		libuchardet.a<br/>
		</td>
	    <td>
	    </td>
	    <td>
		NSCameraUsageDescription
	    </td>
	</tr>
	<tr>
	    <td>
	    uni-app项目：<br/>
	    AVFoundation.framework<br/>
	    ImageIO.framework<br/>
	    CoreVideo.framework<br/>
	    CoreMedia.framework<br/>
	    libiconv.2.tbd<br/>
	    </td>
	    <td> 
	    libDCUniBarcode.a <br/>
		liblibBarcode.a <br/>
		libDCUniZXing.a<br/>
	    libuchardet.a<br/>
	    </td>
	    <td>
	    </td>
	    <td>
	    NSCameraUsageDescription
	    </td>
	</tr>
	<tr>
		<td rowspan="3">Maps（地图）</td>
		<td rowspan="3"><a href="https://www.html5plus.org/doc/zh_cn/maps.html"> plus.maps </a></td>
		<td rowspan="3"><a href="https://uniapp.dcloud.io/api/location/map"> map </a></td>
		<td>
		（vue）高德地图：<br/>
		MapKit.framework<br/>
		CoreLocation.framework<br/>
		libc++.tbd<br/>
		GLKit.framework
		</td>
		<td>
		liblibMap.a<br/>
		libAMapImp.a<br/>
		AMapSearchKit.framework<br/>
		MAMapKit.framework<br/>
		AMapFoundationKit.framework
		</td>
		<td> 
		AMap.bundle
		</td>
		<td>
		<b>amap:</b><br/>
		appkey
		</td>
	</tr>
	<tr>
		<td>
		（vue）百度地图：<br/>
		libc++.tbd<br/>
		libsqlite3.0.tbd<br/>
		QuartzCore.framework<br/>
		CoreGraphics.framework<br/>
		CoreTelephony.framework<br/>
		SystemConfiguration.framework<br/>
		Security.framework<br/>
		MapKit.framework<br/>
		OpenGLES.framework<br/>
		CoreLocation.framework
		</td>
		<td>
		liblibMap.a<br/>
		libbmapimp.a<br/>
		libBaiduKeyVerify.a<br/>
		libssl.a<br/>
		libcrypto.a<br/>
		BaiduMapAPI_Utils.framework<br/>
		BaiduMapAPI_Base.framework<br/>
		BaiduMapAPI_Search.framework<br/>
		BaiduMapAPI_Map.framework<br/>
		BMKLocationKit.framework
		</td>
		<td> 
		mapapi.bundle
		</td>
		<td>
		<b>baidu:</b><br/>
		appkey
		</td>
	</tr>
	<tr>
	    <td>
	    （nvue）高德地图：<br/>
		（nvue不支持百度地图）
	    MapKit.framework<br/>
	    CoreLocation.framework<br/>
	    libc++.tbd<br/>
		GLKit.framework
	    </td>
	    <td>
		libDCUniMap.a
		libDCUniAmap.a
		Masonry.framework
	    AMapSearchKit.framework
	    MAMapKit.framework
	    AMapFoundationKit.framework
	    </td>
	    <td>
		AMap.bundle
		userPosition@2x.png
	    </td>
	    <td>
	    <b>amap:</b><br/>
	    appkey
	    </td>
	</tr>
	<tr>
		<td rowspan="5">Payment</td>
		<td rowspan="5"><a href="https://www.html5plus.org/doc/zh_cn/payment.html"> plus.payment </a></td>
		<td rowspan="5"><a href="https://uniapp.dcloud.io/api/plugins/payment"> payment </a></td>
		<td>
		微信支付：<br/>
		libsqlite3.0.tbd
		libz.tbd
		CoreTelephony.framework
		SystemConfiguration.framework
		</td>
		<td>
		liblibPayment.a
		libwxpay.a
		libWeChatSDK_pay.a
		</td>
		<td> 
		</td>
		<td>
		<b>[URL Types]</b><br/>
		Identifier=weixin<br/>
		URL Schemes=appid
		</td>
	</tr>
	<tr>
		<td>
		应用内支付 IAP：<br/>
		StoreKit.framework
		</td>
		<td>
		liblibPayment.a 
		libIAPPay.a
		</td>
		<td> 
		</td>
		<td>
		</td>
	</tr>
	<tr>
	    <td>
	    支付宝：<br/>
	    CFNetwork.framework
	    SystemConfiguration.framework
	    CoreMotion.framework
	    Security.framework   
		libc++.dylib
	    </td>
	    <td>
		liblibPayment.a
		libalixpayment.a
		AlipaySDK.framework
	    </td>
	    <td>
		AlipaySDK.bundle
	    </td>
	    <td>
		<b>[URL Types]</b><br/>
		Identifier=alixpay<br/>
		URL Schemes=scheme
	    </td>
	</tr>
        <tr>
	    <td>
	    paypal：<br/>
            无
	    </td>
	    <td>
	    liblibPayment.a
	    libpaypalpay.a
	    PayPalCheckout.xcframework
	    </td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
        <tr>
	    <td>
	    stripe：<br/>
            无
	    </td>
	    <td>
	    liblibPayment.a
	    libstripepay.a
            Stripe.xcframework
            StripeCore.xcframework
            StripeUICore.xcframework
            Stripe3DS2.xcframework
	    </td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
		<td rowspan="3">Share(分享)</td>
		<td rowspan="3"><a href="https://www.html5plus.org/doc/zh_cn/share.html"> plus.share </a></td>
		<td rowspan="3"><a href="https://uniapp.dcloud.io/api/plugins/share"> share </a></td>
		<td>
		新浪微博：<br/>
		ImageIO.framework
		libsqlite3.0.tbd
		</td>
		<td>
		liblibShare.a
		libSinaShare.a
		libWeiboSDK.a
		</td>
		<td>
		WeiboSDK.bundle
		</td>
		<td>
		<b>sinaweibo：</b><br/>
		appkey<br/>
		appSecret<br/>
		redirectURI<br/>
		<b>[URL Types]</b><br/>
		Identifier=com.weibo<br/>
		URL Schemes=wb+appkey
		</td>
	</tr>
	<tr>
	    <td>
	    QQ：<br/>
		无
	    </td>
	    <td>
		liblibShare.a<br/>
		libQQShare.a<br/>
		TencentOpenAPI.framework
	    </td>
	    <td>
	    </td>
	    <td>
		<b>[URL Types]</b><br/>
		Identifier=tencentopenapi<br/>
		URL Schemes= tencent+appid
	    </td>
	</tr>
	<tr>
	    <td>
	    微信：<br/>
	    libsqlite3.0.tbd
	    libz.tbd
	    CoreTelephony.framework
	    SystemConfiguration.framework
	    </td>
	    <td>
	    liblibShare.a
	    libweixinShare.a
	    libWeChatSDK.a
	    </td>
	    <td>  
	    </td>
	    <td>
	    <b>[URL Types]</b><br/>
	    Identifier=weixin<br/>
	    URL Schemes=appid
	    </td>
	</tr>
	<tr>
		<td rowspan="2">Speech(语音识别)</td>
		<td rowspan="2"><a href="https://www.html5plus.org/doc/zh_cn/speech.html"> plus.speech </a></td>
		<td rowspan="2"><a href="https://uniapp.dcloud.io/api/plugins/voice"> voice </a></td>
		<td>
		百度语音识别：<br/>
		libc++.tbd<br/>
		libz.tbd<br/>
		libsqlite3.tbd<br/>
		AudioToolbox.framework<br/>
		AVFoundation.framework<br/>
		CFNetwork.framework<br/>
		CoreLocation.framework<br/>
		CoreTelephony.framework<br/>
		SystemConfiguration.framework<br/>
		GLKit.framework
		</td>
		<td>
		liblibSpeech.a<br/>
		libBaiduSpeechSDK.a<br/>
		libbaiduSpeech.a   
		</td>
		<td>
		BDSClientEASRResources文件夹里的资源文件
		</td>
		<td>
		<b>baiduspeech:</b><br/>
		apikey<br/>
		secretkey<br/>
		appid
		</td>
	</tr>
	<tr>
	    <td>
	    讯飞语音识别：<br/>
		AVFoundation.framework<br/>
		AddressBook.framework<br/>
		Contacts.framework
	    </td>
	    <td>
		liblibSpeech.a<br/>
		libiflySpeech.a<br/>
		iflyMSC.framework
	    </td>
	    <td>
	    </td>
	    <td>
		<b>iFly：</b><br/>
		appid
	    </td>
	</tr>
	<tr>
	    <td>Statistic(友盟统计)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/statistic.html"> plus.statistic </a></td>
	    <td></td>
	    <td>
		CoreTelephony.framework<br/>
		SystemConfiguration.framework<br/>
		libz.tbd<br/>
		libsqlite3.tbd
	    </td>
	    <td> 
		liblibStatistic.a<br/>
		UMDevice.framework
		UMCommon.framework
		UMAPM.framework
		</td>
	    <td>
	    </td>
	    <td>
		<b>umeng：</b><br/>
		appkey
	    </td>
	</tr>
	<tr>
		<td rowspan="5">Oauth（授权登陆）</td>
		<td rowspan="5"><a href="https://www.html5plus.org/doc/zh_cn/oauth.html"> plus.oauth </a></td>
		<td rowspan="5"><a href="https://uniapp.dcloud.io/api/plugins/login"> login </a></td>
		<td>
		新浪微博：<br/>
		ImageIO.framework
		libsqlite3.0.tbd
		</td>
		<td>
		liblibOauth.a<br/>
		libSinaWBOauth.a<br/>
		liblWeiboSDK.a
		</td>
		<td>
		WeiboSDK.bundle
		</td>
		<td>
		<b>sinaweibo：</b><br/>
		appkey<br/>
		appSecret<br/>
		redirectURI<br/>
		<b>[URL Types]</b><br/>
		Identifier=com.weibo<br/>
		URL Schemes=wb+appkey
		</td>
	</tr>
	<tr>
	    <td>
	    QQ：<br/>
		无
	    </td>
	    <td>
		liblibOauth.a<br/>
		libQQOauth.a<br/>
		TencentOpenAPI.framework
	    </td>
	    <td>
		TencentOpenApi_IOS_Bundle.bundle
	    </td>
	    <td>
		<b>[URL Types]</b><br/>
		Identifier=tencentopenapi<br/>
		URL Schemes= tencent+appid
	    </td>
	</tr>
	<tr>
	    <td>
	    微信：<br/>
	    libsqlite3.0.tbd
	    libz.tbd
	    CoreTelephony.framework
	    SystemConfiguration.framework
	    </td>
	    <td>
	    liblibOauth.a<br/>
	    libWXOauth.a<br/>
	    libWeChatSDK.a
	    </td>
	    <td>  
	    </td>
	    <td>
		<b>weixinoauth:</b><br/>
		appid<br/>
		appSecret<br/>
	    <b>[URL Types]</b><br/>
	    Identifier=weixin<br/>
	    URL Schemes=appid
	    </td>
	</tr>
	<tr>
	    <td>
	    Google：<br/>
		AuthenticationServices.framework
		CoreText.framework
		CoreGraphics.framework
		LocalAuthentication.framework
		SafariServices.framework
		Security.framework
	    </td>
	    <td>
		liblibOauth.a<br/>
		libGoogleOauth.a<br/>
		GoogleSignIn.framework
		GoogleSignInDependencies.framework
	    </td>
	    <td>
		GoogleSignIn.bundle
	    </td>
	    <td>
	   <b>google:</b><br/>
		clientid<br/>
		<b>[URL Types]</b><br/>
		Identifier=google_url<br/>
		URL Schemes= 反向clientid
	    </td>
	</tr>
	<tr>
	    <td>
	    Facebook：<br/>
	    libc++.tbd
	    Accelerate.framework
	    Accounts.framework
	    AdSupport.framework
	    AudioToolbox.framework
	    CoreGraphics.framework
	    QuartzCore.framework
	    Security.framework
	    Social.framework
	    StoreKit.framework
	    </td>
	    <td>
	    liblibOauth.a<br/>
	    libFBOauth.a<br/>
	    FBSDKCoreKit.framework
	    FBAEMKit.framework
	    FBSDKCoreKit_Basics.framework
	    FBSDKLoginKit.framework
	    </td>
	    <td>  
	    </td>
	    <td>
		<b>FacebookAppID:</b><br/>
		appid<br/>
	    <b>[URL Types]</b><br/>
	    Identifier=facebook<br/>
	    URL Schemes=fb+appid
	    </td>
	</tr>
	<tr>
		<td rowspan="2">Video（视频播放）</td>
		<td rowspan="2"><a href="https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayer"> plus.video </a></td>
		<td rowspan="2"><a href="https://uniapp.dcloud.io/component/video"> video </a></td>
		<td>
		vue 页面：<br/>
		libc++.tbd<br/>
		libbz2.tbd<br/>
		libz.tbd<br/>
		AudioToolbox.framework<br/>
		AVFoundation.framework<br/>
		CoreGraphics.framework<br/>
		CoreMedia.framework<br/>
		CoreVideo.framework<br/>
		VideoToolbox.framework<br/>
		MediaPlayer.framework<br/>
		MobileCoreServices.framework<br/>
		OpenGLES.framework<br/>
		QuartzCore.framework<br/>
		UIKit.framework<br/>
		VideoToolbox.framework<br/>
		</td>
		<td>
		liblibVideo.a<br/>
		DCUniVideoPublic.framework<br/>
		IJKMediaFrameworkWithSSL.framework<br/>
		Masonry.framework
		</td>
		<td>
		DCSVProgressHUD.bundle<br/>
		DCPGVideo.bundle
		</td>
		<td>
		</td>
	</tr>
	<tr>
	    <td>
	    nvue 页面：<br/>
		libc++.tbd<br/>
		libbz2.tbd<br/>
		libz.tbd<br/>
		AudioToolbox.framework<br/>
		AVFoundation.framework<br/>
		CoreGraphics.framework<br/>
		CoreMedia.framework<br/>
		CoreVideo.framework<br/>
		VideoToolbox.framework<br/>
		MediaPlayer.framework<br/>
		MobileCoreServices.framework<br/>
		OpenGLES.framework<br/>
		QuartzCore.framework<br/>
		UIKit.framework<br/>
		VideoToolbox.framework<br/>
	    </td>
	    <td>
		libDCUniVideo.a<br/>
		DCUniVideoPublic.framework<br/>
		IJKMediaFrameworkWithSSL.framework<br/>
		Masonry.framework
	    </td>
	    <td>
		DCSVProgressHUD.bundle<br/>
		DCPGVideo.bundle
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <td>fingerprint(指纹识别)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/fingerprint.html"> plus.fingerprint </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/other/authentication"> authentication </a></td>
	    <td>
		LocalAuthentication.framework
	    </td>
	    <td> 
		liblibFingerprint.a
		</td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <td>faceId（人脸识别）</td>
	    <td></td>
	    <td><a href="https://uniapp.dcloud.io/api/other/authentication"> authentication </a></td>
	    <td>
		LocalAuthentication.framework
	    </td>
	    <td> 
		libDCUniFaceId.a
		</td>
	    <td>
	    </td>
	    <td>
		NSFaceIDUsageDescription
	    </td>
	</tr>
	<tr>
	    <td>BlueTooth(蓝牙)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/bluetooth.html"> plus.bluetooth </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/system/bluetooth"> bluetooth </a></td>
	    <td>
		CoreBluetooth.framework
	    </td>
	    <td> 
		liblibBlueTooth.a
		</td>
	    <td>
	    </td>
	    <td>
		NSBluetoothPeripheralUsageDescription<br/>
		NSBluetoothAlwaysUsageDescription
	    </td>
	</tr>
	<tr>
	    <td>sqlite（数据库）</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/sqlite.html"> plus.sqlite </a></td>
	    <td></td>
	    <td>
		libsqlite3.0.dylib
	    </td>
	    <td> 
		liblibSqlite.a
		</td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <td>livepusher(直播推流)</td>
	    <td><a href="https://www.html5plus.org/doc/zh_cn/video.html#plus.video.createLivePusher"> plus.video.createLivePusher </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/media/live-player-context?id=createliveplayercontext"> createliveplayercontext </a></td>
	    <td>
		AVFoundation.framework<br/>
		QuartzCore.framework<br/>
		OpenGLES.framework<br/>
		AudioToolbox.framework<br/>
		VideoToolbox.framework<br/>
		Accelerate.framework<br/>
		CoreMedia.framework<br/>
		CoreTelephony.framework<br/>
		SystemConfiguration.framework<br/>
		CoreMotion.framework
	    </td>
	    <td>
		liblibLivePush.a<br/>
		libDCUniGPUImage.a<br/>
		libDCUniLivePush.a<br/>
		UPLiveSDKDll.framework(动态库)
		</td>
	    <td>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <td>iBeacon</td>
	    <td><a href="plus.ibeacon](https://www.html5plus.org/doc/zh_cn/ibeacon.html"> plus.ibeacon </a></td>
	    <td><a href="https://uniapp.dcloud.io/api/system/ibeacon"> ibeacon </a></td>
	    <td>
		CoreBluetooth.framework<br/>
		CoreLocation.framework
	    </td>
	    <td>
		liblibBeacon.a
		</td>
	    <td>
	    </td>
	    <td>
		CoreBluetooth.framework<br/>
		CoreLocation.framework
	    </td>
	</tr>
</table>

工程中引入liblibLog.a库和在control.xml里配置debug="true" 可以在集成的Xcode里输入console.log()日志。


2、在离线SDK包里，SDK/Resources/Libs目录下找到需要的库文件，然后把找到的liblibBlueTooth.a库拷贝到工程的libs目录下，再根据配置要求把相关的库引入到工程中，如下图：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx2.png)
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx3.png)

3、有些功能（如推送、分享、语音识别、统计），则需要按照上文提到的“功能模块对照表”中的内容，去查找对应模块的“Info”值，并在工程属性界面“Info”下“Custom iOS Target Properties”中配置对应的项：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx11.png)

如百度地图三方SDK，需要配置在百度云平台申请应用的appkey，找到“baidu”项下的“appkey”，双击后输入正确的appkey值：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx12.png)

4、有些功能（如新浪微博分享和微信分享）还需要配置应用的URL Schemes，在“URL Types”项下分别输入在各开放平台申请的值：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/ModuleReference/nzkx13.png)

5、iOS10之后 有些功能（如地图）需要在info.plist文件中添加隐私权限配置。

[info.plist文件中如何添加隐私权限配置](http://ask.dcloud.net.cn/article/931)



### 其他模块/三方SDK配置

* [定位配置](/AppDocs/usemodule/iOSModuleConfig/geolocation.md)
* [推送配置](/AppDocs/usemodule/iOSModuleConfig/push.md)
* [分享配置](/AppDocs/usemodule/iOSModuleConfig/share.md)
* [登陆鉴权配置](/AppDocs/usemodule/iOSModuleConfig/oauth.md)
* [地图配置](/AppDocs/usemodule/iOSModuleConfig/map.md)
* [支付配置](/AppDocs/usemodule/iOSModuleConfig/pay.md)
* [语音识别配置](/AppDocs/usemodule/iOSModuleConfig/speech.md)
* [直播推流配置](/AppDocs/usemodule/iOSModuleConfig/livepusher.md)
* [统计配置](/AppDocs/usemodule/iOSModuleConfig/statistic.md)
* [uni-AD广告联盟配置](/AppDocs/usemodule/iOSModuleConfig/uniad.md)
* [iOS UIWebview配置](/AppDocs/usemodule/iOSModuleConfig/uiwebview.md)
