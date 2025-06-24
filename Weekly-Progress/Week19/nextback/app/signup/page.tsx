"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Signup(){
   const [username , setUsername] = useState("") ; 
   const [password , setPassword] = useState("") ; 
  const router = useRouter() ; 

  return <div className="w-screen h-screen flex items-center justify-center">
      <div className="border-2 p-2">
        <input type="text" placeholder="name" onChange={e=>{
          setUsername(e.target.value)
        }}></input>
        <input type="text" placeholder="password" onChange={e=>{
          setPassword(e.target.value)
        }}></input>
      </div>
      <div>
        <button onClick={async ()=>{
           await axios.post("http://localhost:3000/api/v1/user/details" , {
              username , 
              password 
            })

            router.push("/signin") ; 

        }} className="p-2 border-amber-100 rounded-xl">Signup</button>
      </div>
  </div>
}