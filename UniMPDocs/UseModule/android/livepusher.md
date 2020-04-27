### 需要拷贝添加的文件

| 路径 | 文件 | 
| :-------: | :-------: |
| uniMPSDK\Features\libs | media-livepusher-release.aar，weex_livepusher-release.aar|

将表格中的文件拷贝至主Module中的libs下。

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200217/d8d4ac2339d1643def4c8dee1567102a.png)

### Androidmainfest.xml文件需要修改的项

**需要在application节点前添加权限**

~~~
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.FLASHLIGHT"/>
<uses-feature android:name="android.hardware.camera"/>
<uses-feature android:name="android.hardware.camera.autofocus"/>
~~~

### 修改dcloud_properties.xml配置

dcloud_properties.xml文件在assets/data目录下 

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200217/ac1dc92cb78eaf4ee9ede9b37d92aa5f.png)

在dcloud_properties.xml添加以下信息

#### features节点下设置

~~~
<feature name="LivePusher" value="io.dcloud.media.live.LiveMediaFeatureImpl"/>
~~~