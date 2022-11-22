## VideoPlayer（视频播放）

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | media-release.aar、weex_videoplayer-release.aar|

### dcloud_properties.xml需要添加如下代码

```
<feature name="VideoPlayer" value="io.dcloud.media.MediaFeatureImpl"/>
```

## LivePusher（直播推流）

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | weex_livepusher-release.aar |

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-feature android:name="android.hardware.Camera"/>
    <uses-feature android:name="android.hardware.camera.autofocus" />
```

### dcloud_properties.xml需要添加如下代码

```
<feature name="LivePusher" value="io.dcloud.media.live.LiveMediaFeatureImpl"/>
```

## Bluetooth（低功耗蓝牙）

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | Bluetooth-release.aar |

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
```
**当targetSdkVersion31及以上版本时，需追加如下权限:**

```
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```


### dcloud_properties.xml需要添加如下代码

```
<feature name="Bluetooth" value="io.dcloud.feature.bluetooth.BluetoothFeature"/>
```

## iBeacon

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | iBeacon-release.aar |

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
```

**当targetSdkVersion31及以上版本时，需追加如下权限:**

```
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```

### dcloud_properties.xml需要添加如下代码

```
<feature name="iBeacon" value="io.dcloud.feature.iBeacon.WxBluetoothFeatureImpl"/>
```

## Contact（通讯录）

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | contacts-release.aar |

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
<uses-permission android:name="android.permission.GET_ACCOUNTS"/>
<uses-permission android:name="android.permission.WRITE_CONTACTS"/>
<uses-permission android:name="android.permission.READ_CONTACTS"/>
```

### dcloud_properties.xml需要添加如下代码

```
<feature name="Contacts" value="io.dcloud.feature.contacts.ContactsFeatureImpl"></feature>
```

## Fingerprint（指纹识别）

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | fingerprint-release.aar |

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
<uses-permission android:name="android.permission.USE_FINGERPRINT"/>
```

### dcloud_properties.xml需要添加如下代码

```
<feature name="Fingerprint" value="io.dcloud.feature.fingerprint.FingerPrintsImpl"/>
```

## Messaging（短彩邮件消息）

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | messaging-release.aar |

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
	<uses-permission android:name="android.permission.RECEIVE_SMS"/>
    <uses-permission android:name="android.permission.SEND_SMS"/>
    <uses-permission android:name="android.permission.WRITE_SMS"/>
    <uses-permission android:name="android.permission.READ_SMS"/>
```

### dcloud_properties.xml需要添加如下代码

```
<feature name="Messaging" value="io.dcloud.adapter.messaging.MessagingPluginImpl" />
```

## SQLite（数据库）

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | sqlite-release.aar |

### dcloud_properties.xml需要添加如下代码

```
<feature name="Sqlite" value="io.dcloud.feature.sqlite.DataBaseFeature"/>
```

## 拓展模块

+ audio-mp3aac-release.aar

	如果录制音频时需要录制MP3格式，需添加此模块。
	
	使用时将aar拷贝到libs文件夹下即可，不需要额外配置。
	
## 隐私与政策提示框配置

#### 一级弹窗

|字符串键名|字符串键值|
|:--:|:--:|
|dcloud_privacy_prompt_title | 模板提示框上的标题，默认为“服务协议和隐私政策”|
|dcloud_privacy_prompt_accept_button_text | 模板提示框上接受按钮的文本，默认值为“同意”|
|dcloud_privacy_prompt_refuse_button_text | 模板提示框上拒绝按钮的文本，默认不显示此按钮|
|dcloud_privacy_prompt_message | 模板提示框上的内容，支持richtext|

#### 二级弹窗
|字符串键名|字符串键值|
|:--:|:--:|
|dcloud_second_privacy_prompt_title | 二级弹窗标题，默认不显示 |
|dcloud_second_privacy_prompt_accept_button_text | 二级弹窗确认按钮，默认为“确定” |
|dcloud_second_privacy_prompt_refuse_button_text | 二级弹窗拒绝按钮，默认不显示此按钮 |
|dcloud_second_privacy_prompt_message | 二级弹窗模板提示框上的内容，支持richtext |

**注意：默认不显示二级弹窗，在配置上述二级弹窗属性之后，点击一级弹窗拒绝按钮的时候才会弹出二级弹窗。**
	
配置隐私与政策提示框参考：https://ask.dcloud.net.cn/article/36937

## 国际化配置

**注意：3.1.6支持了中英文多语言适配，如果需要修改默认字符串，需同时修改values、values-zh、values-en下的内容。**

android 设置国际化可参考：[本地化您的应用](https://developer.android.com/guide/topics/resources/localization)

#### html页面中input（type=file）打开的选择页面国际化字符串

| 字符串键名 | 字符串键值 |
| :-------: | :-------: |
| dcloud_choose_an_action | 选择页面标题，默认中文为“选择操作” |

#### 图片选择[plus.gallery.pick](https://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.pick)国际化字符串（多图）

**注意：如果未添加gallery-dmcBig-release.aar则不需要如下配置。**

|字符串键名|字符串键值|
|:--:|:--:|
|dcloud_gallery_library_name|媒体选择器|
|dcloud_gallery_all_dir_name|所有图片和视频|
|dcloud_gallery_all_video|所有视频|
|dcloud_gallery_all_image|所有图片|
|dcloud_gallery_select_title|选择图片和视频|
|dcloud_gallery_select_video_title|选择视频|
|dcloud_gallery_select_image_title|选择图片|
|dcloud_gallery_video_dir_name|所有视频|
|dcloud_gallery_msg_amount_limit|已达到选择数量上限|
|dcloud_gallery_msg_size_limit|请压缩和剪切后上传，文件最大只支持|
|dcloud_gallery_select_null|请选择文件|
|dcloud_gallery_done|完成|
|dcloud_gallery_count_string|个|
|dcloud_gallery_preview|预览|
|dcloud_gallery_select|选择|
|dcloud_gallery_video|视频|
|dcloud_gallery_cant_play_video|没有可以播放的程序|
|dcloud_gallery_read_external_storage|需要打开读取存储权限|

#### 应用启动时引导用户允许权限的提示语

字符串键名|字符串键值
:--:|:--:|
dcloud_permission_write_external_storage_message|引导用户开启“读写手机存储”权限提示语
dcloud_permission_read_phone_state_message|引导用户开启“获取设备信息”权限提示语

配置应用启动时申请权限详细配置参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
