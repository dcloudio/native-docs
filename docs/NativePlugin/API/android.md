## UniResourceUtils

### io.dcloud.feature.uniapp.utils.UniResourceUtils

资源数据转换工具
Resource Data Conversion Tool

#### getColor(String color)
#### getColor(String color, int defaultColor)

将color字符串转为int 
Convert color string to int

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|color|String|颜色值字符串
| color| String| color value string
|defaultColor|int|默认颜色值域
| defaultColor| int| default color range

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|颜色值域
| int | color range

#### isNamedColor(String name)

检测当前颜色名称是否符合颜色命名要求 例如`antiquewhite`、`aquamarine`等等
Check whether the current color name meets the color naming requirements, such as `antiquewhite`, `aquamarine`, etc.

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|name|String|颜色名称
| name| String| color name

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|颜色值域
| int | color range

#### parseAlpha(float alpha)

解析范围0-1到范围0-255的颜色的alpha渐变
An alpha gradient that parses colors from the range 0-1 to the range 0-255

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|alpha|float|alpha值，范围为0-1
| alpha| float| alpha value, range is 0-1

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|范围为0-255
|int|range is 0-255

## UniUtils

### io.dcloud.feature.uniapp.utils.UniUtils

通用工具类
General tools

#### isUiThread()

当前运行线程是否为UI线程。
Whether the current running thread is a UI thread.

#### getFloatByViewport(Object value, float viewport)

根据'视口'值域转换value值域
Transform the value range according to the 'viewport' range

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|Object|被转换参数
| value| Object| the converted parameter
|viewport|float|视口值域、 视口值域的大小与设备是相关，通过
| viewport| float| The viewport range, the size of the viewport range is related to the device, through

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|float|value的值域|
|float|value range|

> 如何获取当前运行环境的 viewport
> How to get the viewport of the current running environment
+ Component可通过getViewPortWidth()获取
+ Component can be obtained through getViewPortWidth()
+ mUniSDKInstance.getInstanceViewPortWidth()获取
+ mUniSDKInstance.getInstanceViewPortWidth() get

#### getFloat(Object value, @Nullable Float df)

转换value返回float类型数据
Convert value to return float type data

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|Object|被转换数据
| value| Object| the converted data
|df|Float|默认值域
|df|Float|Default field

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|float|value的值域|
|float|value range|

#### getInt(String|Object value)

字符串转int
string to int

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|String或Object|被转换的字符串
| value| String or Object| the converted string

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|value的值域 默认值0
| int| value range default value 0

#### getInteger(Object value, Integer df)

通过value获取integer对象
Get the integer object by value

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|Object|被转换的字符串对象
| value| Object| the converted string object
|df|Integer|默认值
|df|Integer|default value

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|integer|value的值域
| integer| value range

#### parseInt(String|Object value)

字符串转int
string to int

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|String或Object|被转换的字符串
| value| String or Object| the converted string

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|value的值域
| int | value range

#### parseFloat(String|Object value)

字符串转float
string to float

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|String或Object|被转换的字符串
| value| String or Object| the converted string

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|float|value的值域|
|float|value range|

#### getDouble(Object value) 

字符串转double
string to double

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|Object|被转换的字符串
| value| Object| the converted string

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|double|value的值域|
|double|value range|

#### getLong(Object value)
 
字符串转long
string to long

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|Object|被转换的字符串
| value| Object| the converted string

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|long|value的值域|
|long|value range|

#### getBoolean(Object value, Boolean df) 

字符串转Boolean
String to Boolean

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|value|Object|被转换的字符串
| value| Object| the converted string
|df|Integer|默认值
|df|Integer|default value

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|Boolean|value的值域
|Boolean| value range


## UniViewUtils

### io.dcloud.feature.uniapp.utils.UniViewUtils

视图工具类
View Utilities

#### getUniHeight(String instanceId)

通过实例id获取页面可操作性高度
Get the operability height of the page through the instance id

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|instanceId|Object|Instance id 通过mInstance.getInstanceId()获取
| instanceId| Object| Instance id is obtained through mInstance.getInstanceId()

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|页面高度
|int|page height

#### getWeexWidth(String instanceId)

通过实例id获取页面可操作性宽度
Get page operability width by instance id

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|instanceId|Object|Instance id 通过mInstance.getInstanceId()获取
| instanceId| Object| Instance id is obtained through mInstance.getInstanceId()

**返回值**
**return value**

int 页面宽度
int page width

#### getScreenWidth()、getScreenWidth(Context ctx)

获取屏幕宽度
Get screen width

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|屏幕宽度
| int | screen width

#### getScreenHeight()、getScreenHeight(Context cxt)

