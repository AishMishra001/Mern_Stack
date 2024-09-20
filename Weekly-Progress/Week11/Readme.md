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