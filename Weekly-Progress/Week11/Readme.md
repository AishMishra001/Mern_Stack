## Serverless Backend 

The serverless backend is a cloud-based service that provides a scalable and secure environment for your application.

using Cloudflair to do it 

step 1 : For intializing the app : 

 javascript  `npm create cloudflare --my-app`



 To Deploy : 

 1. Run : `npx wrangler login`

( will say : successfully login in )  ---> if there is no error 

 2. Varify : `npx wrangler whoami`

 ( will tell details about your cloudflare account )

 3. Deploy : `npm run deploy`

 (which under the hook runs wrangler deploy)


 AWS : 

 commands : 

1. ssh -i CERTIFICATE_FILE ubuntu@PUBLIC_IP
2. chmod 700 kirat-class.pem ( give ssh permission if u get an error )
3. git clone GITHUB_REPO 
( explore the github repo little bit to confirm the repo u wanted ) 
4. Install node 
5. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash    ( node install )


To add a 8080 port we have to change the inbound rules  of the security group of the ec2 instance 


# How can u keep running a node js server even if you close your pc : 

command : 
```
npm i -g pm2    
```
 here  pm2 is a process manager for node js and g is global 

 the process manager will keep running the process even if u close the machine 

 then : 

 ```
 pm2 start index ( file_name )
 ```