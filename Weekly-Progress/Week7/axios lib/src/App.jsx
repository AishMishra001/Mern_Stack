import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import  AxiosGet  from './components/AxiosGet'
import AxiosPost from './components/AxiosPost'




// api : https://jsonplaceholder.typecode.com/users
function App() {
 

  return (
    <div>
      {/* <AxiosGet></AxiosGet> */}
      <AxiosPost></AxiosPost>
    </div>
  )
}

export default App
