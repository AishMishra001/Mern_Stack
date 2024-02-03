// mongoose is the library we need to add to use the mongodb database

const mongoose = require("mongoose");
const express = require("express"); 
const app = express(); 

//mongoose.connect("url of the mongodb database u have made")   it connects your project to store the data in mongodb database
mongoose.connect("mongodb+srv://aish:krishna@cluster0.gcxushf.mongodb.net/?retryWrites=true&w=majority",{
  dbName : "usernameio"
})

// connection url :: mongodb web -> database -> connect -> Drivers -> Add your connection string into your application code  

app.use(express.json());

const User = mongoose.model('Users', { name: String , email: String , password : String});


app.post("/signup", async function(req,res){

 const username = req.body.username ; 
 const password = req.body.password ; 
 const name = req.body.name ; 
 // CRUD : Create Read Update Delete 
 const existingUser = await User.findOne({ email : username }) ; 
 if (existingUser){
  return res.status(400).send("User already exists")
 }


  const user = User({
    name: name,
    email: username ,
    password: password
  
  }); 
  
  user.save();
})

app.listen(3000) ; 

