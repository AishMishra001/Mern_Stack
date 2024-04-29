// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs'); 

const content = "Shri Baake Bihari Laal ki ..Jai"

fs.writeFile('example.txt',content,(err)=>{
  if(err){
    console.log(err); 
    return; 
  }
  console.log('writing in a file is done')
}) ; 