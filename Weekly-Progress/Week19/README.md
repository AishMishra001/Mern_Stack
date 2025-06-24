## Nextjs for Backend 

1. So if for page.tsx as some awaits and you want to show the loading in the nextjs way , you will use : loading.tsx 

In the same folder create a file : loading.tsx ..now if server is slow and the request is taking time then it will fall to loading.tsx 

2. To know about : export default and just export 
          export default : import User from './user' 
          export : import {GET} from './api/v1/user'