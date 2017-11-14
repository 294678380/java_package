/*
    java_package for nodejs 
    like java's code packages.
    @author zhangtaifeng
    @email 294678380@qq.com
    @date 2017-11-13
*/
const packages = require("./lib/import_package");
module.exports = function(dn){
    let _fn = global.require;
    return function(dir,file="js"){
        let rex = /^package\:\:/;
        if(rex.test(dir)){
            return packages.init(dir.substring(9,dir.length),dn,file);
        }
        else{
            return _fn(dir);
        }
 
    }
};
