### 需要拷贝添加的文件
### Need to copy the added files

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| uniMPSDK\Features\libs | media-livepusher-release.aar，weex_livepusher-release.aar|

将表格中的文件拷贝至主Module中的libs下。
Copy the files in the table to libs in the main Module.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_1.png)

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

**需要在application节点前添加权限**
**Need to add permissions before the application node**

```
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.FLASHLIGHT"/>
<uses-feature android:name="android.hardware.camera"/>
<uses-feature android:name="android.hardware.camera.autofocus"/>
```

### 修改dcloud_properties.xml配置
### Modify dcloud_properties.xml configuration

dcloud_properties.xml文件在assets/data目录下 
The dcloud_properties.xml file is in the assets/data directory

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_3_2.png)

在dcloud_properties.xml添加以下信息
Add the following information in dcloud_properties.xml

#### features节点下设置
#### Settings under the features node

```
<feature name="LivePusher" value="io.dcloud.media.live.LiveMediaFeatureImpl"/>
```