import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseMousePointer() {

  const [pointer,setPointer] = useState({x:0 , y:0})  ; 

  const handleMousePointer = (e)=>{
    setPointer({x:e.clientX ,y:e.clientY }); 
  }

 useEffect(()=>{
  window.addEventListener('mousemove',handleMousePointer);
  return ()=>{
    window.removeEventListener('mousemove',handleMousePointer) ; 
  }
 },[])

return pointer ; 

}

export default UseMousePointer



// window.addEventListener('mousemove', handleMouseMove);