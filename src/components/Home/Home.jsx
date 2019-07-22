import React from "react";
import Logo from "../UI/Logo";
import classes from './Home.module.scss';
const Home = ({ children , matchData}) => {
  console.log(matchData);
  let styled = matchData==='/' ? {height : `100px`} : null;
  console.log(styled);
  return (
    <>
      <Logo />
      <div className = {classes.Container} style = {styled}>
        {children}
      </div>
    </>
  );
};
export default Home;
