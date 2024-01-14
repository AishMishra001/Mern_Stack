// ZOD IN ACTION 

// What is Zod ? 
// Zod allows you to define schemas for your data and then use these schemas to validate and parse incoming data.


const express = require("express"); 
const zod = require("zod"); 

// Importing express and zod above 
const app = express(); 

const schema = zod.array(zod.number());

app.use(express.json()); 

app.post("/health-checkup", function(req,res){
  const kidneys = req.body.kidneys ; 
  const response = schema.safeParse(kidneys) ; 
  if(!response.success){
    res.status(411).json({
      msg:"Input is Invalid"
    })
  }
  else{
    res.send({
      response
    })
 }
});

app.listen(3000);
