### 框架说明

离线打包在生成时无法确定用户具体采用的Vue版本及是否是自定义基座，为减少集成难度，故将所有框架都包含在库中。
- uni-jsframework.js: vue2项目正式包使用
- uni-jsframework-dev.js: vue2项目自定义基座包使用
- uni-jsframework-vue3: vue3项目正式包使用
- uni-jsframeowrk-vue3-dev.js: vue3项目自定义基座包使用

### 屏蔽不需要的框架

**注意：生成自定义基座的时候需要去掉下述配置**

#### 确定Vue版本

打开uni-app项目根目录下的manifest.json文件，点击“基础配置”，查看“Vue版本选择”

#### 排除框架

如果生成正式包时需要去除不需要的框架，可参考如下配置

- 如果Vue版本为`2`
	
	需要在Android离线打包项目目录下的build.gradle的Android节点下添加如下内容
	```
	    applicationVariants.all { variant ->
        variant.mergeAssets.doLast {
            delete(fileTree(dir: variant.mergeAssets.outputDir, includes: ['*dev.js','*vue3.js']))
        }
    }
	```
- 如果Vue版本为`3`
	
	需要在Android离线打包项目目录下的build.gradle下的Android节点下添加如下内容
	```
	    applicationVariants.all { variant ->
        variant.mergeAssets.doLast {
            delete(fileTree(dir: variant.mergeAssets.outputDir, includes: ['*dev.js','uni-jsframework.js']))
        }
    }
	```