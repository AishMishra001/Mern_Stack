import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient(); 

interface UpdateParams{
  firstname : string , 
  lastname : string  
}

async function UpdateUsers( username : string , {
  firstname , 
  lastname 
}: UpdateParams){
  const res = await prisma.user.update({
    where : { username : username } ,
    data : { firstname , lastname }
  })
  console.log(res) ; 
}

UpdateUsers("aishlunatic001@gmail.com",{ firstname : "Aish", lastname : "Lunatic"}) ; 