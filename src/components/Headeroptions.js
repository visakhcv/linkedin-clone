import React from 'react'
import './headeroption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Headeroptions({Icon,title,avatar,onclick}) {

  const user= useSelector(selectUser)
  return (
    <div onClick={onclick} className='Headeroptions'>
        {Icon && <Icon style={{width:'25px',height:'25px'}} className='headeroption-icon'/>}
        {avatar && <Avatar className='headeroption-icon' style={{width:'25px',height:'25px'}} src={user?.photourl}>
          {user?.email[0]}
          </Avatar> }
        <p className='headeroption-title'>{title}</p>
    </div>
  )
}

export default Headeroptions