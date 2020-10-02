import React from "react";
import me from "../../img/user_pic.jpg";
import "../../style/Profile/HeaderProfile.sass";

const HeaderProfile = ({ handleMenu }) => {
  return (
    <div className="HeaderProfile">
      <div className="profile-image-container">
        <i class="fas fa-camera"></i>
        <img src={me} alt="" />
      </div>
      <div className="HeaderProfile-current-job">React Developer</div>
      <div className="section-container">
        <p className="section" onClick={()=>handleMenu('feed')}><i className="far fa-newspaper"></i>Feed</p>
        <p className="section" onClick={()=>handleMenu('info')}><i className="fas fa-info-circle"></i>Info</p>
        <p className="section" onClick={()=>handleMenu('portfolio')}><i className="fas fa-puzzle-piece"></i>Portfolio</p>
      </div>
    </div>
  );
};

export default HeaderProfile;