import { useState } from 'react'


function App(){
  return <>
  <CardWrapper>
     <CardWrapper>
      <CardWrapper>
       <TextComponent></TextComponent>
       </CardWrapper>
     </CardWrapper>

  </CardWrapper>
  <CardWrapper>
     <CardWrapper>
       <TextComponent></TextComponent>
     </CardWrapper>

  </CardWrapper>
  </>
}


function CardWrapper({children}){
  console.log(children) ; 
  return <div style={{border:"2px solid black", padding : "20px", margin : "10px"}}>
      {children}
  </div>
}

function  TextComponent(){
  return <div>
     Hi there !!! 
  </div>
}

// function App() {

//   return (
//     <>
//        <CardWrapper innerComponent={<TextComponent/>}/>
//        <CardWrapper innerComponent={<TextComponent/>}/>
//     </>
//   )
// }


// //  Components : 
// function CardWrapper({innerComponent}){
//    return <div style={{ border :'2px solid black', padding : '20px', margin : '10px'}}>{innerComponent}</div>
// }


// // innerComponent of CardWrapper  that displays the text component.
// function  TextComponent(){
//   return <div>
//      Hi there !!! 
//   </div>
// }

export default App
