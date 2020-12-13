import React from "react";
import "../../style/Home/MakeAPost.sass";

const PostAJob = ({ modalHandler }) => {
  return (
    <div className="PostAJob">
      <div className="top-side" onClick={() => modalHandler()}>
        <div className="hover"></div>
        <i className="far fa-edit"></i>
        <p>Start a post</p>
      </div>
      <div className="bottom-side">
        <div>
          <i className="far fa-image"></i>
          <p>Photo</p>
        </div>
        <div>
          <i className="fas fa-film"></i>
          <p>Video</p>
        </div>
        <div>
          <i className="far fa-file-alt"></i>
          <p>Document</p>
        </div>
        <div>
          <i className="far fa-newspaper"></i>
          <p>Write article</p>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
