## 第一步：购买或下载uni-app原生插件
## Step 1: Purchase or download the uni-app native plug-in
**从HBuilderX1.9.0版本开始，uni原生插件支持设置为免费或收费，为了保护插件开发者权益，收费插件只支持云端打包，不提供插件下载**
**Starting from HBuilderX1.9.0, uni native plug-in support is set to free or charged. In order to protect the rights and interests of plug-in developers, paid plug-ins only support cloud packaging and do not provide plug-in downloads**
- 使用前需先登录[uni原生插件市场](http://ext.dcloud.net.cn/?cat1=5&cat2=51)，在插件详情页中购买，免费插件也可以在插件市场0元购。购买后才能够云端打包使用插件
- Before using, you need to log in to the [uni original plug-in market](http://ext.dcloud.net.cn/?cat1=5&cat2=51), and purchase it on the plug-in details page. Free plug-ins can also be purchased at the plug-in market for 0 yuan . Plug-ins can only be packaged and used in the cloud after purchase
**购买插件时请选择正确的appid，以及绑定正确包名**
**Please select the correct appid and bind the correct package name when purchasing the plugin**
- 对于免费的uni原生插件，也可以先下载到本地再提交云端打包（不推荐）
- For free uni native plug-ins, you can also download them locally first and then submit them for cloud packaging (not recommended)
详情参考：[HBuilderX中使用本地插件](/NativePlugin/use/use_local_plugin.md)
For details, please refer to: [Use local plugins in HBuilderX](/NativePlugin/use/use_local_plugin.md)

## 第二步：使用自定义基座打包uni原生插件 （注：请使用真机运行自定义基座）
## Step 2: Use a custom base to package the uni native plug-in (Note: Please use a real machine to run the custom base)
使用uni原生插件必须先提交云端打包才能生效，购买插件后在应用的manifest.json页面的“App原生插件配置”项下点击“选择云端插件”，选择需要打包的插件：
To use the uni native plug-in, you must first submit the cloud package to take effect. After purchasing the plug-in, click "Select Cloud Plug-in" under the "App Native Plug-in Configuration" item on the manifest.json page of the application, and select the plug-in to be packaged:

![](https://ask.dcloud.net.cn/uploads/article/20190416/1b5297e695ad1536ddafe3c834e9c297.png)

**如果插件已下载到本地，点击“选择本地插件”，选择需要打包的插件**
**If the plug-in has been downloaded locally, click "Select Local Plug-in" and select the plug-in to be packaged**

直接云端打包后无法打log，不利于排错，所以一般先打一个[自定义基座](http://ask.dcloud.net.cn/article/35115)，把需要的原生插件打到真机运行基座里，然后在本地写代码调用调试。
The log cannot be typed directly after cloud packaging, which is not conducive to troubleshooting, so generally type a [custom base](http://ask.dcloud.net.cn/article/35115) first, and type the required native plug-ins to the real The machine runs in the dock, and then write code locally to call for debugging.

**注意，自定义基座不是正式版，真正发布时，需要再打正式包。使用自定义基座是无法正常升级替换apk的。**
**Note that the custom base is not an official version, and when it is actually released, an official package needs to be packaged. It is impossible to upgrade and replace the apk normally with a custom base. **


## 第三步：开发调试uni-app原生插件
## Step 3: Develop and debug uni-app native plug-ins
- 在vue页面或nvue页面引入这个原生插件。
- Introduce this native plugin on the vue page or nvue page.
使用uni.requireNativePlugin的api，参数为插件的id。
Use the api of uni.requireNativePlugin, the parameter is the id of the plugin.
例如：
E.g:

```javascript
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
```

- 根据插件市场的插件介绍页面的文档编写js代码，调用其能力
- Write js code according to the documentation on the plug-in introduction page of the plug-in market, and call its capabilities
注意如果前端代码需要给原生sdk传路径，则需要传手机文件的绝对路径。
Note that if the front-end code needs to pass the path to the native sdk, you need to pass the absolute path of the mobile phone file.

## 第四步：打包发布
## Step 4: Package and release
使用自定义基座开发调试uni-app原生插件后，不可直接将自定义基座apk作为正式版发布。
After using the custom base to develop and debug the uni-app native plug-in, you cannot directly publish the custom base apk as the official version.
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。
The cloud package should be resubmitted (cannot check "custom base") to generate an official version.