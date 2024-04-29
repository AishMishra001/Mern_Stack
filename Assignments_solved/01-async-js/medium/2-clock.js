// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {

const Now = new Date() ; 

let hours = Now.getHours() ;
let minutes = Now.getMinutes() ;
let second = Now.getSeconds() ;
let ampm = hours >= 12 ? 'PM' : 'AM' ;


hours = hours % 12 ; 
hours = hours ? hours : 12 ; 
let time = hours + ':' + minutes + ':' + second + ' ' + ampm ;
console.log(time) ; 
  }

  setInterval(
  clock  
, 1000);