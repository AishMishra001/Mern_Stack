function AishSetTimeout(duration){
  return new Promise(function(resolve){
    
      setTimeout(function(){
        console.log('Hello World');
        resolve();
      },duration)
    });
}

AishSetTimeout(3000).then(function (){
  console.log('promise resolved') // This will wait for promise to be resolved then run
})
.catch(function(error){
  console.log('Promise Rejected',error);
})

console.log('hi') // thread will move ahead before promise resolve and it is an sync function and print this 