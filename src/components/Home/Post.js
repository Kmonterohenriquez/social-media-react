import React from "react";
import userPic from "../../img/user_pic.jpg";
import "../../style/Home/Post.sass";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <div className="top-part">
        <div className="user-info">
          <img src={userPic} alt="" className="user-pic" />
          <div>
            <p className="username">Kevin Montero</p>
            <p className="time-posted">
              <i className="far fa-clock"></i> 3 min ago
            </p>
          </div>
        </div>
        <i className="fas fa-ellipsis-v menu-icon"></i>
      </div>
      <div className="description">
        <div className="description-top-part">
          <p className="title">{post.title}</p>
          <div>
            <p className="job-type">{post.type}</p>
            <p className="pay-rate">${post.salary}</p>
          </div>
        </div>
        <p className="description-bottom-part">{post.description}</p>
      </div>
      <div className="tech-used">
        <p>HTML</p>
        <p>Sass</p>
        <p>React</p>
        <p>Node</p>
        <p>Sass</p>
      </div>
      <hr />
      <div className="comment-section">
        <p className="like-btn">
          <i className="far fa-thumbs-up"></i> Like
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

export default Post;
