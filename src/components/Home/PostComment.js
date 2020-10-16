import React, { useState } from "react";
import "../../style/Home/Post.sass";
import userPic from "../../img/user_pic.jpg";

// REDUX
import { connect } from "react-redux";
import getCurrUser from "../../redux/actions/getCurrUser";
import axios from "axios";

const PostComment = ({ postID, currUser, getComments, handleCommentToggle, commentToggle }) => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState("");

  // GET current user from Redux
  const userID = currUser.user;

  const addComment = async (e) => {
    e.preventDefault();
    await axios
      .post("/comments/", { postID, userID, comment })
      .then((res) => setComment(""))
      .catch((err) => console.log(err));
    getComments();
  };
  console.log("current comment: ", comment);
  return (
    <div>
      <div className="comment-section">
        <p
          className={like ? "liked" : `like-btn`}
          onClick={() => setLike(!like)}
        >
          <i
            className={like ? "liked fas fa-thumbs-up" : "far fa-thumbs-up"}
          ></i>{" "}
          Like
        </p>
        <p
          className="comment-btn"
          onClick={() => handleCommentToggle()}
        >
          <i className="far fa-comment-alt"></i> Comment
        </p>
        <p className="share-btn">
          <i className="fas fa-share"></i> Share
        </p>
      </div>
      <hr />
      {commentToggle ? (
        <form onSubmit={(e) => addComment(e)} className="submit-commet-bar">
          <img src={userPic} alt="" />
          <div className="input-container">
            <input
              type="text"
              placeholder="Write a comment..."
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <i className="far fa-smile"></i>
          </div>
        </form>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currUser: state.getCurrUser,
});

export default connect(mapStateToProps, { getCurrUser })(PostComment);
