import React, { useState, useEffect } from "react";
import "../style/Home/Home.sass";

// COMPONENTS
import UserProfile from "../components/Home/UserProfile";
import PostAJob from "../components/Home/PostAJob";
import Signup from "../components/Home/Signup";
import Post from "../components/Home/Post";
import Menu from "../components/Home/Menu";
import Suggestions from "../components/Home/Suggestions";
import TopJobs from "../components/Home/TopJobs";
import PostAJobModal from "../components/Home/PostAJobModal";

// REDUX
import { connect } from "react-redux";
import getCurrUser from "../redux/actions/getCurrUser";
import axios from "axios";

const Home = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [posts, setPosts] = useState([]);

  const modalHandler = () => setModalToggle(!modalToggle);
  async function getPosts() {
    await axios
      .get("/posts/")
      .then((res) => {
        setPosts(res.data.data.reverse());
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPosts();
    console.log("Redered");
  }, []);
  return (
    <div className="Home">
      {modalToggle ? <div className="dark"></div> : null}
      <div className="Home-container md-container">
        <div className="left">
          <UserProfile />
          <Suggestions />
          <Menu />
        </div>
        <div className="center">
          {modalToggle ? (
            <div className="Modal-container">
              <PostAJobModal modalHandler={modalHandler} getPosts={getPosts} />
            </div>
          ) : null}
          <PostAJob modalHandler={modalHandler} />
          {posts.length ? (
            posts.map((post) => (
              <div key={post._id}>
                <Post post={post} getPosts={getPosts} />
              </div>
            ))
          ) : (
            <h1 className='no-post'>No Post Found</h1>
          )}
        </div>
        <div className="right">
          <Signup />
          <TopJobs />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getCurrUser: state.getCurrUser,
});

export default connect(mapStateToProps, { getCurrUser })(Home);
