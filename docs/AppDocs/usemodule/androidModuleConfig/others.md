## VideoPlayer（视频播放）
## VideoPlayer (video playback)

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK/libs | media-release.aar、weex_videoplayer-release.aar|

### dcloud_properties.xml需要添加如下代码
### dcloud_properties.xml needs to add the following code

```
<feature name="VideoPlayer" value="io.dcloud.media.MediaFeatureImpl"/>
```

## LivePusher（直播推流）
## LivePusher (live streaming)

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK/libs | weex_livepusher-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

#### 需要在application节点前添加权限
#### Need to add permissions before the application node

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
### dcloud_properties.xml needs to add the following code

```
<feature name="LivePusher" value="io.dcloud.media.live.LiveMediaFeatureImpl"/>
```

## Barcode（扫码）

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
	<uses-permission android:name="android.permission.CAMERA" />
	<uses-feature android:name="android.hardware.camera"/>
	<uses-feature android:name="android.hardware.camera.autofocus"/>
	<uses-permission android:name="android.permission.VIBRATE"/>
	<uses-permission android:name="android.permission.FLASHLIGHT"/>
```

### dcloud_properties.xml需要添加如下代码

```
<feature name="Barcode" value="io.dcloud.feature.barcode2.BarcodeFeatureImpl"/>
```

## Bluetooth（低功耗蓝牙）
## Bluetooth (Bluetooth Low Energy)

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK/libs | Bluetooth-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

#### 需要在application节点前添加权限
#### Need to add permissions before the application node

```
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
```
**当targetSdkVersion31及以上版本时，需追加如下权限:**
**When targetSdkVersion31 and above, the following permissions need to be added:**

```
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```


### dcloud_properties.xml需要添加如下代码
### dcloud_properties.xml needs to add the following code

```
<feature name="Bluetooth" value="io.dcloud.feature.bluetooth.BluetoothFeature"/>
```

## Camera（相机/相册）

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
	<uses-permission android:name="android.permission.CAMERA" />
```

### dcloud_properties.xml需要添加如下代码

```
<feature name="Camera" value="io.dcloud.js.camera.CameraFeatureImpl"/>
```

## iBeacon

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK/libs | iBeacon-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

#### 需要在application节点前添加权限
#### Need to add permissions before the application node

```
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
```

**当targetSdkVersion31及以上版本时，需追加如下权限:**
**When targetSdkVersion31 and above, the following permissions need to be added:**

```
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```

### dcloud_properties.xml需要添加如下代码
### dcloud_properties.xml needs to add the following code

```
<feature name="iBeacon" value="io.dcloud.feature.iBeacon.WxBluetoothFeatureImpl"/>
```

## Contact（通讯录）
## Contact

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK/libs | contacts-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

#### 需要在application节点前添加权限
#### Need to add permissions before the application node

```
<uses-permission android:name="android.permission.GET_ACCOUNTS"/>
<uses-permission android:name="android.permission.WRITE_CONTACTS"/>
<uses-permission android:name="android.permission.READ_CONTACTS"/>
```

### dcloud_properties.xml需要添加如下代码
### dcloud_properties.xml needs to add the following code

```
<feature name="Contacts" value="io.dcloud.feature.contacts.ContactsFeatureImpl"></feature>
```

## Fingerprint（指纹识别）
## Fingerprint (fingerprint identification)

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK/libs | fingerprint-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

#### 需要在application节点前添加权限
#### Need to add permissions before the application node

```
<uses-permission android:name="android.permission.USE_FINGERPRINT"/>
```

### dcloud_properties.xml需要添加如下代码
### dcloud_properties.xml needs to add the following code

```
<feature name="Fingerprint" value="io.dcloud.feature.fingerprint.FingerPrintsImpl"/>
```

## Messaging（短彩邮件消息）
## Messaging (short color email message)

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK/libs | messaging-release.aar |

### Androidmainfest.xml文件需要修改的项
### Items that need to be modified in the Androidmainfest.xml file

#### 需要在application节点前添加权限
#### Need to add permissions before the application node

```
	<uses-permission android:name="android.permission.RECEIVE_SMS"/>
    <uses-permission android:name="android.permission.SEND_SMS"/>
    <uses-permission android:name="android.permission.WRITE_SMS"/>
    <uses-permission android:name="android.permission.READ_SMS"/>
```

