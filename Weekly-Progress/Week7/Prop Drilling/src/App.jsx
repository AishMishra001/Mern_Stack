import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count} setCount={setCount}>
        </Count>    
    </>
  )
}
// here Count component don't actually need setCount but as it's child Buttons needs it is the just being a mediator between the two which is bad practice it condition is called prop drilling . 
function Count({count,setCount}){
  return <div>
    <h1>Count: {count}</h1>
  <Buttons count={count} setCount={setCount}>
          </Buttons>
  </div>
}

function Buttons({count,setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count +1)
    }}>Increment</button>
    <button onClick={()=>{
      setCount(count -1)
    }}>Decrement</button>
  </div>
}

export default App
