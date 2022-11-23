## Q：uni-app原生插件使用的条件是什么？
## Q: What are the conditions for using the uni-app native plugin?
A：**要求HBuilderX1.4.0及以上版本，并且必须是uni-app项目**
A: **Requires HBuilderX1.4.0 and above, and must be a uni-app project**
老版本HBuilder不支持（请迁移到最新版本的HBuilderX），5+APP及Wap2App项目都不支持调用uni-app原生插件。
The old version of HBuilder does not support (please migrate to the latest version of HBuilderX), and 5+APP and Wap2App projects do not support calling uni-app native plug-ins.

## Q：uni-app原生插件如何支持真机运行？
## Q: How does the uni-app native plug-in support real machine operation?
A：HBuilderX中自带的默认真机运行基座不包含任何uni-app原生插件，所以不支持直接调用uni-app原生插件。
A: The default real machine running base that comes with HBuilderX does not contain any uni-app native plug-ins, so it does not support calling uni-app native plug-ins directly.
**必须使用[自定义基座](https://ask.dcloud.net.cn/article/35115)才能支持真机运行调用uni-app原生插件**
**[Custom Dock](https://ask.dcloud.net.cn/article/35115) must be used to support real machine operation and call uni-app native plugin**

## Q：uni-app原生插件真机运行提示“using unregistered native plugin 'XXX'”？
## Q: When the uni-app native plugin runs on a real machine, it prompts "using unregistered native plugin 'XXX'"?
A：**默认真机运行的基座中不包含任何原生插件，所以不能调用uni原生插件，必须自定义基座**
A: **The base running on the default real machine does not contain any native plug-ins, so the uni native plug-ins cannot be called, and the base must be customized**

- 确定配置了[自定义基座](https://ask.dcloud.net.cn/article/35115)，并且勾选了“使用自定义基座”（HBuilderX的菜单"运行"->"运行到手机或模拟器"->"使用自定义基座"）
- Make sure to configure [Custom Dock](https://ask.dcloud.net.cn/article/35115), and check "Use Custom Dock" (HBuilderX menu "Run" -> "Run to Phone or Simulator" -> "Use Custom Dock")
- 确定手机上运行的是配置uni-app原生插件后提交生成的自定义基座，可以尝试删除手机上的自定义基座应用，重新真机运行
- Make sure that the mobile phone is running the custom dock that is generated after configuring the uni-app native plug-in. You can try to delete the custom dock application on the phone and run it on the real machine again

## Q：已上传插件市场的插件如何下架？
## Q: How to remove the uploaded plug-ins from the plug-in market?
A：插件下架会导致已经使用该插件的app无法再打包，这涉及到插件使用者的利益，所以原则上不允许插件下架。如有特殊原因需要下架请使用注册账号邮箱发邮件到service@dcloud.io进行申请，并详细描述下架原因
A: The removal of the plug-in will make the app that has already used the plug-in unable to be packaged again. This involves the interests of the plug-in users, so in principle, the removal of the plug-in is not allowed. If you need to take it off the shelf for special reasons, please use the registered account email address to send an email to service@dcloud.io to apply, and describe the reason for the takedown in detail

## Q：如何更新插件
## Q: How to update the plugin
A：插件作者需注意保持好版本质量和向下兼容。一旦提交市场新版插件，旧版插件就不能再使用。已经使用旧版插件的App，此后再次云打包，会直接集成新版插件。也就是插件的更新不当可能造成已经使用插件的开发者无法及时发布新版应用。
A: Plug-in authors need to pay attention to maintaining good version quality and backward compatibility. Once a new version of the plugin is submitted to the market, the old version of the plugin can no longer be used. Apps that have used the old version of the plug-in will be directly integrated with the new version of the plug-in if they are packaged in the cloud again. That is, improper update of the plug-in may cause the developers who have already used the plug-in to be unable to release the new version of the application in time.

## Q：iOS平台依赖库冲突如何解决？
## Q: How to solve the iOS platform dependency library conflict?

**A： 插件 与 HBuilderX内置模块 使用的库冲突，可以按以下方式解决**
**A: The plugin conflicts with the library used by the HBuilderX built-in module, which can be resolved as follows**
+ 首先选择适配 HBuilderX内置模块 使用的库，HBuilderX内置模块使用的库可在SDK中查找
+ First select the library used by the built-in module of HBuilderX, the library used by the built-in module of HBuilderX can be found in the SDK
  - 插件中去掉冲突的库，在插件文档中告知你的插件使用者在HBuilderX中配置使用 `XXX模块` 才可以正常使用
  - Remove the conflicting library in the plugin, and tell your plugin users in the plugin documentation to configure and use `XXX module` in HBuilderX before it can be used normally
  - 插件中包含冲突的依赖库，在插件文档中告知你的插件使用者冲突时 `配置ios-exclude.txt解决冲突`
  - The plug-in contains conflicting dependent libraries. In the plug-in documentation, notify your plug-in users of the conflict `configure ios-exclude.txt to resolve the conflict`
+ 如果你的插件依赖库不能适配 HBuilderX内置模块 使用的库，请在插件文档中明确告知插件使用者 `XXX`模块 与此插件不兼容，避免插件使用者勾选了相关模块导致了依赖库冲突
+ If your plug-in dependent library cannot adapt to the library used by HBuilderX built-in modules, please clearly inform the plug-in user that the `XXX` module is not compatible with this plug-in in the plug-in document, so as to prevent the plug-in user from checking the relevant modules and causing the dependent library conflict
+ 如果还是不能解决冲突问题，请加入 `原生开发官方QQ交流群` 联系管理员
+ If you still can't solve the conflict problem, please join the `Original Development Official QQ Exchange Group` to contact the administrator

**A：两个插件之间的依赖库冲突，这种情况多数是插件使用了相同的库，可以按以下方式解决**
**A: There is a dependency library conflict between two plugins. In most cases, the plugins use the same library, which can be resolved in the following way**
+ 如果两个插件是同一作者开发，可能需要复用一些基础库（.a或.framework），在两个插件中同时包含，并确保文件名称相同，同时使用两个插件时会自动去重相同名称的库
+ If the two plugins are developed by the same author, it may be necessary to reuse some basic libraries (.a or .framework), include both in the two plugins, and ensure that the file names are the same, and the same will be automatically deduplicated when using two plugins at the same time name of the library
+ 如果两个插件不是同一作者开发，可能会同时包含独立的三方库（.a或.framework），如果三方库文件名称不同，可以告知你的插件使用者 `配置ios-exclude.txt解决冲突`
+ If the two plugins are not developed by the same author, they may include independent third-party libraries (.a or .framework) at the same time. If the names of the three-party library files are different, you can inform your plugin users to `configure ios-exclude.txt to resolve conflicts`

**A：配置ios-exclude.txt解决冲突**
**A: Configure ios-exclude.txt to resolve conflicts**

如果插件中包含的库（.a或.framework），与 其它插件 或 HBuilderX内置模块 存在冲突，可以配置插件中冲突的库不参与编译打包来解决冲突。
If the library (.a or .framework) contained in the plug-in conflicts with other plug-ins or HBuilderX built-in modules, you can configure the conflicting library in the plug-in not to participate in compilation and packaging to resolve the conflict.
比如 插件A 中使用的 xxx.a 与其它库冲突，可以在 uni-app项目的 `nativeplugins/插件A/` 目录（云端插件需要手动创建目录）中创建 `ios-exclude.txt` 文件，文件内容如下：
For example, if the xxx.a used in plugin A conflicts with other libraries, you can create an `ios-exclude.txt` file in the `nativeplugins/plugin A/` directory of the uni-app project (the cloud plugin needs to manually create the directory), and the file content as follows:
```
xxx.a
```
每行写一个文件名，如下图所示：
Write one file name per line, as shown in the following figure:

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/ios-exclude.png)


## Q: Android平台的依赖库冲突如何解决？
## Q: How to solve the dependency library conflict of the Android platform?

**A：插件依赖的云端仓储 dependencies 冲突解决**
**A: Cloud storage dependencies conflict resolution that the plug-in depends on**
+ 首先配置依赖库使用 [json格式dependencies](/NativePlugin/course/package?id=dependencies)，并设置标识 id 属性避免重复引用依赖库, 减少多个插件配置相同依赖库产生冲突
+ First configure the dependent library to use [json format dependencies](/NativePlugin/course/package?id=dependencies), and set the identification id attribute to avoid repeated reference to the dependent library, reducing conflicts caused by multiple plug-in configurations with the same dependent library
+ 如果插件依赖的云端仓储中特定库与 HBuilderX内置模块 存在冲突，可以尝试使用[exclude group](/NativePlugin/course/package?id=dependencies)剥离相关冲突库。并在插件文档中告知你的插件使用者在HBuilderX中配置使用 `XXX模块` 才可以正常使用。
+ If there is a conflict between the specific library in the cloud storage that the plug-in depends on and the built-in module of HBuilderX, you can try to use [exclude group](/NativePlugin/course/package?id=dependencies) to strip the related conflicting library. And inform your plug-in users in the plug-in documentation to configure and use `XXX module` in HBuilderX to use it normally.

**A：插件 与 HBuilderX内置模块 包含的依赖库冲突，这种情况多数是两者出现了重复类导致，可以按以下方式解决**
**A: The plugins conflict with the dependent libraries contained in the HBuilderX built-in modules. Most of these cases are caused by duplicate classes between the two, which can be resolved in the following ways**
+ 首先选择适配 HBuilderX内置模块 使用的依赖库版本（参考[HBuilderX依赖库列表](https://ask.dcloud.net.cn/article/35419)）：
+ First select the dependent library version that is adapted to the built-in module of HBuilderX (refer to [HBuilderX dependent library list](https://ask.dcloud.net.cn/article/35419)):
  - 插件中去掉冲突的依赖库，在插件文档中告知你的插件使用者在HBuilderX中配置使用 `XXX模块` 才可以正常使用
  - Remove the conflicting dependent libraries in the plugin, and tell your plugin users in the plugin documentation to configure and use `XXX module` in HBuilderX before it can be used normally
  - 插件中包含冲突的依赖库，在插件文档中告知你的插件使用者冲突时 `配置android-exclude.txt解决冲突`
  - The plug-in contains conflicting dependent libraries. In the plug-in documentation, notify your plug-in users of conflicts `configure android-exclude.txt to resolve conflicts`
+ 如果你的插件依赖库不能适配 HBuilderX内置模块 的依赖库，请在插件文档中明确告知插件使用者 `XXX`模块 与此插件不兼容，避免插件使用者勾选了相关模块导致了依赖库冲突
+ If your plug-in dependency library cannot adapt to the dependency library of HBuilderX built-in modules, please clearly inform the plug-in user in the plug-in document that the `XXX` module is not compatible with this plug-in, so as to prevent the plug-in user from checking the relevant modules and causing the dependency library conflict
+ 如果还是不能解决冲突问题，请加入 `原生开发官方QQ交流群` 联系管理员
+ If you still can't solve the conflict problem, please join the `Original Development Official QQ Exchange Group` to contact the administrator

**A：两个插件之间的依赖库冲突，这种情况多数是插件中的jar/aar包含了相同的类，可以按以下方式解决**
**A: The dependency library conflict between the two plug-ins, in most cases, the jar/aar in the plug-in contains the same class, which can be resolved in the following way**
+ 如果两个插件是同一作者开发，将可以复用的代码生成独立 jar/aar，在两个插件中同时包含，只要文件名称相同，同时使用两个插件时会自动去掉重复的jar/aar
+ If the two plug-ins are developed by the same author, the reusable code will be generated as an independent jar/aar, which will be included in the two plug-ins at the same time. As long as the file names are the same, the duplicate jar/aar will be automatically removed when the two plug-ins are used at the same time
+ 如果两个插件不是同一作者开发，可能会同时包含独立的三方库 jar/aar，如果三方库文件名称不同，可以告知你的插件使用者 `配置android-exclude.txt解决冲突`
+ If the two plug-ins are not developed by the same author, they may contain independent three-party library jar/aar at the same time. If the names of the three-party library files are different, you can inform your plug-in users to `configure android-exclude.txt to resolve conflicts`

**A：配置android-exclude.txt解决冲突**
**A: Configure android-exclude.txt to resolve conflicts**

如果插件中包含的 jar/aar 依赖库，与 其它插件 或 HBuilderX内置模块 存在冲突，可以配置插件中冲突的 jar/aar 库不参与编译打包来解决冲突。
If the jar/aar library contained in the plug-in conflicts with other plug-ins or HBuilderX built-in modules, you can configure the conflicting jar/aar library in the plug-in not to participate in compilation and packaging to resolve the conflict.
比如 插件A 中使用的 a_test.jar 与其它库冲突，可以在 uni-app项目的 `nativeplugins/插件A/` 目录（云端插件需要手动创建目录）中创建 `android-exclude.txt` 文件，文件内容如下：
For example, if the a_test.jar used in plugin A conflicts with other libraries, you can create an `android-exclude.txt` file in the `nativeplugins/plugin A/` directory of the uni-app project (the cloud plugin needs to manually create the directory), and the file content as follows:
```
a_test.jar
```
每行一个文件名，文件名不要包含任何目录路径
One filename per line, filenames do not contain any directory paths


## Q:云打包 运行插件提示"XXX"插件不存在？
## Q: When running the plug-in in cloud packaging, it prompts that the "XXX" plug-in does not exist?

**A:按以下步骤检测自己项目:**
**A: Follow the steps below to detect your own project:**
+ 请使用自定义基座测试自己插件。默认基座并不包含你的插件。
+ Please test your plugin with a custom dock. The default dock does not contain your plugins.
+ 确认打包时是否勾选了"XXX"插件。
+ Confirm whether the "XXX" plugin is checked when packaging.
+ 查看插件配置`package.json`这也是多数同学容易犯错的地方。主要检查`class`配置的信息与插件中的aar(iOS端为xxx.a 或者 xxx.framework)是否匹配。
+ View the plug-in configuration `package.json` This is where most students tend to make mistakes. Mainly check whether the `class` configuration information matches the aar in the plug-in (xxx.a or xxx.framework on the iOS side).
+ 插件中依赖库没有添加到配置或者aar(iOS端为xxx.a 或者 xxx.framework)中。多数为离线工程没问题，云打包有问题！认真检查依赖库是否都包含在插件中。
+ The dependent library in the plugin is not added to the configuration or aar (xxx.a or xxx.framework on the iOS side). There is no problem for most offline projects, but there is a problem with cloud packaging! Carefully check that all dependent libraries are included in the plugin.
+ 以上都不能解决你的问题，请@客服
+ None of the above can solve your problem, please @Customer Service

## Q:云打包 运行插件提示"XXX"插件不存在？
## Q: When running the plug-in in cloud packaging, it prompts that the "XXX" plug-in does not exist?

**A:按以下步骤检测自己项目:**
**A: Follow the steps below to detect your own project:**
+ 请使用自定义基座测试自己插件。默认基座并不包含你的插件。
+ Please test your plugin with a custom dock. The default dock does not contain your plugins.
+ 确认打包时是否勾选了"XXX"插件。
+ Confirm whether the "XXX" plugin is checked when packaging.
+ 查看插件配置`package.json`这也是多数同学容易犯错的地方。主要检查`class`配置的信息与插件中的aar(iOS端为xxx.a 或者 xxx.framework)是否匹配。
+ View the plug-in configuration `package.json` This is where most students tend to make mistakes. Mainly check whether the `class` configuration information matches the aar in the plug-in (xxx.a or xxx.framework on the iOS side).
+ 插件中依赖库没有添加到配置或者aar(iOS端为xxx.a 或者 xxx.framework)中。多数为离线工程没问题，云打包有问题！认真检查依赖库是否都包含在插件中。
+ The dependent library in the plugin is not added to the configuration or aar (xxx.a or xxx.framework on the iOS side). There is no problem for most offline projects, but there is a problem with cloud packaging! Carefully check that all dependent libraries are included in the plugin.
+ 以上都不能解决你的问题，请@客服
+ None of the above can solve your problem, please @Customer Service

## Q:云打包后 iOS端调用插件模块闪退了如何解决
## Q: After cloud packaging, the iOS end calls the plug-in module and crashes, how to solve it?
**A:按以下步骤检测自己项目:**
**A: Follow the steps below to detect your own project:**
+ 下载对应版本的离线iOS SDK文件
+ Download the offline iOS SDK file of the corresponding version
+ Xcode打开`HBuilder-Hello`工程  
+ Xcode opens `HBuilder-Hello` project
+ 去 [开发者中心](https://dev.dcloud.net.cn/) 找到该项目 生成离线`AppKey` 在`plist`中修改`dcloud_appkey`
+ Go to [Developer Center](https://dev.dcloud.net.cn/) to find the project Generate offline `AppKey` Modify `dcloud_appkey` in `plist`
+ 用IDE `HBuilerX` 导出的该项目的本地App资源 并放到 `HBuilder-Hello/Pandora/apps/`下
+ Use the IDE `HBuilerX` to export the local App resource of the project and put it under `HBuilder-Hello/Pandora/apps/`
+ 修改`control.xml` 中的 `appid` 为该项目ID
+ Modify `appid` in `control.xml` to the project ID
+ 把已经开发好的自定义插件里的所有的 `xxx.a`或者 `xxx.framework`加到 `HBuider`,另外资源文件或者其他修改记得都在工程里配置好
+ Add all `xxx.a` or `xxx.framework` in the custom plug-in that has been developed to `HBuider`, and remember to configure resource files or other modifications in the project
+ 运行项目  查看崩溃信息
+ Run the project to view crash information

### 自定义插件云打包闪退原因查询步骤
### Custom plug-in cloud packaging flashback reason query steps

1. 先检查自己封装的插件中 数据类型是否对的上 
1. First check whether the data type in the plug-in packaged by yourself is correct

```
- (void)test:(NSArray*)files callback:(DCUniModuleCallback)callback 
{
	NSString * first =[files objectAtIndex:0];
}
简单举例 封装需要传入参数files  原生代码未做类型判断直接调用方法  可能前端传入的是个NSNumber 或者其他类型  objectAtIndex 原生层异常直接Crash 
```
建议 插件开发者 做好参数防护  防止crash
It is recommended that plug-in developers do a good job of parameter protection to prevent crashes

2. 插件所需plist字段等 是否都添加正确 
2. Whether the plist fields required by the plug-in are all added correctly
  
  在插件开发过程中,我们通常都是在Xcode里的示例工程里去添加内容到plist中,而云打包时脚本自己动态去创建,
  In the process of plug-in development, we usually add content to the plist in the sample project in Xcode, and the script itself is dynamically created during cloud packaging.
  比如是一个扫描证件类型的插件 如果在插件的package.json 里 没有声明 相机的描述字段 在调用时 可能会出现闪退
  For example, if it is a plug-in for scanning documents, if the description field of the camera is not declared in the package.json of the plug-in, it may crash when called
  
3. 检查插件需要的第三方资源是否 都已经放在 `ios/BundleResources` 路径下
3. Check whether the third-party resources required by the plug-in have been placed in the `ios/BundleResources` path
  
  比如Firebase 之类的第三方服务 插件作者需要将 `GoogleService-Info.plist` 加入到工程才可正常调用 
  For third-party services such as Firebase, plug-in authors need to add `GoogleService-Info.plist` to the project before they can be called normally
   
4. 开发者插件 如果写一些系统类的类别 尽量名字起的特殊一些 减少和其他人写的类别冲突
4. Developer plug-ins If you write some system class categories, try to name them as special as possible to reduce conflicts with categories written by others
 
```
例如 NSString (md5)  md5 很容易重复  而且类别会根据编译顺序执行 可能会产生 意想不到的情况 所以这点也要注意
```
5. 利用Xcode 自带日志查看工具查看闪退原因
5. Use Xcode's built-in log viewing tool to check the cause of the crash
```
	Xcode->Devices And Simulators->View Devices Logs -> Crash 
```
  装上云打包后的ipa,调用自定义插件功能后闪退,可以连上Xcode,根据上边步骤 查看闪退信息,一般也可以获取有用的信息,便于快速查看
  Install the cloud-packaged ipa, call the custom plug-in function and then flash back. You can connect to Xcode and check the flashback information according to the above steps. Generally, you can also get useful information for quick viewing.
   