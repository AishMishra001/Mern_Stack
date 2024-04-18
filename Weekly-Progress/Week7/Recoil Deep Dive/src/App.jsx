import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom } from './atom'

function App() {
   return (
     <RecoilRoot>
      <MainApp/>
     </RecoilRoot>
   )
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom) ; 
  const jobCount = useRecoilValue(jobAtom); 
  const [messageCount,setMessageCount] = useRecoilState(messageAtom) ; 
  const notificationCount = useRecoilValue(notificationAtom) ; 
  return (
    <>
      <button>Home</button>
      <button>My Networks ({networkCount>100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Message ({messageCount})</button>
      <button>Notification ({notificationCount})</button>
      <button onClick={
        ()=>{
          setMessageCount(messageCount+1)
        }
      }>Me</button>
    </>
  )
}

export default App
