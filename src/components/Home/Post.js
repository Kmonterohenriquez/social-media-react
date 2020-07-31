import React from "react";
import userPic from "../../img/user_pic.jpg";
import "../../style/Home/Post.sass";

const Post = () => {
  return (
    <div className="Post">
      <div className="top-part">
        <div className="user-info">
          <img src={userPic} alt="" className="user-pic" />
          <div>
            <p className="username">Kevin Montero</p>
            <p className="time-posted">
              <i className="clock"></i> 3 min ago
            </p>
          </div>
        </div>
        <i className="fas fa-ellipsis-v menu-icon"></i>
      </div>
      <div className="description">
        <div className="description-top-part">
          <p className="title">Full-Stack Web Developer</p>
          <div>
            <p className="job-type">Full Time</p>
            <p className="pay-rate">$30/hr</p>
          </div>
        </div>
        <p className="description-bottom-part">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          distinctio asperiores, voluptatem quia placeat rem eveniet cum, quod
          natus repudiandae accusantium totam, atque nihil recusandae.
          Accusantium sed rem rerum aliquam!
        </p>
      </div>
      <div className="tech-used">
        <p>HTML</p>
        <p>Sass</p>
        <p>React</p>
        <p>Node</p>
        <p>Sass</p>
        
      </div>
    </div>
  );
};

export default Post;
