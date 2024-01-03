// Express.js : It is a node.js framework or basically a library which allows you to make http servers  



const express = require("express")   // Importing express from the express library 

function SumofNumbers(a,b){
  let sum = a +b ; 
  console.log(sum);
}

const app = express();

app.get("/", function(req , res){
const a = req.query.a ; 
const b = req.query.b ; 
const ans = SumofNumbers(a,b); 
res.send(ans);
})

app.listen(3001);