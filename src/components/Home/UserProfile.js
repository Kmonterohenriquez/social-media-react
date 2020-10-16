import React from 'react'
import userPic from '../../img/user_pic.jpg'
import '../../style/Home/UserProfile.sass'

const UserProfile = ({user}) => {
    const {firstName, lastName} = user
    return (
        <div className='UserProfile' >
            <div className="box-color"></div>
            <img src={userPic} alt="" className='user-picture'/>
    <h1 className="username">{firstName} {lastName}</h1>
            <p className="job-position">React Developer at Splay7</p>
            <hr />
            <p className="following">Following <span>13</span></p>
            <hr />
            <p className="followers">Followers <span>131</span></p>
            <hr />
            <p className="view-profile-btn">View Profile</p>
        </div>
    )
}

export default UserProfile
