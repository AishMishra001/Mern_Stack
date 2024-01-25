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