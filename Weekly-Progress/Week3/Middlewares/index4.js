// ZOD IN ACTION 

// What is Zod ? 
// Zod allows you to define schemas for your data and then use these schemas to validate and parse incoming data.


const express = require("express"); 
const zod = require("zod"); 

// Importing express and zod above 
const app = express(); 

const schema = zod.array(zod.number());

// {
//   email : string => email 
//   password : atleast 8 letters 
//   country : "IN" , "US"
// }

const schema1 = zod.object({
  email : zod.string(),
  password : zod.string(),
  country : z.lateral("IN").or(z.lateral("US")),
  kidneys : z.array(z.number())
})



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
