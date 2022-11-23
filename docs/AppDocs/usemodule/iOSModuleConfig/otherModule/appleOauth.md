HBuilderX 自 2.4.7+ 版本开始支持 `Sign in with Apple` （苹果登录），苹果登录是** iOS13** 新增加的功能，当你的应用使用了第三方登录比如微信登录，同时也需要集成苹果登录，否则提交审核可能会被拒绝。
HBuilderX supports `Sign in with Apple` (apple login) since version 2.4.7+. Apple login is a newly added function of **iOS13**. When your application uses a third-party login such as WeChat login, it also needs to be integrated Sign in with Apple, otherwise the submission for review may be rejected.

## 使用苹果登录的教程
## Tutorial to sign in with Apple

### 使用苹果登录首先需要在苹果开发者后台开启 App 的 `Sign In with Apple` 服务
### To sign in with Apple, you first need to enable the `Sign In with Apple` service in the Apple developer background
> 注：只有发布Appstore的应用才能使用苹果登录。企业版开发者账号不支持 `Sign In with Apple` （企业版开发者账号指的是用于企业内部分发App，不能用于发布 App Store 的账号，也就是价格为 299$ 的账号）
> Note: Only apps published in the Appstore can use Apple login. The enterprise version developer account does not support `Sign In with Apple` (the enterprise version developer account refers to the account used to distribute apps within the enterprise, and cannot be used to publish the App Store account, that is, the account priced at 299$)

1.[登录到苹果开发者后台](https://developer.apple.com/) 编辑对应的 `Identifier` 勾选 `Sign In with Apple` 服务并保存
1.[Log in to the Apple developer background](https://developer.apple.com/) Edit the corresponding `Identifier`, check the `Sign In with Apple` service and save

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/46066.png)

2.勾选或取消服务，会导致之前的 profile 描述文件失效,不需要新建，只要点击 Edit 重新编辑对应的 profile文件，然后保存下载使用新的profile文件即可
2. Checking or canceling the service will cause the previous profile description file to become invalid. There is no need to create a new one. Just click Edit to re-edit the corresponding profile file, then save and download the new profile file.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/46067.png)


### 在 HBuilderX 编辑项目的 manifest.json ，在 App SDK配置中找到苹果登录，并勾选。
### Edit the manifest.json of the project in HBuilderX, find the Apple login in the App SDK configuration, and check it.

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/45801.png)

> **测试苹果登录服务，需要提交云打包或提交自定义基座打包，只有添加了苹果登录服务提交打包才会将苹果登录模块打进安装包，否则调不到相关方法**
> **To test the Apple login service, you need to submit the cloud package or submit the custom base package. Only after adding the Apple login service and submitting the package, the Apple login module will be included in the installation package, otherwise the relevant methods cannot be adjusted**

### 登录按钮样式
### Login button style

苹果对登录按钮样式有要求，请按照苹果要求统一设置登录按钮的样式，否则审核可能会被拒绝
Apple has requirements for the style of the login button, please set the style of the login button uniformly according to Apple's requirements, otherwise the review may be rejected

需要注意的是：
have to be aware of is:

- 按钮必须在显著的位置（避免滑动屏幕才能看到）
- Buttons must be prominently placed (avoid swiping to see them)
- 登录按钮有三种外观：白色，带有黑色轮廓线的白色和黑色，其他设计可能会影响审核；
- The login button has three appearances: white, white with black outline and black, other designs may affect review;
- 按钮圆角范围及按钮最小尺寸也有要求；
- There are also requirements for the range of rounded corners of the button and the minimum size of the button;
- 具体规则请参考苹果 [官方文档](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/)
- For specific rules, please refer to Apple [official document](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/)

下面是原生端默认的几种按钮样式供大家参考（width:130pt, height:30pt, corner radius: 6pt）
Here are several default button styles on the native side for your reference (width:130pt, height:30pt, corner radius: 6pt)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/46408.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/46407.png)


### 示例代码 ([详细 api 请查阅 plus.oauth 文档](https://www.html5plus.org/doc/zh_cn/oauth.html))
### sample code ([For detailed api, please refer to plus.oauth documentation](https://www.html5plus.org/doc/zh_cn/oauth.html))

