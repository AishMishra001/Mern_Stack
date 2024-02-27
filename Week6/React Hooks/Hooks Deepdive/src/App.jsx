import { useState } from 'react'

function App() {

   const [title, setTitle] = useState("My name is Aish")
/*  
Note : 
1. using <div> </div> below leads to an extra parent div in the html code render 
2. to remove this extra parent div we can use <> </> in place of <div> </div> 
3. a we have to use a parent element anyways 
4. Also <React.Fragment> </React.Fragment> 
*/

function updateTitle(){
  setTitle("My name is " + Math.random())
}

  return (
    <>
       <button onClick={updateTitle}>Update the title</button>
       <Header title={title}></Header>
       <Header title="My name is something"></Header>
    </>
  )
}



const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
  })


export default App
