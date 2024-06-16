import React, { useEffect, useState } from 'react'

function useDebounce(value , timeout) {
  const [debounce,setDebounce] = useState(value)

  useEffect(()=>{
     const interval =  setInterval(() => {
          setDebounce(value) ; 
      }, timeout);

      return ()=>{
        clearInterval(interval)
      }
  },[value])

  return debounce ; 
}

export default useDebounce