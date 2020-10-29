import React, { useState, useEffect } from "react";
import loading from "../img/loading.gif";
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

const Home = (props) => {
  const [modalToggle, setModalToggle] = useState(false);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const user = props.currUser.user;

  const modalHandler = () => setModalToggle(!modalToggle);
  async function getPosts() {
    await axios
      .get("/posts/")
      .then((res) => {
        setPosts(res.data.data.reverse());
      })
      .catch((err) => console.log(err));
  }

  const getComments = async () => {
    await axios
      .get("/comments/")
      .then((res) => setComments(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
    getComments();
  }, []);

  return (
    <div className="Home">
      {modalToggle ? <div className="dark"></div> : null}
      <div className="Home-container md-container">
        <div className="left">
          <UserProfile user={user} />
          <Suggestions />
          <Menu />
        </div>
        <div className="center">
          {modalToggle ? (
            <div className="Modal-container">
              <PostAJobModal
                modalHandler={modalHandler}
                getPosts={getPosts}
                userID={user._id}
              />
            </div>
          ) : null}
          <PostAJob modalHandler={modalHandler} />
          {posts.length ? (
            posts.map((post) => (
              <div key={post._id}>
                <Post post={post} getPosts={getPosts} getComments={getComments} comments={comments} />
              </div>
            ))
          ) : (
            <div className="loading">
              <img className="loading-gif" src={loading} alt="Loading post" />
            </div>
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
  currUser: state.getCurrUser,
});

export default connect(mapStateToProps, { getCurrUser })(Home);
