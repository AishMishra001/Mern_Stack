const currentDate = new Date();

console.log(currentDate.getMonth()+1)
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log('Time in milliseconds since 1970:',currentDate.getTime());


function calculateSum(){
  let a = 0 ;
  for(let i = 0 ; i<100000000 ; i++){
    a = a + i ; 
  }
  return a ; 
}

let beforeDate = new Date();
const beforeDateinMs = beforeDate.getTime();
calculateSum();
let afterDate = new Date();
const afterDateinMs = afterDate.getTime();

console.log(afterDateinMs-beforeDateinMs);
