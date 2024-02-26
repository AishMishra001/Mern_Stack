import { useState } from "react"

export function CreateTodo(){

  const [title,setTitle] = useState(""); 
  const [description,setDescription] = useState("")

  return <div>
    <input style={{
      margin:10 , padding : 10 
    }} type="text" placeholder="title" onChange={function(e){
      const value = e.target.value ; 
      setTitle(e.target.value) ; 
    }}/> 
    
    <br/>


    <input  style={{
      margin:10 , padding : 10 
    }}  type="text" placeholder="description" onChange={function(e){
      const value = e.target.value ; 
      setDescription(e.target.value) ; }}/>
      
       <br/>


    <button  style={{
      margin:10 , padding : 10 
    }} onClick={()=> {
      fetch("https://localhost:3000/todos",{
        method : "POST" ,
        body : JSON.stringify({
              title : title , 
              description : description 
        }),
        headers:{
          "Content-type":"application/json" 
        }
      })
      .then(async function(res){
        const json = await res.json() ; 
        alert("Todo added") ; 
      })
    }}>Add a Todo</button>
  </div>
}