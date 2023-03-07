import React from 'react'
import FollowerCard from '../followerCard/FollowerCard'
import InfoCard from '../infoCard/InfoCard'
import LogoSearch from '../logoSearch/LogoSearch'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowerCard/>
    </div>
  )
}

export default ProfileLeft