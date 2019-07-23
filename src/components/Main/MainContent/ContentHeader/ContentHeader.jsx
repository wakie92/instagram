import React from 'react'
import classes from './ContentHeader.module.scss'
import AvatarImg from './4ff36bf59e.svg'
const ContentHeader = () => {
  return(
    <div className = {classes.ContentHeader}>
      <img alt="avatar" src = {AvatarImg}/>
      <div className = {classes.ContentInfo}>
        <p>sarahannloreth</p>
        <p>Kauai, Hawaii</p>
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