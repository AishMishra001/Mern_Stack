import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()  ; 

async function GetUser(username : string){
   const res = await prisma.user.findFirst({
    where: {username : username} ,
  
       
    })

    console.log(res) ; 
}


GetUser("aishlunatic001@gmail.com") ; 



// note that when we are trying to find or get the users info we only used "where" --> to give the username 