import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title : "Wake up early",
    description : "6-7 am "
  },
  {
    title : "Wake up early",
    description : "6-7 am "
  },
  {
    title : "Wake up early",
    description : "6-7 am "
  }])

  function addTodo(){
    setTodos([...todos, 
       {
        title: Math.random() ,
         description: Math.random() 
        }
      ]);
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo)=> <Todo title = {todo.title} description={todo.description}></Todo>)}
    </>
  )
}
// Todo component that takes title and description as a input and renders it 
function Todo({title , description}){
  return <div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
}

export default App
