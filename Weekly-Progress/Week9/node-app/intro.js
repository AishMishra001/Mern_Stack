"use strict";
function greet(a) {
    console.log(a + "Good Morning");
}
greet('Aish');
function sum(a, b) {
    return a + b;
}
sum(6, 4);
// type inference --> if number type is not written expecitly than typescript itself identify the return type
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let x = isLegal(18);
