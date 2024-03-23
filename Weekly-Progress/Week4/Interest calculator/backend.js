/*
CORS : Cross origin resourse sharing 
To resolve this issue, I need to enable CORS (Cross-Origin Resource Sharing) on my backend server. CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

I can enable CORS in your Express.js backend by using the cors middleware.
*/


const express = require("express")
const app = express(); 
const cors = require('cors')

app.use(cors());


app.get("/simpleInterest", function(req,res){
  let p = req.query.p ; 
  let r = req.query.r ; 
  let t = req.query.t ; 

  let result = p*r*t ; 
  res.send(result.toString()); 

})

app.listen(3000); 
