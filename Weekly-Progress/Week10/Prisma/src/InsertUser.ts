import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
  const res = await prisma.user.create({
   data : {
    username ,
    password , 
    firstname , 
    lastname 
   }
  })

  console.log(res) ; 
}


insertUser("aishlunatic003@gmail.com","342344233545","Ronak","Mishra") ; 