import React, {useEffect, useState} from "react";
import Axios from 'axios'
import '../../style/Home/Comment.sass'

const Comment = ({ commentInfo }) => {
  const { comment, userID } = commentInfo;
  const [ userInfo, setUserInfo ] = useState([]);
  const { firstName, lastName, profileImage } = userInfo;

  //GET user info
  useEffect(()=>(
    getUserInfo()
  ),[]);
  const getUserInfo =()=> {
    Axios.get(`/user/info/${userID}`)
      .then( res => setUserInfo(res.data.data[0]))
      .catch( err => console.log(err))
  }
  return (
    <div className="Comment">
      <img src={profileImage} className="user-pic" alt=""/>
      <div className='Comment-info'>
        <h3>{firstName} {lastName}</h3>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
