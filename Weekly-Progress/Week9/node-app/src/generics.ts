function identity<T>(arg:T){
  return arg ; 
}

let output1 = identity<string>("myString") ; 
let output2 = identity<number>(3434) ; 

output1.toUpperCase() ; 


function getFirstElement<T>(arg:T[]){
  return arg[0] ;
}

const out1 = getFirstElement(["Aish","Mishra"]) ; 
const out2 = getFirstElement([1,2,3]) ; 
const out3 = getFirstElement([true,false]) ; 

// const out4 = getFirstElement<string>(["Aish","Mishra",1,2]) ;
  // Here at the place of "string" there can be interface or types 
out1.toUpperCase() ; 