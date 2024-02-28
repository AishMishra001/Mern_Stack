import { useState } from 'react'
import React from 'react';


function App() {
  const [title,setTitle] = useState("my name is harkirat")
 function updateTitle(){
    setTitle("my name is " +  Math.random()) ; 
 }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="Harkirat"></Header>
      <Header title="Harkirat"></Header>
      <Header title="Harkirat"></Header>
      <Header title="Harkirat"></Header>
      <Header title="Harkirat"></Header>
      
     

  
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return <div>

    {title}

  </div>
})

export default App
