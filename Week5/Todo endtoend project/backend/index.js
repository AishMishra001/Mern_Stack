const express = require("express") ; 
const app = express() ; 
const {createTodo , updateTodo } = require("./types") ; // Imported createTodo from types.js file  

app.use(express.json()) ; 

app.post("/todo",function(req,res){
 const createPayload = req.body ; 
 const parsedPayload = createTodo.safeParse(createPayload);  // .safeParse() --> it checks weather the given input is correct on not according to the zod validation and return success : true or false meaning correct or incorrect
 if(!parsedPayload.success){
    res.status(403).json({
      msg :"You sent the wrong input"
    })
    return ; 
 }
 // put in database mangodb

});

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
     const updatedPayload = req.body ; 
     const parsedPayload = updateTodo.safeParse(updatedPayload); 
     if(!parsedPayload.success){
      res.status(403).json({
        msg : "You sent the wrong input"
      })
     }
})


app.listen(3000) ; 