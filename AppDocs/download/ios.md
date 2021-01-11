如果您当前集成的 SDK 版本低于 HBuilderX 版本，但是功能都正常的话可以选择不升级 SDK，按照这个 [文档](https://ask.dcloud.net.cn/article/35627) 添加配置可以屏蔽版本不一致的弹窗提示，框架正常情况都是向下兼容的，您也可以查看一下更新日志考虑是否升级 SDK； 如果要升级可以更新离线sdk包下Bundles、inc、Libs目录下的文件。

## iOS 离线SDK - 正式版

### 2021年1月8日发布 
[点击下载SDK，提取码: upkm](https://pan.baidu.com/s/1QPGox7ZtRr3fGUNgkUvBuw)
+ 更新uni-app离线打包支持，需使用HBuilderX（3.0.5.20210107）版本生成本地打包App资源。
+ 一键登录 优化 错误回调返回数据格式，添加 appid、metadata、uid 属性，便于排查错误 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.ErrorCallback)
   `注意：HX3.0.4版本之后，需要使用Xcode12.1以上版本，否则可能编译报错`



[百度网盘下载历史版本，提取码: w35k](https://pan.baidu.com/s/1gZGJMaSqZQftqgEVtadvEg)



## iOS 离线SDK - Alpha版

### 2021年1月11日发布 
[点击下载SDK，提取码: folm](https://pan.baidu.com/s/1pU-DVkT_IXrRa2ro2wobPg)
+ 更新uni-app离线打包支持，需使用HBuilderX -alpha（3.0.7.20210109）版本生成本地打包App资源。
+ iOS平台 修复 previewImage 预览网络图片地址中包含query参数过多可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/98259)
+ iOS平台 修复 audio 音频资源地址中包含中文字符时无法正常播放的Bug [详情](https://ask.dcloud.net.cn/question/103421)
+ iOS平台 修复 video 动态更新 src 属性值域名相同时无法正常切换视频的Bug [详情](https://ask.dcloud.net.cn/question/110386)
+ iOS平台 修复 video 视频资源地址中包含中文字符时无法正常播放的Bug
+ iOS平台 修复 titleNView 标题文字在隐藏软键盘时可能出现抖动的Bug
+ App-iOS平台 修复 nvue refresh 组件处于刷新状态时显示位置向下偏移0.5像素的Bug
  
[百度网盘下载历史版本，提取码: 4p3a](https://pan.baidu.com/s/1C0H4DhfI-wXG0NaR2AiE7g)
