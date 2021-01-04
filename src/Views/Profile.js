import React from "react";
import "../style/Profile/Profile.sass";

// COMPONENTS
import HeaderProfile from "../components/Profile/HeaderProfile.js";
import ProfileSideBar from "../components/Profile/ProfileSideBar.js";
import PeopleAlsoViewed from "../components/Profile/PeopleAlsoViewed";

// REDUX
import { connect } from "react-redux";
import getCurrUser from "../redux/actions/getCurrUser";


const Profile = (props) => {
  const currUser = props.currUser.user;
  return (
    <div className="Profile ">
      <div className="Profile-container sm-container">
        <div className='main-side'>
          <HeaderProfile currUser={currUser}/>
          <ProfileSideBar />
        </div>
        <div className="side-bar">
          {/* <div className="UserFeeds-container">
            {menuToggle === "feed" ? <UserFeed currUser={currUser}/> : menuToggle === 'info'? <UserInfo />: <UserPortfolio />}
          </div> */}
          <PeopleAlsoViewed/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currUser: state.getCurrUser,
});

export default connect(mapStateToProps, { getCurrUser })(Profile);

