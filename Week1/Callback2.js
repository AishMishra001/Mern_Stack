function square(n){
  return n*n ; 
}
function cube(n){
  return n*n*n ; 
}

function sumOfSomething(a,b,fn){
  let val1 = fn(a);
  let val2 = fn(b);
  let sum = val1 + val2; 
  return sum ; 

}

console.log(sumOfSomething(2,3,square));
console.log(sumOfSomething(2,3,cube));