> **注：因为是 iOS13+ 系统才支持苹果登录，所以建议在App的界面入口判断下，只有 iOS13 才显示Apple登录的选项**
> **Note: Only iOS13+ system supports Apple login, so it is recommended to judge the interface entry of the App, only iOS13 can display the option of Apple login**

#### uni-app示例
#### uni-app example

```
uni.login({
    provider: 'apple',
    success: function (loginRes) {
        // 登录成功
        // login successful
        uni.getUserInfo({
            provider: 'apple',
            success() {
                // 获取用户信息成功
                // Obtain user information successfully
            }
        })
    },
    fail: function (err) {
        // 登录失败
        // Login failed
    }
});

```

#### 5+App示例
#### 5+App Examples

> **注：因为是 iOS13+ 系统才支持苹果登录，所以在 iOS13 以下设备调用 plus.oauth.getServices 不会返回苹果登录对应的 service 对象**
> **Note: Because iOS13+ system supports Apple login, calling plus.oauth.getServices on devices below iOS13 will not return the service object corresponding to Apple login**

```
var appleOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取苹果授权登录对象，苹果授权登录id 为 'apple' iOS13以下系统，不会返回苹果登录对应的 service  
		// Obtain the Apple authorized login object. The Apple authorized login id is 'apple' and the system below iOS13 will not return the service corresponding to the Apple login.
		if (service.id == 'apple') {
			appleOauth = service;
			break;
		}
	}
	appleOauth.login( function(oauth){
		// 授权成功，苹果授权返回的信息在 oauth.target.appleInfo 中  
		// Authorization is successful, the information returned by Apple authorization is in oauth.target.appleInfo
	}, function(err) {
		// 授权失败 error
		// Authorization failed error
	}, {
		// 默认只会请求用户名字信息，如需请求用户邮箱信息，需要设置 scope: 'email'  
		// By default, only the user's name information will be requested. If you need to request the user's email address, you need to set scope: 'email'
		scope: 'email'
	})
}, function(err) {
	// 获取 services 失败
	// Failed to get services
})
```

##### 5+ api 返回参数说明 
##### 5+ api return parameter description

> 注意：这里是 5+ api 返回的数据，uni 接口对 5+api 做了封装，以实际返回结果为准
> Note: This is the data returned by 5+ api, the uni interface encapsulates 5+api, the actual returned result shall prevail

**appleInfo**

属性|类型|说明
property|type|description
:--|:--|:--|
user|String|苹果用户唯一标识符
user|String|Apple user unique identifier
state|String|验证信息状态
state|String|verification information status
email|String|用户共享的可选电子邮件
email|String|Optional email for user share
fullName|Object|用户共享的可选全名
fullName|Object|Optional full name of user share
authorizationCode|String|验证数据
authorizationCode|String|Authentication data
identityToken|String|Web令牌(JWT)
identityToken|String|Web Token (JWT)
realUserStatus|Number|标识用户是否为真实的人 0：当前平台不支持，忽略该值；1：无法确认；2：用户真实性非常高
realUserStatus|Number|Identifies whether the user is a real person 0: The current platform does not support, ignore this value; 1: Unable to confirm; 2: User authenticity is very high
scope|String|返回信息作用域
scope|String|return information scope


**fullName**

属性|类型|说明
property|type|description
:--|:--|:--|
namePrefix|String|名字前缀，头衔、敬称
namePrefix|String|Name prefix, title, honorific
givenName|String|名字
givenName|String|name
middleName|String|中间名
middleName|String|Middle name
familyName|String|姓
familyName|String|name
nameSuffix|String|名字后缀，学位、荣誉
nameSuffix|String|Name suffix, degree, honor
nickName|String|昵称
nickName|String|nickname

**授权失败 code 说明**
**Authorization failure code description**

code|说明
code|description
:--|:--|
1000|未知错误
1000|Unknown error
1001|取消授权
1001|Deauthorization
1002|返回值无效
1002|Invalid return value
1003|请求未处理
1003|The request was not processed
1004|授权失败
1004|Authorization failed

### 最后提交云打包或自定义基座打包进行功能测试
### Finally submit cloud packaging or custom base packaging for functional testing

