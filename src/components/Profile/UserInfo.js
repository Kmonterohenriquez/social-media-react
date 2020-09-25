import React from 'react'
import '../../style/Profile/UserInfo.sass'

const UserInfo = () => {
    return (
        <div className='UserInfo'>
            <div className="UserInfo-container">
                <div className="section about"><h1 className="title">About</h1><p className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, at explicabo vero expedita quibusdam necessitatibus? Suscipit corrupti nisi voluptate beatae nam libero, ipsam, exercitationem, eligendi accusantium et perferendis quidem? Et.</p></div>
                <div className="section websites"><h1 className="title">Websites</h1><p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque delectus neque minima magnam nostrum aut placeat sunt, provident ducimus pariatur itaque illum dolores iste sit recusandae suscipit quas necessitatibus.</p></div>
                <div className="section"></div>
                <div className="section"></div>
                <div className="section"></div>
            </div>
        </div>
    )
}

export default UserInfo
