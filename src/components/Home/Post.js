import React, { useState } from "react";
import userPic from "../../img/user_pic.jpg";
import "../../style/Home/Post.sass";
import PostComment from "./PostComment";
import axios from "axios";

const Post = ({ post, getPosts }) => {
  const [postMenu, setPostMenu] = useState(false);
  const deletePost = async (id) => {
    await axios
      .delete(`/posts/${id}`)
      .then(async (res) => {
        await getPosts();
        setPostMenu(false);
      })
      .catch((err) => console.log("droga"));
  };
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
        <i
          className="fas fa-ellipsis-v menu-icon"
          onClick={() => setPostMenu(!postMenu)}
        ></i>
        {postMenu ? (
          <div className="post-menu">
            <ul>
              {/* <li>
                <div>
                  <i className="far fa-bookmark"></i>
                </div>{" "}
                Save post
              </li> */}
              {/* <li>
                <div>
                  <i className="far fa-eye-slash"></i>
                </div>{" "}
                Hide from
              </li> */}
              <li onClick={() => deletePost(post._id)}>
                <div>
                  <i className="far fa-trash-alt"></i>
                </div>{" "}
                Remove
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="description">
        <div className="description-top-part">
          <p className="title">{post.title}</p>
          <div>
            <p className="job-type">{post.category}</p>
            <p className="pay-rate">${post.salary}</p>
          </div>
        </div>
        <p className="description-bottom-part">{post.description}</p>
        <div className="tech-used">
          <p>HTML</p>
          <p>Sass</p>
          <p>React</p>
          <p>Node</p>
          <p>Sass</p>
        </div>
        {post.image ? (
          <div className="img-container">
            <img src={post.image} className="post-img" alt="" />
          </div>
        ) : null}
      </div>
      <hr />
      <PostComment />
    </div>
  );
};

export default Post;
