/*
    java_package for nodejs 
    [this file just use fs System's file]

    @author zhangtaifeng
    @email 294678380@qq.com
    @date 2017-11-13
*/
const readDir = require("./read");
let proto = module.exports = {}
/*
    import package
    @param package{String} like "com.test"
    @param dn{String} __dirname
*/
proto.init = function(package,dn,file){
    const dir_arr = package.split(".");
    let lastStr = dir_arr[dir_arr.length-1];
    let rex = /^[\\\/]$/;
    if(!rex.test(dn[dn.length-1])){
        dn+="\\";
    }
    dir_arr.forEach(function(value,index){
        if(index < dir_arr.length-1){
            dn+=(value+"\\");
        }
    });
    let m;
    if(lastStr != "*"){
        m=readDir(dn+lastStr,file,true);
    }else{
        m=readDir(dn,file,false);
    }
    return m;
    
}