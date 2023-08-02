import React from 'react'
import './sidebar.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Avatar } from '@mui/material';

function Sidebar() {

  const user=useSelector(selectUser)


  const recentitem = (topic)=>(
    <div className='sidebar-recentitem'>
      <span className='sidebar-hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <>
    <div className='side-profile'>
        <div className='bg-image'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tpI3lj6bVf4Cm4-6gQCLunTnFJEc0AjGnoJmSrT9&s" alt="" />
        </div>
        <div className='side-userpic'>
        <Avatar style={{width:'50px',height:'50px',backgroundSize:'cover'}} src={user.photourl}>
          {user.email[0]}
        </Avatar>
        </div>
        <h3>{user.displayName}</h3>
        <h4>{user.email}</h4>

        <div className='sidebar-stats'>
            <div className='sidebar-stat'>
            <p> Who's viewed your profile </p>
            <span className='stat-views'>15000</span>
            </div>
            <div className='sidebar-stat'>
            <p> Impressions of your post </p>
            <span  className='stat-views'><p>15000</p></span>
            </div>
        
        </div>
        <div className='myitems'>
           <i><BookmarkIcon/></i> 
           <p>My items</p>
        </div>
    </div>

      <div className='sidebar-bottom'>
        {recentitem('Reactjs')}
        {recentitem('Angular')}
        {recentitem('India')}
        {recentitem('Webtech')}
        {recentitem('Nodejs')}
      </div>
    </>
  )
}

export default Sidebar