// MIDDLEWARES IN ACTION :-   

const express = require("express"); 


const app = express(); 
// Defining Middlewares(just another function):

function userMiddleware(req,res,next){
  username = req.headers.username; 
  password = req.headers.password; 
  if(username !="Aish" && password !="pass"){
    res.status(403).json({
      msg: "Incorrect inputs", 
    });
  }
  else{
    next(); 
  }
}; 

function kidneyMiddleware(req,res,next){
  kidneyId = req.query.kidneyId; 
  if(kidneyId != 1 && kidneyId !=2){
    res.status(403).json({
      msg: "Incorrect inputs", 
    });
  }
  else{
    next();
  }
}; 

// Using the Middleware : 

app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
  // Do some health logic here 
  res.send("You are Healthy"); 
});

app.get("/kidney-checkup",userMiddleware,kidneyMiddleware,function(req,res){
  //Do something kidney logic here  
  res.send("Your kidney is healthy"); 
})


app.listen(3000); 