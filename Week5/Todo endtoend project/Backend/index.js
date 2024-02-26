const express = require("express") ; 
const app = express() ; 
const {createTodo , updateTodo } = require("./types") ; // Imported createTodo from types.js file  
const { todo } = require("./database");
const { rmSync } = require("graceful-fs");
const cors = require("cors") ; 

app.use(express.json()) ; 

app.use(cors()) ; 

// 3 routes : /todo /todos /completed 


app.post("/todo",async function(req,res){
 const createPayload = req.body ; 
 const parsedPayload =  createTodo.safeParse(createPayload);  // .safeParse() --> it checks weather the given input is correct on not according to the zod validation and return success : true or false meaning correct or incorrect
 if(!parsedPayload.success){
    res.status(403).json({
      msg :"You sent the wrong input"
    })
    return ; 
 }
 // put in database mangodb
   await todo.create({
    title : createPayload.title ,
    description : createPayload.description ,
    completed : false 
  })
  res.json({
    msg : "Todo is created" 
  })
});

app.get("/todos",async function(req,res){
   const todos = await todo.find({})   // .find() will get everything from the database
   try{

     if(todos){
       res.json({
        todos 
       })
      }
  else{
    res.json({
      msg : "No Todos present"
    })
  }
   }catch(e){
    console.log(e);
   }

})

app.put("/completed", async function(req, res) {
  const updatedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatedPayload);
  if (!parsedPayload.success) {
      return res.status(403).json({
          msg: "You sent the wrong input"
      });
  }

  try {
      await todo.updateOne({
          _id: req.body.id
      }, {
          completed: true
      });
      res.json({
          msg: "Todo marked as completed"
      });
  } catch (error) {
      console.error("Error updating todo:", error);
      res.status(500).json({
          msg: "Internal Server Error"
      });
  }
});


// .update({query(getting what need to update)},{update( updating what we get )})

app.listen(3000) ; 

/*

NOTE :
1 . We must know that when you hit a database it is eventually a promise that will give the output when it is resolved 
2 . So in the case of using these function .create() .find() .update() : these will hit the database and hence is a Promise and when resolves will give you the output 
3 . we can use the normal .then() syntax of promise orr async await which makes it much cleaner 
4. it is a good practice to create the backend first than the frontend 
*/