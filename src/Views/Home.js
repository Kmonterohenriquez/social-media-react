import React from "react";
import '../style/Home/Home.sass'

// Components
import UserProfile from "../components/Home/UserProfile";
import PostAJob from "../components/Home/PostAJob";
import Signup from "../components/Home/Signup";
import Post from "../components/Home/Post"
import Menu from "../components/Home/Menu"
import Suggestions from "../components/Home/Suggestions"
import TopJobs from "../components/Home/TopJobs";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container md-container">
        <div className="left">
          <UserProfile />
          <Suggestions />
          <Menu />
        </div>
        <div className="center">
          <PostAJob />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="right">
          <Signup />
          <TopJobs />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
