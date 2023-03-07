import React, { useState } from 'react'
import './RightSide.css'
import Comment from '../../img/comment.png'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../trendCard/TrendCard'
import ShareModal from '../shareModal/ShareModal'

const RightSide = () => {
  const [modalOpen,setModalOpen]=useState(false)

  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} alt='' />
            <UilSetting/>
            <img src={Noti} alt='' />
            <img src={Comment} alt='' />
        </div>
        <TrendCard/>
        <button className='button r-button' onClick={()=>setModalOpen(true)}>Share
        <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </button>
    </div>
  )
}

export default RightSide