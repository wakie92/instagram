import React from "react";
import classes from "./NavBar.module.scss";
import { Home, Search, AddPhoto, Activity, Profile } from 'libs/images';

const MainBottom = () => {
  return (
    <div className={classes.Bar}>
      <img alt="main" src = {Home} />
      <img alt="search" src = {Search}/>
      <img alt="AddPhoto" src = {AddPhoto}/>
      <img alt="activity" src = {Activity}/>
      <img alt="profile" src = {Profile}/>
    </div>
  );
};
export default MainBottom;
