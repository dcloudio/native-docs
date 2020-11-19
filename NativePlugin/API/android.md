## UniResourceUtils

### io.dcloud.feature.uniapp.utils.UniResourceUtils

资源数据转换工具

#### getColor(String color)
#### getColor(String color, int defaultColor)

将color字符串转为int 

**参数说明**

|参数|类型|说明
|:----|:----|:----
|color|String|颜色值字符串
|defaultColor|int|默认颜色值域

**返回值**

|类型|说明
|:----|:----
|int|颜色值域

#### isNamedColor(String name)

检测当前颜色名称是否符合颜色命名要求 例如`antiquewhite`、`aquamarine`等等

**参数说明**

|参数|类型|说明
|:----|:----|:----
|name|String|颜色名称

**返回值**

|类型|说明
|:----|:----
|int|颜色值域

#### parseAlpha(float alpha)

解析范围0-1到范围0-255的颜色的alpha渐变

**参数说明**

|参数|类型|说明
|:----|:----|:----
|alpha|float|alpha值，范围为0-1

**返回值**

|类型|说明
|:----|:----
|int|范围为0-255

## UniUtils

### io.dcloud.feature.uniapp.utils.UniUtils

通用工具类

#### isUiThread()

当前运行线程是否为UI线程。

#### getFloatByViewport(Object value, int viewport)

根据'视口'值域转换value值域

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|Object|被转换参数
|viewport|int|视口值域、 视口值域的大小与设备是相关，通过

**返回值**

|类型|说明
|:----|:----
|float|value的值域

> 如何获取当前运行环境的 viewport
+ Component可通过getViewPortWidth()获取
+ mUniSDKInstance.getInstanceViewPortWidth()获取

#### getFloat(Object value, @Nullable Float df)

转换value返回float类型数据

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|Object|被转换数据
|df|Float|默认值域

**返回值**

|类型|说明
|:----|:----
|float|value的值域

#### getInt(String|Object value)

字符串转int

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|String或Object|被转换的字符串

**返回值**

|类型|说明
|:----|:----
|int|value的值域 默认值0

#### getInteger(Object value, Integer df)

通过value获取integer对象

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|Object|被转换的字符串对象
|df|Integer|默认值

**返回值**

|类型|说明
|:----|:----
|integer|value的值域

#### parseInt(String|Object value)

字符串转int

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|String或Object|被转换的字符串

**返回值**

|类型|说明
|:----|:----
|int|value的值域

#### parseFloat(String|Object value)

字符串转float

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|String或Object|被转换的字符串

**返回值**

|类型|说明
|:----|:----
|float|value的值域

#### getDouble(Object value) 

字符串转double

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|Object|被转换的字符串

**返回值**

|类型|说明
|:----|:----
|double|value的值域

#### getLong(Object value)
 
字符串转long

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|Object|被转换的字符串

**返回值**

|类型|说明
|:----|:----
|long|value的值域

#### getBoolean(Object value, Boolean df) 

字符串转Boolean

**参数说明**

|参数|类型|说明
|:----|:----|:----
|value|Object|被转换的字符串
|df|Integer|默认值

**返回值**

|类型|说明
|:----|:----
|Boolean|value的值域


## UniViewUtils

### io.dcloud.feature.uniapp.utils.UniViewUtils

视图工具类

#### getUniHeight(String instanceId)

通过实例id获取页面可操作性高度

**参数说明**

|参数|类型|说明
|:----|:----|:----
|instanceId|Object|Instance id 通过mInstance.getInstanceId()获取

**返回值**

|类型|说明
|:----|:----
|int|页面高度

#### getWeexWidth(String instanceId)

通过实例id获取页面可操作性宽度

**参数说明**

|参数|类型|说明
|:----|:----|:----
|instanceId|Object|Instance id 通过mInstance.getInstanceId()获取

**返回值**

int 页面宽度

#### getScreenWidth()、getScreenWidth(Context ctx)

获取屏幕宽度

**返回值**

|类型|说明
|:----|:----
|int|屏幕宽度

#### getScreenHeight()、getScreenHeight(Context cxt)

