import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState([]);

  return (
    <div>
         <CreateTodo></CreateTodo>
         <Todos todos={todos}></Todos>
    </div>
  )
}

export default App

/*
NOTE: 
1. In React, useState is a hook that allows functional components to manage state.
2. The line const [count, setCount] = useState(0) is a declaration of a state variable named count and a function named setCount that can be used to update the value of count
*/