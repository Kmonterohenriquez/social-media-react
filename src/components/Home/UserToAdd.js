import React from 'react'
import '../../style/Home/UserToAdd.sass'
import userPic from '../../img/user_pic.jpg'

const UserToAdd = () => {
    return (
        <div className='UserToAdd'>
            <img src={userPic} alt=""/>
            <div className="user-info">
                <p className="username">Kevin Montero</p>
                <div className="job-position">PHP Developer</div>
            </div>
        </div>
    )
}

export default UserToAdd
