// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs') ; 

const filePath = 'test.txt'

fs.readFile(filePath , 'utf-8' , (err,data)=>{
  if(err){
    console.log(err) ; 
    return ; 
  }
 
  const newData = data.replace(/\s+/g, ' ') ; 

  fs.writeFile(filePath , newData , (err)=>{
    if(err){
      console.log(err) ; 
      return ; 
    }
    console.log('File cleaned successfully') ; 
  }) ; 

})