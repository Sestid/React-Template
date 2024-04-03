## React+TS前端项目模板

React18、Ts、Vite、react-use、recoil、antd等技术

### 目录

- [1. 安装、启动、打包](#1-安装、启动、打包)
- [2. 文件目录结构](#2-文件目录结构)
- [3.文件详细介绍](#3-文件详细介绍)
    - [3.1 index.html](#index.html)
    - [3.2 vite.config.ts](#vite.config.ts)
    - [3.3 api.py](#api.py)
    - [3.4 src](#src)

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
```JavaScriptJavaScript
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

#### 3.文件详细介绍

##### 3.1 index.html

```JavaScript
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React项目初始化模板</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/index.tsx"></script>
    </body>
</html>
```

##### 3.2 vite.config.ts

target的值：填入后端地址ip

```JavaScript
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/dev-api': {
                target: 'http://127.0.0.1:8002/',
                changeOrigin: true,
            },
            '/api': {
                target: 'https://bbs.hupu.com/',
                changeOrigin: true,
            },
            '/mcp': {
                target: 'https://ug.baidu.com/',
                changeOrigin: true,
            },
        },
    },
    // 配置开发服务器中的预览功能、允许你在本地开发服务器中查看静态文件
    preview: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:4523/m1/2899312-0-default/',
                changeOrigin: true,
            },
        },
    },
});
```

##### 3.3 api.py

本地启动mock数据接口的服务

##### 3.4 src

