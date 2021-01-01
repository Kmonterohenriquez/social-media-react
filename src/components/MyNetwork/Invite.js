import React from 'react'
import '../../style/MyNetwork/Invite.sass'

const Invite = ({invite}) => {
    
    const { firstName, lastName, headline, userPicture } = invite;
    const userName = `${firstName} ${lastName}`;

    return (
        <div className='Invite pad-tb-2 flex flex-space-between flex-v-center'>
           <div className='flex flex-v-center'>
                <img src={userPicture} alt={userName} />
                <div className="mg-l-3 user-info">
                    <p className="name">{userName}</p>
                    <div className="headline">{headline}</div>
                </div>
           </div>
            <div className="Invite-response">
                <button>Ignore</button>
                <button className='mg-l-2 accept'>Accept</button>
            </div>
        </div>
    )
}

export default Invite
