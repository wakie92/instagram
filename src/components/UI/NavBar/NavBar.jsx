import React from "react";
import classes from "./NavBar.module.scss";
import { Home, Search, AddPhoto, Activity, Profile, APhoto, ASearch, AProfile, AHome } from 'libs/images';
import { NavLink } from 'react-router-dom';

const MainBottom = ({url}) => {
//좀더효율적인방법 생각
  return (
    <div className={classes.Bar}>
      <NavLink exact to = '/main'><img alt="main" src = {url === '/main' ?  Home : AHome } /></NavLink>
      <NavLink exact to = '/search'><img alt="search" src = {url === '/serach' ?  ASearch :Search }/></NavLink>
      <NavLink exact to = '/upload'><img alt="AddPhoto" src = {url === '/upload' ?  APhoto : AddPhoto }/> </NavLink>
      <NavLink exact to = '/reply'><img alt="activity" src = {url === '/reply' ?  Activity : Activity }/> </NavLink>
      <NavLink exact to = '/profile'><img alt="profile" src = {url === '/profile' ? AProfile : Profile} /> </NavLink>
    </div>
  );
};
export default MainBottom;
