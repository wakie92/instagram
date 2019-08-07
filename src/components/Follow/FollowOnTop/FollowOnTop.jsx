import React from 'react';
import classes from './FollowOnTop.module.scss';
import img from 'libs/images'

const FollowOnTop = () => {
  return (
    <div className = {classes.FollowOnTop}>
      <img alt = "Back" src = {img.Back} style = {{marginLeft : '16px'}}/>
      <span>Follow</span>
      <span src = {img.Back} style = {{color :'#4a90e2', marginRight : '16px'}}>Done</span>
    </div>
  )
}
export default FollowOnTop;