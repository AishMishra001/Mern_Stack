// js.ReadFile : It is a asynchronous functions which allows you to read a file  

const fs = require('fs');

fs.readFile("b.txt",'utf-8',function(err,data){
  
    console.log(data);
  
});

console.log('hello 2');

// takes a long time 
let a = 0 ; 
for(let i = 0 ; i<100000000 ; i++){
  a++;
}

console.log('hello 3');