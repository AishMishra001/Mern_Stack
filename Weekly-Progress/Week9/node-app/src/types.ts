// types and interfaces are very much similar but u can't impliment class by type but u can by interfaces 

type User1 = {
  name: string;
  email : string ; 
  age: number;
}

// Union : this or this 

type GreetArg = number | string 

function greet2(id:(number | string)){
  console.log(`hi ${id} , welcome`)
}

greet2(23) ; 
greet2("aish") ; 


// intersection : this and this 

type Manager = {
  name : string  , 
  age : number , 
  department : string
}

interface Employee1 {
  name : string , 
  startDate : Date
}

type TechLead = Manager & Employee1 ; 

const t : TechLead = {
  name : "Aish Mishra" , 
  age : 25 ,
  department : "IT" ,
  startDate : new Date()
}