import React, {useState} from 'react';

function LikeBtn({videoInfo}){

  const [likes, setLikes] = useState(videoInfo.upvotes)
  const [disLikes,setDisLikes] = useState(videoInfo.downvotes)

  function handleUpClicks(e){
    // console.log( (currentLikes) => currentLikes + 1 )
    setLikes( (currentLikes) => currentLikes + 1 )
  }

  function handleDownClicks(){
    // Check on how you are supposed to actually call 
    // console.log( (currentDisLikes) => currentDisLikes + 1 )
    setDisLikes( (currentDisLikes) => currentDisLikes + 1 )
  }


console.log(videoInfo)
  const likeBtn = <button onClick = {handleUpClicks} value = {likes}> {likes} 👍</button>
  const dislikeBtn = <button onClick = {handleDownClicks} value = {disLikes}>{disLikes} 👎</button>
  
  return(
    <div>
      {likeBtn} {dislikeBtn}
    </div>
  )
}

export default LikeBtn