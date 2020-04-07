# 胶囊按钮

## 概念

胶囊按钮即小程序页面默认导航栏右侧的按钮，包含`···`菜单按钮和`X`关闭按钮，如下图所示：
> 胶囊按钮的样式不支持修改，框架默认会根据导航栏的颜色自适应胶囊按钮的颜色

<img src="/Users/xhy/Desktop/meunbtn.png" width=35%>

## 自定义菜单项

点击胶囊按钮左侧的`···`按钮会弹出 ActionSheet 菜单，菜单中的项支持自定义，其中上部分的项是在小程序中定义，下部分的项在宿主中定义，如下图所示：





如果在小程序工程中的 pages.json 中，为页面配置了

```
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/tabBar/component/component",
			"style": {
				"navigationBarTitleText": "内置组件",
			}
		},
		...
	],
	...
}
```