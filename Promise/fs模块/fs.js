const fs = require('fs');
fs.readFile('./ fs模块\content.txt'),(err,data) => { 
    if(err)
    // 出错则抛出错误
        throw err;
    console.log(data.toString()) ;
 }
