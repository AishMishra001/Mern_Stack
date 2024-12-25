"use strict";
function sumOfNum(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfNum({ name: "aish", age: 23 }, { name: "aman", age: 32 });
console.log(result);
