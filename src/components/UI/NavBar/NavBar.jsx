import React from "react";
import classes from "./NavBar.module.scss";
import img from 'libs/images';
import { NavLink } from 'react-router-dom';

const MainBottom = ({url}) => {
//좀더효율적인방법 생각
  return (
    <div className={classes.Bar}>
      <NavLink exact to = '/main'><img alt="main" src = {url === '/main' ?  img.Home : img.AHome } /></NavLink>
      <NavLink exact to = '/search'><img alt="search" src = {url === '/serach' ?  img.ASearch :img.Search }/></NavLink>
      <NavLink exact to = '/upload'><img alt="AddPhoto" src = {url === '/upload' ?  img.APhoto : img.AddPhoto }/> </NavLink>
      <NavLink exact to = '/follow'><img alt="activity" src = {url === '/follow' ?  img.Activity : img.Activity }/> </NavLink>
      <NavLink exact to = '/profile'><img alt="profile" src = {url === '/profile' ? img.AProfile : img.Profile} /> </NavLink>
    </div>
  );
};
export default MainBottom;
