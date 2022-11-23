## Q: 有时安装应用之后，发现项目资源没更新
## Q: Sometimes after installing the application, it is found that the project resources have not been updated

A: 可能是control.xml 文件配置了syncDebug="true"导致的，需要改成false或者删除这个配置
A: It may be caused by the configuration of syncDebug="true" in the control.xml file, which needs to be changed to false or deleted.
