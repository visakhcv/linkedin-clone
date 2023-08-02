import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './pages/Login';
import { auth } from './firebase';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Maincontent from './components/Maincontent';
import Rightsidebar from './components/Rightsidebar'

function App() {
  const user=  useSelector(selectUser)
  const dispatch= useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(
          login({
                    email:userAuth.email,
                    uid: userAuth.uid,
                    displayName:userAuth.displayName,
                    photourl:userAuth.photoURL 
          })
        )

      }else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className='app'>
      {/* {header} */}

      <Header/>

      {!user?  <Login/> :(
        <div className='main-feed'>
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="main-content">
            <Maincontent/>
          </div>
          <div className="rightsidebar">
            <Rightsidebar/>
          </div>
        </div>
      ) }
    </div>
  );
}

export default App;
