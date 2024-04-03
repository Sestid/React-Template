## React+TS前端项目模板

React18、Ts、Vite、react-use、recoil、antd等技术

### 目录

- [1. 安装、启动、打包](#1-安装、启动、打包)
- [2. 文件目录结构](#2-文件目录结构)
- [3.文件详细介绍](#3-文件详细介绍)
    - [3.1. git 与 svn 的区别在哪里？](#1-git-与-svn-的区别在哪里)
    - [3.2. 经常使用的 git 命令？](#2-经常使用的-git-命令)

#### 1. 安装、启动、打包

# yarn 依赖
## 安装
    yarn

## 启动
    yarn start

## 打包
    yarn build

# npm 依赖
## 安装
    npm install

## 启动
    npm run start

## 打包
    npm run build


#### 2. 文件目录结构
```JavaScript
        index.html // 项目主html文件
        vite.config.ts // vite配置
        api.py // 本地启动mock数据接口的服务
        src
        ├── index.tsx // 最外层包的RecoilRoot 是状态管理库，类似redux
        ├── api 
        │   ├── axios.ts // axios.ts
        │   └── index.ts // 请求接口函数配置
        ├── assets // fonts：字体； image：图片； json：静态数据； svg：svg的dom代码
        ├── common
        │   └── constants.ts // 存放公共的各类静态自定义变量
        ├── components // 公共组件
        ├── pages // 存放前端页面的文件  
        ├── router // 配置页面路由  
        ├── state // 状态管理公共数据 
        ├── styles // 公共样式  
        └── untils // 公共工具
```
