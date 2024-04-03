## React+TS前端项目模板

React18、Ts、Vite、react-use、recoil、antd等技术

### 目录

* [1. 安装、启动、打包](#1-安装、启动、打包)
* [2. 文件目录结构](#2-文件目录结构)
* [3. 文件详细介绍](#3-文件详细介绍)
    * [3-1. index](#3-1-index)
    * [3-2. viteConfig](#3-2-viteConfig)
    * [3-3. apiPy](#3-3-apiPy)
    * [3-4. src](#3-4-src)
        * [3-4-1. index](#3-4-1-index)
        * [3-4-2. assets](#3-4-2-assets)
        * [3-4-3. pages](#3-4-3-pages)
        * [3-4-4. router](#3-4-4-router)
        * [3-4-5. state](#3-4-5-state)
        * [3-4-6. styles](#3-4-6-styles)
        * [3-4-7. untils](#3-4-7-untils)
        * [3-4-8. api](#3-4-8-api)
            * [3-4-8-1. axios](#3-4-8-1-axios)
            * [3-4-8-2. index](#3-4-8-2-index)
        * [3-4-9. common](#3-4-9-common)
        * [3-4-10. components](#3-4-10-components)
    
### 1. 安装、启动、打包

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


### 2. 文件目录结构
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

### 3. 文件详细介绍

#### 3-1. index

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

#### 3-2. viteConfig

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

#### 3-3. apiPy

本地启动mock数据接口的服务

#### 3-4. src

##### 3-4-1. index

```JavaScript
import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';
import 'antd/dist/reset.css';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <Router />
    </RecoilRoot>,
);
```

##### 3-4-2. assets

fonts：字体； image：图片； json：静态数据； svg：svg的dom代码

##### 3-4-3. pages

存放前端页面的文件

##### 3-4-4. router

配置页面路由
```JavaScript
import './Router.scss';
import './reset.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/page1',
            element: <Page1 />,
        },
        {
            path: '/page2',
            element: <Page2 />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Router;
```

##### 3-4-5. state

状态管理数据
```JavaScript
import { atom } from 'recoil';

export const currentProjectIdAtom = atom<string | null>({
    key: 'currentProjectIdAtom',
    default: null,
});
```

##### 3-4-6. styles

公共样式

##### 3-4-7. untils

公共工具

##### 3-4-8. api

###### 3-4-8-1. axios

封装axios
```JavaScript
import { message } from 'antd';
import axios from 'axios';

axios.interceptors.request.use(config => {
    if (config.method === 'get') {
        if (!config.params) {
            config.params = {};
        }
        config.params._t = Date.now();
    }
    return config;
});

axios.interceptors.response.use(
    response => {
        const { code, msg } = response.data;
        if (code !== 200 && code !== 0) {
            message.error(`code：${msg}`);
            return Promise.reject(msg);
        }
        return response.data; /*  */
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    },
);
```

###### 3-4-8-2. index

前端请求接口函数配置
```JavaScript
import './axios';
import axios from 'axios';

interface Response<T> {
    code: 200 | 500;
    msg: string;
    data: T;
}

export interface Ratio {
    [key: string]: number;
}

export interface DevDataInfo {
    name: string,
    sex: string,
    age: number,
}

export interface OtherInfo {
    otherProps: Ratio[];
}

export const api = {
    // 本地接口假数据测试
    getdevData:async (url?: string): Promise<Response<DevDataInfo>> => {
        const { data } = await axios.get('/dev-api/code', { params: { url } });
        return data;
    },

    // 调接口方法测试
    getTestData:async (url: string): Promise<{}> => {
        const { data } = await axios.get('/api/v2/nav', { params: { url } });
        return data;
    },
    postTestData: async (params: any): Promise<{}> => {
        const { data } = await axios.post('/mcp/pc/pcsearch', params);
        return data;
    },
};

```

##### 3-4-9. common

存放公共的各类静态自定义变量
constants.ts：
```JavaScript
const fontSize = window.screen.width >= 3840 ? 24 : 12;
export const labelTextStyle = {
    fontSize,
    fontFamily: 'PingFang SC',
    color: '#CAC056',
    lineHeight: 35,
};
```

##### 3-4-10. components

存放前端公共组件，可以是ui组件、也可以是业务组件。
Content.tsx：
```JavaScript
import React, { memo } from "react";
import "../styles/content.scss";

interface Props {
    children?: React.ReactNode;
}
const Content: React.FC<Props> = memo((props) => {
    return <div className='content'>{props.children}</div>;
});
export default Content;
```

