如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。
If your current integrated SDK version is lower than the HBuilderX version, but the functions are normal, you can choose not to upgrade the SDK. Follow this [document](https://ask.dcloud.net.cn/article/35627) to add configuration to block the version Inconsistent pop-up prompts, the framework is normally downward compatible, you can also check the update log to consider whether to upgrade the SDK; if you want to upgrade, you can update the files in the Bundles, inc, and Libs directories under the offline sdk package.

## SDK 升级说明
## SDK upgrade instructions
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**
**⚠️Note: The dependent library in the function module needs to depend on the library of the basic module. When updating the SDK version, you need to upgrade the used basic library and the dependent library and resource files of the functional module. If you only upgrade some libraries, it may cause There is a problem with version inconsistency;**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；
The recommended method is to put the entire SDK under the project path. When adding dependent libraries or files, add them by `selecting local files`. When you upgrade next time, you can directly overwrite the entire SDK directory, avoiding the need to select separately every time. Dependent libraries;

**注意 SDK目录下的 /SDK/Bundles/PandoraApi.bundle/feature.plist，如果之前有修改过需要开发者自行备份,升级完SDK再次覆盖此文件,避免升级造成部分功能异常**
**Pay attention to the /SDK/Bundles/PandoraApi.bundle/feature.plist in the SDK directory. If it has been modified before, the developer needs to back it up. After upgrading the SDK, it will overwrite this file again to avoid some abnormal functions caused by the upgrade**


## iOS 离线SDK - 正式版
## iOS Offline SDK - Official Version

### 2022年12月28日发布——HBuilderX（3.6.15.20221228） 

[和彩云点击下载SDK，提取码: KJxT](https://caiyun.139.com/m/i?115CopJ2k13OG) 

[百度云点击下载SDK，提取码: 5ib6](https://pan.baidu.com/s/1WQa0p9B3PqZf3rO0lgcCwg?pwd=5ib6) (若下载后解压失败，使用和彩云下载)

[和彩云点击下载SDK，提取码: wLYN](https://caiyun.139.com/m/i?115CoA5Cy156K) 
[Hecaiyun click to download SDK, extraction code: wLYN](https://caiyun.139.com/m/i?115CoA5Cy156K)

+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.15.20221228）版本生成本地打包App资源。

## 3.6.15.20221228
  
+ App-iOS平台 修复 nvue 页面 ad-content-page 组件拉取广告配置失败后无法重新拉取的Bug
+ iOS平台 更新 UniPush 使用的个推SDK为 2.7.2.0 版(新版需要支持swift环境,纯OC项目添加一个swift文件后,根据提示操作即可)
+ iOS平台 修复 设置应用语言为英文时部分系统界面可能会显示为回退语言的Bug[详情](https://ask.dcloud.net.cn/question/159445)



`注意：HX3.6.15版本之后，使用个推SDK需要swift环境，纯oc项目需要支持桥接swift(工程中新建一个swift文件后，根据提示操作即可)`



[和彩云点击下载历史版本，提取码: T941](https://caiyun.139.com/m/i?115CoVK34ftgi) 

[百度网盘下载历史版本，提取码: x45v](https://pan.baidu.com/s/1Fo9zb661IZYj0iCF_vBSVg?pwd=x45v)(若下载后解压失败，使用和彩云下载)




[历次更新说明](AppDocs/download/update_history_iOS_release.md)
[Previous update instructions](AppDocs/download/update_history_iOS_release.md)

## iOS 离线SDK - Alpha版
## iOS Offline SDK - Alpha Version


### 2023年01月09日发布——HBuilderX（3.6.16.20230109-alpha）


[和彩云点击下载SDK，提取码: wx6x](https://caiyun.139.com/m/i?115CoAKfgRAVo)

[百度云点击下载SDK，提取码: q1ja](https://pan.baidu.com/s/1lz85b9tORlZivMXy5FkIVg?pwd=q1ja) (若下载后解压失败，使用和彩云下载)


+ 更新uni-app离线打包支持，需使用HBuilderX（3.6.16.20230109-alpha）版本生成本地打包App资源。

## 3.6.16.20230109-alpha

* uni-app插件
  + App-iOS平台 修复 nvue 页面 ad-content-page 组件拉取广告配置失败后无法重新拉取的Bug
  + App-iOS平台 修复 nvue 页面 map 组件使用自定义地图样式后切换卫星图无效的Bug [详情](https://ask.dcloud.net.cn/question/159316)
  + App-iOS平台 修复 使用模拟器开启调试后启动应用白屏的Bug [详情](https://ask.dcloud.net.cn/question/160363)
  + App-iOS平台 修复 Vue3 项目中 input 组件 disabled 无法动态修改的Bug 详情

* App插件(含5+App和uni-app的App端)
  + iOS平台 更新 UniPush 使用的个推SDK为 2.7.2.0 版，因个推改为 Swift 版，需引入 Swift 库，可能导致打包后 ipa 文件变大 [详情](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
  + iOS平台 修复 设置应用语言为英文时部分系统界面可能会显示为回退语言的Bug [详情](https://ask.dcloud.net.cn/question/159445)
  + iOS平台 修复 自定义基座真机运行可能导致 setStorage 保存的数据丢失的Bug [详情](https://ask.dcloud.net.cn/question/159903)
  + iOS平台 修复 plus.nativeUI.toast 设置 style 为 inline 时 iconWidth/iconHeight 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/160192)
  + iOS平台 修复 uni-AD 优量汇开屏广告展示期间弹出提示框可能导致开屏界面不会关闭的Bug
  + iOS平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备返回数据没有 advertisData 字段的Bug [详情](https://ask.dcloud.net.cn/question/160178)

`注意：HX3.6.15版本之后，使用个推SDK需要swift环境，纯oc项目需要支持桥接swift(工程中新建一个swift文件后，根据提示操作即可)`


[和彩云点击下载历史版本，提取码: b08j](https://caiyun.139.com/m/i?115CooLC4PDGU) 

[百度云点击下载历史版本，提取码: xr1k](https://pan.baidu.com/s/1NWaXtYLSCOK4OTBOnRkYEw?pwd=xr1k) (若下载后解压失败，使用和彩云下载)

[历次更新说明](AppDocs/download/update_history_iOS_alpha.md)
[Previous update instructions](AppDocs/download/update_history_iOS_alpha.md)
