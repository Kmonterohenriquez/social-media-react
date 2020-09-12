import React, { useEffect } from "react";
import "../../style/Home/PostAJob.sass";
import user_pic from "../../img/user_pic.jpg";
import Axios from "axios";
const PostAJob = ({ modalHandler }) => {
  useEffect(() => {
    Axios.post("/posts", {})
      .then((res) => console.log("Post created successfully!"))
      .catch((err) => console.log(err));
  }, []);
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
