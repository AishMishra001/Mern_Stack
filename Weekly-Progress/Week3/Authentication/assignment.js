/* Assignment : 


A website which has 2 endpoints - 


POST /signin 
Body - { 
username: string 
password: string 
} 
Returns a json web token with username encrypted


GET /users 
Headers - 
Authorization header 
Returns an array of all users if user is signed in (token is correct) 
Returns 403 status code if not

*/


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtSecret = "shhhhh";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  return ALL_USERS.some(user => username === user.username && password === user.password);
}
jwtSecret
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in-memory database",
    });
  }

  const token = jwt.sign({ username: username }, jwtSecret);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtSecret);
    const username = decoded.username;

    // Your logic to fetch other users
    const otherUsers = ALL_USERS.filter(user => user.username !== username);

    // Return the list of other users
    res.json({
      users: otherUsers
    });
  } catch (error) {
    res.status(403).json({
      msg: "Invalid token"
    });
  }
});

app.listen(3000);
  
  // Return the list of other users