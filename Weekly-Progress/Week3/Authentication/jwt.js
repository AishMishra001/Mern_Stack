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
console.log(token1);


// decoding : There's no need for jwt.encode() in this context because jwt.sign() already performs both encoding and signing of the JWT token . 

// But say you have the jwt token and you want to see users info that is possible if you go to the website "jwt.io" . Here if you put the jwt you will get the info .