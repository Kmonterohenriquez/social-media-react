import React from 'react'
import '../style/MobileNav.sass'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <div className='MobileNav'>
            <nav className='sm-container grey-border'>
            <ul>
              <Link to="/dashboard"><li><i className="fas fa-home"></i></li></Link>
              <Link to="/my-network"><li><i className={`fas fa-user-friends`}></i></li></Link>
              <li><i className="fas fa-briefcase"></i></li>
              <li><i className="far fa-comments"></i></li>
              <li><i className="far fa-bell"></i></li>
            </ul>
          </nav>
        </div>
    )
}

MobileNav.propTypes = {

}

export default MobileNav
