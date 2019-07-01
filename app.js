// 引入express模块
const express = require('express')
const fs = require('fs')

// 引入路由模块
const router = require('./userRouter')

const ejs = require('ejs')

// 创建应用
let app = express();


// 设置默认模板引擎
app.set('view engine', 'ejs')
app.set('views', 'views')

// 托管静态资源
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

// 监听端口
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})

// 添加路由配置.引入路由
app.use(router)

