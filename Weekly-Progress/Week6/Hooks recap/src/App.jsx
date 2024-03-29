import { useEffect } from 'react';
import { useState } from 'react'


function App() {
  const [ exchangeData , setexchangeData] = useState({})
  const [ bankData , setBankData ] = useState({})

  console.log("hi there re-render") ; 

  useEffect(()=>{
      setTimeout(() => {
        setBankData(
         { returns : 100} 
        )
      }, 1000);
  },[])

  useEffect(()=>{
      setTimeout(() => {
        setexchangeData(
         { returns : 100} 
        )
      }, 3000);
  },[])

  const creditValue = (exchangeData.returns  +  bankData.returns) * 0.3 ;  

  return (
    <div>
       Your credit value is {creditValue} 
    </div>
  )
}

export default App
