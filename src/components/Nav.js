import React from "react";
import "../style/Nav.sass";
import userPic  from '../img/user_pic.jpg'
import { Link } from "react-router-dom"

const Nav = () => {
  const [state, setState] =React.useState({
    showNotifications: false
  })
  return (
    <div className="Nav">
      <div className="test" onClick={()=> setState({showNotifications: !state.showNotifications})}></div>
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
            <Link to="/dashboard"><li className='active'><i className="fas fa-home"></i><p>Home</p></li></Link>
              <li><i className="fas fa-user-friends"></i><p>My Network</p></li>
              <li><i className="fas fa-briefcase"></i><p>Jobs</p></li>
              <li><i className="far fa-comments"></i><p>Messages</p></li>
              <li onClick={()=> setState({showNotifications: !state.showNotifications})}><i className="far fa-bell"></i><p>Notification</p> 
              {state.showNotifications?<ul>
                <li>example</li>
                <li>example</li>
                <li>example</li>
              </ul>: null}</li>
            </ul>
          </nav>
          <Link to="/profile">
            <div className="profile-menu">
              <div className="profile-picture">
                <img src={userPic} alt="" />
              </div>
              <p className="me">Me</p>
              <i className="fas fa-angle-down arrow-down"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
