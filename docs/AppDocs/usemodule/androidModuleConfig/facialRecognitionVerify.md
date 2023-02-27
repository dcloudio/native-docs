## 实人认证

**实人认证依赖于UTS基础模块，请先集成[UTS基础模块](usemodule/androidModuleConfig/uts.md)**

### 需要拷贝的文件

**需要引入工程的aar文件**

|路径|文件|
| :-------: | :-------: |
| SDK\libs | uni-facialRecognitionVerify-release.aar、aliyun-face-XXX.aar、aliyun-facelanguage-XXX.aar、aliyun-photinus-XXX.aar、aliyun-wishverify-XXX.aar、Android-AliyunFaceGuard-10036.aar、APSecuritySDK-DeepSec-7.0.1.20220813.jiagu.aar|

`XXX`为版本号，具体版本号以下载的SDK中的为准

**在app级的build.gradle配置**

```
dependencies {
    implementation "com.squareup.okhttp3:okhttp:3.11.0"
    implementation "com.squareup.okio:okio:1.14.0"
    implementation "com.aliyun.dpa:oss-android-sdk:+"
}
```