HBuilderX 自 2.4.7+ 版本开始支持 `Sign in with Apple` （苹果登录），苹果登录是** iOS13** 新增加的功能，当你的应用使用了第三方登录比如微信登录，同时也需要集成苹果登录，否则提交审核可能会被拒绝。

## 使用苹果登录的教程

### 使用苹果登录首先需要在苹果开发者后台开启 App 的 `Sign In with Apple` 服务
> 注：只有发布Appstore的应用才能使用苹果登录。企业版开发者账号不支持 `Sign In with Apple` （企业版开发者账号指的是用于企业内部分发App，不能用于发布 App Store 的账号，也就是价格为 299$ 的账号）

1.[登录到苹果开发者后台](https://developer.apple.com/) 编辑对应的 `Identifier` 勾选 `Sign In with Apple` 服务并保存

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/46066.png)

2.勾选或取消服务，会导致之前的 profile 描述文件失效,不需要新建，只要点击 Edit 重新编辑对应的 profile文件，然后保存下载使用新的profile文件即可

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/46067.png)


### 在 HBuilderX 编辑项目的 manifest.json ，在 App SDK配置中找到苹果登录，并勾选。

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/45801.png)

> **测试苹果登录服务，需要提交云打包或提交自定义基座打包，只有添加了苹果登录服务提交打包才会将苹果登录模块打进安装包，否则调不到相关方法**

### 登录按钮样式

苹果对登录按钮样式有要求，请按照苹果要求统一设置登录按钮的样式，否则审核可能会被拒绝

需要注意的是：

- 按钮必须在显著的位置（避免滑动屏幕才能看到）
- 登录按钮有三种外观：白色，带有黑色轮廓线的白色和黑色，其他设计可能会影响审核；
- 按钮圆角范围及按钮最小尺寸也有要求；
- 具体规则请参考苹果 [官方文档](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/)

下面是原生端默认的几种按钮样式供大家参考（width:130pt, height:30pt, corner radius: 6pt）

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/46408.png)

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/appleOauth/46407.png)


### 示例代码 ([详细 api 请查阅 plus.oauth 文档](https://www.html5plus.org/doc/zh_cn/oauth.html))

> **注：因为是 iOS13+ 系统才支持苹果登录，所以建议在App的界面入口判断下，只有 iOS13 才显示Apple登录的选项**

#### uni-app示例

```
uni.login({
    provider: 'apple',
    success: function (loginRes) {
        // 登录成功
        uni.getUserInfo({
            provider: 'apple',
            success() {
                // 获取用户信息成功
            }
        })
    },
    fail: function (err) {
        // 登录失败
    }
});

```

#### 5+App示例

> **注：因为是 iOS13+ 系统才支持苹果登录，所以在 iOS13 以下设备调用 plus.oauth.getServices 不会返回苹果登录对应的 service 对象**

```
var appleOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取苹果授权登录对象，苹果授权登录id 为 'apple' iOS13以下系统，不会返回苹果登录对应的 service  
		if (service.id == 'apple') {
			appleOauth = service;
			break;
		}
	}
	appleOauth.login( function(oauth){
		// 授权成功，苹果授权返回的信息在 oauth.target.appleInfo 中  
	}, function(err) {
		// 授权失败 error
	}, {
		// 默认只会请求用户名字信息，如需请求用户邮箱信息，需要设置 scope: 'email'  
		scope: 'email'
	})
}, function(err) {
	// 获取 services 失败
})
```

##### 5+ api 返回参数说明 

> 注意：这里是 5+ api 返回的数据，uni 接口对 5+api 做了封装，以实际返回结果为准

**appleInfo**

属性|类型|说明
:--|:--|:--|
user|String|苹果用户唯一标识符
state|String|验证信息状态
email|String|用户共享的可选电子邮件
fullName|Object|用户共享的可选全名
authorizationCode|String|验证数据
identityToken|String|Web令牌(JWT)
realUserStatus|Number|标识用户是否为真实的人 0：当前平台不支持，忽略该值；1：无法确认；2：用户真实性非常高
scope|String|返回信息作用域


**fullName**

属性|类型|说明
:--|:--|:--|
namePrefix|String|名字前缀，头衔、敬称
givenName|String|名字
middleName|String|中间名
familyName|String|姓
nameSuffix|String|名字后缀，学位、荣誉
nickName|String|昵称

**授权失败 code 说明**

code|说明
:--|:--|
1000|未知错误
1001|取消授权
1002|返回值无效
1003|请求未处理
1004|授权失败

### 最后提交云打包或自定义基座打包进行功能测试

