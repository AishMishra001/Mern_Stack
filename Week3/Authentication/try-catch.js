// try - catch is a way to avoid the js control to stop when happends to thrown an error 
// So to avoid the js control to stop we can put the error throw code in the try-catch syntax to that the furthur execution do not stop 


try{
   let a ; 
   console.log(a.length);
   console.log("this should not run");
}
catch{
   console.log("so error has come hence it is log");
}

console.log('even it error comes because we are using try-catch this is still logged');