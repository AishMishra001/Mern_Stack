"use strict";
function updateUser(updateProp) {
}
// As now the params are optional give all three of them or none will still leads to no typescript errors 
updateUser({ age: 23, name: "aish", password: 23424 });
updateUser({ age: 23, name: "aish" });
updateUser({ age: 23 });
updateUser({});
