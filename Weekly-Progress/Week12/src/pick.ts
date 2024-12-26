interface User  {
   id : number ,        // can't change 
   age : number , 
   name : string , 
   email : string ,     // can't change
   password : number     
}

//  The Pick utility type is part of TypeScript's mapped types, which enable you to create new types based on the keys of an existing type

type updatingParams = Pick<User , "age" | "name" | "password" >


function updateUser(updateProp : updatingParams ){

}