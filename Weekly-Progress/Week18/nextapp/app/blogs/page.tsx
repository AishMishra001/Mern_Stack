// Implementing server-side rendering 

import axios from 'axios' ; 

async function getBlogs(){
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/") 
  return response.data ; 
}


export default async function Blogs(){

  const blogs = await getBlogs() ; 
  return <div>
    {blogs.map((blog : ITodo)=><Todo title={blog.title} completed={blog.completed}/>)}
  </div>
}

interface ITodo {
  title : string , 
  completed : boolean 
}

function Todo({title , completed} : ITodo){
  return <div className='flex space-x-2'>
    <div className='border-black-200 border display: inline-block'>
      {title}
    </div>
    <div className='font-bold'>
     {completed? "done" : "not done"}
    </div>
  </div>
}