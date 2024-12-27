interface User1  {
   id : number ,        // can't change 
   age : number , 
   name : string , 
   email : string ,     // can't change
   password : number     
}

//  The Pick utility type is part of TypeScript's mapped types, which enable you to create new types based on the keys of an existing type

type updatingParams = Pick<User1 , "age" | "name" | "password" >

// The Partial utility type in TypeScript is used to create a new type by making all properties of an existing type optional.

type updateOptionalParams = Partial<updatingParams>


function updateUser(updateProp : updateOptionalParams ){

}

// As now the params are optional give all three of them or none will still leads to no typescript errors 

updateUser({age : 23 , name : "aish" , password : 23424 })
updateUser({age : 23 , name : "aish"  })
updateUser({age : 23 })
updateUser({})