const { default: axios } = require("axios")


// Method : axios.post , axios.put  , axios.delete , axios.get 

// In Post , Put , delete request :  2nd argument : body 
//                    3rd argument : header 


//  In Get request as u can't send a body so 
//  2nd argument : header , other stuff 
async function main(){
    const response = await axios.post("https://httpdump.app/dumps/8e8ae1ee-2495-4e80-9af5-fa28ab93ed70"
      ,{
        "username": "admin",
        "password": "admin"
      },{
        headers: {
          Authorization : 'Bearer 123'
        }
      }) 

      console.log(response.data) ; 

}






main()