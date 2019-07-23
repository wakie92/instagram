import React from 'react';
import classes from './Main.module.scss';
import Logo from 'components/UI/Logo';
import MainContent from './MainContent';
const Main = ({children}) => {
  const sty = {paddingTop : '10px', paddingBottom : `13px`}
  return(
    <div>
      <Logo sty = {sty}/>
      <MainContent/>
      {children}
    </div>
  )
}
export default Main;