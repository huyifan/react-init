# react-init 从0搭建react热更新框架



本文参考了如下内容，搭建了基本的react应用框架：

[如何从零开始创建React项目（三种方式）](https://www.jianshu.com/p/68e849768d8e)
[从零开始react项目构建](https://www.jianshu.com/p/ccdb52ac6a41)

# 分支介绍

| 分支  | 内容 |
| ----   | :---- |
| master  | 使用webpack搭建react |
|antd  | 在master的基础上，引入antd框架 |
|router  | 在antd的基础上，引入路由相关配置 |
|redux  | 在上分支的基础上，引入redux相关配置 |



router

# 内容
##一、webpack

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

4、配置less

安装必要依赖
```
npm install less-loader css-loader style-loader less --save-dev
```

在webpack里增加对应的loader
```
 {
      test: /\.less$/,
      use: [
              'style-loader',
              'css-loader',
              'less-loader'
            ],          

 }

```
## 二、antd
 
参考[antd文档](https://ant.design/docs/react/introduce-cn),引入antd





 