获取屏幕高度

**返回值**

|类型|说明
|:----|:----
|int|屏幕高度

#### getStatusBarHeight(Context context)

获取状态栏高度

**返回值**

|类型|说明
|:----|:----
|int|状态栏高度

#### getRealPxByWidth(float pxValue,int customViewport)

将JS、CSS的数据px值域转换为native数据值  

**参数说明**

|参数|类型|说明
|:----|:----|:----
|pxValue|float|js、css获取到px值域
|customViewport|int|'视口'值域  customViewport通过mUniSDKInstance.getInstanceViewPortWidth()获取

**返回值**

|类型|说明
|:----|:----
|float|native数据值

#### getWebPxByWidth(float pxValue,int customViewport)

将native数据值转换为JS、CSS的数据px值域

**参数说明**

|参数|类型|说明
|:----|:----|:----
|pxValue|float|native数据值
|customViewport|int|'视口'值域  customViewport通过mUniSDKInstance.getInstanceViewPortWidth()获取

**返回值**

|类型|说明
|:----|:----
|float|JS、CSS的数据px值域

#### dip2px(float dpValue)

dip转px

**参数说明**

|参数|类型|说明
|:----|:----|:----
|dpValue|float|dip值域

**返回值**

|类型|说明
|:----|:----
|int|px值域

#### multiplyColorAlpha(int color, int alpha)

将颜色与给定的alpha相乘。返回带有alpha颜色值域

**参数说明**

|参数|类型|说明
|:----|:----|:----
|color|int|颜色值域
|alpha|int|透明度值域 0~1

**返回值**

|类型|说明
|:----|:----
|int|带有alpha的颜色值域



## UniSDKEngine

### io.dcloud.feature.uniapp.UniSDKEngine

#### registerUniModule(String moduleName, Class<? extends UniModule> moduleClass)

注册模块 UniModule

**参数说明**

|参数|类型|说明
|:----|:----|:----
|moduleName|String|模块名称
|moduleClass|Class<? extends UniModule>|模块对象

**返回值**

|类型|说明
|:----|:----
|boolean|注册是否成功 true表示成功

#### registerUniComponent(String type, Class<? extends UniComponent> clazz)

注册组件 UniComponent

**参数说明**

|参数|类型|说明
|:----|:----|:----
|type|String|组件名称
|clazz|Class<? extends UniComponent>|组件对象

**返回值**

|类型|说明
|:----|:----
|boolean|注册是否成功 true表示成功

#### registerUniVContainer(String type, Class<? extends UniVContainer> clazz)

注册父容器组件 UniVContainer

**参数说明**

|参数|类型|说明
|:----|:----|:----
|type|String|组件名称
|clazz|Class<? extends UniVContainer>|组件对象

**返回值**

|类型|说明
|:----|:----
|boolean|注册是否成功 true表示成功




## UniLogUtils

### io.dcloud.feature.uniapp.utils.UniLogUtils

日志工具类

#### i(String msg)
#### i(String tag, String msg)

打印输出INFO数据日志

**参数说明**

|参数|类型|说明
|:----|:----|:----
|tag|String|tag标签名称
|msg|String|日志信息

#### v(String msg)
#### v(String tag, String msg)

打印输出VERBOSE日志信息

**参数说明**

|参数|类型|说明
|:----|:----|:----
|tag|String|tag标签名称
|msg|String|日志信息

#### w(String msg)
#### w(String tag, String msg)

打印输出WARN日志信息

**参数说明**

|参数|类型|说明
|:----|:----|:----
|tag|String|tag标签名称
|msg|String|日志信息

#### e(String tag)
#### e(String tag, String msg) 

打印输出ERROR日志信息

**参数说明**

|参数|类型|说明
|:----|:----|:----
|tag|String|tag标签名称
|msg|String|日志信息


## UniLogLevel

### io.dcloud.feature.uniapp.utils.UniLogLevel

Log日志Level

#### 枚举参数
- OFF
- WTF
- TLOG
- ERROR
- WARN
- INFO
- DEBUG
- VERBOSE
- ALL