// server side render 

import axios from 'axios'

export default async function User(){
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details") ; 
    const data = response.data ; 
  return <div>
    <div>
      {data.name}
    </div>
    <div>
      {data.email}
    </div>
  </div>
}