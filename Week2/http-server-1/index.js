// Creating a http server

const express = require('express')
const port = 5001 ; 
const app = express();   

app.get("/route-handler", function(req, res){
  res.json({
     name : 'Aish Mishra',
     age : 21 ,
  })
})

// app.get('/' , function(req,res){
//   res.send('Hello World!!!!!!')
// })

app.listen(port)