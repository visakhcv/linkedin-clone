import React,{ forwardRef} from 'react'
import './Posts.css'
import { Avatar } from '@mui/material'
import Inputoptions from './Inputoptions'
import {ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined}  from '@mui/icons-material'



const Posts= forwardRef(({key,name,description,message,photourl},ref) => {
  return (
    <div ref={ref} className='posts'>
        <div className="post-header">
            <Avatar src={photourl}> 
                {name[0]}
            </Avatar>
            <div className="post-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            
        </div>
        <div className="post-body">
            <p>{message}</p>
        </div>
        <div className="post-buttons">
            <Inputoptions Icon={ThumbUpAltOutlined} title='Like' />
            <Inputoptions Icon={ChatOutlined} title='Chat' />
            <Inputoptions Icon={ShareOutlined} title='Share' />
            <Inputoptions Icon={SendOutlined} title='Send' />
            
        </div>
    </div>
  )
})

export default Posts