// PROMISES : A syntictical way to write functions which have callback as a parameter and also Promise is a class

const fs = require('fs');
// Creating your own Asynechromous function : 
function kiratsReadFile(){
  return new Promise(function(resolve){
    fs.readFile('b.txt','utf-8',function(err,data){
      resolve(data);
    });
  })
}

//callback function to call 
function onDone(data){
  console.log(data);
}

kiratsReadFile().then(onDone);



let d = new Promise(function(whatever){

});

console.log(d);