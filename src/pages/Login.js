import React, { useState } from 'react'
import { auth } from '../firebase'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'


function Login() {

    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [profile,setProfile] = useState('')
    const dispatch=useDispatch()

    

    const loginToApp= (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email : userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profile:userAuth.user.photourl
            }))
        })
        .catch((error)=> alert(error))
    }

    const registerToApp=()=>{
        if(!name){
            alert('enter your full name')
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photourl: profile
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photourl:profile
                }))
            })
        }) .catch(error=> alert(error))

    }
  return (
    <div className='login-div'>
        <div className='login-div-1'>
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="" />
        </div>
        <form>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Full name (Required if registering)' />
            <input type="text" value={profile} onChange={e=>setProfile(e.target.value)}  placeholder='Profile picure (optional)' />
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
            <input type="password" value={password} onChange={e=> setPassword(e.target.value)}  placeholder='Password'/>
            <a href="#">Forgot Password?</a>
            <button onClick={loginToApp} type='submit'>Sign In</button>
        </form>
        <p>New to LinkedIn? <a href="#" onClick={registerToApp} >Register here</a> </p>
        </div>
        
    </div>
  )
}

export default Login