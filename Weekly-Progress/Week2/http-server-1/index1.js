// express.js basically avoid the body of the request and for that reason we have to use some other library which here in this case will be : 
//  body-parser 


const express = require('express')
const port = 5010 ; 
const app = express();   
const bodyParser = require('body-parser');
// Middlewares
app.use(bodyParser.json());


app.post('/' , function(req,res){
  console.log(req.body);
  res.send('<b>Hello Bro</b>')
})

app.listen(port , ()=>{
  console.log(`Example app listening on port ${port}`)
})