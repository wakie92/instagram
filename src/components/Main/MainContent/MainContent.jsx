import React from 'react';
import classes from './MainContent.module.scss'
import ContentHeader from './ContentHeader';
import ContentImg from './ContentImg';
import LikeAndReply from './LikeAndReply';
import ContentBox from './ContentBox';

const MainContent = () => {

  return(
    <div className = {classes.ContentBox}>
     <ContentHeader/>
     <ContentImg/>
     <LikeAndReply/>
     <ContentBox/>
    </div>
  )
}
export default MainContent;
