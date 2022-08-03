## Q：uni-app原生插件使用的条件是什么？
A：**要求HBuilderX1.4.0及以上版本，并且必须是uni-app项目**
老版本HBuilder不支持（请迁移到最新版本的HBuilderX），5+APP及Wap2App项目都不支持调用uni-app原生插件。

## Q：uni-app原生插件如何支持真机运行？
A：HBuilderX中自带的默认真机运行基座不包含任何uni-app原生插件，所以不支持直接调用uni-app原生插件。
**必须使用[自定义基座](https://ask.dcloud.net.cn/article/35115)才能支持真机运行调用uni-app原生插件**

## Q：uni-app原生插件真机运行提示“using unregistered native plugin 'XXX'”？
A：**默认真机运行的基座中不包含任何原生插件，所以不能调用uni原生插件，必须自定义基座**

- 确定配置了[自定义基座](https://ask.dcloud.net.cn/article/35115)，并且勾选了“使用自定义基座”（HBuilderX的菜单"运行"->"运行到手机或模拟器"->"使用自定义基座"）
- 确定手机上运行的是配置uni-app原生插件后提交生成的自定义基座，可以尝试删除手机上的自定义基座应用，重新真机运行

## Q：已上传插件市场的插件如何下架？
A：插件下架会导致已经使用该插件的app无法再打包，这涉及到插件使用者的利益，所以原则上不允许插件下架。如有特殊原因需要下架请使用注册账号邮箱发邮件到service@dcloud.io进行申请，并详细描述下架原因

## Q：如何更新插件
A：插件作者需注意保持好版本质量和向下兼容。一旦提交市场新版插件，旧版插件就不能再使用。已经使用旧版插件的App，此后再次云打包，会直接集成新版插件。也就是插件的更新不当可能造成已经使用插件的开发者无法及时发布新版应用。

## Q：iOS平台依赖库冲突如何解决？

**A： 插件 与 HBuilderX内置模块 使用的库冲突，可以按以下方式解决**
+ 首先选择适配 HBuilderX内置模块 使用的库，HBuilderX内置模块使用的库可在SDK中查找
  - 插件中去掉冲突的库，在插件文档中告知你的插件使用者在HBuilderX中配置使用 `XXX模块` 才可以正常使用
  - 插件中包含冲突的依赖库，在插件文档中告知你的插件使用者冲突时 `配置ios-exclude.txt解决冲突`
+ 如果你的插件依赖库不能适配 HBuilderX内置模块 使用的库，请在插件文档中明确告知插件使用者 `XXX`模块 与此插件不兼容，避免插件使用者勾选了相关模块导致了依赖库冲突
+ 如果还是不能解决冲突问题，请加入 `原生开发官方QQ交流群` 联系管理员

**A：两个插件之间的依赖库冲突，这种情况多数是插件使用了相同的库，可以按以下方式解决**
+ 如果两个插件是同一作者开发，可能需要复用一些基础库（.a或.framework），在两个插件中同时包含，并确保文件名称相同，同时使用两个插件时会自动去重相同名称的库
+ 如果两个插件不是同一作者开发，可能会同时包含独立的三方库（.a或.framework），如果三方库文件名称不同，可以告知你的插件使用者 `配置ios-exclude.txt解决冲突`

**A：配置ios-exclude.txt解决冲突**

如果插件中包含的库（.a或.framework），与 其它插件 或 HBuilderX内置模块 存在冲突，可以配置插件中冲突的库不参与编译打包来解决冲突。
比如 插件A 中使用的 xxx.a 与其它库冲突，可以在 uni-app项目的 `nativeplugins/插件A/` 目录（云端插件需要手动创建目录）中创建 `ios-exclude.txt` 文件，文件内容如下：
```
xxx.a
```
每行写一个文件名，如下图所示：

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/nativeplugin/Iosimgs/ios-exclude.png)


## Q: Android平台的依赖库冲突如何解决？

**A：插件依赖的云端仓储 dependencies 冲突解决**
+ 首先配置依赖库使用 [json格式dependencies](/NativePlugin/course/package?id=dependencies)，并设置标识 id 属性避免重复引用依赖库, 减少多个插件配置相同依赖库产生冲突
+ 如果插件依赖的云端仓储中特定库与 HBuilderX内置模块 存在冲突，可以尝试使用[exclude group](/NativePlugin/course/package?id=dependencies)剥离相关冲突库。并在插件文档中告知你的插件使用者在HBuilderX中配置使用 `XXX模块` 才可以正常使用。

**A：插件 与 HBuilderX内置模块 包含的依赖库冲突，这种情况多数是两者出现了重复类导致，可以按以下方式解决**
+ 首先选择适配 HBuilderX内置模块 使用的依赖库版本（参考[HBuilderX依赖库列表](https://ask.dcloud.net.cn/article/35419)）：
  - 插件中去掉冲突的依赖库，在插件文档中告知你的插件使用者在HBuilderX中配置使用 `XXX模块` 才可以正常使用
  - 插件中包含冲突的依赖库，在插件文档中告知你的插件使用者冲突时 `配置android-exclude.txt解决冲突`
+ 如果你的插件依赖库不能适配 HBuilderX内置模块 的依赖库，请在插件文档中明确告知插件使用者 `XXX`模块 与此插件不兼容，避免插件使用者勾选了相关模块导致了依赖库冲突
+ 如果还是不能解决冲突问题，请加入 `原生开发官方QQ交流群` 联系管理员

**A：两个插件之间的依赖库冲突，这种情况多数是插件中的jar/aar包含了相同的类，可以按以下方式解决**
+ 如果两个插件是同一作者开发，将可以复用的代码生成独立 jar/aar，在两个插件中同时包含，只要文件名称相同，同时使用两个插件时会自动去掉重复的jar/aar
+ 如果两个插件不是同一作者开发，可能会同时包含独立的三方库 jar/aar，如果三方库文件名称不同，可以告知你的插件使用者 `配置android-exclude.txt解决冲突`

**A：配置android-exclude.txt解决冲突**

如果插件中包含的 jar/aar 依赖库，与 其它插件 或 HBuilderX内置模块 存在冲突，可以配置插件中冲突的 jar/aar 库不参与编译打包来解决冲突。
比如 插件A 中使用的 a_test.jar 与其它库冲突，可以在 uni-app项目的 `nativeplugins/插件A/` 目录（云端插件需要手动创建目录）中创建 `android-exclude.txt` 文件，文件内容如下：
```
a_test.jar
```
每行一个文件名，文件名不要包含任何目录路径


## Q:云打包 运行插件提示"XXX"插件不存在？

**A:按以下步骤检测自己项目:**
+ 请使用自定义基座测试自己插件。默认基座并不包含你的插件。
+ 确认打包时是否勾选了"XXX"插件。
+ 查看插件配置`package.json`这也是多数同学容易犯错的地方。主要检查`class`配置的信息与插件中的aar(iOS端为xxx.a 或者 xxx.framework)是否匹配。
+ 插件中依赖库没有添加到配置或者aar(iOS端为xxx.a 或者 xxx.framework)中。多数为离线工程没问题，云打包有问题！认真检查依赖库是否都包含在插件中。
+ 以上都不能解决你的问题，请@客服

## Q:云打包 运行插件提示"XXX"插件不存在？

**A:按以下步骤检测自己项目:**
+ 请使用自定义基座测试自己插件。默认基座并不包含你的插件。
+ 确认打包时是否勾选了"XXX"插件。
+ 查看插件配置`package.json`这也是多数同学容易犯错的地方。主要检查`class`配置的信息与插件中的aar(iOS端为xxx.a 或者 xxx.framework)是否匹配。
+ 插件中依赖库没有添加到配置或者aar(iOS端为xxx.a 或者 xxx.framework)中。多数为离线工程没问题，云打包有问题！认真检查依赖库是否都包含在插件中。
+ 以上都不能解决你的问题，请@客服

## Q:云打包后 iOS端调用插件模块闪退了如何解决
**A:按以下步骤检测自己项目:**
+ 下载对应版本的离线iOS SDK文件
+ Xcode打开`HBuilder-Hello`工程  
+ 去 [开发者中心](https://dev.dcloud.net.cn/) 找到该项目 生成离线`AppKey` 在`plist`中修改`dcloud_appkey`
+ 用IDE `HBuilerX` 导出的该项目的本地App资源 并放到 `HBuilder-Hello/Pandora/apps/`下
+ 修改`control.xml` 中的 `appid` 为该项目ID
+ 把已经开发好的自定义插件里的所有的 `xxx.a`或者 `xxx.framework`加到 `HBuider`,另外资源文件或者其他修改记得都在工程里配置好
+ 运行项目  查看崩溃信息

### 自定义插件云打包闪退原因查询步骤

1. 先检查自己封装的插件中 数据类型是否对的上 

```
- (void)test:(NSArray*)files callback:(DCUniModuleCallback)callback 
{
	NSString * first =[files objectAtIndex:0];
}
简单举例 封装需要传入参数files  原生代码未做类型判断直接调用方法  可能前端传入的是个NSNumber 或者其他类型  objectAtIndex 原生层异常直接Crash 
```
建议 插件开发者 做好参数防护  防止crash

2. 插件所需plist字段等 是否都添加正确 
  
  在插件开发过程中,我们通常都是在Xcode里的示例工程里去添加内容到plist中,而云打包时脚本自己动态去创建,
  比如是一个扫描证件类型的插件 如果在插件的package.json 里 没有声明 相机的描述字段 在调用时 可能会出现闪退
  
3. 检查插件需要的第三方资源是否 都已经放在 `ios/BundleResources` 路径下
  
  比如Firebase 之类的第三方服务 插件作者需要将 `GoogleService-Info.plist` 加入到工程才可正常调用 
   
4. 开发者插件 如果写一些系统类的类别 尽量名字起的特殊一些 减少和其他人写的类别冲突
 
```
例如 NSString (md5)  md5 很容易重复  而且类别会根据编译顺序执行 可能会产生 意想不到的情况 所以这点也要注意
```
5. 利用Xcode 自带日志查看工具查看闪退原因
```
	Xcode->Devices And Simulators->View Devices Logs -> Crash 
```
  装上云打包后的ipa,调用自定义插件功能后闪退,可以连上Xcode,根据上边步骤 查看闪退信息,一般也可以获取有用的信息,便于快速查看
   