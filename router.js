//路由模块，只处理请求路径
//引入模块
const fs = require('fs')
const urlModel = require('url')
const path = require('path')

// 引入模块控制器
 let Ctrl =require('./controllers')
 //封装一个路由方法
 function router(req,res) {
    let method = req.method;
    let url = req.url;
    let pathname = urlModel.parse(url,true).pathname;
    let query = urlModel.parse(url,true).query; 
    res.query = query.id;
    
    res.pathname = pathname;
    //判断输入的地址
    //抽离出路由
    if(method == 'GET'&& (url =='/'||url =='/favicon.ico'||url == '/index'|| url == '/index.html')){
        // 读取文件
        // fs.readFile(path.join(__dirname,'./views/index.html'),'utf-8',(err,data)=>{
        //     //无法读取文件时报错
        //     if(err) return console.log(err.message);
        //     //不出错，正常读出文件
        //     res.end(data);
        // });
        Ctrl.showIndexPage(req,res);
    }
    // 判断输入的地址
    if(method == 'GET' && url == '/add.html') {
        Ctrl.showAddPage(req,res);
    }
    // 判断地址
    if(method == 'GET' && url == '/edit.html') {
        Ctrl.showEditPage(req,res);
    }
    //判断地址
    if(method == 'GET' && url.startsWith('/info.html')) {
        Ctrl.showInfoPage(req,res);
    } 
    if(method == 'GET' && url == '/node_modules/jquery/dist/jquery.js') {
        Ctrl.addJquery(req,res);
    }
    if(method == 'GET'&&url =="/node_modules/bootstrap/dist/css/bootstrap.css"){
        Ctrl.addBootstrap(req,res)
    } 
 }
 module.exports = router;