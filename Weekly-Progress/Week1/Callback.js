function sum(num1,num2,Fntocall){
     let result = num1+num2 ; 
     Fntocall(result);
}

function displayResult(data){
  console.log("Result of the sum is : "+ data); 
}

function displayResultPassive(data){
  console.log("Sum's result is : " + data);
}

// You are allowed to only call one funtion here 
// how can you show displayresult is it 


sum(3,7,displayResult);
// callback : passing function in function 


function calculateArthimatic(a,b, arthimaticFinalFunction){
   const result = arthimaticFinalFunction(a,b)
   return result ; 
}

function sum(a,b){
  return a+b ; 
}

let Result = calculateArthimatic(6,4,sum)
console.log(Result);
