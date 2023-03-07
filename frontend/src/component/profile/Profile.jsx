import React from 'react'
import PostSide from '../postSide/PostSide'
import ProfileCard from '../profileCard/ProfileCard'
import ProfileLeft from '../profileLeft/ProfileLeft'
import RightSide from '../righSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="ProfileCenter">
            <ProfileCard/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile