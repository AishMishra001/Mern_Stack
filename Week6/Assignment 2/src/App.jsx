import { useEffect, useState } from 'react'


function App() {
  const [id, setId] = useState(1)

  return (
    <div>
      <button onClick={()=>{
        setId(id+1);
      }}>Next</button>
      <Todo id={id}></Todo>
    </div>
  )
}

function Todo({id}){
  const [todo, setTodo] = useState({}) ;
  
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todo?id="+id)
    .then(async(res)=>{
      const json = await res.json() ; 
      setTodo(json.todo); 
    })
  },[id])
  
  return <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  
  
}

export default App
