import React from "react";
import "../../style/Home/PostAJobModal.sass";

function PostAJobModal({ modalHandler }) {
  return (
    <div className="PostAJobModal">
      <div className="header-container">
        <h1>Post A Job</h1>
        <i
          className="close-icon fas fa-times"
          onClick={() => modalHandler()}
        ></i>
      </div>
      <div className="inputs-container">
        <input type="text" placeholder="Title" />
        <div className="input-box">
          <select name="" id="category" placeholder="category">
            <option value="">Choose category</option>
            <option value="">Remote</option>
            <option value="">Full-time</option>
            <option value="">Contract</option>
            <option value="">Contract to Hire</option>
            <option value="">Temporary</option>
          </select>
          <input type="text" placeholder="Salary" />
        </div>
        <input type="text" placeholder="Skills" />
        <textarea placeholder="Brief description..." rows="5"></textarea>
        <button className="btn ">Post</button>
      </div>
    </div>
  );
}

export default PostAJobModal;
