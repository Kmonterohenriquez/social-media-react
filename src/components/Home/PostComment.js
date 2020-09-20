import React, {useState} from "react";
import "../../style/Home/Post.sass";
import userPic from "../../img/user_pic.jpg";

const PostComment = () => {
    const [like, setLike] = useState(false)
  return (
    <div>
      <div className="comment-section">
        <p className={like? "liked": `like-btn`} onClick={()=>setLike(!like)}>
          <i className={like? "liked fas fa-thumbs-up":"far fa-thumbs-up"}></i> Like
        </p>
        <p className="comment-btn">
          <i className="far fa-comment-alt"></i> Comment
        </p>
        <p className="share-btn">
          <i className="fas fa-share"></i> Share
        </p>
      </div>
      <hr />
      <div className="submit-commet-bar">
        <img src={userPic} alt="" />
        <div className="input-container">
          <input type="text" placeholder="Write a comment..." />
          <i className="far fa-smile"></i>
        </div>
      </div>
    </div>
  );
};


export default PostComment;
