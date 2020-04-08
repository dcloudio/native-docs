# 宿主App与小程序相互通讯
> 注：2.6.10 版本开始支持此功能


## 宿主 App 向小程序发送事件

### iOS 平台

**API**

```Objective-C
Class DCUniMPSDKEngine.h
/// 向小程序发送事件
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
+ (void)sendUniMPEvent:(NSString *)event data:(id)data;
```

**示例**

```Objective-C
[DCUniMPSDKEngine sendUniMPEvent:@"NativeEvent" data:@{@"msg":@"native message"}];
```

### Android 平台

**API**

```java
DCUniMPSDK.getInstance().sendUniMPEvent(event, data)
```

**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|event|String|是|触发事件的event
|data|String或JSON|是|事件的携带参数

**返回值**

|类型|说明
|:----|:----
|boolean|true表示事件通知成功。false表示失败。可通过log查看。

**示例**

```JAVA
JSONObject data = new JSONObject();
data.put("sj", "点击了关于");
DCUniMPSDK.getInstance().sendUniMPEvent("gy", data);
```


### 小程序平台

监听宿主App发送事件

**示例**

```JavaScript
uni.onNativeEventReceive((event,data)=>{
	console.log('接收到宿主App消息：' + event + data);
	this.nativeMsg = '接收到宿主App消息 event：' + event + " data: " + data;
})
```

**参数说明**

|属性|类型|说明
|:---|:---|:---
|event|String|事件名称
|data|String或JsonObject|宿主传递的数据

## 小程序向宿主 App 发送事件

### 小程序平台

**API**

向宿主App发送事件

```
uni.sendNativeEvent(event,callback)
```

**参数说明**

|属性|类型|说明
|:--|:--|:--
|event|String|事件名称
|callback|Function|宿主App回调方法。参数可以是 String 或 JsonObject。取决于宿主的实现

**示例**

```JavaScript
// 向宿主App发送事件
uni.sendNativeEvent('unimp-event', {
	msg: 'unimp message!!!'
}, ret => {
	this.nativeMsg = '宿主App回传的数据：' + ret;
})
```


### iOS 平台

当接收到小程序发送的事件会触发 DCUniMPSDKEngineDelegate 的协议方法，需宿主App实现该方法

**协议方法说明**

```
/// 监听小程序向原生发送事件方法
/// @param event 事件名称
/// @param data 数据：NSString 或 NSDictionary 类型
/// @param callback 回调数据给小程序
- (void)onUniMPEventReceive:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback;

DCUniMPKeepAliveCallback 说明
/// 回调数据给小程序的 block 定义
/// result：回调参数支持 NSString 或 NSDictionary 类型
/// keepAlive：如果 keepAlive 为 YES，则可以多次回调数据给小程序，反之触发一次后回调方法即被移除
typedef void (^DCUniMPKeepAliveCallback)(id result, BOOL keepAlive);

```

**示例**


```Objective-C
/// 监听小程序发送的事件方法
- (void)onUniMPEventReceive:(NSString *)event data:(id)data callback:(DCUniMPKeepAliveCallback)callback {
    
    NSLog(@"Receive UniMP event: %@ data: %@",event,data);
    
    // 回传数据给小程序
    // DCUniMPKeepAliveCallback 用法请查看定义说明
    if (callback) {
        callback(@"native callback message",NO);
    }
}
```

### Android 平台


**API**

DCUniMPSDK.getInstance().setOnUniMPEventCallBack(callBack)
设置监听小程序发送给宿主的事件


**参数说明**

|参数|类型|必填|说明
|:----|:----|:----|:----
|callBack|IOnUniMPEventCallBack|是|小程序触发event事件接口

**返回值**

无

**示例**

```JAVA
DCUniMPSDK.getInstance().setOnUniMPEventCallBack(new DCUniMPSDK.IOnUniMPEventCallBack() {
	@Override
	public void onUniMPEventReceive(String event, Object data, DCUniMPJSCallback callback) {
		Log.d("cs", "onUniMPEventReceive    event="+event);
        //回传数据给小程序
		callback.invoke( "收到消息");
	}
});
```
