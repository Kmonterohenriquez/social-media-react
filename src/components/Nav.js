import React from "react";
import "../style/Nav.sass";
import userPic  from '../img/user_pic.jpg'
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-container md-container">
        <div className="left-side">
        <i className="fab fa-weebly logo"></i>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
              <i className="fas fa-search search"></i>
          </div>
        </div>
        <div className="right-side">
          <nav>
            <ul>
              <li className='active'><i className="fas fa-home"></i>Home</li>
              <li><i className="far fa-building"></i>Companies</li>
              <li><i className="fas fa-puzzle-piece"></i>Projects</li>
              <li><i className="fas fa-user-friends"></i>Profiles</li>
              <li><i className="fas fa-briefcase"></i>Jobs</li>
              <li><i className="far fa-comments"></i>Messages</li>
              <li><i className="far fa-bell"></i>Notification</li>
            </ul>
          </nav>
          <div className="profile-menu">
            <div className="profile-picture">
              <img src={userPic} alt="" />
            </div>
            <p className="username">Kevin </p>
            <i className="fas fa-angle-down arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
