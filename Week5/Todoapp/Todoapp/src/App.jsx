import { useState } from "react"; 

function App() {
  // state
  const [todos, setTodos] = useState([{
    title:"Go To Gym" , 
    description : "Very Important" , 
    Completed : false 
  },
  {
    title:"DSA" , 
    description : "Very Important" , 
    Completed : true
  },
  {
    title:"DSA" , 
    description : "Very Important" , 
    Completed : true
  },
  {
    title:"DSA" , 
    description : "Very Important" , 
    Completed : true
  },
])

function addTodo(){
  setTodos([...todos,{
    title:"New Todos",
    description:"whatever"
  }])
}
return (
  
  // rerendering 
  <div>
    <button onClick={addTodo}>Add a random Todo</button>
    {todos.map(function(todo) {
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}
    </div>
  )
}

// components 

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}
export default App
