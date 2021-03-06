import React, { useState } from "react";
import axios from "axios";
import "../../style/Home/PostAJobModal.sass";
import { getSignedRequest, uploadFile } from '../../helpers/AWS'

// AWS
import Dropzone from 'react-dropzone'

function PostAJobModal({ modalHandler, getPosts, userID }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [skills, setSkills] = useState("");
  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");

function createPost() {
    axios
      .post("/posts", { title, image, skills, salary, category, description, userID })
      .then((res) => {
        // Handle Modal to close it when a Post is created.
        modalHandler();
        // Refresh page with the One just created.
        getPosts();
      })
      .catch((err) => console.log(err));
  };

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
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
        /> */}
        <Dropzone
          onDropAccepted={getSignedRequest}
          accept='image/*'
          multiple={false}
          className='test'
        >
          {({ getRootProps, getInputProps }) => (
            <div className='container'>
              <div
                {...getRootProps({
                  className: 'dropzone',
                  onDrop: event => event.stopPropagation()
                })}
              >
                <input {...getInputProps()} />
                <div className='camera-container'>
                  <i className='fas fa-camera'></i>
                </div>
              </div>
            </div>
          )}
        </Dropzone>
        <div className="input-box">
          <select
            name=""
            id="category"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choose category</option>
            <option value="remote">Remote</option>
            <option value="full-time">Full-time</option>
            <option value="contract">Contract</option>
            <option value="contract to hire">Contract to Hire</option>
            <option value="temporary">Temporary</option>
          </select>
          <input
            type="text"
            placeholder="Salary"
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Skills"
          onChange={(e) => setSkills(e.target.value)}
        />
        <textarea
          placeholder="Brief description..."
          rows="5"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="btn " onClick={() => createPost()}>
          Post
        </button>
      </div>
    </div>
  );
}

export default PostAJobModal;
