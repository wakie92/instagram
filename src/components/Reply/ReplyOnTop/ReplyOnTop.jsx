import React from 'react';
import classes from './ReplyOnTop.module.scss'
import img from 'libs/images';

const ReplyOnTop = () => {
  return (
    <div className = {classes.ReplyOnTop}>
      <img alt = "Back" src = {img.Back} style = {{marginLeft : '16px'}}/>
      <span>Reply</span>
      <img alt = "Back" src = {img.Back} style = {{visibility:'hidden', marginRight : '16px'}}/>
    </div>
  )
}

export default ReplyOnTop;