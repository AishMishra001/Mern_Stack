// Generating jwt token : 

const jwt = require("jsonwebtoken");

// generating , verifying , decoding 


const value ={
  name: "Aish Mishra" , 
  accountnumber : 123123123  
}
// function to generate is .sign()
const token =  jwt.sign(value ,"secret"); 
console.log(token);

// this token has been generated using this secret , and hence this token can only be verified using this secret 
// this is your cheque book (in bank example) or token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWlzaCBNaXNocmEiLCJhY2NvdW50bnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwNjE5NDA3Nn0.wh_voOHzOBRTUfnCdf_Z4GNV23Nww3yy3jy9z4I2BCI

// Verifying : 

const token1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWlzaCBNaXNocmEiLCJhY2NvdW50bnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwNjE5NDA3Nn0.wh_voOHzOBRTUfnCdf_Z4GNV23Nww3yy3jy9z4I2BCI","secret");
console.log(token);