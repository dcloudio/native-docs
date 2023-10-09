## Q: 有时安装应用之后，发现项目资源没更新

A: 可能是control.xml 文件配置了syncDebug="true"导致的，需要改成false或者删除这个配置

## Q: 更新SDK后编译报'Could not find or use auto-linked library 'swiftXXX''的错误

A: 可能是工程为纯OC的项目，部分SDK更新后需要swift环境导致的，主工程添加swift环境即可解决(新建一个swift文件后，根据xcode提示操作即可)

## Q: 编译报错'Building for iOS, but the linked and embedded framework 'xxx.framework' was built for iOS + iOS Simulator.'

A: 问题原因是依赖库中有模拟器+真机多架构的二进制文件。 Xcode 12.3 起，Apple 不建议在一个.framework 文件中绑定多平台的库，建议使用.xcframework 文件替代。解决方式是在 Xcode 中，进入 TARGETS > Project Name > Build Settings > Build Options 菜单，将 Validate Workspace 设置为 Yes。

## Q: 升级Xcode15后编译报错，提示文件重复添加

A: Build Settings -> Other Linker Flags 加入 -ld64。