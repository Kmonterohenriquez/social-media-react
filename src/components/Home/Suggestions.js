import React from 'react'
import '../../style/Home/Suggestions.sass'
import UserToAdd from './UserToAdd'
const Suggestions = () => {
    return (
        <div className='Suggestions'>
            <div className='Suggestions-top'>
                <h1>Suggestions</h1>
                <i className="fas fa-ellipsis-v menu-icon"></i>
            </div>
            <hr/>
            <div className="users-container">
                <UserToAdd />
                <UserToAdd />
                <UserToAdd />
                <UserToAdd />
            </div>
            <div className="Suggestions-bottom">
                <p>View More</p>
            </div>
        </div>
    )
}

export default Suggestions
