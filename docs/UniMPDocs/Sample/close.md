> 2.6.3开始支持此功能
> 2.6.3 started to support this feature

## 小程序环境中关闭方法
## Closing method in applet environment
> 注：需要在集成SDK的原生工程中使用，在 HBuilderX 内置基座运行无效果；
> Note: It needs to be used in native projects that integrate SDK, and it has no effect when running on the built-in base of HBuilderX;

小程序中可调用`plus.runtime.quit()`方法关闭自己，返回宿主App
The `plus.runtime.quit()` method can be called in the applet to close itself and return to the host App

```
plus.runtime.quit()
```

## 宿主App中关闭方法
## Closing method in the host App

宿主可以直接调用 sdk 的方法，关闭当前运行的小程序
The host can directly call the sdk method to close the currently running applet

**iOS 示例**
**iOS Example**

关闭当前运行的小程序
Close the currently running applet

```Objective-C
[DCUniMPSDKEngine closeUniMP];
```

当小程序关闭时会触发 DCUniMPSDKEngineDelegate 协议的`uniMPOnClose:`方法
When the applet is closed, it will trigger the `uniMPOnClose:` method of DCUniMPSDKEngineDelegate protocol

```Objective-C
/// 监听关闭小程序的回调方法
/// Listen to the callback method of closing the applet
- (void)uniMPOnClose:(NSString *)appid {
    NSLog(@"小程序 %@ 被关闭了",appid);
}
```

**Android 示例**
**Android example**

关闭当前运行的小程序
Close the currently running applet

```JAVA
DCUniMPSDK.getInstance().closeCurrentApp()
```

监听小程序关闭触发事件
Listen to the applet closing trigger event

```JAVA
DCUniMPSDK.getInstance().setUniMPOnCloseCallBack(new DCUniMPSDK.IUniMPOnCloseCallBack() {
	@Override
	public void onClose(String appid) {
		Log.e("unimp", appid+"被关闭了");
	}
});
```