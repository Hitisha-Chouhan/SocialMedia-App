import React, { useContext } from 'react'
import styles from './Post.module.css'
import { RiChatDeleteLine } from "react-icons/ri";
import { PostList } from '../store/post-list-store';
function Post({post}) {

  const {deletePost}= useContext(PostList)
  return (
    <div className='card' style={{width: "30rem" , margin : '28px' }}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{post.title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <RiChatDeleteLine  onClick={()=>deletePost(post.id)} /></span></h5>
    <p className="card-text">{post.body}</p>
   {post.tags.map( tag => <span key={tag} className="badge text-bg-primary m-1">{`# ${tag}`}</span>)}
   <div class="alert alert-primary mt-2 mb-0" role="alert">
      This post has been reacted by {post.reactions} people.
</div>
  </div>
</div>
  )
}

export default Post
