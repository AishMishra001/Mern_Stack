export function CreateTodo(){
  return <div>
    <input style={{
      margin:10,padding:10
    }} type="text" placeholder="title"></input> <br/>
    <input style={{
      margin:10,padding:10
    }} type="text" placeholder="description"></input> <br/>

    <button style={{
      margin:10,padding:10
    }} >Add A Todo</button>
  </div>

}