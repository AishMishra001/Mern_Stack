"use strict";
// The Record<K, T> utility type is used to construct a type with a set of properties K of a given type T. It provides a cleaner and more concise syntax for typing objects when you know the shape of the values but not the keys in advance.
const users = {
    "efsdfsdf": { age: 23, name: "Aish" },
    "erdfdsff": { age: 32, name: "Aman" }
};
const users1 = new Map();
users1.set("arefds", { name: "Aish", age: 23, email: "fdfdsf" });
users1.set("tyhghg", { name: "Aman", age: 23 });
users1.set("gthghy", { name: "Aish" });
console.log(users1);
const user3 = users1.get("arefds");
console.log(user3);
users1.delete("gthghy");
console.log(users1);
