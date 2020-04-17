## 添加依赖资源及文件

|依赖库|系统库|依赖资源|
|:--|:--|:--|
|liblibStatistic.a、UMAnalytics.framework、UMCommon.framework|SystemConfiguration.framework、CoreTelephony.framework、libz.tbd、libsqlite3.tbd|无|


## 账号配置
1.到[友盟开放平台](http://www.umeng.com/analytics)申请Appkey

2.在工程的 info.plist 添加 `umeng`节点，添加 appkey 信息，如下图

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20150528/8aff9900be38d719a1ba7ffad8d56919.png)

### IDFA说明
友盟统计SDK默认采集idfa标识，用来更准确的分析核对数据。对于应用本身没有获取idfa的情况，建议将应用提交至AppStore时按如下方式配置：（以避免被苹果以“应用不含广告功能，但获取了广告标示符IDFA”的而拒绝其上架。））

![](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/66885/UMDP_zh/1518173224807/UMCommon_IDFA.png)
