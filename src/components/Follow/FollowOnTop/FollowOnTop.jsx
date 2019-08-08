import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './FollowOnTop.module.scss';
import img from 'libs/images'

const FollowOnTop = () => {
  return (
    <div className = {classes.FollowOnTop}>
      <NavLink exact to = '/main' ><img alt = "Back" src = {img.Back} style = {{marginLeft : '16px'}}/></NavLink>
      <span>Follow</span>
      <span src = {img.Back} style = {{color :'#4a90e2', marginRight : '16px'}}>Done</span>
    </div>
  )
}
export default FollowOnTop;