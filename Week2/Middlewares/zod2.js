const z = require("zod");

function inputValidation(obj){
  const schema = z.object({
    gmail : z.string().email(),
    password : z.string().min(8),
  })
  const response = schema.safeParse(obj); 
  console.log(response);
}

inputValidation({
  gmail : "aishlunatic@gmail.com" ,
  password : "65448",
})