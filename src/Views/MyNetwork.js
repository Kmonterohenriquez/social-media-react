import React from 'react'
import me from '../img/user_pic.jpg'
import Invite from '../components/MyNetwork/Invite'
import '../style/MyNetwork/MyNetwork.sass'
import PeopleAlsoViewed from '../components/Profile/PeopleAlsoViewed'

const MyNetwork = () => {

    const invitations = [
        {
            id: 1,
            userPicture: me,
            firstName: 'Kevin',
            lastName: 'Montero',
            headline: 'Front End Developer | MERN & PERN stacks'
        },
        {
            id: 2,
            userPicture: me,
            firstName: 'Kevin',
            lastName: 'Montero',
            headline: 'Front End Developer | MERN & PERN stacks'
        },
        {
            id: 3,
            userPicture: me,
            firstName: 'Kevin',
            lastName: 'Montero',
            headline: 'Front End Developer | MERN & PERN stacks'
        },
        
    ]; 

    return (
        <div className="MyNetwork pad-t-4">
            <div className='grid sm-container'>
                <PeopleAlsoViewed/>
                <div className='MyNetwork-container grey-border white-bg rounded-2'>
                   <div className='header flex-space-between '>
                        <p>Invitations</p>
                        <p>See all {invitations.length}</p>
                    </div>
                    <div className="invites">
                        {invitations.map(invite => (<Invite key={invite.id} invite={invite}/> ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyNetwork
