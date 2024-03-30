import { memo, useCallback, useMemo } from 'react';
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
},[])

// useCallback here won't rerender the calculateCryptoReturns are the props exchangeData1 and exchangeData2 is not changed 

const calculateCryptoReturns = useCallback(function(){  
  return exchangeData1.returns  +  exchangeData2.returns  
  },[exchangeData1,exchangeData2])
  


return <div>
   <CryptoGainCalculator calculateCryptoReturns={calculateCryptoReturns}/>
</div>

}

const CryptoGainCalculator= memo(function({calculateCryptoReturns}){
  console.log("crypto child re-render")
  return <div>
    your crypto returns are {calculateCryptoReturns()} 
  </div>
})

export default App
