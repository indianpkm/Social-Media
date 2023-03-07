import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../profileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpen,setModalOpen]=useState(false)

  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpen(true)}/>
            <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            </div>
        </div>

        <div className="info">
            <span><b>Status</b></span>
            <span> Single</span>
        </div>

        <div className="info">
            <span><b>Lives in</b></span>
            <span> India</span>
        </div>

        <div className="info">
            <span><b>Experience</b></span>
            <span> Fresher</span>
        </div>

        <button className='button logout-button'>
            Logout
        </button>
    </div>
  )
}

export default InfoCard