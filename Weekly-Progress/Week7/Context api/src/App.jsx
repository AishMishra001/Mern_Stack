import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  )
}

function Count({ setCount }) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount}>
    </Buttons>
  </div>
}


function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}
function Buttons({ setCount }) {
  const count = useContext(CountContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increment</button>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrement</button>
  </div>
}

export default App
