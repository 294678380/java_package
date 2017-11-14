const fs = require("fs");
/*
    @param d{String} use file path
    @return require file exports objects
*/
function requireFile(d){
    return require(d);
}
/*
    @param paths{String} usepath
    @param file{String} files type
    @return obj{Object} require objects
*/
function requireDirs(paths,file){
    let dirs = fs.readdirSync(paths);
    let obj={};
    for(let i=0,dir;dir=dirs[i++];){
        let rex = new RegExp('\.'+file+'$',"g");
        if(rex.test(dir)){
            let name = dir.split(".")[0];
            obj[name] = require(paths+dir);
        }
    }
    return obj;
}
/*
    @param paths{String} usepath
    @param file{String} files type
*/
module.exports = function(paths,file,isAfile=true){
    let m;
    if(isAfile){
        m = requireFile(paths+"."+file);
    }else{
        m = requireDirs(paths,file);
    }
    return m;
}