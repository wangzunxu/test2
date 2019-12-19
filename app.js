//创建服务器模块
// 读取文件模块
//路径模块
const http = require('http')
const fs =require('fs');
const path =require('path')
const template = require('art-template')
let router = require('./router')
//创建服务器
let app =http.createServer();
//引入模块
let bindRender = require('./bindRender.js')
//监听端口
app.listen(3003,()=>{
    console.log('server is running at http://127.0.0.1:3003');
})
// 注册监听用户请求的事件
app.on('request',(req,res)=>{
    bindRender(req,res);
    // router(req,res);
    // else {
    //     res.end('404');
    // }
    router(req,res);
})
