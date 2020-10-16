import React from "react";
import "../../style/Home/PostAJob.sass";
import user_pic from "../../img/user_pic.jpg";
const PostAJob = ({ modalHandler }) => {
  return (
    <div className="PostAJob">
      <div className="left-side">
        <img src={user_pic} alt="" className="user-picture" />
      </div>
      <div className="right-side">
        <button className="secondary-btn btn">Post a Project</button>
        <button className="primary-btn btn" onClick={() => modalHandler()}>
          Post a Job
        </button>
      </div>
    </div>
  );
};

export default PostAJob;
