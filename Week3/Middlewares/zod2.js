const z = require("zod");
const express = require("express"); 

const app = express();

function inputValidation(obj){
  const schema = z.object({
    gmail : z.string().email(),
    password : z.string().min(8),
  })
  const response = schema.safeParse(obj); 
  console.log(response);
}

// inputValidation({
//   gmail : "aishlunatic@gmail.com" ,
//   password : "65448",
// })

app.use(express.json());

app.post("/login",function(req,res){
  const response = inputValidation(req.body);
  if(!response.success){
      res.json({
        msg:"Your inputs are invalid",
      })
      return  ; 
  }
})

