import { useEffect } from "react"


function App() {
  const [todos, setTodos] = useState([]) 

// By default, useEffect runs after the component is rendered and then when its dependencies change. However, it can also run when a component is unmounted if you specify a cleanup function.

// To run a side effect specifically when a component mounts, you can pass an empty dependency array [] to the useEffect hook. In this case, the effect will run only once, after the initial render (component mount).


  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, [])

  return <div>
      {todos.map((todo)=><Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </div>
  
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;