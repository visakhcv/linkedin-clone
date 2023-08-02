import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {

   

    const dispatch= useDispatch()
    const logoutofApp=()=>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className='main-header'>
            <div className='icon-div'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className='header-search'>
                <SearchIcon/>
                <input type="text" />
                </div>
                
            </div>
            <div className='header-right'>
                <Headeroptions Icon={HomeIcon} title="Home"/>
                <Headeroptions Icon={SupervisorAccountIcon} title="My Network"/>
                <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
                <Headeroptions Icon={ChatIcon} title="Messaging"/>
                <Headeroptions Icon={NotificationsIcon} title="Notifications"/>
                <Headeroptions avatar={true} onclick={logoutofApp}  title='me'  />
                
            </div>
        </div>


    )
}

export default Header