import React from 'react'
import '../../style/Home/TopJobs.sass'
import TopJob from './TopJob'
const TopJobs = () => {
    return (
        <div className='TopJobs'>
            <div className="TopJobs-top">
                <h1>Top Jobs</h1>
                <i className="fas fa-ellipsis-v menu-icon"></i>
            </div>
            <hr/>

            <div className="TopJobs-container">
                <TopJob />
                <TopJob />
                <TopJob />
                <TopJob />
            </div>
        </div>
    )
}

export default TopJobs
