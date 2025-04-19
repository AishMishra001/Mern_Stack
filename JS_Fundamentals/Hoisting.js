// In case of let 

console.log(a) ; // undefined ( hoisting but return undefined when tried to access )

var a = 2 ; 

// In case of let / const 

console.log(b) ; // Refrence error ( hoisted but can't access before decleration )

let b = 2 ; 


console.log(c) ; // Refrence error ( hoisted but can't access before decleration )

const c = 2 ; 

// In case of functions 

greet() ; // hoisted and can access before decleration 

function greet(){
  console.log("Hi , how are u ?") ; 
}

// In case of arrow functions 

greet2() ; // 

var greet2 = () =>{
  console.log("hi sir") ;  // typeError ( greet2 is not a function )
}