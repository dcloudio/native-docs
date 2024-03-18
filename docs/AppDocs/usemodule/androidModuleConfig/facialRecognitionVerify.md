## 实人认证

**实人认证依赖于UTS基础模块，请先集成[UTS基础模块](/AppDocs/usemodule/androidModuleConfig/uts.md)**

### 需要拷贝的文件

**需要引入工程的aar文件**

|路径|文件|
| :-------: | :-------: |
| SDK\libs | uni-facialRecognitionVerify-release.aar、aliyun-base-XXX.aar、aliyun-facade-XXX.aar、aliyun-face-XXX.aar、aliyun-faceaudio-XXX.aar、aliyun-facelanguage-XXX.aar、aliyun-wishverify-XXX.aar、Android-AliyunFaceGuard-10042.aar、APSecuritySDK-DeepSec-7.0.1.20230914.jiagu.aar|

`XXX`为版本号，具体版本号以下载的SDK中的为准

HBuilder X 3.99 新增了`facialRecognitionVerify-support-release.aar`库，作用是应用可以在X86设备上正常运行，但调用`uni.startFacialRecognitionVerify()`会触发错误回调。如果不支持X86设备，可以不用引入。

**在app级的build.gradle配置**

```
dependencies {
    implementation "com.squareup.okhttp3:okhttp:3.11.0"
    implementation "com.squareup.okio:okio:1.14.0"
    implementation "com.aliyun.dpa:oss-android-sdk:+"
}
```

注意：离线SDK集成实人认证如果出现`lib/*/libc++_shared.so`报错时，需要在module的build.gradle的android节点下添加如下内容

```
packagingOptions {
  pickFirst 'lib/*/libc++_shared.so'
}
```