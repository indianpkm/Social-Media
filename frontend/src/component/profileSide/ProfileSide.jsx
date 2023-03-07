import React from 'react'
import FollowerCard from '../followerCard/FollowerCard'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowerCard/>
    </div>
  )
}

export default ProfileSide