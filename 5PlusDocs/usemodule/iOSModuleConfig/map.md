### 百度地图配置
LinkerFlags、framework等添加方法请参考这个[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.添加下列Linker Flags:  -llibMap、-lBaiduKeyVerify、-lbmapimp

2.添加下列framework: 

| 添加下列framework | 
| :-------: | 
| libstdc++.tbd |
| libsqlite3.0.dylib |
| QuartzCore.framework |
| CoreGraphics.framework |
| CoreTelephony.framework |
| SystemConfiguration.framework |
| Security.framework |
| MapKit.framework |
| OpenGLES.framework |
| CoreLocation.framework |
| BaiduMapAPI_Utils.framework |
| BaiduMapAPI_Base.framework |
| BaiduMapAPI_Search.framework |
| BaiduMapAPI_Map.framework |
| BaiduMapAPI_Location.framework |
| libbmapimp.a |
| libBaiduKeyVerify.a |
| libssl.a |
| libcrypto.a | 

3.添加下列文件: mapapi.bundle

4.申请Appkey,如果没有appkey将会导致地图显示不出
 参考[百度地图Appkey申请章节](http://ask.dcloud.net.cn/article/29)

5.打开Info.plist文件找到baidu项，如果没有按图片中的格式添加该项，在下图中的红色区域输入申请的Appkey
注意info.plist中Bundle identifier要和你输入的安全码一致

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/1153.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/2460.png)


### 常见问题解决
1.如下图只能看见栅格图可能的原因appkey配置不对、Bundle identifier和安全码不一致、百度地图缓存导致的可以删除app重新安装

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/2461.png)


2.提示appKey校验错误

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/5178.png)

在XCode控制台搜索baidu maponGetPermissionState 查看错误码是多少,对比百度开发平台错误信息

### 高德地图配置
Linker Flags、framework等添加方法请参考这个[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.添加下列Linker Flags:  -llibMap、-lAMapImp

2.添加下列依赖库:
  libAMapImp.a、liblibMap.a和
   参考[高德地图章节](http://lbs.amap.com/api/ios-sdk/guide/create-project/manual-configuration)

3.添加下列文件: AMap.bundle

4.申请Appkey,如果没有appkey将会导致地图显示不出
 参考[高德地图Appkey申请章节](http://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)

5.打开Info.plist文件找到amap项，如果没有按图片中的格式添加该项，在下图中输入申请的appkey
   
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/map/28806.png)



**注意：工程里只能有一个地图，其他的地图功能，要删除info.plist里的key，和对应的库文件,请详细根据Feature-iOS.xml文件的内容配置**
