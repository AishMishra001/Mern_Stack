// async/await syntax to get rid of .then syntax of promises 


function AishSetTimeout(duration){
  return new Promise(function(resolve){
    setTimeout(()=>{
       console.log('done');
       resolve();
    },duration)
  })
}


async function main(){
  let value = await AishSetTimeout(3000);
  console.log('yoooo'); // wait for the function to return promise 
}

main();
console.log('will print 1st')