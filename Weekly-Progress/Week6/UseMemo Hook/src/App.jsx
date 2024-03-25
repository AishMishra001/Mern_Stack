import { useMemo } from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue , setInputValue] = useState(1) 


  let solution = useMemo(()=>{

    let sum = 0 ; 
    for(let i= 0 ; i<=inputValue ; i++){
      sum = sum + i ; 
    }
    return sum;
  },[inputValue])
  return (
    <>
      <input type="text" placeholder='find sum from 1 to input' onChange={(e)=>{
        setInputValue(e.target.value) ; 
      }}/>
      <h3>Sum from 1 to {inputValue} is {solution}</h3>
      <button onClick={()=>{
        setCount(count+1);
      }}>Counter({count})</button>
    </>
  )
}
 

export default App
