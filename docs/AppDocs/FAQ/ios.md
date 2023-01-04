## Q: 有时安装应用之后，发现项目资源没更新

A: 可能是control.xml 文件配置了syncDebug="true"导致的，需要改成false或者删除这个配置

## Q: 更新SDK后编译报'Could not find or use auto-linked library 'swiftXXX''的错误

A: 可能是工程为纯OC的项目，部分SDK更新后需要swift环境导致的，主工程添加swift环境即可解决(新建一个swift文件后，根据xcode提示操作即可)
