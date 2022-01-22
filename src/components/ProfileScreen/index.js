import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from "../../features/userSlice"
import { auth } from '../../firebase'
import Navbar from '../Navbar'
import './ProfileScreen.css'

function ProfileScreen() {
  const user = useSelector(selectUser)
  return (
    <div className="profile-screen">
      <Navbar/>
      <div className="profile-screen__body">
        <h1>Edit Profile</h1>
        <div className="profile-screen__info">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" alt="" />
          <div className="profile-screen__details">
            <h2>{user.email}</h2>
            <div className="profile-screen__plans">
              <h3>Plans</h3>
              <button 
                onClick={() => auth.signOut()}
                className="profile-screen__signOut">Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
