## 友盟统计配置

注:Linker Flags的添加方法请参考这个[文档](/5PlusDocs/usemodule/iOSModuleConfig/common.md)

1.添加以下静态库：liblibStatistic.a

2.添加以下framework： "UMAnalytics.framework",
      "UMCommon.framework",

3.添加以下系统库：SystemConfiguration.framework,CoreTelephony.framework, libz.tbd, libsqlite3.tbd


4.到[友盟开放平台](http://www.umeng.com/analytics)申请Appkey

5.打开Info.plist文件找到umeng项，如果没有按图片中的格式添加该项，在下图中的红色区域输入申请的Appkey

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/statistic/2117.png)

**注意：**
 IDFA说明

从HBuilderX2.2.5版本之后（含2.2.5），基座里集成了友盟v6.0.5统计SDK，因友盟官方，从组件化产品开始，【友盟+】SDK默认采集idfa标识，用来更准确的分析核对数据。对于应用本身没有获取idfa的情况，建议将应用提交至AppStore时按如下方式配置：（以避免被苹果以“应用不含广告功能，但获取了广告标示符IDFA”的而拒绝其上架。）

![](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5SDKiOS/statistic/40552.png)
