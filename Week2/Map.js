//  without map() to transform an array [1,2,3,4,5] ==> [2,4,6,8,10]

// const arr=[1,2,3,4,5];

// for(let i=0 ; i<arr.length ; i++){
//   arr[i]=arr[i]*2; 

// }
     
// console.log(arr);

// With map logic : syntax say arr=[] then arr.map(function)   function --> it is the transform logic for indexes 
// Map is a higher-order function used in js to transform a array and we have to get use to it whenever a array transformation is required 

const arr = [1,2,3,4,5];

function transform(i){
  return i*2 ; 
}

let  arr1 = arr.map(transform);

console.log(arr1); 

// also we can directly put the function inside the map rather than defining it at a point and than calling it 

// here is how : 

// let arr1 = arr.map((i)=>{
//   return i*2 ; 
// });

// console.log(arr1); 


// Notice that here i have used arrow function 