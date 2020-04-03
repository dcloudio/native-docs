> 2.6.3开始支持此功能

## 小程序环境中关闭方法
> 注：需要在集成SDK的原生工程中使用，在 HBuilderX 内置基座运行无效果；

小程序中可调用`plus.runtime.quit()`方法关闭自己，返回宿主App

```
plus.runtime.quit()
```

## 宿主App中关闭方法

宿主可以直接调用 sdk 的方法，关闭当前运行的小程序

**iOS 示例**

关闭当前运行的小程序

```Objective-C
[DCUniMPSDKEngine closeUniMP];
```

当小程序关闭时会触发 DCUniMPSDKEngineDelegate 协议的`uniMPOnClose:`方法

```Objective-C
/// 监听关闭小程序的回调方法
- (void)uniMPOnClose:(NSString *)appid {
    NSLog(@"小程序 %@ 被关闭了",appid);
}
```

**Android 示例**

关闭当前运行的小程序

```JAVA
DCUniMPSDK.getInstance().closeCurrentApp()
```

监听小程序关闭触发事件

```JAVA
DCUniMPSDK.getInstance().setUniMPOnCloseCallBack(new DCUniMPSDK.IUniMPOnCloseCallBack() {
	@Override
	public void onClose(String appid) {
		Log.e("unimp", appid+"被关闭了");
	}
});
```