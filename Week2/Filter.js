// Filter is basically a higher-order function which allows us to filter out whatever we want to filter out from an array 



// logic without filter to filter only then even number from an array = [1,2,3,4,5]; 


// let arr = [1,2,3,4,5];
// let newArr = [];
// for(let i = 0 ; i<arr.length ; i++){
//   if(arr[i]%2===0){
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

let arr = [1,2,3,4,5];

function filterLogic(n){
  if(n%2===0){
    return true ; 
  } else{
    return false ; 
  }
}

let arr1 = arr.filter(filterLogic);
console.log(arr1)