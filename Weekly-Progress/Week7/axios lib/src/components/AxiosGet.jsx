import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosGet() {
  const [currentData, setCurrentData] = useState([])

 useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((resolve)=>{
      setCurrentData(resolve.data);
      console.log(resolve);
    })
 },[])

  return (
    <div>
      {
        currentData.map((data)=>{
          return(
            <div key={data.id}>{data.name}</div>
          )
          
        })
      }
    </div>
  )
}

export default AxiosGet