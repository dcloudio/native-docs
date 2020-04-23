## 第一步：购买或下载uni-app原生插件
**从HBuilderX1.9.0版本开始，uni原生插件支持设置为免费或收费，为了保护插件开发者权益，收费插件只支持云端打包，不提供插件下载**
- 使用前需先登录[uni原生插件市场](http://ext.dcloud.net.cn/?cat1=5&cat2=51)，在插件详情页中购买，免费插件也可以在插件市场0元购。购买后才能够云端打包使用插件
**购买插件时请选择正确的appid，以及绑定正确包名**
- 对于免费的uni原生插件，也可以先下载到本地再提交云端打包（不推荐）
详情参考：[HBuilderX中使用本地插件](/NativePlugin/use/use_local_plugin.md)

## 第二步：使用自定义基座打包uni原生插件 （注：请使用真机运行自定义基座）
使用uni原生插件必须先提交云端打包才能生效，购买插件后在应用的manifest.json页面的“App原生插件配置”项下点击“选择云端插件”，选择需要打包的插件：

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190416/1b5297e695ad1536ddafe3c834e9c297.png)

**如果插件已下载到本地，点击“选择本地插件”，选择需要打包的插件**

直接云端打包后无法打log，不利于排错，所以一般先打一个[自定义基座](http://ask.dcloud.net.cn/article/35115)，把需要的原生插件打到真机运行基座里，然后在本地写代码调用调试。

**注意，自定义基座不是正式版，真正发布时，需要再打正式包。使用自定义基座是无法正常升级替换apk的。**


## 第三步：开发调试uni-app原生插件
- 在vue页面或nvue页面引入这个原生插件。
使用uni.requireNativePlugin的api，参数为插件的id。
例如：

```javascript
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
```

- 根据插件市场的插件介绍页面的文档编写js代码，调用其能力
注意如果前端代码需要给原生sdk传路径，则需要传手机文件的绝对路径。

## 第四步：打包发布
使用自定义基座开发调试uni-app原生插件后，不可直接将自定义基座apk作为正式版发布。
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。