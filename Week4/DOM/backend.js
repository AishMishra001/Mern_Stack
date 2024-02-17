express =require("express")
app = express(); 

app.get("/sum",function(req,res){
  let a = req.query.a ; 
  let b = req.query.b ; 
  let sum = parseInt(a) + parseInt(b) ; 

  res.send(sum.toString()); 
}); 

app.listen(3000); 