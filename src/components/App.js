import React  from "react";
import video from "../data/video.js";
import Video from "./Video"
import LikeBtn from "./LikeBtn.js";
import CommentsDis from "./CommentsDis.js";

function App() {

  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video = {video}/>
      <LikeBtn videoInfo = {video}/>

      <CommentsDis commentInfo = {video} />
    </div>
  );
}

export default App;
