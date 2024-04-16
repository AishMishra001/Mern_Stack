import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CountContext } from './context'
import { useContext } from 'react'
import { countAtom, evenSelector } from './store/atoms/count'
import { useRecoilValue, useRecoilState , RecoilRoot, useSetRecoilState} from 'recoil'

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
  console.log("hi") ; 
  return <div>
    <CountRenderer />
    <Buttons>
    </Buttons>
    <CheckNumberIsEven></CheckNumberIsEven>
    

  </div>
}

function CheckNumberIsEven(){
  const isEven = useRecoilValue(evenSelector) ; 
  return <div>
    {isEven % 2 ==0 ? 'It is Even' : ''}
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}
function Buttons() {
  // now buttons are not re-rendering as count is not passed in 
  const setCount = useSetRecoilState(countAtom) ; 
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increment</button>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrement</button>
  </div>
}

export default App
