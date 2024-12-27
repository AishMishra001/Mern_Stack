"use strict";
const user = {
    name: "aish",
    age: 23
};
user.name = "aman"; // as here even if user is a const typescript still allowing me to change user.name 
const user2 = {
    name: "harkirat",
    age: 36
};
// user2.name = "kirat"   throwing error as it is readonly 
