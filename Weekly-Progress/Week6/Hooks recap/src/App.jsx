import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'


function App() {
  const [ exchangeData1 , setExchangeData1] = useState({})
  const [ exchangeData2 , setExchangeData2] = useState({})
  const [ bankData , setBankData ] = useState({})


  useEffect(()=>{
      
        setExchangeData1(
         { returns : 100} 
        )
      
  },[])

  useEffect(()=>{
     
        setExchangeData2(
         { returns : 100} 
        )
    
  },[])

  useEffect(()=>{
   setInterval(() => {
     setBankData({
      returns : 100 
     })
  },[5000]);
})

const cryptoReturns = useMemo(()=>{
   return exchangeData1.returns  +  exchangeData2.returns  
},[exchangeData1,exchangeData2])
  
const creditValue = (cryptoReturns + bankData.returns)* 0.3 ; 

  return (
    <div>
       Your credit value is {creditValue} 
    </div>
  )
}

export default App
