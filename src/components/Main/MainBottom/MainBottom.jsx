import React from "react";
import classes from "./MainBottom.module.scss";
import home from 'libs/home.png'
import search from 'libs/search.png'
import AddPhoto from 'libs/photo.png'
import activity from 'libs/activity.png'
import profile from 'libs/profile.png'
const MainBottom = () => {
  return (
    <div className={classes.Bar}>
      <img alt="main" src = {home} />
      <img alt="search" src = {search}/>
      <img alt="AddPhoto" src = {AddPhoto}/>
      <img alt="activity" src = {activity}/>
      <img alt="profile" src = {profile}/>
    </div>
  );
};
export default MainBottom;
