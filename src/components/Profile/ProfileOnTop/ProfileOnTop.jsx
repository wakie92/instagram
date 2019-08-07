import React from 'react'
import classes from './ProfileOnTop.module.scss'
import img from 'libs/images'
const ProfileOnTop = () => {
  return(
    <div className = {classes.ProfileOnTop}>
      <img alt = "Back" src = {img.Back} style = {{marginLeft : '16px'}}/>
      <span>Profile</span>
      <span src = {img.Back} style = {{color :'#4a90e2', marginRight : '16px'}}>Done</span>
    </div>
  )
}

export default ProfileOnTop;