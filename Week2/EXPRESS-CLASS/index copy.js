// Express in not a default library of node 

// const express = require('express')

// const app = express();

function SumOfNumbers(a,b){
   let sum = a + b 
  return sum ; 
}

console.log(SumOfNumbers(3,5));
// app.get("/", function(req,res){
//    const a = req.query.a ;
//    const b = req.query.b ; 
//    const ans = SumOfNumbers(a,b);
//   res.send('Hy bitch your ans is '+ ans);
// })


// app.listen(3000); 


// To hit this go to your brower and search : localhost:3000/?a=3&b=7 
// Output should be : Hy bitch your ans is 37