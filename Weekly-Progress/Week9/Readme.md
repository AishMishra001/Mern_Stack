## Standard Ways : 

All ts files in a folder named : src 
All js files in a folder named : dist or built

### how to do it ?

In the tsconfig.json file :  

make : "rootDir" : "./src"
       "outDir"  : "./dist"

Ideally we will only push the rootDir (src folder) to github and put the dist folder in .gitignore        

![NOTES](typescript1.png)
