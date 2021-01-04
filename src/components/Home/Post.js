import React, { useState, useEffect } from "react";
import userPic from "../../img/user_pic.jpg";
import "../../style/Home/Post.sass";
import PostComment from "./PostComment";
import Comment from "../../components/Home/Comment";

import { connect } from "react-redux";
import getCurrUser from "../../redux/actions/getCurrUser";
import axios from "axios";

const Post = ({ currUser, post, getPosts, getComments, comments }) => {
  const [postMenu, setPostMenu] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);
  const [ userInfo, setUserInfo ] = useState([])
  const currUserID = currUser.user._id;
  const { userID } = post;
  
  // Filter all comments into just Local comments
  if (comments) {
    var localComments = comments.filter(
      (comment) => post._id === comment.postID
    );
  }

  useEffect(()=> {
    axios.get(`/user/info/${userID}`)
      .then( res => setUserInfo(res.data.data[0]))
      .catch( err => console.log(err))
  },[])
  
  const currUserOptions = currUserID === userID ? true: false;
  const handleCommentToggle = () => setCommentToggle(!commentToggle);

  const deletePost = async (id) => {
    await axios
      .delete(`/posts/${id}`)
      .then(async (res) => {
        await getPosts();
        setPostMenu(false);
      })
      .catch((err) => console.log(err));
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
              <li>
                <div>
                  <i className="far fa-bookmark"></i>
                </div>{" "}
                Save post
              </li>
              {currUserOptions? 
              <>
                <li>
                  <div>
                    <i className="far fa-eye-slash"></i>
                  </div>{" "}
                  Hide from
                </li>
                <li onClick={() => deletePost(post._id)}>
                  <div>
                    <i className="far fa-trash-alt"></i>
                  </div>{" "}
                  Delete
                </li>
              </>: null}
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
        <div className="info-bar" onClick={() => setCommentToggle(true)}>
          <div className="likes">12 likes</div>
          {localComments > "0" ? <p>{localComments.length} comments</p> : null}
        </div>
      </div>
      <hr />
      <PostComment
        postID={post._id}
        getComments={getComments}
        handleCommentToggle={handleCommentToggle}
        commentToggle={commentToggle}
      />

      {commentToggle
        ? localComments.map((comment) => (
            <>
              <Comment commentInfo={comment} />
            </>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currUser: state.getCurrUser,
});

export default connect(mapStateToProps, { getCurrUser })(Post);

