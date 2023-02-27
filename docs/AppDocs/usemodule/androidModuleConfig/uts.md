## UTS 基础模块
>离线SDK 3.7.6+ 版本支持

### 需要拷贝的文件

**需要引入工程的aar文件**

|路径|文件|
| :-------: | :-------: |
| SDK\libs | utsplugin-release.aar|

**在app级的build.gradle配置**

```
dependencies {
    implementation "androidx.core:core-ktx:1.6.0"
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.6.0"
    implementation "org.jetbrains.kotlin:kotlin-reflect:1.6.0"
    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.8"
    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.8"
    implementation "com.airbnb.android:lottie:3.4.0"
}
```