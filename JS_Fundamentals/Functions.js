// function statement or expressionn 

function a(){
  console.log("called a") ; 
}

// function expression 

const b = function (){
  console.log("function assign to a varible") ; 
}

// anonymous function 

// function(){
  
// }

// The above way of declaring a function will throw as error because function statement must have a name 

// Named function expression 

// const c = function Name(){
//     console.log("named function")
// }

//  Name()  ---> throw a reference error as it is assiged to a variablet so it can't be called like this    
// console.log(c) ; 


// First class function 

var e = function (params){
  console.log(params) ;
}

e(function(){

}) ; 

// the ability of function to be used as values ( also called first class citizens )