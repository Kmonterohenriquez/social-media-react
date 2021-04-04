import React from "react";
import "../style/Nav.sass";
import userPic  from '../img/user_pic.jpg'
import { Link, withRouter } from "react-router-dom"

const Nav = (props) => {
  let currPage = props.location.pathname;

  React.useEffect(() => { 
  },[currPage])

  return (
    <div className="Nav">
      <div className="Nav-container md-container">
        <div className="left-side">
          <Link to='/dashboard'><i className="fab fa-weebly logo"></i></Link>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
              <i className="fas fa-search search"></i>
          </div>
        </div>
        <div className="right-side mg-l-3">
          <nav>
            <ul>
              <Link to="/dashboard"><li className={currPage === "/dashboard"? "active": ""}><i className="fas fa-home"></i><p>Home</p></li></Link>
              <Link to="/my-network"><li className={currPage === "/my-network"? "active": ""}><i className={`fas fa-user-friends`}></i><p>My Network</p></li></Link>
              <li><i className="fas fa-briefcase"></i><p>Jobs</p></li>
              <li><i className="far fa-comments"></i><p>Messages</p></li>
              <li><i className="far fa-bell"></i><p>Notification</p></li>
              <Link to="/profile">
                <div className={currPage === "/profile"? "active profile-menu": " profile-menu"} >
                  <div className="profile-picture">
                    <img src={userPic} alt="" />
                  </div>
                  <p className="me">Me</p>
                  <i className="fas fa-angle-down arrow-down"></i>
                </div>
              </Link>
              </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Nav);
