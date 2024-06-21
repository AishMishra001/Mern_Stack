"use strict";
function runAfter1sec(fn) {
    setTimeout(fn, 1000);
}
runAfter1sec(() => {
    console.log("Hello World");
});
