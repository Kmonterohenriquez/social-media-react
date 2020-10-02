import React from 'react'
import '../../style/Profile/ProfileSideBar.sass'

const ProfileSideBar = () => {
    return (
        <div className='ProfileSideBar'>
            <div className="ProfileSideBar-container">
                <div className="section about"><i className="fas fa-pen"></i><h1 className="title">About</h1><p className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, at explicabo vero expedita quibusdam necessitatibus? Suscipit corrupti nisi voluptate beatae nam libero, ipsam, exercitationem, eligendi accusantium et perferendis quidem? Et.</p></div>
                <div className="section websites"><i className="fas fa-pen"></i><h1 className="title">Websites</h1><p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque delectus neque minima magnam nostrum aut placeat sunt, provident ducimus pariatur itaque illum dolores iste sit recusandae suscipit quas necessitatibus.</p></div>
                
            </div>
        </div>
    )
}

export default ProfileSideBar
