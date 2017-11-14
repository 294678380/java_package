let java_package = require("../index");
let coms = java_package(__dirname)("package::com.*");

var expect = require('chai').expect;

describe("/index.js",function(){//
    it(`
        this function is entrance,
        it's accept 1 parameters
        NO.1's dn it's seted your working directory
    `,function(){
        expect(java_package(__dirname)).to.be.a("function");
    });
    it(`
        describe inited callback a function.
        param No'1 [dir] type's String describe your directory,
              hypothesis your dn is a file you obtain this file.
              just like "package::com.test".
              your dn is a directory you obtain is all files.
        param No'2 [file] you need used files type it's default value is 'js'.
    `,function(){
        expect(java_package(__dirname)("package::com.test")).to.include.keys('a');
    })
    it(`
        if your param No'1 is all files,
        your deliver is all files,
        just like "package::com.*"
    `,function(){
        expect(java_package(__dirname)("package::com.*")).to.deep.equal({dir:{b:2},test:{a:1}});
    })
});
