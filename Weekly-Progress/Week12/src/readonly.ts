
interface user3  {
   name : string , 
   age : number
}

const user: user3 = {
   name : "aish" , 
   age : 23
}

user.name = "aman"          // as here even if user is a const typescript still allowing me to change user.name 

// to strictly inforce no change we user : readonly 


interface user4  {
   name : string , 
   age : number
}

const user2 : Readonly<user4> = {
   name : "harkirat" , 
   age : 36 
}

// user2.name = "kirat"   throwing error as it is readonly 