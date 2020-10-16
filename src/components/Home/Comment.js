import React from "react";
import me from '../../img/user_pic.jpg'
import '../../style/Home/Comment.sass'

const Comment = ({ commentInfo }) => {
  const { comment } = commentInfo;
  return (
    <div className="Comment">
      <img src={me} className="user-pic" alt=""/>
      <div className='Comment-info'>
        <h3>Kevin Montero</h3>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
