import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"


// api : https://jsonplaceholder.typecode.com/users
function App() {
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
            <div>{data.name}</div>
          )
          
        })
      }
    </div>
  )
}

export default App
