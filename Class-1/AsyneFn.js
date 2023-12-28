// js.ReadFile : It is a asynchronous functions which allows you to read a file  

const fs = require('fs');

fs.readFile('a.txt','utf-8',function(err,data){
  console.log(data);
})