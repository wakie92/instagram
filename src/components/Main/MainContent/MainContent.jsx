import React from 'react';
import classes from './MainContent.module.scss'
import ContentHeader from './ContentHeader';
import ContentImg from './ContentImg';

const MainContent = () => {

  return(
    <div className = {classes.ContentBox}>
     <ContentHeader/>
     <ContentImg/>
    </div>
  )
}
export default MainContent;
