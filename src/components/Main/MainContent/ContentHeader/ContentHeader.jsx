import React from 'react'
import classes from './ContentHeader.module.scss'
import img from 'libs/images';
const ContentHeader = ({pid_user}) => {
  return(
    <div className = {classes.ContentHeader}>
      <img alt="avatar" src = {img.Avatar}/>
      <div className = {classes.ContentInfo}>
        <p>{pid_user}</p>
        <p style = {{visibility : "hidden"}}>
          <img alt = "pin" src = {img.Pin}/> Kauai, Hawaii
        </p>
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