获取屏幕高度
Get screen height

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|屏幕高度
|int|screen height

#### getStatusBarHeight(Context context)

获取状态栏高度
Get the height of the status bar

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|状态栏高度
| int | status bar height

#### getRealPxByWidth(float pxValue,float customViewport)

将JS、CSS的数据px值域转换为native数据值  
Convert the data px value field of JS and CSS to native data value

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|pxValue|float|js、css获取到px值域
| pxValue| float| js, css gets the px value field
|customViewport|float|'视口'值域  customViewport通过mUniSDKInstance.getInstanceViewPortWidth()获取
| customViewport| float|'Viewport' value field customViewport is obtained through mUniSDKInstance.getInstanceViewPortWidth()

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|float|native数据值
|float| native data value

#### getWebPxByWidth(float pxValue,float customViewport)

将native数据值转换为JS、CSS的数据px值域
Convert the native data value to the data px value field of JS and CSS

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|pxValue|float|native数据值
| pxValue| float| native data value
|customViewport|float|'视口'值域  customViewport通过mUniSDKInstance.getInstanceViewPortWidth()获取
| customViewport| float|'Viewport' value field customViewport is obtained through mUniSDKInstance.getInstanceViewPortWidth()

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|float|JS、CSS的数据px值域
| float| JS, CSS data px value field

#### dip2px(float dpValue)

dip转px
dip to px

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|dpValue|float|dip值域
| dpValue| float| dip value field

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|px值域
| int| px value range

#### multiplyColorAlpha(int color, int alpha)

将颜色与给定的alpha相乘。返回带有alpha颜色值域
Multiplies the color by the given alpha. Returns the color field with alpha

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|color|int|颜色值域
| color| int| color range
|alpha|int|透明度值域 0~1
| alpha| int| transparency range 0~1

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|int|带有alpha的颜色值域
| int | color range with alpha



## UniSDKEngine

### io.dcloud.feature.uniapp.UniSDKEngine

#### registerUniModule(String moduleName, Class<? extends UniModule> moduleClass)

注册模块 UniModule
Register the module UniModule

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|moduleName|String|模块名称
| moduleName | String | module name
|moduleClass|Class<? extends UniModule>|模块对象
| moduleClass| Class<? extends UniModule>| module object

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|注册是否成功 true表示成功
| boolean|Whether the registration is successful or not true means success

#### registerUniComponent(String type, Class<? extends UniComponent> clazz)

注册组件 UniComponent
Register component UniComponent

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|type|String|组件名称
| type | String | component name
|clazz|Class<? extends UniComponent>|组件对象
| clazz| Class<? extends UniComponent>|component object

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|注册是否成功 true表示成功
| boolean|Whether the registration is successful or not true means success

#### registerUniVContainer(String type, Class<? extends UniVContainer> clazz)

注册父容器组件 UniVContainer
Register parent container component UniVContainer

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|type|String|组件名称
| type | String | component name
|clazz|Class<? extends UniVContainer>|组件对象
| clazz| Class<? extends UniVContainer>|component object

**返回值**
**return value**

|类型|说明
|Type|Description
|:----|:----
|boolean|注册是否成功 true表示成功
| boolean|Whether the registration is successful or not true means success




## UniLogUtils

### io.dcloud.feature.uniapp.utils.UniLogUtils

日志工具类
log tools

#### i(String msg)
#### i(String tag, String msg)

打印输出INFO数据日志
Print out the INFO data log

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|tag|String|tag标签名称
| tag| String| tag tag name
|msg|String|日志信息
| msg| String|log message

#### v(String msg)
#### v(String tag, String msg)

打印输出VERBOSE日志信息
Print out VERBOSE log information

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|tag|String|tag标签名称
| tag| String| tag tag name
|msg|String|日志信息
| msg| String|log message

#### w(String msg)
#### w(String tag, String msg)

打印输出WARN日志信息
Print out WARN log information

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|tag|String|tag标签名称
| tag| String| tag tag name
|msg|String|日志信息
| msg| String|log message

#### e(String tag)
#### e(String tag, String msg) 

打印输出ERROR日志信息
Print out ERROR log information

**参数说明**
**Parameter Description**

|参数|类型|说明
|parameter|type|description
|:----|:----|:----
|tag|String|tag标签名称
| tag| String| tag tag name
|msg|String|日志信息
| msg| String|log message


## UniLogLevel

### io.dcloud.feature.uniapp.utils.UniLogLevel

Log日志Level
Log Log Level

#### 枚举参数
#### Enumeration parameters
- OFF
- WTF
- TLOG
- ERROR
- WARN
- INFO
- DEBUG
- VERBOSE
- ALL