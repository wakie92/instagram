import React from 'react';
import classes from './LikeAndReply.module.scss';
import { Like, Comments } from 'libs/images'
const LikeAndReply = () => {
  return(
    <div className = {classes.IconBox}>
      <img alt = "like" src = {Like}/>
      <img alt = "comments" src = {Comments}/>
    </div>
  )
}

export default LikeAndReply;