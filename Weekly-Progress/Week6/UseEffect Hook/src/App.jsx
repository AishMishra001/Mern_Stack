import { useEffect, useState } from "react"
import axios from "axios" 


function App() {
  const [todos, setTodos] = useState([]) 

// By default, useEffect runs after the component is rendered and then when its dependencies change. However, it can also run when a component is unmounted if you specify a cleanup function.

// To run a side effect specifically when a component mounts, you can pass an empty dependency array [] to the useEffect hook. In this case, the effect will run only once, after the initial render (component mount).

/*
useEffect(() => {
  setInterval(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 10000);
  }, [])

  */

// Using axios library to do the same fetch call as about - 

useEffect(()=>{
  axios.get("https://sum-server.100xdev.com/todos")
  .then(function(response){
    setTodos(response.data.todos)

  })
},[])


useEffect()
  return <div>
      {todos.map(({id,title,description})=><Todo key={id} title={title} description={description}></Todo>)}
    </div>
  
}

function Todo({ title, description }) {
  return <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  ;
}

export default App;
