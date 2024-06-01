// axios vs fetch 

// api : https://sum-server.100xdevs.com/todos 


// // 1 way : 
// function main(){
//   fetch("https://sum-server.100xdevs.com/todos")
//   .then(async(response)=>{
//     const data = await response.json() ; 
//     console.log(data) ;  
//   })
// }

// 2 way : 

const axios = require('axios') 
async function main(){
  const response = await fetch("https://sum-server.100xdevs.com/todos") ; 
  const data = await response.json() ; 
  console.log(data) 
}

async function main(){
  const response = await axios.get("https://sum-server.100xdevs.com/todos") ; 

  // In axios after we call everything will be in "something.data" 
  console.log(response.data) ;  
}

main() ; 