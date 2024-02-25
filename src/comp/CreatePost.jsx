import React, { useContext, useRef } from 'react'
import { PostList } from '../store/post-list-store';

function CreatePost() {

 const {addPost}= useContext(PostList);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleOnSubmit =(event)=>{
    event.preventDefault();
     const userID=userIdElement.current.value;
     const postTitle =postTitleElement.current.value;
      const postBody=postBodyElement.current.value;
     const reactions=reactionsElement.current.value;
     const tags=tagsElement.current.value.split(/(\+s)/);

     addPost(userID , postTitle , postBody , reactions , tags)
  }
 
  return (
    <>
    <center><h3 className='mb-2'> <b></b></h3></center>
    <hr />
    <form className='create-post' onSubmit={handleOnSubmit}>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter Your User Id</label>
    <input type="text" 
    ref={userIdElement}
    className="form-control" id="exampleInputEmail1" placeholder='Your user Id' />
   
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" 
    ref={postTitleElement}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='How are you feeling today...' />
   
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content </label>
    <textarea rows='3' type="text" 
    ref={postBodyElement}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Tell us more about it ' />
   
  </div>

  <div className="mb-3">
    <label htmlFor="rxns" className="form-label">No. of People reacted to this post</label>
    <input type="text" 
    ref={reactionsElement}
    className="form-control" id="rxns" aria-describedby="emailHelp" placeholder='How many people reacted to this post .' />
   
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your Hastags here</label>
    <input type="text" 
    ref={tagsElement}
    className="form-control" id="tags" aria-describedby="emailHelp" placeholder='Please Enter hastags using space' />
   
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
</>
  )
}

export default CreatePost
