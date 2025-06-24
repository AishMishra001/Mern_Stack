// server side render 

import axios from 'axios'

export default async function User(){
    const response = await axios.get("http://localhost:3000/api/v1/user/details") ;  

    const data = response.data ; 
  return <div>
    <div>
      {data.user}
    </div>
    <div>
      {data.password}
    </div>
  </div>
}