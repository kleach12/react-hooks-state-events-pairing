import React from 'react'

function Comments({user, comment}){
  
  return(
    <div>
      <h2 >{user}</h2>
      <div >{comment}</div>
    </div>
  )
}

export default Comments