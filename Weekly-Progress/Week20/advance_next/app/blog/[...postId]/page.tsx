
export default async function BlogPage({params} : {
  params :  Promise<{
     postId : string
  }> 
}){

  const postId = (await params).postId ; 
 

  return <div>
     Blog Page {JSON.stringify(postId)}
     

  </div>
}