### dcloud_properties.xml需要添加如下代码
### dcloud_properties.xml needs to add the following code

```
<feature name="Messaging" value="io.dcloud.adapter.messaging.MessagingPluginImpl" />
```

## Record（录音）

### Androidmainfest.xml文件需要修改的项

#### 需要在application节点前添加权限

```
	<uses-permission android:name="android.permission.RECORD_AUDIO" />
	<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

## SQLite（数据库）
## SQLite (database)

### 需要拷贝的文件
### Files to copy

**需要引入工程的aar文件**
**Need to import the aar file of the project**

需要将以下aar文件放到工程的libs目录下
The following aar files need to be placed in the libs directory of the project

| 路径 | 文件 | 
| path | file |
| :-------: | :-------: |
| SDK/libs | sqlite-release.aar |

### dcloud_properties.xml需要添加如下代码
### dcloud_properties.xml needs to add the following code

```
<feature name="Sqlite" value="io.dcloud.feature.sqlite.DataBaseFeature"/>
```

## gcanvas

### 需要拷贝的文件

**需要引入工程的aar文件**

需要将以下aar文件放到工程的libs目录下

| 路径 | 文件 | 
| :-------: | :-------: |
| SDK/libs | weex_gcanvas-release.aar |


## 拓展模块
## Extension module

+ audio-mp3aac-release.aar

	如果录制音频时需要录制MP3格式，需添加此模块。
	If you need to record MP3 format when recording audio, you need to add this module.
	
	使用时将aar拷贝到libs文件夹下即可，不需要额外配置。
	Just copy the aar to the libs folder when using it, no additional configuration is required.
	
## 隐私与政策提示框配置
## Privacy and policy prompt box configuration

#### 一级弹窗
#### Level 1 pop-up window

|字符串键名|字符串键值|
|String key name|String key value|
|:--:|:--:|
|dcloud_privacy_prompt_title | 模板提示框上的标题，默认为“服务协议和隐私政策”|
| dcloud_privacy_prompt_title | The title on the template prompt box, the default is "Service Agreement and Privacy Policy"|
|dcloud_privacy_prompt_accept_button_text | 模板提示框上接受按钮的文本，默认值为“同意”|
| dcloud_privacy_prompt_accept_button_text | The text of the accept button on the template prompt box, the default value is "Agree"|
|dcloud_privacy_prompt_refuse_button_text | 模板提示框上拒绝按钮的文本，默认不显示此按钮|
| dcloud_privacy_prompt_refuse_button_text | The text of the reject button on the template prompt box, this button is not displayed by default|
|dcloud_privacy_prompt_message | 模板提示框上的内容，支持richtext|
| dcloud_privacy_prompt_message | content on the template prompt box, support richtext|

#### 二级弹窗
#### Secondary pop-up window
|字符串键名|字符串键值|
|String key name|String key value|
|:--:|:--:|
|dcloud_second_privacy_prompt_title | 二级弹窗标题，默认不显示 |
| dcloud_second_privacy_prompt_title | The title of the secondary pop-up window, which is not displayed by default |
|dcloud_second_privacy_prompt_accept_button_text | 二级弹窗确认按钮，默认为“确定” |
| dcloud_second_privacy_prompt_accept_button_text | Secondary pop-up confirmation button, the default is "OK" |
|dcloud_second_privacy_prompt_refuse_button_text | 二级弹窗拒绝按钮，默认不显示此按钮 |
| dcloud_second_privacy_prompt_refuse_button_text | Secondary pop-up rejection button, this button is not displayed by default |
|dcloud_second_privacy_prompt_message | 二级弹窗模板提示框上的内容，支持richtext |
| dcloud_second_privacy_prompt_message | The content on the prompt box of the second-level pop-up window template, supporting richtext |

**注意：默认不显示二级弹窗，在配置上述二级弹窗属性之后，点击一级弹窗拒绝按钮的时候才会弹出二级弹窗。**
**Note: The second-level pop-up window is not displayed by default. After configuring the above-mentioned second-level pop-up window properties, the second-level pop-up window will only pop up when the first-level pop-up reject button is clicked. **
	
配置隐私与政策提示框参考：https://ask.dcloud.net.cn/article/36937
Configure privacy and policy prompt box reference: https://ask.dcloud.net.cn/article/36937

## 国际化配置
## Internationalization configuration

**注意：3.1.6支持了中英文多语言适配，如果需要修改默认字符串，需同时修改values、values-zh、values-en下的内容。**
**Note: 3.1.6 supports Chinese and English multi-language adaptation. If you need to modify the default string, you need to modify the contents under values, values-zh, and values-en at the same time. **

android 设置国际化可参考：[本地化您的应用](https://developer.android.com/guide/topics/resources/localization)
Android setting internationalization can refer to: [localize your application](https://developer.android.com/guide/topics/resources/localization)

#### html页面中input（type=file）打开的选择页面国际化字符串
#### The selection page internationalization string opened by input (type=file) in the html page

| 字符串键名 | 字符串键值 |
| string key name | string key value |
| :-------: | :-------: |
| dcloud_choose_an_action | 选择页面标题，默认中文为“选择操作” |
| dcloud_choose_an_action | Choose the page title, the default Chinese is "choose an action" |

#### 图片选择[plus.gallery.pick](https://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.pick)国际化字符串（多图）
#### Picture selection [plus.gallery.pick](https://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.pick) internationalized string (multiple pictures)

**注意：如果未添加gallery-dmcBig-release.aar则不需要如下配置。**
**Note: If gallery-dmcBig-release.aar is not added, the following configuration is not required. **

|字符串键名|字符串键值|
|String key name|String key value|
|:--:|:--:|
|dcloud_gallery_library_name|媒体选择器|
| dcloud_gallery_library_name|media selector|
|dcloud_gallery_all_dir_name|所有图片和视频|
| dcloud_gallery_all_dir_name|All pictures and videos|
|dcloud_gallery_all_video|所有视频|
| dcloud_gallery_all_video|All Videos|
|dcloud_gallery_all_image|所有图片|
| dcloud_gallery_all_image|All Images|
|dcloud_gallery_select_title|选择图片和视频|
| dcloud_gallery_select_title|Select Images and Videos|
|dcloud_gallery_select_video_title|选择视频|
| dcloud_gallery_select_video_title|Select Video|
|dcloud_gallery_select_image_title|选择图片|
| dcloud_gallery_select_image_title|Select Image|
|dcloud_gallery_video_dir_name|所有视频|
| dcloud_gallery_video_dir_name|All Videos|
|dcloud_gallery_msg_amount_limit|已达到选择数量上限|
| dcloud_gallery_msg_amount_limit|The maximum number of selections has been reached|
|dcloud_gallery_msg_size_limit|请压缩和剪切后上传，文件最大只支持|
| dcloud_gallery_msg_size_limit|Please compress and cut before uploading, only the largest file size is supported|
|dcloud_gallery_select_null|请选择文件|
| dcloud_gallery_select_null|Please select a file|
|dcloud_gallery_done|完成|
|dcloud_gallery_done|Done|
|dcloud_gallery_count_string|个|
| dcloud_gallery_count_string|count|
|dcloud_gallery_preview|预览|
| dcloud_gallery_preview|Preview|
|dcloud_gallery_select|选择|
| dcloud_gallery_select|Select|
|dcloud_gallery_video|视频|
| dcloud_gallery_video|video|
|dcloud_gallery_cant_play_video|没有可以播放的程序|
| dcloud_gallery_cant_play_video|No program can play|
|dcloud_gallery_read_external_storage|需要打开读取存储权限|
| dcloud_gallery_read_external_storage|need to open read storage permission|

#### 应用启动时引导用户允许权限的提示语
#### Prompt to guide users to allow permissions when the application starts

字符串键名|字符串键值
string key name | string key value
:--:|:--:|
dcloud_permission_write_external_storage_message|引导用户开启“读写手机存储”权限提示语
dcloud_permission_write_external_storage_message|Guide the user to open the "read and write mobile phone storage" permission prompt
dcloud_permission_read_phone_state_message|引导用户开启“获取设备信息”权限提示语
dcloud_permission_read_phone_state_message|Guide the user to open the permission prompt of "obtain device information"

配置应用启动时申请权限详细配置参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
Detailed configuration reference for configuring application permissions when starting an application: [https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
