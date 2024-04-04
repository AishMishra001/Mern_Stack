import { memo,useCallback,useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


 const wtf = useCallback(()=>{
  console.log('what the fuck!!') ; 
 },[])  
  return <div>
      <ButtonComponent inputFunction={wtf}></ButtonComponent>
      <button onClick={
       ()=>{
        setCount(count+1)
       } 
      }>counter: {count}</button>
    </div>
  
}

const ButtonComponent = memo(({inputFunction})=>{
 console.log("Button Rendered")
 return <div>

   <button>Click me</button>

 </div>
})

export default App
