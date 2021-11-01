## 说明

提供相对 HBuilderX 最新正式版 及上个正式版本的 SDK 下载，如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK。

## SDK 升级说明
**⚠️注意：功能模块中的依赖库需要依赖基础模块的库，更新SDK版本时，需要将使用到的基础库和功能模块的依赖库及资源文件统一升级，如果仅升级部分库可能会导致版本不一致出现问题；**

建议做法，将 SDK 整个放到工程路径下，添加依赖库或文件的时候通过 `选择本地文件的方式`添加，下次升级的时候直接整个覆盖SDK目录即可，避免每次都需要单独去挑选所依赖的库；

## 更新日志

#### SDK 3.2.12
[点击下载 UniMP_iOS_SDK](https://download.dcloud.net.cn/unimpsdk/UniMPSDK_iOS@3.2.12.zip)

+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.12.20211029.html)


## 历史版本
> 历史版本仅提供上个正式版本的 SDK 下载

#### 下载地址
链接: [https://pan.baidu.com/s/1UCsDFTc7IdhgCarPmuGHaQ](https://pan.baidu.com/s/1UCsDFTc7IdhgCarPmuGHaQ)  密码: edh1

#### SDK 3.2.9

+ 新增 拦截胶囊按钮点击事件钩子方法，可自行处理胶囊按钮点击的逻辑，如自定义弹窗等 [API说明](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=dcunimpsdkenginedelegate-%e7%9b%b8%e5%85%b3%e6%96%b9%e6%b3%95)
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.9.20210927.html)

#### SDK 3.2.3 (补丁版本2)

+ 修复 3.2.3 版本引起的小程序内 wgt 热更新后白屏的Bug；
+ 修复 3.2.3 版本引起的频繁快速启动关闭小程序偶像崩溃的Bug；
+ 修复 3.2.3 版本引起的未开启手势关闭并使用 push 方式打开小程序时原生导航栏没有正常隐藏的Bug；
+ 修复 3.2.3 版本引起的未开启手势关闭并使用 push 方式第二次打开小程序后，手势还可以关闭的Bug；
+ [更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.3.20210825.html)

#### SDK 3.2.2

+ 修复 小程序内 wgt 热更新后白屏的Bug；
+ 修复 打开第二个小程序时直达二级页面无效的Bug；
+ 新增 **支持多个小程序同时运行**;
+ 新增 支持配置胶囊按钮样式 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e8%87%aa%e5%ae%9a%e4%b9%89%e8%83%b6%e5%9b%8a%e6%8c%89%e9%92%ae%e6%a0%b7%e5%bc%8f);
+ 新增 胶囊‘x’关闭按钮点击事件 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=dcunimpsdkenginedelegate-%e7%9b%b8%e5%85%b3%e6%96%b9%e6%b3%95)
+ 新增 使用小程序实例发送事件 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=%e5%90%91%e5%b0%8f%e7%a8%8b%e5%ba%8f%e5%8f%91%e9%80%81%e4%ba%8b%e4%bb%b6)
+ [其他更新详情](https://download1.dcloud.net.cn/hbuilderx/changelog/3.2.2.20210818.html)