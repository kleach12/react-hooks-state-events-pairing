import React, {useState} from "react";
import Comments from "./Comments";

function CommentsDis({commentInfo}){
  const[hideComments, sethideComments] = useState(true)
  const numOfCom = commentInfo.comments.length
  // console.log(commentInfo)

  const displayComment = commentInfo.comments.map((com) => 
      // console.log(com)
      <Comments 
        user = {com.user}
        comment= {com.comment}
        />
    )
    
  function handleHideClick (){
    if (hideComments === false){
      sethideComments((hideComments) => !hideComments)
      console.log('false')
    } else if(hideComments){
      sethideComments((hideComments) => !hideComments)
      console.log('true')
    }
  }

  const commentBtn = <button onClick={handleHideClick}> Hide Comments </button>
  

    const commentList = 
    <div>
      <h2> <span>{numOfCom}</span> Comments</h2>
      {displayComment}
    </div>

return(
  <div>
    {commentBtn}
    {hideComments ? commentList  : null}
  </div>
)

}

export default CommentsDis