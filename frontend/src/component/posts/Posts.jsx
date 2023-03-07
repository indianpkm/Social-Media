import React from 'react'
import Post from '../post/Post'
import { PostData } from '../../data/PostData'
import './Posts.css'

const Posts = () => {
  return (
    <div className='Posts'>
        {
            PostData.map((post,id)=>{
                return <Post data={post} id={id}/>
            })
        }
    </div>
  )
}

export default Posts