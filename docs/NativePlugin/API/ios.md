## DCUniModule

**主要属性说明**
**Main attribute description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|uniExecuteQueue|dispatch_queue_t|如果要在特殊队列中执行`module`操作，请自己实现。<br>默认调度队列将为主队列。
| uniExecuteQueue| dispatch_queue_t| If you want to execute `module` operations in a special queue, please implement it yourself.<br> The default dispatch queue will be the main queue.
|uniExecuteThread|NSThread|如果要在特殊线程中执行`module`操作，可以新创建一个。<br>如果实现了 `targetExecuteQueue`，`uniExecuteThread`会被忽略。<br>默认是主线程。
| uniExecuteThread| NSThread|If you want to execute the `module` operation in a special thread, you can create a new one.<br> If `targetExecuteQueue` is implemented, `uniExecuteThread` will be ignored.<br> The default is the main thread.
|uniInstance|DCUniSDKInstance|实例绑定到此`module`。<br> 它可以帮助您获得许多与实例相关的有用属性。
|uniInstance|DCUniSDKInstance| instance bound to this `module`.<br> It helps you get many useful properties related to instances.


## DCUniComponent

**主要属性说明**
**Main attribute description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|uniInstance|DCUniSDKInstance|组件的实例
| uniInstance| DCUniSDKInstance| component instance
|uniSubcomponents|NSArray<DCUniComponent *>|该组件的子组件
| uniSubcomponents| NSArray<DCUniComponent *>|The subcomponents of this component
|uniSupercomponent|DCUniComponent|该组件的父组件
| uniSupercomponent| DCUniComponent| the parent component of this component
|view|UIView|组件的视图
| view| UIView| component's view


**主要函数说明**
**Main function description**

#### -(void)onCreateComponentWithRef::::(DCUniSDKInstance *)uniInstance;


```
/**
 *
 *
 *  @param ref          组件的标识
 *  @param type         组件的类型
 *  @param styles       组件的样式
 *  @param attributes   组件的属性
 *  @param events       组件的事件
 *  @param uniInstance  与组件关联的uniInstance
 *
 */

-(void)onCreateComponentWithRef:(NSString *)ref type:(NSString *)type
                    styles:(NSDictionary *)styles
                    attributes:(NSDictionary *)attributes
                    events:(NSArray *)events uniInstance:(DCUniSDKInstance *)uniInstance;
```

#### - (void)fireEvent::(nullable NSDictionary *)params;


```
/**
 * @abstract 向JS 中的组件触发事件。
 *
 * @param eventName 要触发的事件的名称
 * @param params 要触发的参数
 **/
- (void)fireEvent:(NSString *)eventName params:(nullable NSDictionary *)params;
```


## DCUniSDKInstance

**主要属性说明**
**Main attribute description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|viewController|UIViewController|实例的控制器
| viewController | UIViewController | instance's controller
|instanceId|NSString|实例的标识
| instanceId| NSString| the identifier of the instance
|parentInstance|DCUniSDKInstance|父实例
| parentInstance| DCUniSDKInstance| parent instance
|frame|CGRect|当前实例的frame
| frame| CGRect| the frame of the current instance


**主要函数说明**
**Main function description**

#### - (void)reload:(BOOL)forcedReload 

```
/*刷新*/
- (void)reload:(BOOL)forcedReload 
```

#### - (void)fireGlobalEvent:(NSString *)eventName params:(NSDictionary *)params;

发送全局事件
send global events

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|eventName|NSString|事件的名字
| eventName| NSString| The name of the event
|params|NSDictionary|附带的参数
|params| NSDictionary|Accompanied parameters

```
/**
 * @abstract 向JS中发送事件。
 *
 * @param eventName 要触发的事件的名称
 * @param params 要触发的参数
 **/
 - (void)fireGlobalEvent:(NSString *)eventName params:(NSDictionary *)params;

 ```