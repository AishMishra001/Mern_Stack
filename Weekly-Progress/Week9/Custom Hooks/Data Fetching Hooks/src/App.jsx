import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios' ; 

// https://sum-server.100xdevs.com/todos

function useTodos(time){

  const[todos , setTodos ] = useState([]) 
  const[loading , setLoading ] = useState(true)
  
 const value =  useEffect(()=>{
  setInterval(()=>{
    axios.get('https://sum-server.100xdevs.com/todos')
    .then(res=>{
      setTodos(res.data.todos)
      setLoading(false)
    })
  },time*1000)
  axios.get('https://sum-server.100xdevs.com/todos')
  .then(res=>{
    setTodos(res.data.todos)
    setLoading(false)
  })

// cleanup function 

  return ( ()=>{
    clearInterval(value)
  })
},[])



return {todos,loading} ; 
}

function App(){

   const {todos,loading} = useTodos(5) ; 

   if(loading){
      return <h1>Loading...</h1>
   }
  return(
    <>
     {todos.map(todo=><Render todo={todo}/>)}
    </>
  )
}

function Render({todo}){
  return(
      <>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
      </>
  )
}

export default App
