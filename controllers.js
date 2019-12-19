//处理方法模块
// 引入模块
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
let bindRender = require('./bindRender')
// let heroData = require('./modelData');
const template = require('art-template');

module.exports = {
    //显示首页
    showIndexPage(req,res) {
        fs.readFile(path.join(__dirname,'./hero.json'),'utf-8',(err,data)=>{
            if(err) return console.log(err.message);
            //接收的数据是字符串，转换为数组
            let heroArr =JSON.parse(data);
            // let str = template(path.join(__dirname,'./views/index.html'),{data:heroArr})
            // res.end(str);
            //抽离出模板模块
            res.render('index',{data:heroArr})
        })
    },
    // 显示添加页面
    showAddPage(req,res) {
        fs.readFile(path.join(__dirname,'./views/add.html'),'utf-8',(err,data)=>{
            //报错
            if(err) return console.log(err.message);
            //读取文件
            res.end(data);
        })
    },
    // 显示编辑页面
    showEditPage(req,res) {
        fs.readFile(path.join(__dirname,'./views/edit.html'),'utf-8',(err,data)=>{
            // 报错
            if(err) return console.log(err.message);
            // 读取
            res.end(data);
        })
    },
    // 显示详情页面
    showInfoPage(req,res) {
        // console.log(path.join(__dirname,'./views/info.html'));
        
        fs.readFile(path.join(__dirname,'./hero.json'),'utf-8',(err,data)=>{
            //报错
            // console.log(data);
            let arr = JSON.parse(data);
            let obj ={}
            arr.some((item)=>{
                if(res.query==item.id) {
                    obj=item;
                }
            })
            console.log(obj);
            
            if(err) return  console.log(err.message);
            let datat =template(path.join(__dirname,'./views/info.html'),obj)
            // 读取
            // console.log(path.join(__dirname,'./views/info.html'));
            
            // console.log(datat);
            
            res.end(datat);
        })
    },
    addJquery(req,res) {
        fs.readFile(path.join(__dirname,'./node_modules/jquery/dist/jquery.js'),'utf-8',(err,data)=>{
            if(err) return console.log(err.message);
            res.end(data);
            
        })
    },
    addBootstrap(req,res) {
        fs.readFile(path.join(__dirname,'./node_modules/bootstrap/dist/css/bootstrap.css'),'utf-8',(err,data)=>{
            //无法读取文件时报错
            if(err) return console.log(err.message);
            //不出错，正常读出文件
            res.end(data);
    })
    }
}