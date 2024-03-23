const express = require("express");

const app = express();

app.get("/health-checkup",function(req,res){
  const kidneyId = req.query.kidneyId; 
  const username = req.headers.username ; 
  const password = req.headers.password; 

  if(username!="Aish" || password!="Pass"){
    res.status(400).json({
      msg: "something is wrong with the inputs",
    })
    return ; 
  }
  if(kidneyId!=1 && kidneyId!=2){
    res.status(400).json({
      msg: "something is wrong with the inputs",
    })
  } 
  // do some kidney logic 
  res.json({
    msg : "Your kidney is fine!",
  })
  

})


app.listen(3000); 