import axios from 'axios' ; 


export default async function BlogPage({params} : any ){

  const postId = (await params).postId ; 
 

  return <div>
     Blog Page {JSON.stringify(postId)}
     

  </div>
}