import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios' ; 

// https://sum-server.100xdevs.com/todos

function useTodos(){

  const[todos , setTodos ] = useState([]) 
  
  useEffect(()=>{
    axios.get('https://sum-server.100xdevs.com/todos')
    .then(res=>{
      setTodos(res.data.todos)
    })
  },[])

  return todos ; 
}
function App(){

   const todos = useTodos() ; 
  return(
    <>
     {todos.map(todo=><Render todo={todo}/>)}
    </>
  )
}

function  Render({todo}){
  return(
      <>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
      </>
  )
}

export default App
