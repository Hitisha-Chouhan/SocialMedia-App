import React from 'react'

function BlankMsgs() {
  return (
    <center className='mt-5'>
      <h1 style={{color : "red"}}>There are no posts !</h1>

      <button className='btn btn-primary' > Get posts from server</button>
    </center>
  )
}

export default BlankMsgs
