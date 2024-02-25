import { createContext, useReducer } from "react";


export const PostList=createContext({

  postList : [],
  addPost :()=>{},
  addAllPost : ()=>{},
  deletePost:()=>{}
});

const postListReducer=(currPostList , action)=>{
  let newPostList =currPostList;

  if(action.type === 'Delete_Post'){

    newPostList =currPostList.filter( post => post.id !== action.payload.postId)
  }
  else if(action.type === 'ADD_Post'){
    newPostList=[action.payload , ...currPostList]

  }
  else if(action.type === 'ADD_AllPost'){
    newPostList=action.payload.posts;

  }

   return newPostList;
}
const PostListProvider =({children})=>{

  const [postList , dispatchPostList]=useReducer(postListReducer ,[]);

  const addPost =(userID , postTitle , postBody , reactions , tags)=>{

    dispatchPostList({
      type : 'ADD_Post',
      payload : { 
        id : Date.now(),
         title : postTitle  , 
         body :  postBody,
      reactions : reactions ,
       userid : userID ,
      tags: tags}
    })

  }
  const addAllPost =(posts)=>{

    dispatchPostList({
      type : 'ADD_AllPost',
      payload : { 
        posts}
    })

  }
  const deletePost =(postId)=>{

    dispatchPostList({
      type : 'Delete_Post',
      payload : {
        postId
      }
    })

  }

  return ( 
    <PostList.Provider value={ {postList , addPost ,addAllPost ,deletePost} }>{children}</PostList.Provider>
  )
}

const Default_PostList=[

  {id :'1' , title : ' Going to mumbai' , body : ' Enjoying with family' ,
  reactions : '2' , userid :'user-3' ,
  tags: ['mumbai' , 'vacation']} , 

  {id :'2' , title : 'Wedding Celebration' , body : 'Attending brothers Wedding' ,
  reactions : '3' , userid :'useer-1' ,
  tags: ['enjoy' , 'celebrations']}
]

  



export default PostListProvider;
