// giving type to a function taken as input

function runAfter1sec(fn : ()=>void){
  setTimeout(fn, 1000);
}

runAfter1sec(()=>{
  console.log("Hello World");
})

const something = (name) => `Hello, ${name}!`;