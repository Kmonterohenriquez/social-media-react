import React from 'react'
import '../../style/Profile/PeopleAlsoViewed.sass'
import me from '../../img/user_pic.jpg'

const PeopleAlsoViewed = () => {

    let usersInfo = [
        {
            id: 1,
            picture: me,
            firstName: "Maryfer",
            lastName: "Garcia",
            currJob: "Sr. Designer"
        },
        {
            id: 2,
            picture: me,
            firstName: "Mariela",
            lastName: "Robles",
            currJob: "AWS Engineer"
        },
        {
            id: 3,
            picture: me,
            firstName: "Onil",
            lastName: "Rodriguez",
            currJob: "Data Scientist"
        },
        // {
        //     id: 1,
        //     picture: me,
        //     firstName: "Maryfer",
        //     lastName: "Garcia",
        //     currJob: "Sr. Designer"
        // },
        // {
        //     id: 2,
        //     picture: me,
        //     firstName: "Mariela",
        //     lastName: "Robles",
        //     currJob: "AWS Engineer"
        // },
        // {
        //     id: 3,
        //     picture: me,
        //     firstName: "Onil",
        //     lastName: "Rodriguez",
        //     currJob: "Data Scientist"
        // }
    ]
    return (
        <div className='PeopleAlsoViewed white-bg grey-border pad-4 rounded-2'>
            <p className="b-sm-font mg-b-2">People also viewed</p>
            {usersInfo.map(user => (
                <div className="user flex-v-center splitter mg-b-2"key={user.id}>
                   <div className="flex-v-center mg-b-2">
                        <img className="rounded-2 mg-r-2" src={user.picture} alt={`${user.firstName} ${user.lastName}`} />
                        <div className="info">
                            <p>{user.firstName} {user.lastName}</p>
                            <p>{user.currJob}</p>
                        </div>
                   </div>
                    <i className="fas fa-user-plus"></i>
                </div>
            ))}
        </div>
    )
}



export default PeopleAlsoViewed
