// Creating a http server using Express.js


const express = require('express')
const port = 5003 ; 
const app = express();   

// app.get("/route-handler", function(req, res){
//   res.json({
//      name : 'Aish Mishra',
//      age : 21 ,
//   })
// })

app.get('/' , function(req,res){
  res.send('<b>Hello Bro</b>')
})

app.listen(port , ()=>{
  console.log(`Example app listening on port ${port}`)
})