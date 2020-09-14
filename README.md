# react-init 从0搭建react热更新框架



本文参考了如下内容，搭建了基本的react应用框架：

[如何从零开始创建React项目（三种方式）](https://www.jianshu.com/p/68e849768d8e)
[从零开始react项目构建](https://www.jianshu.com/p/ccdb52ac6a41)


# 步骤
##一、安装阶段

1、安装react依赖
主要安装的库react，react-dom

```
npm install react react-dom
```


| 库  | 主要功能 |
| ----   | :----: |
| react  | [官网](https://react.docschina.org/docs/react-api.html) |
| react-dom  | [官网](https://react.docschina.org/docs/react-dom.html) |

2、支持动态热更新
安装webpack、webpack-cli、html-loader、html-webpack-plugin

```
npm install webpack webpack-cli html-loader html-webpack-plugin --save-dev
```

3、安装babel全家桶

Babel 是一个 JavaScript 编译器，可以支持各类语法；

```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
```




 
