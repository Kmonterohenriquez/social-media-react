import React from "react";
import "../style/Profile/Profile.sass";

// Components
import Cover from "../components/Profile/Cover";
import HeaderProfile from "../components/Profile/HeaderProfile.js"
import UserInfo from '../components/Profile/UserInfo.js'
import UserFeed from "../components/Profile/UserFeed"

const Profile = () => {
  return (
    <div className="Profile ">
      <div className="sm-container">
          <Cover />
          <HeaderProfile />
          <div className="splitter">
            <UserInfo />
            <UserFeed />
          </div>
      </div>
    </div>
  );
};

export default Profile;
