# 宿主App与小程序相互通讯
# The host App and the applet communicate with each other
> 注：2.6.10 版本开始支持此功能
> Note: Version 2.6.10 supports this function


## 宿主 App 向小程序发送事件
## The host app sends events to the applet

### iOS 平台
### iOS platform

**API**

```Objective-C
Class DCUniMPSDKEngine.h
/// 向小程序发送事件
/// Send events to the applet
/// @param event 事件名称
/// @param event event name
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param data data: NSString or NSDictionary type
+ (void)sendUniMPEvent:(NSString *)event data:(id)data;
```

**示例**
**example**

```Objective-C
[DCUniMPSDKEngine sendUniMPEvent:@"NativeEvent" data:@{@"msg":@"native message"}];
```

### Android 平台
### Android platform

**API**

```java
DCUniMPSDK.getInstance().sendUniMPEvent(event, data)
```

**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|event|String|是|触发事件的event
| event| String| Yes| the event that triggered the event
|data|String或JSON|是|事件的携带参数
| data| String or JSON|Yes| the carrying parameter of the event

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|true表示事件通知成功。false表示失败。可通过log查看。
| boolean| true indicates that the event notification is successful. false means failure. It can be viewed through the log.

**示例**
**example**

```JAVA
JSONObject data = new JSONObject();
data.put("sj", "点击了关于");
DCUniMPSDK.getInstance().sendUniMPEvent("gy", data);
```


### 小程序平台
### Mini Program Platform

监听宿主App发送事件
Listen for events sent by the host App

**示例**
**example**

```JavaScript
uni.onNativeEventReceive((event,data)=>{
	console.log('接收到宿主App消息：' + event + data);
	this.nativeMsg = '接收到宿主App消息 event：' + event + " data: " + data;
})
```

**参数说明**
**Parameter Description**

|属性|类型|说明
|Properties|Type|Description
|:---|:---|:---
|event|String|事件名称
| event| String| event name
|data|String或JsonObject|宿主传递的数据
| data| String or JsonObject| the data passed by the host

## 小程序向宿主 App 发送事件
## The applet sends events to the host App

### 小程序平台
### Mini Program Platform

**API**

向宿主App发送事件
Send events to the host App

```
uni.sendNativeEvent(event,callback)
```

**参数说明**
**Parameter Description**

|属性|类型|说明
|Properties|Type|Description
|:--|:--|:--
|event|String|事件名称
| event| String| event name
|callback|Function|宿主App回调方法。参数可以是 String 或 JsonObject。取决于宿主的实现
| callback| Function|Host App callback method. Parameters can be String or JsonObject. depends on host implementation

**示例**
**example**

```JavaScript
// 向宿主App发送事件
// Send events to the host App
uni.sendNativeEvent('unimp-event', {
	msg: 'unimp message!!!'
}, ret => {
	this.nativeMsg = '宿主App回传的数据：' + ret;
})
```


### iOS 平台
### iOS platform

当接收到小程序发送的事件会触发 DCUniMPSDKEngineDelegate 的协议方法，需宿主App实现该方法
When the event sent by the applet is received, the protocol method of DCUniMPSDKEngineDelegate will be triggered, and the host App needs to implement this method

**协议方法说明**
**Protocol Method Description**

```
/// 监听小程序向原生发送事件方法
/// Listening applet sends event method to native
/// @param event 事件名称
/// @param event event name
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param data data: NSString or NSDictionary type
/// @param callback 回调数据给小程序
/// @param callback callback data to applet
- (void)onUniMPEventReceive:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback;

DCUniMPKeepAliveCallback 说明
/// 回调数据给小程序的 block 定义
/// Call back data to the block definition of the applet
/// result：回调参数支持 NSString 或 NSDictionary 类型
/// result: The callback parameter supports NSString or NSDictionary type
/// keepAlive：如果 keepAlive 为 YES，则可以多次回调数据给小程序，反之触发一次后回调方法即被移除
/// keepAlive: If keepAlive is YES, you can call back data to the applet multiple times, otherwise the callback method will be removed after triggering once
typedef void (^DCUniMPKeepAliveCallback)(id result, BOOL keepAlive);

```

**示例**
**example**


```Objective-C
/// 监听小程序发送的事件方法
/// Listen to the event method sent by the applet
- (void)onUniMPEventReceive:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback {
    
    NSLog(@"Receive UniMP event: %@ data: %@",event,data);
    
    // 回传数据给小程序
    // Return data to the applet
    // DCUniMPKeepAliveCallback 用法请查看定义说明
    // For the usage of DCUniMPKeepAliveCallback, please refer to the definition
    if (callback) {
        callback(@"native callback message",NO);
    }
}
```

### Android 平台
### Android platform


**API**

DCUniMPSDK.getInstance().setOnUniMPEventCallBack(callBack)
设置监听小程序发送给宿主的事件
Set the event that the listening applet sends to the host


**参数说明**
**Parameter Description**

|参数|类型|必填|说明
|Parameter|Type|Required|Description
|:----|:----|:----|:----
|callBack|IOnUniMPEventCallBack|是|小程序触发event事件接口
| callBack| IOnUniMPEventCallBack|Yes|The applet triggers the event event interface

**返回值**
**return value**

无
none

**示例**
**example**

```JAVA
DCUniMPSDK.getInstance().setOnUniMPEventCallBack(new DCUniMPSDK.IOnUniMPEventCallBack() {
	@Override
	public void onUniMPEventReceive(String event, Object data, DCUniMPJSCallback callback) {
		Log.d("cs", "onUniMPEventReceive    event="+event);
        //回传数据给小程序
        //Return data to the applet
		callback.invoke( "收到消息");
	}
});
```
