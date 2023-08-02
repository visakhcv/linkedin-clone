import React, { useEffect, useState } from 'react'
import './Maincontent.css'
import CreateIcon from '@mui/icons-material/Create';
import Inputoptions from './Inputoptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from './Posts';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Maincontent() {

  const user=useSelector(selectUser)

  const [input,setInput]= useState("")

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
      setPosts(
        snapshot.docs.map((doc)=>({
          id: doc.id,
          data: doc.data()
        }))
      )
    )
    console.log(posts);
  },[])


  const sendpost=(e)=>{
    e.preventDefault()
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message : input,
      photourl : user.photourl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <div className='feed'>
      <div className="input-container">
        <div className="feed-input">
          <CreateIcon/>
          <form >
            <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
            <button onClick={sendpost} type='submit'>send</button>
          </form>
        </div>
        <div className="inputoptions-div">
          <Inputoptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <Inputoptions Icon={SubscriptionsIcon} title='Video' color='#7FC15E' />
          <Inputoptions Icon={EventNoteIcon} title='Event' color='#E7A33E' />
          <Inputoptions Icon={CalendarViewDayIcon} title='Write article' color='#e16745' />
        </div>
      </div>

      <FlipMove>
      {posts.map(({ id, data: {name,description,message,photourl}})=>(
        <Posts key={id} name={name} description={description} message={message} photourl={photourl}/>
      ))}
      </FlipMove>
      
      

    </div>
  )
}

export default Maincontent