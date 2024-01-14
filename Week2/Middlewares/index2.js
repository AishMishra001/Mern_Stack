const express = require("express");

const app = express();


let noofRequest = 0 ; 

function calculateRequest(req,res,next){
  noofRequest++; 
  console.log(noofRequest);
  next();
}

app.use(calculateRequest); // by using app.use() the middleware function inside it will be added to every next route as a middleware
app.use(express.json())  // to will allow you to get the body of the POST method  and to log  this we use console.log(req.body)

app.post("/health-checkup",function(req,res){
  // some logic 
  res.json({
    msg : "hi there"
  })
});
 

app.listen(3000); 