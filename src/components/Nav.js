import React from "react";
import "../style/Nav.sass";
import userPic  from '../img/user_pic.jpg'
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-container md-container">
        <div className="left-side">
        <Link to='/'><i className="fab fa-weebly logo"></i></Link>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
              <i className="fas fa-search search"></i>
          </div>
        </div>
        <div className="right-side">
          <nav>
            <ul>
            <Link to="/dashboard"><li className='active'><i className="fas fa-home"></i>Home</li></Link>
              <Link to='/companies'><li><i className="far fa-building"></i>Companies</li></Link>
              <li><i className="fas fa-puzzle-piece"></i>Projects</li>
              <li><i className="fas fa-user-friends"></i>Profiles</li>
              <li><i className="fas fa-briefcase"></i>Jobs</li>
              <li><i className="far fa-comments"></i>Messages</li>
              <li><i className="far fa-bell"></i>Notification</li>
            </ul>
          </nav>
          <Link to="/profile">
            <div className="profile-menu">
              <div className="profile-picture">
                <img src={userPic} alt="" />
              </div>
              <p className="username">Kevin </p>
              <i className="fas fa-angle-down arrow-down"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
