import React from 'react'
import classes from './ContentHeader.module.scss'
import {Avatar, Pin} from 'libs/images';
const ContentHeader = () => {
  return(
    <div className = {classes.ContentHeader}>
      <img alt="avatar" src = {Avatar}/>
      <div className = {classes.ContentInfo}>
        <p>sarahannloreth</p>
        <p><img alt = "pin" src = {Pin}/> Kauai, Hawaii</p>
      </div>
      <div className = {classes.OvalBox}>
        <div className = {classes.Oval}/>
        <div className = {classes.Oval}/>
        <div className = {classes.Oval}/>
      </div>
    </div>
  )
}
export default ContentHeader;