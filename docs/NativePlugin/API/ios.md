## DCUniModule

**主要属性说明**

|参数|类型|说明
|:----|:----|:----
|uniExecuteQueue|dispatch_queue_t|如果要在特殊队列中执行`module`操作，请自己实现。<br>默认调度队列将为主队列。
|uniExecuteThread|NSThread|如果要在特殊线程中执行`module`操作，可以新创建一个。<br>如果实现了 `targetExecuteQueue`，`uniExecuteThread`会被忽略。<br>默认是主线程。
|uniInstance|DCUniSDKInstance|实例绑定到此`module`。<br> 它可以帮助您获得许多与实例相关的有用属性。


## DCUniComponent

**主要属性说明**

|参数|类型|说明
|:----|:----|:----
|uniInstance|DCUniSDKInstance|组件的实例
|uniSubcomponents|NSArray<DCUniComponent *>|该组件的子组件
|uniSupercomponent|DCUniComponent|该组件的父组件
|view|UIView|组件的视图


**主要函数说明**

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

|参数|类型|说明
|:----|:----|:----
|viewController|UIViewController|实例的控制器
|instanceId|NSString|实例的标识
|parentInstance|DCUniSDKInstance|父实例
|frame|CGRect|当前实例的frame


**主要函数说明**

#### - (void)reload:(BOOL)forcedReload 

```
/*刷新*/
- (void)reload:(BOOL)forcedReload 
```

#### - (void)fireGlobalEvent:(NSString *)eventName params:(NSDictionary *)params;

发送全局事件

|参数|类型|说明
|:----|:----|:----
|eventName|NSString|事件的名字
|params|NSDictionary|附带的参数

```
/**
 * @abstract 向JS中发送事件。
 *
 * @param eventName 要触发的事件的名称
 * @param params 要触发的参数
 **/
 - (void)fireGlobalEvent:(NSString *)eventName params:(NSDictionary *)params;

 ```