// Anonymous function : funcions which do not required a name 





function sumOfSomething(a,b,fn){
  let val1 = fn(a);
  let val2 = fn(b);
  let sum = val1 + val2; 
  return sum ; 

}

console.log(sumOfSomething(2,3,function square(n){
  return n*n ; 
}));
console.log(sumOfSomething(2,3,function cube(n){
  return n*n*n ; 
}));