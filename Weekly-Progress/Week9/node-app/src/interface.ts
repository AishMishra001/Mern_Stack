interface User{
  name:string ,
  age:number,
  email?:string   // optional 
}


function isLegal1(user : User
){
  if(user.age>=18){
    return true;
  }
  else{
    return false; 
  }
}

function Greed(user : User){
  console.log("good morning" + user.name);
}

const user ={
  name: "John",
  email : "aishludafa@gmail.com" , 
  age: 20
}