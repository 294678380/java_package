![](https://travis-ci.org/294678380/java_package.svg?branch=master) [![BCH compliance](https://bettercodehub.com/edge/badge/294678380/java_package?branch=master)](https://bettercodehub.com/)
# java_package
==============================================

* 类似java语言中的import导入包功能。<br/>
* 你可以一键导入某个文件夹下的所有js文件、json文件，</br>
* 它会根据文件名组合对象返回</br>
 
---------------
* 使用npm安装包
```shell
  npm install java_package --save
```
```javascript
  global.package = require("java_package")(__dirname); //传入工作目录
  
  package("package::com.test"); //表示引入工作目录下com下面的test.js文件
  
  package("package::com.*") //表示引入工作目录下com文件夹下的所有.js文件
  
  package("package::com.test","json"); //表示引入工作目录下com下面的test.json文件
```
[我的博客](http://www.cnblogs.com/ztfjs/) 

