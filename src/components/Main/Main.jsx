import React from "react";
import classes from "./Main.module.scss";
import MainContent from "./MainContent";
const Main = ({ Logo, NavBar }) => {
  return (
    <div className={classes.MainSector}>
      {Logo}
      <div className  = {classes.Container}>
        <MainContent />
        <MainContent />
      </div>
      {NavBar}
    </div>
  );
};
export default Main;
