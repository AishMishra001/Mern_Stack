/*

Todo {
  title : string 
  description : string 
  completed : boolean 
}

*/

const mongoose = require("mongoose") ; 
/*

NOTE : 
1. In real world project we put this .connect() in ".env" file

2. We do not push this code in github because we don't want other's to hit our backend like this

3. The .env file extension is commonly associated with "environment" files used in software development. These files typically contain environment variables that are used to configure the environment in which a software application runs. Environment variables can store information such as database connection strings, API keys, and other configuration settings.

*/

mongoose.connect("mongodb+srv://aishlunatic001:Agr9VB911qSCTj20@cluster0.t7jdjpp.mongodb.net/todos")

const TodoSchema = mongoose.Schema({
  title : String , 
  description : String , 
  completed : Boolean 
})

const todo = mongoose.model('todos',TodoSchema) ;

module.exports = {
  todo : todo 
}

// mongodb+srv://aishlunatic001:Agr9VB911qSCTj20@cluster0.t7jdjpp.mongodb.net/ 