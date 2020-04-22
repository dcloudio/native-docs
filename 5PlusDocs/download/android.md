## Android 离线SDK——正式版

### 2020年04月22日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.15.80132_20200422.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

  + 更新uni-app离线打包支持，需使用HBuilderX（2.6.15.20200421）版本生成本地打包App资源。	
  + 修复 v2版本apk使用wgt升级资源后，用v3版本apk覆盖安装无法进入应用的Bug
  + 修复 nvue rich-text 组件 img 标签可能不显示的Bug
  + 修复 nvue input 组件 font-size 值设置过大时光标可能不显示的Bug
  + 修复 nvue input 组件设置 type 为 digit/number 时弹出键盘类型不正确的问题
  + 修复 vue map 组件 marker 属性打包后图片不显示的Bug
  + 修复 tabBar 页面设置 titleNView 的 type 为 transparent 滚动时标题栏透明度不发生变化的Bug
  + 修复 nvue 页面跳转到 vue 页面后，input 组件获得焦点时可能无法弹出软键盘的Bug
  + 新增 pop-in/pop-out 动画时通过 animationAlphaBGColor 设置动画蒙层背景色，可用于避免暗色风格页面转场动画的蒙层偏白
  + 修复 uni-AD 腾讯广点通部分视频激励广告播放 30 秒后点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug
  + 修复 Webview窗口对象 loadURL 方法没有触发 overrideUrlLoading 拦截回调函数的Bug
  + 修复 显示系统软键盘 plus.key.showSoftKeybord 多次调用会触发关闭软键盘的Bug
  + 修复 storage存储键值通过 setItem 方法传入 value 为空字符串后，通过 getItem 方法返回 null 的Bug
  + 修复 同时创建两个音频播放对象，其中一个音频暂停后另一个无法播放的Bug
  + 修复 视频播放控件 VideoPlayer 播放部分 rtmp 链接可能无声音的Bug
  + 修复 确认模态框 confirm 显示时会弹出软键盘的Bug

[百度网盘下载历史版本，提取码: neqx](https://pan.baidu.com/s/1Gpbnq3wLvvnRO6W-SlvVpA)



## Android 离线SDK——Alpha版

### 2020年04月20日发布

[点击下载SDK](http://download.dcloud.net.cn/Android-SDK@2.6.14.80129_20200420.zip)

**重要：因新版本去掉基础aar中的权限，所以请根据自身需求添加所需权限，权限可参考SDK中示例进行添加。**

**重要：更新SDK是，需同时更新SDK目录/SDK/assets/data/目录下所有文件。**

**重要：如需操作Application，必须要继承自DCloudApplication。**

  + 更新uni-app离线打包支持，需使用HBuilderX alpha版（2.6.14.20200420）版本生成本地打包App资源。	
  + 修复 nvue rich-text 组件 img 标签可能不显示的Bug
  + 修复 nvue input 组件 font-size 值设置过大时光标可能不显示的Bug
  + 修复 nvue 页面跳转到 vue 页面后，input 组件获得焦点时可能无法弹出软键盘的Bug
  + 修复 vue map 组件 marker 属性打包后图片不显示的Bug

[百度网盘下载历史版本，提取码: 6msp](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)
