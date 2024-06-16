import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function useIsOnline() {

  const [isOnline , SetIsOnline] = useState(window.navigator.onLine) ; 

  useEffect(()=>{
    window.addEventListener("online",()=>{
      SetIsOnline(true)
    })

    window.addEventListener("offline",()=>{
      SetIsOnline(false)
    })
  },[])
  return isOnline ; 
}

export default useIsOnline