interface User {
  name : string , 
  age : number 
}

function sumOfNum(user1 : User , user2 : User){
  return user1.age + user2.age 
}

const result = sumOfNum({ name : "aish" , age : 23 } , { name : "aman" , age : 32}) ; 

console.log(result) ; 