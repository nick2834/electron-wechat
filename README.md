# electron 微信

### 项目说明

基于 electron-vue + element ui 仿微信客户端

### 项目截图

<!-- ![screenshot1](./screenshot/screenshot-01.png)
![screenshot2](./screenshot/screenshot-02.png)
![screenshot3](./screenshot/screenshot-03.png)
![screenshot4](./screenshot/screenshot-04.png) -->

### 项目目录

```
src
├── index.ejs
├── main
│   ├── module(待测试)
│   │   ├── login.js
│   │   ├── mainWindow.js
│   │   ├── webView.js
│   ├── index.dev.js
│   └── index.js
└── rendererd
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── chatInput
│   │   ├── chatList
│   │   ├── message
│   │   ├── search
│   │   ├── sidebar
│   ├── config
│   │   └── http.js
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── service
│   │   ├── api.js
│   │   └── http.js
│   │   └── index.js
│   └── store
│        ├── index.js
static
├── emogi
├── images
```

### 构建应用

``` bash
# 安装依赖
yarn / npm install

# 热加载服务运行在 localhost: 9080
yarn run dev / npm run dev

# 打包项目
yarn run build:mac/yarn run build:win npm run build
```

### 赞助我

如果觉得这些内容不错，请我喝杯咖啡吧。

<!-- ![pay](./screenshot/pay.png) -->
