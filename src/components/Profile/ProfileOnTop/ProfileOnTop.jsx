import React from 'react'
import classes from './ProfileOnTop.module.scss'
import { Back } from 'libs/images'
const ProfileOnTop = () => {
  return(
    <div className = {classes.ProfileOnTop}>
      <img alt = "Back" src = {Back} style = {{marginLeft : '16px'}}/>
      <span>Reply</span>
      <span src = {Back} style = {{color :'#4a90e2', marginRight : '16px'}}>Done</span>
    </div>
  )
}

export default ProfileOnTop;