import React from 'react';
import classes from './Follow.module.scss'
import FollowOnTop from './FollowOnTop';


const Follow = ({NavBar}) => {
  return (
    <>
      <FollowOnTop/>
      <div className = {classes.FollowBox}>
        
      </div>
      {NavBar}
    </>
  )
}

export default Follow;
