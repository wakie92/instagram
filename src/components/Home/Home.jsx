import React, { useEffect, useState }  from "react";
import Logo from "../UI/Logo";
import classes from './Home.module.scss';

const Home = ({ children , matchData, history}) => {
  const [isLogged, setIsLogged] = useState('');
  let styled = matchData==='/' ? {height : `100px`} : null;

  useEffect(() => {
    const isLogged = sessionStorage.getItem('userData')
    setIsLogged(isLogged);
    console.log(isLogged)
    if(isLogged) {
      history.push('/main');
    }
  },[history])
  return (
    <>
    {
      isLogged === null
      ? 
      <>
        <Logo />
        <div className = {classes.Container} style = {styled}>
          {children}
        </div>
      </> 
    : null
      
    }
    </>
  );
};
export default Home;
