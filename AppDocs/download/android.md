## Android 离线SDK - 正式版

### 2021年01月23日发布
[点击下载SDK](https://pan.baidu.com/s/14SZ-CjlbaNtGHk3CpamgXQ)，提取码: 7rfu

+ 更新uni-app离线打包支持，需使用HBuilderX（3.0.7.20210123）版本生成本地打包App资源。
+ 更新 uni-AD 快手联盟SDK为3.3.6版，腾讯优量汇SDK为4.310.1180版，今日头条穿山甲SDK为3.4.1.0版
+ 更新 腾讯X5内核版本为 v4.3.0.67_43967
+ 更新 UniPush 华为厂商推送 SDK 版本为 v4:2.0.0，适配 HMS4.0+
+ 调整 应用的主 Activity 为 FragmentActivity
+ 修复 uploader 上传文件监听上传进度变化返回数据不准确的Bug
+ 修复 监听按键事件 keydown、keyup 不触发回调的Bug
+ 修复 video 封面图片 poster 拉伸变形显示的Bug
+ 修复 video 设置显示默认播放控件 controls 属性为 false 时手势操作失效的Bug
+ 修复 previewImage 预览图片可能显示模糊的Bug
+ 修复 3.0.4版本引出的 native.js 获取到原生对象可能无法执行器内部函数的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/1Gpbnq3wLvvnRO6W-SlvVpA)，提取码: neqx



## Android 离线SDK - Alpha版

### 2020年02月02日发布
[点击下载SDK](https://pan.baidu.com/s/1NLBTW94Im_zg5R38Wiijdg) ，提取码: 5vgk

+ 更新uni-app离线打包支持，需使用HBuilderX（3.1.0.20210202-alpha）版本生成本地打包App资源。
+ uni-AD 更新 腾讯优量汇SDK为4.330.1200版
+ 一键登录 新增 defaultCheckBoxState 属性设置默认是否勾选同意使用服务条款框
+ 微信分享 新增 分享音乐支持 href 属性设置音乐网页地址
+ 修复 页面生命周期 onshow 中调用 getLocation 可能会引起死循环的Bug
+ 修复 软键盘弹出后，切换输入法软键盘高度发生变化时不会正常触发 onKeyboardHeightChange 事件的Bug
+ 修复 软键盘弹出后，返回到之前的页面可能显示高度不正确的bug
+ 修复 previewImage 预览网络图片长按保存到系统相册失败的Bug
+ 修复 subNVues 设置 popup 模式后，再设置 left 执行动画会卡顿的Bug
+ 修复 nvue css 中设置 transform 属性值中使用百分比无效的Bug
+ 修复 nvue live-pusher 组件横屏预览时上传视频方向不正确的Bug
+ 修复 nvue map 组件动态绘制 polyline 路径轨迹可能会闪烁的Bug
+ 修复 nvue input 组件设置 cursor-spacing 属性无效的Bug
+ 修复 3.0.7 版本引出的 canvas 组件绘制网络图片失败的Bug
+ 新增 视频播放控件支持 codec 属性设置是否开启硬解码，解决某些视频播放不清晰的问题
+ 新增 视频播放控件支持 httpCache 属性设置是否开启缓存，解决重复播放网络视频无法复用缓存的问题
+ 新增 视频播放控件支持 playStrategy 属性设置视频优化策略，解决播放在线高清视频卡顿、音视频脱轨的问题
+ 修复 视频播放控件 seek 跳转不准确的Bug
+ 修复 微信分享图片在 Android11 设备可能失败的Bug
+ 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug

[百度网盘下载历史版本](https://pan.baidu.com/s/10fne34bwxWGtDJTd4PhroA)，提取码: 6msp
