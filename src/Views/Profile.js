import React from "react";
import "../style/Profile/Profile.sass";

// COMPONENTS
import HeaderProfile from "../components/Profile/HeaderProfile.js";
import ProfileSideBar from "../components/Profile/ProfileSideBar.js";

// REDUX
import { connect } from "react-redux";
import getCurrUser from "../redux/actions/getCurrUser";


const Profile = (props) => {
  const [menuToggle, setMenuToggle] = React.useState("feed");
  const currUser = props.currUser.user;
  const handleMenu = (value) => {
    setMenuToggle(value);
  };
  return (
    <div className="Profile ">
      <div className="sm-container">
        <HeaderProfile handleMenu={handleMenu} currUser={currUser}/>
        <div className="splitter">
          <ProfileSideBar />
          {/* <div className="UserFeeds-container">
            {menuToggle === "feed" ? <UserFeed currUser={currUser}/> : menuToggle === 'info'? <UserInfo />: <UserPortfolio />}
          </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currUser: state.getCurrUser,
});

export default connect(mapStateToProps, { getCurrUser })(Profile);

