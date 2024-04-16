import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CountContext } from './context'
import { useContext } from 'react'
import { countAtom } from './store/atoms/count'
import { useRecoilValue, useRecoilState , RecoilRoot} from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <Count/>
        </RecoilRoot>
    </>
  )
}

function Count() {  

  return <div>
    <CountRenderer />
    <Buttons>
    </Buttons>
  </div>
}


function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}
function Buttons() {
  const [count , setCount] = useRecoilState(countAtom) ; 
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
