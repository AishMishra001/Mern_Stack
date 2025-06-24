## Nextjs for Backend 

Slides : https://projects.100xdevs.com/tracks/nextjs-2/next-2-1

1. So if for page.tsx as some awaits and you want to show the loading in the nextjs way , you will use : loading.tsx 

In the same folder create a file : loading.tsx ..now if server is slow and the request is taking time then it will fall to loading.tsx 

2. To know about : export default and just export 
          export default : import User from './user' 
          export : import {GET} from './api/v1/user'

3. To create routes in nextjs name the file as : route.ts or route.js


## Database setup 

Get a postgreSQL db from neon.tech 

#### Prisma 

1. npm i prisma 
2. npx prisma init ( this will create the prisma/schema.prisma file where u will create your model )
3. .env : change the prisma url 
4. npx prisma migrate dev --name init schema ( it will migrate the db and the user table can now be seen )
5. npx prisma generate ( generates the client )
6. import prismaClient from @prisma/client 

const prismaClient = prismaClient() 

prismaClient.user.create({
  data : {
    username : data.username 
    password : data.password
  }
})