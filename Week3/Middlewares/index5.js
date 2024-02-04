// Consider an amusment park example which have rides : 

const express = require("express");

const app = express(); 

function isOldEnough(age){
  if(age>=14){
    return true 
  }
  else{
    return false
  }
}

function isOldEnoughMiddleware(req,res,next){
  if(age>=14){
    next();
  }
  else{
    res.status(411).json({
      msg:"Sorry you are not old Enough"
    })
  }

}

app.use(isOldEnoughMiddleware)

app.get("/ride1",(req,res)=>{
  

    res.json({
      msg:"you have successfully rided ride 1"
  

    })

  
  }
)

app.listen(3000);