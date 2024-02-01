# CocoaPods常见问题

## 1 安装 CocoaPods 的问题
执行 `pod --version` 检查是否有安装 CocoaPods 并查看版本号。
> 若出现 `command not found: pods` 则表示尚未安装 CocoaPods
打开终端 Terminal（ ⌘ + 空格， 输入 Terminal 以打开终端 ），执行：  
```
sudo gem install cocoapods
```

更多详情请参阅 [CocoaPods入门](https://guides.cocoapods.org/using/getting-started.html#getting-started)  
若因网络问题无法下载安装 CocoaPods，可考虑使用 Ruby Gems 镜像源：  
* 清华 Gems 镜像站: https://mirror.tuna.tsinghua.edu.cn/help/rubygems/
* Ruby China 镜像站: https://gems.ruby-china.com

## 2 连接不上 trunk CDN 的问题   
CocoaPods 自 1.8 版本开始默认使用 trunk CDN (https://cdn.cocoapods.org/) 作为 spec 的源，本意是非常好的，避免了需要本地 clone 一份庞大的 Specs 仓库导致每次 update 都要全量更新的问题。然而国内有可能无法访问这个 trunk CDN。

常见问题：

1. `pod install` 时报错 `CDN: trunk URL couldn't be downloaded`  

2. `pod repo update` 时报错 `CDN: trunk Repo update failed`  

以下是几种解决方案。  

### 方案一：使用代理
不管是使用旧版 CocoaPods 还是使用镜像源，都不是最优解，为了充分使用 CocoaPods 的特性，最推荐的还是使用代理来解决无法连接 trunk CDN 的问题。  

### 方案二：手动切换使用官方 Git 源 / 镜像源
> 不推荐此方案，比较繁琐
1. 检查当前使用的源

先执行 pod repo list 查看本机的源有哪些，如果存在一个 master 源 (URL: https://github.com/CocoaPods/Specs.git) 以及一个 trunk 源 (URL: https://cdn.cocoapods.org/)，则无需操作下面的第二步，可直接执行 pod repo remove trunk 删除 trunk CDN 源。

若使用 1.9.1 或以上版本，应该只存在一个 trunk CDN 源，此时需要手动添加 Git 源

2. 添加源

添加 [官方 CocoaPods Git 源](https://github.com/CocoaPods/Specs.git)

执行 `pod repo add cocoapods https://github.com/CocoaPods/Specs.git`

添加 [清华 CocoaPods 镜像源](https://mirror.tuna.tsinghua.edu.cn/help/CocoaPods/)

执行 `pod repo add tuna https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git`

3. 执行 `pod repo update --verbose`

4. 在 iOS 项目根目录下的 `Podfile` 文件里指定源

若找不到 `Podfile`，请先 cd 进 iOS 项目的根目录，执行 `pod init`

往 `Podfile` 的第一行添加一句 `source https://xxxxx.git` （其中的 URL 为上一步添加的源的 URL）

例：使用清华源
```
source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'

target 'MyProject' do
  use_frameworks!
end
```
如果没有在 Podfile 里指定 source 的话，1.8 版本以上的 CocoaPods 会自动重新添加并使用 trunk CDN 源，因此每个项目的 Podfile 都需要显式指定 source，非常麻烦。

## 3 `pod install` 无法找到项目的问题

执行 `pod install` 时可能报如下错误

> `Unable to find a specification for "XXXXXX"`

> 或者

> `CocoaPods could not find compatible versions for pod "XXXXXX"`

以下是几种解决方案。

### 方案一：更新索引
1. 执行 `pod repo update --verbose` 更新索引

2. 然后执行 `pod update XXXXXX` 更新库（ `XXXXXX` 为提示里报错的具体库的名称）

3. 最后执行 `pod install` 重新安装

### 方案二：删除索引文件，重新加载
1. 执行 `pod setup`

2. 然后执行 `rm ~/Library/Caches/CocoaPods/search_index.json` 删除索引文件

3. 最后执行 `pod install` 重新安装（可能需要较长时间）