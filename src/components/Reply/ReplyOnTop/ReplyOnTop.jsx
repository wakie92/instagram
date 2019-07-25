import React from 'react';
import classes from './ReplyOnTop.module.scss'
import { Back } from 'libs/images';

const ReplyOnTop = () => {
  return (
    <div className = {classes.ReplyOnTop}>
      <img alt = "Back" src = {Back} style = {{marginLeft : '16px'}}/>
      <span>Reply</span>
      <img alt = "Back" src = {Back} style = {{visibility:'hidden', marginRight : '16px'}}/>
    </div>
  )
}

export default ReplyOnTop;