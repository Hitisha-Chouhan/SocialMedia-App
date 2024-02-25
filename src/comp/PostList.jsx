import { useContext, useEffect, useState} from 'react'
import Post from './Post'
import { PostList as PostListData} from  '../store/post-list-store'
import BlankMsgs from './BlankMsgs'
import LoadingSpinner from './LoadingSpinner';

function PostList() {

  const {postList}=useContext(PostListData);
    const {addAllPost}=useContext(PostListData);

    const [fetching , setfetching]=useState(false);  

    useEffect(()=>
    {
      setfetching(true);

      const controller=new AbortController() ;
      const signal =controller.signal;
      fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((obj )=>{
 addAllPost(obj.posts)
  setfetching(false);

    });

    return ( ()=>{
        controller.abort();
    })
  }, 
  
  []);
    
  return (
   <>  

   {fetching && <LoadingSpinner/> }
   {! fetching && postList.length === 0  && <BlankMsgs></BlankMsgs>}
   { ! fetching &&  postList.map( (post) =>(<Post key={post.id} post={post}/> ))}

   </>
       )
}


export default PostList
