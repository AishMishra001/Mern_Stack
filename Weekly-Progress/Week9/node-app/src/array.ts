function MaxNum(arr : number[]){
   let Max = 0 ; 
    for(let i=0 ; i<arr.length ; i++){
      if(arr[i]>Max){
        Max = arr[i];
      }
    }
    return Max ; 
}

const result = MaxNum([1,2,3]); 
console.log(result) ; 


// ........................................filter above 18 is Valid .......................................................................


interface User {
  name : string , 
  age : number 
}

function isValid(users : User[]){
    return users.filter(x=>x.age>=18)
}


console.log(isValid([{
  name : "Aman" ,
  age : 20
},
{
  name : "Amit" ,
  age : 17
}]))

