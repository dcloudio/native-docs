# uni-app原生插件集成指南
# uni-app native plugin integration guide
## 准备环境
## Prepare the environment
1. Android studio
2. [插件市场](https://ext.dcloud.net.cn/)
2. [Plugin Market](https://ext.dcloud.net.cn/)
3. HBuilderX

## 集成示例
## Integration example
#### 1. 打开Android Studio，创建一个新项目
#### 1. Open Android Studio and create a new project
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_21.png)


#### 2. 下载最新版SDK，[最新版SDK下载地址](/AppDocs/download/android.md)
#### 2. Download the latest SDK, [the latest SDK download address](/AppDocs/download/android.md)

将下载目录/SDK/libs下的lib.5plus.base-release.aar和uniapp-release.aar放入到libs文件夹下（如果需要使用其他功能，可参考SDK中的Feature-Android.xls进行配置）。
Put lib.5plus.base-release.aar and uniapp-release.aar under the download directory/SDK/libs into the libs folder (if you need to use other functions, you can refer to Feature-Android.xls in the SDK for configuration ).

将下载目录/SDK/assets下的data文件放入项目assets目录下。
Put the data file under the download directory/SDK/assets into the project assets directory.

**注意：Android studio默认显示的模式是Android模式，需将模式切换到project下才能看见libs文件夹，如果文件夹不存在，需要手动创建**
**Note: The default mode displayed by Android studio is Android mode. You need to switch the mode to project to see the libs folder. If the folder does not exist, you need to create it manually**

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_22.png)

#### 3. 插件市场下载uni-app插件（此处以RichAlert为例）
#### 3. Download the uni-app plugin from the plugin market (take RichAlert as an example here)

#### 4. 插件资源配置
#### 4. Plugin resource configuration
将下载的插件解压，将插件中android目录下的aar/jar文件放入libs下，其余文件参考插件文档放入指定文件夹中
![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/android_plugin_img_23.png)


#### 5. 在assets目录下创建dcloud_uniplugins.json文件
#### 5. Create a dcloud_uniplugins.json file in the assets directory
插件配置信息请参考插件配置文档或插件配置文件package.json
For plug-in configuration information, please refer to the plug-in configuration document or the plug-in configuration file package.json
关于package.json请参考：**[Android uni-app原生插件开发文档](/NativePlugin/course/android?id=插件调试)**
For package.json, please refer to: **[Android uni-app native plug-in development document](/NativePlugin/course/android?id=%E6%8F%92%E4%BB%B6%E8%B0%83%E8% AF%95)**
```
{  
  "nativePlugins": [  
    {
      "plugins": [  
        {  
          "type": "module",  
          "name": "DCloud-RichAlert",  
          "class": "uni.dcloud.io.uniplugin_richalert.RichAlertWXModule"  
        }  
      ]  
    }  
  ]  
}
```

#### 6. 配置gradle文件
#### 6. Configure gradle file
添加指定依赖
Add specified dependencies
```
dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    implementation fileTree(dir: 'libs', include: ['*.aar'])

    implementation "com.android.support:recyclerview-v7:28.0.0"
    implementation "com.android.support:support-v4:28.0.0"
    implementation "com.android.support:appcompat-v7:28.0.0"

    implementation 'com.alibaba.android:bindingx-core:1.0.3'
    implementation 'com.alibaba.android:bindingx_weex_plugin:1.0.3'
    implementation 'com.squareup.okhttp:okhttp:2.3.0'
    implementation 'com.squareup.okhttp:okhttp-ws:2.3.0'
    // 基座需要，必须添加
    // Base required, must be added
    implementation 'com.github.bumptech.glide:glide:4.9.0'
}
```
其余uni-app离线集成事项请参考：**[Android平台，uni-app离线打包集成要领及注意事项](http://ask.dcloud.net.cn/article/35139)**
For other uni-app offline integration matters, please refer to: **[Android platform, uni-app offline packaging integration essentials and precautions](http://ask.dcloud.net.cn/article/35139)**

#### 7. 运行
#### 7. Run
在HBuilderX中创建uni-app项目并按照插件文档编写相应测试代码
Create a uni-app project in HBuilderX and write the corresponding test code according to the plug-in documentation
	1. 自定义基座方式运行
	1. Run in custom base mode
打包自定义基座请参考：**[什么是自定义基座及使用说明](http://ask.dcloud.net.cn/article/35115)**
Please refer to: **[What is a custom base and its instructions](http://ask.dcloud.net.cn/article/35115)**
	2. 导出uni-app资源并运行
	2. Export uni-app resources and run
导出方式请参考：**[HBuilderX生成本地打包App资源](http://ask.dcloud.net.cn/question/60254)**
For the export method, please refer to: **[HBuilderX generates local packaged App resources](http://ask.dcloud.net.cn/question/60254)**

示例Github地址：https://github.com/dcloudio/UniPluginPackage
Example Github address: https://github.com/dcloudio/UniPluginPackage

