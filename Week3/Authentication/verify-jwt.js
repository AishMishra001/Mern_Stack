// Verification of the jwt : we use .verify("jwt token", "whatever")
       

const jwt = require("jsonwebtoken");

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWlzaCBNaXNocmEiLCJhY2NvdW50bnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwNjE5NDA3Nn0.wh_voOHzOBRTUfnCdf_Z4GNV23Nww3yy3jy9z4I2BCI","secret");

console.log(token);