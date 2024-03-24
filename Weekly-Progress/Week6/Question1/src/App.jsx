import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [id, setId] = useState(1);
  return <div>
    <button onClick={function(){
      setId(1)
    }}>1</button>
    <button onClick={function(){
      setId(2)
    }}>2</button>
    <button onClick={function(){
      setId(3)  
    }}>3</button>
    <button onClick={function(){
      setId(4)
    }}>4</button>
    <Todo id={id}></Todo>
  </div>
  
}

function Todo({id}){
  const [todo, setTodo] = useState({})
  

useEffect( () => {

 axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
 .then(function(response){
   setTodo(response.data.todo);
 })  

} ,[id])

  return (  
    <div>
      id:{id}
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  )

}



export default App
