import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

let counter = 4 ; 
function App() {
  const [todos, setTodos] = useState([{
    id: 1 ,
    title : "Wake up early",
    description : "6-7 am "
  },
  {
    id: 2 ,
    title : "Wake up early",
    description : "6-7 am "
  },
  {
    id: 3 ,
    title : "Wake up early",
    description : "6-7 am "
  }])

  function addTodo(){
    setTodos([...todos, 
       {
        id: counter++ ,  
        title: Math.random(),
         description: Math.random() 
        }
      ]);
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo)=> <Todo key={todo.id} title = {todo.title} description={todo.description}></Todo>)}
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

/*

Note : 

1. When rendering a list of items in React, it's important to provide a unique key to each item in the list. The key prop is a special string attribute you can add to the elements in the list.

2. The key prop helps React identify which items have changed, added, or removed. React uses the key prop to efficiently update and render the list of items.

3. When the key prop changes, React will create a new DOM element for that item. If the key prop remains the same, React will update the existing DOM element instead of recreating it.

*/