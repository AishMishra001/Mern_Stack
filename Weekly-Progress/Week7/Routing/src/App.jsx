import { Suspense, lazy } from 'react'
import {BrowserRouter , Routes , Route, useNavigate } from "react-router-dom"
const Dashboard = lazy(()=>import('./components/dashboard'))
const Landing = lazy(()=>import('./components/landing'))


function App() {
  
  return (
    <div>
     <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
      <Route path='/' element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
 const navigate = useNavigate(); 
  return <div>
    <button onClick={()=>{
      navigate("/dashboard");
    }}>Dashboard</button>
    <button onClick={()=>{
      navigate("/");
    }}>Landing</button>
    </div>
}

export default App


