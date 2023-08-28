# How to install facebook/lexical in custom repository

- 如何根据任意一个github仓库的子路径进行npm install的操作
- 如何使得[facebook/lexical](https://github.com/facebook/lexical)一整个打包的仓库变成拆分打包
- 如何自定义任意一个[facebook/lexical](https://github.com/facebook/lexical)的子仓库且只需要import自己自定义的仓库
在这篇文章中你可以解决以上的问题
# 前言
[facebook/lexical](https://github.com/facebook/lexical)是一个强大的富文本编辑器框架，但是仍然处于一个发展中的阶段，这个时候就很需要我们自定义源代码，但这个