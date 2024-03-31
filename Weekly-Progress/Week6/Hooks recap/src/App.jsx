import { useCallback, useEffect, useRef, useState } from 'react'

const [incomeTax , setIncomeTax] = useState(20000); // 
function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current)
      divRef.current.innerHTML = 10 
    }, 5000);
  }, [])


  return <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  
}

export default App