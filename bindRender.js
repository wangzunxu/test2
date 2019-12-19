const path =require('path')
const template = require('art-template')
function bindRender(req,res){
    res.render = function(filename,obj) {
        let str =template(path.join(__dirname,'./views/'+filename+'.html'),obj)
        res.end(str);
    }
}
// 暴露方法给外部使用
module.exports=bindRender;