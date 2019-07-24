import React from 'react';
import classes from './ContentBox.module.scss';

const ContentBox = () => {
  return (
    <div className = {classes.ContentBox}>
      <span>sarahannloreth</span>
      <text className = {classes.Content}>the edge of New Zealand! we’re so excited! i will remember this amazing view forever.</text>
      <p className = {classes.HashTag}>#newzealand #sight #trip #family #friends #yolo</p>
      <p>View all comments</p>
    </div>
  )
}
export default ContentBox;