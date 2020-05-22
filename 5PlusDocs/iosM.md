##iOS平台 离线下载包中各个文件或文件夹的作用 

1、5+app-uniplugin-demo这个文件夹的作用：
	在uni-app中开发5+插件，详细请看目录里的 .md文件。

2、HBuilder-Hello这个文件夹的作用：
	5+app、uni-app项目离线打包的示例工程（注意：如果是uni-app项目且为自定义组件模式时，请查看这个地址（https://ask.dcloud.net.cn/article/35871）来进行配置）。
	
3、HBuilder-Integrate这个文件夹的作用：
	5+规范的原生插件开发工程,注意这个里面的工程不是打包工程。

4、HBuilder-uniPluginDemo这个目录的作用：
	uni-app规范的、基于weex扩展的原生插件开发工程，,注意这个里面的工程不是打包工程。

5、Feature-iOS.xls这个文件的作用：
	配置表（依赖的库、资源文件、参数配置等）。

6、HBuilder-Integrate-Swift.zip 这个zip包的作用：
	和上面的3一样，只不过是swift版。

7、SDK这个目录的作用：
	这个里面是工程需要的库文件，.h头文件，配置文件，资源文件。


### 以下是SDK/Libs文件夹中主要库的作用：

|  第三方库名称 |  作用  |
| :------: | :------: |
| AlipaySDK.framework | 支付宝支付|
| AMapFoundationKit.framework，AMapLocationKit.framework，AMapSearchKit.framework，MAMapKit.framework |高德地图、定位|
| BaiduMapAPI_Base.framework，BaiduMapAPI_Cloud.framework，BaiduMapAPI_Location.framework，BaiduMapAPI_Map.framework，BaiduMapAPI_Search.framework，BaiduMapAPI_Utils.framework |百度地图定位|
| BUAdSDK.framework ，BUFoundation.framework|穿山甲广告|
| GTSDK.framework |个推消息推送|
| iflyMSC.framework |讯飞语音|
| IJKMediaFramework.framework |IJK视频播放器|
| UMAnalytics.framework，UMCommon.framework|友盟统计|
| libBaiduSpeechSDK.a |百度语音|
| libWeChatSDK.a |微信SDK不带支付功能|
| libWeChatSDK_pay.a |微信SDK带支付功能|
| libWeiboSDK.a |新浪微博SDK|
| UPLiveSDKDll.framework |又拍云推流|
| QHADSDK.framework |360广告|
