// INPUT VALIDATION 

const express = require("express");

const app = express(); 

app.use(express.json()); // to extract the body of the post request which is kidney= req.body.kidney in this case 

app.post("/health-checkup",function(req,res){
  // kidney = [ 1,2,3]
  const kidneys = req.body.kidneys ; 
  const kidneyLength = kidneys.length ; 

  res.send("Your kidney length is " + kidneyLength); 
});



// Global catches 

app.use(function(err,req,res,next){
  res.json({
    msg : "Something is up with our server"
  })
})

// Global catches are called "Error handling middlewares" : 
// Error handling middleware in Express.js is used to catch errors that occur during the request-response cycle. These middlewares have four parameters: (err, req, res, next). If an error occurs in a middleware or a route handler, Express will immediately jump to the first error-handling middleware it finds.

app.listen(3000);   